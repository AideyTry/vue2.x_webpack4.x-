import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/auth'
Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: '登录',
    component: resolve => require(['views/account/login'], resolve)
  },
  {
    path:'',
    name: 'layout',
    meta: { requiresAuth: true },
    compoment: resolve => require(['views/layout/index'], resolve)
  }

]

const router = new Router({
  mode: 'history',
  routes: routes
})
console.log(1)
router.beforeEach((to, from, next) => {
  console.log(to.matched)
  // 通过meta字段来判断，有登录状态的页面需要在登录之后才能进入，无需登录状态的页面可直接进入。
  if(to.matched.some(record => record.meta.requiresAuth)){
    console.log('getToken()=', getToken())
    console.log('from1=', from)
    console.log('to1=', to)
    if(!getToken()){
      next({
        path: '/login',
        query: {redirect: to.fullPath} //把要跳转的地址作为参数传到下一步
      })
    } else {
      next()
      console.log('to1=', to)
      console.log('from2=', from)
    }
  } else {
    next()
  }
})

export default router