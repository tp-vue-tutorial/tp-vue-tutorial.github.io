<template>
  <div>
    <h1>CarouselDemo</h1>
    <div class="tiny-slider">
      <div v-for="item in dataList" :key="item.prodId">
        <img :src="item.prodImg" :alt="item.prodName" />
      </div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider'
import 'tiny-slider/dist/tiny-slider.css'

export default {
  data() {
    return {
      slider: null,
      dataList: []
    }
  },
  mounted() {
    this.$axios.get('product/list').then(data => {
      this.dataList = data.data.data
      setTimeout(() => {
        this.slider = tns({
          container: '.tiny-slider',
          items: 1,
          mouseDrag: true,
          slideBy: 'page',
          autoplay: true
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
// .tiny-slider div {
//   height: 100px;
//   background-color: red;
// }
</style>
