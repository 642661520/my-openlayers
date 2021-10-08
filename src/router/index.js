import * as VueRouter from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/home',
    hidden: true,
  },
  {
    path: '/test',
    component: () => import('../components/test.vue'),
  },
  {
    path: '/home',
    component: () => import('../components/index.vue'),
  },
  {
    path: '/01.AccessibleMap',
    component: () => import('../components/01.Accessible Map.vue'),
  },
  {
    path: '/02.AdvancedMapboxVectorTiles',
    component: () =>
      import('../components/02.Advanced Mapbox Vector Tiles.vue'),
  },
  {
    path: '/03.AdvancedViewPositioning',
    component: () => import('../components/03.Advanced View Positioning.vue'),
  },
  {
    path: '/04.AnimatedGIF',
    component: () => import('../components/04.Animated GIF.vue'),
  },
  {
    path: '/05.ArcGISRESTFeatureService',
    component: () => import('../components/05.ArcGIS REST Feature Service.vue'),
  },
  {
    path: '/06.ArcGISRESTwith512x512Tiles',
    component: () =>
      import('../components/06.ArcGIS REST with 512x512 Tiles.vue'),
  },
  {
    path: '/07.Attributions',
    component: () => import('../components/07.Attributions.vue'),
  },
  {
    path: '/08.BingMaps',
    component: () => import('../components/08.Bing Maps.vue'),
  },
  {
    path: '/09.BoxSelection',
    component: () => import('../components/09.Box Selection.vue'),
  },
  {
    path: '/10.CanvasTiles',
    component: () => import('../components/10.Canvas Tiles.vue'),
  },
  {
    path: '/11.CartoDBsourceexample',
    component: () => import('../components/11.CartoDB source example.vue'),
  },
  {
    path: '/12.CloudOptimizedGeoTIFF(COG)',
    component: () =>
      import('../components/12.Cloud Optimized GeoTIFF (COG).vue'),
  },
  {
    path: '/13.ClusteredFeatures',
    component: () => import('../components/13.Clustered Features.vue'),
  },
  {
    path: '/14.ColorManipulation',
    component: () => import('../components/14.Color Manipulation.vue'),
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log('====================================');
  console.log(to, from);
  console.log('====================================');
  next();
});
export default router;
