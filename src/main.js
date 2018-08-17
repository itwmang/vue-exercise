// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
// import '@/styles/index.css'

// 使用elementui
Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: {
    bus
  },
  components: { App },
  template: '<App/>'
})
