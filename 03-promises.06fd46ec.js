var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const l=document.querySelector(".form");let s=0,u=0;l.addEventListener("submit",(e=>{e.preventDefault();const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;for(i=0;i<o.value;i+=1){function l(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o(`✅ Fulfilled promise ${e} in ${t} ms`):r(`❌ Rejected promise ${e} in ${t} ms`)}),t)}))}s+=1,u=t.value+n.value*i,console.log(u),l(s,t).then((e=>r.Notify.success(e))).catch((e=>r.Notify.failure(e)))}}));
//# sourceMappingURL=03-promises.06fd46ec.js.map