(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),d=c(1),i=(c(10),c(11),c(4)),o=c.n(i),r=c(0),j=function(e){var t=e.todos,c=e.setIsOpedModal,s=e.setSelectedTodo,a=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":(null===a||void 0===a?void 0:a.id)===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{onClick:function(){return a=e.id,c(!0),void s(t.find((function(e){return e.id===a}))||null);var a},"data-cy":"selectButton",className:"button",type:"button",children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":(null===a||void 0===a?void 0:a.id)!==e.id,"fa-eye-slash":(null===a||void 0===a?void 0:a.id)===e.id})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.filter,c=e.onFilterChange,a=e.inputValue,n=e.onInputChange,l=e.clearInput;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:c,children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{value:a,onChange:n,"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(r.jsx)("button",{"aria-label":"button delete",onClick:l,"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},b=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.setIsOpedModal,c=e.selectedTodo,s=e.setSelectedTodo,a=Object(d.useState)(null),n=Object(l.a)(a,2),i=n[0],o=n[1];return Object(d.useEffect)((function(){var e;(e=(null===c||void 0===c?void 0:c.userId)||0,h("/users/".concat(e))).then(o)}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),i?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===c||void 0===c?void 0:c.id)}),Object(r.jsx)("button",{"aria-label":"button delete",onClick:function(){t(!1),s(null)},type:"button",className:"delete","data-cy":"modal-close"})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==c&&void 0!==c&&c.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(r.jsx)(b,{})]})};var O=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(s.All),i=Object(l.a)(n,2),o=i[0],O=i[1],x=Object(d.useState)(""),v=Object(l.a)(x,2),f=v[0],p=v[1],N=Object(d.useState)(!1),y=Object(l.a)(N,2),g=y[0],C=y[1],k=Object(d.useState)(null),S=Object(l.a)(k,2),T=S[0],I=S[1];Object(d.useEffect)((function(){h("/todos").then(a)}),[]);var w=function(e,t){return""===e?t:t.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase().trim())}))}(f,Object(d.useMemo)((function(){return function(e,t){switch(e){case s.Active:return t.filter((function(e){return!e.completed}));case s.Completed:return t.filter((function(e){return e.completed}));default:return t}}(o,c)}),[o,c]));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{onFilterChange:function(e){O(e.target.value)},filter:o,inputValue:f,onInputChange:function(e){p(e.target.value)},clearInput:function(){p("")}})}),Object(r.jsx)("div",{className:"block",children:c.length?Object(r.jsx)(j,{todos:w,setIsOpedModal:C,isOpedModal:g,setSelectedTodo:I,selectedTodo:T}):Object(r.jsx)(b,{})})]})})}),g&&Object(r.jsx)(m,{setIsOpedModal:C,selectedTodo:T,setSelectedTodo:I})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a3a3d2ce.chunk.js.map