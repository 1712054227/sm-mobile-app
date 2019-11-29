import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Layout'
    },
    {
      path: '/Layout',
      name: 'Layout',
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
      path: '/finca',
      name: 'finca',
      component: () => import('@/views/finca/finca.vue')
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
    },
    {
      path: '/mui',
      name: 'mui',
      component: () => import('@/views/mui/mui.vue')
    },
    {
      path: '/yesterday',
      name: 'yesterday',
      component: () => import('@/views/day/yesterday.vue')
    },
    {
      path: '/yesterday',
      name: 'yesterday',
      component: () => import('@/views/day/today.vue')
    },
    {
      path: '/yesterday',
      name: 'yesterday',
      component: () => import('@/views/day/tomorrow.vue')
    }
  ]
})
