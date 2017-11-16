/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var STATUS_OK = "Готов",
    STATUS_WAITING = "Ожидание",
    STATUS_ERROR = "Ошибка",
    METHOD_GET_USER = "users.get",
    METHOD_SEARCH_USERS = "users.search",
    VERSION = "5.52";

module.exports = { STATUS_OK: STATUS_OK, STATUS_WAITING: STATUS_WAITING, STATUS_ERROR: STATUS_ERROR, METHOD_GET_USER: METHOD_GET_USER, METHOD_SEARCH_USERS: METHOD_SEARCH_USERS, VERSION: VERSION };

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var urlController = function () {
    function urlController(store) {
        _classCallCheck(this, urlController);

        this.store = store;
    }

    _createClass(urlController, [{
        key: "getToken",
        value: function getToken() {
            return urlController.getParam('access_token=');
        }
    }, {
        key: "getSearchData",
        value: function getSearchData() {
            var text = urlController.getParam("search_text="),
                itemsCount = parseInt(urlController.getParam("items_count=")),
                scrollPosition = parseInt(urlController.getParam("scroll_position="));

            history.pushState(null, null, urlController.getCleanUrl());

            if (text === null) return null;
            return { text: text, itemsCount: itemsCount, scrollPosition: scrollPosition };
        }
    }, {
        key: "setUrlSearch",
        value: function setUrlSearch() {
            this.setParam("search_text=", this.store.search.getValue());
            this.setParam("items_count=", this.store.usersCount);
            this.setParam("scroll_position=", this.store.usersList.getScrollPosition());
        }
    }, {
        key: "setParam",
        value: function setParam(param, value) {
            var url = window.location.href;
            if (url.indexOf(param, 0) === -1) return this.addParam(param, value);

            var start = url.indexOf(param, 0) + param.length;
            var end = url.indexOf('&', start);
            end = end === -1 ? url.length : end;

            history.pushState(null, null, url.substring(0, start) + value + url.substring(end, url.length));
        }
    }, {
        key: "addParam",
        value: function addParam(param, value) {
            var url = window.location.href;

            if (url.indexOf("=", 0) === -1) {
                if (url.substring(url.length - 1, url.length) === "#") {
                    window.location.href = url + param + value;
                } else {
                    window.location.href = url + "#" + param + value;
                }
            } else {
                if (url.substring(url.length - 1, url.length) === "&") {
                    window.location.href = url + param + value;
                } else {
                    window.location.href = url + "&" + param + value;
                }
            }
        }
    }], [{
        key: "goToMainPage",
        value: function goToMainPage(text) {
            document.location.href = urlController.getCleanUrl() + "#search_text=" + text;
        }
    }, {
        key: "getNewToken",
        value: function getNewToken() {
            document.location.href = "https://oauth.vk.com/authorize?client_id=6105599&display=page&redirect_uri=" + this.getCleanUrl() + "&scope=friends&response_type=token&v=5.6";
        }
    }, {
        key: "goToUserPage",
        value: function goToUserPage(id) {
            var buffer = urlController.getId(id, "element-text-");
            if (buffer) return window.location.href = urlController.getCleanUrl() + "/user#id=" + buffer;
            buffer = urlController.getId(id, "element-img-");
            if (buffer) return window.location.href = urlController.getCleanUrl() + "/user#id=" + buffer;
            window.location.href = urlController.getCleanUrl() + "/user#id=" + urlController.getId(id, "element-");
        }
    }, {
        key: "getCleanUrl",
        value: function getCleanUrl() {
            var url = window.location.href;
            var end = url.indexOf("/", 8);
            end = end === -1 ? url.length : end;
            url = url.substring(0, end);
            return url.indexOf("localhost:8080", 0) === -1 ? url : url + "/dust";
        }
    }, {
        key: "getParam",
        value: function getParam(param) {
            var url = window.location.href;
            if (url.indexOf(param, 0) === -1) return null;

            var start = url.indexOf(param, 0) + param.length;
            var end = url.indexOf('&', start);
            end = end === -1 ? url.length : end;
            return url.substring(start, end);
        }
    }, {
        key: "getId",
        value: function getId(text, id) {
            if (text.indexOf(id, 0) === -1) return null;
            return text.substring(id.length, text.length);
        }
    }]);

    return urlController;
}();

module.exports = urlController;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsonp = __webpack_require__(6),
    _require = __webpack_require__(0),
    VERSION = _require.VERSION,
    METHOD_SEARCH_USERS = _require.METHOD_SEARCH_USERS,
    STATUS_WAITING = _require.STATUS_WAITING,
    STATUS_ERROR = _require.STATUS_ERROR,
    STATUS_OK = _require.STATUS_OK;

var request = function () {
    function request(store) {
        _classCallCheck(this, request);

        this.store = store;
        this.requesting = false;
    }

    _createClass(request, [{
        key: "sendRequest",
        value: function sendRequest(method, params, callback) {
            var _this = this;

            params.v = VERSION;
            params.access_token = this.store.token;

            var paramsString = null;
            for (var name in params) {
                if (paramsString === null) {
                    paramsString = name + "=" + params[name];
                } else {
                    paramsString = paramsString + "&" + name + "=" + params[name];
                }
            }

            this.store.statusBar.setStatus(STATUS_WAITING);

            jsonp("https://api.vk.com/method/" + method + "?" + paramsString, null, function (errorData, data) {
                if (errorData) {
                    console.log(errorData);
                    _this.store.statusBar.setStatus(STATUS_ERROR);
                    callback(errorData, null);
                    return;
                }

                if (data.error) {
                    console.log(data.error);
                    _this.store.statusBar.setStatus(STATUS_ERROR);
                    callback(data.error, null);
                } else {
                    _this.store.statusBar.setStatus(STATUS_OK);
                    callback(errorData, data.response);
                }
            });
        }
    }, {
        key: "loadNewUsers",
        value: function loadNewUsers() {
            var _this2 = this;

            if (!this.requesting) {
                this.requesting = true;
                this.store.usersList.addAlertLoading();

                this.sendRequest(METHOD_SEARCH_USERS, {
                    q: this.store.search.getValue(),
                    fields: 'photo_200',
                    count: 10,
                    offset: this.store.usersCount
                }, function (error, data) {
                    _this2.store.usersList.delAlert();
                    _this2.requesting = false;
                    if (error) return _this2.store.usersList.addAlertError();
                    _this2.store.usersList.addItems(data);
                    _this2.store.usersCount += 10;
                });
            }
        }
    }, {
        key: "startSearch",
        value: function startSearch(count, callback) {
            var _this3 = this;

            this.sendRequest(METHOD_SEARCH_USERS, {
                q: this.store.search.getValue(),
                fields: 'photo_200',
                count: count
            }, function (error, data) {
                _this3.store.usersList.cleaning();
                _this3.store.usersList.addItems(data);
                _this3.store.usersCount = count;
                if (callback) callback();
            });
        }
    }]);

    return request;
}();

module.exports = request;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(7)('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(9);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(10);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cookie = function () {
    function cookie() {
        _classCallCheck(this, cookie);
    }

    _createClass(cookie, [{
        key: "getCookie",
        value: function getCookie() {
            //document.cookie = `token=q;max-age=0;path=/`;
            //document.cookie = `token=gmmasgndjlgmsldgnkasdad243254345764;max-age=2678400;path=/`;

            var cookie = document.cookie;

            var name = "token";
            if (cookie.indexOf("token", 0) === -1) {
                return null;
            } else {
                var start = cookie.indexOf(name, 0) + name.length + 1;
                var end = cookie.indexOf(';', start);

                if (end === -1) {
                    return cookie.substring(start, cookie.length);
                }
                return cookie.substring(start, end);
            }
        }
    }, {
        key: "setCookie",
        value: function setCookie(token) {
            document.cookie = "token=" + token + ";max-age=2678400;path=/";
        }
    }]);

    return cookie;
}();

module.exports = cookie;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0),
    STATUS_OK = _require.STATUS_OK,
    STATUS_WAITING = _require.STATUS_WAITING,
    STATUS_ERROR = _require.STATUS_ERROR;

var statusBar = function () {
    function statusBar() {
        _classCallCheck(this, statusBar);

        this.loading = document.getElementById("status-bar__loading");
        this.ok = document.getElementById("status-bar__ok");
        this.error = document.getElementById("status-bar__error");
    }

    _createClass(statusBar, [{
        key: "setStatus",
        value: function setStatus(status) {
            switch (status) {
                case STATUS_OK:
                    this.error.style.display = "none";
                    this.loading.style.display = "none";
                    this.ok.style.display = "block";
                    break;

                case STATUS_WAITING:
                    this.error.style.display = "none";
                    this.loading.style.display = "block";
                    this.ok.style.display = "none";
                    break;

                case STATUS_ERROR:
                    this.error.style.display = "block";
                    this.loading.style.display = "none";
                    this.ok.style.display = "none";
                    break;
            }
        }
    }]);

    return statusBar;
}();

module.exports = statusBar;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userData = function () {
    function userData() {
        _classCallCheck(this, userData);

        this.text = document.getElementById("user-data__text");
    }

    _createClass(userData, [{
        key: "setUser",
        value: function setUser(data) {
            this.text.textContent = data[0].first_name + " " + data[0].last_name;
        }
    }]);

    return userData;
}();

module.exports = userData;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        document.write('<script src="./style-mobile.js"></script>');
    } else {
        document.write('<script src="./style.js"></script>');
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var request = __webpack_require__(5),
    cookie = __webpack_require__(11),
    search = __webpack_require__(16),
    statusBar = __webpack_require__(12),
    userData = __webpack_require__(13),
    usersList = __webpack_require__(17),
    urlController = __webpack_require__(4),
    checkDevice = __webpack_require__(14),
    _require = __webpack_require__(0),
    METHOD_GET_USER = _require.METHOD_GET_USER,
    store = {};


checkDevice();
store.urlController = new urlController(store);
store.cookie = new cookie();

store.token = store.urlController.getToken();

if (store.token === null) {
    store.token = store.cookie.getCookie();
} else {
    store.cookie.setCookie(store.token);
}

if (store.token === null) {
    urlController.getNewToken();
} else {
    store.request = new request(store);
    store.userData = new userData(store);
    store.search = new search(store);
    store.statusBar = new statusBar(store);
    store.usersList = new usersList(store);

    store.request.sendRequest(METHOD_GET_USER, {}, function (error, data) {
        if (error) return urlController.getNewToken();
        store.userData.setUser(data);
    });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var search = function () {
    function search(store) {
        var _this = this;

        _classCallCheck(this, search);

        this.store = store;
        this.input = document.getElementById("search__input");
        this.input.onkeydown = function (e) {
            if (e.keyCode === 13) {
                if (_this.getValue() === "" || _this.getValue() === null) {
                    _this.store.usersList.cleaning();
                } else {
                    _this.store.request.startSearch(10);
                }
            }
        };
    }

    _createClass(search, [{
        key: "getValue",
        value: function getValue() {
            return this.input.value;
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            this.input.value = value;
        }
    }]);

    return search;
}();

module.exports = search;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var urlController = __webpack_require__(4);

var usersList = function () {
    function usersList(store) {
        var _this = this;

        _classCallCheck(this, usersList);

        this.store = store;
        this.isEnd = false;
        this.items = [];
        this.list = document.getElementById("content__scroll");

        this.list.onscroll = function () {
            if (_this.list.scrollTop + _this.list.clientHeight >= _this.list.scrollHeight - 100 && !_this.isEnd) _this.store.request.loadNewUsers();
        };

        var searchData = store.urlController.getSearchData();
        if (!searchData) return;

        this.store.search.setValue(searchData.text);
        this.store.request.startSearch(searchData.itemsCount ? searchData.itemsCount : 10, function () {
            if (!searchData.scrollPosition) return;
            _this.list.scrollTop = searchData.scrollPosition;
        });
    }

    _createClass(usersList, [{
        key: "addItems",
        value: function addItems(_ref) {
            var items = _ref.items;

            if (!items || items.length === 0) {
                this.addAlertEnd();
                this.isEnd = true;
            }

            this.items = this.items.concat(items);

            var dataLine = "";
            for (var key in items) {
                var img = "https://akphoto3.ask.fm/095/881/054/-99997000-1tq2mj8-915nosf68ntdrap/original/file.jpg";
                img = items[key].photo_200 ? items[key].photo_200 : img;
                dataLine += "<div id=\"element-" + items[key].id + "\" class=\"element\"><img id=\"element-img-" + items[key].id + "\" class=\"element__img\" src=\"" + img + "\"/><h1 id=\"element-text-" + items[key].id + "\" class=\"element__text\">" + items[key].first_name + " " + items[key].last_name + "</h1></div>";
            }
            this.list.innerHTML += dataLine;

            this.addOnClicks();
        }
    }, {
        key: "cleaning",
        value: function cleaning() {
            this.isEnd = false;
            this.list.innerHTML = "";
            this.items = [];
            this.list.scrollTop = 0;
        }
    }, {
        key: "addAlertLoading",
        value: function addAlertLoading() {
            this.list.innerHTML += "<div class=\"alert-element\" id=\"alert-element\"><div class=\"alert-element__loader\"></div></div>";
            this.addOnClicks();
        }
    }, {
        key: "addAlertError",
        value: function addAlertError() {
            this.list.innerHTML += "<div id=\"alert-element\" class=\"alert-element\"><h1 class=\"alert-element__text\">\u041E\u0448\u0438\u0431\u043A\u0430</h1></div>";
            this.isEnd = true;
            this.addOnClicks();
        }
    }, {
        key: "delAlert",
        value: function delAlert() {
            this.list.removeChild(document.getElementById("alert-element"));
        }
    }, {
        key: "addAlertEnd",
        value: function addAlertEnd() {
            this.list.innerHTML += "<div id=\"alert-element\" class=\"alert-element\"><h1 class=\"alert-element__text\">\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445</h1></div>";
            this.addOnClicks();
        }
    }, {
        key: "getScrollPosition",
        value: function getScrollPosition() {
            return this.list.scrollTop;
        }
    }, {
        key: "addOnClicks",
        value: function addOnClicks() {
            var _this2 = this;

            for (var key in this.items) {
                document.getElementById("element-" + this.items[key].id).onclick = function (e) {
                    _this2.store.urlController.setUrlSearch();
                    urlController.goToUserPage(e.srcElement.id);
                };
            }
        }
    }]);

    return usersList;
}();

module.exports = usersList;

/***/ })
/******/ ]);