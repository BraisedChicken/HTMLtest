import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products', component: '@/pages/products' },
    { path: '/home', component: '@/pages/home' },
    { path: '/*', component: '@/pages/unfind' },
  ],
});
