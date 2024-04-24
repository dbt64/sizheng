<script setup></script>

<template>
  <div class="nav">
    <div class="cont">
      <div class="n-left">
        <span>欢迎访问资政资源</span>
      </div>
      <div class="n-right">
        你好请：<el-button type="" class="login" color="red"
          >登录/注册</el-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  background-color: #f6f6f6;
  .cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    line-height: 30px;
    .login {
      border-radius: 0;
      color: white;
    }
  }
}
</style>
