<template>
  <div class="container tutorial">
    <h1>Vue.js 教學大綱</h1>

    <!-- Day 1 - Start -->
    <h2>Day 1</h2>
    <p>內容會視成員對網頁技術的了解程度做調整</p>

    <h3>課程介紹</h3>
    <p>介紹課程內容。</p>

    <h3>自我介紹</h3>
    <p>全員自我介紹。</p>

    <h3>環境建置</h3>
    <ul>
      <li>VSCODE - 安裝、基本設定與套件安裝。</li>
      <!-- <p>
      VSCODE套件：Code Spell Checker、Vetur、ESLint、Prettier、Chinese Language
    </p> -->
      <li>Github - 介紹與帳號申請。</li>
      <li>Sourcetree - 版控 GUI 程式 Sourcetree 安裝、介紹及設定。</li>
      <li>Git - 介紹與基本使用方式。</li>
      <li>SSH - 介紹與設定。</li>
      <li>Node.js - 安裝與介紹。</li>
    </ul>

    <h3>HTML</h3>
    <ul>
      <li>
        網頁基本結構介紹 - html、head、body...。
      </li>
      <li>
        常用 html element 用法及介紹 (h1 - 6, div, p, input, table ...)。
      </li>
      <li>
        html element 講解 - 講解 html element 的結構 (tag, content,
        attributes)。
      </li>
    </ul>

    <h3>CSS</h3>
    <ul>
      <li>
        基礎 - 基本語法、選擇器、如何對 element
        下樣式、引入樣式的方式及優先度比較。
      </li>
      <li>基本排版 - html 及 css 的排版練習。</li>
      <li>開發者工具 - 在瀏覽器中使用開發者工具(F12) 查看及編輯 element。</li>
      <li>Bootstrap - 視教學情況做調整</li>
    </ul>
    <!-- Day 1 - End -->

    <!-- Day 2 - Start -->
    <h2>Day 2</h2>

    <h3>Javascript</h3>
    <ul>
      <li>
        基礎 -
        變數(variable)、方法(function)、物件(object)、陣列(array)...，解說及練習
      </li>
      <li>註解 - 講解代碼該如何註解及練習。</li>
      <li>代碼風格 - 命名規範、排版。</li>
      <li>Debug - js Debug 技巧。</li>
    </ul>

    <h3>Vue</h3>
    <ul>
      <li>Vue 基本介紹。</li>
      <li>安裝 chrome Vue.js devtools。</li>
      <li>
        視教學狀況選擇 CDN 引入 Vue 學習 (難度較低) 或直接學習 Vue-cli
        (難度較高)。
      </li>
      <!-- <li>
        基礎教學 - 以 CDN 的方式引入
        Vue，以清單搜尋範例講解vue的基本觀念及語法，new
        Vue、el(選擇器)、data、computed、v-bind、v-on、v-if、v-for
      </li> -->
    </ul>
    <!-- Day 2 - End -->

    <!-- Day 3-4 - Start -->
    <h2>Day 3 - 4</h2>

    <h3>Vue Cli</h3>

    <p>以下練習以 Thinkpower - Vue.js Labs 為主，會視學習情況做調整</p>

    <ul>
      <li>介紹 - 解說 spa 及如何使用 vue-cli 建立 spa 網站，專案架構說明。</li>
      <li>npm - 介紹及安裝 package。</li>
      <li>ES Lint、Prettier - 代碼風格規範及排版工具介紹。</li>
      <li>Vue template - 講解.vue檔、命名規則及如何編寫。</li>
      <li>vue-router - 講解如何由前端控制網站 router。</li>
    </ul>

    <h3 class="color-red">練習 (Vue.js Labs)</h3>

    <ul>
      <li>計數器 - 學習 data 綁定及 method。</li>
      <li>
        清單搜尋頁面 - 學習 v-model、v-for、computed、字串比對及 array fileter。
      </li>
      <li>數字專案 - 學習 vue filter。</li>
      <li>列表 Demo - 學習 v-on。</li>
      <li>nav Component - 學習寫 component。</li>
      <li>生命週期 - 介紹 vue component 的生命週期。</li>
      <li>modal Dmoe - 學習 slot、v-if、v-show。</li>
      <li>表單驗證 - 學習使用 VeeValidate 套件做表單驗證。</li>
      <li>focus Demo - 學習使用 refs 操作 dom 元素。</li>
    </ul>
    <hr />

    <h3>Restful api</h3>
    <ul>
      <li>介紹 - 介紹 Reatful api</li>
      <li>模擬 - 使用 json-server 模擬 api</li>
      <li>postman - postman 介紹與使用</li>
      <li>axios - axios 介紹與使用</li>
    </ul>

    <h3 class="color-red">API 串接練習 (Vue.js Labs)</h3>
    <ul>
      <li>
        產品明細列表 - 以 axios 串接 API，將後端資料綁定到畫面上。
      </li>
      <li>
        圖片輪播 - 學習使用 Owl Carousel 2 套件，以 axios 串接
        API，將後端資料綁定到輪播套件上。
      </li>
    </ul>
    <hr />
    <!-- <p>
      API：Restful Api 解說、如果沒有提供API則使用 json-server 模擬，先使用
      postman 熟悉 api 的操作，再使用 axios 練習
    </p> -->
    <!-- Day 3-4 - End -->

    <!-- Day 5-7 - Start -->
    <h2>Day 5 - 7</h2>

    <h3>專案實作</h3>

    <p>
      講解並從無到有實作招募網站後台部分頁面，以能獨立完成 API
      串接、驗證資料、顯示資料、完成 CRUD 功能為目標。
    </p>

    <h3>Q&A</h3>
    <p>回答問題。</p>

    <h3>結尾</h3>
    <p>講解目前前端生態與學習方向。</p>

    <!-- Day 5-7 - End -->
  </div>
</template>

<style lang="scss" scoped>
.tutorial {
  text-align: left;

  h1,
  h2,
  h3 {
    margin-top: 40px;
  }

  h2 {
    font-weight: bold;
  }

  h3 {
    color: rgb(80, 77, 77);
    font-size: 1.3rem;
  }

  .color-red {
    color: red;
  }
}
</style>
