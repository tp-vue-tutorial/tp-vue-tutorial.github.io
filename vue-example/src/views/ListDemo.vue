<template>
  <div class="listDemo">
    <h1 v-text="'List Demo'"></h1>
    <p></p>
    <div class="content">
      <list :data="data" v-if="data.length > 0"></list>
    </div>
  </div>
</template>
<script>
import list from '@/components/List.vue'
export default {
  name: 'listDemo',
  components: {
    list
  },
  data() {
    return {
      data: ['AA', 'BB']
    }
  },
  mounted() {},
  computed: {},
  methods: {
    clickitem(item, index) {
      alert(`{"index":${index},"value":"${item}"}`)
    }
  }
}
</script>
<style lang="scss" scope>
.listDemo {
  width: 400px;
  margin: auto;
  
  .content .item {
    height: 35px;
    line-height: 35px;
    border-bottom: 1px #ccc solid;
  }
}
</style>
