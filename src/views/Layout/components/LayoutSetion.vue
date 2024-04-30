<script setup>
import LayoutItem from "./LayoutItem.vue";
</script>

<template>
  <div class="cont">
    <div class="main">
      <div class="banner">
        <aside class="aside">
          <ul>
            <li>通知公告</li>
            <li>计算机网络专业</li>
            <li>大数据技术专业</li>
            <li>人工智能技术应用专业</li>
            <li>云计算技术应用专业</li>
            <li>现代通信技术</li>
            <li>智能交通技术</li>
            <li>物联网技术应用</li>
            <li>嵌入式应用技术</li>
          </ul>
        </aside>
        <div class="swiper">
          <el-carousel :interval="5000" height="450px">
            <el-carousel-item class="c-item">
              <img src="@/assets/images/轮播图1.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item class="c-item">
              <img src="@/assets/images/轮播图2.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item class="c-item">
              <img src="@/assets/images/轮播图3.jpg" alt="" />
            </el-carousel-item>

            <el-carousel-item class="c-item">
              <img src="@/assets/images/轮播图4.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item class="c-item">
              <img src="@/assets/images/轮播图5.jpg" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="main-item">
          <div class="main-item-title">
            <h2>热门资源</h2>
            <ul>
              <li>
                1.聚焦学校重点任务，推动教学工作再上台阶一
                交通信息工程学院教研会
              </li>
              <li>
                2.联建共建促党建，互学互鉴共提升一云南特殊教育职业学院到我院学习交流
              </li>
              <li>
                3.智慧交通，安全赋能丨学校入选全国智能交通与信息安全行业产教融合共同体副理事长单位
              </li>
              <li>
                4.访企拓岗促就业专项行动|交通信息工程学院访云南极简科技有限公司、云南红岭云科技股份有限公司、杭州东信网络技术有限公司
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <LayoutItem />
</template>

<style lang="scss" scoped>
.main {
  margin-top: 10px;
  height: 450px;
  .banner {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    .aside {
      background-color: #fff;
      ul {
        border: 1px solid #ccc;
        li {
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 18px;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
    .swiper {
      overflow: hidden;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .main-item {
      height: 100%;
      background-color: #fff;
      color: #000;
      padding: 0 20px;
      border: 1px solid #ccc;
      ul {
        li {
          height: 40px;
          text-align: center;
          margin: 45px 0;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: red;
          }
        }
      }
    }
  }
}
</style>
