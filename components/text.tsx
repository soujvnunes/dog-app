import React, { forwardRef } from "react";
import { StyleSheet, Text as TextProvided } from "react-native";
import { Collections, Modules } from "../config";
import { Text as TextProps } from "../types/components";

const styles = StyleSheet.create({
  root: {},
  main: { ...Modules.color(Collections.theme.palette.main.base) },
  accent: { ...Modules.color(Collections.theme.palette.accent.base) },
  textPrimary: { ...Modules.color(Collections.theme.palette.type.dark.high) },
  textSecondary: {
    ...Modules.color(Collections.theme.palette.type.dark.normal),
  },
  textTertiary: { ...Modules.color(Collections.theme.palette.type.dark.low) },
  label: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: Collections.theme.palette.type.dark.normal,
    fontSize: 14,
  },
});
const Text = forwardRef<any, TextProps>(function Text(
  { style, variant = "text", color = "textSecondary", ...props },
  ref,
) {
  return (
    <TextProvided
      ref={ref}
      style={[styles.root, styles[variant], styles[color]]}
      {...props}
    />
  );
});

Text.displayName = "Text";
export default Text;
