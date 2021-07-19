import React, { useState, forwardRef } from "react";
import { Platform } from "react-native";
import { StatusBar, View, TextInput, StyleSheet } from "react-native";
import { Collections } from "../config";
import { Header as HeaderProps } from "../types";
import Icon from "./Icon";

const styles = StyleSheet.create({
  root: {
    paddingTop: (Platform.OS === "ios" ? 20 : StatusBar.currentHeight) + 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: Collections.theme.palette.main.base,
  },
  filter: {
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

const Header = forwardRef<any, HeaderProps>(function Header(
  props,
  ref,
): JSX.Element {
  const [text, setText] = useState<string>("");

  return (
    <View ref={ref} style={styles.root} {...props}>
      <View style={styles.filter}>
        <Icon style={styles.icon} size="small">
          filter
        </Icon>
        <TextInput
          value={text}
          placeholder="Filter"
          onChangeText={setText}
          style={styles.input}
          placeholderTextColor={Collections.theme.palette.type.light.normal}
        />
      </View>
    </View>
  );
});

export default Header;
