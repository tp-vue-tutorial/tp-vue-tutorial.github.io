<template>
  <div>
    <h1>CarouselDemo</h1>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in dataList" :key="item.prodId" class="swiper-slide">
          <img :src="item.prodImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

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
        new Swiper('.swiper-container', {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true
        })
      })
    })
  }
}
</script>
