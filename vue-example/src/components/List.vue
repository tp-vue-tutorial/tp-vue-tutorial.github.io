<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in data" :key="index" v-text="item" @click="clickitem(item, index)"></div>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    data: {
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
  methods: {
    clickitem(item, index){
      alert(`index: ${index}, value: ${item}`)
    }
  }
}
</script>
<style scope>
.list-item {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px #ccc solid;
  cursor: pointer;
}
.list-item:hover {
  background-color: #fffcf4;
}
.list-item:nth-child(1) {
  border-top: 1px #ccc solid;
}
</style>
