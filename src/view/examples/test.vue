<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { NButton, NSpace } from "naive-ui";
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({
        // 设置归属版权信息
        attributions: '© <a href="#/01.AccessibleMap">test</a>',
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
  }),
});
const zoom = ref(map.getView().getZoom());
onMounted(() => {
  // 设置Target
  map.setTarget("map");
  // 分辨率改变时对zoom重新赋值
  map.getView().on("change:resolution", function (e) {
    zoom.value = map.getView().getZoom();
  });
});
const handleZoomOut = () => {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

const handleZoomIn = () => {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};
</script>
<template>
  <div id="map" class="map"></div>
  <NSpace>
    <n-button @click="handleZoomIn">放大</n-button>
    <n-button @click="handleZoomOut">缩小</n-button>
    <span>层级{{ zoom }}</span>
  </NSpace>
</template>
