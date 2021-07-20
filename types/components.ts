import { ViewProps } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import { SvgProps } from "react-native-svg";

export interface Icon extends SvgProps {
  children: "logo" | "filter" | "weight" | "origin" | string;
  color?: "main" | "accent" | "textPrimary" | "textSecondary" | "textTertiary";
  size?: "smaller" | "small" | "medium" | "large" | "larger";
}
export interface Header extends ViewProps {}
export interface GridItem extends ViewProps {}
export interface Grid extends ViewProps {}
export interface SafeAreaView extends SafeAreaViewProps {}
