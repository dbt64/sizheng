<script setup>
defineProps({
  // 主标题
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  kname: {
    type: String,
  },
});
</script>

<template>
  <div class="item-list cont">
    <div class="big-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="small-title">
      <h4>{{ subTitle }}<span>物联网</span></h4>
      <a href="#">更多</a>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.item-list {
  margin-top: 20px;
  background-color: #fff;
  .big-title {
    text-align: center;
    height: 55px;
    font-size: 24px;
    h3 {
      height: 100%;
      line-height: 55px;
    }
  }
  .small-title {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    h4 {
      color: #333;
      font-size: 20px;
      &::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 56px;
        background-color: red;
        vertical-align: middle;
        margin-right: 5px;
      }
      span {
        font-size: 16px;
        color: red;
        margin-left: 10px;
      }
    }
    a {
      margin-right: 10px;
      color: red;
    }
  }
}
</style>
