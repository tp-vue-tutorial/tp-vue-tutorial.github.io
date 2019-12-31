<template>
  <div>
    <h1>Ajax Demo</h1>

    <div class="card">
      <div class="card-body text-left">
        <ul class="list-group list-group-flush">
          <li
            v-for="item in list"
            :key="item.prodId"
            class="list-group-item"
            @click="onClick(item.prodId)"
          >
            <div>
              <img :src="item.prodImg" :alt="item.prodName" />
              {{ item.prodName }}
            </div>
          </li>
        </ul>
      </div>
    </div>

    <popup-modal v-if="data" title="產品明細資料" :is-open.sync="isModalOpen">
      <div class="text-left">
        <div class="text-center">
          <img :src="data.prodImg" :alt="data.prodName" />
        </div>
        <div>
          <span>產品 id：</span>
          {{ data.prodId }}
        </div>
        <div>
          <span>品名：</span>
          {{ data.prodName }}
        </div>
        <div>
          <span>售價：</span>
          {{ data.amount }}
        </div>
        <div>
          <span>寬：</span>
          {{ data.width }}
        </div>
        <div>
          <span>高：</span>
          {{ data.height }}
        </div>
        <div>
          <span>重量：</span>
          {{ data.weight }}
        </div>
        <div>
          <span>說明：</span>
          {{ data.description }}
        </div>
      </div>
    </popup-modal>
  </div>
</template>

<script>
import PopupModal from '@/components/PopupModal'

export default {
  components: {
    PopupModal
  },
  data() {
    return {
      data: null,
      isModalOpen: false,
      list: []
    }
  },
  async mounted() {
    const response = await this.$axios.get('product/list')
    this.list = response.data.data
  },
  methods: {
    onClick(prodId) {
      this.isModalOpen = true
      this.$axios
        .post('product/detail', { prodId })
        .then(({ data }) => {
          this.data = data.data
          this.isModalOpen = true
        })
        .catch(() => {
          console.log('no')
        })
    }
  }
}
</script>
