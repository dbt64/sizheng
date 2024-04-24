<script setup>
import CasePenel from "./CasePenel.vue";
import { ref } from "vue";

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
]);
</script>

<template>
  <CasePenel :title="`课程标准`" :subTitle="tableData[0].name">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="data" label="序号" width="180" />
      <el-table-column prop="time" label="时间" width="180" />
      <el-table-column prop="name" label="名称" />
    </el-table>
  </CasePenel>
</template>

<style scoped></style>
