<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import { unByKey } from "ol/Observable";
import { getVectorContext } from "ol/render";
import { easeOut } from "ol/easing";
import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";
const duration = 500;

const tileLayer = new TileLayer({
  source: new OSM({
    wrapX: false,
  }),
});
const source = new VectorSource({
  wrapX: false,
});
const vector = new VectorLayer({
  source,
});

const map = new Map({
  layers: [tileLayer, vector],
  view: new View({
    center: [0, 0],
    zoom: 2,
    multiWorld: true,
  }),
});
const addRandomFeature = () => {
  const x = Math.random() * 360 - 180;
  const y = Math.random() * 170 - 85;
  const geom = new Point(fromLonLat([x, y]));
  const feature = new Feature(geom);
  feature.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 5,
        stroke: new Stroke({
          width: 1,
          color: "#58a",
        }),
        fill: new Fill({
          color: "#bfa",
        }),
      }),
    })
  );
  source.addFeature(feature);
};
const flash = (feature) => {
  const start = Date.now();
  const flashGeom = feature.getGeometry().clone();
  const animate = (event) => {
    const frameState = event.frameState;
    const elapsed = frameState.time - start;
    if (elapsed >= duration) {
      unByKey(listenerKey);
      return;
    }
    const vectorContext = getVectorContext(event);
    const elapsedRatio = elapsed / duration;
    const radius = easeOut(elapsedRatio) * 25 + 5;
    const opacity = easeOut(1 - elapsedRatio);
    const style = new Style({
      image: new CircleStyle({
        radius,
        stroke: new Stroke({
          color: "rgba(255,0,0" + opacity + ")",
          width: 0.25 + opacity,
        }),
      }),
    });
    vectorContext.setStyle(style);
    vectorContext.drawGeometry(flashGeom);
    map.render();
  };
  const listenerKey = tileLayer.on("postrender", animate);
};

source.on("addfeature", function (e) {
  flash(e.feature);
});

onMounted(() => {
  // 设置Target
  map.setTarget("map");
  setInterval(addRandomFeature, 1000);
});
</script>

<template>
  <div id="map" class="map"></div>
  <div>知识点：</div>
  <div>source配置项 wrapX 设置x轴是否重复显示地图</div>
  <div>view配置项 multiWorld 设置是否可以缩小地图到地图外</div>
  <div>source添加feature触发事件 source.on("addfeature", function (e){});</div>
</template>
