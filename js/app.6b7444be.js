(function(){"use strict";var t={5020:function(t,e,o){var r=o(9242),a=o(3396);const s=(0,a.Uk)("Home"),n=(0,a.Uk)(" | "),i=(0,a.Uk)("About"),l=(0,a.Uk)(" | "),c=(0,a.Uk)("Portfolio"),u=(0,a.Uk)(" | "),h=(0,a.Uk)("Store"),d=(0,a.Uk)(" | "),m=(0,a.Uk)("Axios"),p=(0,a.Uk)(" | "),f=(0,a.Uk)("Register"),g=(0,a.Uk)(" | "),y=(0,a.Uk)("Nova Poshta");function v(t,e){const o=(0,a.up)("router-link"),r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(o,{to:"/"},{default:(0,a.w5)((()=>[s])),_:1}),n,(0,a.Wm)(o,{to:"/about"},{default:(0,a.w5)((()=>[i])),_:1}),l,(0,a.Wm)(o,{to:"/portfolio"},{default:(0,a.w5)((()=>[c])),_:1}),u,(0,a.Wm)(o,{to:"/store"},{default:(0,a.w5)((()=>[h])),_:1}),d,(0,a.Wm)(o,{to:"/axios"},{default:(0,a.w5)((()=>[m])),_:1}),p,(0,a.Wm)(o,{to:"/register"},{default:(0,a.w5)((()=>[f])),_:1}),g,(0,a.Wm)(o,{to:"/novaposhta"},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a.Wm)(r)],64)}var A=o(89);const P={},w=(0,A.Z)(P,[["render",v]]);var S=w,N=o(678);function b(t,e,o,r,s,n){const i=(0,a.up)("MyProfile");return(0,a.wg)(),(0,a.j4)(i)}function L(t,e,o,r,s,n){const i=(0,a.up)("MyAvatar");return(0,a.wg)(),(0,a.j4)(i)}const k=["src"],C=["src"];function I(t,e,o,r,s,n){return(0,a.wg)(),(0,a.iD)("div",null,[r.currentAvatarUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,src:r.currentAvatarUrl,alt:"curAvatar",width:"35px"},null,8,k)):(0,a.kq)("",!0),r.fileName?((0,a.wg)(),(0,a.iD)("img",{key:1,src:r.fileName,alt:"newAvatar",width:"35px"},null,8,C)):(0,a.kq)("",!0),(0,a._)("input",{type:"file",onChange:e[0]||(e[0]=(...t)=>r.uploadAvatar&&r.uploadAvatar(...t))},null,32),(0,a._)("button",{type:"button",onClick:e[1]||(e[1]=(...t)=>r.saveAvatar&&r.saveAvatar(...t))}," Save Avatar")])}var T=o(65),j={name:"MyAvatar",setup(){const t=(0,T.oR)();return{saveAvatar:function(){t.dispatch("apiUpdateAvatar")},fileName:(0,a.Fl)((()=>{const e=t.getters.newFileAvatar;return e?(console.log("getter"),console.log(t.getters.newFileAvatar),"http://localhost:4000/uploads"+e+"?"+Math.random()):null})),currentAvatarUrl:(0,a.Fl)((()=>"http://localhost:4000/storage/avatars"+t.getters.currentAvatarUrl)),uploadAvatar:function(e){const o=e.target.files||e.dataTransfer.files;o.length&&t.dispatch("apiUploadAvatar",o[0])}}}};const O=(0,A.Z)(j,[["render",I]]);var F=O,E={name:"MyProfile",components:{MyAvatar:F}};const J=(0,A.Z)(E,[["render",L]]);var M=J,U={name:"HomeView",components:{MyProfile:M}};const W=(0,A.Z)(U,[["render",b]]);var _=W;const x=[{path:"/",name:"home",component:_},{path:"/portfolio",name:"portfolio",component:()=>o.e(443).then(o.bind(o,1311))},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,1333))},{path:"/store",name:"store",component:()=>o.e(443).then(o.bind(o,6321))},{path:"/axios",name:"axios",component:()=>o.e(443).then(o.bind(o,8487))},{path:"/register",name:"register",component:()=>o.e(443).then(o.bind(o,6586))},{path:"/novaposhta",name:"novaposhta",component:()=>o.e(443).then(o.bind(o,1295))}],G=(0,N.p7)({history:(0,N.PO)("/"),routes:x});var R=G,D=o(6265),V=o.n(D);async function Q(t,e=null){return null===e&&(e={}),e.header={"X-RapidAPI-Host":"genius-song-lyrics1.p.rapidapi.com","X-RapidAPI-Key":"9893694da0msh69f3fff9063bfe6p1d1906jsndbecc5187a6f",AuthJWT:localStorage.getItem("userToken")},new Promise(((o,r)=>{V().get(t,e).then((t=>{o(t)})).catch((t=>{r(t)}))}))}async function H(t,e,o=null){}var K={get:Q,post:H},q={state:{myFirstValues:0},getters:{getMyFirstValue(t){return t.myFirstValues}},mutations:{setMyFirstValue(t,e){t.myFirstValues=e}},actions:{apiGetMyFirstValue({state:t,commit:e,dispatch:o}){console.log("Get Data"),K.get("url"),e("setMyFirstValue","получил"),o("toastInfo","Ok")}},modules:{}},Z=o(6215),X=o.n(Z);const B=(0,Z.useToast)();var z={actions:{toastSuccess({state:t,commit:e,dispatch:o},r){B.success(r)},toastInfo({state:t,commit:e,dispatch:o},r){r="<h2> Hello </h2>"+r,B.info(r)}}};const Y=(0,Z.useToast)();var $={actions:{errorLog({state:t,commit:e,dispatch:o},r){console.log(r),Y.error(r)},errorLogAjax({state:t,commit:e,dispatch:o},r){let a="???";403===r.status?a="<h3>Доступ запрещён</h3>":404===r.status&&(a="<h3>Не найдено</h3>"),Y.error(a)},errorConsole({state:t,commit:e,dispatch:o},r){console.log(r)}}},tt={state:{songLyricsArray:[],songLyricsQuery:null,songLyricsErr:null,isPreload:!1},getters:{getSongsLyrics(t){return t.songLyricsArray},getSongLyricsQuery(t){return t.songLyricsQuery},getSongLyricsErr(t){return t.songLyricsErr},getCanSendSongLyrics(t){return!!t.songLyricsQuery&&t.songLyricsQuery.length<3},getIsPreload(t){return t.isPreload}},mutations:{setSongLyrics(t,e=null){t.songLyricsArray=e},setIsPreload(t,e=null){t.isPreload=e},setSongLyricsQuery(t,e){t.songLyricsQuery=e,e.length<3?t.songLyricsErr=" < 3":t.songLyricsErr=null}},actions:{apiGetSongLyrics({state:t,commit:e,dispatch:o}){o("toastInfo","start"),e("setIsPreload",!0),o("apiFetch"),o("toastInfo","finish"),e("setIsPreload",!1)},apiFetch({state:t,commit:e,dispatch:o}){const r={method:"GET",headers:{"X-RapidAPI-Host":"genius-song-lyrics1.p.rapidapi.com","X-RapidAPI-Key":"9893694da0msh69f3fff9063bfe6p1d1906jsndbecc5187a6f"}};fetch("https://genius-song-lyrics1.p.rapidapi.com/search?q="+t.songLyricsQuery+"&per_page=10&page=1",r).then((t=>t.json())).then((t=>{e("setSongLyrics",t.response.hits)})).catch((t=>{console.error(t),o("errorLogAjax",403)}))}}},et=(o(6699),{state:{myArray:JSON.parse(localStorage.getItem("myArray"))||[],myArrayPop:null},getters:{getMyArray:t=>e=>0===e.length?t.myArray:t.myArray.filter((t=>t.name.includes(e))),getMyArrayLen(t){return t.myArray.length},getWorkElement(t){return this.state.myArrayPop}},mutations:{setMyArrayPush(t,e){t.myArray.push(e),localStorage.setItem("myArray",JSON.stringify(t.myArray))},setMyArrayDeleteIndex(t,e){t.myArray.splice(e,1),localStorage.setItem("myArray",JSON.stringify(t.myArray))},getMyArrayPop(t,e=null){t.myArrayPop=t.myArray.pop(),localStorage.setItem("myArray",JSON.stringify(t.myArray))},setMyArrayClear(t,e=null){t.myArray=[],t.myArrayPop=null,localStorage.removeItem("myArray")},setMyArrayDelId(t,e){t.myArray=t.myArray.filter((t=>t.id!==e)),localStorage.setItem("myArray",JSON.stringify(t.myArray)),this.dispatch("toastSuccess","del")}},action:{apiGetMyArray(){},apiSendMyArray(){}}}),ot={state:{email:"",password:"",passwordConfirm:"",registerCheck:!1,errLogin:null,errPassword:null},getters:{canRegister:t=>0!==t.email.length&&0!==t.password.length,email:t=>t.email,password:t=>t.password,passwordConfirm:t=>t.passwordConfirm,registerCheck:t=>t.registerCheck,errLogin:t=>t.errLogin,errPassword:t=>t.errPassword},mutations:{email:(t,e)=>{t.email=e},password:(t,e)=>{t.password=e},passwordConfirm:(t,e)=>{t.passwordConfirm=e},registerCheck:(t,e)=>{t.registerCheck=e},errLogin:(t,e)=>{t.errLogin=e},errPassword:(t,e)=>{t.errPassword=e}},actions:{email({commit:t,dispatch:e},o){o||(o=""),t("email",o),e("validateForm")},password({commit:t,dispatch:e},o){o||(o=""),t("password",o),e("validateForm")},passwordConfirm({commit:t,dispatch:e},o){o||(o=""),t("passwordConfirm",o),e("validateForm")},registerCheck({commit:t,dispatch:e},o){o||(o=""),t("registerCheck",o),e("validateForm")},validateForm({state:t,commit:e,dispatch:o},r=null){e("errLogin",null),e("errPassword",null);const a=t.email,s=t.password;a.length<2&&e("errLogin","short"),s.length<2&&e("errPassword","short")},apiTryCreateUser({state:t,commit:e,dispatch:o},r=null){const a={email:t.email,password:t.password};fetch("http://localhost:4000/api/tryCreateUser",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)}).then((t=>t.json())).then((t=>{console.log(t),o("toastSuccess"," user Create")})).catch((t=>{o("errorLogAjax",t)}))},apiTryLogin({state:t,commit:e,dispatch:o}){const r={email:t.email,password:t.password};fetch("http://localhost:4000/api/auth",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(r)}).then((t=>{if(200===t.status)return t.json();o("toastInfo","JWT Not Ready")})).then((t=>{console.log(t),o("toastSuccess"," JWT Ready "),e("JwtToken",t.token),e("user",t.user)})).catch((t=>{o("errorLogAjax",t)}))}}},rt={state:{JwtToken:localStorage.getItem("JwtToken")||null,user:JSON.parse(localStorage.getItem("user"))||null},getters:{JwtToken:t=>t.JwtToken,user:t=>t.user},mutations:{JwtToken:(t,e)=>{t.JwtToken=e,localStorage.setItem("JwtToken",e)},user:(t,e)=>{t.user=e,localStorage.setItem("user",JSON.stringify(e))}},modules:{forms:ot}},at={state:{novaPochtaError:null,isNovaPoshtaLoading:!1,novaPoshtaAreas:[],novaPoshtaCities:[],novaPoshtaWarehouses:[],novaPoshtaArea:"",novaPoshtaCity:""},getters:{getNovaPoshtaError(t){return t.novaPoshtaError},getIsNovaPoshtaLoading(t){return t.isNovaPoshtaLoading},getNovaPoshtaAreas(t){return t.novaPoshtaAreas},getNovaPoshtaCities(t){return t.novaPoshtaSettlements},getNovaPoshtaWarehouses(t){return t.novaPoshtaWarehouses},getNovaPoshtaArea(t){return t.novaPoshtaArea},getNovaPoshtaCity(t){return t.novaPoshtaCity}},mutations:{setNovaPoshtaError(t,e){t.novaPoshtaError=e},setIsNovaPoshtaLoading(t,e){t.isNovaPoshtaLoading=e},setNovaPoshtaAreas(t,e){t.novaPoshtaAreas=e},setNovaPoshtaCities(t,e){t.novaPoshtaSettlements=e},setNovaPoshtaWarehouses(t,e){t.novaPoshtaWarehouses=e},setNovaPoshtaArea(t,e){t.novaPoshtaArea=e},setNovaPoshtaCity(t,e){t.novaPoshtaCity=e}},actions:{apiGetAreas({state:t,commit:e,dispatch:o}){0===t.novaPoshtaAreas.length&&(e("setNovaPoshtaError",null),o("toastInfo","Loading areas..."),e("setIsNovaPoshtaLoading",!0),o("apiGetAreasFromServer"))},apiGetAreasFromServer({state:t,commit:e,dispatch:o}){const r={method:"POST",body:JSON.stringify({apiKey:"f241852f6c7635594ded2bd5fb879874",modelName:"Address",calledMethod:"getAreas",methodProperties:{}})};fetch("https://api.novaposhta.ua/v2.0/json/",r).then((t=>t.json())).then((t=>{console.log(t),e("setNovaPoshtaAreas",t.data),o("toastSuccess","Loaded successfully"),e("setIsNovaPoshtaLoading",!1)})).catch((t=>o("logError",t)))},apiGetCities({state:t,commit:e,dispatch:o}){null!=t.novaPoshtaArea&&(e("setNovaPoshtaError",null),o("toastInfo","Loading cities..."),e("setIsNovaPoshtaLoading",!0),o("apiGetCitiesFromServer"))},apiGetCitiesFromServer({state:t,commit:e,dispatch:o}){const r={method:"POST",body:JSON.stringify({apiKey:"f241852f6c7635594ded2bd5fb879874",modelName:"Address",calledMethod:"getCities",methodProperties:{AreaRef:t.novaPoshtaArea.Ref}})};fetch("https://api.novaposhta.ua/v2.0/json/",r).then((t=>t.json())).then((t=>{console.log(t),e("setNovaPoshtaCities",t.data),o("toastSuccess","Loaded successfully"),e("setIsNovaPoshtaLoading",!1)})).catch((t=>o("logError",t)))},apiGetWarehouses({state:t,commit:e,dispatch:o}){null!=t.novaPoshtaCity&&(e("setNovaPoshtaError",null),o("toastInfo","Loading warehouses..."),e("setIsNovaPoshtaLoading",!0),o("apiGetWarehousesFromServer"))},apiGetWarehousesFromServer({state:t,commit:e,dispatch:o}){const r={method:"POST",body:JSON.stringify({apiKey:"f241852f6c7635594ded2bd5fb879874",modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityRef:t.novaPoshtaCity.Ref}})};fetch("https://api.novaposhta.ua/v2.0/json/",r).then((t=>t.json())).then((t=>{console.log(t),e("setNovaPoshtaWarehouses",t.data),o("toastSuccess","Loaded successfully"),e("setIsNovaPoshtaLoading",!1)})).catch((t=>o("logError",t)))}}},st={state:{portfolioItem:JSON.parse(localStorage.getItem("portfolioItem"))||[]},getters:{portfolioItem:t=>t.portfolioItem},mutations:{portfolioItem:(t,e)=>{t.portfolioItem=e,localStorage.setItem("portfolioItem",JSON.stringify(e))}},actions:{apiGetPortfolioItems({state:t,commit:e,dispatch:o}){fetch("http://localhost:4000/api/portfolios",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",authorization:localStorage.getItem("JwtToken")}}).then((t=>{if(console.log(t),200===t.status)return t.json();o("toastInfo","Portfolio Not Ready")})).then((t=>{console.log(t),t&&(console.log(t),o("toastSuccess"," Get Items "),e("portfolioItem",t))})).catch((t=>{o("errorLogAjax",t)}))}}},nt={state:{fileName:null},getters:{currentAvatarUrl:(t,e)=>(console.log("Avatar"),console.log(e.user),e.user&&e.user.avatar?e.user.avatar:null),newFileAvatar:t=>t.fileName?t.fileName:null},mutations:{fileName:(t,e)=>{t.fileName=e,console.log(t.fileName)}},actions:{apiUpdateAvatar({state:t,commit:e,dispatch:o},r=null){fetch("http://localhost:4000/users/updateAvatar",{method:"POST",mode:"cors",headers:{authorization:localStorage.getItem("JwtToken"),"Content-Type":"application/json"},body:JSON.stringify({filename:t.fileName})}).then((t=>t.json())).then((t=>{console.log(t)})).catch((t=>{o("errorLogAjax",t)}))},apiUploadAvatar({state:t,commit:e,dispatch:o},r){o("toastInfo","Upload to Server Start");const a=new FormData;a.append("img",r),fetch("http://localhost:4000/api/helpers/converter/avatar",{method:"POST",mode:"cors",headers:{},body:a}).then((t=>t.json())).then((t=>{console.log(t.filename),e("fileName",t.filename),o("toastSuccess"," Avatar Uploads ")})).catch((t=>{o("errorLogAjax",t)}))}}},it={state:{},getters:{},mutations:{},modules:{avatar:nt}},lt=(0,T.MT)({strict:!0,modules:{myFirstValues:q,toasts:z,Logs:$,songLyrics:tt,myArray:et,auth:rt,NovaPoshta:at,portfolio:st,profile:it}}),ct=o(936);(0,r.ri)(S).use(lt).use(R).use(ct.ZP).use(X()).mount("#app")}},e={};function o(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,r,a,s){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],s=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(i=!1,s<n&&(n=s));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,a,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,r){return o.f[r](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.4c5f6b4e.js"}}(),function(){o.miniCssF=function(t){return"css/about.9435a8e1.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue_02:";o.l=function(r,a,s,n){if(t[r])t[r].push(a);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var h=c[u];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==e+s){i=h;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",e+s),i.src=r),t[r]=[a];var d=function(e,o){i.onerror=i.onload=null,clearTimeout(m);var a=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(o)})),e)return e(o)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t=function(t,e,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(s){if(a.onerror=a.onload=null,"load"===s.type)o();else{var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=s,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var a=o[r],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===t||s===e))return a}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){a=n[r],s=a.getAttribute("data-href");if(s===t||s===e)return a}},r=function(r){return new Promise((function(a,s){var n=o.miniCssF(r),i=o.p+n;if(e(n,i))return a();t(r,i,a,s)}))},a={143:0};o.f.miniCss=function(t,e){var o={443:1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};o.f.j=function(e,r){var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise((function(o,r){a=t[e]=[o,r]}));r.push(a[2]=s);var n=o.p+o.u(e),i=new Error,l=function(r){if(o.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,a[1](i)}};o.l(n,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,s,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var u=l(o)}for(e&&e(r);c<n.length;c++)s=n[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(u)},r=self["webpackChunkvue_02"]=self["webpackChunkvue_02"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(5020)}));r=o.O(r)})();
//# sourceMappingURL=app.6b7444be.js.map