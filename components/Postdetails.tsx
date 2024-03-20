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
import { ResizeMode, Video } from "expo-av";
import { getLightColor } from "../utils/getColor";
const Postdetails = (props: {
  Post: TwitterPost;
  displayMedia: (item: TwitterPost, type: string) => void;
}) => {
  const post = props.Post;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
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
            src={post.user.avatarUrl}
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
        <Text className="m-3 text-left dark:text-white text-dark">
          {post.content}
        </Text>
        <View className="flex flex-row items-center  justify-evenly">
          {post.media &&
            post.media.map((medium, i) => {
              return (
                <View className="flex flex-row items-center  justify-between">
                  {medium.type === "image" && (
                    <TouchableOpacity
                      className=""
                      onPress={() => props.displayMedia(post, medium.type)}
                    >
                      <Animated.Image
                        sharedTransitionTag="postImage"
                        style={{
                          margin: 10,
                          borderRadius: 10,
                          maxHeight: width / 2,
                          height: width / 2.5,
                          width: width * (0.9 / post.media?.length!),
                        }}
                        src={medium.url}
                        alt="Lui"
                      />
                    </TouchableOpacity>
                  )}
                  {medium.type === "video" && (
                    <TouchableOpacity
                      className="py-1 "
                      onPress={() => props.displayMedia(post, medium.type)}
                    >
                      <Video
                        ref={video}
                        style={{
                          margin: 10,
                          borderRadius: 10,
                          height: width / 2.5,
                          width: width * (0.9 / post.media?.length!),
                        }}
                        source={{
                          uri: medium.url,
                        }}
                        usePoster
                        resizeMode={ResizeMode.COVER}
                        isLooping
                        onPlaybackStatusUpdate={(status) =>
                          setStatus(() => status)
                        }
                      />
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
        </View>
      </View>
      <View className="flex flex-row items-center mb-3 ">
        <Text className="mr-2 text-lg dark:text-white text-dark">20:50</Text>
        <Text className="mr-2 text-lg dark:text-white text-dark">
          01 Mar 24
        </Text>
        <Text className="mr-2 text-lg dark:text-white text-dark">
          1405 Views
        </Text>
      </View>
      <View className="flex font-bold flex-row items-center mb-3">
        <Text className="mr-2  text-lg dark:text-white text-dark">
          1 Repost
        </Text>
        <Text className="mr-2  text-lg dark:text-white text-dark">1 Like</Text>
        <Text className="mr-2  text-lg dark:text-white text-dark">
          1 Bookmark
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between mt-3 mb-3">
        <View className="flex items-center justify-center gap-1 flex-row">
          <EvilIcons
            name="comment"
            size={24}
            color={getLightColor(colorScheme)}
          />
          <Text className="mb-[-3] dark:text-white text-dark">
            {post.replies}
          </Text>
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons
            name="retweet"
            size={24}
            color={getLightColor(colorScheme)}
          />
          <Text className="mb-[-3] dark:text-white text-dark">
            {post.retweets}
          </Text>
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons
            name="heart"
            size={24}
            color={getLightColor(colorScheme)}
          />
          <Text className="mb-[-3] dark:text-white text-dark">
            {post.likes}
          </Text>
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons
            name="chart"
            size={24}
            color={getLightColor(colorScheme)}
          />
          <Text className="mb-[-3] dark:text-white text-dark">
            {post.retweets}
          </Text>
        </View>
        <View className="flex items-center justify-center flex-row">
          <Feather
            name="bookmark"
            size={22}
            color={getLightColor(colorScheme)}
          />
        </View>
        <View className="flex items-center justify-center flex-row">
          <EvilIcons
            name="share-google"
            size={24}
            color={getLightColor(colorScheme)}
          />
        </View>
      </View>
      <View style={{ borderWidth: 0.2, margin: 2, borderColor: "grey" }} />
    </View>
  );
};

export default Postdetails;
