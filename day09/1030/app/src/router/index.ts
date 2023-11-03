import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/index',
    children:[
      {
        path:'/index',
        name:"Index",
        component: () => import(/* webpackChunkName: "about" */ '../views/ChildView/index.vue')
      },
      {
        path:'/classify',
        name:"Classify",
        component: () => import(/* webpackChunkName: "about" */ '../views/ChildView/classify.vue')
      },
      {
        path:'/cart',
        name:"Cart",
        component: () => import(/* webpackChunkName: "about" */ '../views/ChildView/cart.vue')
      },
      {
        path:'/my',
        name:"My",
        component: () => import(/* webpackChunkName: "about" */ '../views/ChildView/my.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]
// 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
