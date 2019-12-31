<template>
  <div>
    <h1>Search</h1>

    <div class="card mx-auto" style="width: 40rem;">
      <div class="card-header">
        <input
          v-model="searchValue"
          type="text"
          class="form-control"
          placeholder="請輸入關鍵字"
        />
      </div>
      <div class="card-body text-left">
        <div>目前有 {{ filterList.length }} 筆資料</div>
        <ul v-if="filterList.length" class="list-group mt-3">
          <li
            v-for="(item, index) in filterList"
            :key="index"
            class="list-group-item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import nameList from '@/data/name.json'

export default {
  data() {
    return {
      /** @type {string[]} */
      list: nameList,
      searchValue: ''
    }
  },
  computed: {
    filterList() {
      return this.list.filter(item =>
        item.toUpperCase().includes(this.searchValue.toUpperCase())
      )
    }
  }
}
</script>
