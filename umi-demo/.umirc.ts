import { defineConfig } from 'umi';

export default defineConfig({
  //MFSU方案，提高编译效率 https://github.com/umijs/umi/issues/6766
  mfsu: {},
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
