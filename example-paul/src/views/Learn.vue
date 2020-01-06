<template>
  <div>
    <h1>教材</h1>
    <div class="card mx-auto" style="width: 20rem;">
      <div class="list-group list-group-flush">
        <router-link
          v-for="(item, index) in list"
          :key="index"
          :to="item.to"
          class="list-group-item"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          to: '/learn_html',
          title: 'Html'
        },
        {
          to: '/learn_css',
          title: 'CSS'
        },
        {
          to: '/learn_js',
          title: 'JS'
        },
        {
          to: 'learn_api',
          title: 'JSON Server & REST API'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
}
</style>
