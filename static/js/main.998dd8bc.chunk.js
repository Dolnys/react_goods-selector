(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(4),o=c(1),i=(c(9),c(10),c(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],r=function(){var e=Object(o.useState)("Jam"),t=Object(a.a)(e,2),c=t[0],n=t[1],s=function(e){n(e===c?"":e)};return Object(i.jsxs)("main",{className:"section container",children:[c?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c," is selected",Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){n("")},children:"Clear"})]})}):Object(i.jsx)("h1",{className:"title",children:"No goods selected"}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:l.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"Good",className:e===c?"has-background-success-light":"",children:[Object(i.jsx)("td",{children:e===c?Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return s(e)},children:"-"}):Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return s(e)},children:"+"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]})}))})})]})};s.a.render(Object(i.jsx)(r,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.998dd8bc.chunk.js.map