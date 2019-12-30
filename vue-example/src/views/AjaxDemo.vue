<template>
  <div class="ajaxDemo">
    <h1 v-text="'Ajax Demo'"></h1>
    <p></p>
    <div class="content">
      <div style="border: 1px #CCC solid;">
        <div class="item-box" v-for="item in prodData" :key="item.prodName" @click="getItem(item)">
          <div class="item-img" :style="{ backgroundImage: `url(${item.prodImg})` }"></div>
          <div class="item-summary" v-text="item.prodName"></div>
        </div>
      </div>
    </div>
    <PopupModal :title="'產品明細資料'" :closeBtnName="'關閉'" :isOpen="control" @changeData="control = false">
      <div slot="content">
        <div class="item-img" :style="{ backgroundImage: `url(${prodDetailData[0].prodImg})` }"></div>
        <div class="item-box">
          <label v-text="'產品id :'"></label>
          <span v-text="prodDetailData[0].prodId"></span>
        </div>
        <div class="item-box">
          <label v-text="'品名 :'"></label>
          <span v-text="prodDetailData[0].prodName"></span>
        </div>
        <div class="item-box">
          <label v-text="'售價 :'"></label>
          <span v-text="prodDetailData[0].amount"></span>
        </div>
        <div class="item-box">
          <label v-text="'寬 :'"></label>
          <span v-text="prodDetailData[0].width"></span>
        </div>
        <div class="item-box">
          <label v-text="'高 :'"></label>
          <span v-text="prodDetailData[0].height"></span>
        </div>
        <div class="item-box">
          <label v-text="'重量 :'"></label>
          <span v-text="prodDetailData[0].weight"></span>
        </div>
        <div class="item-box">
          <label v-text="'說明 :'"></label>
          <span v-text="prodDetailData[0].description"></span>
        </div>
      </div>
    </PopupModal>
  </div>
</template>
<script>
import PopupModal from '../components/PopupModal.vue'
export default {
  name: 'ajaxDemo',
  components: {
    PopupModal
  },
  data() {
    return {
      control: false,
      prodData: [],
      prodDetailData: [
        {
          prodId: '',
          prodName: '',
          prodImg: '',
          amount: '',
          width: '',
          height: '',
          weight: '',
          description: ''
        }
      ]
    }
  },
  mounted() {
    this.getList()
  },
  computed: {},
  methods: {
    getList() {
      // 這裡要抓API，我先做假資料
      let temp = {
        isSuccess: true,
        message: '',
        data: [
          {
            prodId: 'ff36a0b8-8726-47f6-9f8a',
            prodName: '貓咪',
            prodImg: require('@/assets/img/cat.jpg')
          },
          {
            prodId: '464cf7bb-63f4-4d26-9269',
            prodName: '抹茶和紅豆',
            prodImg: require('@/assets/img/tortoise.jpg')
          }
        ]
      }
      this.prodData = temp.data
    },
    getItem(item) {
      this.control = true
      // 這裡要抓API，我先做假資料
      let temp = [
        {
          prodId: 'ff36a0b8-8726-47f6-9f8a',
          prodName: '貓咪',
          prodImg: require('@/assets/img/cat.jpg'),
          amount: '無價',
          width: '190 mm',
          height: '145 mm',
          weight: '185 公克',
          description: '可愛貓咪一隻'
        },
        {
          prodId: '464cf7bb-63f4-4d26-9269',
          prodName: '抹茶和紅豆',
          prodImg: require('@/assets/img/tortoise.jpg'),
          amount: '無價',
          width: '190 mm',
          height: '145 mm',
          weight: '185 公克',
          description: '2隻可愛小烏龜'
        }
      ]
      this.prodDetailData = temp.filter(data => {
        return data.prodId === item.prodId
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.ajaxDemo {
  width: 500px;
  margin: auto;

  .content {
    background-color: #eee;
    padding: 20px;

    .item-box {
      height: 120px;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 15px 20px;
      border-bottom: 1px #ccc solid;
      cursor: pointer;

      .item-img {
        height: 100%;
        width: 170px;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .item-summary {
        padding-left: 20px;
      }
    }

    .item-box:nth-last-child(1) {
      border-bottom: 0;
    }

    .item-box:hover {
      background-color: #fffaea;
    }
  }

  .popupModal-box {
    width: 700px;

    .item-img {
      height: 100px;
      width: 180px;
      background-repeat: no-repeat;
      background-size: cover;
      margin: auto;
      margin-bottom: 15px;
    }

    .item-box {
      display: flex;
      
      > label {
        margin-bottom: 0;
        width: 70px;
        text-align: right;
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
}
</style>
