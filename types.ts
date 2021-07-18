import { SvgProps } from "react-native-svg";

export interface Icon extends SvgProps {
  children: "logo" | "filter" | string;
  color?: "main" | "accent" | "textPrimary" | "textSecondary" | "textTertiary";
  size?: "smaller" | "small" | "medium" | "large" | "larger";
}
