<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Fill, Stroke, Style, Text } from "ol/style";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import MVT from "ol/format/MVT";
import { TileDebug } from "ol/source";

const style = new Style({
  fill: new Fill({
    color: "rgba(255,255,255,0.6)",
  }),
  stroke: new Stroke({
    color: "#319fd3",
    width: 1,
  }),
  text: new Text({
    font: "12px Calibri,sans-serif",
    fill: new Fill({
      color: "#000",
    }),
    stroke: new Stroke({
      color: "#fff",
      width: 3,
    }),
  }),
});

const vtLayer = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    maxZoom: 15,
    format: new MVT(),
    url: "https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/" + "ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
    wrapX: false,
  }),

  opacity: 0.9,
  style: function (feature) {
    style.getText().setText(feature.get("name"));
    return style;
  },
});

const debugLayer = new TileLayer({
  source: new TileDebug({
    template: "z:{z} x:{x} y:{-y}",
    projection: vtLayer.getSource().getProjection(),
    tileGrid: vtLayer.getSource().getTileGrid(),
    zDirection: 1,
    wrapX: false,
  }),
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({
        wrapX: false,
      }),
    }),
    vtLayer,
    debugLayer,
  ],
  view: new View({
    center: [0, 6000000],
    zoom: 4,
    multiWorld: true,
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
  <div></div>
</template>
