<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- logo -->
  <div class="logo">
    <div class="cont">
      <h1 class="title">思政资源库</h1>
      <nav class="logo-list">
        <ul>
          <li>
            <RouterLink to="/" exact-active-class="active">首页</RouterLink>
          </li>
          <li>
            <RouterLink to="/resource" active-class="active"
              >专业资源</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/case" active-class="active">课程资源</RouterLink>
          </li>
          <li>
            <RouterLink to="/element" active-class="active"
              >思政元素</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/nourish" active-class="active"
              >人才培养方案</RouterLink
            >
          </li>
          <li><RouterLink to="/special">思政专题</RouterLink></li>
          <li><a href="#">首页</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- header -->
  <div class="header">
    <div class="bg">
      <div class="cont">
        <div class="f-search">
          <form class="" action="">
            <input
              type="text"
              class="search"
              placeholder="请输入要搜索的内容"
            />
            <button>搜索</button>
          </form>
          <nav class="nav">
            <ul>
              <span>热门搜索词:</span>
              <li><a href="#">工匠精神</a></li>
              <li><a href="#">工匠精神</a></li>
              <li><a href="#">工匠精神</a></li>
              <li><a href="#">工匠精神</a></li>
              <li><a href="#">工匠精神</a></li>
              <li><a href="#">工匠精神</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 55px;
  .cont {
    display: flex;
  }
  .title {
    width: 250px;
    height: 55px;
    line-height: 50px;
    color: red;
  }
  .logo-list {
    margin-left: 10vw;
    width: 500px;
    ul {
      display: flex;
      justify-content: space-around;
      height: 55px;
      li {
        margin: 0 5px;
        line-height: 55px;
        a {
          font-size: 16px;
          transition: all 0.5s;

          &:hover {
            color: red;
          }
        }
        .active {
          color: red;
        }
      }
    }
  }
}

.header {
  .bg {
    background: url(@/assets/images/头部背景图.png) no-repeat top center/cover;
    height: 150px;
  }
  .cont {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .f-search {
      form {
        width: 400px;
        display: flex;
        text-align: center;
        border-radius: 5px;
        overflow: hidden;
        .search {
          width: 395px;
          height: 50px;
          padding-left: 10px;
        }
        button {
          width: 100px;
          height: 50px;
          background-color: #ffd838;
          color: red;
          &::before {
            content: "";
            display: inline-block;
            width: 15px;
            height: 15px;
            vertical-align: middle;
            background: url(@/assets/images/放大镜.png) no-repeat center/cover;
          }
        }
      }
      .nav {
        margin-top: 5px;
        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          span {
            font-size: 12px;
            color: #fff;
          }
          li {
            font-size: 12px;
            margin-left: 10px;
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
