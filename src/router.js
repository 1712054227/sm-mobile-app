import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout.vue'
// import Home from '@/views/home/home.vue'
// import Hot from '@/views/home/hot.vue'
// import Right from '@/views/home/right.vue'
// import Mine from '@/views/home/mine.vue'

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
    }
  ]
})
