(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0103c77f"],{"2f73":function(e,t,a){"use strict";a("75cd")},"75cd":function(e,t,a){},"9e7d":function(e,t,a){"use strict";a.r(t);var l=a("8bbf");const o=e=>(Object(l["pushScopeId"])("data-v-0806d318"),e=e(),Object(l["popScopeId"])(),e),n=o(()=>Object(l["createElementVNode"])("div",{class:"box"},null,-1)),d=o(()=>Object(l["createElementVNode"])("canvas",{class:"canvas"},null,-1)),i={data(){return{dom:"",wid:"",hei:""}},methods:{init(){this.dom=document.querySelector(".box"),this.wid=this.dom.offsetWidth,this.hei=this.dom.offsetHeight},run(){this.init(),this.move()},move(){let e=document.createElement("div"),t=this.randomNum(this.wid-20),a=this.randomNum(this.hei-20),l={flag:!0,yflag:!0,left:t,top:a};e.className="arc",e.style.background=this.randomColor(),e.style.top=a+"px",e.style.left=t+"px",this.dom.appendChild(e),this.animat(l),console.log(this.dom,e)},animat(e){let t=document.createElement("div"),a=this.randomNum(),l=this.randomNum();t.className="arc",t.style.background=this.randomColor(),e.left+a>this.wid-20&&(e.flag=!1),e.left-a<0&&(e.flag=!0),e.top+l>this.hei-20&&(e.yflag=!1),e.top-l<0&&(e.yflag=!0);let o=e.yflag?e.top+l:e.top-l,n=e.flag?e.left+a:e.left-a;e.left=n,e.top=o,t.style.top=o+"px",t.style.left=n+"px",this.dom.appendChild(t),setTimeout(()=>{this.animat(e)},1e3)},randomColor(){return"#"+Math.random().toString(16).slice(2,8).padEnd(6,"0")},randomNum(e=10){return~~(Math.random()*e)}}};var s=Object.assign(i,{__name:"index",setup(e){Object(l["onMounted"])(()=>{s()});let t,a=Object(l["ref"])(),o=Object(l["ref"])(),i=Object(l["ref"])(),s=()=>{let e=document.querySelector("canvas");i.value=e.parentNode.offsetWidth/2,o.value=e.parentNode.offsetHeight/2,e.width=i.value,e.height=o.value,a.value=e.getContext("2d")},c=["red","blue","green","yellow"],r=()=>c[~~(Math.random()*c.length)],u=(e=10)=>~~(Math.random()*e),f=e=>{let t=u(),l=u();e||(e={xflag:!0,yflag:!0,x:u(i.value-20)+10,y:u(o.value-20)+10}),e.x+t>i.value-20&&(e.xflag=!1),e.x-t<0&&(e.xflag=!0),e.y+l>o.value-20&&(e.yflag=!1),e.y-l<0&&(e.yflag=!0),e.x=e.xflag?e.x+t:e.x-t,e.y=e.yflag?e.y+l:e.y-l,a.value.beginPath(),a.value.fillStyle=r(),a.value.arc(e.x,e.y,20,0,2*Math.PI),a.value.fill(),a.value.save(),setTimeout(()=>{f(e)},1e3)};return(e,a)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[n,Object(l["createElementVNode"])("button",{onClick:a[0]||(a[0]=(...t)=>e.run&&e.run(...t))},"run"),d,Object(l["createElementVNode"])("button",{onClick:a[1]||(a[1]=e=>Object(l["unref"])(f)(Object(l["unref"])(t)))},"canvas_run")],64))}}),c=(a("2f73"),a("6b0d")),r=a.n(c);const u=r()(s,[["__scopeId","data-v-0806d318"]]);t["default"]=u}}]);