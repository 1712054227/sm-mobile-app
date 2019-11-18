import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/search.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/bazaar',
      name: 'bazaar',
      component: () => import('@/views/bazaar/bazaar.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('@/views/car/car.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/mine/mine.vue')
    }
  ]
})
