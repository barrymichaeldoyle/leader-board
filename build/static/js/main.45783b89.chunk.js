(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){"use strict";var a=t(17),r=t.n(a),c=t(18),i=t.n(c),o=t(26),u=function(){var e=Object(o.a)(i.a.mark(function e(n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.collection("contestants").doc(n).delete();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Something bad happened"),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,5]])}));return function(n){return e.apply(this,arguments)}}();t.d(n,"a",function(){return d}),t.d(n,"c",function(){return u});r.a.initializeApp({apiKey:"AIzaSyDCWMcjaM4tQer-_228g1c20c7uwOY4u14",authDomain:"leader-board-c3385.firebaseapp.com",databaseURL:"https://leader-board-c3385.firebaseio.com",projectId:"leader-board-c3385",storageBucket:"leader-board-c3385.appspot.com",messagingSenderId:"964919982972",appId:"1:964919982972:web:cb1b6875d2567a818042f9",measurementId:"G-MQZKC21ZQM"});var l=n.b=r.a.firestore(),d=r.a.auth()},24:function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return l});var a=t(13),r=t(1),c=t.n(r),i=t(23),o=Object(r.createContext)(),u=function(e){var n=e.children,t=Object(r.useState)(),u=Object(a.a)(t,2),l=u[0],d=u[1];return i.a.onAuthStateChanged(d),c.a.createElement(o.Provider,{value:l},n)},l=function(){return Object(r.useContext)(o)}},25:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var a=t(13),r=t(1),c=t.n(r),i=Object(r.createContext)({isMobile:window.innerWidth<500,height:window.innerHeight,width:window.innerWidth}),o=function(e){var n=e.children,t=Object(r.useState)(window.innerWidth<500),o=Object(a.a)(t,2),u=o[0],l=o[1],d=Object(r.useState)(window.innerHeight),s=Object(a.a)(d,2),f=s[0],h=s[1],p=Object(r.useState)(window.innerWidth),b=Object(a.a)(p,2),m=b[0],w=b[1],v=function(){l(window.innerWidth<500),h(window.innerHeight),w(window.innerWidth)};return Object(r.useEffect)(function(){return window.addEventListener("resize",v),function(){return window.removeEventListener("resize",v)}},[]),c.a.createElement(i.Provider,{value:{isMobile:u,height:f,width:m}},n)}},32:function(e,n,t){},33:function(e,n,t){e.exports=t(54)},54:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(29),i=t.n(c),o=t(19),u=t(9),l=Object(a.lazy)(function(){return t.e(3).then(t.bind(null,57))}),d=Object(a.lazy)(function(){return t.e(4).then(t.bind(null,59))}),s=Object(a.lazy)(function(){return t.e(5).then(t.bind(null,58))}),f=function(){return r.a.createElement(u.c,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading Page...")},r.a.createElement(u.a,{path:"/contestant/:id",component:l}),r.a.createElement(u.a,{path:"/login",component:s}),r.a.createElement(u.a,{exact:!0,path:"/",component:d})),r.a.createElement(u.a,{component:function(){return r.a.createElement("h1",null,"Page Not Found")}}))},h=(t(32),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"App"),r.a.createElement(f,null))}),p=t(24),b=t(25),m=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){var t=e.children;return n.reduceRight(function(e,n){return r.a.createElement(n,null,e)},t)}}(p.a,b.a),w=document.getElementById("root");i.a.render(r.a.createElement(a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(m,null,r.a.createElement(h,null)))),w)}},[[33,1,2]]]);
//# sourceMappingURL=main.45783b89.chunk.js.map