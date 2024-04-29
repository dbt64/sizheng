<script setup>
/* let obj = [
  {
    title: "思政资源",
  },
  {
    title: "思政元素",
  },
]; */
</script>

<template>
  <div class="cont">
    <div class="laout-item">
      <div class="laout-title">思政元素</div>
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
    <div class="laout-item">
      <div class="laout-title">课程思政示范项目</div>
      <div class="content">
        <a href="https://www.xueyinonline.com/detail/240839200">
          <div class="items">
            <img src="@/assets/images/java.png" alt="" />
            <p>Java程序设计</p>
          </div>
        </a>
        <a
          href="https://mooc1-1.chaoxing.com/course-ans/courseportal/240840106.html"
        >
          <div class="items">
            <img src="@/assets/images/Android.png" alt="" />
            <p>移动应用开发</p>
          </div>
        </a>
        <a
          href="https://mooc1-1.chaoxing.com/course-ans/courseportal/230175026.html"
        >
          <div class="items">
            <img src="@/assets/images/数据可视化.png" alt="" />
            <p>数据可视化</p>
          </div>
        </a>
        <a
          href="https://mooc1.chaoxing.com/course-ans/courseportal/241216552.html"
        >
          <div class="items">
            <img src="@/assets/images/Web前端开发.png" alt="" />
            <p>Web前端开发</p>
          </div>
        </a>
        <a
          href="https://mooc1.chaoxing.com/course-ans/courseportal/236045994.html"
        >
          <div class="items">
            <img src="@/assets/images/大数据技术.png" alt="" />
            <p>大数据技术</p>
          </div>
        </a>
      </div>
    </div>
    <div class="laout-item">
      <div class="laout-title">思政专题</div>
      <div class="content">
        <div class="items">
          <img src="@/assets/images/总书记与大学生.png" alt="" />
          <p>总书记与大学生</p>
        </div>
        <div class="items">
          <img src="@/assets/images/科技为民.png" alt="" />
          <p>科技为民</p>
        </div>
        <div class="items">
          <img src="@/assets/images/百年精神谱系.png" alt="" />
          <p>百年精神谱系</p>
        </div>
        <div class="items">
          <img src="@/assets/images/数字中国十年成就.png" alt="" />
          <p>数字中国十年成就</p>
        </div>
        <div class="items">
          <img src="@/assets/images/职业理想和职业道德.png" alt="" />
          <p>职业理想和职业道德</p>
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
        object-fit: contain;
      }
      &:hover {
        box-shadow: 0px 12px 12px -8px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
