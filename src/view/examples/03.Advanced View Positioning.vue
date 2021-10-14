<script setup>
import { onMounted } from "vue";
import Map from "ol/Map";
import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";
import { Vector } from "ol/layer";

const source = new VectorSource({
  url: "https://openlayers.org/en/latest/examples/data/geojson/switzerland.geojson",
  format: new GeoJSON(),
  wrapX:false,
});
const style = new Style({
  fill: new Fill({
    color: "rgba(255,255,255,0.6)",
  }),
  stroke: new Stroke({
    color: "#319fd3",
    width: 1,
  }),
  image: new CircleStyle({
    radius: 5,
    fill: new Fill({
      color: "rgba(255,255,255,0.6)",
    }),
    stroke: new Stroke({
      color: "#319fd3",
      width: 1,
    }),
  }),
});
const vectorLayer = new Vector({
  source,
  style,
});
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({wrapX:false}),
  
    }),
    vectorLayer,
  ],
  view: new View({
    center: [0, 0],
    zoom: 1,
    multiWorld:true
  }),
});
/**定位到区域 */
const ZoomToSwitzerland = () => {
  const feature = source.getFeatures()[0];
  console.log(feature);
  
  const polygon = feature.getGeometry();
  console.log(polygon);
   console.log(polygon.getCoordinates());
  map.getView().fit(polygon, { padding: [170, 50, 30, 150] });
};
/**定位到点 */
const ZoomToLausanne = () => {
  const feature = source.getFeatures()[1];
  const point = feature.getGeometry();
  map.getView().fit(point, { padding: [170, 50, 30, 150], minResolution: 50 });
};
/**中心定位 */
const CenterOnLausanne = () => {
  const feature = source.getFeatures()[1];
  const point = feature.getGeometry();
  const size = map.getSize();
  console.log(point.getCoordinates(), size);
  map.getView().centerOn(point.getCoordinates(), size, [size[0] * 0.5, size[1] *0.5]);
};
onMounted(() => {
  map.setTarget("map");
});
</script>

<template>
  <div id="map" class="map"></div>
  <el-button @click="ZoomToSwitzerland">ZoomToSwitzerland</el-button> (best fit).<br />
  <el-button @click="ZoomToLausanne">ZoomToLausanne</el-button> (with min resolution),<br />
  <el-button @click="CenterOnLausanne">CenterOnLausanne</el-button>
  <p>
    <div>知识点：</div>
    <div>获取地图在页面的dom大小 map.getSize();</div>
    <div>结构关系 vectorLayer(source(feature))</div>
    <div>获取Features source.getFeatures();</div>
    <div>获取几何图形 feature.getGeometry();</div>
    <div>获取坐标 geometry.getCoordinates();</div>
    <div>定位到某个区域或点 map.getView().fit(坐标,{padding:[边距],minResolution:最小分辨率});</div>
    <div>中心定位 map.getView().centerOn(坐标, 地图dom大小, [偏移量]);</div>
  </p>
</template>
