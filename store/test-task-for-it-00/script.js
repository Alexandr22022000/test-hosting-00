!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=23)}([function(e,t,n){"use strict";e.exports={STATUS_OK:"Готов",STATUS_WAITING:"Ожидание",STATUS_ERROR:"Ошибка",PARAM_TOKEN:"access_token",PARAM_SEARCH_TEXT:"search_text",PARAM_ITEMS_COUNT:"items_count",PARAM_SCROLL_POSITION:"scroll_position",PARAM_ID:"id",METHOD_GET_USER:"users.get",METHOD_SEARCH_USERS:"users.search",VERSION:"5.52"}},,,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),i=s.PARAM_TOKEN,a=s.PARAM_SEARCH_TEXT,u=s.PARAM_ITEMS_COUNT,l=s.PARAM_SCROLL_POSITION,c=s.PARAM_ID,f=function(){function e(t){r(this,e),this.store=t}return o(e,[{key:"getToken",value:function(){return e.getParam(i)}},{key:"getSearchData",value:function(){var t=e.getParam(a),n=parseInt(e.getParam(u)),r=parseInt(e.getParam(l));return history.pushState(null,null,e.getCleanUrl()),null===t?null:{text:t,itemsCount:n,scrollPosition:r}}},{key:"setUrlSearch",value:function(){this.setParam(a,this.store.search.getValue()),this.setParam(u,this.store.usersCount),this.setParam(l,this.store.usersList.getScrollPosition())}},{key:"setParam",value:function(e,t){e+="=";var n=window.location.href;if(-1===n.indexOf(e,0))return this.addParam(e,t);var r=n.indexOf(e,0)+e.length,o=n.indexOf("&",r);o=-1===o?n.length:o,history.pushState(null,null,n.substring(0,r)+t+n.substring(o,n.length))}},{key:"addParam",value:function(e,t){var n=window.location.href;-1===n.indexOf("=",0)?"#"===n.substring(n.length-1,n.length)?window.location.href=n+e+t:window.location.href=n+"#"+e+t:"&"===n.substring(n.length-1,n.length)?window.location.href=n+e+t:window.location.href=n+"&"+e+t}}],[{key:"goToMainPage",value:function(t){document.location.href=e.getCleanUrl()+"#"+a+"="+t}},{key:"getNewToken",value:function(){document.location.href="https://oauth.vk.com/authorize?client_id=6261615&display=page&redirect_uri="+this.getCleanUrl()+"&scope=friends&response_type=token&v=5.6"}},{key:"goToUserPage",value:function(t){var n=e.getId(t,"element-text-");return n?window.location.href=e.getCleanUrl()+"/user#"+c+"="+n:(n=e.getId(t,"element-img-"))?window.location.href=e.getCleanUrl()+"/user#"+c+"="+n:void(window.location.href=e.getCleanUrl()+"/user#"+c+"="+e.getId(t,"element-"))}},{key:"getCleanUrl",value:function(){var e=window.location.href,t=e.indexOf("/",8);return t=-1===t?e.length:t,e=e.substring(0,t),e=-1===e.indexOf("localhost:8080",0)?e:e+"/dust",e=-1===e.indexOf("test-hosting-00",0)?e:e+"/test-task-for-it-00"}},{key:"getParam",value:function(e){e+="=";var t=window.location.href;if(-1===t.indexOf(e,0))return null;var n=t.indexOf(e,0)+e.length,r=t.indexOf("&",n);return r=-1===r?t.length:r,t.substring(n,r)}},{key:"getId",value:function(e,t){return-1===e.indexOf(t,0)?null:e.substring(t.length,e.length)}}]),e}();e.exports=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(){r(this,e)}return o(e,[{key:"getCookie",value:function(){var e=document.cookie;if(-1===e.indexOf("token",0))return null;var t=e.indexOf("token",0)+"token".length+1,n=e.indexOf(";",t);return-1===n?e.substring(t,e.length):e.substring(t,n)}},{key:"setCookie",value:function(e){document.cookie="token="+e+";max-age=2678400;path=/"}}]),e}();e.exports=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(12),i=n(0),a=i.VERSION,u=i.METHOD_SEARCH_USERS,l=i.STATUS_WAITING,c=i.STATUS_ERROR,f=i.STATUS_OK,d=function(){function e(t){r(this,e),this.store=t,this.requesting=!1}return o(e,[{key:"sendRequest",value:function(e,t,n){var r=this;t.v=a,t.access_token=this.store.token;var o=null;for(var i in t)o=null===o?i+"="+t[i]:o+"&"+i+"="+t[i];this.store.statusBar.setStatus(l),s("https://api.vk.com/method/"+e+"?"+o,null,function(e,t){if(e)return console.log(e),r.store.statusBar.setStatus(c),void n(e,null);t.error?(console.log(t.error),r.store.statusBar.setStatus(c),n(t.error,null)):(r.store.statusBar.setStatus(f),n(e,t.response))})}},{key:"loadNewUsers",value:function(){var e=this;this.requesting||(this.requesting=!0,this.store.usersList.addAlertLoading(),this.sendRequest(u,{q:this.store.search.getValue(),fields:"photo_200",count:10,offset:this.store.usersCount},function(t,n){if(e.store.usersList.delAlert(),e.requesting=!1,t)return e.store.usersList.addAlertError();e.store.usersList.addItems(n),e.store.usersCount+=10}))}},{key:"startSearch",value:function(e,t){var n=this;this.sendRequest(u,{q:this.store.search.getValue(),fields:"photo_200",count:e},function(r,o){n.store.usersList.cleaning(!1),n.store.usersList.addItems(o),n.store.usersCount=e,t&&t()})}}]),e}();e.exports=d},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),i=s.STATUS_OK,a=s.STATUS_WAITING,u=s.STATUS_ERROR,l=function(){function e(){r(this,e),this.loading=document.getElementById("status-bar__loading"),this.ok=document.getElementById("status-bar__ok"),this.error=document.getElementById("status-bar__error")}return o(e,[{key:"setStatus",value:function(e){switch(e){case i:this.error.style.display="none",this.loading.style.display="none",this.ok.style.display="block";break;case a:this.error.style.display="none",this.loading.style.display="block",this.ok.style.display="none";break;case u:this.error.style.display="block",this.loading.style.display="none",this.ok.style.display="none"}}}]),e}();e.exports=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(){r(this,e),this.text=document.getElementById("user-data__text")}return o(e,[{key:"setUser",value:function(e){this.text.textContent=e[0].first_name+" "+e[0].last_name}}]),e}();e.exports=s},function(e,t,n){"use strict";e.exports=function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?document.write('<script src="./style-mobile.js"><\/script>'):document.write('<script src="./style.js"><\/script>')}},function(e,t,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function s(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,r)}}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function u(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}t=e.exports=n(11),t.log=i,t.formatArgs=s,t.save=a,t.load=u,t.useColors=o,t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(u())}).call(t,n(14))},function(e,t,n){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function o(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(l||r);e.diff=o,e.prev=l,e.curr=r,l=r;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var a=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;a++;var o=t.formatters[r];if("function"==typeof o){var i=s[a];n=o.call(e,i),s.splice(a,1),a--}return n}),t.formatArgs.call(e,s);(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"==typeof t.init&&t.init(n),n}function s(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function a(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=o.debug=o.default=o,t.coerce=u,t.disable=i,t.enable=s,t.enabled=a,t.humanize=n(13),t.names=[],t.skips=[],t.formatters={};var l},function(e,t,n){function r(){}function o(e,t,n){function o(){u.parentNode&&u.parentNode.removeChild(u),window[f]=r,l&&clearTimeout(l)}function a(){window[f]&&o()}"function"==typeof t&&(n=t,t={}),t||(t={});var u,l,c=t.prefix||"__jp",f=t.name||c+i++,d=t.param||"callback",h=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,g=document.getElementsByTagName("script")[0]||document.head;return h&&(l=setTimeout(function(){o(),n&&n(new Error("Timeout"))},h)),window[f]=function(e){s("jsonp got",e),o(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+d+"="+m(f),e=e.replace("?&","?"),s('jsonp req "%s"',e),u=document.createElement("script"),u.src=e,g.parentNode.insertBefore(u,g),a}var s=n(10)("jsonp");e.exports=o;var i=0},function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*c;case"days":case"day":case"d":return n*l;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){return e>=l?Math.round(e/l)+"d":e>=u?Math.round(e/u)+"h":e>=a?Math.round(e/a)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function o(e){return s(e,l,"day")||s(e,u,"hour")||s(e,a,"minute")||s(e,i,"second")||e+" ms"}function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var i=1e3,a=60*i,u=60*a,l=24*u,c=365.25*l;e.exports=function(e,t){t=t||{};var s=typeof e;if("string"===s&&e.length>0)return n(e);if("number"===s&&!1===isNaN(e))return t.long?o(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function s(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){g&&h&&(g=!1,h.length?m=h.concat(m):p=-1,m.length&&a())}function a(){if(!g){var e=o(i);g=!0;for(var t=m.length;t;){for(h=m,m=[];++p<t;)h&&h[p].run();p=-1,t=m.length}h=null,g=!1,s(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var c,f,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var h,m=[],g=!1,p=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||g||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){var n=this;r(this,e),this.store=t,this.input=document.getElementById("search__input"),this.input.onkeydown=function(e){13===e.keyCode&&(""===n.getValue()||null===n.getValue()?n.store.usersList.cleaning(!0):n.store.request.startSearch(10))}}return o(e,[{key:"getValue",value:function(){return this.input.value}},{key:"setValue",value:function(e){this.input.value=e}}]),e}();e.exports=s},,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),i=function(){function e(t){var n=this;r(this,e),this.store=t,this.isEnd=!1,this.items=[],this.list=document.getElementById("content__scroll"),this.list.onscroll=function(){n.list.scrollTop+n.list.clientHeight>=n.list.scrollHeight-100&&!n.isEnd&&n.store.request.loadNewUsers()};var o=t.urlController.getSearchData();o&&""!==o.text&&(this.store.search.setValue(o.text),this.store.request.startSearch(o.itemsCount?o.itemsCount:10,function(){o.scrollPosition&&(n.list.scrollTop=o.scrollPosition)}))}return o(e,[{key:"addItems",value:function(e){var t=e.items;t&&0!==t.length||(this.addAlertEnd(),this.isEnd=!0),this.items=this.items.concat(t);var n="";for(var r in t){var o="https://akphoto3.ask.fm/095/881/054/-99997000-1tq2mj8-915nosf68ntdrap/original/file.jpg";o=t[r].photo_200?t[r].photo_200:o,n+='<div id="element-'+t[r].id+'" class="element"><img id="element-img-'+t[r].id+'" class="element__img" src="'+o+'"/><h1 id="element-text-'+t[r].id+'" class="element__text">'+t[r].first_name+" "+t[r].last_name+"</h1></div>"}this.list.innerHTML+=n,this.addOnClicks()}},{key:"cleaning",value:function(e){this.isEnd=!1,this.list.innerHTML=e?'<div class="alert-element" id="alert-element"><h1 class="alert-element__text">Введите поисковый запрос</h1></div>':"",this.items=[],this.list.scrollTop=0}},{key:"addAlertLoading",value:function(){this.list.innerHTML+='<div class="alert-element" id="alert-element"><div class="alert-element__loader"></div></div>',this.addOnClicks()}},{key:"addAlertError",value:function(){this.list.innerHTML+='<div id="alert-element" class="alert-element"><h1 class="alert-element__text">Ошибка</h1></div>',this.isEnd=!0,this.addOnClicks()}},{key:"delAlert",value:function(){this.list.removeChild(document.getElementById("alert-element"))}},{key:"addAlertEnd",value:function(){this.list.innerHTML+='<div id="alert-element" class="alert-element"><h1 class="alert-element__text">Нет данных</h1></div>',this.addOnClicks()}},{key:"getScrollPosition",value:function(){return this.list.scrollTop}},{key:"addOnClicks",value:function(){var e=this;for(var t in this.items)document.getElementById("element-"+this.items[t].id).onclick=function(t){e.store.urlController.setUrlSearch(),s.goToUserPage(t.srcElement.id)}}}]),e}();e.exports=i},,,,,function(e,t,n){"use strict";var r=n(6),o=n(5),s=n(16),i=n(7),a=n(8),u=n(18),l=n(4),c=n(9),f=n(0),d=f.METHOD_GET_USER,h={};c(),h.urlController=new l(h),h.cookie=new o,h.token=h.urlController.getToken(),null===h.token?h.token=h.cookie.getCookie():h.cookie.setCookie(h.token),null===h.token?l.getNewToken():(h.request=new r(h),h.userData=new a(h),h.search=new s(h),h.statusBar=new i(h),h.usersList=new u(h),h.request.sendRequest(d,{},function(e,t){if(e)return l.getNewToken();h.userData.setUser(t)}))}]);