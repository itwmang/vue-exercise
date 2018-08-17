<template>
  <div>
    <el-menu :default-openeds="['1', '3']" router>
      <el-submenu v-for="item in subItemDatas" :key="item.menuId" :index="item.menuid">
        <template slot="title"><i class="el-icon-message"></i>{{item.menuName}}</template>
        <el-menu-item v-for="subItem in item.subMenu" :key="subItem.menuid" :index="subItem.menuUrl">
          {{subItem.menuName}}
        </el-menu-item>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'aside-vue',
  props: ['meuDatas'],
  data () {
    return {
      subItemDatas: []
    }
  },
  created () {
    this.$root.bus.$on('transferSubMneu', (data) => {
      this.subItemDatas = data
    })
  }

}
</script>

<style scoped>

</style>
