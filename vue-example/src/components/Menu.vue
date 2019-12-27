<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="menu-item">
      <router-link :to="item.path" v-text="item.name"></router-link>
      <div class="line" v-text="'|'" v-show="index !== items.length - 1"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.menu-item {
  display: flex;
  > a {
    padding: 0 5px;
  }
}
.menu-item:nth-last-child(1) {
  border-right: 0;
}
</style>
