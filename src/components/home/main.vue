<template>
  <div>

    <el-table ref="multipleTable" :data="tableData" stripe  tooltip-effect="dark" @selection-change="handleSelectionChange" header-row-class-name="header-class">
      <el-table-column type="selection" width="55" ></el-table-column>
      <el-table-column prop="date" label="日期" width="200">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'main-vue',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      multipleSelection: [],
      tableData: Array(10).fill(item)
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped>
  tr.header-class .cell{
    text-align: center;
  }
</style>
