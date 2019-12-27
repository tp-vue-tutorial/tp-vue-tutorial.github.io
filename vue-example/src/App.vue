<template>
  <div id="app">
    <Menu id="nav" :items="link"></Menu>
    <router-view />
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
export default {
  name: 'app',
  components: {
    Menu
  },
  data() {
    return {
      link: [
        { name: '教學大綱', path: '/' },
        { name: '關於', path: '/about' },
        { name: '練習', path: '/practice' }
      ]
    }
  }
}
</script>
<style>
#app {
  font-family: 'Microsoft JhengHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > div:nth-child(2) {
  margin-top: 20px;
}
#nav {
  padding: 30px;
  background-color: #eee;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
