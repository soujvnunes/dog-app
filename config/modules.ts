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
};
