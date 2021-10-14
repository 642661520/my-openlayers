<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import EsriJSON from "ol/format/EsriJSON";
import { Fill, Stroke, Style } from "ol/style";
import VectorSource from "ol/source/Vector";
import { tile as tileStrategy } from "ol/loadingstrategy";
import { createXYZ } from "ol/tilegrid";
import VectorLayer from "ol/layer/Vector";
import { XYZ } from "ol/source";
import { fromLonLat } from "ol/proj";
const infos = ref("");
const serviceUrl = "https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/" + "Petroleum/KSFields/FeatureServer/";
const layer = "0";
const esrijsonFormat = new EsriJSON();
const styleCache = {
  ABANDONED: new Style({
    fill: new Fill({ color: "rgba(225, 225, 225, 255)" }),
    stroke: new Stroke({ color: "rgba(0, 0, 0, 255)", width: 0.4 }),
  }),
  GAS: new Style({
    fill: new Fill({
      color: "rgba(255, 0, 0, 255)",
    }),
    stroke: new Stroke({
      color: "rgba(110, 110, 110, 255)",
      width: 0.4,
    }),
  }),
  OIL: new Style({
    fill: new Fill({
      color: "rgba(56, 168, 0, 255)",
    }),
    stroke: new Stroke({
      color: "rgba(110, 110, 110, 255)",
      width: 0,
    }),
  }),
  OILGAS: new Style({
    fill: new Fill({
      color: "rgba(168, 112, 0, 255)",
    }),
    stroke: new Stroke({
      color: "rgba(110, 110, 110, 255)",
      width: 0.4,
    }),
  }),
};
const vectorSource = new VectorSource({
  loader: function (extent, resolution, projection, success, failure) {
    const url =
      serviceUrl +
      layer +
      "/query/?f=json&" +
      "returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=" +
      encodeURIComponent('{"xmin":' + extent[0] + ',"ymin":' + extent[1] + ',"xmax":' + extent[2] + ',"ymax":' + extent[3] + ',"spatialReference":{"wkid":102100}}') +
      "&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*" +
      "&outSR=102100";
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function (response) {
        if (response.error) {
          // alert(response.error.message + "\n" + response.error.details.join("\n"));
          failure();
        } else {
          // dataProjection will be read from document
          const features = esrijsonFormat.readFeatures(response, {
            featureProjection: projection,
          });
          if (features.length > 0) {
            vectorSource.addFeatures(features);
          }
          success(features);
        }
      },
      error: failure,
    });
  },
  strategy: tileStrategy(createXYZ({ tileSize: 512 })),
});
const vector = new VectorLayer({
  source: vectorSource,
  style: function (feature) {
    // 根据不同类型设置样式
    const classify = feature.get("activeprod");
    return styleCache[classify];
  },
});
const raster = new TileLayer({
  source: new XYZ({
    attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' + 'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/" + "World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  }),
});
const displayFeatureInfo = function (pixel) {
  const features = [];
  // 对当前位置下的要素进行遍历
  map.forEachFeatureAtPixel(pixel, function (feature) {
    features.push(feature);
  });
  if (features.length > 0) {
    const info = [];
    let i, ii;
    for (i = 0, ii = features.length; i < ii; ++i) {
      info.push(features[i].get("field_name"));
    }
    infos.value = info.join(",") || "(unknown)";
    map.getTargetElement().style.cursor = "pointer";
  } else {
    infos.value = "";
    map.getTargetElement().style.cursor = "";
  }
};
const map = new Map({
  layers: [raster, vector],
  view: new View({
    center: fromLonLat([-97.6114, 38.8403]),
    zoom: 7,
    minZoom: 4,
  }),
});
onMounted(() => {
  map.setTarget("map");
  map.on("pointermove", function (evt) {
    // 拖拽下退出
    if (evt.dragging) {
      return;
    }
    //通过屏幕位置获取地图位置
    const pixel = map.getEventPixel(
      //原始屏幕位置
      evt.originalEvent
    );
    displayFeatureInfo(pixel);
  });
  map.on("click", function (evt) {
    displayFeatureInfo(evt.pixel);
  });
});
</script>

<template>
  <div id="map" class="map"></div>
  <div>{{ infos }}</div>
</template>
