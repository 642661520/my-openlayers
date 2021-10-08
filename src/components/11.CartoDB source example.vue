<script setup>
import { onMounted, ref, watch } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { CartoDB } from "ol/source";
import { NSelect } from "naive-ui";
const value = ref(0);
const options = [
  { label: "0 km^3", value: 0 },
  { label: "5000 km^3", value: 5000 },
  { label: "10000 km^3", value: 10000 },
  { label: "50000 km^3", value: 50000 },
  { label: "100000 km^3", value: 100000 },
  { label: "500000 km^3", value: 500000 },
  { label: "1000000 km^3", value: 1000000 },
];

const mapConfig = {
  layers: [
    {
      type: "cartodb",
      options: {
        cartocss_version: "2.1.1",
        cartocss: "#layer { polygon-fill: #F00; }",
        sql: "select * from european_countries_e where area > 0",
      },
    },
  ],
};

const cartoDBSource = new CartoDB({
  account: "documentation",
  config: mapConfig,
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({}),
    }),
    new TileLayer({
      source: cartoDBSource,
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

const setArea = (n) => {
  mapConfig.layers[0].options.sql = "select * from european_countries_e where area > " + n;
  cartoDBSource.setConfig(mapConfig);
};
onMounted(() => {
  // 设置Target
  map.setTarget("map");
});
watch(value, (newv) => {
  setArea(newv);
});
</script>

<template>
  <div id="map" class="map"></div>
  <n-select v-model:value="value" :options="options" />
</template>
