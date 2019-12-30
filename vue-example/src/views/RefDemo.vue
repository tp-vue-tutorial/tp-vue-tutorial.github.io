<template>
  <div class="refDemo">
    <h1 v-text="'Ref Demo'"></h1>
    <p></p>
    <div class="content">
      <input type="text" ref="input">
      <button class="btn btn-primary" v-text="'Set Focus'" @click="inputFoucus"></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'refDemo',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {},
  computed: {},
  methods: {
    inputFoucus() {
      this.$refs.input.focus()
    }
  }
}
</script>
<style lang="scss" scoped>
.refDemo {
  width: 400px;
  margin: auto;

  .content {
    background-color: #eee;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;

    > input {
      margin-bottom: 10px
    }

    > button {
      width: 100px;
      margin: auto
    }
  }
}
</style>
