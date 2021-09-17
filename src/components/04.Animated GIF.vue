<script>
import { onMounted, defineComponent } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import { Stamen, Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";
export default defineComponent({
  setup() {
    const iconFeature = new Feature({
      geometry: new Point([0, 0]),
    });
    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const resterLayer = new TileLayer({
      source: new Stamen({
        layer: "toner",
      }),
    });
    const gifUrl = "https://openlayers.org/en/latest/examples/data/globe.gif";

    const gif = gifler(gifUrl);

    const map = new Map({
      layers: [resterLayer, vectorLayer],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    onMounted(() => {
      map.setTarget("map");

      // 设置gif到地图
      gif.frames(
        document.createElement("canvas"),
        function (ctx, frame) {
          if (!iconFeature.getStyle()) {
            iconFeature.setStyle(
              new Style({
                image: new Icon({
                  img: ctx.canvas,
                  imgSize: [frame.width, frame.height],
                  opacity: 0.8,
                }),
              })
            );
          }
          ctx.clearRect(0, 0, frame.width, frame.height);
          ctx.drawImage(frame.buffer, frame.x, frame.y);
          map.render();
        },
        true
      );

      // pointermove 鼠标移动事件
      map.on("pointermove", function (e) {
        // 获取鼠标位置
        const pixel = map.getEventPixel(e.originalEvent);
        // 判断当前位置是否有feature
        const hit = map.hasFeatureAtPixel(pixel);
        // 改变鼠标手势
        map.getTargetElement().style.cursor = hit ? "pointer" : "";
      });
    });

    return {};
  },
});
</script>

<template>
  <div id="map" class="map"></div>
</template>

<style scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>
