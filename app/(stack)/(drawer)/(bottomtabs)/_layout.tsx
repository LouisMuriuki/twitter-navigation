import { Tabs } from "expo-router";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useColorScheme } from "nativewind/dist/stylesheet";
import { getDarkColor, getLightColor } from "../../../../utils/getColor";
const _layout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerTintColor: getLightColor(colorScheme),
        tabBarStyle: {
          backgroundColor: getDarkColor(colorScheme),
        },
      }}
    >
      <Tabs.Screen
        name="(toptabs)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} color={getLightColor(colorScheme)} />;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="search1" size={24} color={getLightColor(colorScheme)} />;
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="grok"
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="alpha-i-box"
                size={24}
                color={getLightColor(colorScheme)}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: () => {
            return <Ionicons name="notifications" size={24} color={getLightColor(colorScheme)} />;
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="mail" size={24} color={getLightColor(colorScheme)} />;
          },
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
