<template>
  <div v-if="isOpen" class="popup-modal-cover" @click="onCoverClick">
    <div class="popup-modal p-4">
      <h2>
        {{ title }}
      </h2>

      <hr />

      <div>
        <slot />
      </div>

      <button class="btn btn-primary mt-3" @click="onCloseModal">
        {{ closeBtnText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeBtnText: {
      type: String,
      default: 'Close PopupModal'
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    onCloseModal() {
      this.$emit('update:isOpen', false)
    },
    onCoverClick(event) {
      if (event.target.className === 'popup-modal-cover') {
        this.onCloseModal()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-modal-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}

.popup-modal {
  width: 40vw;
  background-color: #fff;
  opacity: 1;
  border-radius: 10px;
}
</style>
