(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["counter"],{"80d5":function(t,n,u){"use strict";u.r(n);var e=function(){var t=this,n=t.$createElement,u=t._self._c||n;return u("div",[u("h1",[t._v("Counter")]),u("p",[t._v("Counter: "+t._s(t.counter))]),u("div",[u("button",{staticClass:"btn btn-primary mr-3",attrs:{type:"button"},on:{click:function(n){return t.compute(-1)}}},[t._v(" 減 1 ")]),u("button",{staticClass:"btn btn-primary mr-3",attrs:{type:"button"},on:{click:t.reset}},[t._v(" 重置 ")]),u("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.compute(1)}}},[t._v(" 加 1 ")])])])},r=[],o={data:function(){return{counter:0}},methods:{plusOne:function(){this.counter++},minusOne:function(){this.counter>0&&this.counter--},reset:function(){this.counter=0},compute:function(t){var n=this.counter+t;this.counter=n<0?0:n}}},c=o,s=u("2877"),i=Object(s["a"])(c,e,r,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=counter.007a1c45.js.map