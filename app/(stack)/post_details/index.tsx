import { View, Text, ScrollView } from "react-native";
import React from "react";
import Postdetails from "../../../components/Postdetails";

const PostDetails = () => {
  return (
    <ScrollView className="flex mb-3 p-2 dark:bg-dark bg-whitee">
      <Postdetails />
      <View className="m-3 ">
        <Text className="text-xl font-bold dark:text-white text-dark">
          Discover more
        </Text>
        <Text>Sourced from across X</Text>
      </View>
      <Postdetails />
    </ScrollView>
  );
};

export default PostDetails;
