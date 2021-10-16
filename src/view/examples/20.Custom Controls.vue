<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Control, defaults as defaultControls } from "ol/control";
const map_ref = ref();

class RotateNorthControl extends Control {
  constructor(opt_options) {
    const options = opt_options || {};
    const button = document.createElement("button");
    button.innerHTML = "N";
    const element = document.createElement("div");
    element.className = "rotate-north ol-unselectable ol-control";
    element.appendChild(button);
    super({
      element,
      target: options.target,
    });
    button.addEventListener("click", this.handleRotateNorth.bind(this), false);
  }
  handleRotateNorth() {
    this.getMap().getView().setRotation(0);
  }
}

const map = new Map({
  controls: defaultControls().extend([new RotateNorthControl()]),
  layers: [
    new TileLayer({
      source: new OSM({}),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
    minZoom: 2,
    rotation: 1,
  }),
});

onMounted(() => {
  // 设置Target
  map.setTarget(map_ref.value);
});
</script>

<template>
  <div class="map" ref="map_ref"></div>
</template>
<style>
.rotate-north {
  top: 65px;
  left: 0.5em;
}
.ol-touch .rotate-north {
  top: 80px;
}
</style>
