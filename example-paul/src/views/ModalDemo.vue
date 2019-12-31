<template>
  <div>
    <h1>Modal Demo</h1>
    <div class="card mx-auto" style="width: 40rem;">
      <card-body class="p-3">
        <button class="btn btn-primary" @click="isModalOpen = true">
          Open PopupModal
        </button>
      </card-body>
    </div>

    <popup-modal :is-open.sync="isModalOpen">
      Modal 練習
    </popup-modal>
  </div>
</template>

<script>
import PopupModal from '@/components/PopupModal.vue'

export default {
  components: {
    PopupModal
  },
  data() {
    return {
      /** Modal 是否開啟 */
      isModalOpen: false
    }
  }
}
</script>
