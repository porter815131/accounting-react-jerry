(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(5)),s=n(2),i=(n(15),n(0));var r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},u=n(1),j=(n(17),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"\u7c42\u9078 (\u5e74\u4efd)"}),Object(i.jsxs)("select",{value:e.selected,onChange:function(t){e.onFilterYear(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(18),n(19),n(20);var o=function(e){var t=e.date.toLocaleString("ch-TW",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:t}),Object(i.jsx)("div",{className:"expense-date__day",children:n}),Object(i.jsx)("div",{className:"expense-date__year",children:a})]})};var d=function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)(o,{date:e.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},b=function(e){return 0===e.item.length?Object(i.jsx)("p",{className:"expenses-list__fallback",children:"NO Expenses Found!"}):Object(i.jsx)("ul",{className:"expenses-list",children:e.item.map((function(e){return Object(i.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(9),v=(n(21),n(22),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})},h=function(e){var t,n=[{label:"1\u6708",value:0},{label:"2\u6708",value:0},{label:"3\u6708",value:0},{label:"4\u6708",value:0},{label:"5\u6708",value:0},{label:"6\u6708",value:0},{label:"7\u6708",value:0},{label:"8\u6708",value:0},{label:"9\u6708",value:0},{label:"10\u6708",value:0},{label:"11\u6708",value:0},{label:"12\u6708",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(i.jsx)(O,{dataPoints:n})};n(23);var m=function(e){var t=Object(u.useState)("2021"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.expense.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsx)("div",{children:Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(j,{selected:a,onFilterYear:function(e){c(e)}}),Object(i.jsx)(h,{expenses:l}),Object(i.jsx)(b,{item:l})]})})},p=n(7),f=(n(24),n(25),function(e){var t=Object(u.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(u.useState)(""),r=Object(s.a)(l,2),j=r[0],o=r[1],d=Object(u.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),c(""),o(""),v("")},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"",children:"\u9805\u76ee"}),Object(i.jsx)("input",{type:"text",placeholder:"\u6d88\u8cbb\u9805\u76ee",value:a,onChange:function(e){c(e.target.value)},required:!0})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"",children:"\u91d1\u984d"}),Object(i.jsx)("input",{type:"number",placeholder:"\u6d88\u8cbb\u91d1\u984d",min:"1",step:"1",value:j,onChange:function(e){o(e.target.value)},required:!0})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"",children:"\u65e5\u671f"}),Object(i.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)},required:!0})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"button",onClick:e.onCancel,children:"\u53d6\u6d88"}),Object(i.jsx)("button",{type:"submit",children:"\u65b0\u589e"})]})]})}),_=function(e){var t=Object(u.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense",children:[!a&&Object(i.jsx)("button",{type:"button",onClick:function(){c(!0)},children:"\u65b0\u589e\u6d88\u8cbb\u660e\u7d30"}),a&&Object(i.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})},N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var g=function(){var e=Object(u.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))})),console.log(n)}}),Object(i.jsx)(m,{expense:n})]})};c.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.2718e5ff.chunk.js.map