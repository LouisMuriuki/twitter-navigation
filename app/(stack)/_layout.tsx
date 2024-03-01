import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";

const MainLayout = () => {
  return (
    <Stack
      initialRouteName="(drawer)"
      screenOptions={{
        headerShadowVisible: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="post_details/index"
        options={{ headerShown: true, headerTitle: "Post" }}
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
