export default {
  namespace: 'index',
  state: {
    height: 0,
    width: 0,
  },
  reducers: {
    updateSize(state, { payload: size }) {
      return {
        height: size.height,
        width: size.width,
      };
    },
  },
};
