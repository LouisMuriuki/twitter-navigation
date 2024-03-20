import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";
import { useColorScheme } from "nativewind";
import { getDarkColor, getLightColor } from "../../utils/getColor";
const MainLayout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Stack
      initialRouteName="(drawer)"
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        contentStyle: {
          backgroundColor: getDarkColor(colorScheme),
        },
        statusBarStyle: colorScheme === "dark" ? "light" : "dark",
        headerTintColor: getLightColor(colorScheme),
        navigationBarColor: getDarkColor(colorScheme),
        headerStyle: {
          backgroundColor: getDarkColor(colorScheme),
        },
      }}
    >
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="post_details/index"
        options={{
          headerShown: true,
          headerTitle: "Post",
        }}
      />
      <Stack.Screen
        name="media_player/index"
        options={{
          headerShown: true,
          presentation: "transparentModal",
          animation: "fade",
          headerTitle: "Post",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default MainLayout;
