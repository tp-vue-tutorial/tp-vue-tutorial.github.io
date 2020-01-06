<template>
  <div>
    <h1 class="text-center">Html 學習</h1>

    <h2 id="htmlStructor">1. 基本架構</h2>

    <pre class="prettyprint">{{ htmlStructor }}</pre>
    <ul>
      <li>
        <span>{{ doctypeTag }}</span>
        - 告知瀏覽器這是 html 檔
      </li>
      <li>
        <span>{{ htmlTag }}</span>
        - 所有 html 代碼都寫在內
      </li>
      <li>
        <span>lange="en"</span>
        - 語言設定
      </li>
      <li>
        <span>{{ headTag }}</span>
        - 告知搜尋引擎網頁內容、定義樣式、外部代碼連結
      </li>
      <li>
        <span>{{ titleTag }}</span>
        - 網頁標題
      </li>
      <li>
        <span>{{ bodyTag }}</span>
        - 放置網頁可視內容
      </li>
    </ul>
    <section class="tag_intro">
      <h2>2. 常用標籤</h2>

      <ul>
        <li>
          <h3 id="headingIntro">h1 - h6</h3>
          <p>
            網頁內文標題
          </p>
          <pre class="prettyprint">{{ headingIntro }}</pre>
          <div class="show" v-html="headingIntro" />
          <hr />
        </li>
        <li>
          <h3 id="divIntro">div</h3>
          <p>區塊顯示（換行）</p>
          <pre class="prettyprint">{{ divIntro }}</pre>
          <div class="show" v-html="divIntro" />
          <hr />
        </li>

        <li>
          <h3 id="spanIntro">span</h3>
          <p>區塊顯示（不換行）</p>
          <pre class="prettyprint">{{ spanIntro }}</pre>
          <div class="show" v-html="spanIntro" />
          <hr />
        </li>

        <li>
          <h3 id="pIntro">p</h3>
          <p>段落</p>
          <pre class="prettyprint">{{ pIntro }}</pre>
          <div class="show" v-html="pIntro" />
          <hr />
        </li>

        <li>
          <h3 id="aIntro">a</h3>
          <p>連結</p>
          <pre class="prettyprint">{{ aIntro }}</pre>
          <div class="show" v-html="aIntro" />
          <hr />
        </li>

        <li>
          <h3 id="buttonIntro">button</h3>
          <p>按鈕</p>
          <pre class="prettyprint">{{ buttonIntro }}</pre>
          <div class="show" v-html="buttonIntro" />
          <hr />
        </li>

        <li>
          <h3 id="inputIntro">input</h3>
          <p>輸入框</p>
          <pre class="prettyprint">{{ inputIntro }}</pre>
          <div class="show" v-html="inputIntro" />
          <hr />
        </li>

        <li>
          <h3 id="labelIntro">label</h3>
          <p>標籤</p>
          <pre class="prettyprint">{{ labelIntro }}</pre>
          <div class="show" v-html="labelIntro" />
          <hr />
        </li>

        <li>
          <h3 id="imgIntro">image</h3>
          <p>圖片</p>
          <pre class="prettyprint">{{ imgIntro }}</pre>
          <div class="show" v-html="imgIntro" />
          <hr />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctypeTag: '<!DOCTYPE html>',
      htmlStructor: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 架構介紹</title>
  </head>
  <body>
    <!-- 網頁顯示內容 --> 
  </body>
  </html>
      `,
      htmlTag: `<html></html>`,
      headTag: `<head></head>`,
      titleTag: `<title>HTML 架構介紹</title>`,
      bodyTag: `<body></body>`,
      headingIntro: `
  <h1>標題 1</h1>
  <h2>標題 2</h2>
  <h3>標題 3</h3>
  <h4>標題 4</h4>
  <h5>標題 5</h5>
  <h6>標題 6</h6>
      `,
      divIntro: `
  <div>代碼區塊 1</div>
  <div>代碼區塊 2</div>
  <div>代碼區塊 3</div>
      `,
      spanIntro: `
  <span>代碼區塊 1</span>
  <span>代碼區塊 2</span>
  <span>代碼區塊 3</span>
      `,
      pIntro: `
  <p>段落 1</p>
  <p>段落 2</p>
  <p>段落 3</p>
      `,
      aIntro: `
  <!-- 外部連結，開新分頁 -->
  <a href="https://google.com" target="_blank">google 搜尋</a><br>

  <!-- 內部連結 -->
  <a href="#headingIntro">Heading 介紹</a><br>
  <a href="#divIntro">div 介紹</a><br>
  <a href="#spanIntro">span 介紹</a><br>
  <a href="#pIntro">p 介紹</a><br>
      `,
      buttonIntro: `
  <button onclick="alert('按鈕點擊')">確認</button>
      `,
      inputIntro: `
  <input type="text" placeholder="請輸入文字" /><br>
  <input type="email" placeholder="請輸入信箱" /><br>
  <input type="password" placeholder="請輸入密碼" /><br>
  <input type="file" /><br>
  <input type="checkbox" name="vehicle" value="Bike" /> 自行車<br>
  <input type="checkbox" name="vehicle" value="Car" /> 汽車<br>
  <input type="radio" name="sex" value="male" /> 男<br>
  <input type="radio" name="sex" value="female" /> 女<br>
      `,
      labelIntro: `
  <input id="vehicle_bike" type="checkbox" name="vehicle" value="Bike" />
  <label for="vehicle_bike">自行車</label>
  <br>

  <input id="vehicle_car" type="checkbox" name="vehicle" value="Car" />
  <label for="vehicle_car">汽車</label>
  <br>

  <input id="sex_male" type="radio" name="sex" value="male" />
  <label for="sex_male">男</label>
  <br>

  <input id="sex_female" type="radio" name="sex" value="female" />
  <label for="sex_female">女</label>
      `,
      imgIntro: `
  <img src="http://shorturl.at/dvBS1" alt="貓">
      `
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

h2 {
  margin: 20px 0;
}

* {
  text-align: left;
}

li {
  margin: 10px 0;

  span {
    font-weight: bold;
  }
}

.tag_intro li {
  list-style-type: none;
}

.show {
  border: 1px solid #888;
  padding: 18px;
}
</style>
