// 考虑如何更好地在组件外部管理状态(把组件的共享状态抽取出来,以一个全局单例模式管理呢)
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import {user} from './moduls'

Vue.use(Vuex)
// 创建Store实例
const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})
export default store
