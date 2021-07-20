import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { Icon } from "../components";
import { Collections } from "../config";

interface Props extends ViewProps {
  icon: string;
  primary: string;
  secondary: string;
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: Collections.theme.metrics.spacing,
    height: 40,
    backgroundColor: Collections.theme.palette.surface.light,
    borderRadius: Collections.theme.metrics.spacing,
  },
  content: {
    flex: 1,
  },
  icon: {
    marginRight: Collections.theme.metrics.spacing,
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: Collections.theme.palette.type.dark.normal,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default function SectionListItem({
  icon,
  primary,
  secondary,
  style,
}: Props) {
  return (
    <View style={[styles.root, styles.row, style]}>
      <View style={[styles.content, styles.row]}>
        <Icon style={styles.icon} color="textSecondary">
          {icon}
        </Icon>
        <Text style={styles.title}>{primary}</Text>
      </View>
      <View style={styles.content}>
        <Text>{secondary}</Text>
      </View>
    </View>
  );
}
