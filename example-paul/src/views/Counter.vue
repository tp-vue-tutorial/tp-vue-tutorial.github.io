<template>
  <div>
    <h1>Counter</h1>

    <p>Counter: {{ counter }}</p>

    <div>
      <button type="button" class="btn btn-primary mr-3" @click="compute(-1)">
        減 1
      </button>
      <button type="button" class="btn btn-primary mr-3" @click="reset">
        重置
      </button>
      <button type="button" class="btn btn-primary" @click="compute(1)">
        加 1
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /** 次數 */
      counter: 0
    }
  },
  methods: {
    /** 次數加 1 */
    plusOne() {
      this.counter++
    },
    /** 次數減 1 */
    minusOne() {
      if (this.counter > 0) {
        this.counter--
      }
    },
    /** 重置 */
    reset() {
      this.counter = 0
    },
    /**
     * @description 通用計算方法
     * @param {*} value 要加的值
     */
    compute(value) {
      const result = this.counter + value
      this.counter = result < 0 ? 0 : result
    }
  }
}
</script>
