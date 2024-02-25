import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo, EvilIcons, Feather } from "@expo/vector-icons";
import { TwitterPost } from "../data/DataStore";
import { formatDistance } from "date-fns";
const Post = (props: TwitterPost) => {
  return (
    <View className="flex flex-row w-full h-auto px-2 py-3 border-b-[1px]">
      <View className="w-[15%]">
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
      </View>
      <View className="flex flex-col w-[85%] mt-[-5px]">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-1">
            <Text className="font-bold text-xl ">{props.user.displayName}</Text>
            <Text className="font-semibold text-lg">{`@${props.user.username}`}</Text>
            <Text className="text-sm">
              {formatDistance(props.timestamp, new Date(), {
                addSuffix: true,
              }).substring(5)}
            </Text>
          </View>

          <Entypo name="dots-three-vertical" size={18} color="grey" />
        </View>
        <View className="py-1">
          <Text>{props.content}</Text>
        </View>
        <View className="flex flex-row items-center justify-between mt-3">
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons name="comment" size={24} color="black" />
            <Text className="mb-[-3]">{props.replies}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons name="retweet" size={24} color="black" />
            <Text className="mb-[-3]">{props.retweets}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons name="heart" size={24} color="black" />
            <Text className="mb-[-3]">{props.likes}</Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons name="chart" size={24} color="black" />
            <Text className="mb-[-3]">{props.likes}</Text>
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

export default Post;

const styles = StyleSheet.create({});
