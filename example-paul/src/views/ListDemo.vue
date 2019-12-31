<template>
  <div>
    <h1>List Demo</h1>

    <div class="card mx-auto" style="width: 40rem;">
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(name, index) in nameList"
          :key="index"
          @click="onNameClick({ index, name })"
        >
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import nameList from '@/data/name.json'

export default {
  data() {
    return {
      nameList
    }
  },
  methods: {
    onNameClick(data) {
      alert(JSON.stringify(data))
    }
  }
}
</script>
