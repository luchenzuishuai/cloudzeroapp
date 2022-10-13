<template>
  <div>
    <el-table :data="peopleList" border style="width: 100%">
      <el-table-column prop="name" label="Name" width="180" align="center"></el-table-column>
      <el-table-column prop="state" label="State" width="180" align="center"></el-table-column>
      <el-table-column prop="salary" label="Salary" align="center"></el-table-column>
      <el-table-column prop="grade" label="Grade" align="center"></el-table-column>
      <el-table-column prop="room" label="Room" align="center"></el-table-column>
      <el-table-column prop="telnum" label="Telnum" align="center"></el-table-column>
      <el-table-column prop="picture" label="Picture" align="center"></el-table-column>
      <el-table-column prop="keywords" label="Keywords" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  async created () {
    // 人员列表数据
    const { data } = await this.$http.get('/people/fetchList')
    this.peopleList = data
  },
  data () {
    return {
      peopleList: []
    }
  }
}
</script>

<style>
</style>
