"use strict";(self.webpackChunkrenta_cars=self.webpackChunkrenta_cars||[]).push([[654],{8654:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(9439),s=t(2791),r=t(4420),i=t(3980),o=t(5255),c=t(4393),l="FavouriteCar_imageGrid__LyQtx",d=t(9230),m=t(184),u=function(){var e=(0,r.v9)(i.T),n=(0,s.useState)(!0),t=(0,a.Z)(n,2),u=t[0],f=t[1],_=(0,d.$G)().t;return(0,s.useEffect)((function(){f(!1)}),[]),(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h1",{className:"title",children:_("Favorite")}),(0,m.jsx)("div",{className:l,children:u?(0,m.jsx)(c.a,{}):e.length>0?e.map((function(e){return(0,m.jsx)(o.Z,{car:e},e.id)})):(0,m.jsx)("p",{children:"No favorite cars yet."})})]})}},5255:function(e,n,t){t.d(n,{Z:function(){return Z}});var a=t(9439),s=t(2791),r=t(184),i=function(e){var n=e.fill,t=void 0===n?"#ffffff":n;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fill:t,d:"M10 18.35l-1.45-1.32C4.4 13.36 1 10.25 1 6.5 1 3.42 3.42 1 6.5 1c1.74 0 3.41.81 4.5 2.09C11.09 1.81 12.76 1 14.5 1 17.58 1 20 3.42 20 6.5c0 3.75-3.4 6.86-8.55 10.54L10 18.35z"})})},o=t(7762),c=function(e,n){if(e.accessories&&e.functionalities&&n){var t,a=e.accessories.map((function(e){return e.toLowerCase()})),s=e.functionalities.map((function(e){return e.toLowerCase()})),r=(0,o.Z)(n);try{var i=function(){var e=t.value,n=e.toLowerCase();if(a.some((function(e){return e.includes(n)}))||s.some((function(e){return e.includes(n)})))return{v:e}};for(r.s();!(t=r.n()).done;){var c=i();if("object"===typeof c)return c.v}}catch(l){r.e(l)}finally{r.f()}return"\u0424\u0440\u0430\u0437\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}return"\u041c\u0430\u0441\u0441\u0438\u0432\u044b accessories \u0438/\u0438\u043b\u0438 functionalities \u0438/\u0438\u043b\u0438 phrases \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"},l=["Power liftgate","Premium Sound System","Power taligate","Power moonroof","Audio system","Leather seats","Apple Car Play","Convetible","Air suspension","Smart liftgate","Sport seats","Hurdtop roof","Dumping System","Retractable soft","3D sound system","Leather upholstery","Panoramic roof","Spot Monitoring","Rearview camera","Panoramic sunroof","Sport Suspension","Soft-top roof","Dynamics suspension"],d=t(4420),m=t(2627),u={imageItem:"CarItem_imageItem__uWims",carItem:"CarItem_carItem__UtJwG",heart:"CarItem_heart__kd6iQ",buttonModal:"CarItem_buttonModal__2q3Ew",wraperTitleItemContentPrice:"CarItem_wraperTitleItemContentPrice__2jjAN",titleItemContent:"CarItem_titleItemContent__7IXU8",infoItemContent:"CarItem_infoItemContent__8q0ju",wraperInfoItemContent:"CarItem_wraperInfoItemContent__o4CLj"},f=t(3980),_=t(1413),C=t(4682),p=function(e){return e.modalCar.isModalOpen},h=function(e){return e.modalCar.modalData},v="ModalCar_modalOverlay__VrSsE",j="ModalCar_hystmodalWrap__V-33T",x="ModalCar_modalContent__A8cNp",N="ModalCar_closeButton__70IWX",I="ModalCar_imageCar__1ruzE",w="ModalCar_titleContent__CBHFH",g="ModalCar_wrapperGraySmallContent__+t6oT",y="ModalCar_graySmallContent__HW+X8",M="ModalCar_descriptionCarContent__Kqz8j",b="ModalCar_allDescriptionCarContent__cnn2G",S="ModalCar_subtitle__LBGWE",k="ModalCar_rentalConditions__UWpg1",L="ModalCar_mainWrapperRentalConditions__68MKl",E="ModalCar_wrapperRentalConditions__yUb2C",P="ModalCar_buttonCall__QJvbd",T=t(9230),G=function(){var e=(0,T.$G)().t,n=(0,d.I0)(),t=(0,d.v9)(h),a=t.address.split(" ")[3].replace(/,\s*$/,""),i=t.mileage.toLocaleString("en-US"),o=t.rentalPrice.replace("$",""),c=(0,s.useCallback)((function(){n((0,C.Mr)())}),[n]);return(0,s.useEffect)((function(){document.body.classList.add("modal-open");var e=function(e){"Escape"===e.key&&c()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e),document.body.classList.remove("modal-open")}}),[c]),(0,r.jsx)("div",{className:v,onClick:c,children:(0,r.jsx)("div",{className:j,children:(0,r.jsxs)("div",{className:x,onClick:function(e){return e.stopPropagation()},children:[(0,r.jsx)("img",{className:I,src:t.img,alt:"".concat(t.make," ").concat(t.model)}),(0,r.jsxs)("div",{className:b,children:[(0,r.jsxs)("h1",{className:w,children:[t.make," ",(0,r.jsx)("span",{className:"color-blue",children:t.model}),", ",t.year]}),(0,r.jsxs)("div",{className:g,children:[(0,r.jsxs)("p",{className:y,children:[a," ",e("Ucraine")," id: ",t.id," ",e("Year")," ",t.year," Type ",t.type]}),(0,r.jsxs)("p",{className:y,children:[e("Fuel_Consumption"),": ",t.fuelConsumption,e("Engine_Size"),"  ",t.engineSize," "]})]}),(0,r.jsx)("div",{className:M,children:t.description}),(0,r.jsx)("p",{className:S,children:e("Accessories_and_functionalities")}),(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)("p",{className:y,children:t.accessories}),(0,r.jsx)("p",{className:y,children:t.functionalities})]}),(0,r.jsx)("p",{className:S,children:e("Rental_Conditions")}),(0,r.jsxs)("div",{className:L,children:[(0,r.jsxs)("div",{className:E,children:[(0,r.jsxs)("div",{className:k,children:[" ",e("Minimum_age"),": ",(0,r.jsx)("span",{className:"color-blue",children:" 25"})]}),(0,r.jsx)("div",{className:k,children:e("Valid_driver's_license")})]}),(0,r.jsxs)("div",{className:E,children:[(0,r.jsx)("div",{className:k,children:e("Security_deposite_required")}),(0,r.jsxs)("div",{className:k,children:[e("Mileage"),": ",(0,r.jsx)("span",{className:"color-blue",children:i})]}),(0,r.jsxs)("div",{className:k,children:[e("Price"),": ",(0,r.jsxs)("span",{className:"color-blue",children:[o,"$"]})]})]})]}),(0,r.jsx)("button",{className:P,onClick:function(){window.location.href="tel:+380978556455"},children:e("Rental_car")})]}),(0,r.jsx)("button",{className:N,onClick:c})]})})})},Z=function(e){return function(n){var t=(0,d.I0)(),a=(0,d.v9)(p);return(0,r.jsxs)(r.Fragment,{children:[a&&(0,r.jsx)(G,{}),(0,r.jsx)(e,(0,_.Z)((0,_.Z)({},n),{},{openModal:function(e){t((0,C.h7)(e))}}))]})}}((function(e){var n=e.car,t=e.openModal,o=(0,T.$G)().t,_=(0,s.useState)(!1),C=(0,a.Z)(_,2),p=C[0],h=C[1],v=(0,s.useState)(!1),j=(0,a.Z)(v,2),x=j[0],N=j[1],I=(0,d.I0)(),w=(0,d.v9)(f.T);(0,s.useEffect)((function(){h(w.some((function(e){return e.id===n.id})))}),[w,n.id]),(0,s.useEffect)((function(){var e=function(){return N(!0)};return window.addEventListener("touchstart",e),function(){window.removeEventListener("touchstart",e)}}),[]);var g=function(){h((function(e){return!e})),I(p?(0,m.Hg)(n):(0,m.uB)(n))},y=n.address.split(" ")[3].replace(/,\s*$/,""),M=n.type.slice(0,1)+n.type.slice(1).toLowerCase();return(0,r.jsxs)("div",{className:u.carItem,children:[(0,r.jsx)("img",{className:u.imageItem,src:n.img,alt:"".concat(n.make," ").concat(n.model)}),(0,r.jsx)("button",{onClick:function(){x||g()},onTouchStart:function(){x&&g()},className:u.heart,children:(0,r.jsx)(i,{fill:p?"#ff0000":"#ffffff"})}),(0,r.jsxs)("div",{className:u.allDescriptionCarContents,children:[(0,r.jsxs)("div",{className:u.wraperTitleItemContentPrice,children:[(0,r.jsx)("div",{children:(0,r.jsxs)("h2",{className:u.titleItemContent,children:[n.make," ",(0,r.jsx)("span",{children:n.model}),", ",n.year]})}),(0,r.jsx)("p",{className:u.titleItemContent,children:n.rentalPrice})]}),(0,r.jsxs)("div",{className:u.wraperInfoItemContent,children:[(0,r.jsxs)("p",{className:u.infoItemContent,children:[y," | Ucraine | ",n.rentalCompany," | ",n.class]}),(0,r.jsxs)("p",{className:u.infoItemContent,children:[M," | ",function(e){return/\d/.test(e.model)?e.make:e.model}(n)," | ",n.mileage," | ",c(n,l)]})]})]}),(0,r.jsx)("button",{className:u.buttonModal,onClick:function(){return t(n)},children:o("Learn_more")})]})}))},3980:function(e,n,t){t.d(n,{T:function(){return a}});var a=function(e){return e.favoriteCars.favoriteCars}}}]);
//# sourceMappingURL=654.32097d94.chunk.js.map