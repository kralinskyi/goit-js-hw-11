function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var n=l.default(e,t,"get");return i.default(e,n)};var l=s(o("fExtF")),i=s(o("iaRLo"));function s(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,n){d.default(e,t),t.set(e,n)};var c,d=(c=o("7K24o"))&&c.__esModule?c:{default:c};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var p=new WeakMap,h=new WeakMap,m=new WeakMap;var v=e(o("amrNH")).template({1:function(e,t,n,r,o){var a,l,i=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='gallery__item'>\n    <img src='"+i(e.lambda(null!=(a=null!=t?s(t,"urls"):t)?s(a,"small"):a,t))+"' alt='"+i("function"==typeof(l=null!=(l=s(n,"alt_description")||(null!=t?s(t,"alt_description"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"alt_description",hash:{},data:o,loc:{start:{line:3,column:35},end:{line:3,column:54}}}):l)+"' class='gallery-img' />\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:5,column:9}}}))?a:""},useData:!0});const g=document.querySelector(".js-search-form"),_=document.querySelector(".js-gallery"),y=document.querySelector(".js-load-more"),w=new class{fetchPhotos(){const t=new URLSearchParams({...e(a)(this,m),page:this.page,query:this.query});return fetch(`${e(a)(this,h)}/search/photos?${t}}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}constructor(){e(u)(this,p,{writable:!0,value:"LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"}),e(u)(this,h,{writable:!0,value:"https://api.unsplash.com"}),e(u)(this,m,{writable:!0,value:{per_page:12,color:"black_and_white",client_id:e(a)(this,p)}}),e(f)(this,"page",1),e(f)(this,"query",null)}};g.addEventListener("submit",(function(e){e.preventDefault();const t=e.target.elements["user-search-query"].value.trim();w.query=t,w.fetchPhotos().then((e=>{if(!e.results.length)throw new Error;_.innerHTML=v(e.results),e.total_pages!==w.page&&y.classList.remove("is-hidden")})).catch((e=>{y.classList.add("is-hidden"),_.textContent="images dont found"}))})),y.addEventListener("click",(function(){w.page+=1,w.fetchPhotos().then((e=>{w.page===e.total_pages&&y.classList.add("is-hidden"),_.insertAdjacentHTML("beforeend",v(e.results))}))}));
//# sourceMappingURL=gallery.4782947d.js.map