export default {
  namespace: 'products',
  state: [
    { name: 'dva', id: 'dva' },
    { name: 'antd', id: 'antd' },
    { name: 'antd', id: '2' },
    { name: 'antd', id: '3' },
    { name: 'antd', id: '4' },
    { name: 'antd', id: '5' },
  ],
  reducers: {
    delete(state: any, { payload: id }: { payload: String }) {
      return state.filter(item => item.id !== id);
    },
  },
};
