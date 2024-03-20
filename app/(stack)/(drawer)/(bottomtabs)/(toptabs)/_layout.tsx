import { View, Text } from "react-native";
import React from "react";
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { Stack, withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { getLightColor } from "../../../../../utils/getColor";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
const RootLayout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarLabelStyle: {
          color: getLightColor(colorScheme),
        },
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#181818" : "#fff",
        },
      }}
    ></MaterialTopTabs>
  );
};

export default RootLayout;
