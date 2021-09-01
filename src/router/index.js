import *as VueRouter from 'vue-router';
const routes = [
  { path: '/', component: () => import('../components/index.vue') },
  { path: '/01.简单的地图', component: () => import('../components/01.Accessible Map.vue') },
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
export default router;