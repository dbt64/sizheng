<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="cont">
    <div class="Nourish">
      <ul class="nav">
        <router-link to="/detail" v-for="(item, index) in 4" :key="index">
          <li>
            <img src="@/assets/images/民族自豪感.png" alt="" />
            <div class="item-text">
              <h3>人才培养方案：计算机网路技术专业人才培养方案</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique quaerat nemo aperiam, explicabo sed numquam doloremque
                voluptatum nulla saepe iure eaque maiores, ea quam ad, culpa
                nisi pariatur. Deserunt, rerum! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Magnam dolorem minus deleniti
                temporibus nesciunt omnis aspernatur incidunt, nam ipsa
                voluptate ex tenetur deserunt eveniet consequuntur molestiae
                provident at recusandae ullam?
              </p>
              <p>修订日期：2024-03</p>
            </div>
          </li>
        </router-link>
      </ul>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="centered-pagination"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Nourish {
  margin-top: 1.25rem;
  .nav {
    padding: 30px;
    background-color: #fff;
    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      display: flex;
      height: 200px;
      margin: 20px 0;
      img {
        margin-right: 20px;
        object-fit: cover;
      }
      h3 {
        font-size: 20px;
      }
      p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        width: 75%;
        margin: 40px 0;
        color: #666;
      }
    }
  }
  .centered-pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
