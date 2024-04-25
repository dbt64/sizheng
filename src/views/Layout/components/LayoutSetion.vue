<script setup></script>

<template>
  <div class="cont">
    <div class="main">
      <div class="banner">
        <aside class="aside"></aside>
        <div class="swiper"></div>
        <div class="main-item"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 450px;
  .banner {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    .aside {
      background-color: pink;
    }
    .swiper {
      background-color: skyblue;
    }
    .main-item {
      background-color: purple;
    }
  }
}
</style>
