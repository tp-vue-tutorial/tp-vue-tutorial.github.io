<template>
  <div class="Practice">
    <h1>練習</h1>
    <p>練習項目清單</p>
    <ul>
      <li v-for="item in link" :key="item.name">
        <router-link :to="item.path" v-text="item.name"></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Practice',
  components: {},
  data() {
    return {
      link: [
        { name: 'Home', path: '/' },
        { name: 'Counter', path: '/counter' },
        { name: 'Search', path: '/search' },
        { name: 'filterDemo', path: '/filterDemo' },
        { name: 'listDemo', path: '/listDemo' }
      ]
    }
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.Practice {
  margin-top: 40px;
  width: 400px;
  margin: auto;

  > ul {
    background-color: #eee;

    li {
      text-align: left;
      height: 35px;
      line-height: 35px;
    }
  }
}
</style>
