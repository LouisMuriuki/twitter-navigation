import { View, Text, Image, useWindowDimensions, Button } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { EvilIcons, Feather } from "@expo/vector-icons";

const MediaPlayer = () => {
  const { width, height } = useWindowDimensions();
  const params = useLocalSearchParams();
  console.log("Here are my params", params[0]);
  return (
    <View className="flex flex-col h-full">
      <View className="flex justify-start">
        <View className="flex flex-row  w-full p-2 justify-between">
          <View className="flex flex-row gap-2">
            <Image
              style={{
                marginHorizontal: 10,
                borderRadius: 50,
                height: 35,
                width: 35,
              }}
              src="https://www.louismuriuki.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
              alt="Lui"
              className="w-30 h-30 rounded"
            />
            <View className="flex flex-col">
              <Text>Louis Muriuki</Text>
              <Text>@louismuriuki</Text>
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
            <EvilIcons name="comment" size={24} color="black" />
            <Text className="mb-[-3]">{5}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons name="retweet" size={24} color="black" />
            <Text className="mb-[-3]">{19}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons name="heart" size={24} color="black" />
            <Text className="mb-[-3]">{44}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons name="chart" size={24} color="black" />
            <Text className="mb-[-3]">{44}</Text>
          </View>

          <View className="flex flex-row gap-3 mr-2">
            <Feather name="bookmark" size={22} color="black" />
            <EvilIcons name="share-google" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MediaPlayer;
