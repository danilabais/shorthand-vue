(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7891e9c0"],{"0c20":function(e,t,r){"use strict";r("95ba")},7364:function(e,t,r){e.exports=r.p+"img/eye.528e77b6.svg"},"905f":function(e,t,r){e.exports=r.p+"img/eye-slash.4d143d87.svg"},"95ba":function(e,t,r){},a55b:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),s=r("905f"),i=r.n(s),o=r("7364"),a=r.n(o),c=function(e){return Object(n["z"])("data-v-1baaf852"),e=e(),Object(n["x"])(),e},l={class:"d-flex justify-content-center align-items-center h-50"},u={class:"form-signin col-3 text-center"},d=c((function(){return Object(n["i"])("h1",{class:"h3 mb-3 fw-normal"},[Object(n["k"])(" Пожалуйста,"),Object(n["i"])("br"),Object(n["k"])(" авторизуйтесь ")],-1)})),b={class:"form-floating"},f=c((function(){return Object(n["i"])("label",{for:"floatingInput"},"Почта",-1)})),h={class:"form-floating mb-3 parrent-pass"},p=["type"],m={src:i.a,alt:"eye-slash"},g={src:a.a,alt:"eye"},j=c((function(){return Object(n["i"])("label",{for:"floatingPassword"},"Пароль",-1)})),O=["disabled"],w=["value"],v=Object(n["k"])("Зарегистрироваться");function y(e,t,r,s,i,o){var a=Object(n["D"])("router-link");return Object(n["w"])(),Object(n["h"])("div",l,[Object(n["i"])("main",u,[Object(n["i"])("form",null,[d,Object(n["i"])("div",b,[Object(n["M"])(Object(n["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.email=e}),required:"",type:"email",class:"form-control form",id:"floatingInput",placeholder:"name@example.com"},null,512),[[n["I"],i.email,void 0,{trim:!0}]]),f]),Object(n["i"])("div",h,[Object(n["M"])(Object(n["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.password=e}),required:"",type:i.showButton?"password":"text",class:"form-control form-pass pass",id:"floatingPassword",placeholder:"Password"},null,8,p),[[n["H"],i.password]]),Object(n["i"])("button",{onClick:t[2]||(t[2]=Object(n["N"])((function(){return o.changeStatePass&&o.changeStatePass.apply(o,arguments)}),["prevent"])),class:"hidePassword"},[Object(n["M"])(Object(n["i"])("img",m,null,512),[[n["J"],!i.showButton&&i.password]]),Object(n["M"])(Object(n["i"])("img",g,null,512),[[n["J"],i.showButton&&i.password]])]),j]),Object(n["i"])("button",{class:"w-100 btn btn-lg btn-primary",disabled:o.processing||!i.email||!i.password,onClick:t[3]||(t[3]=Object(n["N"])((function(){return o.signin&&o.signin.apply(o,arguments)}),["prevent"])),type:"submit"}," Войти ",8,O),o.error&&!i.hideError?(Object(n["w"])(),Object(n["h"])("div",{key:0,class:"alert alert-warning d-flex align-items-center mb-2",role:"alert",value:o.error},[Object(n["i"])("div",null,Object(n["F"])(o.errorMsg),1)],8,w)):Object(n["g"])("",!0),Object(n["l"])(a,{to:"/register",class:"stretched-link"},{default:Object(n["L"])((function(){return[v]})),_:1})])])])}var k={name:"Login",data:function(){return{email:"",password:"",showButton:!0,hideError:!1,errors:{"There is no user record corresponding to this identifier. The user may have been deleted.":"Нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален.","The password is invalid or the user does not have a password.":"Неверный пароль","The email address is badly formatted.":"Некорректный email."}}},methods:{signin:function(){this.$store.dispatch("SIGNIN",{email:this.email,password:this.password})},changeStatePass:function(){this.showButton=!this.showButton}},computed:{processing:function(){return this.$store.getters.getProcessing},error:function(){return this.$store.getters.getError},errorMsg:function(){return this.errors[this.error]},isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated}},watch:{isUserAuthenticated:function(e){!0===e&&this.$router.push("/")},Mounted:function(){this.hideError=!1}}},x=(r("0c20"),r("6b0d")),P=r.n(x);const M=P()(k,[["render",y],["__scopeId","data-v-1baaf852"]]);t["default"]=M}}]);
//# sourceMappingURL=chunk-7891e9c0.9cd714c7.js.map