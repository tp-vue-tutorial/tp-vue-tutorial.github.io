<template>
  <div class="about">
    <h1>關於</h1>
    <p>專案使用 Vue Cli 3 建立專案。</p>
    <p>
      提供開發環境，透過練習項目更了解 javascript 與 ES 6 語法並且實際練習使用
      Vue.js，以達到熟悉使用 Vue.js 開發之目的。此練習專案重點會放在 Vue.js
      上面，對於 javascript 的語言特性與新版語法沒有太多著墨。README.md
      文件最後會附上所有相關的參考資料連結，可依需要自行查閱。
    </p>
    <div slot="content" >
      <a target="_blank" v-for="item in list" :key="item.text" v-text="item.text" :href="item.href"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about',
  components: {},
  data() {
    return {
      list: [
        { text: 'Vue', href: 'https://cn.vuejs.org/v2/guide/#Vue-js-%E6%98%AF%E4%BB%80%E4%B9%88' },
        { text: 'Vue Cli 3', href: 'https://footmark.info/programming-language/vuejs/vue-cli3-seting/' },
      ]
    }
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
.about p {
  padding: 0 150px;
  text-align: left;
}
</style>
