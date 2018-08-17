<template>
  <div>
    <!--<el-row :gutter="12">-->
      <!--<el-col :span="3">-->
        <!--<el-card shadow="hover" body-style="padding:0px">-->
          <!--{{title}}-->
        <!--</el-card>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <el-table :data="tableData" :header-cell-style="headCell" v-loading="loading">
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button
            size="mini">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger">删除
          </el-button>
        </template>
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
    setTimeout(() => {
      this.loading = false
    }, 1000)
    return {
      title: '主页',
      loading: true,
      tableData: Array(10).fill(item)
    }
  },
  computed: {
    routerParam: function () {
      // 接收params和query的值
      // return this.$route.params.routerParam
      return this.$route.query.routerParam
    }
  },
  methods: {
    headCell: function () {
      return 'text-align:center'
    }
  }
}
</script>

<style scoped>

</style>
