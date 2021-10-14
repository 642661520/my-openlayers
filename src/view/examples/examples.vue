<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MyMenu from "../../components/examples/MyMenu.vue";
</script>
<template>
  <MyMenu />
  <div class="content">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
<style>
.map {
  width: 100%;
  height: 500px;
      background: url('https://openlayers.org/en/latest/examples/resources/map-background.jpg') repeat;
}
</style>
