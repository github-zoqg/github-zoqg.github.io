(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afbb0002"],{1905:function(e,t,c){},5232:function(e,t,c){"use strict";c("1905")},daca:function(e,t,c){"use strict";c.r(t);c("13d5");var o=c("8bbf"),l=c("c40e"),n=c("3ef4"),a=c("5502");const s=e=>(Object(o["pushScopeId"])("data-v-66b50664"),e=e(),Object(o["popScopeId"])(),e),d={class:"shoping-cart"},r=s(()=>Object(o["createElementVNode"])("div",{class:"title"},"购物车",-1)),i=["src"],u={class:"goods-info"},b={class:"price"},p=["onClick"],m={class:"total-price"},j={class:"price price_bold"};var O={__name:"shopingCart",setup(e){const t=Object(a["b"])();let c=Object(o["ref"])([]);const s=Object(o["computed"])(()=>O.value.reduce((e,t)=>e+t.price*t.num,0)),O=Object(o["ref"])([]),g=e=>{console.log(e,"删除"),l["a"].deleteCart({...e}).then(e=>{200===e.status&&(Object(n["a"])({message:"删除成功",type:"success"}),N())})},V=e=>{console.log(e),O.value=c.value.filter(e=>e.selected)},v=e=>{console.log(e),l["a"].updateCartList({...e,source:"shoppingCart"})},N=()=>{var e;l["a"].getCartList({userId:null===(e=t.state.user)||void 0===e?void 0:e.userId}).then(e=>{console.log("getGoodsList",e),200===e.status&&(V(),c.value=e.list)})};return Object(o["onMounted"])(()=>{N()}),(e,t)=>{const l=Object(o["resolveComponent"])("el-checkbox"),n=Object(o["resolveComponent"])("el-input-number");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",d,[r,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object(o["unref"])(c),e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"goods-list",key:e.id},[Object(o["createVNode"])(l,{modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t,size:"large",onChange:t=>V(e)},null,8,["modelValue","onUpdate:modelValue","onChange"]),Object(o["createElementVNode"])("img",{src:"https://source.unsplash.com/random/100*100?"+e.id,alt:"",class:"goods-img"},null,8,i),Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(e.goodsName),1),Object(o["createElementVNode"])("p",null,"商品描述："+Object(o["toDisplayString"])(e.goodsName),1),Object(o["createElementVNode"])("div",null,[Object(o["createTextVNode"])(" 单价："),Object(o["createElementVNode"])("span",b,"￥"+Object(o["toDisplayString"])(e.price),1)]),Object(o["createElementVNode"])("div",null,[Object(o["createTextVNode"])(" 数量： "),Object(o["createVNode"])(n,{modelValue:e.num,"onUpdate:modelValue":t=>e.num=t,min:1,onChange:t=>v(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),Object(o["createElementVNode"])("div",null,"小计：￥"+Object(o["toDisplayString"])(e.price*e.num),1),Object(o["createElementVNode"])("div",null,"商店名称："+Object(o["toDisplayString"])(e.storeName),1)]),Object(o["createElementVNode"])("div",{class:"delete_button",onClick:t=>g(e)},"删除",8,p)]))),128)),Object(o["createElementVNode"])("p",m,[Object(o["createTextVNode"])(" 总价: "),Object(o["createElementVNode"])("span",j,"￥"+Object(o["toDisplayString"])(s.value),1)])])}}},g=(c("5232"),c("d959")),V=c.n(g);const v=V()(O,[["__scopeId","data-v-66b50664"]]);t["default"]=v}}]);