import React, { forwardRef } from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "../components";
import { Collections, Modules } from "../config";

const styles = StyleSheet.create({
  root: {
    ...Modules.size(36),
    marginLeft: 16,
    borderColor: Collections.theme.palette.type.dark.normal,
    borderWidth: 2,
    borderRadius: Collections.theme.metrics.spacing,
    justifyContent: "center",
    alignItems: "center",
  },
});
const BackButton = forwardRef<any, TouchableOpacityProps>(function BackButton(
  props,
  ref,
): JSX.Element {
  return (
    <TouchableOpacity ref={ref} style={styles.root} {...props}>
      <Icon color="textSecondary">chevron</Icon>
    </TouchableOpacity>
  );
});

BackButton.displayName = "BackButton";
export default BackButton;
