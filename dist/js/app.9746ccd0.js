(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},s=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1b132562"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=i(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}o[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"091f":function(t,e,a){"use strict";var n=a("cc76"),o=a.n(n);o.a},"0ef6":function(t,e,a){"use strict";var n=a("8d3f"),o=a.n(n);o.a},"21f5":function(t,e,a){},"2ae9":function(t,e,a){"use strict";var n=a("4d7a"),o=a.n(n);o.a},"397c":function(t,e,a){},"3d4c":function(t,e,a){},"44da":function(t,e,a){"use strict";var n=a("8336"),o=a.n(n);o.a},"486a":function(t,e,a){"use strict";var n=a("3d4c"),o=a.n(n);o.a},"4bc5":function(t,e,a){},"4d7a":function(t,e,a){},"4fa5":function(t,e,a){"use strict";var n=a("4bc5"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("m-connect-modal")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"connect-modal","data-cy":"dash-item-modal"},on:{"before-open":t.getData}},[a("section",{staticClass:"connect-modal__content"},[a("header",[a("span",{staticClass:"close",on:{click:function(e){return t.close()}}},[a("i",{staticClass:"fa fa-times"})]),a("h4",[a("i",{class:"fab "+t.data.icon,style:"color: "+t.data.color+";"}),t._v(" Vincular página do "),a("span",{staticClass:"network-label",style:"color: "+t.data.color+";"},[t._v(t._s(t.data.label))])])]),a("div",{staticClass:"holder"},[a("ul",{staticClass:"connect-steps"},[a("li",{staticClass:"done",attrs:{"data-label":"Verificação"}}),a("li",{staticClass:"active",attrs:{"data-label":"Páginas"}}),a("li",{attrs:{"data-label":"Segmento"}}),a("li",{attrs:{"data-label":"Concorrentes"}})]),a("div",{staticClass:"connect-pages"},[a("label",[t._v("Selecione a página que você deseja vincular a este perfil")]),a("m-page-list",{attrs:{channelKey:t.data.channelKey}})],1),a("div",{staticClass:"help"},[a("p",[t._v("Não encontrou sua página?")]),a("a",{attrs:{href:"/"}},[t._v("Clique aqui para atualizar suas permissões do "+t._s(t.data.label))])])])]),a("footer",[a("span",{staticClass:"prev",on:{click:function(e){return t.close()}}},[t._v("VOLTAR")]),a("span",{staticClass:"next",on:{click:t.addItem}},[t._v(" PRÓXIMO "),a("i",{staticClass:"fa fa-arrow-right"})])])])},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-list"},[t.loading?a("div",{staticClass:"page-list__loading"},[t._v(" Aguarde ... ")]):t._e(),t.loading||t.list.length?t._e():a("div",{staticClass:"page-list__empty"},[a("span",[t._v("Nenhum item encontrado para este canal")])]),!t.loading&&t.list.length?a("div",{staticClass:"page-list__content"},[a("form",{attrs:{id:"page-list-form",action:"/"},on:{submit:function(t){return t.preventDefault(),(!1)(t)}}},[a("ul",t._l(t.list,(function(e,n){return a("li",{key:n,attrs:{"data-id":e.id,"data-channel-key":e.channel_key}},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.picture}})]),a("div",{staticClass:"info"},[a("h4",[t._v(t._s(e.name))]),a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])]),a("div",{staticClass:"selector"},[a("input",{attrs:{type:"radio",name:"selected_item","data-channel-key":e.channel_key,"data-channel-data":JSON.stringify(e)},domProps:{value:e.id}})])])})),0)])]):t._e()])},l=[],u=(a("4de4"),a("d3b7"),a("bc3a")),d=a.n(u),f="https://demo2697181.mockable.io/",m=d.a.create({baseURL:f,timeout:2e3,headers:{"Content-Type":"application/json"}}),p=function(t){return console.error(t),t.response||t.response.data?t.response.data.errors||t.response.data.message||JSON.stringify(t.response.data):"An unexpected error happened"},h={get:function(t){m.get(t.endpoint).then((function(e){t.success&&t.success(e)})).catch((function(e){t.error&&t.error(p(e))})).finally((function(){t.finally&&t.finally()}))},post:function(t){m.post(t.endpoint,t.data).then((function(e){t.success&&t.success(e.data)})).catch((function(e){t.error&&t.error(p(e))})).finally((function(){t.finally&&t.finally()}))}},v={name:"page-list",props:{channelKey:{type:String,default:""}},data:function(){return{list:[],loading:!0}},methods:{filterByChannel:function(t,e){return t.filter((function(t){return t.channel_key&&t.channel_key===e}))}},created:function(){var t=this;this.loading=!0,h.get({endpoint:"pages",success:function(e){var a=e.data.data;a&&(t.channelKey?t.list=t.filterByChannel(a,t.channelKey):t.list=a)},error:function(t){alert("Um erro inesperado ocorreu :("),console.error(t)},finally:function(){t.loading=!1}})}},g=v,b=(a("091f"),a("2877")),y=Object(b["a"])(g,c,l,!1,null,null,null),_=y.exports,C={name:"connect-modal",components:{mPageList:_},data:function(){return{data:{}}},methods:{close:function(){this.$modal.hide("connect-modal")},getData:function(t){this.data=t.params},addItem:function(){var t=document.getElementById("page-list-form"),e=t.querySelector("input:checked");if(e){var a=e.dataset.channelKey,o=JSON.parse(e.dataset.channelData);n["a"].set(this.$store.state.connectedPages,a,o),this.close()}}}},w=C,S=(a("0ef6"),a("2ae9"),Object(b["a"])(w,i,r,!1,null,"6c230fa2",null)),k=S.exports,E={name:"App",components:{mConnectModal:k}},O=E,A=(a("5c0b"),Object(b["a"])(O,o,s,!1,null,null,null)),x=A.exports,j=a("8c4f"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("m-header"),a("m-dash-mosaic")],1)},T=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"m-header",attrs:{"data-cy":"app-header"}},[a("m-header-upper"),a("m-header-middle")],1)},I=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-header__upper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"left"},[a("m-today"),a("m-timer",{attrs:{STORAGE_KEY:"mlabs.sessionStartedAt"}})],1),a("div",{staticClass:"center"},[a("m-dropdown",{attrs:{label:"MINHA CONTA"}})],1),t._m(0)])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("a",{attrs:{href:"/"}},[a("i",{staticClass:"fa fa-cog"})])])}],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.time?a("span",{staticClass:"m-timer",attrs:{"data-cy":"timer"}},[t._v(t._s(t.time))]):t._e()},M=[],N=(a("a15b"),a("d81d"),a("b65f"),a("4d90"),{name:"m-timer",mounted:function(){var t=this;this.saveAccessTime(),this.calcElapsedTime(),setInterval((function(){return t.count()}),1e3)},data:function(){return{h:0,m:0,s:0,time:void 0}},props:{STORAGE_KEY:{type:String,required:!0}},methods:{count:function(){this.s++,this.s>=60&&(this.s=0,this.m++),this.m>=60&&(this.m=0,this.h++),this.time=[this.h,this.m,this.s].map((function(t){return String(Math.trunc(t)).padStart(2,"0")})).join(":")},saveAccessTime:function(){if(window.sessionStorage&&!window.sessionStorage.getItem(this.STORAGE_KEY)){var t=new Date;return window.sessionStorage.setItem(this.STORAGE_KEY,t)}},getAccessTime:function(){var t=void 0;return t=window.sessionStorage&&window.sessionStorage.getItem(this.STORAGE_KEY)?window.sessionStorage.getItem(this.STORAGE_KEY):this.saveAccessTime(),new Date(t)},calcElapsedTime:function(){var t=new Date,e=this.getAccessTime(),a=Math.abs(t-e)/1e3,n=Math.floor(a/86400);a-=86400*n,this.h=Math.floor(a/3600)%24,a-=3600*this.h,this.m=Math.floor(a/60)%60,a-=60*this.m,this.s=a%60}}}),R=N,q=Object(b["a"])(R,L,M,!1,null,null,null),J=q.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"m-today",attrs:{"data-cy":"today"}},[t._v(t._s(t.today))])},B=[],G={name:"m-today",computed:{today:function(){var t=new Date;return[t.getDate(),t.getMonth()+1,t.getFullYear()].map((function(t){return String(t).padStart(2,"0")})).join("/")}}},H=G,F=Object(b["a"])(H,Y,B,!1,null,null,null),U=F.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-holder"},[a("span",{staticClass:"trigger"},[t._v(" "+t._s(t.label)+" "),a("i",{staticClass:"fa fa-chevron-down"})]),a("div",{staticClass:"dropdown",attrs:{"data-cy":"my-account-dropdown"}},[t._t("default")],2)])},z=[],W={name:"m-dropdown",props:{label:{type:String,default:""}}},X=W,Q=(a("4fa5"),Object(b["a"])(X,V,z,!1,null,"7bed3458",null)),Z=Q.exports,tt={name:"m-header",components:{mTimer:J,mToday:U,mDropdown:Z}},et=tt,at=(a("44da"),Object(b["a"])(et,D,P,!1,null,"31d7c784",null)),nt=at.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-header__middle"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"items"},[a("ul",t._l(t.items,(function(e,n){return a("li",{key:n,class:"item active-"+(e.href===t.$route.path)},[a("a",{attrs:{href:e.href}},[a("div",{staticClass:"item__content"},[a("i",{class:"icon fa "+e.icon}),a("span",{staticClass:"label"},[t._v(t._s(e.label))]),e.badge?a("span",{staticClass:"badge",style:"background-color:"+(e.badgeBg||"#ffb300")},[t._v(t._s(e.badge))]):t._e()])])])})),0),a("span",{staticClass:"hamburger",on:{click:function(e){return t.$el.classList.toggle("mobo-menu-active")}}},[a("i",{staticClass:"fa fa-bars"}),a("i",{staticClass:"fa fa-times"})])])])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo",attrs:{"data-cy":"app-logo"}},[a("a",{attrs:{href:"/",target:"_blank"}},[a("img",{attrs:{src:"//wpimages.mlabs.com.br/wp-content/uploads/2020/01/23135108/logo-color.webp"}})])])}],it={name:"m-header-middle",data:function(){return{items:[{label:"Dashboard",icon:"fa-tachometer-alt",href:"/"},{label:"Agendar post",icon:"fa-calendar-plus",href:"/agendar",badge:"Novo"},{label:"Calendário",icon:"fa-calendar-alt",href:"/calendario"},{label:"Inbox",icon:"fa-inbox",href:"/inbox"},{label:"Feed",icon:"fa-newspaper",href:"/feed"},{label:"Workflow",icon:"fa-edit",href:"/fa-edit"},{label:"Acompanhamento",icon:"fa-chart-line",href:"/fa-chart-line"},{label:"Relatórios",icon:"fa-chart-pie",href:"/fa-chart-pie"}]}}},rt=it,ct=(a("ce04"),Object(b["a"])(rt,ot,st,!1,null,"7e8a2893",null)),lt=ct.exports,ut={name:"m-header",components:{mHeaderUpper:nt,mHeaderMiddle:lt}},dt=ut,ft=(a("e19e"),Object(b["a"])(dt,$,I,!1,null,"17898c42",null)),mt=ft.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dash-mosaic"},[a("div",{staticClass:"container"},[a("div",{staticClass:"dash-mosaic__items"},[a("div",{staticClass:"dash-mosaic__items__content"},t._l(t.items,(function(t,e){return a("m-item",{key:e,attrs:{label:t.label,icon:t.icon,color:t.color,tooltip:t.tooltip,channelKey:t.channelKey,iconExtraStyle:t.iconExtraStyle?t.iconExtraStyle:""}})})),1)])])])},ht=[],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.connected?a("div",{staticClass:"dash-mosaic-item connected",style:"background-color: "+t.color+"; "+t.iconExtraStyle,attrs:{"data-channel-key":t.channelKey,"data-cy":"dash-connected-item"}},[a("section",{staticClass:"connected__content"},[a("header",{attrs:{title:t.label}},[a("span",{staticClass:"label"},[t._v(t._s(t.label))]),a("span",{staticClass:"close",on:{click:function(e){return t.unlink(t.channelKey)}}},[a("i",{staticClass:"fa fa-times"})])]),a("div",{staticClass:"holder"},[a("i",{class:"fab "+t.icon}),a("div",{staticClass:"info"},[t._v(" "+t._s(t.connected.name)+" ")])])])]):a("div",{staticClass:"dash-mosaic-item",attrs:{"data-channel-key":t.channelKey,"data-cy":"dash-item"}},[a("div",{staticClass:"dash-mosaic-item__content"},[a("div",{staticClass:"icon"},[a("i",{class:"fab "+t.icon,style:"background-color: "+t.color+"; "+t.iconExtraStyle})]),a("div",{staticClass:"label"},[a("span",[t._v(t._s(t.label))])]),a("div",{staticClass:"action"},[a("button",{attrs:{"data-cy":"add-channel"},on:{click:function(e){return t.$modal.show("connect-modal",t.$props)}}},[t._v("Adicionar")])])]),t.tooltip?a("div",{staticClass:"help"},[a("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:{content:t.tooltip,container:".dash-mosaic"},expression:"{content: tooltip, container: '.dash-mosaic'}",modifiers:{auto:!0}}],staticClass:"fa fa-question"})]):t._e()])},gt=[],bt={name:"m-dash-mosaic-item",props:{color:{type:String,default:"#000000"},icon:{type:String,default:"icon-none"},label:{type:String,default:"Label"},iconExtraStyle:{type:String,default:""},tooltip:{type:String,default:""},channelKey:{type:String,default:""}},computed:{connected:function(){return this.items[this.channelKey]},items:function(){return this.$store?this.$store.state.connectedPages:[]}},methods:{unlink:function(t){n["a"].delete(this.items,t)}},watch:{items:{handler:function(){localStorage.setItem("mlabs.dashitems",JSON.stringify(this.items))},deep:!0}}},yt=bt,_t=(a("486a"),a("6f73"),Object(b["a"])(yt,vt,gt,!1,null,"2c334b22",null)),Ct=_t.exports,wt=a("e37d");n["a"].use(wt["a"]);var St={name:"m-dash-mosaic",components:{mItem:Ct},mounted:function(){var t=localStorage.getItem("mlabs.dashitems");t&&n["a"].set(this.$store.state,"connectedPages",JSON.parse(t))},data:function(){return{items:[{label:"facebook",tooltip:"Lorem Ipsum Dolor Sit Amet",icon:"fa-facebook-f",color:"var(--global-color-facebook",channelKey:"facebook"},{label:"twitter",tooltip:"Lorem Ipsum Dolor Sit Amet",icon:"fa-twitter",color:"var(--global-color-twitter",channelKey:"twitter"},{label:"instagram",icon:"fa-instagram",color:"var(--global-color-instagram",tooltip:"Lorem Ipsum Dolor Sit Amet",iconExtraStyle:"background: #d6249f;background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);",channelKey:"instagram"},{label:"google meu negócio",tooltip:"Lorem Ipsum Dolor Sit Amet",icon:"fa-google",color:"var(--global-color-google",channelKey:"google_businness"},{label:"pinterest",tooltip:"Lorem Ipsum Dolor Sit Amet",icon:"fa-pinterest",color:"var(--global-color-pinterest",channelKey:"pinterest"},{label:"linkedin",tooltip:"Lorem Ipsum Dolor Sit Amet",icon:"fa-linkedin",color:"var(--global-color-linkedin",channelKey:"linkedin"},{label:"youTube",tooltip:"Lorem Ipsum Dolor Sit Amet",icon:"fa-youtube",color:"var(--global-color-youtube",channelKey:"youtube"},{label:"whatsApp",tooltip:"Lorem Ipsum Dolor Sit Amet",icon:"fa-whatsapp",color:"var(--global-color-whatsapp",channelKey:"whatsapp"},{label:"analytics",icon:"fa fa-chart-bar",tooltip:"Lorem Ipsum Dolor Sit Amet",color:"var(--global-color-analytics",channelKey:"google_analytics"}]}}},kt=St,Et=(a("b1bf"),Object(b["a"])(kt,pt,ht,!1,null,null,null)),Ot=Et.exports,At={name:"Home",components:{mHeader:mt,mDashMosaic:Ot}},xt=At,jt=Object(b["a"])(xt,K,T,!1,null,null,null),Kt=jt.exports;n["a"].use(j["a"]);var Tt=[{path:"/",name:"Home",component:Kt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],$t=new j["a"]({mode:"history",base:"/",routes:Tt}),It=$t,Dt=a("2f62");n["a"].use(Dt["a"]);var Pt=new Dt["a"].Store({state:{connectedPages:{}}}),Lt=a("1881"),Mt=a.n(Lt),Nt=a("9483");Object(Nt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("f5df1");n["a"].use(Mt.a),n["a"].config.productionTip=!1,new n["a"]({router:It,store:Pt,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"6f73":function(t,e,a){"use strict";var n=a("21f5"),o=a.n(n);o.a},8336:function(t,e,a){},"8aec":function(t,e,a){},"8d3f":function(t,e,a){},"9c0c":function(t,e,a){},b1bf:function(t,e,a){"use strict";var n=a("8aec"),o=a.n(n);o.a},cc76:function(t,e,a){},ce04:function(t,e,a){"use strict";var n=a("397c"),o=a.n(n);o.a},de55:function(t,e,a){},e19e:function(t,e,a){"use strict";var n=a("de55"),o=a.n(n);o.a}});
//# sourceMappingURL=app.9746ccd0.js.map