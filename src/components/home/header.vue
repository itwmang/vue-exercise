<template>
  <div class="vue-header">
    <el-row :gutter="30">
      <el-col :span="4">
        <div class="logo">
          <img src="../../assets/logo.svg"/>
        </div>
      </el-col>

      <el-col :span="16">
        <div class="menu">
          <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu  v-for="item in menuDatas" :key="item.menuId" :index="item.menuId.toString()">
              <template slot="title"> <i class="el-icon-menu"></i> <span>{{item.menuName}}</span></template>
              <el-menu-item v-for="subItem in item.subMenu" :key="subItem.menuId" :index="subItem.menuId.toString()">
                {{subItem.menuName}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>

      <el-col :span="4">
        <!--<div class="toobar">工具栏</div>-->

          <span class="title">当前语言:{{language}}</span>
          <el-dropdown class="drop-style" trigger="hover" :hide-timeout="hideTimeout">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,key) in settingData" :key="key">
                <router-link :to="item.menuUrl" class="route-link">{{item.menuName}}</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="title">{{author}}</span>
        <img />
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'header-vue',
  props: ['menuDatas', 'settingData'],
  data () {
    return {
      defaultActive: '1.1',
      hideTimeout: 2000
    }
  },
  computed: {
    author () {
      return this.$store.getters.author
    },
    language () {
      return this.$store.getters.language
    }
  },
  mounted () {
    this.$root.$store.dispatch('defaultMenu')
    this.$root.bus.$emit('transferSubMneu', this.$root.$store.getters.defaultMenu)
  },
  methods: {
    handleSelect: function (key, path) {
      console.info(key, path)
      let subMenu = [{
        menuId: '1',
        menuName: '系统管理',
        subMenu: [
          {menuId: 1.1, menuName: '用户管理', menuUrl: '/users'},
          {menuId: 1.2, menuName: '角色管理', menuUrl: '/roles'}
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
