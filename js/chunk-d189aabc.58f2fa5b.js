(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d189aabc"],{"18a6":function(e,t,n){"use strict";n("b178")},"7b5e":function(e,t,n){"use strict";n.r(t);var l=n("8bbf");const o={class:"rain"};var a={__name:"index",setup(e){let t,n=()=>"#"+Math.random().toString(16).slice(2,8).padEnd(6,"0"),a=(e=10)=>{let n=~~(Math.random()*e);return n==t?a(e):(t=n,n)},c="hello world!";function r(){return c[a(c.length)]}let u,i,d=Object(l["ref"])(0),f=Object(l["ref"])(0),s=20,b=()=>{f.value=document.querySelector(".content-box").offsetHeight,d.value=document.querySelector(".content-box").offsetWidth,u=~~(d.value/s),i=new Array(u).fill(1);let e=document.createElement("canvas");e.width=d.value,e.height=f.value,document.querySelector(".rain").appendChild(e);let t=e.getContext("2d");h(t),console.log(123)},h=e=>{e.fillStyle="rgba(0,0,0,.1)",e.fillRect(0,0,d.value,f.value);for(let t=0;t<u;t++)e.fillStyle=n(),e.font=`bold ${s}px serif`,e.fillText(r(),t*s,i[t]*s),i[t]*s>f.value&&Math.random()>.99&&(i[t]=0),i[t]++;requestAnimationFrame(()=>{h(e)})};return Object(l["onMounted"])(()=>{b()}),(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o))}},c=(n("18a6"),n("d959")),r=n.n(c);const u=r()(a,[["__scopeId","data-v-64af401e"]]);t["default"]=u},b178:function(e,t,n){}}]);