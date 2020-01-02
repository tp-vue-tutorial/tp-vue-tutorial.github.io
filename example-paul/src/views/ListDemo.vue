<template>
  <div>
    <h1>List Demo</h1>

    <div class="card mx-auto" style="width: 40rem;">
      <list :data="data" />
    </div>
  </div>
</template>

<script>
import data from '@/data/name.json'
import List from '@/components/List'

export default {
  data() {
    return {
      data
    }
  },
  components: {
    List
  }
}
</script>
