import React from "react";
import { forwardRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Collections } from "../config";
import { Button as ButtonProps } from "../types/components";
import { Icon, Text } from "../components";

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 24,
    height: 40,
    backgroundColor: Collections.theme.palette.main.base,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Collections.theme.metrics.spacing,
  },
  icon: {
    marginLeft: 12,
  },
});
const Button = forwardRef<any, ButtonProps>(function Button(
  { icon, children, style, ...props },
  ref,
) {
  return (
    <TouchableOpacity ref={ref} style={[styles.root, style]} {...props}>
      <Text variant="label" color="textPrimary">
        {children}
      </Text>
      <Icon style={styles.icon}>{icon}</Icon>
    </TouchableOpacity>
  );
});

Button.displayName = "Button";
export default Button;
