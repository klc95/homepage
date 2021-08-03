import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/manage', component: '@/pages/manage/index' },
  ],
  fastRefresh: {},
  proxy: {
    "/homepage": {
      "target": "http://localhost:3000/",
      "changeOrigin": true,
    }       
  }
});
