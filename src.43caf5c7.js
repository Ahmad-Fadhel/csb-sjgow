parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=document.getElementById("addTodo"),t=document.getElementById("todoInput"),n=document.getElementById("todoListUl"),o=document.getElementById("todayDate"),l=document.getElementById("deadLine"),d=new Date,r=d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();function a(){var e=document.createElement("li"),o=document.createElement("p"),d=document.createElement("button"),r=document.createElement("button");r.style.width="40px",r.style.height="40px",r.innerHTML="🗑",r.style.fontSize="36px",r.style.border="none",r.style.paddingTop="5px",r.style.backgroundColor="transparent",r.style.outline="none",r.style.paddingRight="25px",r.style.marginRight="25px",r.style.marginBottom="10px",d.style.width="40px",d.style.height="40px",d.style.borderRadius="50%",d.style.outline="none",d.style.margin="10px 40px",d.style.paddingRight="25px",d.style.paddingLeft="10px",d.style.boxSizing="border-box",d.style.backgroundColor="#e2bf9f",o.style.fontSize="22px",o.style.paddingRight="22px",o.style.paddingTop="5px",o.style.wordBreak="break-word",o.style.margin="auto",o.style.boxSizing="border-box",o.innerText="".concat(t.value," ").concat(l.value),e.style.listStyleType="none",e.style.display="flex",e.style.flexDirection="row",e.style.backgroundColor="#fff0f5",e.style.margin="5px auto",e.style.borderRadius="4px",""!==t.value&&""!==l.value&&(e.append(o),e.append(r),e.insertAdjacentElement("afterbegin",d),n.append(e)),d.addEventListener("click",function(){d.style.backgroundColor="rgb(150, 10, 10)",d.style.borderTopColor="#c0a286",d.style.color="honeydew",d.style.fontSize="22px",d.style.textAlign="center",d.innerHTML="✔",e.style.backgroundColor="#cdaf95",o.style.textDecoration="line-through"}),r.addEventListener("click",function(){e.remove()})}o.append(r),e.addEventListener("click",a);
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-sjgow/src.43caf5c7.js.map