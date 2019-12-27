<template>
  <div class="filterDemo">
    <h1 v-text="'Filter Demo'"></h1>
    <p></p>
    <div class="content">
      <input type="text" placeholder="請輸入數字" v-model="input"/>
      <div style="padding-left: 5px; margin: 10px 0;">
        <span v-text="'轉換後的結果 => '"></span>
        <span>{{input | commafy}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { commafy } from '@/utils/filters/index.js';
export default {
  name: 'filterDemo',
  components: {},
  data() {
    return {
      input: '10000.00',
    }
  },
  filters: {
    commafy
  },
  mounted() {},
  computed: {
  },
  methods: {
  }
}
</script>
<style>
.filterDemo {
  width: 400px;
  margin: auto
}
.filterDemo .content {
  background-color: #eee;
  padding: 10px 20px;
  text-align: left;
  display: flex;
  flex-direction: column
}
.filterDemo .content > input {
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  border: 1px #ccc solid;
  padding-left: 10px
}
</style>
