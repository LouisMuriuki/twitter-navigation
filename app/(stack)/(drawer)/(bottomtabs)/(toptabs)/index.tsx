import { View, Text, FlatList } from "react-native";
import React from "react";
import { TwitterPost, twitterPosts } from "../../../../../data/DataStore";
import Post from "../../../../../components/Post";
import { router } from "expo-router";

const index = () => {
  const navigateToPostDetails = (item:TwitterPost) => {
    router.navigate({ pathname: "/post_details/", params: {id:item.id} });
  };
  const displayMedia = (item: TwitterPost) => {
    console.log("Item is ", item);
    if (item) {
      router.navigate({
        pathname: "/(stack)/media_player/",
        params: {id:item.id}, 
      });
    }
  };
  const render = ({ item }: any) => {
    return (
      <Post
        post={item}
        onNavigate={navigateToPostDetails}
        displayMedia={displayMedia}
      />
    );
  };
  return (
    <View className="dark:bg-dark bg-white  dark:text-white text-dark">
      <FlatList
        data={twitterPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={render}
      />
    </View>
  );
};

export default index;
