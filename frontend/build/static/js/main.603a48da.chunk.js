(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(18),s=n.n(o),i=n(9),l=n(2),u=(n(25),n(1)),p=function(){return Object(u.jsx)("div",{className:"app-header",children:Object(u.jsx)("h1",{children:"Note List"})})},d=n(4),h=n.n(d),f=n(8),j=n(12),b=function(e){return new Date(e.updated).toLocaleDateString()},v=function(e){var t=e.body.split("\n")[0];return t.length>45?t.slice(0,45):t},O=function(e){var t=v(e),n=e.body.replaceAll("\n"," ");return(n=n.replaceAll(t,"")).length>45?n.slice(0,45)+"...":n},x=function(e){var t=e.note;return Object(u.jsx)(i.b,{to:"/note/".concat(t.id),children:Object(u.jsxs)("div",{className:"notes-list-item",children:[Object(u.jsx)("h3",{children:v(t)}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:b(t)}),O(t)]})]})})},m=["title","titleId"];function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e,t){var n=e.title,c=e.titleId,o=y(e,m);return a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},o),void 0===n?a.createElement("title",{id:c},"add"):n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var k,E=a.forwardRef(g),N=(n.p,function(){return Object(u.jsx)(i.b,{to:"/note/new",className:"floating-button",children:Object(u.jsx)(E,{})})}),S=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){c()}),[]);var c=function(){var e=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"notes",children:[Object(u.jsxs)("div",{className:"notes-header",children:[Object(u.jsx)("h2",{className:"notes-title",children:"\u2636 Notes"}),Object(u.jsx)("p",{className:"notes-count",children:n.length})]}),Object(u.jsx)("div",{className:"notes-list",children:n.map((function(e,t){return Object(u.jsx)(x,{note:e},t)}))}),Object(u.jsx)(N,{})]})},T=n(16),C=["title","titleId"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function D(e,t){var n=e.title,r=e.titleId,c=P(e,C);return a.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"chevron-left"):n?a.createElement("title",{id:r},n):null,k||(k=a.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"})))}var J=a.forwardRef(D),B=(n.p,function(e){var t=e.match,n=e.history,r=t.params.id;console.log("Note ID:",r);var c=Object(a.useState)(null),o=Object(j.a)(c,2),s=o[0],i=o[1];Object(a.useEffect)(Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:case"end":return e.stop()}}),e)}))),[r]);var l=function(){var e=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/notes/".concat(r,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,i(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(f.a)(h.a.mark((function e(){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/notes/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.json();case 7:r=e.sent,i(r),n.push("/"),e.next=13;break;case 12:console.error("Failed to create note:",t.status,t.statusText);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error creating note:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/notes/".concat(r,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.json();case 7:a=e.sent,i(a),n.push("/"),e.next=13;break;case 12:console.error("Failed to update note:",t.status,t.statusText);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error updating note:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/notes/".concat(r,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:(t=e.sent).ok?(i(null),n.push("/")):console.error("Failed to delete note:",t.status,t.statusText),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error deleting note:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){console.log("NOTE:",s),"new"===r&&null==s?n.push("/"):"new"!==r&&""===s.body?b():"new"!==r?d():"new"===r&&null!==s.body?p():n.push("/")};return Object(u.jsxs)("div",{className:"note",children:[Object(u.jsxs)("div",{className:"note-header",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(J,{onClick:v})}),"new"!==r?Object(u.jsx)("button",{onClick:b,children:"Delete"}):Object(u.jsx)("button",{onClick:v,children:"Done"})]}),Object(u.jsx)("textarea",{onChange:function(e){var t;t=e.target.value,i((function(e){return Object(T.a)(Object(T.a)({},e),{},{body:t})})),console.log("Handle Change:",s)},value:null===s||void 0===s?void 0:s.body})]})});var F=function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)("div",{className:"container dark",children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(p,{}),Object(u.jsx)(l.a,{path:"/",exact:!0,component:S}),Object(u.jsx)(l.a,{path:"/note/:id",component:B})]})})})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.603a48da.chunk.js.map