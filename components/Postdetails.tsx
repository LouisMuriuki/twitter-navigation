import { View, Text, Image, Button, useWindowDimensions } from "react-native";
import React from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";

const Postdetails = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View className="flex flex-col w-full px-2 bg-white">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-4 justify-center">
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
      <View className="flex flex-col py-3 ">
        <Text className="m-4 text-left">Some random tweet here</Text>
        <View className="flex items-center justify-between">
          <Image
            style={{
              margin: 10,
              borderRadius: 10,
              maxHeight: width / 2,
              height: width / 2,
              width: width * 0.95,
            }}
            src="https://www.louismuriuki.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
            alt="Lui"
          />
        </View>
      </View>
      <View className="flex flex-row items-center mb-4">
        <Text className="mr-2 font-semibold text-base">20:50</Text>
        <Text className="mr-2 font-semibold text-base">01 Mar 24</Text>
        <Text className="mr-2 font-semibold text-base">1405 Views</Text>
      </View>
      <View className="flex flex-row items-center">
        <Text className="mr-2 font-semibold text-base">1 Repost</Text>
        <Text className="mr-2 font-semibold text-base">1 Like</Text>
        <Text className="mr-2 font-semibold text-base">1 Bookmark</Text>
      </View>
      <View className="flex flex-row items-center justify-between mt-3 p-3">
        <View className="flex items-center justify-center flex-row">
          <EvilIcons name="comment" size={24} color="black" />
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons name="retweet" size={24} color="black" />
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons name="heart" size={24} color="black" />
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons name="chart" size={24} color="black" />
        </View>
        <View className="flex items-center justify-center flex-row">
          <Feather name="bookmark" size={22} color="black" />
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons name="share-google" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Postdetails;
