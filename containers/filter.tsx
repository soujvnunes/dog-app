import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Collections } from "../config";
import { Icon } from "../components";
import { useState } from "react";

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 8,
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Collections.theme.palette.type.light.normal,
    borderRadius: 8,
  },
  icon: {
    color: Collections.theme.palette.type.light.normal,
    marginRight: 8,
  },
  input: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: Collections.theme.palette.type.light.normal,
    height: 40,
    flex: 1,
  },
});

export default function Filter() {
  const [query, setQuery] = useState<string>("");

  return (
    <View style={styles.root}>
      <Icon style={styles.icon}>filter</Icon>
      <TextInput
        value={query}
        placeholder="Filter"
        onChangeText={setQuery}
        style={styles.input}
        placeholderTextColor={Collections.theme.palette.type.light.normal}
      />
    </View>
  );
}
