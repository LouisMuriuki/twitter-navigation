import { View, Text, Image, useWindowDimensions, Button } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const MediaPlayer = () => {
  const { width, height } = useWindowDimensions();
   const { colorScheme } = useColorScheme();
   const item = useLocalSearchParams();
  console.log("Here are my params", item);
  return (
    <View
      className="flex flex-col h-full justify-evenly dark:bg-dark bg-white"
      style={{ flex: 1 }}
    >
      <View className="flex justify-start mt-[-70]">
        <View className="flex flex-row  w-full p-2 justify-between">
          <View className="flex flex-row gap-2">
            <Image
              style={{
                marginHorizontal: 10,
                borderRadius: 50,
                height: 40,
                width: 40,
              }}
              src="https://www.louismuriuki.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
              alt="Lui"
            />
            <View className="flex flex-col">
              <Text className="dark:text-white text-dark">Louis Muriuki</Text>
              <Text className="dark:text-white text-dark">@louismuriuki</Text>
            </View>
          </View>
          <View>
            <Button title="Follow" />
          </View>
        </View>
      </View>

      <View className="flex justify-center">
        <Image
          style={{
            // flex: 1,
            maxHeight: width,
            height: width,
            width: width,
            aspectRatio: 1 / 1,
            objectFit: "contain",
          }}
          src="https://www.louismuriuki.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
          alt="Lui"
        />
      </View>
      <View className="flex justify-end">
        <View className="flex flex-row items-center justify-between">
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons
              name="comment"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
            <Text className="mb-[-3] dark:text-white text-dark">{5}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons
              name="retweet"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
            <Text className="mb-[-3] dark:text-white text-dark">{19}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons
              name="heart"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
            <Text className="mb-[-3] dark:text-white text-dark">{44}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons
              name="chart"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
            <Text className="mb-[-3] dark:text-white text-dark">{44}</Text>
          </View>

          <View className="flex flex-row gap-3 mr-2">
            <Feather
              name="bookmark"
              size={22}
              color={colorScheme === "dark" ? "white" : "black"}
            />
            <EvilIcons
              name="share-google"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MediaPlayer;
