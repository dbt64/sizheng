<script setup>
import { ref, reactive } from "vue";
import CasePenel from "./CasePenel.vue";
import { RouterLink } from "vue-router";

let data = ref([
  {
    title: "专业核心课",
    subTitle: "c语言",
    c: [
      {
        text1: "探究精神",
        text2: "创新思维",
      },
      {
        text1: "lorem ipsum dolor sit amet",
        text2: "Lorem ipsum dolor sit amet.",
      },
      {
        text1: "lorem ipsum dolor sit amet",
        text2: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    title: "专业平台课",
    subTitle: "电子电工",
    c: [
      {
        text1: "创新思维",
        text2: "动手实践",
      },
      {
        text1: "创新思维",
        text2: "动手实践",
      },
    ],
  },
]);
</script>

<template>
  <CasePenel
    v-for="(item, index) in data"
    :key="index"
    :title="item.title"
    :sub-title="item.subTitle"
  >
    <div class="item-cont">
      <div class="items" v-for="(items, index) in item.c" :key="index">
        <RouterLink to="/detail">
          <img src="@/assets/images/pic.jpg" alt="" />
          <p>
            {{ items.text1 }}
          </p>
          <p>
            {{ items.text2 }}
          </p>
          <p class="item-info">
            <span>观看人数</span>
            <span>免费</span>
          </p>
        </RouterLink>
      </div>
    </div>
  </CasePenel>
</template>

<style lang="scss" scoped>
.item-cont {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  .items {
    overflow: hidden;
    height: 320px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.4s;
    cursor: pointer;
    img {
      width: 100%;
    }
    p {
      margin: 10px;
      font-size: 14px;
      color: #333;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .item-info {
      display: flex;
      justify-content: space-between;
    }

    &:hover {
      box-shadow: 0px 8px 11px -4px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
