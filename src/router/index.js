import *as VueRouter from 'vue-router';
const routes = [
  { path: '/home', component: () => import('../components/index.vue') },
  { path: '/01.AccessibleMap', component: () => import('../components/01.Accessible Map.vue') },
  { path: '/02.AdvancedMapboxVectorTiles', component: () => import('../components/02.Advanced Mapbox Vector Tiles.vue') },
  { path: '/03.AdvancedViewPositioning', component: () => import('../components/03.Advanced View Positioning.vue') },
  { path: '/04.AnimatedGIF', component: () => import('../components/04.Animated GIF.vue') },
  { path:'/05.ArcGISRESTFeatureService',component: () => import('../components/05.ArcGIS REST Feature Service.vue')},
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