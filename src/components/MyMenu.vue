<template>
  <div>
    <router-link to="/home"><el-button type="text">Go to Home</el-button></router-link>
    <router-link to="/test"><el-button type="text">Test</el-button></router-link>
    <router-link to="/01.AccessibleMap"><el-button type="text">01.简单的地图</el-button></router-link>
    <router-link to="/02.AdvancedMapboxVectorTiles"><el-button type="text">02.Mapbox地图</el-button></router-link>
    <router-link to="/03.AdvancedViewPositioning"><el-button type="text">03.地图定位</el-button></router-link>
    <router-link to="/04.AnimatedGIF"><el-button type="text">04.gif动画</el-button></router-link>
    <router-link to="/05.ArcGISRESTFeatureService"><el-button type="text">05.ArcGIS REST Feature Service</el-button></router-link>
    <router-link to="/06.ArcGISRESTwith512x512Tiles"><el-button type="text">06.ArcGIS REST with 512x512 Tiles</el-button></router-link>
    <router-link to="/07.Attributions"><el-button type="text">07.Attributions</el-button></router-link>
    <router-link to="/08.BingMaps"><el-button type="text">08.Bing Maps</el-button></router-link>
    <router-link to="/09.BoxSelection"><el-button type="text">09.Box Selection</el-button></router-link>
    <router-link to="/10.CanvasTiles"><el-button type="text">10.Canvas Tiles</el-button></router-link>
    <router-link to="/11.CartoDBsourceexample"><el-button type="text">11.CartoDB source example</el-button></router-link>
    <router-link to="/12.CloudOptimizedGeoTIFF(COG)"><el-button type="text">12.Cloud Optimized GeoTIFF (COG)</el-button></router-link>
    <router-link to="/13.ClusteredFeatures"><el-button type="text">13.Clustered Features</el-button></router-link>
    <router-link to="/14.ColorManipulation"><el-button type="text">14.Color Manipulation</el-button></router-link>
  </div>
</template>
<style lang="scss" scoped>
a {
  display: block;
  text-decoration: none;
}
.router-link-active .el-button--text {
  color: rgb(71, 71, 71);
}
</style>
