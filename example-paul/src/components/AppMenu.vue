<template>
  <div>
    <div id="nav">
      <span v-for="(item, index) in items" :key="index">
        <router-link :to="item.link">
          {{ item.title }}
        </router-link>
        <span v-if="index !== items.length - 1">|</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
