import { View, Text, FlatList } from "react-native";
import React from "react";
import { TwitterPost, twitterPosts } from "../../../../../data/DataStore";
import Post from "../../../../../components/Post";
import { router } from "expo-router";

const index = () => {
  const navigateToPostDetails = () => {
    router.navigate("post_details");
  };
  const render = ({ item }: any) => {
    return <Post {...item} onNavigate={navigateToPostDetails} />;
  };
  return (
    <View className=" bg-white flex-1">
      <FlatList
        data={twitterPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={render}
      />
    </View>
  );
};

export default index;
