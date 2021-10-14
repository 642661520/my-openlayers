<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import {defaults as defaultControls, ZoomSlider} from 'ol/control'
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({}),
    }),
  ],
  keyboardEventTarget:document,
  controls:defaultControls().extend([new ZoomSlider()]),
  view: new View({
    center: [328627.563458, 5921296.662223],
    zoom: 8,
    extent: [-572513.341856, 5211017.966314, 916327.095083, 6636950.728974],
  }),
});

onMounted(() => {
  // 设置Target
  map.setTarget("map");
});
</script>

<template>
  <div id="map" class="map"></div>
  <div>知识点：</div>
  <div>view配置项 extent 视图可移动范围</div>
</template>
