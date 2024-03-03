import { View, Text, ScrollView } from "react-native";
import React from "react";
import Postdetails from "../../../components/Postdetails";
import { router, useLocalSearchParams } from "expo-router";
import { TwitterPost, twitterPosts } from "../../../data/DataStore";

const PostDetails = () => {
  const { id } = useLocalSearchParams();
  //@ts-expect-error
  const Post: TwitterPost[] = twitterPosts.filter((post) => post.id == id);
  const displayMedia = (item: TwitterPost, type: string) => {
    console.log("Item is ", item);
    if (item) {
      router.navigate({
        pathname: "/(stack)/media_player/",
        params: { id: item.id, type: type },
      });
    }
  };
  return (
    <ScrollView className="flex mb-3 p-2 dark:bg-dark bg-white">
      <Postdetails Post={Post[0]} displayMedia={displayMedia} />
      <View className="m-3 ">
        <Text className="text-xl font-bold dark:text-white text-dark">
          Discover more
        </Text>
        <Text className="dark:text-white text-dark">Sourced from across X</Text>
      </View>
      <Postdetails Post={Post[0]} displayMedia={displayMedia} />
    </ScrollView>
  );
};

export default PostDetails;
