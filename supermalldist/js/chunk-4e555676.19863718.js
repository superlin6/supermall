(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e555676"],{"216d":function(A,e,t){A.exports=t.p+"img/dingdan.e8e23241.png"},3766:function(A,e,t){A.exports=t.p+"img/daifahuo.99e95f9d.png"},"3b42":function(A,e,t){"use strict";t.r(e);var n=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"profile"},[t("nav-bar",{staticClass:"nav-bar"},[t("div",{attrs:{slot:"center"},slot:"center"},[A._v("我的")])]),A._m(0),t("div",{staticClass:"order"},A._l(A.orderItems,(function(e,n){return t("div",{key:n,staticClass:"order-item",on:{click:function(e){return A.toOrder(n)}}},[t("img",{attrs:{src:e.img}}),t("div",[A._v(A._s(e.name))])])})),0),t("div",{staticClass:"selection"},A._l(A.selection,(function(e,n){return t("div",{key:n,staticClass:"selection-item",on:{click:function(e){return A.toSelection(n)}}},[t("img",{attrs:{src:e.imgUrl}}),t("span",[A._v(A._s(e.name))])])})),0)],1)},a=[function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",{staticClass:"head"},[n("img",{attrs:{src:t("ffe6")}}),n("div",{staticClass:"name"},[A._v("mogu")])])}],s=t("a7ac"),i={name:"Home",components:{NavBar:s["a"]},data:function(){return{name:"mogu",orderItems:[{name:"待付款",img:t("50ae")},{name:"待发货",img:t("3766")},{name:"待收货",img:t("6f18")},{name:"已完成",img:t("ece6")}],selection:[{name:"我的收藏",imgUrl:t("e8dc")},{name:"我的订单",imgUrl:t("216d")},{name:"我的地址",imgUrl:t("e7b7")},{name:"联系客服",imgUrl:t("d992")},{name:"关于我们",imgUrl:t("fb20")}]}},methods:{toOrder:function(A){this.$router.push({name:"Order",params:{index:A+1}})},toSelection:function(A){switch(A){case 0:this.$router.push("/collection");break;case 1:this.$router.push("/order");break;case 2:this.$router.push("/address");break}}}},r=i,g=(t("724c"),t("2877")),c=Object(g["a"])(r,n,a,!1,null,"76f9dafc",null);e["default"]=c.exports},"50ae":function(A,e){A.exports="data:image/png;base64,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"},"6f18":function(A,e,t){A.exports=t.p+"img/daishouhuo.a013af5c.png"},"724c":function(A,e,t){"use strict";t("8950")},8950:function(A,e,t){},d992:function(A,e,t){A.exports=t.p+"img/fuwu.b233d3e5.png"},e7b7:function(A,e,t){A.exports=t.p+"img/didian.328fc9e5.png"},e8dc:function(A,e,t){A.exports=t.p+"img/shoucang.e0f3a74f.png"},ece6:function(A,e,t){A.exports=t.p+"img/daipingjia.7822bfc1.png"},fb20:function(A,e,t){A.exports=t.p+"img/guanyu.c53def11.png"},ffe6:function(A,e,t){A.exports=t.p+"img/mogu.666c105f.png"}}]);
//# sourceMappingURL=chunk-4e555676.19863718.js.map