<script setup>
import { onMounted } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { XYZ } from "ol/source";
const map = new Map({
  layers: [
    new TileLayer({
      source: new XYZ({
        attributions: "Copyright:© 2013 ESRI, i-cubed, GeoEye",
        url: "https://services.arcgisonline.com/arcgis/rest/services/" + "ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}",
        maxZoom: 11,
        projection: "EPSG:4326",
        titleSize: 512,
        maxResolution: 360 / 512,
        wrapX: true,
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    projection: "EPSG:4326",
    zoom: 2,
    minZoom: 2,
  }),
});
onMounted(() => {
  map.setTarget("map");
});
</script>

<template>
  <div id="map" class="map"></div>
</template>
