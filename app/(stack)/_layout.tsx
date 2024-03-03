import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";
import { useColorScheme } from "nativewind";

const MainLayout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Stack
      initialRouteName="(drawer)"
      screenOptions={{
        headerShadowVisible: true,
        headerShown: false,
        // contentStyle: {
        //   backgroundColor: colorScheme === "dark" ? "#181818" : "white",
        // },
        statusBarStyle: colorScheme === "dark" ? "light" : "dark",
        headerTintColor: colorScheme === "dark" ? "white" : "black",
        navigationBarColor: colorScheme === "dark" ? "black" : "white",
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#181818" : "white",
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
          headerTitle: "Post",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default MainLayout;
