import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Collections, Modules } from "../config";

const styles = StyleSheet.create({
  root: {
    height: 200,
    borderRadius: Collections.theme.metrics.spacing,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradient: {
    position: "absolute",
    marginTop: "50%",
    ...Modules.inset(0),
  },
  text: {
    marginLeft: 8,
    marginBottom: 8,
    color: Collections.theme.palette.type.light.high,
  },
});

export default function Box({
  breed: {
    name,
    image: { url: uri },
  },
}: any) {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Breed");
  }

  return (
    <TouchableOpacity style={styles.root} onPress={handlePress}>
      <ImageBackground source={{ uri }} resizeMode="cover" style={styles.image}>
        <LinearGradient
          style={styles.gradient}
          colors={[
            "transparent",
            Collections.theme.palette.type.dark.high,
          ]}></LinearGradient>
        <Text style={styles.text}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
