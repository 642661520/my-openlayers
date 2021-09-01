<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MyMenu from "./components/MyMenu.vue";
</script>
<template>
  <MyMenu class="menu" />
  <div class="content">
    <router-view />
  </div>
</template>

<style>
#app {
  display: flex;
}
.content{
  width: 80%;
}
.menu{
  width: 20%;
}
</style>
