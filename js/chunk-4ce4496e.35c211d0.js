(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ce4496e"],{1425:function(e,t,o){"use strict";o("1bca")},"1bca":function(e,t,o){},d060:function(e,t,o){"use strict";o.r(t);var s=o("8bbf");const r={class:"base_box"},l={class:"header_box"},c={class:"header_wid"},a={class:"header_left"},n={key:0},i={key:1},d={class:"header_right"},b={class:"content"},p={class:"footer"};function u(e,t,o,u,g,m){var j,O;const h=Object(s["resolveComponent"])("Back"),V=Object(s["resolveComponent"])("el-icon"),k=Object(s["resolveComponent"])("router-view"),v=Object(s["resolveComponent"])("Register");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",r,[Object(s["createElementVNode"])("header",l,[Object(s["createElementVNode"])("div",c,[Object(s["createElementVNode"])("div",a,[null!==(j=e.$store.state.user)&&void 0!==j&&j.token?(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",i,[Object(s["createTextVNode"])(" Hi, "+Object(s["toDisplayString"])(null===(O=e.$store.state.user)||void 0===O?void 0:O.name)+" ",1),Object(s["createElementVNode"])("span",{class:"pointer ml10",onClick:t[2]||(t[2]=(...e)=>m.logout&&m.logout(...e)),link:""},"[退出]")])):(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",n,[Object(s["createElementVNode"])("span",{onClick:t[0]||(t[0]=e=>m.registerFn("login")),class:"pointer"},"登录"),Object(s["createTextVNode"])(" / "),Object(s["createElementVNode"])("span",{onClick:t[1]||(t[1]=e=>m.registerFn("register")),class:"pointer"},"注册")]))]),Object(s["createElementVNode"])("div",d,[Object(s["createElementVNode"])("span",{onClick:t[3]||(t[3]=(...e)=>m.goIndex&&m.goIndex(...e)),class:"pointer ml10"},"商城首页"),Object(s["createElementVNode"])("span",{onClick:t[4]||(t[4]=(...e)=>m.shopingCart&&m.shopingCart(...e)),class:"pointer ml10"},"购物车"),Object(s["createElementVNode"])("span",{onClick:t[5]||(t[5]=(...e)=>m.myGoods&&m.myGoods(...e)),class:"pointer ml10"},"个人详情"),Object(s["createElementVNode"])("span",{onClick:t[6]||(t[6]=(...e)=>m.contact&&m.contact(...e)),class:"pointer ml10"},"联系客服")])])]),Object(s["createElementVNode"])("main",b,["/index"!==e.$route.path?(Object(s["openBlock"])(),Object(s["createBlock"])(V,{key:0,onClick:m.goback,class:"i_goback"},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(h)]),_:1},8,["onClick"])):Object(s["createCommentVNode"])("",!0),Object(s["createVNode"])(k,{class:"content-base"})]),Object(s["createElementVNode"])("footer",p," © "+Object(s["toDisplayString"])((new Date).getFullYear())+" zoqg.com 版权所有 ",1),Object(s["createVNode"])(v,{dialogVisible:g.dialogVisible,registerProps:g.registerProps,onCloseDialog:t[7]||(t[7]=()=>m.closeDialog())},null,8,["dialogVisible","registerProps"])])}o("14d9"),o("d9e2");var g=o("5502"),m=o("c24f"),j=o("3ef4");const O={class:"dialog-container"},h={class:"dialog-footer"};var V={__name:"register",props:["dialogVisible","registerProps"],emits:["closeDialog"],setup(e,{emit:t}){const o=e,r=Object(g["b"])(),l=Object(s["computed"])({get(){return o.dialogVisible},set(e){}}),c=t,a={phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],password2:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:(e,t,o)=>{t!==n.password?o(new Error("两次输入的密码不一致!")):o()},trigger:"blur"}]},n=Object(s["reactive"])({phone:"",password:"",password2:""}),i=Object(s["ref"])(null),d=()=>{i.value.validate((e,t)=>{if(e){console.log("submit!");const e="login"===o.registerProps.status?"login":"register";m["a"][e](n).then(e=>{console.log(e,"res"),200===e.status&&("login"===o.registerProps.status?(r.commit("setUser",{name:"张三",...e.data}),Object(j["a"])({message:"登陆成功",type:"success"}),location.reload()):Object(j["a"])({message:"注册成功，请登录！",type:"success"}),b())})}else console.log("error submit!",t)})},b=()=>{i.value.resetFields(),c("closeDialog")};return(t,o)=>{const r=Object(s["resolveComponent"])("el-input"),c=Object(s["resolveComponent"])("el-form-item"),p=Object(s["resolveComponent"])("el-form"),u=Object(s["resolveComponent"])("el-button"),g=Object(s["resolveComponent"])("el-dialog");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",O,[Object(s["createVNode"])(g,{title:"login"===e.registerProps.status?"登录":"注册",modelValue:l.value,"onUpdate:modelValue":o[3]||(o[3]=e=>l.value=e),width:"500px","before-close":b},{footer:Object(s["withCtx"])(()=>[Object(s["createElementVNode"])("div",h,[Object(s["createVNode"])(u,{onClick:b},{default:Object(s["withCtx"])(()=>[Object(s["createTextVNode"])("取 消")]),_:1}),Object(s["createVNode"])(u,{type:"primary",onClick:d},{default:Object(s["withCtx"])(()=>[Object(s["createTextVNode"])(Object(s["toDisplayString"])("login"===e.registerProps.status?"登 录":"注 册"),1)]),_:1})])]),default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(p,{ref_key:"ruleFormRef",ref:i,style:{"max-width":"600px"},model:n,rules:a,"label-width":"auto",class:"demo-ruleForm","status-icon":""},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(c,{label:"手机号",prop:"phone"},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(r,{modelValue:n.phone,"onUpdate:modelValue":o[0]||(o[0]=e=>n.phone=e),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),Object(s["createVNode"])(c,{label:"密码",prop:"password"},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(r,{modelValue:n.password,"onUpdate:modelValue":o[1]||(o[1]=e=>n.password=e),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),"login"!=e.registerProps.status?(Object(s["openBlock"])(),Object(s["createBlock"])(c,{key:0,label:"确认密码",prop:"password2"},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(r,{modelValue:n.password2,"onUpdate:modelValue":o[2]||(o[2]=e=>n.password2=e),type:"password",placeholder:"请再次输入密码"},null,8,["modelValue"])]),_:1})):Object(s["createCommentVNode"])("",!0)]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}},k=(o("dbd3"),o("d959")),v=o.n(k);const f=v()(V,[["__scopeId","data-v-5dc68fcf"]]);var C=f,w={components:{Register:C},inject:["events"],data(){return{dialogVisible:!1,registerProps:{},searchText:""}},computed:{isLogin(){return!1}},mounted(){this.events.on("needLogin",()=>{this.registerFn("login")})},methods:{registerFn(e){this.dialogVisible=!0,console.log(e),this.registerProps="login"===e?{status:"login"}:{status:"register"}},closeDialog(){console.log("+++++++++++++++"),this.dialogVisible=!1},goIndex(){console.log("goIndex"),this.$router.push("/")},shopingCart(){var e;console.log("shopingCart"),null!==(e=this.$store.state.user)&&void 0!==e&&e.token?this.$router.push("/shopingCart"):this.needLogin()},myGoods(){var e;null!==(e=this.$store.state.user)&&void 0!==e&&e.token?this.$router.push("/personal"):this.needLogin()},needLogin(){this.$alert("请先登录","提示",{confirmButtonText:"OK",callback:()=>{this.registerFn("login")}})},contact(){this.$alert("欢迎访问客户服务中心，请来电咨询：010-88888888","联系方式")},goback(){this.$router.go(-1)},logout(){this.$confirm("确定退出登录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$store.commit("setUser",null)})}}};o("1425");const N=v()(w,[["render",u]]);t["default"]=N},dbd3:function(e,t,o){"use strict";o("f295")},f295:function(e,t,o){}}]);