import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Tutorial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () =>
      import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  {
    path: '/practice',
    name: 'practice',
    component: () =>
      import(/* webpackChunkName: "practice" */ '../views/Practice.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () =>
      import(/* webpackChunkName: "practice" */ '../views/Search.vue')
  },
  {
    path: '/filterDemo',
    name: 'filterDemo',
    component: () =>
      import(/* webpackChunkName: "practice" */ '@/views/filterDemo.vue')
  },
  {
    path: '/listDemo',
    name: 'listDemo',
    component: () =>
      import(/* webpackChunkName: "practice" */ '@/views/listDemo.vue')
  },
  {
    path: '/modalDemo',
    name: 'modalDemo',
    component: () =>
      import(/* webpackChunkName: "practice" */ '@/views/filterDemo.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "practice" */ '@/views/filterDemo.vue')
  },
  {
    path: '/ajaxDemo',
    name: 'ajaxDemo',
    component: () =>
      import(/* webpackChunkName: "practice" */ '@/views/filterDemo.vue')
  },
  {
    path: '/refDemo',
    name: 'refDemo',
    component: () =>
      import(/* webpackChunkName: "practice" */ '@/views/filterDemo.vue')
  },
  {
    path: '/carouselDemo',
    name: 'carouselDemo',
    component: () =>
      import(/* webpackChunkName: "practice" */ '@/views/filterDemo.vue')
  },
  {
    path: '/counterWithState',
    name: 'counterWithState',
    component: () =>
      import(/* webpackChunkName: "practice" */ '@/views/filterDemo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
