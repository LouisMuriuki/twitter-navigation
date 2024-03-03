import {
  View,
  Text,
  Image,
  Button,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import React from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { TwitterPost } from "../data/DataStore";
const Postdetails = (props: {
  Post: TwitterPost;
  displayMedia: (item: TwitterPost) => void;
}) => {
  const post = props.Post;
  console.log("This is it", post);
  const { colorScheme } = useColorScheme();
  const { width, height } = useWindowDimensions();
  return (
    <View className="flex flex-col w-full p-2 border-b-[1px]">
      <View className="flex flex-row items-center justify-between ">
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
            <Text className="font-bold text-lg dark:text-white text-dark">
              {post.user?.displayName}
            </Text>
            <Text className="dark:text-white text-dark">
              {`@${post.user?.username}`}
            </Text>
          </View>
        </View>
        <View>
          <Button title="Follow" />
        </View>
      </View>
      <View className="flex flex-col py-3 ">
        <Text className="m-4 text-left dark:text-white text-dark">
          {post.content}
        </Text>
        <View className="flex items-center justify-between">
          <TouchableOpacity
            className="py-1"
            onPress={() => props.displayMedia(post)}
          >
            <Animated.Image
              sharedTransitionTag="postImage"
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
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row items-center mb-3 ">
        <Text className="mr-2 font-semibold text-lg dark:text-white text-dark">
          20:50
        </Text>
        <Text className="mr-2 font-semibold text-lg dark:text-white text-dark">
          01 Mar 24
        </Text>
        <Text className="mr-2 font-semibold text-lg dark:text-white text-dark">
          1405 Views
        </Text>
      </View>
      <View className="flex flex-row items-center mb-3">
        <Text className="mr-2 font-semibold text-lg dark:text-white text-dark">
          1 Repost
        </Text>
        <Text className="mr-2 font-semibold text-lg dark:text-white text-dark">
          1 Like
        </Text>
        <Text className="mr-2 font-semibold text-lg dark:text-white text-dark">
          1 Bookmark
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between mt-3 p-3">
        <View className="flex items-center justify-center gap-1 flex-row">
          <EvilIcons
            name="comment"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
          <Text className="mb-[-3] dark:text-white text-dark">
            {post.replies}
          </Text>
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons
            name="retweet"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
          <Text className="mb-[-3] dark:text-white text-dark">
            {post.retweets}
          </Text>
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons
            name="heart"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
          <Text className="mb-[-3] dark:text-white text-dark">
            {post.likes}
          </Text>
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons
            name="chart"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
          <Text className="mb-[-3] dark:text-white text-dark">
            {post.retweets}
          </Text>
        </View>
        <View className="flex items-center justify-center flex-row">
          <Feather
            name="bookmark"
            size={22}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons
            name="share-google"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </View>
      </View>
    </View>
  );
};

export default Postdetails;
