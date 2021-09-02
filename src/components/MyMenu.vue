<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/01.AccessibleMap">01.简单的地图</router-link>
    <router-link to="/02.AdvancedMapboxVectorTiles">02.Mapbox地图</router-link>
  </div>
</template>

<style scoped>
a {
  display: block;
}
</style>
