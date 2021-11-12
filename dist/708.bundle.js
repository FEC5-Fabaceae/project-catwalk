(self.webpackChunk=self.webpackChunk||[]).push([[708],{1616:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var n=r(7294),a=r(9669),s=r.n(a),l=r(5697),o=r.n(l),u=r(381),i=r.n(u),c=r(8451),m=function(e){var t=e.review,r=t.rating,a=t.summary,s=t.body,l=t.date,o=t.reviewer_name,u=t.helpfulness;return n.createElement("article",null,n.createElement("h1",null,n.createElement(c.Z,{score:r})),n.createElement("h3",null,o,"\t",n.createElement("time",null,i()(l).format("MMMM D, YYYY"))),n.createElement("h1",null,a),n.createElement("p",null,s),n.createElement("p",null,"Helpful?","\t",n.createElement("button",{type:"button"},"Yes"),"(",u,") |","\t",n.createElement("button",{type:"button"},"Report")))};m.propTypes={review:o().shape({rating:o().number.isRequired,summary:o().string.isRequired,body:o().string.isRequired,date:o().string.isRequired,reviewer_name:o().string.isRequired,helpfulness:o().number.isRequired,review_id:o().number.isRequired}).isRequired};const j=m;var f=r(2153);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const y=function(){var e=d((0,n.useState)([]),2),t=e[0],r=e[1],a=d((0,n.useState)("relevant"),2),l=a[0],o=(a[1],d((0,n.useState)(0),2)),u=o[0],i=o[1],c=d((0,n.useState)([]),2),m=c[0],b=c[1],y=d((0,n.useState)(!1),2),p=y[0],v=y[1],h=d((0,n.useState)(2),2),g=h[0],E=h[1],w=d((0,n.useState)(!1),2),k=w[0],S=w[1],A=(0,n.useContext)(f.Z),N=A.productID;return A.setProductID,(0,n.useEffect)((function(){s()({method:"get",url:"/reviews/",params:{product_id:N,sort:l}}).then((function(e){var a,s;i(e.data.count),r(e.data.results),console.log(t),v(!0),a=function(){return!0},s=t.filter(a).slice(0,g),console.log("reviews=",t,"filtered=",s),b(s.map((function(e){return n.createElement(j,{key:e.review_id,review:e})})))}))}),[p,g]),p?n.createElement("section",{id:"review-list"},n.createElement("h1",null,"RATINGS AND REVIEWS"),n.createElement("h2",null,"".concat(u," reviews, sorted by ").concat({relevant:"relevance",newest:"date",helpful:"helpfulness"}[l])),n.createElement(n.Fragment,null,m),n.createElement("button",{type:"button",className:"load-more-reviews",disabled:k,onClick:function(){E(g+2),g>=u&&S(!0)}},"Load more reviews"),n.createElement("button",{type:"button",className:"submit-review"},"Submit a review")):n.createElement("section",null,n.createElement("h1",null,"RATINGS AND REVIEWS"),"Loading...")};var p=function(e){var t=e.percent,r=e.total,a=e.score;return n.createElement("dd",{className:"percentage"},n.createElement("span",{className:"bar-label"},a),n.createElement("div",{className:"rating-bar-".concat(t)},n.createElement("div",{className:"filled-rating-bar"}),n.createElement("div",{className:"empty-rating-bar"},"."),n.createElement("span",{className:"individual-rating-total"},r)))};p.propTypes={percent:o().string.isRequired,total:o().number.isRequired,score:o().number.isRequired};const v=p;function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(e){var t,r,a,s=e.ratings,l=function(e){var t,r=(t=e,Object.values(t).reduce((function(e,t){return Number(e)+Number(t)})));return Object.fromEntries(Object.entries(e).map((function(e){var t,n=h(e,2);return[n[0],(t=n[1]/r,t.toFixed(1).split(".")[1].concat("0"))]})))}(s),o=Object.keys(s).map((function(e){var t=h(e,2),r=t[0],a=t[1];return n.createElement(v,{score:r,percent:l[r],total:a,key:r})})),u=(t=s,r=function(e,t){return Number(e)+Number(t)},a=Object.values(t).reduce(r),(Object.keys(t).map((function(e){return t[e]*e})).reduce(r)/a).toFixed(2));return n.createElement("dl",{id:"rating-breakdown"},n.createElement("dt",null,n.createElement("h2",null,"Rating Breakdown")),n.createElement("span",{className:"average-score"},u),n.createElement(c.Z,{score:Number(u)}),n.createElement(n.Fragment,null,o))};E.propTypes={ratings:o().shape({1:o().number,2:o().number,3:o().number,4:o().number,5:o().number}).isRequired};const w=E;function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const A=function(){var e=(0,n.useContext)(f.Z),t=e.productID,r=(e.setProductID,k((0,n.useState)({}),2)),a=r[0],l=r[1],o=k((0,n.useState)(!1),2),u=o[0],i=o[1];return(0,n.useEffect)((function(){s()({method:"get",url:"/reviews/meta",params:{product_id:t}}).then((function(e){l(e.data),i(!0)}))}),[u]),u?(console.log(a),n.createElement("aside",null,n.createElement(w,{ratings:a.ratings}))):n.createElement("aside",null,"Loading...")},N=function(){return n.createElement("section",{id:"review-section"},n.createElement(A,null),n.createElement(y,null))}},8451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(7294),a=r(5697),s=r.n(a);function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=function(e){var t=e.percent;return n.createElement("i",{className:"star-".concat(t," fas fa-star")})},c=function(e){var t,r,a=function(e){var t=Math.floor(e),r=[t,t+.25,t+.5,t+.75],n=r.map((function(t){return Math.abs(t-e)}));return r[function(e){for(var t=null,r=null,n=0;n<e.length;n++)if(null===t){var a=[e[n],n];t=a[0],r=a[1]}else if(e[n]<t){var s=[e[n],n];t=s[0],r=s[1]}return r}(n)].toFixed(2)}(e.score),s=(t=String(a).split("."),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return s}}(t,r)||o(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=s[0],c=s[1],m="00"!==c?5-Number(u)-1:5-Number(u),j=l(Array(Number(u))).map((function(){return n.createElement(i,{percent:"100"})})),f=m>0?l(Array(m)).map((function(){return n.createElement(i,{percent:"00"})})):"",d="00"!==c?n.createElement(i,{percent:c}):"";return n.createElement("div",{className:"stars"},j,d,f)};i.propTypes={percent:s().oneOf(["00","25","50","75","100"]).isRequired},c.propTypes={score:s().number.isRequired};const m=c},6700:(e,t,r)=>{var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":7093,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":7093,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":238,"./ru.js":238,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=6700}}]);