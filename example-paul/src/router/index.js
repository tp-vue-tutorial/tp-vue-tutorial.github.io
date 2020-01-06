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
    path: '/counterWithState',
    name: 'counterWithState',
    component: () =>
      import(
        /* webpackChunkName: "counterWithState" */ '../views/CounterWithState.vue'
      )
  },
  {
    path: '/learn',
    name: 'learn',
    component: () =>
      import(/* webpackChunkName: "learn" */ '../views/Learn.vue')
  },
  {
    path: '/learn_api',
    name: 'learn_api',
    component: () =>
      import(/* webpackChunkName: "learn_api" */ '../views/learn/LearnApi.vue')
  },
  {
    path: '/learn_css',
    name: 'learn_css',
    component: () =>
      import(/* webpackChunkName: "learn_css" */ '../views/learn/LearnCss.vue')
  },
  {
    path: '/learn_js',
    name: 'learn_js',
    component: () =>
      import(/* webpackChunkName: "learn_js" */ '../views/learn/LearnJs.vue')
  },
  {
    path: '/learn_html',
    name: 'learn_html',
    component: () =>
      import(
        /* webpackChunkName: "learn_html" */ '../views/learn/LearnHtml.vue'
      )
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
