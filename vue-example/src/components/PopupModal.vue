<template>
  <div class="popupModal" v-if="open" @click="close">
    <div class="popupModal-box">
      <div class="pm-box-title" v-text="title"></div>
      <div class="pm-box-content">
        <slot name="content"></slot>
      </div>
      <div class="pm-box-btn">
        <button
          class="btn btn-primary"
          v-text="closeBtnName"
          @click="$emit('changeData')"
        ></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'popupModal',
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    closeBtnName: {
      type: String,
      default: 'Close PopupModal'
    }
  },
  components: {},
  data() {
    return {
      open: false
    }
  },
  mounted() {},
  computed: {},
  methods: {
    close(event) {
      if (event.target.className === 'popupModal') {
        this.$emit('changeData')
      }
    }
  },
  watch: {
    isOpen() {
      this.open = this.isOpen
    }
  }
}
</script>
<style lang="scss" scoped>
.popupModal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #343a4080;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .popupModal-box {
    width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 7px;

    .pm-box-title {
      padding: 10px 0 20px 0;
      border-bottom: 1.5px #ccc solid;
      font-size: 20px;
      font-weight: bold;
    }

    .pm-box-content {
      min-height: 100px;
      padding: 15px 0;
    }

    .pm-box-btn {
      border-top: 1.5px #ccc solid;
      padding-top: 20px;
    }
  }
}
</style>
