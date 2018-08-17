import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/home/main'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', name: 'login', component: _import('login/login') },
    { path: '/index',
      name: 'index',
      component: _import('home/index'),
      children: [
        { path: '/', name: 'main', component: main },
        { path: '*', name: '404', component: _import('errorPage/404') }
      ]
    }
  ]
})
