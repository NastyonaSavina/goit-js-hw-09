const e=document.querySelector(".js-start-btn"),t=document.querySelector(".js-stop-btn"),d=document.querySelector("body");let l=null;t.disabled=!0,e.addEventListener("click",(function(){l=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,e.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(()=>{clearInterval(l),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.4fc52585.js.map
