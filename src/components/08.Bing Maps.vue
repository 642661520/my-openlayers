<script setup>
import { onMounted, ref,watch } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { BingMaps } from "ol/source";
import { NSelect } from "naive-ui";
const value = ref(0);
const styles = ["RoadOnDemand", "Aerial", "AerialWithLabelsOnDemand", "CanvasDark", "OrdnanceSurvey"];
const options = [];
const layers = [];
for (let i = 0; i < styles.length; ++i) {
  layers.push(
    new TileLayer({
      visible: i === value.value ? true : false,
      preload: Infinity,
      source: new BingMaps({
        key: "AgHgthGyDcFGMHyPq1KlqB6fvhA_a5XNnAAF6mAuDDrnTmxDBjGBDHpZqrUeU0AZ",
        imagerySet: styles[i],
      }),
    })
  );
  options.push({ label: styles[i], value: i });
}
const map = new Map({
  layers,
  view: new View({
    center: [-6655.5402445057125, 6709968.258934638],
    zoom: 13,
  }),
});
// 无法获取oldValue，改用watch
const handleUpdateValue = (value, option) => {
  console.log(value, option);
  
};
// 检测选项变化改变图层可见性
watch(value,(newValue, oldValue) => {
  layers[oldValue].setVisible(false);
  layers[newValue].setVisible(true);
});

onMounted(() => {
  // 设置Target
  map.setTarget("map");
});
</script>

<template>
  <div id="map" class="map"></div>
  <NSelect v-model:value="value" :options="options" default-value="RoadOnDemand" @update:value="handleUpdateValue"></NSelect>
</template>
