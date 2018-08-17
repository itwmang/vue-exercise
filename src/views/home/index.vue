<template>
  <div class="index">
    <el-container direction="vertical">

      <!--头部-->
      <el-header height="65">
        <Navbar :menuDatas="menuData"></Navbar>
      </el-header>
      <el-container>
        <!--左侧-->
        <el-aside width="200px">
          <Asidebar></Asidebar>
        </el-aside>
        <!--右侧-->
        <el-main>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {Navbar, Asidebar, Appmain} from '../../components/home'

export default {
  name: 'index-vue',
  components: {Navbar, Asidebar, Appmain},
  data () {
    const menus_ = [{
      menuId: '1',
      menuName: '系统管理',
      subMenu: [
        {menuId: 1.1, menuName: '用户管理', menuUrl: '/template/process'},
        {menuId: 1.2, menuName: '角色管理', menuUrl: '/template/deploy'}
      ]
    },
    {
      menuId: '2',
      menuName: '技术支持',
      subMenu: [
        {menuId: 2.1, menuName: 'API文档', menuUrl: '/21'},
        {menuId: 2.2, menuName: '参数描述', menuUrl: '/22'}
      ]
    },
    {
      menuId: '3',
      menuName: '关于我们',
      subMenu: [
        {menuId: 3.1, menuName: '公司简介', menuUrl: '/31'},
        {menuId: 3.2, menuName: '关于我们', menuUrl: '/32'},
        {menuId: 3.3, menuName: '人员招聘', menuUrl: '/33'}
      ]
    }
    ]
    return {
      menuData: menus_
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/variable.scss';

  .index {
    background: $white;
    .el-container {
      width: 100%;
      margin-bottom: 40px;
      @include border_;

      .el-header {
        font-size: 12px;
        text-align: center;
        line-height: 60px;
        height: 65px;
        border-bottom: 1px solid $huise;
      }

      .el-aside {
        text-align: center;
        line-height: 200px;
      }

      .el-main {
        background-color: #E9EEF3;
        text-align: center;
        line-height: 40px;
      }

    }

  }
</style>
