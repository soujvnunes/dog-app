import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Collections } from "../config";
import { Icon } from "../components";
import { useState } from "react";

const styles = StyleSheet.create({
  root: {
    minWidth: "100%",
    paddingHorizontal: 8,
    height: 36,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Collections.theme.palette.type.dark.normal,
    borderRadius: 8,
  },
  isFocused: {
    borderColor: Collections.theme.palette.type.dark.high,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    textTransform: "uppercase",
    fontWeight: "bold",
    height: 40,
    flex: 1,
  },
});

export default function Filter() {
  const [query, setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={[styles.root, isFocused && styles.isFocused]}>
      <Icon
        style={styles.icon}
        color={isFocused ? "textPrimary" : "textSecondary"}>
        filter
      </Icon>
      <TextInput
        value={query}
        placeholder="Filter"
        onChangeText={setQuery}
        style={styles.input}
        placeholderTextColor={
          Collections.theme.palette.type.dark[isFocused ? "high" : "normal"]
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
