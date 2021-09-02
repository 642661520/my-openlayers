import *as VueRouter from 'vue-router';
const routes = [
  { path: '/home', component: () => import('../components/index.vue') },
  { path: '/01.AccessibleMap', component: () => import('../components/01.Accessible Map.vue') },
  { path: '/02.AdvancedMapboxVectorTiles', component: () => import('../components/02.Advanced Mapbox Vector Tiles.vue') },
  { path: '/', redirect: '/home', hidden: true },
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
router.beforeEach((to, from,next) => {
  console.log('====================================');
  console.log(to, from);
  console.log('====================================');
  next()
})
export default router;