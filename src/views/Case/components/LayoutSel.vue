<script setup></script>

<template>
  <div class="cont">
    <div class="kecheng">
      <div class="k-item">
        <nav v-for="(item, index) in 2" :key="index" class="item-list">
          <ul>
            <span>课程:</span
            >&nbsp;
            <li><a class="active" href="#">Java</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">Java</a></li>
          </ul>
          <div class="gd">
            <a href="#">更多</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kecheng {
  position: relative;
  top: -40px;
  width: 100%;
  margin-top: 20px;
  background: #fff;
  display: flex;
  padding: 40px 40px;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: -1px 2px 13px -4px rgba(0, 0, 0, 0.4);

  .k-item {
    height: 100%;
    width: 100%;
    .item-list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      ul {
        height: 100%;
        display: flex;
        justify-content: space-around;
        span {
          width: 60px;
          color: #666;
        }
        li {
          width: 55px;
          height: 25px;
          text-align: center;
          line-height: 22px;
          margin-left: 10px;
          a {
            display: block;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            transition: all 0.4s;
            &:hover {
              color: red;
            }
          }
          .active {
            background-color: red;
            color: #fff;
          }
        }
      }
      .gd {
        a {
          color: red;
        }
      }
    }
  }
}

.active {
  background-color: red;
  color: #fff;
  border-radius: 5px;
}
</style>
