(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ajaxDemo"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"2e74":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Ajax Demo")]),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body text-left"},[r("ul",{staticClass:"list-group list-group-flush"},t._l(t.list,(function(e){return r("li",{key:e.prodId,staticClass:"list-group-item",on:{click:function(r){return t.onClick(e.prodId)}}},[r("div",[r("img",{attrs:{src:e.prodImg,alt:e.prodName}}),t._v(" "+t._s(e.prodName)+" ")])])})),0)])]),t.data?r("popup-modal",{attrs:{title:"產品明細資料","is-open":t.isModalOpen,"close-btn-text":"關閉"},on:{"update:isOpen":function(e){t.isModalOpen=e},"update:is-open":function(e){t.isModalOpen=e}}},[r("div",{staticClass:"text-left"},[r("div",{staticClass:"text-center"},[r("img",{attrs:{src:t.data.prodImg,alt:t.data.prodName}})]),r("div",[r("span",[t._v("產品 id：")]),t._v(" "+t._s(t.data.prodId)+" ")]),r("div",[r("span",[t._v("品名：")]),t._v(" "+t._s(t.data.prodName)+" ")]),r("div",[r("span",[t._v("售價：")]),t._v(" "+t._s(t.data.amount)+" ")]),r("div",[r("span",[t._v("寬：")]),t._v(" "+t._s(t.data.width)+" ")]),r("div",[r("span",[t._v("高：")]),t._v(" "+t._s(t.data.height)+" ")]),r("div",[r("span",[t._v("重量：")]),t._v(" "+t._s(t.data.weight)+" ")]),r("div",[r("span",[t._v("說明：")]),t._v(" "+t._s(t.data.description)+" ")])])]):t._e()],1)},o=[],i=(r("96cf"),r("1da1")),a=r("4ecd"),c={components:{PopupModal:a["a"]},data:function(){return{data:null,isModalOpen:!1,list:[]}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("product/list");case 2:e=t.sent,this.list=e.data.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{onClick:function(t){var e=this;this.isModalOpen=!0,this.$axios.post("product/detail",{prodId:t}).then((function(t){var r=t.data;e.data=r.data,e.isModalOpen=!0})).catch((function(){}))}}},s=c,u=r("2877"),l=Object(u["a"])(s,n,o,!1,null,null,null);e["default"]=l.exports},"4ecd":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isOpen?r("div",{staticClass:"popup-modal-cover",on:{click:t.onCoverClick}},[r("div",{staticClass:"popup-modal p-4"},[r("h2",[t._v(" "+t._s(t.title)+" ")]),r("hr"),r("div",[t._t("default")],2),r("button",{staticClass:"btn btn-primary mt-3",on:{click:t.onCloseModal}},[t._v(" "+t._s(t.closeBtnText)+" ")])])]):t._e()},o=[],i={props:{closeBtnText:{type:String,default:"Close PopupModal"},isOpen:{type:Boolean,required:!0},title:{type:String,required:!0}},methods:{onCloseModal:function(){this.$emit("update:isOpen",!1)},onCoverClick:function(t){"popup-modal-cover"===t.target.className&&this.onCloseModal()}}},a=i,c=(r("e64a"),r("2877")),s=Object(c["a"])(a,n,o,!1,null,"96fdad62",null);e["a"]=s.exports},9438:function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=E(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",f="completed",d={};function v(){}function y(){}function m(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(N([])));_&&_!==r&&n.call(_,i)&&(g=_);var x=m.prototype=v.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(r,o,i,a){var c=u(t[r],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function o(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw i;return M()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?f:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=f,r.method="throw",r.arg=s.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var i=new L(s(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},e64a:function(t,e,r){"use strict";var n=r("9438"),o=r.n(n);o.a}}]);
//# sourceMappingURL=ajaxDemo.6f780ecb.js.map