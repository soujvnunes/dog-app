import { ReactNode } from "react";
import { TextProps, TouchableOpacityProps, ViewProps } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import { SvgProps } from "react-native-svg";

export interface Button extends TouchableOpacityProps {
  icon: Icon["children"];
  children: ReactNode;
}
export interface Icon extends SvgProps {
  children:
    | "logo"
    | "filter"
    | "weight"
    | "origin"
    | "extern"
    | "lifeSpan"
    | "chevron"
    | string;
  color?: "main" | "accent" | "textPrimary" | "textSecondary" | "textTertiary";
  size?: "smaller" | "small" | "medium" | "large" | "larger";
}
export interface Header extends ViewProps {}
export interface GridItem extends ViewProps {}
export interface Grid extends ViewProps {}
export interface SafeAreaView extends SafeAreaViewProps {}
export interface Text extends TextProps {
  variant?: "text" | "label";
  color?: Icon["color"];
}
export interface Box extends TouchableOpacityProps {
  breed: {
    name: string;
    image: { url: string };
  };
}
