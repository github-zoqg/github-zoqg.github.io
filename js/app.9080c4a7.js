(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"1a16":function(e,t,n){},"4fdf":function(e,t,n){},5128:function(e,t,n){"use strict";n("4fdf")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("8bbf");function c(e,t,n,c,a,l){const i=Object(o["resolveComponent"])("Layout");return Object(o["openBlock"])(),Object(o["createBlock"])(i)}const a={class:"flexbox"},l={class:"content-box"};function i(e,t,n,c,i,r){const s=Object(o["resolveComponent"])("Header"),u=Object(o["resolveComponent"])("Nav"),d=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[i.isShowHeader?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0})):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",a,[i.isShowHeader?(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:0})):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(d)])])],64)}const r={class:"page-header"};function s(e,t,n,c,a,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("span",{onClick:t[0]||(t[0]=(...e)=>l.golistPage&&l.golistPage(...e)),class:"golistpage"},"客户列表")])}n("14d9");var u={setup(){return{}},methods:{golistPage(){this.$router.push({path:"/about",query:{}})}}},d=(n("5128"),n("6b0d")),m=n.n(d);const p=m()(u,[["render",s],["__scopeId","data-v-13cb8f3b"]]);var b=p,h=n("f6f2"),j=n("6389");const v={class:"nav-basebox"},O={class:"menu-width"};var f={__name:"nav",setup(e){const t=Object(j["useRouter"])(),n=Object(j["useRoute"])();console.log(t,"router",n);let c={};t.options.routes.forEach(e=>{var t,n,o,a,l,i,r;null!==(t=e.meta)&&void 0!==t&&t.hidden||(c[null===(n=e.meta)||void 0===n?void 0:n.type]?c[null===(o=e.meta)||void 0===o?void 0:o.type].child.push(e):(c[null===(a=e.meta)||void 0===a?void 0:a.type]={},c[null===(l=e.meta)||void 0===l?void 0:l.type].type=null===(i=e.meta)||void 0===i?void 0:i.type,c[null===(r=e.meta)||void 0===r?void 0:r.type].child=[].concat(e)))}),console.log(c,"navList");const a=Object(o["ref"])(!1);let l=Object(o["ref"])();Object(o["watch"])(n,(e,t)=>{console.log(e,t,"newValue,oldValue");for(const n in c)Object.hasOwnProperty.call(c,n)&&c[n].child.forEach((e,t)=>{location.hash=="#"+e.path&&(l.value=n+"-"+t,console.log(l,"defaultActive"))})},{immediate:!0});const i=(e,t)=>{console.log(e,t)},r=(e,t)=>{console.log(e,t)},s=e=>{t.push({name:e.name})};return(e,t)=>{const n=Object(o["resolveComponent"])("el-icon"),u=Object(o["resolveComponent"])("el-menu-item"),d=Object(o["resolveComponent"])("el-sub-menu"),m=Object(o["resolveComponent"])("el-menu");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",v,[Object(o["createVNode"])(n,{class:"operation"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(h["Operation"]),{onClick:t[0]||(t[0]=e=>a.value=!a.value)})]),_:1}),Object(o["createVNode"])(m,{"default-active":Object(o["unref"])(l),collapse:a.value,onOpen:i,onClose:r},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object(o["unref"])(c),(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(d,{index:e.type,key:t},{title:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",O,[Object(o["createVNode"])(n,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(h["Location"]))]),_:1}),Object(o["withDirectives"])(Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.type),513),[[o["vShow"],!a.value]])])]),default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.child,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(u,{index:`${e.type}-${n}`,key:t.name,onClick:e=>s(t)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.name),1)]),_:2},1032,["index","onClick"]))),128))]),_:2},1032,["index"]))),128))]),_:1},8,["default-active","collapse"])])}}};n("bd71");const w=m()(f,[["__scopeId","data-v-9b80767e"]]);var k=w,g={components:{Header:b,Nav:k},data(){return{isShowHeader:!1}},watch:{$route(){this.init()}},created(){},methods:{init(){}}};n("d96f");const y=m()(g,[["render",i],["__scopeId","data-v-3656c899"]]);var C=y,x={name:"App",components:{Layout:C},data(){return{name:"app"}},mounted(){var e;console.log(this,this.name,this.$router),console.log(window.$wujie,null===(e=window.$wujie)||void 0===e?void 0:e.props,"window.$wujie?.props"),window.$wujie&&(window.$wujie.bus.$emit("sayHello",{name:this.name}),this.init(),window.$wujie.bus.$emit("complete"))},methods:{init(){window.$wujie.bus.$on("isMain",e=>{console.log("this is "+e.name)})}}};n("6cc1");const B=m()(x,[["render",c]]);var N=B;const V=[{path:"/login",name:"login",component:()=>Promise.all([n.e("vendor"),n.e("common"),n.e("chunk-c91772e4")]).then(n.bind(null,"efcf")),meta:{hidden:!0}},{path:"/home",name:"home",component:()=>Promise.all([n.e("vendor"),n.e("common"),n.e("chunk-249ee9df")]).then(n.bind(null,"f5b8")),meta:{type:"first"}},{path:"/about",name:"about",component:()=>Promise.all([n.e("vendor"),n.e("common"),n.e("chunk-1a4df0a6")]).then(n.bind(null,"7260")),meta:{type:"first"}},{path:"/from-create",name:"fromCreate",component:()=>n.e("chunk-450c4958").then(n.bind(null,"a93a")),meta:{type:"fromCreate"}},{path:"/rain",name:"rain",component:()=>n.e("chunk-550464a6").then(n.bind(null,"7b5e")),meta:{type:"canvas"}},{path:"/arc",name:"arc",component:()=>n.e("chunk-440ba3b7").then(n.bind(null,"9e7d")),meta:{type:"canvas"}},{path:"/practice",name:"practice",component:()=>n.e("chunk-4576952a").then(n.bind(null,"1d5e")),meta:{type:"practice"}},{path:"/threejs/complex",name:"complex",component:()=>Promise.all([n.e("vendor"),n.e("chunk-2d0ddbe0")]).then(n.bind(null,"834c")),meta:{type:"threejs"}},{path:"/threejs/simple",name:"simple",component:()=>Promise.all([n.e("vendor"),n.e("chunk-914728ea")]).then(n.bind(null,"2931")),meta:{type:"threejs"}},{path:"/",redirect:"/index",component:()=>Promise.all([n.e("vendor"),n.e("chunk-330e788d")]).then(n.bind(null,"d060")),meta:{title:"家具商城"},children:[{path:"index",name:"index",component:()=>n.e("chunk-8f25650c").then(n.bind(null,"7266")),meta:{title:"商城首页"}},{path:"goodsDetail",name:"goodsDetail",component:()=>n.e("chunk-54adb9b7").then(n.bind(null,"3004")),meta:{title:"商品详情"}},{path:"shopingCart",name:"shopingCart",component:()=>Promise.all([n.e("vendor"),n.e("chunk-25eaf4ac")]).then(n.bind(null,"daca")),meta:{title:"购物车"}},{path:"personal",name:"personal",component:()=>n.e("chunk-367b193c").then(n.bind(null,"f9c4")),meta:{title:"个人详情"}}]}],E=j["createRouter"]({history:j["createWebHashHistory"](),routes:V});E.beforeEach((e,t,n)=>{e.meta.title?document.title=e.meta.title:document.title="wellcom",n()});var $=E,_=n("5502");const S=Object(_["a"])({state(){return{count:0,user:JSON.parse(localStorage.getItem("user"))||null}},mutations:{setUser(e,t){e.user=t,t?localStorage.setItem("user",JSON.stringify(t)):localStorage.removeItem("user")}}});var P=S,H=n("c3a1"),I=(n("5ef4"),n("777b"),n("5717"),n("faa1"));const L=new I["EventEmitter"];var D=L,J=n("da05"),R=n("6b84");let A=Object(o["createApp"])(N);A.provide("events",D),A.use($),A.use(P);for(const[F,W]of Object.entries(h))A.component(F,W);A.use(H["a"]),console.log(A,"main"),A.use(J["a"]),A.use(R["a"]),A.mount("#app")},"5ef4":function(e,t){function n(){const e=document.documentElement.clientWidth||document.body.clientWidth,t=document.getElementsByTagName("html")[0];t.style.fontSize=e/10+"px"}window.onresize=n,n()},6389:function(e,t){e.exports=VueRouter},"6cc1":function(e,t,n){"use strict";n("d558")},"8bbf":function(e,t){e.exports=Vue},bd71:function(e,t,n){"use strict";n("1a16")},d558:function(e,t,n){},d96f:function(e,t,n){"use strict";n("e889")},e889:function(e,t,n){}},[[0,"runtime","vendor","styles"]]]);