<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import { DragBox, Select } from "ol/interaction";
import { platformModifierKeyOnly } from "ol/events/condition";
const info = ref("");
const vectorSource = new VectorSource({
  url: "https://openlayers.org/en/latest/examples/data//geojson/countries.geojson",
  format: new GeoJSON(),
});
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({}),
    }),
    new VectorLayer({ source: vectorSource }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
    constrainRotation: 16,
    rotation: Math.PI / 3,
  }),
});
const select = new Select();
map.addInteraction(select);
const selectedFeatures = select.getFeatures();
const dragBox = new DragBox({ condition: platformModifierKeyOnly });
map.addInteraction(dragBox);
dragBox.on("boxend", function () {
  // 获取地图旋转角度
  const rotation = map.getView().getRotation();
  // 判断当前是否是正方向
  const oblique = rotation % (Math.PI / 2) !== 0;
  // 如果是正方向，使用selectedFeatures
  const candidateFeatures = oblique ? [] : selectedFeatures;
  // 获取绘制边界信息
  const extent = dragBox.getGeometry().getExtent();
  // 判断边界内的feature
  vectorSource.forEachFeatureIntersectingExtent(extent, function (feature) {
    candidateFeatures.push(feature);
  });
  // 不是正向时，对边界和原来边界内的feature旋转后重新判断是否包含在内
  if (oblique) {
    const anchor = [0, 0];
    const geometry = dragBox.getGeometry().clone();
    geometry.rotate(-rotation, anchor);
    const extent = geometry.getExtent();
    candidateFeatures.forEach(function (feature) {
      const geometry = feature.getGeometry().clone();
      geometry.rotate(-rotation, anchor);
      if (geometry.intersectsExtent(extent)) {
        selectedFeatures.push(feature);
      }
    });
  }
});
// 框选开始时，清空选择器
dragBox.on("boxstart", function () {
  selectedFeatures.clear();
});
// 当选择器发生变化时，修改info
selectedFeatures.on(["add", "remove"], function () {
  const names = selectedFeatures.getArray().map(function (feature) {
    return feature.get("name");
  });
  if (names.length > 0) {
    info.value = names.join(",");
  } else {
    info.value = "No countries selected";
  }
});
onMounted(() => {
  // 设置Target
  map.setTarget("map");
});
</script>

<template>
  <div id="map" class="map"></div>
  <span>{{ info }}</span>
</template>
