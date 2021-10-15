<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { NButton, NSpace } from "naive-ui";
const map_ref=ref();
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
  map.setTarget(map_ref.value);
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
  <div class="map" ref="map_ref"></div>
  <NSpace>
    <n-button @click="handleZoomIn">放大</n-button>
    <n-button @click="handleZoomOut">缩小</n-button>
    <span>层级{{ zoom }}</span>
  </NSpace>
  <p>
    <div>知识点：</div>
    <div>设置地图dom元素 map.setTarget("map");</div>
    <div>获取view map.getView();</div>
    <div>获取zoom view.getZoom();</div>
    <div>设置zoom view.setZoom(Number);</div>
    <div>zoom改变监听事件 map.getView().on("change:resolution",function(e){});</div>
  </p>
</template>
