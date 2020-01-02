<template>
  <ul class="list-group list-group-flush">
    <li
      class="list-group-item"
      v-for="(item, index) in data"
      :key="index"
      @click="onClick({ index, item })"
    >
      {{ item }}
    </li>
  </ul>
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
  methods: {
    onClick(data) {
      alert(JSON.stringify(data))
    }
  }
}
</script>
