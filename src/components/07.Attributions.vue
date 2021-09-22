<script setup>
import { onMounted, ref } from "vue";

import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Attribution, defaults as defaultControls } from "ol/control";
const div = document.createElement("div");
div.innerHTML = ">";
const attribution = new Attribution({
  // 可折叠
  collapsible: true,
  // 折叠状态
  collapsed: false,
  collapseClassName: "div",
  collapseLabel: div,
  // className:'ol-attribution ol-unselectable ol-control'
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({}),
    }),
  ],
  controls: defaultControls({ attribution: false }).extend([attribution]),

  view: new View({
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
  }),
});
// 根据地图大小设置版权信息是否收缩
const checkSize = () => {
  const small = map.getSize()[0] < 600;
  attribution.setCollapsible(small);
  attribution.setCollapsed(small);
};
onMounted(() => {
  // 设置Target
  map.setTarget("map");
  attribution.setTarget("xxxx");
  // attribution.setMap
  // window.addEventListener('resize',checkSize)
});
</script>

<template>
  <div id="map" class="map"></div>
  <div id="xxxx" class="xxxx"></div>
</template>
