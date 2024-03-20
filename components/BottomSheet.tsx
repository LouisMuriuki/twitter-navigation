import { Dimensions, StyleSheet,Text, View } from "react-native";
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
import { darkMode, defaultMode } from "../store/slices/colorSchemeModeSlice";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
import { runOnJS } from "react-native-reanimated";
const MIN_TRANSLATE_Y = SCREEN_HEIGHT / 2.5;
const MAX_TRANSLATE_Y = SCREEN_HEIGHT / 2;

export default function Bottomsheet() {
  const { colorScheme } = useColorScheme();
  const modal = useSelector(
    (state) => state.ModalSlice?.colorSchemeBottomSheet
  );
  const height = useSharedValue(-10);
  const dispatch = useDispatch();
  const gesture = Gesture.Pan()
    .onStart((e) => {})
    .onChange((e) => {

      // if (e.translationY < 0) {
      //   scrollTo(MAX_TRANSLATE_Y);
      // }
      // if (e.translationY > 0) {
      //   runOnJS(closeModal)();
      // }
    })
    .onEnd((e) => {});

  const reanimatedBottomStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const closeModal = () => {
    scrollTo(-10);
    dispatch(closeBottomSheet(true));
  };

  const scrollTo = (destination: number) => {
    "worklet";
    height.value = withSpring(destination);
  };

  useEffect(() => {
    if (modal.open) {
      scrollTo(MIN_TRANSLATE_Y);
    }
  }, [modal.open]);

  const setColorScheme = (type: string) => {
    switch (type) {
      case "dark":
        dispatch(darkMode("dark"));
        closeModal();
        break;
      case "light":
        dispatch(darkMode("light"));
        closeModal();
        break;
      case "system":
        dispatch(defaultMode("system"));
        closeModal();
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
        {/* <View style={styles.border} /> */}
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
    // zIndex: 12000,
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
