<template>
  <div>
    <h1>Filter Demo</h1>

    <div class="card mx-auto" style="width: 40rem;">
      <div class="card-header">
        <input
          v-model="number"
          type="text"
          class="form-control"
          placeholder="請輸入數字"
        />
      </div>
      <div class="card-body text-left">
        轉換後的結果 => {{ number | toCurrency }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: '0'
    }
  },
  filters: {
    toCurrency(value) {
      const reg = /(\d)(?=(\d{3})+\.)/g
      return (value * 1).toFixed(2).replace(reg, '$1,')
    }
  }
}
</script>
