<template>
  <div v-if="isOpen" class="popup-modal-cover">
    <div class="popup-modal p-4">
      <h2>
        {{ title }}
      </h2>

      <hr />

      <div>
        <slot />
      </div>

      <button class="btn btn-primary mt-3" @click="onCloseModal">
        關閉
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
