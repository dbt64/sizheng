<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutSel from "./components/LayoutSel.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutSel />
  <RouterView />
</template>

<style scoped></style>
