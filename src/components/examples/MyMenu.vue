<template>
  <div class="menu">
    <router-link to="/examples/test"><el-button type="text">Test</el-button></router-link>
    <router-link to="/examples/01.AccessibleMap"><el-button type="text">01.简单的地图</el-button></router-link>
    <router-link to="/examples/02.AdvancedMapboxVectorTiles"><el-button type="text">02.Mapbox地图</el-button></router-link>
    <router-link to="/examples/03.AdvancedViewPositioning"><el-button type="text">03.地图定位</el-button></router-link>
    <router-link to="/examples/04.AnimatedGIF"><el-button type="text">04.gif动画</el-button></router-link>
    <router-link to="/examples/05.ArcGISRESTFeatureService"><el-button type="text">05.ArcGIS REST Feature Service</el-button></router-link>
    <router-link to="/examples/06.ArcGISRESTwith512x512Tiles"><el-button type="text">06.ArcGIS REST with 512x512 Tiles</el-button></router-link>
    <router-link to="/examples/07.Attributions"><el-button type="text">07.Attributions</el-button></router-link>
    <router-link to="/examples/08.BingMaps"><el-button type="text">08.Bing Maps</el-button></router-link>
    <router-link to="/examples/09.BoxSelection"><el-button type="text">09.Box Selection</el-button></router-link>
    <router-link to="/examples/10.CanvasTiles"><el-button type="text">10.Canvas Tiles</el-button></router-link>
    <router-link to="/examples/11.CartoDBsourceexample"><el-button type="text">11.CartoDB source example</el-button></router-link>
    <router-link to="/examples/12.CloudOptimizedGeoTIFF(COG)"><el-button type="text">12.Cloud Optimized GeoTIFF (COG)</el-button></router-link>
    <router-link to="/examples/13.ClusteredFeatures"><el-button type="text">13.Clustered Features</el-button></router-link>
    <router-link to="/examples/14.ColorManipulation"><el-button type="text">14.Color Manipulation</el-button></router-link>
    <router-link to="/examples/15.ConstrainedExtent"><el-button type="text">15.Constrained Extent</el-button></router-link>
    <router-link to="/examples/16.ConstrainedZoom"><el-button type="text">16.Constrained Zoom</el-button></router-link>
    <router-link to="/examples/17.CustomAnimation"><el-button type="text">17.Custom Animation</el-button></router-link>
    <router-link to="/examples/18.CustomCanvasTiles"><el-button type="text">18.Custom Canvas Tiles</el-button></router-link>
    <router-link to="/examples/19.CustomCircleRender"><el-button type="text">19.Custom Circle Render</el-button></router-link>
    <router-link to="/examples/20.CustomControls"><el-button type="text">20.Custom Controls</el-button></router-link>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.menu {
  // width: 20%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;

  a {
    display: block;
    background-color: rgb(248, 249, 250);
    text-decoration: none;
    padding-left: 10px;
    &:first-child {
      border-radius: 4px 4px 0px 0px;
    }
    &:last-child {
      border-radius: 0px 0px 4px 4px;
    }

    &:hover {
      background-color: rgb(218, 224, 229);
      border-radius: 4px;
      .el-button.el-button--text {
        color: rgb(255, 122, 0);
      }
    }
    overflow: hidden;
    .el-button.el-button--text {
      color: #03899c;
      font-weight: 700;
    }
    &.router-link-active .el-button--text {
      color: rgb(71, 71, 71);
    }
  }
}
</style>
