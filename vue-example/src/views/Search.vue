<template>
  <div class="Search">
    <h1 v-text="'Search'"></h1>
    <p></p>
    <div class="content">
      <input type="text" placeholder="請輸入關鍵字" v-model="input" />
      <div v-text="`目前有 ${count} 筆資料`" style="margin: 15px 0;"></div>
      <div class="list">
        <div
          v-for="(item, index) in list()"
          :key="index"
          v-text="item"
          class="item"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {
      count: 0,
      input: '',
      data: ['Ada','Aaliyah','Adela','Basia','Bonnie','Brook','Candice','Celeste','Cheryl','Ella','Eudora','Gemma']
    }
  },
  methods: {
    list() {
      let temp = this.data.filter(item => {
        return item.toUpperCase().includes(this.input.toUpperCase())
      })
      this.count = temp.length
      return temp
    }
  }
}
</script>
<style lang="scss" scope>
.Search {
  font-family: 'Microsoft JhengHei';
  width: 400px;
  margin: auto;

  .content {
    background-color: #eee;
    padding: 10px 20px;
    text-align: left;
    display: flex;
    flex-direction: column;

    > input {
      height: 35px;
      line-height: 35px;
      border-radius: 5px;
      border: 1px #ccc solid;
      padding-left: 10px;
    }

    .list {
      background-color: #fff;
      border: 1px #ccc solid;
      border-radius: 5px;

      .item {
        height: 35px;
        line-height: 35px;
        border-bottom: 1px #ccc solid;
        padding-left: 10px;
      }

      .item:nth-last-child(1) {
        border-bottom: 0;
      }
    }
  }
}
</style>
