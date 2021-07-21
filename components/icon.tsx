import React from "react";
import { forwardRef, memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Icon as IconProps } from "../types/components";
import { isEqual } from "lodash";
import { Collections, Modules } from "../config";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  smaller: { ...Modules.size(16) },
  small: { ...Modules.size(24) },
  medium: { ...Modules.size(32) },
  large: { ...Modules.size(40) },
  larger: { ...Modules.size(48) },
  main: { ...Modules.color(Collections.theme.palette.main.base) },
  accent: { ...Modules.color(Collections.theme.palette.accent.base) },
  textPrimary: { ...Modules.color(Collections.theme.palette.type.dark.high) },
  textSecondary: {
    ...Modules.color(Collections.theme.palette.type.dark.normal),
  },
  textTertiary: { ...Modules.color(Collections.theme.palette.type.dark.low) },
});

const Icon = forwardRef<any, IconProps>(function Icon(
  { children, size = "small", color = "textPrimary", style, ...props },
  ref,
): JSX.Element {
  const renderPath: { [key: string]: string } = {
    logo: "M16.58,0H7.42A2.84,2.84,0,0,0,4.58,2.83V21.17A2.84,2.84,0,0,0,7.42,24h9.16a2.84,2.84,0,0,0,2.84-2.83V2.83A2.84,2.84,0,0,0,16.58,0Zm1.76,21.17a1.75,1.75,0,0,1-1.76,1.75H7.42a1.75,1.75,0,0,1-1.76-1.75V2.83A1.75,1.75,0,0,1,7.42,1.08H9.17a1.08,1.08,0,0,0,1.08,1.08h3.5a1.08,1.08,0,0,0,1.08-1.08h1.75a1.75,1.75,0,0,1,1.76,1.75Zm-1.89-2.83c-.6,0-1.08-.79-1.08-1.76s.48-1.75,1.08-1.75,1.08.79,1.08,1.75S17.05,18.34,16.45,18.34ZM8.63,16.58c0-1-.48-1.75-1.08-1.75s-1.08.79-1.08,1.75S7,18.34,7.55,18.34,8.63,17.55,8.63,16.58ZM16,12c0-1.56-.78-2.83-1.75-2.83S12.54,10.44,12.54,12s.78,2.83,1.75,2.83S16,13.56,16,12Zm-4.58,0c0-1.56-.78-2.83-1.75-2.83S8,10.44,8,12s.78,2.83,1.75,2.83S11.46,13.56,11.46,12ZM8.19,22.11a5.92,5.92,0,0,0,1.91-.31h0a6,6,0,0,1,3.8,0h0a5.92,5.92,0,0,0,1.91.31H16a.93.93,0,0,0,.57-.19,1,1,0,0,0,.21-1.28l-2.34-3.79a2.84,2.84,0,0,0-4.82,0L7.25,20.64a1,1,0,0,0,.21,1.28.93.93,0,0,0,.57.19Z",
    filter:
      "M13,21.986a1.98,1.98,0,0,1-1.191-.4l-2-1.487A2.006,2.006,0,0,1,9,18.5V14.829a1,1,0,0,0-.293-.708L4.879,10.293A2.978,2.978,0,0,1,4,8.171V8A3,3,0,0,1,7,5H17a3,3,0,0,1,3,3v.171a2.983,2.983,0,0,1-.879,2.122l-3.828,3.828a1,1,0,0,0-.293.708v5.156a2,2,0,0,1-2,2ZM7,7A1,1,0,0,0,6,8v.171a1,1,0,0,0,.293.708l3.828,3.828A2.984,2.984,0,0,1,11,14.829V18.5l2,1.487V14.829a2.98,2.98,0,0,1,.879-2.122l3.828-3.828A1,1,0,0,0,18,8.171V8a1,1,0,0,0-1-1Zm9-4a1,1,0,0,0-1-1H9A1,1,0,0,0,9,4h6A1,1,0,0,0,16,3Zm0,6a1,1,0,0,0-1-1H9a1,1,0,0,0,0,2h6A1,1,0,0,0,16,9Z",
    weight:
      "M20,21a1,1,0,0,1-1,1H5a1,1,0,0,1,0-2H19A1,1,0,0,1,20,21ZM5.958,18.039a3.014,3.014,0,0,1-.79-2.269l.693-9A3.013,3.013,0,0,1,8.852,4H9A1,1,0,0,1,9,2h6a1,1,0,0,1,0,2h.148a3.013,3.013,0,0,1,2.991,2.77l.693,9A3,3,0,0,1,15.84,19H8.16A3.014,3.014,0,0,1,5.958,18.039Zm1.2-2.116A1,1,0,0,0,8.16,17h7.68a1,1,0,0,0,1-1.077l-.692-9a1,1,0,0,0-1-.923h-6.3a1,1,0,0,0-1,.923ZM11,15a.993.993,0,0,0,.93-.656l.363.363a1,1,0,0,0,1.414-1.414L12.414,12l1.293-1.293a1,1,0,1,0-1.414-1.414l-.363.363A.995.995,0,0,0,10,10v4A1,1,0,0,0,11,15Z",
    origin:
      "M19,20H7a1,1,0,0,1,0-2H19a1,1,0,0,0,0-2,3,3,0,0,1,0-6h2a1,1,0,0,1,0,2H19a1,1,0,0,0,0,2,3,3,0,0,1,0,6ZM9.342,16.553,11,13.236A9.527,9.527,0,0,0,12,9,5,5,0,0,0,2,9a9.521,9.521,0,0,0,1,4.236l1.658,3.316a2.618,2.618,0,0,0,4.684,0ZM10,9a7.505,7.505,0,0,1-.789,3.342L7.553,15.659a.642.642,0,0,1-1.106,0L4.789,12.342A7.512,7.512,0,0,1,4,9a3,3,0,0,1,6,0ZM7,8A1,1,0,1,0,8,9,1,1,0,0,0,7,8Z",
    extern:
      "M19.287,5.254a1,1,0,0,0-.923-.618H7.05a1,1,0,0,0,0,2h8.9L4.929,17.657a1,1,0,1,0,1.414,1.414L17.364,8.05v8.9a1,1,0,1,0,2,0V5.636A.991.991,0,0,0,19.287,5.254Z",
    lifeSpan:
      "M6.6,6a3.22,3.22,0,0,0-.74.19A.48.48,0,0,1,5.27,6l-.5-.87A.5.5,0,0,1,5,4.41,5.27,5.27,0,0,1,6.42,4,.51.51,0,0,1,7,4.5v1A.49.49,0,0,1,6.6,6ZM11,6A4.76,4.76,0,0,0,9.78,4.85l-.09-.07h0a.12.12,0,0,0-.08,0,.29.29,0,0,0-.18.07.41.41,0,0,0-.05.09l-.7,1.22a.22.22,0,0,0-.05.08.3.3,0,0,0,0,.1.29.29,0,0,0,.07.18h.08a3.16,3.16,0,0,1,.62.59.5.5,0,0,0,.65.11l.85-.5A.5.5,0,0,0,11,6ZM4,9V8.82a3.06,3.06,0,0,1,.22-1A.49.49,0,0,0,4,7.27l-.87-.51A.52.52,0,0,0,2.42,7,4.76,4.76,0,0,0,2,8.71H2A.25.25,0,0,0,2.26,9ZM20.72,5.66A5,5,0,0,0,12,9a1,1,0,0,0-2,0,2,2,0,0,0,4,0,3,3,0,0,1,5.23-2A3.15,3.15,0,0,1,19,11.28l-6.55,6.55a.57.57,0,0,1-.82,0L4.88,11.12a2.8,2.8,0,0,1-.32-.38.25.25,0,0,0-.23-.15h-.1l-1.31.75-.09.05a.385.385,0,0,0-.07.27.21.21,0,0,0,.06.1,5,5,0,0,0,.62.76l6.71,6.7a2.58,2.58,0,0,0,3.66,0l6.55-6.54a5.12,5.12,0,0,0,.36-7.02Z",
    chevron:
      "M3.076,12.382a1,1,0,0,1,.217-1.09l8-8a1,1,0,0,1,1.414,1.414L6.413,11H20a1,1,0,0,1,0,2H6.413l6.293,6.293a1,1,0,1,1-1.414,1.414l-8-8A1,1,0,0,1,3.076,12.382Z",
  };

  return (
    <Svg
      style={[styles[size], styles[color], style]}
      ref={ref}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}>
      <Path d={renderPath[children]} />
    </Svg>
  );
});

Icon.displayName = "Icon";
export default memo(Icon, (prev, next) => isEqual(prev, next));
