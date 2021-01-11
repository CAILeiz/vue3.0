import { createRouter, createWebHashHistory } from 'vue-router'
import life from '../views/Home.vue'

const routes = [
  {
    path: '/life',
    name: 'life',
    component: life
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/About.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/About.vue')
  },
  {
    path: '/weixin',
    name: 'weixin',
    component: () => import('../views/About.vue')
  },
]

const router = createRouter({
  linkActiveClass: "active", // 路由点击时的颜色
  history: createWebHashHistory(),
  routes
})

export default router
