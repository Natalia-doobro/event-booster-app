parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"keXy":[function(require,module,exports) {
const e={LIGHT:"light-theme",DARK:"dark-theme"},t=document.querySelector("#theme-switch-toggle");t.addEventListener("change",h);const s=document.body,a=document.querySelector(".container"),m=document.querySelector(".header-bg"),d=document.querySelector(".footer-section"),l=localStorage.getItem("theme");function h(){!0!==t.checked?(s.classList.add("dark-theme"),s.classList.remove("light-theme"),m.classList.add("dark-theme"),m.classList.remove("light-theme"),d.classList.add("dark-theme"),d.classList.remove("light-theme"),localStorage.setItem("theme",e.DARK)):(s.classList.add("light-theme"),s.classList.remove("dark-theme"),m.classList.add("light-theme"),m.classList.remove("dark-theme"),d.classList.add("light-theme"),d.classList.remove("dark-theme"),localStorage.setItem("theme",e.LIGHT))}l||(localStorage.setItem("theme",e.DARK),s.classList.add("dark-theme")),l===e.LIGHT?(s.classList.add("light-theme"),s.classList.remove("dark-theme"),m.classList.add("light-theme"),m.classList.remove("dark-theme"),d.classList.add("light-theme"),d.classList.remove("dark-theme"),t.checked=!0):l===e.DARK&&(s.classList.add("dark-theme"),s.classList.remove("light-theme"),m.classList.add("dark-theme"),m.classList.remove("light-theme"),d.classList.add("dark-theme"),d.classList.remove("light-theme"));
},{}]},{},["keXy"], null)
//# sourceMappingURL=/event-booster-app/theme-switcher.fc00f896.js.map