import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { getDarkColor } from "../utils/getColor";
import colors from "../themes/colors";

const RadioButton = (props: any) => {
  
  const { colorScheme } = useColorScheme();
  const { scheme, setColorScheme } = props;

  const setAppColorScheme = (schemeType: any) => {
    setColorScheme(schemeType);
    // dispatch(closeBottomSheet(true));
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setAppColorScheme(scheme.type)}
    >
      <Text className="dark:text-white text-dark" style={styles.Text}>
        {scheme.name}
      </Text>
      <Pressable
        style={styles.outerRing}
        onPress={() => setAppColorScheme(scheme.type)}
      >
        <View
          style={[
            styles.innerRing,
            scheme.type === colorScheme
              ? { backgroundColor: colors.blue }
              : { backgroundColor: getDarkColor(colorScheme) },
          ]}
        ></View>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 25,
  },
  Text: {
    fontSize: 18,
  },
  outerRing: {
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.blue,
  },
  innerRing: {
    width: 12.5,
    height: 12.5,
    borderRadius: 15,
  },
});

export default RadioButton;
