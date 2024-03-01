import { Tabs } from "expo-router";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(toptabs)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="search1" size={24} color="black" />;
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
                color="black"
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
            return <Ionicons name="notifications" size={24} color="black" />;
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="mail" size={24} color="black" />;
          },
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
