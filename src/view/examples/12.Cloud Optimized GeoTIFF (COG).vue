<script setup>
import { onMounted } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import GeoTIFF from "ol/source/GeoTIFF";
import WebGLTileLayer from "ol/layer/WebGLTile";
const source = new GeoTIFF({
  sources: [
    {
      url: "https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/2020/S2A_36QWD_20200701_0_L2A/TCI.tif",
    },
  ],
});
const map = new Map({
  layers: [
    new WebGLTileLayer({
      source,
    }),
  ],
  view: source.getView(),
});

onMounted(() => {
  // 设置Target
  map.setTarget("map");
});
</script>

<template>
  <div id="map" class="map"></div>
</template>
