<template>
  <div>
    <h1>練習</h1>
    <p>練習項目清單</p>
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
          to: '/counter',
          title: 'Counter'
        },
        {
          to: '/search',
          title: 'Search'
        },
        {
          to: '/filterDemo',
          title: 'Filter Demo'
        },
        {
          to: '/listDemo',
          title: 'List Demo'
        },
        {
          to: '/modalDemo',
          title: 'Modal Demo'
        },
        {
          to: '/register',
          title: 'Register'
        },
        {
          to: '/ajaxDemo',
          title: 'Ajax Demo'
        },
        {
          to: '/refDemo',
          title: 'Ref Demo'
        },
        {
          to: '/carouselDemo',
          title: 'Carousel Demo'
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
