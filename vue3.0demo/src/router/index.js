import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/life',
    name: 'life',
    component: () => import('../views/life.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/education.vue')
  },
  {
    path: '/weixin',
    name: 'weixin',
    component: () => import('../views/weixin.vue')
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/detail.vue")
  }
]

const router = createRouter({
  linkActiveClass: "active", // 路由点击时的颜色
  history: createWebHashHistory(),
  routes
})

export default router
