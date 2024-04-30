<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="cont">
    <div class="special">
      <aside class="s-l">
        <ul>
          <li><RouterLink to="#">思政专题</RouterLink></li>
          <li><RouterLink to="#">总书记与大学生</RouterLink></li>
          <li><RouterLink to="#">百年精神谱系</RouterLink></li>
          <li><RouterLink to="#">我和我的祖国</RouterLink></li>
          <li><RouterLink to="#">数字中国</RouterLink></li>
          <li><RouterLink to="#">职业素养</RouterLink></li>
        </ul>
      </aside>
      <div class="s-r">
        <router-link to="/detail" v-for="(item, index) in 10" :key="index">
          <div class="items">
            <img src="@/assets/images/总书记与大学生.png" alt="" />
            <div class="item">
              <h3>总书记与大学生阴友们一“立大志、明大德、成大才、担大任</h3>
              <p>
                2021年9月。在清华大学建校110周年校庆日来临之际。习近平总书记来到清华大学考察，与师
                生代表座谈并发言。
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.special {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .s-l {
    width: 20%;
    position: sticky;
    top: 20px;
    height: calc(100vh - 20px);
    ul {
      background-color: #fff2cc;
      li {
        text-align: center;
        line-height: 55px;
        height: 55px;
        font-size: 16px;
        border-bottom: 2px solid #ccc;
        transition: all 0.3s ease;
        a {
          transition: all 0.3s ease;
        }
        &:hover {
          background-color: red;
        }
        &:hover > a {
          color: #fff;
        }
      }
    }
  }
  .s-r {
    width: 78%;
    .items {
      display: flex;
      img {
        width: 250px;
        height: 150px;
      }
      .item {
        margin-left: 20px;
        margin-bottom: 10px;
        h3 {
          font-size: 22px;
        }
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 100px;
          font-size: 14px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
