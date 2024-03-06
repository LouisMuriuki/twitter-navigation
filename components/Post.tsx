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
import { formatDistance } from "date-fns";
import { useColorScheme } from "nativewind";
import { TwitterPost } from "../data/DataStore";
import Animated from "react-native-reanimated";
import { Video, ResizeMode } from "expo-av";
import { getLightColor } from "../utils/getColor";
const Post = (props: {
  onNavigate: (item: TwitterPost) => void;
  displayMedia: (item: TwitterPost, type: string) => void;
  post: TwitterPost;
}) => {
  const post = props.post;
  const { height, width } = useWindowDimensions();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { colorScheme } = useColorScheme();
  return (
    <TouchableOpacity onPress={() => props.onNavigate(post)}>
      <View className="flex flex-row w-[100%] px-2 py-3 border-b-white border-2">
        <View className="w-[15%]">
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
        </View>
        <View className="flex flex-col w-[85%] mt-[-5px]">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-1">
              <Text className="font-bold text-xl dark:text-white text-dark">
                {post.user?.displayName}
              </Text>
              <Text className="dark:text-white text-dark text-lg">{`@${post.user?.username}`}</Text>
              <Text className="text-sm dark:text-white text-dark">
                {formatDistance(post.timestamp, new Date(), {
                  addSuffix: true,
                })}
              </Text>
            </View>
            <Entypo name="dots-three-vertical" size={18} color="grey" />
          </View>

          <Text className="m-4 dark:text-white text-dark">{post.content}</Text>
          <View className="flex flex-row items-center justify-around">
            {post.media &&
              post.media.map((medium, i) => {
                return (
                  <View className="flex flex-row items-center justify-around" key={i}>
                    {medium.type === "image" && (
                      <TouchableOpacity
                        className="py-1"
                        onPress={() => props.displayMedia(post, medium.type)}
                      >
                        <Animated.Image
                          sharedTransitionTag="postImage"
                          style={{
                            margin: 10,
                            borderRadius: 10,
                            maxHeight: width / 2,
                            height: width / 2.5,
                            width: width * (0.78 / post.media?.length!),
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
                            width: width * (0.78 / post.media?.length!),
                          }}
                          source={{
                            uri: medium.url,
                          }}
                          resizeMode={ResizeMode.COVER}
                          isLooping
                          usePoster
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

          <View className="flex flex-row items-center justify-between mt-3 mb-3 ">
            <View className="flex items-center justify-center flex-row gap-1">
              <EvilIcons
                name="comment"
                size={24}
                color={getLightColor(colorScheme)}
              />
              <Text className="mb-[-3] dark:text-white text-dark">
                {post.replies}
              </Text>
            </View>
            <View className="flex items-center justify-center flex-row gap-1">
              <EvilIcons
                name="retweet"
                size={24}
                color={getLightColor(colorScheme)}
              />
              <Text className="mb-[-3] dark:text-white text-dark">
                {post.retweets}
              </Text>
            </View>
            <View className="flex items-center justify-center flex-row gap-1">
              <EvilIcons
                name="heart"
                size={24}
                color={getLightColor(colorScheme)}
              />
              <Text className="mb-[-3] dark:text-white text-dark">
                {post.likes}
              </Text>
            </View>
            <View className="flex items-center justify-center flex-row gap-1">
              <EvilIcons
                name="chart"
                size={24}
                color={getLightColor(colorScheme)}
              />
              <Text className="mb-[-3] dark:text-white text-dark">
                {post.likes}
              </Text>
            </View>

            <View className="flex flex-row gap-3 mr-2">
              <Feather
                name="bookmark"
                size={20}
                color={getLightColor(colorScheme)}
              />
              <EvilIcons
                name="share-google"
                size={24}
                color={getLightColor(colorScheme)}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ borderWidth: 0.2,margin:2, borderColor: "grey" }}
      />
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({});
