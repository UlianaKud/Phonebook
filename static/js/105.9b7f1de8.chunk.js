"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[105],{9105:function(t,n,e){e.r(n),e.d(n,{default:function(){return V}});var a=e(2791),r=e(107),c=e(9434),o=e(6916),s=function(t){return t.contacts.items},i=function(t){return t.contacts.isLoading},u=function(t){return t.contacts.error},l=(0,o.P1)([s,function(t){return t.filter}],(function(t,n){var e=null===n||void 0===n?void 0:n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),m=e(1686),d=e.n(m),p={form:"form_form__sP2jI",button:"form_button__uA2lI",label:"form_label__l9+qL",input:"form_input__Hf2Sl"},h=e(9504),f=e.n(h),_=e(4801),v=e(6151),x=e(184),j=function(){var t=(0,c.I0)(),n=(0,c.v9)(s),e=(0,a.useRef)(null);(0,a.useEffect)((function(){e.current.getSelection()}),[]);return(0,x.jsxs)("form",{onSubmit:function(a){a.preventDefault(),a.stopPropagation();var c=a.target,o=c.elements.name.value.toLowerCase();n.find((function(t){return t.name.toLowerCase()===o}))?d().Notify.warning("".concat(o," is already in contacts")):(t((0,r.G3)({name:c.elements.name.value,number:c.elements.number.value})),e.current.setInputValue(""),c.reset())},className:p.form,children:[(0,x.jsxs)("div",{className:p.inputWrapper,children:[(0,x.jsx)(_.Z,{id:"outlined-basic",label:"Name",variant:"outlined",required:!0,inputProps:{className:p.input,name:"name",pattern:"[A-Za-z]{1,32}",title:"Username must be one word"}}),(0,x.jsx)("span",{})]}),(0,x.jsxs)("div",{className:p.inputWrapper,children:[(0,x.jsx)(f(),{mask:"+3\\8(999)9999999",maskChar:" ",ref:e,children:function(){return(0,x.jsx)(_.Z,{id:"outlined-basic",label:"Number",variant:"outlined",required:!0,inputProps:{className:p.input,name:"number",type:"tel",pattern:"[+]d{2}[(]d{3}[)]d{7}",title:"Phone number must have format +38(050)1234567 and can start with +"}})}}),(0,x.jsx)("span",{})]}),(0,x.jsx)(v.Z,{variant:"outlined",type:"submit",className:p.button,children:"Add Contact"})]})},b={contactList:"contact_contactList__dhn8a",contactItem:"contact_contactItem__SCFX9",contactWrapper:"contact_contactWrapper__pklxl",contactData:"contact_contactData__CaiV-",button:"contact_button__-9f5R",contactAvatar:"contact_contactAvatar__Mr--B"},N=e(7634),k=e(493),g=e(4852),w=e(3044),C=function(){var t=(0,c.v9)((function(t){return{token:t.auth.token}})).token,n=(0,c.v9)(l),e=(0,c.v9)(i),o=(0,c.v9)(u),s=(0,c.I0)();(0,a.useEffect)((function(){(0,N.o4)(t),s((0,r.VC)())}),[s,t]);return(0,x.jsxs)(x.Fragment,{children:[e&&(0,x.jsx)("div",{children:"Loading..."}),o&&(0,x.jsx)("div",{children:o}),(0,x.jsx)(k.Z,{className:b.contactList,children:n.map((function(t,n){var e=t.id,a=t.name,c=t.number;return(0,x.jsxs)(g.ZP,{className:b.contactItem,children:[(0,x.jsxs)("div",{className:b.contactWrapper,children:[(0,x.jsx)(w.Z,{className:b.contactAvatar,alt:a,src:"/static/images/avatar/".concat(n+1,".jpg")}),(0,x.jsxs)("div",{className:b.contactData,children:[(0,x.jsxs)("span",{className:b.contactName,children:[a,":"]}),(0,x.jsx)("span",{className:b.number,children:c})]})]}),(0,x.jsx)(v.Z,{variant:"outlined",type:"button",className:b.button,onClick:function(){return t=e,void s((0,r.ku)(t));var t},children:"Delete"})]},"".concat(c,"-").concat(a))}))})]})},Z=e(6895),L="filter_input__2kUfd",I=function(){var t=(0,c.I0)();return(0,x.jsx)(_.Z,{id:"outlined-basic",label:"Find contact by name",variant:"outlined",className:L,type:"text",name:"filter",onChange:function(n){var e=n.target.value;t((0,Z.i)(e))}})},A=e(7689),P="userMenu_wrapper__JUNK0",y="userMenu_toolbar__bhuk5",S=e(4554),D=e(4395),W=e(4663),q=e(890),F=function(){var t=(0,c.I0)(),n=(0,c.v9)((function(t){return{isAuth:t.auth.token,user:t.auth.user}})),e=n.isAuth,a=n.user.email;return e?(0,x.jsx)(S.Z,{sx:{flexGrow:1},className:P,children:(0,x.jsx)(D.Z,{position:"static",children:(0,x.jsxs)(W.Z,{className:y,children:[a?(0,x.jsx)(q.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Hi, ".concat(a,"!")}):"Hi!",(0,x.jsx)(v.Z,{color:"inherit",onClick:function(){t((0,r.qN)())},children:"Log out"})]})})}):(0,x.jsx)(A.Fg,{to:"/login"})},M={wrapper:"home_wrapper__6SKAg",phonebook:"home_phonebook__v2vMo",contacts:"home_contacts__dSogV"},V=function(){return(0,x.jsxs)("div",{className:M.wrapper,children:[(0,x.jsx)(F,{}),(0,x.jsxs)("div",{className:M.phonebook,children:[(0,x.jsx)(q.Z,{className:M.headerPhonebook,align:"center",component:"div",variant:"h1",children:"Phonebook"}),(0,x.jsx)(j,{}),(0,x.jsxs)("div",{className:M.contacts,children:[(0,x.jsx)(q.Z,{className:M.headerContacts,align:"center",component:"div",variant:"h2",children:"Contacts"}),(0,x.jsx)(I,{}),(0,x.jsx)(C,{})]})]})]})}}}]);
//# sourceMappingURL=105.9b7f1de8.chunk.js.map