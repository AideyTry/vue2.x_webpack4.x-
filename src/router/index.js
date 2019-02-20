import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: '登录',
    component: resolve => require(['views/account/login'], resolve)
  },
  {
    path:'/',
    name: 'layout',
    compoment: resolve => require(['views/layout'], resolve)
  }

]

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  // 通过meta字段来判断，有登录状态的页面需要在登录之后才能进入，无需登录状态的页面可直接进入。
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!Vue.cookie.get('token')){
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router