import React from "react";
import { StyleSheet, View } from "react-native";
import { Grid as GridProps } from "../types/components";

const styles = StyleSheet.create({
  root: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: -8,
    marginLeft: -8,
  },
});

export default function Grid({ style, ...props }: GridProps): JSX.Element {
  return <View style={[styles.root, style]} {...props} />;
}
