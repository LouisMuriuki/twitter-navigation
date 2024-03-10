import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { Entypo } from "@expo/vector-icons";
import { getLightColor } from "../utils/getColor";
import { useDispatch } from "react-redux";
import { openBottomSheet } from "../store/slices/modalSlice";
export const CustomDrawerContent = (props: any) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const dispatch = useDispatch();
  return (
    <View
      className="flex flex-col dark:bg-dark bg-white"
      style={{ marginHorizontal: 20, marginVertical: 60, flex: 1 }}
    >
      <View className="flex flex-col" style={{ flex: 1 }}>
        <View className="flex flex-row items-start justify-between">
          <View className="flex flex-col">
            <Image
              style={{
                marginHorizontal: 10,
                borderRadius: 50,
                height: 50,
                width: 50,
              }}
              src="https://www.louismuriuki.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
              alt="Lui"
              className=""
            />
            <View className="flex flex-col my-4">
              <Text className="font-bold text-lg dark:text-white text-dark">
                Louis Muriuki
              </Text>
              <Text className="font-semibold text-base dark:text-white text-dark">
                @louismuriuki
              </Text>
            </View>
          </View>
          <View className="mt-5">
            <Entypo name="dots-three-vertical" size={18} color="grey" />
          </View>
        </View>
        <View className="flex flex-row mt-3">
          <Text className="mr-2 font-semibold text-base dark:text-white text-dark">
            1 Following
          </Text>
          <Text className="mr-2 font-semibold text-base dark:text-white text-dark">
            1 Followers
          </Text>
        </View>
      </View>
      <View className="mb-5">
        {colorScheme === "dark" ? (
          <Fontisto
            name="day-sunny"
            size={28}
            onPress={() => dispatch(openBottomSheet(true))}
            color={getLightColor(colorScheme)}
            className="p-3"
          />
        ) : (
          <Fontisto
            name="night-clear"
            onPress={() => dispatch(openBottomSheet(true))}
            size={28}
            color={getLightColor(colorScheme)}
            className="p-3"
          />
        )}
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
