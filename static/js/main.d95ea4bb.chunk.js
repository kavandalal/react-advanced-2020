(this.webpackJsonptutorial=this.webpackJsonptutorial||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(4),r=n.n(c),u=(n(10),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Random Text"),l.a.createElement("button",{type:"button",className:"btn",onClick:function(){console.log("Random Text")}},"change Title"))}),o=n(1),m=function(){var e=Object(a.useState)("old title"),t=Object(o.a)(e,2),n=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,n),l.a.createElement("button",{type:"button",className:"btn",onClick:function(){c("old title"===n?"new title":"old title")}},"Change Title"))},i=[{id:1,name:"john"},{id:2,name:"peter"},{id:3,name:"susan"},{id:4,name:"anna"}],s=function(){var e=l.a.useState(i),t=Object(o.a)(e,2),n=t[0],a=t[1];return l.a.createElement(l.a.Fragment,null,n.map((function(e){var t=e.id,n=e.name;return l.a.createElement("div",{key:t,className:"item"},l.a.createElement("h3",null,t," ",n),l.a.createElement("button",{type:"button",onClick:function(){return function(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}(t)}},"Remove"))})),l.a.createElement("button",{className:"btn",onClick:function(){return a([])}},"Remove All"),l.a.createElement("button",{className:"btn",onClick:function(){window.location.reload()}},"Refresh"))},E=n(2),b=function(){var e=Object(a.useState)({name:"kavan",age:20,msg:"Hey"}),t=Object(o.a)(e,2),n=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",null,n.name),l.a.createElement("h2",null,n.age),l.a.createElement("h2",null,n.msg),l.a.createElement("button",{className:"btn",onClick:function(){"Hey"===n.msg?c(Object(E.a)(Object(E.a)({},n),{},{msg:"Hello"})):c(Object(E.a)(Object(E.a)({},n),{},{msg:"Hey"}))}},"Change Message")))},f=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Regular Counter"),l.a.createElement("h2",null,n),l.a.createElement("button",{className:"btn",onClick:function(){c(n-1)}},"Decrease"),l.a.createElement("button",{className:"btn",onClick:function(){c(0)}},"Reset"),l.a.createElement("button",{className:"btn",onClick:function(){c(n+1)}},"Increase"),l.a.createElement("h2",null,"Delay Counter"),l.a.createElement("h2",null,n),l.a.createElement("button",{className:"btn",onClick:function(){setTimeout((function(){c((function(e){return e+1}))}),2e3)}},"Delay Increase"))};var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(m,null),l.a.createElement(s,null),l.a.createElement(b,null),l.a.createElement(f,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.d95ea4bb.chunk.js.map