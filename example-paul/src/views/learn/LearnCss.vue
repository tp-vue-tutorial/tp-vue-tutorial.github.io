<template>
  <div>
    <h1 class="text-center">CSS 學習</h1>

    <h2>
      1. 選擇器
    </h2>

    <ul>
      <li>
        <a
          href="https://www.footmark.info/web-design/css/css-basic-selectors/"
          target="_blank"
        >
          選擇器介紹
        </a>
      </li>
    </ul>

    <h2>Box Model</h2>
    <ul>
      <li>
        <a
          href="https://medium.com/andy-blog/day11-html%E5%85%83%E7%B4%A0%E9%82%8A%E7%95%8C%E9%97%9C%E4%BF%82-margin-padding-border-f9e434c947fd#1f45"
          target="_blank"
        >
          margin
        </a>
        - 元素之間的間距。
      </li>
      <li>
        <a
          href="https://medium.com/andy-blog/day11-html%E5%85%83%E7%B4%A0%E9%82%8A%E7%95%8C%E9%97%9C%E4%BF%82-margin-padding-border-f9e434c947fd#6ea0"
        >
          padding
        </a>
        - 元素與自身內容的間距。
      </li>
      <li>border</li>
      <li>box-sizing</li>
    </ul>

    <h2>2. 文字樣式</h2>

    <ul>
      <li>
        <a href="https://www.w3schools.com/css/css_text.asp" target="_blank">
          color
        </a>
        - 文字顏色
      </li>
      <li>
        <a
          href="https://www.oxxostudio.tw/articles/201811/css-font-family.html"
          target="_blank"
        >
          font-family
        </a>
        - 字型
      </li>
      <li>
        <a
          href="https://www.oxxostudio.tw/articles/201809/css-font-size.html"
          target="_blank"
        >
          font-size
        </a>
        - 文字大小
      </li>

      <li>
        <a
          href="https://www.w3schools.com/cssref/pr_font_weight.asp"
          target="_blank"
        >
          font-weight
        </a>
        - 文字寬度
      </li>
    </ul>

    <h2>
      3. 版面配置
    </h2>

    <ul>
      <li>
        <a href="http://zh-tw.learnlayout.com/" target="_blank">
          版面配置基本教學
        </a>
      </li>
    </ul>

    <h2>flex</h2>

    <ul>
      <li>
        <a
          href="https://www.oxxostudio.tw/articles/201501/css-flexbox.html"
          target="_blank"
        >
          詳細介紹
        </a>
      </li>
      <li>
        <a href="https://flexboxfroggy.com/">
          小青蛙遊戲
        </a>
      </li>
    </ul>

    <ul>
      <li>background</li>
      <li>text color weight</li>
      <li>box-sizing, height, width</li>
      <li>display</li>
      <li>position</li>
      <li>margin</li>
      <li>padding</li>
      <li>border</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlFontFamilyExample: `
<div class="font-family-example">
  <h4>字體</h4>
</div>
        `
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}

.text-center {
  text-align: center;
}
</style>
