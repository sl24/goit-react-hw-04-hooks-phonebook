(this["webpackJsonpnew-react-template"]=this["webpackJsonpnew-react-template"]||[]).push([[0],{23:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),o=t.n(a),i=t(13),c=t.n(i),u=(t(23),t(11)),d=t(4),s=t(14),l=t.n(s),b=t(2),p=t(3);function f(){var n=Object(b.a)(["\n  outline: none;\n  padding: 12px 20px;\n  margin: 10px 5px;\n  border-radius: 30px;\n  background-image: linear-gradient(\n    45deg,\n    #6ab1d7 0%,\n    #33d9de 50%,\n    #002878 100%\n  );\n  background-position: 100% 0;\n  background-size: 200% 200%;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 24px;\n  color: white;\n  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);\n  transition: 0.5s;\n\n  &:hover {\n    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);\n    background-position: 0 0;\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(b.a)(["\n  display: block;\n  margin: 10px auto;\n  padding: 12px 20px;\n  font-size: 18px;\n  border-radius: 30px;\n\n  &::placeholder {\n    padding-left: 10px;\n    font-size: 18px;\n  }\n"]);return x=function(){return n},n}function j(){var n=Object(b.a)(["\n  display: block;\n  margin-bottom: 10px;\n"]);return j=function(){return n},n}var g=p.a.form(j()),h=p.a.input(x()),v=p.a.button(f());function m(n){var e=n.handleAddContact,t=n.handleCheckUnique,o=Object(a.useState)(""),i=Object(d.a)(o,2),c=i[0],u=i[1],s=Object(a.useState)(""),b=Object(d.a)(s,2),p=b[0],f=b[1],x=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":u(r);break;case"phone":f(r)}},j=function(){u(""),f("")};return Object(r.jsxs)(g,{onSubmit:function(n){if(n.preventDefault(),t(c))alert("".concat(c," is already in contacts list"));else{var r={id:l.a.generate(),name:c,phone:p};e(r)}j()},children:[Object(r.jsx)(h,{type:"text",name:"name",placeholder:"Enter name",value:c,onChange:x,required:!0}),Object(r.jsx)(h,{type:"tel",name:"phone",placeholder:"Enter phone number",value:p,onChange:x,required:!0}),Object(r.jsx)(v,{type:"submit",children:"Add contact"})]})}function O(){var n=Object(b.a)(["\n  margin-left: auto;\n  outline: none;\n  padding: 2px 5px;\n  border-radius: 10px;\n  background-image: linear-gradient(\n    45deg,\n    #6ab1d7 0%,\n    #33d9de 50%,\n    #002878 100%\n  );\n  background-position: 100% 0;\n  background-size: 200% 200%;\n  font-size: 16px;\n  color: white;\n  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);\n  transition: 0.5s;\n\n  &:hover {\n    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);\n    background-position: 0 0;\n  }\n"]);return O=function(){return n},n}function w(){var n=Object(b.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n"]);return w=function(){return n},n}function C(){var n=Object(b.a)(["\n  list-style: none;\n  padding: 0;\n"]);return C=function(){return n},n}var k=p.a.ul(C()),y=p.a.li(w()),S=p.a.button(O()),z=function(n){var e=n.name,t=n.phone,a=n.onRemove;return Object(r.jsxs)(y,{children:[e,": ",t," ",Object(r.jsx)(S,{onClick:a,children:"Delete"})]})},E=function(n){var e=n.contacts,t=n.onRemove;return 0===e.length?null:Object(r.jsx)(k,{children:e.map((function(n){var e=n.id,a=n.name,o=n.phone;return Object(r.jsx)(z,{name:a,phone:o,onRemove:function(){return t(e)}},e)}))})};function L(){var n=Object(b.a)(["\n  display: block;\n  margin: 10px auto;\n  padding: 5px;\n  font-size: 18px;\n  border-radius: 15px;\n  outline: none;\n\n  &::placeholder {\n    padding-left: 10px;\n    font-size: 16px;\n  }\n"]);return L=function(){return n},n}var q=p.a.input(L()),J=function(n){var e=n.filter,t=n.onChange;return Object(r.jsx)(q,{type:"text",name:"filter",placeholder:"Enter name for search",value:e,onChange:t})},R=function(n,e){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem(n)))&&void 0!==t?t:e})),r=Object(d.a)(t,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){window.localStorage.setItem(n,JSON.stringify(o))}),[n,o]),[o,i]};function A(){var n=Object(b.a)(["\n  color: var(--titleColor);\n  font-size: 24px;\n"]);return A=function(){return n},n}function I(){var n=Object(b.a)(["\n  font-size: 48px;\n  color: var(--titleColor);\n  text-align: center;\n"]);return I=function(){return n},n}function D(){var n=Object(b.a)(["\n  background-color: var(--bgColorContainer);\n  width: 400px;\n  margin: 30px auto;\n  padding: 15px;\n  text-align: center;\n  border-radius: 30px;\n\n  box-shadow: var(--boxShadow);\n  transition: box-shadow 500ms var(--timingFunction);\n"]);return D=function(){return n},n}var F=p.a.div(D()),M=p.a.h1(I()),N=p.a.h2(A());function U(){var n=R("userContacts",[]),e=Object(d.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(""),c=Object(d.a)(i,2),s=c[0],l=c[1],b=t.filter((function(n){return n.name.toLowerCase().includes(s.toLowerCase())}));return Object(r.jsxs)(F,{children:[Object(r.jsx)(M,{children:"Phonebook"}),Object(r.jsx)(N,{children:"Form Contact"}),Object(r.jsx)(m,{handleAddContact:function(n){o((function(e){return[].concat(Object(u.a)(e),[n])}))},handleCheckUnique:function(n){var e=n.toLowerCase();return t.find((function(n){return n.name.toLowerCase()===e}))}}),Object(r.jsx)(N,{children:"Contacts List"}),Object(r.jsx)(J,{filter:s,onChange:function(n){var e=n.target.value;l(e)}}),Object(r.jsx)(E,{contacts:b,onRemove:function(n){o((function(e){return Object(u.a)(e.filter((function(e){return e.id!==n})))}))}})]})}t(34);c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(U,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f1f7b2e6.chunk.js.map