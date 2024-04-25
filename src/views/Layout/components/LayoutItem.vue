<script setup>
let obj = [
  {
    title: "思政资源",
  },
  {
    title: "课程思政",
  },
];
</script>

<template>
  <div class="cont">
    <div class="laout-item" v-for="(item, index) in obj" :key="index">
      <div class="laout-title">{{ item.title }}</div>
      <div class="content">
        <div class="items">
          <img src="@/assets/images/北斗精神.png" alt="" />
          <p>北斗精神</p>
        </div>
        <div class="items">
          <img src="@/assets/images/吃苦耐劳.png" alt="" />
          <p>吃苦耐劳</p>
        </div>
        <div class="items">
          <img src="@/assets/images/创新意识.png" alt="" />
          <p>创新意识</p>
        </div>
        <div class="items">
          <img src="@/assets/images/创新实践能力.png" alt="" />
          <p>创新实践能力</p>
        </div>
        <div class="items">
          <img src="@/assets/images/大数据技术.png" alt="" />
          <p>大数据技术</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.laout-item {
  margin: 40px 0;

  .laout-title {
    font-size: 24px;
    height: 45px;
    line-height: 45px;
    font-weight: bold;
    color: #000;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    .items {
      border-radius: 7px;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      p {
        font-size: 16px;
        color: #000;
        margin-left: 5px;
        height: 50px;
        line-height: 50px;
      }
      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
      }
      &:hover {
        box-shadow: 0px 12px 12px -8px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
