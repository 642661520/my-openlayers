<script setup>
import { onMounted, ref, watch } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import { Cluster } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import { Fill, Stroke, Style, Text } from "ol/style";
import CircleStyle from "ol/style/Circle";
import { NSlider } from "naive-ui";
import { boundingExtent } from "ol/extent";
const distance = ref(40);
const minDistance = ref(20);
const count = 20000;
const features = new Array(count);
const e = 4500000;
for (let i = 0; i < count; i++) {
  const coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
  features[i] = new Feature(new Point(coordinates));
}
const source = new VectorSource({
  features,
});
const cluterSource = new Cluster({
  distance: parseInt(distance.value, 10),
  minDistance: parseInt(minDistance.value, 10),
  source,
});

const styleCahe = {};
const clusters = new VectorLayer({
  source: cluterSource,
  style: function (feature) {
    const size = feature.get("features").length;
    let style = styleCahe[size];
    if (!style) {
      style = new Style({
        image: new CircleStyle({
          radius: 10,
          stroke: new Stroke({
            color: "#fff",
          }),
          fill: new Fill({
            color: "#3399cc",
          }),
        }),
        text: new Text({
          text: size.toString(),
          fill: new Fill({
            color: "#fff",
          }),
        }),
      });
      styleCahe[size] = style;
    }
    return style;
  },
});
const rester = new TileLayer({
  source: new OSM(),
});
const map = new Map({
  layers: [rester, clusters],
  view: new View({
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
  }),
});
map.on("click", (e) => {
  clusters.getFeatures(e.pixel).then((clickedFeatures) => {
    if (clickedFeatures.length) {
      const features = clickedFeatures[0].get("features");
      if (features.length > 1) {
        const extent = boundingExtent(features.map((r) => r.getGeometry().getCoordinates()));
        map.getView().fit(extent, { duration: 1000, padding: [50, 50, 50, 50] });
      }
    }
  });
});
onMounted(() => {
  // 设置Target
  map.setTarget("map");
});

watch(distance, (v) => {
  cluterSource.setDistance(parseInt(distance.value, 10));
});
watch(minDistance, (v) => {
  cluterSource.setMinDistance(parseInt(minDistance.value, 10));
});
</script>

<template>
  <div id="map" class="map"></div>
  distance
  <NSlider v-model:value="distance" />
  minDistance
  <NSlider v-model:value="minDistance" />
</template>
