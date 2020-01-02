<template>
  <div>
    <h1>Html 學習</h1>

    <h2>1. Html 基本架構</h2>
    <pre class="prettyprint">{{ htmlStructor }}</pre>
    <ul>
      <li>
        <!DOCTYPE html>
        - 告知瀏覽器這是 html 檔
      </li>
      <li>{{ htmlTag }} - 所有 html 代碼都寫在內</li>
      <li>
        lange="en" - 語言設定
      </li>
    </ul>

    <ul>
      <li>Heading 標籤</li>
      <li>img</li>
      <li>div</li>
      <li>p</li>
      <li>label</li>
      <li>input</li>
      <li>button</li>
      <li>a</li>
      練習：卡片
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlStructor: `
      <!DOCTYPE html>
      <html lang="en"> <-- 語言設定 -->
      <head>
        <meta charset="UTF-8"> <-- 編碼設定 --> 
        <title>Document</title>  <-- 網頁標題 --> 
      </head>
      <body>
        <-- 網頁顯示內容 --> 
      </body>
      </html>
      `,
      htmlTag: `<html></html>`
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

* {
  text-align: left;
}
</style>
