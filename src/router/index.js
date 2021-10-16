import * as VueRouter from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/home',
    hidden: true,
  },

  {
    path: '/examples',
    hidden: true,
    redirect: '/examples/index',
    component: () => import('../view/examples/examples.vue'),
    children: [
      {
        path: 'test',
        component: () => import('../view/examples/test.vue'),
      },
      {
        path: 'index',
        component: () => import('../view/examples/index.vue'),
      },
      {
        path: '01.AccessibleMap',
        component: () => import('../view/examples/01.Accessible Map.vue'),
      },
      {
        path: '02.AdvancedMapboxVectorTiles',
        component: () =>
          import('../view/examples/02.Advanced Mapbox Vector Tiles.vue'),
      },
      {
        path: '03.AdvancedViewPositioning',
        component: () =>
          import('../view/examples/03.Advanced View Positioning.vue'),
      },
      {
        path: '04.AnimatedGIF',
        component: () => import('../view/examples/04.Animated GIF.vue'),
      },
      {
        path: '05.ArcGISRESTFeatureService',
        component: () =>
          import('../view/examples/05.ArcGIS REST Feature Service.vue'),
      },
      {
        path: '06.ArcGISRESTwith512x512Tiles',
        component: () =>
          import('../view/examples/06.ArcGIS REST with 512x512 Tiles.vue'),
      },
      {
        path: '07.Attributions',
        component: () => import('../view/examples/07.Attributions.vue'),
      },
      {
        path: '08.BingMaps',
        component: () => import('../view/examples/08.Bing Maps.vue'),
      },
      {
        path: '09.BoxSelection',
        component: () => import('../view/examples/09.Box Selection.vue'),
      },
      {
        path: '10.CanvasTiles',
        component: () => import('../view/examples/10.Canvas Tiles.vue'),
      },
      {
        path: '11.CartoDBsourceexample',
        component: () =>
          import('../view/examples/11.CartoDB source example.vue'),
      },
      {
        path: '12.CloudOptimizedGeoTIFF(COG)',
        component: () =>
          import('../view/examples/12.Cloud Optimized GeoTIFF (COG).vue'),
      },
      {
        path: '13.ClusteredFeatures',
        component: () => import('../view/examples/13.Clustered Features.vue'),
      },
      {
        path: '14.ColorManipulation',
        component: () => import('../view/examples/14.Color Manipulation.vue'),
      },
      {
        path: '15.ConstrainedExtent',
        component: () => import('../view/examples/15.Constrained Extent.vue'),
      },
      {
        path: '16.ConstrainedZoom',
        component: () => import('../view/examples/16.Constrained Zoom.vue'),
      },
      {
        path: '17.CustomAnimation',
        component: () => import('../view/examples/17.Custom Animation.vue'),
      },
      {
        path: '18.CustomCanvasTiles',
        component: () => import('../view/examples/18.Custom Canvas Tiles.vue'),
      },
      {
        path: '19.CustomCircleRender',
        component: () => import('../view/examples/19.Custom Circle Render.vue'),
      },{
        path: '20.CustomControls',
        component: () => import('../view/examples/20.Custom Controls.vue'),
      },
    ],
  },
  {
    path: '/home',
    component: () => import('../view/index.vue'),
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
