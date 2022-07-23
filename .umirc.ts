import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // antd:{
  //   dark: false
  // },
  routes: [
    { path: '/', component: '@/pages/index.jsx' },
  ],
  fastRefresh: {},
});
