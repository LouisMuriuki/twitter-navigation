import { Appearance } from "react-native";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainLayout from "./(stack)/_layout";
import Bottomsheet from "../components/BottomSheet";
import { useSelector } from "react-redux";

const Main = () => {
  enum ColorScheme {
    light = "light",
    dark = "dark",
  }
  type scheme = keyof typeof ColorScheme;

  const colorSchemeMode: scheme = useSelector(
    (state) => state.colorSchemeMode.colorScheme
  );
  const modal = useSelector((state) => state.ModalSlice.colorSchemeBottomSheet);

  useEffect(() => {
    if (colorSchemeMode) {
      return Appearance.setColorScheme(colorSchemeMode);
    }
    console.log("colorSchemeMode is ", colorSchemeMode);
  }, [colorSchemeMode]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainLayout />
      {modal.open && <Bottomsheet />}
    </GestureHandlerRootView>
  );
};

export default Main;
