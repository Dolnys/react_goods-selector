(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),a=c(4),o=c(1),i=(c(9),c(10),c(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],r=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],n=e[1],s=function(t){n(t===c?"":t)};return Object(i.jsxs)("main",{className:"section container",children:[c?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c," is selected",Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){n("")}})]})}):Object(i.jsx)("h1",{className:"title",children:"No goods selected"}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:l.map((function(t){return Object(i.jsxs)("tr",{"data-cy":"Good",className:t===c?"has-background-success-light":"",children:[Object(i.jsx)("td",{children:t===c?Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return s(t)},children:"-"}):Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return s(t)},children:"+"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]})}))})})]})};s.a.render(Object(i.jsx)(r,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.39910ff7.chunk.js.map