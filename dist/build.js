!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("aw-ui",[],t):"object"==typeof exports?exports["aw-ui"]=t():e["aw-ui"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var r=n(9);r.c,r.a,r.b;t.a={name:"aw-tag",props:{size:String,type:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String},computed:{b:function(){var e="";switch(this.round&&(e="aw-tag--round "),this.mark&&(e+="aw-tag--mark "),this.plain&&(e+="aw-tag--plain aw-hairline--surround "),this.type){case"primary":e+="aw-tag--primary";break;case"success":e+="aw-tag--success";break;case"danger":e+="aw-tag--danger";break;case"warning":e+="aw-tag--warning";break;default:e+="aw-tag--default"}return e},style:function(){var e={};return this.color&&!this.plain&&(e.backgroundColor=this.color),this.textColor&&(e.color=this.textColor),e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);n.d(t,"Tag",function(){return r.a});var a=[r.a],o=function(e){a.forEach(function(t){e.use(t)})};"undefined"!=typeof window&&window.Vue&&o(window.Vue),t.default={version:"1.0.0",install:o}},function(e,t,n){"use strict";function r(e){n(3)}var a=n(0),o=n(10),i=n(8),s=r,u=i(a.a,o.a,!1,s,"data-v-78145908",null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("b2d165ea",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,'[class*=aw-hairline][data-v-78145908]:after{content:" ";position:absolute;box-sizing:border-box;pointer-events:none;width:200%;height:200%;border:0 solid #323233;transform:scale(.5);left:0;top:0;transform-origin:left top}.aw-hairline--surround[data-v-78145908]:after{border-width:1px}.aw-tag[data-v-78145908]{position:relative;color:currentColor;font-size:20px;line-height:20px;padding:6px;border-radius:2px;display:inline-block;vertical-align:baseline;transform:scale(.5)}.aw-tag--default[data-v-78145908]{background:rgba(143,159,177,.15)}.aw-tag--primary[data-v-78145908]{background:#1989fa}.aw-tag--success[data-v-78145908]{background:#07c160}.aw-tag--danger[data-v-78145908]{background:#ee0a24}.aw-tag--warning[data-v-78145908]{background:#ff976a}.aw-tag--plain[data-v-78145908]{background:#fff}.aw-tag--mark[data-v-78145908]{padding-right:.6em;border-radius:0 .8em .8em 0}.aw-tag--mark[data-v-78145908]:after{border-radius:0 1.6em 1.6em 0}.aw-tag--round[data-v-78145908]{border-radius:.8em}.aw-tag--round[data-v-78145908]:after{border-radius:1.6em}.aw-tag--medium[data-v-78145908]{font-size:12px}.aw-tag--large[data-v-78145908]{font-size:14px}',""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));c[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(g)return v;r.parentNode.removeChild(r)}if(b){var o=p++;r=l||(l=a()),t=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),h.ssrId&&e.setAttribute(m,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,g=!1,v=function(){},h=null,m="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){g=n,h=a||{};var o=d(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=c[i.id];s.refs--,n.push(s)}t?(o=d(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],u=o[2],d=o[3],c={id:e+":"+a,css:s,media:u,sourceMap:d};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,r,a,o){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId=a);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=c):r&&(c=r),c){var f=d.functional,l=f?d.render:d.beforeCreate;f?(d._injectStyles=c,d.render=function(e,t){return c.call(t),l(e,t)}):d.beforeCreate=l?[].concat(l,c):[c]}return{esModule:i,exports:s,options:d}}},function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var r="#f44",a="#1989fa",o="#4b0"},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"aw-tag",class:e.b,style:e.style},[e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o}])});
//# sourceMappingURL=build.js.map