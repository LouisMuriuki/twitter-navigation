import { Dimensions, StyleSheet, Switch, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";
import { closeBottomSheet } from "../store/slices/modalSlice";
import RadioButton from "./RadioButton";
import { useColorScheme } from "nativewind";
import colors from "../themes/colors";
import { COLORSCHEME } from "../data/DataStore";
import { darkMode } from "../store/slices/colorSchemeModeSlice";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = SCREEN_HEIGHT / 1.5;
const MIN_TRANSLATE_Y = SCREEN_HEIGHT / 5;
export default function Bottomsheet() {
  const { colorScheme } = useColorScheme();
  const modal = useSelector((state) => state.ModalSlice.colorSchemeBottomSheet);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const dispatch = useDispatch();
  const gesture = Gesture.Pan()
    .onStart((e) => {
      context.value = { y: translateY.value };
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y);
    })
    .onEnd((e) => {
      if (translateY.value > -MIN_TRANSLATE_Y) {
        translateY.value = withSpring(SCREEN_HEIGHT);
      }
      if (translateY.value < -MIN_TRANSLATE_Y) {
        translateY.value = withSpring(-MAX_TRANSLATE_Y);
      }
    });

  /**
   * Animated style for the bottom sheet
   */
  const reanimatedBottomStyle = useAnimatedStyle((e) => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const scrollTo = (destination: number) => {
    "worklet";
    translateY.value = withSpring(destination, { damping: 50 });
  };
  const setColorScheme = (type: string) => {
    switch (type) {
      case "dark":
        dispatch(darkMode("dark"));
        break;
      case "light":
        dispatch(darkMode("light"));
        break;

      default:
        break;
    }
  };

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        className="dark:bg-dark bg-white"
        style={[styles.bottomsheet_container, reanimatedBottomStyle]}
      >
        <View
          style={[
            styles.line,
            colorScheme === "dark"
              ? { backgroundColor: colors.white }
              : { backgroundColor: colors.dark },
          ]}
        />
        <View className="m-5">
          <Text className="dark:text-white text-dark mb-5" style={styles.Text}>
            Dark mode
          </Text>
        </View>
        <View style={styles.border} />
        {COLORSCHEME.map((scheme, i) => {
          return (
            <RadioButton
              key={i}
              index={i}
              scheme={scheme}
              setColorScheme={setColorScheme}
            />
          );
        })}
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  bottomsheet_container: {
    width: "100%",
    height: SCREEN_HEIGHT,
    position: "absolute",
    top: SCREEN_HEIGHT / 1.5,
    zIndex: 12000,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  border: {
    width: "100%",
    height: 1,
    position: "absolute",
    top: "6%",
    backgroundColor: "grey",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  line: {
    width: 75,
    height: 4,
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 10,
  },
});
