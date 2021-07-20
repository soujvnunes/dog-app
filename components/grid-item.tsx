import React from "react";
import { StyleSheet, View } from "react-native";
import { GridItem as GridItemProps } from "../types/components";

const styles = StyleSheet.create({
  root: {
    flexGrow: 0,
    flexBasis: "50%",
    maxWidth: "50%",
    paddingTop: 8,
    paddingLeft: 8,
  },
});

export default function GridItem({ style, ...props }: GridItemProps) {
  return <View style={[styles.root, style]} {...props} />;
}
