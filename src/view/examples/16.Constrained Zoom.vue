<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { XYZ } from "ol/source";
const key = "yQNKgRJjySz0q0Hai9xt";
const attributions = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' + '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const map = new Map({
  layers: [
    new TileLayer({
      source: new XYZ({
        attributions,
        url: "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=" + key,
      }),
    }),
  ],
  view: new View({
    center: [-13553864, 5918250],
    zoom: 11,
    minZoom: 9,
    maxZoom: 13,
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
  <div>view配置项 center 视图中心点</div>
  <div>view配置项 zoom 视图初始倍率</div>
  <div>view配置项 minZoom 视图最小倍率</div>
  <div>view配置项 maxZoom 视图最大倍率</div>
</template>
