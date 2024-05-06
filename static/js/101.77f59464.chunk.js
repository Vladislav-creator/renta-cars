"use strict";(self.webpackChunkrenta_cars=self.webpackChunkrenta_cars||[]).push([[101],{6101:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(3433),r=n(5861),s=n(9439),o=n(4687),i=n.n(o),c=n(2791),l="CatalogCar_container__GX3K0",u="CatalogCar_imageGrid__w-hLd",d="CatalogCar_buttonLoadMore__a8eC9",m="Filter_formSelect__1Ht8B",f="Filter_formSearch__jStQu",p=n(9230),h=n(184),v=function(e){var t=e.onFilter,n=e.onReset,a=e.carMakes,r=e.rentalPrices,o=(0,p.$G)().t,i=(0,c.useState)(""),l=(0,s.Z)(i,2),u=l[0],d=l[1],v=(0,c.useState)(""),_=(0,s.Z)(v,2),C=_[0],x=_[1],j=(0,c.useState)(""),g=(0,s.Z)(j,2),w=g[0],N=g[1],k=(0,c.useState)(""),S=(0,s.Z)(k,2),b=S[0],I=S[1],y=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"make":d(a);break;case"price":x(a);break;case"mileageFrom":N(a);break;case"mileageTo":I(a)}};return(0,h.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),(u||C||w||b)&&t({make:u,price:C,mileageFrom:w,mileageTo:b})},children:[(0,h.jsxs)("select",{className:m,name:"make",value:u,onChange:y,children:[(0,h.jsx)("option",{value:"",children:o("Brand")}),a.map((function(e){return(0,h.jsx)("option",{value:e,children:e},e)}))]}),(0,h.jsxs)("select",{className:m,name:"price",value:C,onChange:y,children:[(0,h.jsx)("option",{value:"",children:o("Price")}),r.map((function(e){return(0,h.jsx)("option",{value:e,children:e},e)}))]}),(0,h.jsx)("input",{type:"text",name:"mileageFrom",placeholder:o("Mileage_From"),value:w,onChange:y}),(0,h.jsx)("input",{type:"text",name:"mileageTo",placeholder:o("Mileage_To"),value:b,onChange:y}),(0,h.jsx)("button",{type:"submit",children:o("Search")}),(0,h.jsx)("button",{type:"button",onClick:function(){d(""),x(""),N(""),I(""),n()},children:o("Reset")})]})},_=n(8953),C=n(5255),x=n(4393),j="ScrollToTopButton_scrollToTopButton__dyK9A",g="ScrollToTopButton_hidden__SzaGB",w=function(e){var t=e.onClick,n=(0,c.useState)(!1),a=(0,s.Z)(n,2),r=a[0],o=a[1];return(0,c.useEffect)((function(){var e=function(){o(window.scrollY>0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),(0,h.jsx)("button",{className:"".concat(j," ").concat(r?"":g),onClick:t,children:"Scroll to Top"})};function N(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),n=t[0],o=t[1],m=(0,c.useState)(!1),f=(0,s.Z)(m,2),p=f[0],j=f[1],g=(0,c.useState)(1),N=(0,s.Z)(g,2),k=N[0],S=N[1],b=(0,c.useState)(!1),I=(0,s.Z)(b,2),y=I[0],M=I[1],Z=(0,c.useState)([]),T=(0,s.Z)(Z,2),L=T[0],E=T[1],P=(0,c.useState)([]),F=(0,s.Z)(P,2),B=F[0],G=F[1],R=(0,c.useState)([]),W=(0,s.Z)(R,2),H=W[0],A=W[1],D=(0,c.useCallback)((0,r.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.Pt)();case 3:t=e.sent,A(t),n=(0,a.Z)(new Set(t.map((function(e){return e.make})))),r=(0,a.Z)(new Set(t.map((function(e){return e.rentalPrice})))),E(n),G(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching all cars:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[]);(0,c.useEffect)((function(){D()}),[D]),(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,(0,_.WH)(k);case 4:t=e.sent,1===k?(o(t),sessionStorage.setItem("data",JSON.stringify(t))):o((function(e){var n=[].concat((0,a.Z)(e),(0,a.Z)(t));return console.log(n),sessionStorage.setItem("data",JSON.stringify(n)),M(n.length<H.length),n})),M(t.length>=12),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Error fetching data:",e.t0);case 12:j(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[k,H]);var U=(0,c.useCallback)((function(){!p&&y&&S((function(e){return e+1}))}),[p,y]),$=(0,c.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object.values(t).some((function(e){return""!==e}))){e.next=3;break}return e.abrupt("return");case 3:j(!0);try{n=H.filter((function(e){var n=!0,a=!0,r=!0;if(t.make&&(n=e.make===t.make),t.price&&(a=e.rentalPrice===t.price),t.mileageFrom&&t.mileageTo){var s=parseInt(e.mileage);r=s>=parseInt(t.mileageFrom)&&s<=parseInt(t.mileageTo)}return n&&a&&r})),o(n),M(n.length>=12)}catch(a){console.error("Error filtering data:",a)}j(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[H]);return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)(v,{onFilter:$,onReset:function(){var e=sessionStorage.getItem("data");if(e){var t=JSON.parse(e);o(t),M(t.length<H.length)}},carMakes:L,rentalPrices:B}),(0,h.jsx)("div",{className:u,children:n.map((function(e){return(0,h.jsx)(C.Z,{car:e},e.id)}))}),p&&(0,h.jsx)(x.a,{}),y&&(0,h.jsx)("button",{className:d,onClick:U,disabled:p,children:"Load More"}),!p&&(0,h.jsx)(w,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})}},5255:function(e,t,n){n.d(t,{Z:function(){return F}});var a=n(9439),r=n(2791),s=n(184),o=function(e){var t=e.fill,n=void 0===t?"#ffffff":t;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{fill:n,d:"M10 18.35l-1.45-1.32C4.4 13.36 1 10.25 1 6.5 1 3.42 3.42 1 6.5 1c1.74 0 3.41.81 4.5 2.09C11.09 1.81 12.76 1 14.5 1 17.58 1 20 3.42 20 6.5c0 3.75-3.4 6.86-8.55 10.54L10 18.35z"})})},i=n(7762),c=function(e,t){if(e.accessories&&e.functionalities&&t){var n,a=e.accessories.map((function(e){return e.toLowerCase()})),r=e.functionalities.map((function(e){return e.toLowerCase()})),s=(0,i.Z)(t);try{var o=function(){var e=n.value,t=e.toLowerCase();if(a.some((function(e){return e.includes(t)}))||r.some((function(e){return e.includes(t)})))return{v:e}};for(s.s();!(n=s.n()).done;){var c=o();if("object"===typeof c)return c.v}}catch(l){s.e(l)}finally{s.f()}return"\u0424\u0440\u0430\u0437\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}return"\u041c\u0430\u0441\u0441\u0438\u0432\u044b accessories \u0438/\u0438\u043b\u0438 functionalities \u0438/\u0438\u043b\u0438 phrases \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"},l=["Power liftgate","Premium Sound System","Power taligate","Power moonroof","Audio system","Leather seats","Apple Car Play","Convetible","Air suspension","Smart liftgate","Sport seats","Hurdtop roof","Dumping System","Retractable soft","3D sound system","Leather upholstery","Panoramic roof","Spot Monitoring","Rearview camera","Panoramic sunroof","Sport Suspension","Soft-top roof","Dynamics suspension"],u=n(4420),d=n(2627),m={imageItem:"CarItem_imageItem__uWims",carItem:"CarItem_carItem__UtJwG",heart:"CarItem_heart__kd6iQ",buttonModal:"CarItem_buttonModal__2q3Ew",wraperTitleItemContentPrice:"CarItem_wraperTitleItemContentPrice__2jjAN",titleItemContent:"CarItem_titleItemContent__7IXU8",infoItemContent:"CarItem_infoItemContent__8q0ju",wraperInfoItemContent:"CarItem_wraperInfoItemContent__o4CLj"},f=n(3980),p=n(1413),h=n(4682),v=function(e){return e.modalCar.isModalOpen},_=function(e){return e.modalCar.modalData},C="ModalCar_modalOverlay__VrSsE",x="ModalCar_hystmodalWrap__V-33T",j="ModalCar_modalContent__A8cNp",g="ModalCar_closeButton__70IWX",w="ModalCar_imageCar__1ruzE",N="ModalCar_titleContent__CBHFH",k="ModalCar_wrapperGraySmallContent__+t6oT",S="ModalCar_graySmallContent__HW+X8",b="ModalCar_descriptionCarContent__Kqz8j",I="ModalCar_allDescriptionCarContent__cnn2G",y="ModalCar_subtitle__LBGWE",M="ModalCar_rentalConditions__UWpg1",Z="ModalCar_mainWrapperRentalConditions__68MKl",T="ModalCar_wrapperRentalConditions__yUb2C",L="ModalCar_buttonCall__QJvbd",E=n(9230),P=function(){var e=(0,E.$G)().t,t=(0,u.I0)(),n=(0,u.v9)(_),a=n.address.split(" ")[3].replace(/,\s*$/,""),o=n.mileage.toLocaleString("en-US"),i=n.rentalPrice.replace("$",""),c=(0,r.useCallback)((function(){t((0,h.Mr)())}),[t]);return(0,r.useEffect)((function(){document.body.classList.add("modal-open");var e=function(e){"Escape"===e.key&&c()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e),document.body.classList.remove("modal-open")}}),[c]),(0,s.jsx)("div",{className:C,onClick:c,children:(0,s.jsx)("div",{className:x,children:(0,s.jsxs)("div",{className:j,onClick:function(e){return e.stopPropagation()},children:[(0,s.jsx)("img",{className:w,src:n.img,alt:"".concat(n.make," ").concat(n.model)}),(0,s.jsxs)("div",{className:I,children:[(0,s.jsxs)("h1",{className:N,children:[n.make," ",(0,s.jsx)("span",{className:"color-blue",children:n.model}),", ",n.year]}),(0,s.jsxs)("div",{className:k,children:[(0,s.jsxs)("p",{className:S,children:[a," ",e("Ucraine")," id: ",n.id," ",e("Year")," ",n.year," Type ",n.type]}),(0,s.jsxs)("p",{className:S,children:[e("Fuel_Consumption"),": ",n.fuelConsumption,e("Engine_Size"),"  ",n.engineSize," "]})]}),(0,s.jsx)("div",{className:b,children:n.description}),(0,s.jsx)("p",{className:y,children:e("Accessories_and_functionalities")}),(0,s.jsxs)("div",{className:k,children:[(0,s.jsx)("p",{className:S,children:n.accessories}),(0,s.jsx)("p",{className:S,children:n.functionalities})]}),(0,s.jsx)("p",{className:y,children:e("Rental_Conditions")}),(0,s.jsxs)("div",{className:Z,children:[(0,s.jsxs)("div",{className:T,children:[(0,s.jsxs)("div",{className:M,children:[" ",e("Minimum_age"),": ",(0,s.jsx)("span",{className:"color-blue",children:" 25"})]}),(0,s.jsx)("div",{className:M,children:e("Valid_driver's_license")})]}),(0,s.jsxs)("div",{className:T,children:[(0,s.jsx)("div",{className:M,children:e("Security_deposite_required")}),(0,s.jsxs)("div",{className:M,children:[e("Mileage"),": ",(0,s.jsx)("span",{className:"color-blue",children:o})]}),(0,s.jsxs)("div",{className:M,children:[e("Price"),": ",(0,s.jsxs)("span",{className:"color-blue",children:[i,"$"]})]})]})]}),(0,s.jsx)("button",{className:L,onClick:function(){window.location.href="tel:+380978556455"},children:e("Rental_car")})]}),(0,s.jsx)("button",{className:g,onClick:c})]})})})},F=function(e){return function(t){var n=(0,u.I0)(),a=(0,u.v9)(v);return(0,s.jsxs)(s.Fragment,{children:[a&&(0,s.jsx)(P,{}),(0,s.jsx)(e,(0,p.Z)((0,p.Z)({},t),{},{openModal:function(e){n((0,h.h7)(e))}}))]})}}((function(e){var t=e.car,n=e.openModal,i=(0,E.$G)().t,p=(0,r.useState)(!1),h=(0,a.Z)(p,2),v=h[0],_=h[1],C=(0,r.useState)(!1),x=(0,a.Z)(C,2),j=x[0],g=x[1],w=(0,u.I0)(),N=(0,u.v9)(f.T);(0,r.useEffect)((function(){_(N.some((function(e){return e.id===t.id})))}),[N,t.id]),(0,r.useEffect)((function(){var e=function(){return g(!0)};return window.addEventListener("touchstart",e),function(){window.removeEventListener("touchstart",e)}}),[]);var k=function(){_((function(e){return!e})),w(v?(0,d.Hg)(t):(0,d.uB)(t))},S=t.address.split(" ")[3].replace(/,\s*$/,""),b=t.type.slice(0,1)+t.type.slice(1).toLowerCase();return(0,s.jsxs)("div",{className:m.carItem,children:[(0,s.jsx)("img",{className:m.imageItem,src:t.img,alt:"".concat(t.make," ").concat(t.model)}),(0,s.jsx)("button",{onClick:function(){j||k()},onTouchStart:function(){j&&k()},className:m.heart,children:(0,s.jsx)(o,{fill:v?"#ff0000":"#ffffff"})}),(0,s.jsxs)("div",{className:m.allDescriptionCarContents,children:[(0,s.jsxs)("div",{className:m.wraperTitleItemContentPrice,children:[(0,s.jsx)("div",{children:(0,s.jsxs)("h2",{className:m.titleItemContent,children:[t.make," ",(0,s.jsx)("span",{children:t.model}),", ",t.year]})}),(0,s.jsx)("p",{className:m.titleItemContent,children:t.rentalPrice})]}),(0,s.jsxs)("div",{className:m.wraperInfoItemContent,children:[(0,s.jsxs)("p",{className:m.infoItemContent,children:[S," | Ucraine | ",t.rentalCompany," | ",t.class]}),(0,s.jsxs)("p",{className:m.infoItemContent,children:[b," | ",function(e){return/\d/.test(e.model)?e.make:e.model}(t)," | ",t.mileage," | ",c(t,l)]})]})]}),(0,s.jsx)("button",{className:m.buttonModal,onClick:function(){return n(t)},children:i("Learn_more")})]})}))},3980:function(e,t,n){n.d(t,{T:function(){return a}});var a=function(e){return e.favoriteCars.favoriteCars}},8953:function(e,t,n){n.d(t,{Pt:function(){return c},WH:function(){return i}});var a=n(5861),r=n(4687),s=n.n(r),o=n(5294),i=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/auto-rent?page=".concat(t,"&limit=12"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/auto-rent");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=101.77f59464.chunk.js.map