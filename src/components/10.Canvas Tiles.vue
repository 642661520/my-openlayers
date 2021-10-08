<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import TileDebug from "ol/source/TileDebug";

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({}),
    }),
    new TileLayer({
      source: new TileDebug(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
  }),
});

onMounted(() => {
  // 设置Target
  map.setTarget("map");
});
</script>

<template>
  <div id="map" class="map"></div>
</template>
