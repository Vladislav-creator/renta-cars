"use strict";(self.webpackChunkrenta_cars=self.webpackChunkrenta_cars||[]).push([[838],{6017:function(e,r,n){n.r(r),n.d(r,{default:function(){return T}});var t=n(5861),a=n(9439),s=n(4687),c=n.n(s),o=n(2791),i=n.p+"static/media/new_message_tone-1.f25d7cea15d14b10347c.mp3",u=n(8953),l="Home_wraperOverlay__c5snf",p="Home_container__j1Eze",d="Home_indentedParagraph__cO6Ur",m="Home_titleFindCarForma__wQgXx",_="Home_heroContentForma__X+W7h",f="Home_forma__zWtMp",h="Home_buttonSend__EiyyY",v="Home_formInput__yI+rS",x="Home_putMe__CR8tc",S="Home_signal__HTOgf",j="Home_steeringWheel__KTJkL",H="HeroSection_heroSection__HGwVp",b="HeroSection_heroOverlay__dPrKG",w="HeroSection_heroTitle__5a86H",g="HeroSection_rentaYellow__DlUZw",N=n(9230),k=n(184),y=function(){var e=(0,N.$G)().t;return(0,k.jsx)("div",{className:H,children:(0,k.jsx)("div",{className:b,children:(0,k.jsxs)("h1",{className:w,children:[e("Welcome"),(0,k.jsx)("span",{className:g,children:e("RENTA")}),e("CARS")]})})})},E={NODE_ENV:"production",PUBLIC_URL:"/renta-cars",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_PASSWORD,T=function(){var e=(0,o.useState)(new Audio(i)),r=(0,a.Z)(e,1)[0],n=(0,o.useState)(""),s=(0,a.Z)(n,2),H=s[0],b=s[1],w=(0,N.$G)().t;(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=sessionStorage.getItem("carBrands")){e.next=8;break}return e.next=5,(0,u.Pt)();case 5:n=e.sent,r=Array.from(new Set(n.map((function(e){return e.make})))).join(", "),sessionStorage.setItem("carBrands",r);case 8:b(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching car brands:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=(0,o.useState)(""),T=(0,a.Z)(g,2),C=T[0],O=T[1],P=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),O("Sending...."),(n=new FormData(r.target)).append("access_key",E),e.prev=4,e.next=7,fetch("https://api.web3forms.com/submit",{method:"POST",body:n});case 7:return t=e.sent,e.next=10,t.json();case 10:(a=e.sent).success?(O("Form submitted successfully"),r.target.reset()):(console.error("Error:",a),O(a.message)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.error("Error sending form data:",e.t0),O("Error sending form data");case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(r){return e.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:l,children:[(0,k.jsx)(y,{}),(0,k.jsxs)("div",{className:p,children:[(0,k.jsxs)("p",{className:d,children:[w("Dear"),H&&" ".concat(H)," ",w("for")]}),(0,k.jsxs)("div",{className:_,children:[(0,k.jsx)("h3",{className:m,children:w("Find")}),(0,k.jsxs)("form",{onSubmit:P,className:f,children:[(0,k.jsx)("input",{type:"text",name:"name",placeholder:"Input name",className:v}),(0,k.jsx)("input",{type:"text",name:"phone",placeholder:"Input phone",className:v,defaultValue:"+380"}),(0,k.jsx)("button",{type:"submit",className:h,children:"Send"})]}),(0,k.jsxs)("div",{className:j,children:[(0,k.jsx)("button",{className:S,onClick:function(){r.play()}}),(0,k.jsxs)("div",{className:x,children:[(0,k.jsx)("p",{children:w("p")}),(0,k.jsx)("p",{children:w("u")}),(0,k.jsx)("p",{children:w("t")}),(0,k.jsx)("p",{children:w("m")}),(0,k.jsx)("p",{children:w("e")})]})]})]}),(0,k.jsx)("div",{children:C})]})]})}},8953:function(e,r,n){n.d(r,{Pt:function(){return i},WH:function(){return o}});var t=n(5861),a=n(4687),s=n.n(a),c=n(5294),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/auto-rent?page=".concat(r,"&limit=12"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/auto-rent");case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=838.a9ca858d.chunk.js.map