<script setup>
import { onMounted, ref } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import Feature from "ol/Feature";
import Circle from "ol/geom/Circle";
import { Style } from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

const circleFeature=new Feature({
  geometry:new Circle([12127405, 4063906], 55)
})
circleFeature.setStyle(
  new Style({
    /**
     * todo coordinates [[中心坐标],[边缘坐标？]]
     */
    renderer(coordinates,state){
      const [[x,y],[x1,y1]]=coordinates;1
      const ctx=state.context;
      const dx=x1-x;
      const dy=y1-y;
      const radius=Math.sqrt(dx*dx+dy*dy);
      const innderRadius=0;
      const outerRadius=radius*1.4;
      const gradient =ctx.createRadialGradient(x,y,innderRadius,x,y,outerRadius);
      gradient.addColorStop(0,'rgba(255,0,0,0)');
      gradient.addColorStop(0.6,'#ff000020');
      gradient.addColorStop(1,'#ff000090');
      ctx.beginPath();
      ctx.arc(x,y,radius,0,2*Math.PI,true);
      ctx.fillStyle=gradient;
      ctx.fill();
      ctx.arc(x,y,radius,0,2*Math.PI,true);
      ctx.strokeStyle='#f00';
      ctx.stroke();
    }
  })
)
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM({}),
      visible:true
    }),
    new VectorLayer({
      source:new VectorSource({
        features:[circleFeature]
      })
    })
  ],
  view: new View({
    center: [12127405, 4063906],
    zoom: 19,
  }),
});

onMounted(() => {
  // 设置Target
  map.setTarget("map");
});
</script>

<template>
  <div id="map" class="map"></div>
</template>
