<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="cont">
    <div class="ele-item">
      <div class="items" v-for="(item, index) in 16" :key="index">
        <router-link to="/detail">
          <img src="@/assets/images/团队协作.png" alt="" />
          <div class="text">
            <span>免费</span>
            <span>90</span>
          </div></router-link
        >
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin-top: 10px"
    />
  </div>
</template>

<style lang="scss" scoped>
.cont {
  .ele-item {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    .items {
      background-color: #fff;
      .text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
        height: 50px;
      }
    }
  }
}
</style>
