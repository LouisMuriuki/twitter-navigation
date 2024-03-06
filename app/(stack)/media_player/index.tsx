import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { TwitterPost, twitterPosts } from "../../../data/DataStore";
import Animated from "react-native-reanimated";
import { ResizeMode, Video } from "expo-av";
import { getLightColor } from "../../../utils/getColor";

const MediaPlayer = () => {
  const { width, height } = useWindowDimensions();
  const { colorScheme } = useColorScheme();
  const { id, type } = useLocalSearchParams();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  //@ts-expect-error
  const Post: TwitterPost[] = twitterPosts.filter((post) => post.id == id);

  return (
    <View
      className="flex flex-col h-full justify-evenly dark:bg-dark bg-white"
      style={{ flex: 1 }}
    >
      <View className="flex justify-start mt-[-100]">
        <View className="flex flex-row  w-full p-2 justify-between">
          <View className="flex flex-row gap-2">
            <Image
              style={{
                marginHorizontal: 10,
                borderRadius: 50,
                height: 40,
                width: 40,
              }}
              src="https://www.louismuriuki.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
              alt="Lui"
            />
            <View className="flex flex-col">
              <Text className="dark:text-white text-dark">
                {Post[0].user?.displayName}
              </Text>
              <Text className="dark:text-white text-dark">
                {Post[0].user?.username}
              </Text>
            </View>
          </View>
          <View>
            <Button title="Follow" />
          </View>
        </View>
      </View>

      <View className="flex flex-row items-center  justify-center">
        <View className="flex flex-row items-center  justify-between">
          {type === "image" && (
            <Animated.Image
              sharedTransitionTag="postImage"
              style={{
                margin: 10,
                borderRadius: 10,
                maxHeight: width / 2,
                height: width / 2,
                width: width * 0.9,
              }}
              src={Post[0].media && Post[0].media[0]?.url}
              alt="Lui"
            />
          )}
          {type === "video" && (
            <Video
              ref={video}
              style={{
                margin: 10,
                borderRadius: 10,
                height: width / 2,
                width: width * 0.9,
              }}
              source={{
                // @ts-expect-error
                uri: Post[0].media[1]?.url,
              }}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          )}
        </View>
      </View>
      <View className="flex justify-end">
        <View className="flex flex-row items-center justify-between">
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons
              name="comment"
              size={24}
              color={getLightColor(colorScheme)}
            />
            <Text className="mb-[-3] dark:text-white text-dark">
              {Post[0].replies}
            </Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons
              name="retweet"
              size={24}
              color={getLightColor(colorScheme)}
            />
            <Text className="mb-[-3] dark:text-white text-dark">
              {Post[0].retweets}
            </Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons
              name="heart"
              size={24}
              color={getLightColor(colorScheme)}
            />
            <Text className="mb-[-3] dark:text-white text-dark">
              {Post[0].likes}
            </Text>
          </View>
          <View className="flex items-center justify-center flex-row gap-1">
            <EvilIcons
              name="chart"
              size={24}
              color={getLightColor(colorScheme)}
            />
            <Text className="mb-[-3] dark:text-white text-dark">
              {Post[0].likes}
            </Text>
          </View>

          <View className="flex flex-row gap-3 mr-2">
            <Feather
              name="bookmark"
              size={22}
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
  );
};

export default MediaPlayer;
