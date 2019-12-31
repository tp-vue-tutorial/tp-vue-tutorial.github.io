<template>
  <div id="app">
    <app-menu :items="menuList" />
    <router-view class="container" />
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue'

export default {
  components: {
    AppMenu
  },
  data() {
    return {
      menuList: [
        {
          link: '/',
          title: '教學大綱'
        },
        {
          link: '/about',
          title: '關於'
        },
        {
          link: '/practice',
          title: '練習'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
