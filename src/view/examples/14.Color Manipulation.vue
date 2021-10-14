<script setup>
import { onMounted, ref, watch } from "vue";
import "ol/ol.css";
import ImageLayer from "ol/layer/Image";
import Map from "ol/Map";
import View from "ol/View";
import { Raster as RasterSource, Stamen } from "ol/source";
import { NSlider } from "naive-ui";

const hue = ref(0);
const chroma = ref(100);
const lightness = ref(100);

const Xn = 0.95047;
const Yn = 1;
const Zn = 1.08883;
const t0 = 4 / 29;
const t1 = 6 / 29;
const t2 = 3 * t1 * t1;
const t3 = t1 * t1 * t1;
const twoPi = 2 * Math.PI;

const rgb2xyz = (x) => {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
};
const xyz2lab = (t) => {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
};
const lab2xyz = (t) => {
  return t > t1 ? t * t * t : t2 * (t - t0);
};
const xyz2rgb = (x) => {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
};

const rgb2hcl = (pixel) => {
  const red = rgb2xyz(pixel[0]);
  const green = rgb2xyz(pixel[1]);
  const blue = rgb2xyz(pixel[2]);
  const x = xyz2lab((0.4124564 * red + 0.3575761 * green + 0.1804375 * blue) / Xn);
  const y = xyz2lab((0.2126729 * red + 0.7151522 * green + 0.072175 * blue) / Yn);
  const z = xyz2lab((0.0193339 * red + 0.119192 * green + 0.9503041 * blue) / Zn);
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  const c = Math.sqrt(a * a + b * b);
  let h = Math.atan2(b, a);
  if (h < 0) {
    h += twoPi;
  }

  pixel[0] = h;
  pixel[1] = c;
  pixel[2] = l;

  return pixel;
};

const hcl2rgb = (pixel) => {
  const h = pixel[0];
  const c = pixel[1];
  const l = pixel[2];

  const a = Math.cos(h) * c;
  const b = Math.sin(h) * c;

  let y = (l + 16) / 116;
  let x = isNaN(a) ? y : y + a / 500;
  let z = isNaN(b) ? y : y - b / 200;

  y = Yn * lab2xyz(y);
  x = Xn * lab2xyz(x);
  z = Zn * lab2xyz(z);

  pixel[0] = xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
  pixel[1] = xyz2rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
  pixel[2] = xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

  return pixel;
};

const raster = new RasterSource({
  sources: [
    new Stamen({
      layer: "watercolor",
    }),
  ],
  operation: function (pixels, data) {
    const hcl = rgb2hcl(pixels[0]);
    let h = hcl[0] + (Math.PI * data.hue) / 180;
    if (h < 0) {
      h += twoPi;
    } else if (h > twoPi) {
      h -= twoPi;
    }
    hcl[0] = h;
    hcl[1] *= data.chroma / 100;
    hcl[2] *= data.lightness / 100;
    return hcl2rgb(hcl);
  },
  lib: {
    rgb2hcl: rgb2hcl,
    hcl2rgb: hcl2rgb,
    rgb2xyz: rgb2xyz,
    lab2xyz: lab2xyz,
    xyz2lab: xyz2lab,
    xyz2rgb: xyz2rgb,
    Xn: Xn,
    Yn: Yn,
    Zn: Zn,
    t0: t0,
    t1: t1,
    t2: t2,
    t3: t3,
    twoPi: twoPi,
  },
});

raster.on("beforeoperations", function (event) {
  const data = event.data;
  data.hue = hue.value;
  data.chroma = chroma.value;
  data.lightness = lightness.value;
});

const map = new Map({
  layers: [
    new ImageLayer({
      source: raster,
    }),
  ],
  view: new View({
    center: [0, 2500000],
    zoom: 2,
    maxZoom: 18,
  }),
});

onMounted(() => {
  // 设置Target
  map.setTarget("map");
});

watch(hue, () => {
  raster.changed();
});
watch(chroma, () => {
  raster.changed();
});
watch(lightness, () => {
  raster.changed();
});
</script>

<template>
  <div id="map" class="map"></div>
  hue:{{ hue }}
  <NSlider v-model:value="hue" :min="-180" :max="180" />
  chroma:{{ chroma }}
  <NSlider v-model:value="chroma" />
  lightness:{{ lightness }}
  <NSlider v-model:value="lightness" />
</template>
