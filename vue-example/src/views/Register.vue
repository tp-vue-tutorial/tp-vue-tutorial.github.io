<template>
  <div class="register">
    <h1 v-text="'Register'"></h1>
    <p></p>
    <div class="content">
      <div class="item">
        <div class="input-box">
          <label v-text="'身份證字號'"></label>
          <input type="text" />
        </div>
        <div class="prompt" v-text="'此欄位為必填欄位'"></div>
      </div>
      <div class="item">
        <div class="input-box">
          <label v-text="'姓名'"></label>
          <input type="text" />
        </div>
        <div class="prompt" v-text="'此欄位為必填欄位'"></div>
      </div>
      <div class="item">
        <div class="input-box">
          <label v-text="'性別'"></label>
        </div>
        <div class="prompt" v-text="'此欄位為必填欄位'"></div>
      </div>
      <div class="item">
        <div class="input-box">
          <label v-text="'手機號碼'"></label>
          <input type="text" />
        </div>
        <div class="prompt" v-text="'此欄位為必填欄位'"></div>
      </div>
      <div class="btn-box">
        <button class="btn btn-light mr-3" v-text="'送出'"></button>
        <button class="btn btn-light" v-text="'清除'"></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  components: {},
  data() {
    return {
      selected: null
    }
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.register {
  width: 400px;
  margin: auto;

  .content {
    background-color: #eee;
    padding: 10px 20px;

    .item {
      margin: 20px 0;

      .input-box {
        display: flex;
        align-items: center;

        > label {
          margin-bottom: 0;
          width: 100px;
          text-align: right;
          padding-right: 10px;
        }

        > input {
          padding-left: 10px;
          flex: 1;
        }
      }

      .prompt {
        font-size: 13px;
        text-align: left;
        padding-left: 110px;
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
