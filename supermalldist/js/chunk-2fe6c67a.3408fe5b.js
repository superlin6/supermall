(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fe6c67a"],{"1e56":function(t,e,n){},"717c":function(t,e,n){"use strict";n("cbc3")},"969a":function(t,e,n){"use strict";n("989a")},"989a":function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("nav-bar",{staticClass:"nav-bar"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),n("div",{staticClass:"content"},[n("left-nav-bar",{attrs:{categoryLists:t.categoryLists,currentIndex:t.currentIndex},on:{selectItem:t.selectItem}}),n("right-content",{attrs:{listItems:t.listItems}})],1)],1)},a=[],c=n("a7ac"),r=n("c346"),i=n("1bab");function o(){return Object(i["a"])({url:"/category"})}function l(t){return Object(i["a"])({url:"/subcategory",params:{maitKey:t}})}function u(t,e){return Object(i["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!=t.categoryLists.length?n("div",{staticClass:"left-nav-bar"},t._l(t.categoryLists,(function(e,s){return n("div",{key:s,class:{"nav-item":!0,con:t.currentIndex==s},on:{click:function(e){return t.selectItem(s)}}},[t._v(" "+t._s(e.title)+" ")])})),0):t._e()},f=[],g={name:"LeftNavBar",components:{},props:["categoryLists","currentIndex"],methods:{selectItem:function(t){this.$emit("selectItem",t)}}},v=g,d=(n("717c"),n("2877")),b=Object(d["a"])(v,m,f,!1,null,"16ea7389",null),y=b.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return Object.keys(t.listItems)?n("div",{staticClass:"right-content"},t._l(t.listItems,(function(e){return n("a",{staticClass:"content-item",attrs:{href:e.link}},[n("img",{attrs:{src:e.image}}),n("div",{staticClass:"title"},[t._v(t._s(e.title))])])})),0):t._e()},I=[],p={name:"RightContent",props:["listItems"]},_=p,C=(n("dab8"),Object(d["a"])(_,h,I,!1,null,"13ea8127",null)),L=C.exports,x={name:"Home",components:{RightContent:L,LeftNavBar:y,Scroll:r["a"],NavBar:c["a"]},data:function(){return{categoryLists:[],listItems:[],currentIndex:0}},methods:{getCategory:function(){var t=this;o().then((function(e){t.categoryLists=e.data.category.list,t.selectItem(0)}))},getCategoryDetail:function(t){u(t)},selectItem:function(t){var e=this;this.currentIndex=t;var n=this.categoryLists[t].maitKey;l(n).then((function(t){e.listItems=[],e.listItems=t.data.list}))}},created:function(){this.getCategory()}},k=x,j=(n("969a"),Object(d["a"])(k,s,a,!1,null,"ea71ae22",null));e["default"]=j.exports},cbc3:function(t,e,n){},dab8:function(t,e,n){"use strict";n("1e56")}}]);
//# sourceMappingURL=chunk-2fe6c67a.3408fe5b.js.map