import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Entypo, EvilIcons, Feather } from "@expo/vector-icons";
import { TwitterPost } from "../data/DataStore";
import { formatDistance } from "date-fns";
import { Link } from "expo-router";
const Post = (props: any) => {
  const { height, width } = useWindowDimensions();
  return (
    <TouchableOpacity onPress={() => props.onNavigate(props)}>
      <View className="flex flex-row w-[100%] px-2 py-3 border-b-[1px]">
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
              <Text className="font-bold text-xl ">
                {props.user.displayName}
              </Text>
              <Text className="font-semibold text-lg">{`@${props.user.username}`}</Text>
              <Text className="text-sm">
                {formatDistance(props.timestamp, new Date(), {
                  addSuffix: true,
                })}
              </Text>
            </View>
            <Entypo name="dots-three-vertical" size={18} color="grey" />
          </View>
          <TouchableOpacity
            className="py-1"
            onPress={() => props.displayMedia(props)}
          >
            <Text className="m-4">{props.content}</Text>
            <View className="">
              <Image
                style={{
                  margin: 10,
                  borderRadius: 10,
                  maxHeight: width / 2,
                  height: width / 2.5,
                  width: width * 0.75,
                }}
                src="https://www.louismuriuki.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
                alt="Lui"
              />
            </View>
          </TouchableOpacity>
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
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({});
