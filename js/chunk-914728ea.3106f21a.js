(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-914728ea"],{2931:function(e,t,o){"use strict";o.r(t);var n=o("8bbf");const s={class:"hello"};function l(e,t,o,l,d,i){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[Object(n["createElementVNode"])("h1",null,Object(n["toDisplayString"])(o.msg),1)])}var d=o("5a89"),i=o("4721"),c=o("ef20"),a=o("afeb"),r={name:"HelloWorld",props:{msg:String},data(){return{scene:null}},mounted(){console.log(this.$attrs,this.$listeners,"this+++++++"),this.initThree(),this.createBox(),this.initGUI(),this.test()},methods:{initThree(){const e=document.querySelector(".hello").offsetWidth/2;console.log(e,window.innerWidth,"width");const t=600,o=new d["ib"];console.log(o,"scene1");const n=new d["g"](100,100,100),s=new d["O"]({color:16711680,side:d["n"],opacity:.5});console.log(s.color,"color");const l=new d["M"](n,s);l.castShadow=!0,l.receiveShadow=!0,o.add(l);const i=new d["c"](100);o.add(i);const c=new d["ab"](16777215,1,0,0);c.position.set(200,150,100),c.castShadow=!0,o.add(c);const a=new d["bb"](c,10);o.add(a),console.log(o,"scene2");const r=new d["Z"](30,e/t,1,3e3);r.position.set(200,200,200),r.lookAt(l.position),console.log(r,"camera");const h=new d["wb"];h.setSize(e,t),this.addAnimation(l,o,r,h),console.log(h.domElement,"renderer.domelement"),this.addOrbitControls(o,r,h),h.domElement.style.display="inline",document.querySelector(".hello").appendChild(h.domElement)},test:()=>{console.log(void 0,"Parent")},createBox(){const e=document.querySelector(".hello").offsetWidth/2;let t=600,o=new d["ib"];const n=1e3,s=new d["g"](5,5,5),l=new d["O"]({color:65535});for(let r=0;r<n;r++){const e=new d["M"](s,l),t=Math.floor(200*(Math.random()-.5)),n=Math.floor(200*(Math.random()-.5)),i=Math.floor(200*(Math.random()-.5));e.position.set(t,n,i),o.add(e)}const i=new d["ab"](16777215,1,0,0);i.position.set(200,200,200),i.castShadow=!0,o.add(i),console.log(o,"scene");let c=new d["Z"];c.position.set(200,200,200),c.lookAt(0,0,0);let a=new d["wb"];a.setSize(e,t),a.render(o,c),this.addOrbitControls(o,c,a),a.domElement.style.display="inline",document.querySelector(".hello").appendChild(a.domElement)},initGUI(){const e=new a["a"];e.domElement.style.right="0px",e.domElement.style.width="300px";const t={x:30,y:60,z:300};e.add(t,"x",0,100),e.add(t,"y",0,500),e.add(t,"z",[-100,0,100])},addOrbitControls(e,t,o){const n=new i["a"](t,o.domElement);n.addEventListener("change",(function(){o.render(e,t)}))},addAnimation(e,t,o,n){const s=new d["k"],l=new c["a"];function i(){s.getDelta();l.update(),n.render(t,o),e.rotateY(.01),requestAnimationFrame(i)}i(),document.querySelector(".hello").appendChild(l.domElement)}}},h=(o("bf29"),o("6b0d")),m=o.n(h);const w=m()(r,[["render",l],["__scopeId","data-v-15e6a0fe"]]);t["default"]=w},bf29:function(e,t,o){"use strict";o("f635")},f635:function(e,t,o){}}]);