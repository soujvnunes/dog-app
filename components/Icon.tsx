import React, { Component, LegacyRef } from "react";
import { forwardRef, memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Icon as IconProps } from "../types";
import { isEqual } from "lodash";
import DesignSystem from "../config/design-system";

const Icon = forwardRef<any, IconProps>(function Icon(
  { children, size = "medium", color = "textPrimary", ...props },
  ref,
): JSX.Element {
  const renderSize: number = {
    smaller: 16,
    small: 24,
    medium: 32,
    large: 40,
    larger: 48,
  }[size];
  const renderPath: { [key: string]: string } = {
    logo: "M16.58,0H7.42A2.84,2.84,0,0,0,4.58,2.83V21.17A2.84,2.84,0,0,0,7.42,24h9.16a2.84,2.84,0,0,0,2.84-2.83V2.83A2.84,2.84,0,0,0,16.58,0Zm1.76,21.17a1.75,1.75,0,0,1-1.76,1.75H7.42a1.75,1.75,0,0,1-1.76-1.75V2.83A1.75,1.75,0,0,1,7.42,1.08H9.17a1.08,1.08,0,0,0,1.08,1.08h3.5a1.08,1.08,0,0,0,1.08-1.08h1.75a1.75,1.75,0,0,1,1.76,1.75Zm-1.89-2.83c-.6,0-1.08-.79-1.08-1.76s.48-1.75,1.08-1.75,1.08.79,1.08,1.75S17.05,18.34,16.45,18.34ZM8.63,16.58c0-1-.48-1.75-1.08-1.75s-1.08.79-1.08,1.75S7,18.34,7.55,18.34,8.63,17.55,8.63,16.58ZM16,12c0-1.56-.78-2.83-1.75-2.83S12.54,10.44,12.54,12s.78,2.83,1.75,2.83S16,13.56,16,12Zm-4.58,0c0-1.56-.78-2.83-1.75-2.83S8,10.44,8,12s.78,2.83,1.75,2.83S11.46,13.56,11.46,12ZM8.19,22.11a5.92,5.92,0,0,0,1.91-.31h0a6,6,0,0,1,3.8,0h0a5.92,5.92,0,0,0,1.91.31H16a.93.93,0,0,0,.57-.19,1,1,0,0,0,.21-1.28l-2.34-3.79a2.84,2.84,0,0,0-4.82,0L7.25,20.64a1,1,0,0,0,.21,1.28.93.93,0,0,0,.57.19Z",
    filter:
      "M13,21.986a1.98,1.98,0,0,1-1.191-.4l-2-1.487A2.006,2.006,0,0,1,9,18.5V14.829a1,1,0,0,0-.293-.708L4.879,10.293A2.978,2.978,0,0,1,4,8.171V8A3,3,0,0,1,7,5H17a3,3,0,0,1,3,3v.171a2.983,2.983,0,0,1-.879,2.122l-3.828,3.828a1,1,0,0,0-.293.708v5.156a2,2,0,0,1-2,2ZM7,7A1,1,0,0,0,6,8v.171a1,1,0,0,0,.293.708l3.828,3.828A2.984,2.984,0,0,1,11,14.829V18.5l2,1.487V14.829a2.98,2.98,0,0,1,.879-2.122l3.828-3.828A1,1,0,0,0,18,8.171V8a1,1,0,0,0-1-1Zm9-4a1,1,0,0,0-1-1H9A1,1,0,0,0,9,4h6A1,1,0,0,0,16,3Zm0,6a1,1,0,0,0-1-1H9a1,1,0,0,0,0,2h6A1,1,0,0,0,16,9Z",
  };

  return (
    <Svg
      ref={ref}
      width={renderSize}
      height={renderSize}
      fill={
        {
          main: DesignSystem.palette.main.base,
          accent: DesignSystem.palette.accent.base,
          textPrimary: "rgba(0, 0, 0, 0.8)",
          textSecondary: "rgba(0, 0, 0, 0.4)",
          textTertiary: "rgba(0, 0, 0, 0.2)",
        }[color]
      }
      viewBox="0 0 24 24"
      {...props}>
      <Path d={renderPath[children]} />
    </Svg>
  );
});

Icon.displayName = "Icon";
export default memo(Icon, (prev, next) => isEqual(prev, next));
