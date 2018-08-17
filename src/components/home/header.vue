<template>
  <div class="vue-header">
    <el-row :gutter="30">
      <el-col :span="4">
        <div class="logo">
          <img src="../../assets/logo.svg"/>
        </div>
      </el-col>

      <el-col :span="18">
        <div class="menu">
          <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu  v-for="item in menuDatas" :key="item.menuId" :index="item.menuId">
              <template slot="title"> <i class="el-icon-menu"></i> <span>{{item.menuName}}</span></template>
              <el-menu-item v-for="subItem in item.subMenu" :key="subItem.menuId" :index="subItem.menuId">
                {{subItem.menuName}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>

      <el-col :span="2">
        <div class="toobar">工具栏</div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'header-vue',
  props: ['menuDatas'],
  data () {
    return {
    }
  },
  methods: {
    handleSelect: function (key, path) {
      console.info(key, path)
      let subMenu = [{
        menuId: '1',
        menuName: '系统管理',
        subMenu: [
          {menuId: 1.1, menuName: '用户管理', menuUrl: '/template/process'},
          {menuId: 1.2, menuName: '角色管理', menuUrl: '/template/deploy'}
        ]
      }]
      if (key === 2.1) {
        subMenu = [{
          menuId: '2',
          menuName: '技术支持',
          subMenu: [
            {menuId: 2.1, menuName: 'API文档', menuUrl: '/21'},
            {menuId: 2.2, menuName: '参数描述', menuUrl: '/22'}
          ]
        }]
      }
      this.$root.bus.$emit('transferSubMneu', subMenu)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/variable.scss';
  .vue-header {
    background-color: white;
    .logo{
    }
  }
</style>
