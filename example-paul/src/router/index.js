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
    path: '/ajaxDemo',
    name: 'ajaxDemo',
    component: () =>
      import(/* webpackChunkName: "ajaxDemo" */ '../views/AjaxDemo.vue')
  },
  {
    path: '/carouselDemo',
    name: 'carouselDemo',
    component: () =>
      import(/* webpackChunkName: "carouselDemo" */ '../views/CarouselDemo.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () =>
      import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  {
    path: '/listDemo',
    name: 'listDemo',
    component: () =>
      import(/* webpackChunkName: "listDemo" */ '../views/ListDemo.vue')
  },
  {
    path: '/filterDemo',
    name: 'filterDemo',
    component: () =>
      import(/* webpackChunkName: "filterDemo" */ '../views/FilterDemo.vue')
  },
  {
    path: '/modalDemo',
    name: 'modalDemo',
    component: () =>
      import(/* webpackChunkName: "modalDemo" */ '../views/ModalDemo.vue')
  },
  {
    path: '/practice',
    name: 'practice',
    component: () =>
      import(/* webpackChunkName: "practice" */ '../views/Practice.vue')
  },
  {
    path: '/refDemo',
    name: 'refDemo',
    component: () =>
      import(/* webpackChunkName: "refDemo" */ '../views/RefDemo.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () =>
      import(/* webpackChunkName: "search" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
