!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=27)}({1:function(t,e){function r(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var a=n(o);return[r].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([a]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},2:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=h[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(d(n.parts[a],e))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(d(n.parts[a],e));h[n.id]={id:n.id,refs:1,parts:i}}}}function o(t,e){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s=a[1],l=a[2],c=a[3],d={css:s,media:l,sourceMap:c};n[i]?n[i].parts.push(d):r.push(n[i]={id:i,parts:[d]})}return r}function a(t,e){var r=v(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),b.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=v(t.insertInto+" "+t.insertAt.before);r.insertBefore(e,o)}}function i(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),a(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),a(t,e),e}function c(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function d(t,e){var r,n,o,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var c=m++;r=w||(w=s(e)),n=u.bind(null,r,c,!1),o=u.bind(null,r,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(e),n=f.bind(null,r,e),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(e),n=p.bind(null,r),o=function(){i(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function u(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function p(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function f(t,e,r){var n=r.css,o=r.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(n=_(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var h={},g=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(r){if(void 0===e[r]){var n=t.call(this,r);if(n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[r]=n}return e[r]}}(function(t){return document.querySelector(t)}),w=null,m=0,b=[],_=r(3);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=g()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=o(t,e);return n(r,e),function(t){for(var a=[],i=0;i<r.length;i++){var s=r[i],l=h[s.id];l.refs--,a.push(l)}if(t){n(o(t,e),e)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete h[l.id]}}}};var y=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},27:function(t,e,r){var n=r(28);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0};o.transform=void 0;r(2)(n,o);n.locals&&(t.exports=n.locals)},28:function(t,e,r){e=t.exports=r(1)(void 0),e.push([t.i,'*{margin:0;padding:0;border:0}body,html{height:100%;width:100%;overflow-x:hidden}@media only screen and (max-width:900px){body,html{overflow-x:auto}}.site{height:100%;background-color:#333}.content,.site{display:block;width:100%}.content{height:91%}@media only screen and (orientation:landscape){.content{height:89%}}.content__window{border-left:2px solid #000;border-right:2px solid #000;margin:0 auto;display:table}.content__scroll{background-color:#333;height:100%;overflow-y:auto}.content__window{width:100%;height:100%}.chat__text-new-message{font-size:3vmax;min-height:10%;max-height:30%}.chat__send-new-message{width:10%;font-size:2vmax}@media only screen and (orientation:landscape){.chat__text-new-message{width:100%;font-size:3vmax;min-height:10%;max-height:30%}.chat__send-new-message{font-size:2vmax}}.navigation-bar__container{background-color:#333;display:table}.navigation-bar{border-bottom:2px solid #000}.navigation-bar__left,.navigation-bar__right{display:inline-block}.navigation-bar__right{float:right}.user-data{vertical-align:top}.user-data__text{color:#ccc}.search__input{border:2px solid #000;background-color:#666}@-ms-keyframes spin{0%{-ms-transform:rotate(0deg)}to{-ms-transform:rotate(1turn)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(1turn)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.status-bar__loading{display:block;border-radius:100%;-webkit-animation:spin .6s infinite linear;-moz-animation:spin .6s infinite linear;-ms-animation:spin .6s infinite linear;animation:spin .6s infinite linear}.status-bar__ok{display:none;background-color:green;border-radius:100%}.status-bar__error{display:none;background-color:red;border-radius:100%}.navigation-bar__container{height:25vw;width:100%}@media only screen and (orientation:landscape){.navigation-bar__container{height:12.5vw}}.go-to-back{cursor:pointer;display:inline-block;margin:1.5vw 0 -1.2vw 15px;border-right:2px solid #000}.go-to-back__arrow{width:0;height:0;border:3vw solid transparent;border-top-color:#ccc;margin:0;padding:0;float:left;transform:rotate(90deg) translateY(25px);-webkit-transform:rotate(90deg) translateY(25px);-moz-transform:rotate(90deg) translateY(25px);-o-transform:rotate(90deg) translateY(25px);-ms-transform:rotate(90deg) translateY(25px)}.go-to-back__arrow:before{content:"";width:0;height:0;border:1.8vw solid transparent;border-top-color:#333;display:inline-block;-webkit-transform:translate(-1.8vw,-3vw)}@media only screen and (orientation:landscape){.go-to-back{cursor:pointer;display:inline-block;margin:.75vw 0 -.6vw 15px;border-right:2px solid #000}.go-to-back__arrow{border:1.5vw solid transparent;border-top-color:#ccc}.go-to-back__arrow:before{border:.9vw solid transparent;border-top-color:#333;-webkit-transform:translate(-.9vw,-1.5vw)}}.user-data{font-size:3vw;margin:2vw 3vw}@media only screen and (orientation:landscape){.user-data{font-size:1.5vw;margin:1vw 3vw}}.search{width:98vw;margin-left:1vw;margin-right:1vw;height:11vw}.search__input{font-size:7vw;width:89vw;height:10vw;margin:0 5vw}@media only screen and (orientation:landscape){.search{width:98vw;margin-left:1vw;margin-right:1vw;height:5.5vw}.search__input{font-size:3.5vw;width:89vw;height:5vw;margin:0 5vw}}.status-bar__loading{margin:2vw 5vw;width:5vw;height:5vw;border:1vw solid transparent;border-left-color:#000;border-right-color:#000}.status-bar__error,.status-bar__ok{margin:3vw 6vw;width:5vw;height:5vw}@media only screen and (orientation:landscape){.status-bar__loading{margin:1vw 5vw;width:2.5vw;height:2.5vw;border:.5vw solid transparent;border-left-color:#000;border-right-color:#000}.status-bar__error,.status-bar__ok{margin:1.5vw 6vw;width:2.5vw;height:2.5vw}}.user-page-content__item,.user-page-title__city,.user-page-title__name,.user-page-title__online,.user-page-title__status,.user-page-title__work{color:#000}.user-page-title{padding:3vw}.user-page-title__online,.user-page-title__status{font-size:5vw}.user-page-title__name{font-size:6vw}.user-page-title_top{display:block}.user-page-title_right{display:none}.user-page-state{padding:3vw}.user-page-state_bottom{display:block}.user-page-state_right{display:none}.user-page-title__city,.user-page-title__work{font-size:5vw}.user-page-img__img{width:90%;height:90%;margin:5%}.user-page-content{padding:3vw}.user-page-content__item{font-size:5vw}.top-user-data-container{display:table;width:100%}.top-user-data-container__img,.top-user-data-container__text{display:table-cell}.top-user-data-container__text{vertical-align:top;text-align:right;width:100%;display:none}.top-user-data-container__img{width:100%}',""])},3:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}}});