(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-550464a6"],{"7b5e":function(e,t,n){"use strict";n.r(t);var l=n("8bbf");const o={class:"rain"};var a={__name:"index",setup(e){let t,n=["#FF0000","#FF7F00","#FFFF00","#00FF00","#00FFFF","#0000FF","#8B00FF"],a=()=>n[c(n.length)],c=(e=10)=>{let n=~~(Math.random()*e);return n==t?c(e):(t=n,n)},r="hello world!";function u(){return r[c(r.length)]}let i,d,f=Object(l["ref"])(0),F=Object(l["ref"])(0),s=20,b=()=>{F.value=document.querySelector(".content-box").offsetHeight,f.value=document.querySelector(".content-box").offsetWidth,i=~~(f.value/s),d=new Array(i).fill(1);let e=document.createElement("canvas");e.width=f.value,e.height=F.value,document.querySelector(".rain").appendChild(e);let t=e.getContext("2d");h(t),console.log(123)},h=e=>{e.fillStyle="rgba(0,0,0,.1)",e.fillRect(0,0,f.value,F.value);for(let t=0;t<i;t++)e.fillStyle=a(),e.font=`bold ${s}px serif`,e.fillText(u(),t*s,d[t]*s),d[t]*s>F.value&&Math.random()>.99&&(d[t]=0),d[t]++;requestAnimationFrame(()=>{h(e)})};return Object(l["onMounted"])(()=>{b()}),(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o))}},c=(n("8290"),n("6b0d")),r=n.n(c);const u=r()(a,[["__scopeId","data-v-7fe1278c"]]);t["default"]=u},8290:function(e,t,n){"use strict";n("a056")},a056:function(e,t,n){}}]);