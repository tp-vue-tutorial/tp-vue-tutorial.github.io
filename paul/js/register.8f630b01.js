(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"1da1":function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("d3b7"),e("e6cf");function n(t,r,e,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void e(u)}s.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}},"73cf":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("validation-observer",{ref:"observer"},[e("h1",[t._v("Register")]),e("div",{staticClass:"card mx-auto",staticStyle:{width:"40rem"}},[e("div",{staticClass:"card-body text-left"},[e("validation-provider",{staticClass:"form-group",attrs:{rules:"required|length:10"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors,o=r.classes;return[e("label",{attrs:{for:"inputId"}},[t._v("身分證字號")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.id,expression:"formData.id"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"inputId"},domProps:{value:t.formData.id},on:{input:function(r){r.target.composing||t.$set(t.formData,"id",r.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(n[0])+" ")])]}}])}),e("validation-provider",{staticClass:"form-group",attrs:{rules:"required|max:30"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors,o=r.classes;return[e("label",{attrs:{for:"inputName"}},[t._v("姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"inputName"},domProps:{value:t.formData.name},on:{input:function(r){r.target.composing||t.$set(t.formData,"name",r.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(n[0])+" ")])]}}])}),e("validation-provider",{staticClass:"form-group",attrs:{rules:"required|max:10|numeric"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors,o=r.classes;return[e("label",{attrs:{for:"inputPhone"}},[t._v("手機號碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"inputPhone"},domProps:{value:t.formData.phone},on:{input:function(r){r.target.composing||t.$set(t.formData,"phone",r.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(n[0])+" ")])]}}])}),e("div",{staticClass:"text-center mt-4"},[e("button",{staticClass:"btn btn-primary mr-4",on:{click:t.onSubmit}},[t._v("送出")]),e("button",{staticClass:"btn btn-primary",on:{click:t.resetData}},[t._v("清除")])])],1)])])},o=[],a=(e("96cf"),e("1da1")),i={data:function(){return{formData:this.getDefaultData()}},methods:{getDefaultData:function(){return{id:"",name:"",phone:""}},onSubmit:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.observer.validate();case 2:if(!t.sent){t.next=4;break}alert(JSON.stringify(this.formData));case 4:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),resetData:function(){this.formData=this.getDefaultData(),this.$refs.observer.reset()}}},s=i,c=e("2877"),u=Object(c["a"])(s,n,o,!1,null,null,null);r["default"]=u.exports},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=D(t,e,i),a}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function d(){}function m(){}function y(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==e&&n.call(b,a)&&(g=b);var x=y.prototype=d.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function L(t){function r(e,o,a,i){var s=u(t[e],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){r("next",t,a,i)}),(function(t){r("throw",t,a,i)})):Promise.resolve(l).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,i)}))}i(s.arg)}var e;function o(t,n){function o(){return new Promise((function(e,o){r(t,n,e,o)}))}return e=e?e.then(o,o):o()}this._invoke=o}function D(t,r,e){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}e.method=o,e.arg=a;while(1){var i=e.delegate;if(i){var s=E(i,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var c=u(t,r,e);if("normal"===c.type){if(n=e.done?p:f,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=p,e.method="throw",e.arg=c.arg)}}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,y[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(r,e,n,o){var a=new L(c(r,e,n,o));return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=register.8f630b01.js.map