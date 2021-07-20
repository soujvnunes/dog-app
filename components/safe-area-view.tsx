import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView as SafeAreaViewProvided } from "react-native-safe-area-context";
import { SafeAreaView as SafeAreaViewProps } from "../types/components";

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export default function SafeAreaView({ style, ...props }: SafeAreaViewProps) {
  return <SafeAreaViewProvided style={[styles.root, style]} {...props} />;
}
