<template>
  <div>
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'aside-vue',
  props: ['meuDatas'],
  data () {
    const sunMenus_ = [{
      menuId: '1',
      menuName: '流程模板',
      subMenu: [
        {menuId: 1.1, menuName: '流程模板创建', menuUrl: '/template/process'},
        {menuId: 1.2, menuName: '流程模板发布', menuUrl: '/template/deploy'}
      ]
    },
    {
      menuId: '2',
      menuName: '流程实例',
      subMenu: [
        {menuId: 2.1, menuName: '启动流程实例', menuUrl: '/21'},
        {menuId: 2.2, menuName: '我发起的流程', menuUrl: '/22'}
      ]
    },
    {
      menuId: '3',
      menuName: '工作项',
      subMenu: [
        {menuId: 3.1, menuName: '工作项办理', menuUrl: '/31'},
        {menuId: 3.2, menuName: '我的工作项', menuUrl: '/32'},
        {menuId: 3.3, menuName: '我办理的工作项', menuUrl: '/33'}
      ]
    }
    ]
    return {
      sunMenuData: sunMenus_
    }
  }
}
</script>

<style scoped>

</style>
