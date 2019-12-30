<template>
  <div class="modalDemo">
    <h1 v-text="'Modal Demo'"></h1>
    <p></p>
    <div class="content">
      <button class="btn btn-primary" v-text="'Open PopupModal'" @click="control = true"></button>
    </div>
    <PopupModal :title="'Demo Modal'" :isOpen="control" @changeData="control = false">
      <div slot="content">
        <div v-text="data"></div>
      </div>
    </PopupModal>
  </div>
</template>
<script>
import PopupModal from '../components/PopupModal.vue'
export default {
  name: 'modalDemo',
  components: {
    PopupModal
  },
  data() {
    return {
      control: false,
      data: '父組件傳入的內容'
    }
  },
  mounted() {},
  computed: {},
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.modalDemo {
  width: 400px;
  margin: auto;

  .content {
    background-color: #eee;
    padding: 10px 20px;
  }
}
</style>
