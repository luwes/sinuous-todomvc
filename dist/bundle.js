!function(){"use strict";const e=[];let t;function n(e){const n=t,o=()=>{};t=o,a(o);const l=e(()=>{u(o),t=void 0});return t=n,l}function o(e){const n=t;t=void 0;const o=e();return t=n,o}function l(n){function o(e){if(0===arguments.length)return t&&!o.__o.has(t)&&(o.__o.add(t),t.u.push(o)),n;n=e;const l=t;return t=void 0,o.o=new Set(o.__o),o.o.forEach(e=>e.i=!1),o.o.forEach(e=>{e.i||e()}),t=l,n}return o.$o=!0,o.__o=new Set,o.t=e,o}function c(e,n){function o(){const l=t;t&&t.__c.push(o);const c=o.__c;return u(o),o.i=!0,t=o,n=e(n),c.forEach(e=>{-1===o.__c.indexOf(e)&&(e.i=!0)}),function e(t){return t.reduce((t,n)=>t.concat(n,e(n.__c)),[])}(o.__c).forEach(r),t=l,n}function l(){return o.i?o.u.forEach(e=>e()):n=o(),n}return e.s=o,a(o),o(),l.$o=!0,l}function r(e){e.i&&e.u.forEach(t=>{t.o&&t.o.delete(e)})}function i(e){return t&&t.l.push(e),e}function s(e){return c(e),()=>u(e.s)}function u(e){e.__c.forEach(u),e.u.forEach(t=>{t.__o.delete(e),t.o&&t.o.delete(e)}),e.l.forEach(e=>e()),a(e)}function a(e){e.u=[],e.__c=[],e.l=[]}const f={},d=[];function p(e,t,n){const o=function(e){const{childNodes:t}=e;if(t&&11===e.nodeType)return t.length<2?t[0]:{t:p(e,"",t[0])}}(t=function(e){return"string"==typeof e?document.createTextNode(e):e instanceof Node?e:f.h(d,e)}(t))||t;return e.insertBefore(t,n&&n.parentNode&&n),o}function h(e,t,n){for(;t&&t!==n;){const n=t.nextSibling;e===t.parentNode&&e.removeChild(t),t=n}}function m(e){return this.o[e.type](e)}function g(e,t){for(let t in e)f[t]=e[t];return function(){const e=Array.from(arguments);let n;function o(l){if(null==l);else if("string"==typeof l)n?p(n,l):n=t?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l);else if(Array.isArray(l))n||(n=document.createDocumentFragment()),l.forEach(o);else if(l instanceof Node)n?p(n,l):n=l;else if("object"==typeof l)f.property(n,l,null,t);else if("function"==typeof l)if(n){const e=p(n,"");f.insert(n,l,e)}else n=l.apply(null,e.splice(1));else p(n,""+l)}return e.forEach(o),n}}function y(){return f.h.apply(f.h,arguments)}function v(e,t,n){const{root:o,subscribe:l,sample:c,cleanup:r}=f;null==n&&(n=!t.$t);const i=f.h([]),s=f.add(i,""),u=new Map,a=new Map,d=new Set;function p(e,l){if(null==e)return;let c=a.get(e);return 1===l?(d.delete(e),c||(c=n?o(n=>(u.set(e,n),t(e.$v||e))):t(e.$v||e),11===c.nodeType&&(c=c.firstChild),a.set(e,c))):-1===l&&d.add(e),c}function h(e){let t=u.get(e);t&&(t(),u.delete(e)),a.delete(e)}return r(l(t=>{const n=e();return c(()=>{d.clear();const e=Array.from(function(e,t,n,o,l){const c=new Map,r=new Map;let i,s;for(i=0;i<t.length;i++)c.set(t[i],i);for(i=0;i<n.length;i++)r.set(n[i],i);for(i=s=0;i!==t.length||s!==n.length;){var u=t[i],a=n[s];if(null===u)i++;else if(n.length<=s)e.removeChild(o(t[i],-1)),i++;else if(t.length<=i)e.insertBefore(o(a,1),o(t[i],0)||l),s++;else if(u===a)i++,s++;else{var f=r.get(u),d=c.get(a);void 0===f?(e.removeChild(o(t[i],-1)),i++):void 0===d?(e.insertBefore(o(a,1),o(t[i],0)||l),s++):(e.insertBefore(o(t[d],1),o(t[i],0)||l),t[d]=null,d>i+1&&i++,s++)}}return n}(s.parentNode,t||[],n,p,s));return d.forEach(h),e})})),r((function(){u.forEach(e=>e()),u.clear(),a.clear(),d.clear()})),i}f.insert=function(e,t,n,o,l){return e=n&&n.parentNode||e,l=l||o instanceof Node&&o,t===o||(o&&"string"!=typeof o||!("string"==typeof t||"number"==typeof t&&(t+=""))?"function"==typeof t?f.subscribe((function(){o=f.insert(e,t.call({el:e,endMark:n}),n,o,l)})):(n?o&&(l||(l=o.t&&o.t.nextSibling||n.previousSibling),h(e,l,n)):e.textContent="",o=null,t&&!0!==t&&(o=p(e,t,n))):(null!=o&&e.firstChild?n?(n.previousSibling||e.lastChild).data=t:e.firstChild.data=t:n?p(e,t,n):e.textContent=t,o=t)),o},f.property=function(e,t,n,o,l){if(null!=t)if(!n||"attrs"===n&&(o=!0))for(n in t)f.property(e,t[n],n,o,l);else"o"!==n[0]||"n"!==n[1]||t.$o?"function"==typeof t?f.subscribe((function(){f.property(e,t.call({el:e,name:n}),n,o,l)})):l?e.style.setProperty(n,t):o||"data-"===n.slice(0,5)||"aria-"===n.slice(0,5)?e.setAttribute(n,t):"style"===n?"string"==typeof t?e.style.cssText=t:f.property(e,t,null,o,!0):("class"===n&&(n+="Name"),e[n]=t):function(e,t,n){t=t.slice(2).toLowerCase(),n?e.addEventListener(t,m):e.removeEventListener(t,m),(e.o||(e.o={}))[t]=n}(e,n,t)},f.add=p,f.rm=h,f.h=g({subscribe:s,cleanup:i,root:n,sample:o}),f.hs=g({subscribe:s,cleanup:i,root:n,sample:o},!0);const b=(e,t=!1,n=Date.now())=>({id:n,title:w(l(e)),completed:w(l(t))}),_=(e=>({todos:w(l(e))}))([]),E=localStorage.getItem("todos-sinuous");function w(e){return e.toJSON=k,e}function k(){var e=this();return e&&e.toJSON&&(e=e.toJSON()),e}E&&_.todos(JSON.parse(E).todos.map(e=>b(e.title,e.completed,e.id))),c(()=>localStorage.setItem("todos-sinuous",JSON.stringify(_)));const{todos:N}=_,S=l(),C=l("all"),x=()=>N().filter(e=>e.completed()),A=()=>N().filter(e=>!e.completed()),M=()=>"all"===C()?N():"completed"===C()?x():A(),O=()=>N(N().filter(e=>!e.completed()));function $(e){const t=e.target.checked;N().filter(e=>e.completed()!==t).forEach(e=>e.completed(t))}function J({target:e,keyCode:t}){let n=e.value.trim();13===t&&n&&(N(N().concat(b(n))),e.value="")}function T(e,t){let n=e.target.value.trim();S()===t&&n&&(B({id:t,title:n}),S(null))}function B({id:e,title:t,completed:n}){const o=N().filter(t=>t.id===e)[0];t&&o.title(t),null!=n&&o.completed(n)}function L(e){var t,n="";for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}const D=()=>C(location.hash.slice(2)||"all");window.addEventListener("hashchange",D),D(),document.querySelector(".todoapp").append(y([y("header",{class:"header"},y("h1",null,"todos"),y("input",{class:"new-todo",placeholder:"What needs to be done?",onkeyup:J,autofocus:!0})),y("section",{class:"main",hidden:()=>!N().length},y("input",{id:"toggle-all",class:"toggle-all",type:"checkbox",oninput:$,checked:()=>!A().length}),y("label",{htmlFor:"toggle-all"},"Mark all as complete"),y("ul",{class:"todo-list"},v(M,({id:e,title:t,completed:n})=>y("li",{class:()=>L({completed:n(),editing:S()===e})},y("div",{class:"view"},y("input",{class:"toggle",type:"checkbox",checked:n,oninput:t=>function(e,t){B({id:t,completed:e.target.checked})}(t,e)}),y("label",{ondblclick:()=>S(e)},t),y("button",{class:"destroy",onclick:()=>function(e){return N(N().filter(t=>t.id!==e))}(e)})),()=>{return S()===e&&(n=y("input",{class:"edit",value:t,onfocusout:t=>T(t,e),onkeyup:t=>function(e,t){13===e.keyCode?T(e,t):27===e.keyCode&&S(null)}(t,e)}),setTimeout(()=>n.focus()),n);var n}))),y("footer",{class:"footer"},y("span",{class:"todo-count"},y("strong",null,()=>A().length),()=>1===A().length?" item":" items"," left"),y("ul",{class:"filters"},y("li",null,y("a",{class:()=>L({selected:"all"===C()}),href:"#/"},"All")),y("li",null,y("a",{class:()=>L({selected:"active"===C()}),href:"#/active"},"Active")),y("li",null,y("a",{class:()=>L({selected:"completed"===C()}),href:"#/completed"},"Completed"))),()=>x().length>0&&y("button",{class:"clear-completed",onclick:O},"Clear completed")))]))}();