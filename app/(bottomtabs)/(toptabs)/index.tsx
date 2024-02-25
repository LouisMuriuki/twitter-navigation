import { View, Text,FlatList } from "react-native";
import React from "react";
import { TwitterPost, twitterPosts } from "../../data/DataStore";
import Post from "../../_components/Post";

const index = () => {
  const render = ({ item }: any) => {
    return <Post {...item} />;
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
