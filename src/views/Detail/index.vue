<script setup>
import Crumbs from "../Case/components/Crumbs.vue";
</script>

<template>
  <Crumbs />
  <div class="cont">
    <div class="detail">
      <div class="d-t">
        <div class="d-cover">
          <img src="@/assets/images/pic.jpg" alt="" />
        </div>
        <div class="d-info">
          <p>课程思政案例：《xxx》</p>
          <p>
            <span>收藏</span><span>分享</span><br /><br />
            <el-button type="primary" size="mini" color="red"
              >立即报名</el-button
            >
          </p>
        </div>
      </div>
      <div class="d-b"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detail {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  .d-t {
    width: 100%;
    display: flex;
    .d-cover {
      width: 30%;
      border-radius: 7px;
      overflow: hidden;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .d-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      p {
        &:first-child {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        span {
          margin-right: 10px;
        }
      }
    }
  }
  .d-b {
    width: 100%;
    height: 900px;
    border: 1px solid #000;
  }
}
</style>
