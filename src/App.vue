<script setup>
import Haeder from "./components/header/index.vue";
</script>
<template>
  <Haeder />
  <div class="main">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  .main {
    display: flex;
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>
