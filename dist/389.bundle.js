(self.webpackChunk=self.webpackChunk||[]).push([[389],{3682:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(7294);const a=function(e){var t=e.setModalVisible,r=e.component;return n.createElement("div",{className:"modal-container"},n.createElement("button",{className:"modal-close-button",type:"button",onClick:function(){t(!1)},style:{top:"1%",left:"95%"}},"x"),n.createElement("div",{className:"modal-component"},r))}},5389:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(7294),a=r(2153);const o=function(e){var t=e.currentProductValue,r=e.relatedProductValue,a=e.feature;return null===r&&(r=""),null===t&&(t=""),n.createElement("div",{className:"feature-comparison"},n.createElement("p",null,a),n.createElement("p",null,t),n.createElement("p",null,r))};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=r(9669);const i=function(e){var t=(0,n.useContext)(a.Z),r=[],c=e.relatedProductInfo,i=l((0,n.useState)({name:"",category:"",features:[]}),2),s=i[0],f=i[1],m=l((0,n.useState)(c.features),2);return m[0],m[1],(0,n.useEffect)((function(){u.get("http://localhost:3000/products/".concat(t.productID)).then((function(e){var t=e.data,r=t.name,n=t.category,a=t.features;f({name:r,category:n,features:a})})).catch((function(e){console.log(e)}))}),[]),(0,n.useEffect)((function(){u.get("http://localhost:3000/products/".concat(t.productID)).then((function(e){var t=e.data,r=t.name,n=t.category,a=t.features;f({name:r,category:n,features:a})})).catch((function(e){console.log(e)}))}),[t]),n.createElement("div",null,n.createElement("h4",null,"Comparing"),n.createElement("div",null,s.name),n.createElement("div",null,c.name),s.features.map((function(e){for(var t=null,a=c.features,l=0;l<a.length;l+=1)a[l].feature===e.feature&&(t=a[l].value,r.push(e.feature));return n.createElement(o,{currentProductValue:e.value,relatedProductValue:t,feature:e.feature})})),c.features.map((function(e){for(var t=!0,a=0;a<r.length;a+=1)e.feature===r[a]&&(t=!1);if(t)return n.createElement(o,{currentProductValue:null,relatedProductValue:e.value,feature:e.feature})})))};var s=r(8451),f=r(3682);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=r(9669);const y=function(e){var t=e.product,r=e.value,a=m((0,n.useState)({name:"",category:"",features:""}),2),o=a[0],l=a[1],c=m((0,n.useState)(!1),2),u=(c[0],c[1]),p=m((0,n.useState)({}),2),y=p[0],v=p[1],h=m((0,n.useState)(1),2),b=h[0],g=h[1],E=m((0,n.useState)(!1),2),S=E[0],A=E[1];return(0,n.useEffect)((function(){"number"==typeof t&&d.get("http://localhost:3000/products/".concat(t)).then((function(e){var r=e.data,n=r.name,a=r.category,o=r.features;l({name:n,category:a,features:o}),d.get("http://localhost:3000/products/".concat(t,"/styles")).then((function(e){for(var r=e.data.results,n=r[0],a=0;a<r.length;a+=1)!0===r[a]["default?"]&&(n=r[a]);var o=n.photos[0].thumbnail_url,l=n.original_price;null!==n.sale_price&&(u(!0),l=n.sale_price),v({photo:o,salePrice:l}),d({method:"get",url:"http://localhost:3000/reviews/meta",params:{product_id:t}}).then((function(e){var t=e.data.ratings,r=0,n=0;for(var a in t)r+=parseInt(t[a],10);for(var o in t)n+=parseInt(t[o],10)*parseInt(o,10);g(n/r)}))}))}))}),[t]),n.createElement("li",{className:"carousel-card"},n.createElement("i",{className:"far fa-star",type:"button",onClick:function(){A(!0)}}),S?n.createElement(f.Z,{setModalVisible:A,component:n.createElement(i,{relatedProductInfo:o})}):n.createElement(n.Fragment,null),n.createElement("div",{onClick:function(){return r.setProductID((function(){return t.toString()}))}},n.createElement("div",{className:"related-category"},o.category),n.createElement("div",{className:"related-name"},o.name),n.createElement("img",{src:y.photo,alt:o.name,className:"carousel-card carousel-image"}),n.createElement("div",null,"$",y.salePrice),n.createElement("div",null,n.createElement(s.Z,{score:b}))))};function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=r(9669);const g=function(e){var t=v((0,n.useState)("hidden"),2),r=t[0],o=t[1],l=v((0,n.useState)("visible"),2),c=l[0],u=l[1],i=v((0,n.useState)(0),2),s=i[0],f=i[1],m=v((0,n.useState)(3),2),p=m[0],d=m[1],h=(0,n.useContext)(a.Z),g=v((0,n.useState)(h.productID),2),E=g[0],S=g[1],A=v((0,n.useState)([]),2),I=A[0],w=A[1],N=v((0,n.useState)([I.slice(0,2)]),2),C=N[0],O=N[1];return(0,n.useEffect)((function(){b.get("http://localhost:3000/products/".concat(E,"/related")).then((function(e){w(e.data),O(e.data.slice(s,p))}))}),[E]),(0,n.useEffect)((function(){S(h.productID)}),[h]),n.createElement("div",{className:"carousel-row"},n.createElement("h2",{className:"carousel-title"}," Related Products "),n.createElement("div",{className:"carousel-inner-content"},n.createElement("div",{className:"carousel-col carousel-left"},n.createElement("i",{className:"fas fa-step-backward",role:"button",onClick:function(e){p===I.length&&u("visible"),s-1==0&&o("hidden"),s>0&&(f(s-1),d(p-1),O(I.slice(s-1,p-1)))},style:{visibility:r}})),n.createElement("div",{className:"carousel-col carousel-center"},n.createElement("div",{className:"carousel-viewport"},n.createElement("ol",{className:"carousel"},C.map((function(e){return n.createElement(y,{product:e,value:h})}))))),n.createElement("div",{className:"carousel-col carousel-goto-right"},n.createElement("i",{className:"fas fa-step-forward",role:"button",onClick:function(e){0===s&&o("visible"),p+1===I.length&&u("hidden"),p<I.length&&(f(s+1),d(p+1),O(I.slice(s+1,p+1)))},style:{visibility:c}}))))}},8451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(7294),a=r(5697),o=r.n(a);function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=function(e){var t=e.percent;return n.createElement("i",{className:"star-".concat(t," fas fa-star")})},s=function(e){var t,r,a=function(e){var t=Math.floor(e),r=[t,t+.25,t+.5,t+.75],n=r.map((function(t){return Math.abs(t-e)}));return r[function(e){for(var t=null,r=null,n=0;n<e.length;n++)if(null===t){var a=[e[n],n];t=a[0],r=a[1]}else if(e[n]<t){var o=[e[n],n];t=o[0],r=o[1]}return r}(n)].toFixed(2)}(e.score),o=(t=String(a).split("."),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(t,r)||c(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=o[0],s=o[1],f="00"!==s?5-Number(u)-1:5-Number(u),m=l(Array(Number(u))).map((function(){return n.createElement(i,{percent:"100"})})),p=f>0?l(Array(f)).map((function(){return n.createElement(i,{percent:"00"})})):"",d="00"!==s?n.createElement(i,{percent:s}):"";return n.createElement("div",{className:"stars"},m,d,p)};i.propTypes={percent:o().oneOf(["00","25","50","75","100"]).isRequired},s.propTypes={score:o().number.isRequired};const f=s},2703:(e,t,r)=>{"use strict";var n=r(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,l){if(l!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);