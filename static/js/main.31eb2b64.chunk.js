(this["webpackJsonpdaybyday-react"]=this["webpackJsonpdaybyday-react"]||[]).push([[0],{28:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(19),a=c.n(s),i=c(43),j=c(10),r=(c(49),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))}),l=c(11),o=c(85),b=c(93),d=c(88),h=c(89),O=c(94),u=c(95),x=c(96),g=c(97),f=c(98),m=c(20),p={baseURL_API:"https://spicy-daybyday.herokuapp.com/",clientID:"125049332289-q7ghmkqlga5e7hpuvolrgfkcvjv95d9p.apps.googleusercontent.com"},v=c.p+"static/media/spicy_logo_blanco.36a11ad0.png",y=c(84),S=c(86),I=c(87),N=c(90),k=c(91),C=c(92),D=c(24),M=(c(28),c(42)),w=c.n(M).a.create({baseURL:p.baseURL_API});var L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],E=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function A(e){return E[e.getDay()]+", "+e.getDate()+" "+L[e.getMonth()]+" "+e.getFullYear()+", "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)}var F=c(3);function T(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=function(){w.get("/notes").then((function(e){return e.data})).then((function(e){s(e)}))},i=function(){a()},j=function(){a()};return Object(n.useEffect)((function(){a()}),[]),Object(F.jsxs)("div",{children:[Object(F.jsx)(y.a,{tag:"center",children:Object(F.jsxs)(o.a,{color:"secondary",children:[Object(F.jsx)("strong",{children:"Notes  "}),Object(F.jsx)(S.a,{pill:!0,color:"secondary",children:c.length})]})}),Object(F.jsx)(I.a,{children:Object(F.jsx)("tbody",{children:c.map((function(e,t){return Object(F.jsxs)("div",{children:[Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{children:Object(F.jsx)(N.a,{children:Object(F.jsxs)(k.a,{children:[Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{children:Object(F.jsxs)("strong",{children:[Object(F.jsx)("img",{src:e.image,alt:"Img"})," ",e.user]})})}),Object(F.jsx)("br",{}),Object(F.jsxs)(d.a,{children:[Object(F.jsx)(h.a,{children:e.message}),Object(F.jsxs)(h.a,{align:"right",children:[Object(F.jsx)(C.a,{color:"secondary",onClick:j,children:Object(F.jsx)(D.b,{})}),Object(F.jsx)(C.a,{color:"info",onClick:i,children:Object(F.jsx)(D.a,{})})]})]}),Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{align:"left",children:Object(F.jsx)("small",{children:A(new Date(e.publicationdate))})})})]})})})}),Object(F.jsx)("br",{})]})}))})})]})}var B={maxWidth:"85px"};var _=c(99),J=c(100);function P(e){return Object(F.jsxs)(O.a,{color:"dark",light:!0,expand:"md",children:[Object(F.jsx)(x.a,{children:Object(F.jsxs)("span",{className:"text-white",children:[Object(F.jsx)("strong",{children:"Day By Day:    "})," ",sessionStorage.getItem("name")]})}),Object(F.jsx)(_.a,{navbar:!0,children:Object(F.jsxs)(g.a,{className:"ml-auto",navbar:!0,children:[Object(F.jsx)(f.a,{children:Object(F.jsx)(J.a,{href:"#",onClick:function(){return e.onShow(1)},children:Object(F.jsx)("span",{className:"text-white",children:"Todos los Notes"})})}),Object(F.jsx)(f.a,{children:Object(F.jsx)(J.a,{href:"#",onClick:function(){return e.onShow(2)},children:Object(F.jsx)("span",{className:"text-white",children:"Mis Notes"})})}),Object(F.jsx)(f.a,{children:Object(F.jsx)(m.GoogleLogout,{clientId:p.clientID,buttonText:"Sign Out",theme:"dark",onLogoutSuccess:e.onLogout})})]})})]})}var U=c(6),G=c.n(U),K=c(110),R=c(105),q=c(106),W=c(107),z=c(108),H=c(109),Y=c(25),Q=c(101),V=c(102),X=c(103),Z=c(104);function $(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1],i=function(t){"OK"===t&&e.updateMyNotes()};return Object(F.jsx)("div",{children:Object(F.jsxs)(N.a,{body:!0,children:[Object(F.jsx)(y.a,{tag:"h5",children:"A\xf1adir un nuevo Note"}),Object(F.jsxs)(Q.a,{children:[Object(F.jsxs)(V.a,{children:[Object(F.jsx)(X.a,{for:"aMensaje",children:"Mensaje"}),Object(F.jsx)(Z.a,{style:{height:"200px"},type:"textarea",name:"message",value:s,id:"aMensaje",placeholder:"Introduce un mensaje",onChange:function(e){return a(e.target.value)}})]}),Object(F.jsx)(C.a,{color:"info",onClick:function(e){e.preventDefault(),function(e,t,c,n){return w.post("/notes",{email:e,user:t,image:c,message:n}).then((function(e){return e.data}))}(sessionStorage.getItem("email"),sessionStorage.getItem("name"),sessionStorage.getItem("image"),s).then((function(e){return i(e)}))},children:"A\xf1adir"})]})]})})}function ee(e){var t=Object(n.useState)(e.note.message),c=Object(l.a)(t,2),s=c[0],a=c[1],i=function(t){"OK"===t&&e.updateMyNotes()};return Object(n.useEffect)((function(){a(e.note.message)}),[e.note]),Object(F.jsx)("div",{children:Object(F.jsxs)(N.a,{body:!0,children:[Object(F.jsx)(y.a,{tag:"h5",children:"Editar note"}),Object(F.jsxs)(Q.a,{children:[Object(F.jsxs)(V.a,{children:[Object(F.jsx)(X.a,{for:"aDescripcion",children:"Mensaje"}),Object(F.jsx)(Z.a,{style:{height:"200px"},type:"textarea",name:"message",id:"aDescripcion",placeholder:"Introduce un mensaje",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(F.jsx)(C.a,{color:"info",onClick:function(t){t.preventDefault(),function(e,t){return w.put("/notes/"+e,{message:t}).then((function(e){return e.data}))}(e.note._id,s).then((function(e){return i(e)}))},children:"Actualizar"})]})]})})}function te(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(Object(F.jsx)(o.a,{color:"danger",children:"Seleccione editar un Note de la lista"})),j=Object(l.a)(i,2),r=j[0],b=j[1],O=Object(n.useState)("1"),u=Object(l.a)(O,2),x=u[0],m=u[1],p=Object(n.useState)(null),v=Object(l.a)(p,2),D=v[0],M=v[1],L=function(){var e;(e=sessionStorage.getItem("email"),w.get("/notes/all/"+e).then((function(e){return e.data}))).then((function(e){a(e)}))},E=function(e){x!==e&&m(e)},T=function(){L()},B=function(e){var t;(t=e._id,w.delete("/notes/"+t).then((function(e){return e.data}))).then((function(e){return _(e)}))},_=function(e){"OK"===e&&(M(null),b(Object(F.jsx)(o.a,{color:"warning",children:"Seleccione editar un note de la lista"})),T())};return Object(n.useEffect)((function(){L()}),[]),Object(F.jsxs)("div",{children:[D,Object(F.jsxs)(d.a,{children:[Object(F.jsxs)(h.a,{xs:"7",children:[Object(F.jsx)(y.a,{tag:"center",children:Object(F.jsxs)(o.a,{color:"info",children:[Object(F.jsx)("strong",{children:"Mis Notes "}),Object(F.jsx)(S.a,{pill:!0,children:s.length})]})}),Object(F.jsx)(I.a,{children:Object(F.jsx)("tbody",{children:s.map((function(t,c){return Object(F.jsx)("div",{children:Object(F.jsxs)("div",{children:[Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{children:Object(F.jsx)(N.a,{children:Object(F.jsxs)(k.a,{children:[Object(F.jsxs)(d.a,{children:[Object(F.jsx)(h.a,{children:Object(F.jsxs)("strong",{children:[Object(F.jsx)("img",{src:t.image,alt:"Img"})," ",t.user]})}),Object(F.jsxs)(h.a,{align:"right",children:[Object(F.jsx)(C.a,{outline:!0,onClick:function(){return function(e){b(Object(F.jsx)(ee,{note:e,updateMyNotes:T}))}(t)},children:Object(F.jsx)(Y.a,{})})," ",Object(F.jsx)(C.a,{outline:!0,onClick:function(){return function(t){M(Object(F.jsxs)(K.a,{isOpen:"true",className:e.className,children:[Object(F.jsx)(R.a,{children:"Eliminar note"}),Object(F.jsxs)(q.a,{children:["Se va a eliminar el note:",Object(F.jsx)("br",{}),Object(F.jsx)("small",{children:Object(F.jsx)("strong",{children:t.message})})]}),Object(F.jsxs)(W.a,{children:[Object(F.jsx)(C.a,{color:"primary",onClick:function(){return B(t)},children:"Eliminar"})," ",Object(F.jsx)(C.a,{color:"secondary",onClick:function(){return M(null)},children:"Cancelar"})]})]}))}(t)},children:Object(F.jsx)(Y.b,{})})]})]}),Object(F.jsx)("br",{}),Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{children:t.message})}),Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{align:"right",children:Object(F.jsx)("small",{children:A(new Date(t.publicationdate))})})})]})})})}),Object(F.jsx)("br",{})]})})}))})})]}),Object(F.jsxs)(h.a,{xs:"5",children:[Object(F.jsxs)(g.a,{tabs:!0,children:[Object(F.jsx)(f.a,{children:Object(F.jsx)(J.a,{href:"#",className:G()({active:"1"===x}),onClick:function(){return E("1")},children:"A\xf1adir"})}),Object(F.jsx)(f.a,{children:Object(F.jsx)(J.a,{href:"#",className:G()({active:"2"===x}),onClick:function(){return E("2")},children:"Editar"})})]}),Object(F.jsxs)(z.a,{activeTab:x,children:[Object(F.jsx)(H.a,{tabId:"1",children:Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{sm:"12",children:Object(F.jsx)($,{updateMyNotes:T})})})}),Object(F.jsx)(H.a,{tabId:"2",children:Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{sm:"12",children:r})})})]})]})]})]})}a.a.render(Object(F.jsx)(i.a,{children:Object(F.jsxs)("div",{children:[Object(F.jsx)(j.a,{exact:!0,path:"/",component:function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),s=c[0],a=c[1];return Object(F.jsxs)(b.a,{children:[Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{children:Object(F.jsxs)(O.a,{color:"dark",light:!0,expand:"md",children:[Object(F.jsx)(u.a,{style:B,object:!0,src:v,alt:"Bird"}),Object(F.jsx)(x.a,{children:Object(F.jsx)("h4",{className:"text-white",children:"Day By Day"})}),Object(F.jsx)(g.a,{className:"ml-auto",navbar:!0,children:Object(F.jsxs)(f.a,{children:[s,Object(F.jsx)(m.GoogleLogin,{clientId:p.clientID,buttonText:"Sign in with Google",theme:"dark",onSuccess:function(t){var c=t.getBasicProfile();sessionStorage.setItem("name",c.getName()),sessionStorage.setItem("email",c.getEmail()),sessionStorage.setItem("image",c.getImageUrl()),e.history.push("/home")},onFailure:function(e){a(Object(F.jsx)(o.a,{color:"danger",children:"Inicio de sesi\xf3n incorrecto. Int\xe9ntelo de nuevo"}))}})]})})]})})}),Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{xs:"12",children:Object(F.jsx)(T,{})})})]})}}),Object(F.jsx)(j.a,{path:"/home",component:function(e){var t=Object(n.useState)(Object(F.jsx)(T,{})),c=Object(l.a)(t,2),s=c[0],a=c[1];if(null!==sessionStorage.getItem("name"))return Object(F.jsxs)(b.a,{children:[Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{children:Object(F.jsx)(P,{onLogout:function(){sessionStorage.clear(),e.history.push("/")},onShow:function(e){1===e?a(Object(F.jsx)(T,{})):2===e&&a(Object(F.jsx)(te,{}))}})})}),Object(F.jsx)(d.a,{children:Object(F.jsx)(h.a,{xs:"12",children:s})})]});e.history.push("/")}})]})}),document.getElementById("root")),r()}},[[81,1,2]]]);
//# sourceMappingURL=main.31eb2b64.chunk.js.map