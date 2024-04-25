<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutSetion from "./components/LayoutSetion.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutSetion />
  <LayoutFooter />  
</template>

<style scoped></style>
