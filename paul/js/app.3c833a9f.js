(function(e){function t(t){for(var n,o,u=t[0],l=t[1],c=t[2],s=0,v=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function u(e){return l.p+"js/"+({about:"about",counter:"counter",practice:"practice",search:"search"}[e]||e)+"."+{about:"d720bedf",counter:"d7f27030",practice:"40c0d263",search:"1058f27c"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about",counter:"counter",practice:"practice",search:"search"}[e]||e)+"."+{about:"17d08475",counter:"31d6cfe0",practice:"31d6cfe0",search:"31d6cfe0"}[e]+".css",a=l.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===a))return t()}var v=document.getElementsByTagName("style");for(u=0;u<v.length;u++){c=v[u],s=c.getAttribute("data-href");if(s===n||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],p.parentNode.removeChild(p),r(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var v=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;v.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",v.name="ChunkLoadError",v.type=n,v.request=o,r[1](v)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var v=0;v<c.length;v++)t(c[v]);var p=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},2584:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("教學大綱")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("關於")]),e._v(" | "),r("router-link",{attrs:{to:"/practice"}},[e._v("練習")])],1),r("router-view")],1)},a=[],i=(r("034f"),r("2877")),u={},l=Object(i["a"])(u,o,a,!1,null,null,null),c=l.exports,s=(r("d3b7"),r("8c4f")),v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container tutorial"},[r("h1",[e._v("Vue.js 教學大綱")]),r("h2",[e._v("Day 1")]),r("p",[e._v("內容會視成員對網頁技術的了解程度做調整")]),r("h3",[e._v("課程介紹")]),r("p",[e._v("介紹課程內容。")]),r("h3",[e._v("自我介紹")]),r("p",[e._v("全員自我介紹。")]),r("h3",[e._v("環境建置")]),r("ul",[r("li",[e._v("VSCODE - 安裝、基本設定與套件安裝。")]),r("li",[e._v("Github - 介紹與帳號申請。")]),r("li",[e._v("Sourcetree - 版控 GUI 程式 Sourcetree 安裝、介紹及設定。")]),r("li",[e._v("Git - 介紹與基本使用方式。")]),r("li",[e._v("SSH - 介紹與設定。")]),r("li",[e._v("Node.js - 安裝與介紹。")])]),r("h3",[e._v("HTML")]),r("ul",[r("li",[e._v(" 網頁基本結構介紹 - html、head、body...。 ")]),r("li",[e._v(" 常用 html element 用法及介紹 (h1 - 6, div, p, input, table ...)。 ")]),r("li",[e._v(" html element 講解 - 講解 html element 的結構 (tag, content, attributes)。 ")])]),r("h3",[e._v("CSS")]),r("ul",[r("li",[e._v(" 基礎 - 基本語法、選擇器、如何對 element 下樣式、引入樣式的方式及優先度比較。 ")]),r("li",[e._v("基本排版 - html 及 css 的排版練習。")]),r("li",[e._v("開發者工具 - 在瀏覽器中使用開發者工具(F12) 查看及編輯 element。")]),r("li",[e._v("Bootstrap - 視教學情況做調整")])]),r("h2",[e._v("Day 2")]),r("h3",[e._v("Javascript")]),r("ul",[r("li",[e._v(" 基礎 - 變數(variable)、方法(function)、物件(object)、陣列(array)...，解說及練習 ")]),r("li",[e._v("註解 - 講解代碼該如何註解及練習。")]),r("li",[e._v("代碼風格 - 命名規範、排版。")]),r("li",[e._v("Debug - js Debug 技巧。")])]),r("h3",[e._v("Vue")]),r("ul",[r("li",[e._v("Vue 基本介紹。")]),r("li",[e._v("安裝 chrome Vue.js devtools。")]),r("li",[e._v(" 視教學狀況選擇 CDN 引入 Vue 學習 (難度較低) 或直接學習 Vue-cli (難度較高)。 ")])]),r("h2",[e._v("Day 3 - 4")]),r("h3",[e._v("Vue Cli")]),r("p",[e._v("以下練習以 Thinkpower - Vue.js Labs 為主，會視學習情況做調整")]),r("ul",[r("li",[e._v("介紹 - 解說 spa 及如何使用 vue-cli 建立 spa 網站，專案架構說明。")]),r("li",[e._v("npm - 介紹及安裝 package。")]),r("li",[e._v("ES Lint、Prettier - 代碼風格規範及排版工具介紹。")]),r("li",[e._v("Vue template - 講解.vue檔、命名規則及如何編寫。")]),r("li",[e._v("vue-router - 講解如何由前端控制網站 router。")])]),r("h3",{staticClass:"color-red"},[e._v("練習 (Vue.js Labs)")]),r("ul",[r("li",[e._v("計數器 - 學習 data 綁定及 method。")]),r("li",[e._v(" 清單搜尋頁面 - 學習 v-model、v-for、computed、字串比對及 array fileter。 ")]),r("li",[e._v("數字專案 - 學習 vue filter。")]),r("li",[e._v("列表 Demo - 學習 v-on。")]),r("li",[e._v("nav Component - 學習寫 component。")]),r("li",[e._v("生命週期 - 介紹 vue component 的生命週期。")]),r("li",[e._v("modal Dmoe - 學習 slot、v-if、v-show。")]),r("li",[e._v("表單驗證 - 學習使用 VeeValidate 套件做表單驗證。")]),r("li",[e._v("focus Demo - 學習使用 refs 操作 dom 元素。")])]),r("hr"),r("h3",[e._v("Restful api")]),r("ul",[r("li",[e._v("介紹 - 介紹 Reatful api")]),r("li",[e._v("模擬 - 使用 json-server 模擬 api")]),r("li",[e._v("postman - postman 介紹與使用")]),r("li",[e._v("axios - axios 介紹與使用")])]),r("h3",{staticClass:"color-red"},[e._v("API 串接練習 (Vue.js Labs)")]),r("ul",[r("li",[e._v(" 產品明細列表 - 以 axios 串接 API，將後端資料綁定到畫面上。 ")]),r("li",[e._v(" 圖片輪播 - 學習使用 Owl Carousel 2 套件，以 axios 串接 API，將後端資料綁定到輪播套件上。 ")])]),r("hr"),r("h2",[e._v("Day 5 - 7")]),r("h3",[e._v("專案實作")]),r("p",[e._v(" 講解並從無到有實作招募網站後台部分頁面，以能獨立完成 API 串接、驗證資料、顯示資料、完成 CRUD 功能為目標。 ")]),r("h3",[e._v("Q&A")]),r("p",[e._v("回答問題。")]),r("h3",[e._v("結尾")]),r("p",[e._v("講解目前前端生態與學習方向。")])])}],f=(r("e81a"),{}),h=Object(i["a"])(f,v,p,!1,null,"2faf57dc",null),d=h.exports;n["a"].use(s["a"]);var _=[{path:"/",name:"home",component:d},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/counter",name:"counter",component:function(){return r.e("counter").then(r.bind(null,"80d5"))}},{path:"/practice",name:"practice",component:function(){return r.e("practice").then(r.bind(null,"3b32"))}},{path:"/search",name:"search",component:function(){return r.e("search").then(r.bind(null,"2d3b"))}}],m=new s["a"]({mode:"history",base:"/",routes:_}),b=m;r("4989"),r("ab8b");n["a"].config.productionTip=!1,new n["a"]({router:b,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,r){},e81a:function(e,t,r){"use strict";var n=r("2584"),o=r.n(n);o.a}});
//# sourceMappingURL=app.3c833a9f.js.map