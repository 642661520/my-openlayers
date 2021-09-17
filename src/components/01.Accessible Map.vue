<script>
import { onMounted, defineComponent } from "vue";

import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
export default defineComponent({
  setup() {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    onMounted(() => {
      map.setTarget("map");
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

    return {
      handleZoomOut,
      handleZoomIn,
    };
  },
});
</script>

<template>
  <div id="map" class="map"></div>
  <el-button @click="handleZoomIn">放大</el-button>
  <el-button @click="handleZoomOut">缩小</el-button>
</template>

<style scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>
