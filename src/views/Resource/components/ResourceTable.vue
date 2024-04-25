<script setup>
import { ref, reactive } from "vue";

const tableStyle = reactive({
  color: "#000",
  background: "rgba(255,0,0,0.1) !important",
});
const tableData = ref([
  {
    data: 1,
    time: "2023-06-01 12:00:00",
    name: "测试用例1",
  },
  {
    data: 2,
    time: "2023-06-02 12:00:00",
    name: "测试用例2",
  },
  {
    data: 3,
    time: "2023-06-02 12:00:00",
    name: "测试用例2",
  },
]);
</script>

<template>
  <div class="cont">
    <div class="r-table">
      <div class="title">
        <h4>资源列表</h4>
      </div>
      <div class="search">
        <el-input
          style="width: 240px; margin-right: 10px"
          placeholder="请输入搜索内容"
        />
        <el-button type="primary" color="red">搜索</el-button>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 100%"
          :header-cell-style="tableStyle"
        >
          <el-table-column prop="data" label="序号" width="180" />
          <el-table-column prop="time" label="时间" width="180" />
          <el-table-column prop="name" label="名称" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.r-table {
  margin-top: 20px;
  .title {
    margin-bottom: 10px;
    h4 {
      font-size: 24px;
      height: 50px;
      line-height: 50px;
      &::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 35px;
        background-color: red;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
  .search {
    margin-bottom: 10px;
  }
}
</style>
