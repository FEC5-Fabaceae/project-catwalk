(self.webpackChunk=self.webpackChunk||[]).push([[547],{4547:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(7294),a=r(8451);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=r(9669);const u=function(e){var t=e.product,r=e.arrayOfOutfits,l=e.setArray,u=o((0,n.useState)({name:"",category:""}),2),s=u[0],i=u[1],f=o((0,n.useState)(!1),2),m=(f[0],f[1]),p=o((0,n.useState)({}),2),y=p[0],d=p[1],h=o((0,n.useState)(1),2),v=h[0],b=h[1];return(0,n.useEffect)((function(){c.get("http://localhost:3000/products/".concat(t)).then((function(e){var r=e.data,n=r.name,a=r.category;i({name:n,category:a}),c.get("http://localhost:3000/products/".concat(t,"/styles")).then((function(e){for(var r=e.data.results,n=r[0],a=0;a<r.length;a+=1)!0===r[a]["default?"]&&(n=r[a]);var o=n.photos[0].thumbnail_url,l=n.original_price;null!==n.sale_price&&(m(!0),l=n.sale_price),d({photo:o,salePrice:l}),c({method:"get",url:"http://localhost:3000/reviews/meta",params:{product_id:t}}).then((function(e){var t=e.data.ratings,r=0,n=0;for(var a in t)r+=parseInt(t[a],10);for(var o in t)n+=parseInt(t[o],10)*parseInt(o,10);b(n/r)}))}))}))}),[t]),n.createElement("li",{className:"carousel-card"},n.createElement("i",{className:"fas fa-times close-product",type:"Button",onClick:function(){return function(){var e=r.slice();if(r.length>0){for(var n=0,a=0;a<r.length;a+=1)r[a]===t&&(n=a);1===r.length?(e=[],l((function(){return e}))):(e.splice(n,1),l((function(){return e})))}}()}}),n.createElement("h5",null,s.category),n.createElement("h3",{className:"outfit-product-name"},s.name),n.createElement("img",{src:y.photo,alt:s.name,className:"carousel-card carousel-image"}),n.createElement("div",null,"$",y.salePrice),n.createElement("div",null,n.createElement(a.Z,{score:v})))};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const i=function(e){var t=e.product,r=e.arrayOfOutfits,a=e.setArray;return n.createElement("li",{className:"carousel-card"},n.createElement("i",{className:"far fa-plus-square",type:"button",onClick:function(){r.includes(t)||a((function(){return[].concat(function(e){if(Array.isArray(e))return s(e)}(e=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[t]);var e}))}}),n.createElement("p",{className:"add-product-card"},"Add Product To Outfit"))};var f=r(2153);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=r(9669);const d=function(e){var t=m((0,n.useState)("hidden"),2),r=t[0],a=t[1],o=m((0,n.useState)("visible"),2),l=o[0],c=o[1],s=m((0,n.useState)(0),2),p=s[0],d=s[1],h=m((0,n.useState)(3),2),v=h[0],b=h[1],E=(0,n.useContext)(f.Z),g=m((0,n.useState)(E.productID),2),A=g[0],S=g[1],N=m((0,n.useState)([]),2),O=N[0],w=N[1],I=m((0,n.useState)([O.slice(0,2)]),2),k=I[0],T=I[1];return(0,n.useEffect)((function(){S(E.productID)}),[E]),(0,n.useEffect)((function(){y.get("http://localhost:3000/outfits").then((function(e){var t=e.data.outfits;w(t)}))}),[]),(0,n.useEffect)((function(){T(O.slice(p,v)),y({method:"post",url:"http://localhost:3000/outfits",data:{outfits:O}})}),[O]),O.length>3?n.createElement("div",{className:"carousel-row"},n.createElement("h2",{className:"carousel-title"}," Your Outfit "),n.createElement("div",{className:"carousel-inner-content"},n.createElement("div",{className:"carousel-col carousel-left"},n.createElement("i",{className:"fas fa-step-backward",role:"button",onClick:function(e){v===O.length&&c("visible"),p-1!=0&&0!==O.length||a("hidden"),p>0&&(d(p-1),b(v-1),T(O.slice(p-1,v-1)))},style:{visibility:r}})),n.createElement("div",{className:"carousel-col carousel-center"},n.createElement("div",{className:"carousel-viewport"},n.createElement("ol",{className:"carousel"},n.createElement(i,{product:A,arrayOfOutfits:O,setArray:w}),k.map((function(e){return n.createElement(u,{product:e,arrayOfOutfits:O,setArray:w})}))))),n.createElement("div",{className:"carousel-col carousel-goto-right"},n.createElement("i",{className:"fas fa-step-forward",role:"button",onClick:function(e){0===p&&O.length>3&&a("visible"),v+1>=O.length&&c("hidden"),v<O.length&&(d(p+1),b(v+1),T(O.slice(p+1,v+1)))},style:{visibility:l}})))):O.length>0?n.createElement("div",{className:"carousel-row"},n.createElement("h2",{className:"carousel-title"}," Your Outfit "),n.createElement("div",{className:"carousel-inner-content"},n.createElement("div",{className:"carousel-col carousel-center"},n.createElement("div",{className:"carousel-viewport"},n.createElement("ol",{className:"carousel"},n.createElement(i,{product:A,arrayOfOutfits:O,setArray:w}),k.map((function(e){return n.createElement(u,{product:e,arrayOfOutfits:O,setArray:w})}))))))):n.createElement("div",{className:"carousel-row"},n.createElement("h2",{className:"carousel-title"}," Your Outfit "),n.createElement("div",{className:"carousel-inner-content"},n.createElement("div",{className:"carousel-col carousel-center"},n.createElement("div",{className:"carousel-viewport"},n.createElement("ol",{className:"carousel"},n.createElement(i,{product:A,arrayOfOutfits:O,setArray:w}))))))}},8451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(7294),a=r(5697),o=r.n(a);function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(e){var t=e.percent;return n.createElement("i",{className:"star-".concat(t," fas fa-star")})},i=function(e){var t,r,a=function(e){var t=Math.floor(e),r=[t,t+.25,t+.5,t+.75],n=r.map((function(t){return Math.abs(t-e)}));return r[function(e){for(var t=null,r=null,n=0;n<e.length;n++)if(null===t){var a=[e[n],n];t=a[0],r=a[1]}else if(e[n]<t){var o=[e[n],n];t=o[0],r=o[1]}return r}(n)].toFixed(2)}(e.score),o=(t=String(a).split("."),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(t,r)||c(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=o[0],i=o[1],f="00"!==i?5-Number(u)-1:5-Number(u),m=l(Array(Number(u)).keys()).map((function(e){return n.createElement(s,{percent:"100",key:e+1})})),p="00"!==i?n.createElement(s,{percent:i,key:Number(u)+2}):"",y=f>0?l(Array(f).keys()).map((function(e){return n.createElement(s,{percent:"00",key:"00"===i?Number(u)+e+1:Number(u)+2+e})})):"";return n.createElement("div",{className:"stars"},m,p,y)};s.propTypes={percent:o().oneOf(["00","25","50","75","100"]).isRequired},i.propTypes={score:o().number.isRequired};const f=i},2703:(e,t,r)=>{"use strict";var n=r(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,l){if(l!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);