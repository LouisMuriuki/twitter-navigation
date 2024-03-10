import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";
import { closeBottomSheet } from "../store/slices/modalSlice";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = SCREEN_HEIGHT / 1.5;
const MIN_TRANSLATE_Y = SCREEN_HEIGHT / 5;
export default function Bottomsheet() {
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
        dispatch(closeBottomSheet(true));
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

  useEffect(() => {
    console.log("modal is open", modal.open);
    // Initial scroll to show the bottom sheet partially
    scrollTo(-SCREEN_HEIGHT / 3);
  }, [modal.open]);

  return (
    <GestureDetector  gesture={gesture}>
      <Animated.View 
      className="dark:bg-dark bg-white"
        style={[styles.bottomsheet_container, reanimatedBottomStyle]}
      >
        <View style={styles.line} />
        <Text>Bottomsheet</Text>
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
    paddingHorizontal: 10,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 10,
  },
});
