import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/home/main'

let env = process.env.NODE_ENV
const _import = require('./_import_' + env)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', name: 'login', component: _import('login/login') },
    { path: '/index',
      name: 'index',
      component: _import('home/index'),
      children: [
        { path: '*', name: '404', component: _import('errorPage/404') },
        { path: '/main', name: 'main', component: main },
        { path: '/users', name: 'userManager', component: _import('user/userManager') }
      ]
    }
  ]
})
