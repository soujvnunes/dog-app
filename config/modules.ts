export default {
  size(params: number) {
    return {
      width: params,
      height: params,
    };
  },
  color(color: string) {
    return {
      color,
    };
  },
  inset(value: number | string) {
    return { top: value, left: value, right: value, bottom: value };
  },
};
