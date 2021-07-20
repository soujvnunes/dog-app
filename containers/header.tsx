import React from "react";
import { Platform } from "react-native";
import { StatusBar, View, StyleSheet } from "react-native";
import { Collections } from "../config";
import { Header as HeaderProps } from "../types/components";
import Filter from "./filter";

const styles = StyleSheet.create({
  root: {
    paddingTop:
      (Platform.OS === "ios" ? 20 : StatusBar.currentHeight ?? 20) + 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: Collections.theme.palette.main.base,
  },
});

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <View style={styles.root} {...props}>
      <Filter />
    </View>
  );
}
