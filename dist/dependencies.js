/**
 @license
The MIT License

Copyright (c) 2016 Google, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

 */

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	var microtask = __webpack_require__(1);
	var es6Promise = __webpack_require__(2);
	var core = __webpack_require__(6);
	var browserPatch = __webpack_require__(10);
	if (core.Zone.prototype['scheduleMicrotask']) {
	    console.warn('Zone-microtasks already exported on window the object!');
	}
	else {
	    microtask.addMicrotaskSupport(core.Zone);
	    global.Zone = core.Zone;
	    global.zone = new global.Zone();
	    // Monkey patch the Promise implementation to add support for microtasks
	    global.Promise = es6Promise.Promise;
	    browserPatch.apply();
	}
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS1taWNyb3Rhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYnJvd3Nlci96b25lLW1pY3JvdGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFFYixJQUFZLFNBQVMsV0FBTSxjQUFjLENBQUMsQ0FBQTtBQUMxQyxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMxQyxJQUFZLElBQUksV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNoQyxJQUFZLFlBQVksV0FBTSxrQkFBa0IsQ0FBQyxDQUFBO0FBRWpELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBQUMsSUFBSSxDQUFDLENBQUM7SUFDTixTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhDLHdFQUF3RTtJQUN4RSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFFcEMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIG1pY3JvdGFzayBmcm9tICcuLi9taWNyb3Rhc2snO1xuaW1wb3J0ICogYXMgZXM2UHJvbWlzZSBmcm9tICdlczYtcHJvbWlzZSc7XG5pbXBvcnQgKiBhcyBjb3JlIGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0ICogYXMgYnJvd3NlclBhdGNoIGZyb20gJy4uL3BhdGNoL2Jyb3dzZXInO1xuXG5pZiAoY29yZS5ab25lLnByb3RvdHlwZVsnc2NoZWR1bGVNaWNyb3Rhc2snXSkge1xuICBjb25zb2xlLndhcm4oJ1pvbmUtbWljcm90YXNrcyBhbHJlYWR5IGV4cG9ydGVkIG9uIHdpbmRvdyB0aGUgb2JqZWN0IScpO1xufSBlbHNlIHtcbiAgbWljcm90YXNrLmFkZE1pY3JvdGFza1N1cHBvcnQoY29yZS5ab25lKTtcblxuICBnbG9iYWwuWm9uZSA9IGNvcmUuWm9uZTtcbiAgZ2xvYmFsLnpvbmUgPSBuZXcgZ2xvYmFsLlpvbmUoKTtcblxuICAvLyBNb25rZXkgcGF0Y2ggdGhlIFByb21pc2UgaW1wbGVtZW50YXRpb24gdG8gYWRkIHN1cHBvcnQgZm9yIG1pY3JvdGFza3NcbiAgZ2xvYmFsLlByb21pc2UgPSBlczZQcm9taXNlLlByb21pc2U7XG5cbiAgYnJvd3NlclBhdGNoLmFwcGx5KCk7XG59XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// TODO(vicb): Create a benchmark for the different methods & the usage of the queue
	// see https://github.com/angular/zone.js/issues/97
	// It is required to initialize hasNativePromise before requiring es6-promise otherwise es6-promise would
	// overwrite the native Promise implementation on v8 and the check would always return false.
	// see https://github.com/jakearchibald/es6-promise/issues/140
	var hasNativePromise = typeof Promise !== "undefined" &&
	    Promise.toString().indexOf("[native code]") !== -1;
	var isFirefox = global.navigator &&
	    global.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	var resolvedPromise;
	// TODO(vicb): remove '!isFirefox' when the bug gets fixed:
	// https://bugzilla.mozilla.org/show_bug.cgi?id=1162013
	if (hasNativePromise && !isFirefox) {
	    // When available use a native Promise to schedule microtasks.
	    // When not available, es6-promise fallback will be used
	    resolvedPromise = Promise.resolve();
	}
	var es6Promise = __webpack_require__(2).Promise;
	if (resolvedPromise) {
	    es6Promise._setScheduler(function (fn) {
	        resolvedPromise.then(fn);
	    });
	}
	// es6-promise asap should schedule microtasks via zone.scheduleMicrotask so that any
	// user defined hooks are triggered
	es6Promise._setAsap(function (fn, arg) {
	    global.zone.scheduleMicrotask(function () {
	        fn(arg);
	    });
	});
	// The default implementation of scheduleMicrotask use the original es6-promise implementation
	// to schedule a microtask
	function scheduleMicrotask(fn) {
	    es6Promise._asap(this.bind(fn));
	}
	function addMicrotaskSupport(zoneClass) {
	    zoneClass.prototype.scheduleMicrotask = scheduleMicrotask;
	    return zoneClass;
	}
	exports.addMicrotaskSupport = addMicrotaskSupport;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm90YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21pY3JvdGFzay50cyJdLCJuYW1lcyI6WyJzY2hlZHVsZU1pY3JvdGFzayIsImFkZE1pY3JvdGFza1N1cHBvcnQiXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjtBQUNwRixtREFBbUQ7QUFFbkQseUdBQXlHO0FBQ3pHLDZGQUE2RjtBQUM3Riw4REFBOEQ7QUFDOUQsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLE9BQU8sS0FBSyxXQUFXO0lBQ2pELE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFdkQsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7SUFDNUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRXJFLElBQUksZUFBZSxDQUFDO0FBRXBCLDJEQUEyRDtBQUMzRCx1REFBdUQ7QUFDdkQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25DLDhEQUE4RDtJQUM5RCx3REFBd0Q7SUFDeEQsZUFBZSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QyxDQUFDO0FBRUQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVoRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBUyxFQUFFO1FBQ2xDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQscUZBQXFGO0FBQ3JGLG1DQUFtQztBQUNuQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVMsRUFBRSxFQUFFLEdBQUc7SUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsOEZBQThGO0FBQzlGLDBCQUEwQjtBQUMxQiwyQkFBMkIsRUFBRTtJQUMzQkEsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDbENBLENBQUNBO0FBRUQsNkJBQW9DLFNBQVM7SUFDM0NDLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLGlCQUFpQkEsR0FBR0EsaUJBQWlCQSxDQUFDQTtJQUMxREEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7QUFDbkJBLENBQUNBO0FBSGUsMkJBQW1CLHNCQUdsQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETyh2aWNiKTogQ3JlYXRlIGEgYmVuY2htYXJrIGZvciB0aGUgZGlmZmVyZW50IG1ldGhvZHMgJiB0aGUgdXNhZ2Ugb2YgdGhlIHF1ZXVlXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTdcblxuLy8gSXQgaXMgcmVxdWlyZWQgdG8gaW5pdGlhbGl6ZSBoYXNOYXRpdmVQcm9taXNlIGJlZm9yZSByZXF1aXJpbmcgZXM2LXByb21pc2Ugb3RoZXJ3aXNlIGVzNi1wcm9taXNlIHdvdWxkXG4vLyBvdmVyd3JpdGUgdGhlIG5hdGl2ZSBQcm9taXNlIGltcGxlbWVudGF0aW9uIG9uIHY4IGFuZCB0aGUgY2hlY2sgd291bGQgYWx3YXlzIHJldHVybiBmYWxzZS5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9lczYtcHJvbWlzZS9pc3N1ZXMvMTQwXG52YXIgaGFzTmF0aXZlUHJvbWlzZSA9IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgUHJvbWlzZS50b1N0cmluZygpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcblxudmFyIGlzRmlyZWZveCA9IGdsb2JhbC5uYXZpZ2F0b3IgJiZcbiAgICBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuXG52YXIgcmVzb2x2ZWRQcm9taXNlO1xuXG4vLyBUT0RPKHZpY2IpOiByZW1vdmUgJyFpc0ZpcmVmb3gnIHdoZW4gdGhlIGJ1ZyBnZXRzIGZpeGVkOlxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTE2MjAxM1xuaWYgKGhhc05hdGl2ZVByb21pc2UgJiYgIWlzRmlyZWZveCkge1xuICAvLyBXaGVuIGF2YWlsYWJsZSB1c2UgYSBuYXRpdmUgUHJvbWlzZSB0byBzY2hlZHVsZSBtaWNyb3Rhc2tzLlxuICAvLyBXaGVuIG5vdCBhdmFpbGFibGUsIGVzNi1wcm9taXNlIGZhbGxiYWNrIHdpbGwgYmUgdXNlZFxuICByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbn1cblxudmFyIGVzNlByb21pc2UgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbmlmIChyZXNvbHZlZFByb21pc2UpIHtcbiAgZXM2UHJvbWlzZS5fc2V0U2NoZWR1bGVyKGZ1bmN0aW9uKGZuKSB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZm4pO1xuICB9KTtcbn1cblxuLy8gZXM2LXByb21pc2UgYXNhcCBzaG91bGQgc2NoZWR1bGUgbWljcm90YXNrcyB2aWEgem9uZS5zY2hlZHVsZU1pY3JvdGFzayBzbyB0aGF0IGFueVxuLy8gdXNlciBkZWZpbmVkIGhvb2tzIGFyZSB0cmlnZ2VyZWRcbmVzNlByb21pc2UuX3NldEFzYXAoZnVuY3Rpb24oZm4sIGFyZykge1xuICBnbG9iYWwuem9uZS5zY2hlZHVsZU1pY3JvdGFzayhmdW5jdGlvbigpIHtcbiAgICBmbihhcmcpO1xuICB9KTtcbn0pO1xuXG4vLyBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBzY2hlZHVsZU1pY3JvdGFzayB1c2UgdGhlIG9yaWdpbmFsIGVzNi1wcm9taXNlIGltcGxlbWVudGF0aW9uXG4vLyB0byBzY2hlZHVsZSBhIG1pY3JvdGFza1xuZnVuY3Rpb24gc2NoZWR1bGVNaWNyb3Rhc2soZm4pIHtcbiAgZXM2UHJvbWlzZS5fYXNhcCh0aGlzLmJpbmQoZm4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1pY3JvdGFza1N1cHBvcnQoem9uZUNsYXNzKSB7XG4gIHpvbmVDbGFzcy5wcm90b3R5cGUuc2NoZWR1bGVNaWNyb3Rhc2sgPSBzY2hlZHVsZU1pY3JvdGFzaztcbiAgcmV0dXJuIHpvbmVDbGFzcztcbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.0.2
	 */

	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }

	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }

	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }

	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }

	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$toString = {}.toString;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;

	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }

	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }

	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }

	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';

	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }

	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }

	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });

	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }

	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }

	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }

	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];

	        callback(arg);

	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }

	      lib$es6$promise$asap$$len = 0;
	    }

	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(4);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }

	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }

	    function lib$es6$promise$$internal$$noop() {}

	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;

	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }

	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }

	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }

	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;

	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));

	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }

	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }

	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
	      if (maybeThenable.constructor === promise.constructor) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }

	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }

	      lib$es6$promise$$internal$$publish(promise);
	    }

	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;

	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }

	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;

	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }

	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;

	      parent._onerror = null;

	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }

	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;

	      if (subscribers.length === 0) { return; }

	      var child, callback, detail = promise._result;

	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];

	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }

	      promise._subscribers.length = 0;
	    }

	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }

	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;

	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }

	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }

	      } else {
	        value = detail;
	        succeeded = true;
	      }

	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }

	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      var enumerator = this;

	      enumerator._instanceConstructor = Constructor;
	      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (enumerator._validateInput(input)) {
	        enumerator._input     = input;
	        enumerator.length     = input.length;
	        enumerator._remaining = input.length;

	        enumerator._init();

	        if (enumerator.length === 0) {
	          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	        } else {
	          enumerator.length = enumerator.length || 0;
	          enumerator._enumerate();
	          if (enumerator._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
	      }
	    }

	    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
	      return lib$es6$promise$utils$$isArray(input);
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
	      this._result = new Array(this.length);
	    };

	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var enumerator = this;

	      var length  = enumerator.length;
	      var promise = enumerator.promise;
	      var input   = enumerator._input;

	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        enumerator._eachEntry(input[i], i);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var enumerator = this;
	      var c = enumerator._instanceConstructor;

	      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
	        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
	          entry._onerror = null;
	          enumerator._settledAt(entry._state, i, entry._result);
	        } else {
	          enumerator._willSettleAt(c.resolve(entry), i);
	        }
	      } else {
	        enumerator._remaining--;
	        enumerator._result[i] = entry;
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var enumerator = this;
	      var promise = enumerator.promise;

	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        enumerator._remaining--;

	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          enumerator._result[i] = value;
	        }
	      }

	      if (enumerator._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;

	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }

	      var length = entries.length;

	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }

	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }

	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }

	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

	    var lib$es6$promise$promise$$counter = 0;

	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }

	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }

	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.

	      Terminology
	      -----------

	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.

	      A promise can be in one of three states: pending, fulfilled, or rejected.

	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.

	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.


	      Basic Usage:
	      ------------

	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);

	        // on failure
	        reject(reason);
	      });

	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Advanced Usage:
	      ---------------

	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.

	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();

	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();

	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }

	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Unlike callbacks, promises are great composable primitives.

	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON

	        return values;
	      });
	      ```

	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];

	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        if (!lib$es6$promise$utils$$isFunction(resolver)) {
	          lib$es6$promise$promise$$needsResolver();
	        }

	        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
	          lib$es6$promise$promise$$needsNew();
	        }

	        lib$es6$promise$$internal$$initializePromise(this, resolver);
	      }
	    }

	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,

	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.

	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```

	      Chaining
	      --------

	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.

	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });

	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```

	      Assimilation
	      ------------

	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```

	      If the assimliated promise rejects, then the downstream promise will also reject.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```

	      Simple Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var result;

	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```

	      Advanced Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var author, books;

	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js

	      function foundBooks(books) {

	      }

	      function failure(reason) {

	      }

	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: function(onFulfillment, onRejection) {
	        var parent = this;
	        var state = parent._state;

	        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	          return this;
	        }

	        var child = new this.constructor(lib$es6$promise$$internal$$noop);
	        var result = parent._result;

	        if (state) {
	          var callback = arguments[state - 1];
	          lib$es6$promise$asap$$asap(function(){
	            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	          });
	        } else {
	          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	        }

	        return child;
	      },

	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.

	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }

	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }

	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;

	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }

	      var P = local.Promise;

	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }

	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };

	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(5)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }

	    lib$es6$promise$polyfill$$default();
	}).call(this);


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var keys = __webpack_require__(7);
	var promise = __webpack_require__(8);
	var deprecated = {};
	function deprecatedWarning(key, text) {
	    if (!deprecated.hasOwnProperty(key)) {
	        deprecated[key] = true;
	        console.warn("DEPRECATION WARNING: '" + key +
	            "' is no longer supported and will be removed in next major release. " + text);
	    }
	}
	var Zone = (function () {
	    function Zone(parentZone, data) {
	        this.parent = null;
	        // onError is used to override error handling.
	        // When a custom error handler is provided, it should most probably rethrow the exception
	        // not to break the expected control flow:
	        //
	        // `promise.then(fnThatThrows).catch(fn);`
	        //
	        // When this code is executed in a zone with a custom onError handler that doesn't rethrow, the
	        // `.catch()` branch will not be taken as the `fnThatThrows` exception will be swallowed by the
	        // handler.
	        this.onError = null;
	        var zone = (arguments.length) ? Object.create(parentZone) : this;
	        zone.parent = parentZone || null;
	        Object.keys(data || {}).forEach(function (property) {
	            var _property = property.substr(1);
	            // augment the new zone with a hook decorates the parent's hook
	            if (property[0] === '$') {
	                zone[_property] = data[property](parentZone[_property] || function () { });
	            }
	            else if (property[0] === '+') {
	                if (parentZone[_property]) {
	                    zone[_property] = function () {
	                        var result = parentZone[_property].apply(this, arguments);
	                        data[property].apply(this, arguments);
	                        return result;
	                    };
	                }
	                else {
	                    zone[_property] = data[property];
	                }
	            }
	            else if (property[0] === '-') {
	                if (parentZone[_property]) {
	                    zone[_property] = function () {
	                        data[property].apply(this, arguments);
	                        return parentZone[_property].apply(this, arguments);
	                    };
	                }
	                else {
	                    zone[_property] = data[property];
	                }
	            }
	            else {
	                zone[property] = (typeof data[property] === 'object') ?
	                    JSON.parse(JSON.stringify(data[property])) :
	                    data[property];
	            }
	        });
	        zone.$id = Zone.nextId++;
	        return zone;
	    }
	    Zone.prototype.fork = function (locals) {
	        this.onZoneCreated();
	        return new Zone(this, locals);
	    };
	    Zone.prototype.bind = function (fn, skipEnqueue) {
	        if (typeof fn !== 'function') {
	            throw new Error('Expecting function got: ' + fn);
	        }
	        skipEnqueue || this.enqueueTask(fn);
	        var zone = this.isRootZone() ? this : this.fork();
	        return function zoneBoundFn() {
	            return zone.run(fn, this, arguments);
	        };
	    };
	    /// @deprecated
	    Zone.prototype.bindOnce = function (fn) {
	        deprecatedWarning('bindOnce', 'There is no replacement.');
	        var boundZone = this;
	        return this.bind(function () {
	            var result = fn.apply(this, arguments);
	            boundZone.dequeueTask(fn);
	            return result;
	        });
	    };
	    Zone.prototype.isRootZone = function () {
	        return this.parent === null;
	    };
	    Zone.prototype.run = function (fn, applyTo, applyWith) {
	        applyWith = applyWith || [];
	        var oldZone = global.zone;
	        // MAKE THIS ZONE THE CURRENT ZONE
	        global.zone = this;
	        try {
	            this.beforeTask();
	            return fn.apply(applyTo, applyWith);
	        }
	        catch (e) {
	            if (this.onError) {
	                this.onError(e);
	            }
	            else {
	                throw e;
	            }
	        }
	        finally {
	            this.afterTask();
	            // REVERT THE CURRENT ZONE BACK TO THE ORIGINAL ZONE
	            global.zone = oldZone;
	        }
	    };
	    Zone.prototype.beforeTask = function () { };
	    Zone.prototype.onZoneCreated = function () { };
	    Zone.prototype.afterTask = function () { };
	    Zone.prototype.enqueueTask = function (fn) {
	        deprecatedWarning('enqueueTask', 'Use addTask/addRepeatingTask/addMicroTask');
	    };
	    Zone.prototype.dequeueTask = function (fn) {
	        deprecatedWarning('dequeueTask', 'Use removeTask/removeRepeatingTask/removeMicroTask');
	    };
	    Zone.prototype.addTask = function (taskFn) { this.enqueueTask(taskFn); };
	    Zone.prototype.removeTask = function (taskFn) { this.dequeueTask(taskFn); };
	    Zone.prototype.addRepeatingTask = function (taskFn) { this.enqueueTask(taskFn); };
	    Zone.prototype.removeRepeatingTask = function (taskFn) { this.dequeueTask(taskFn); };
	    Zone.prototype.addMicrotask = function (taskFn) { this.enqueueTask(taskFn); };
	    Zone.prototype.removeMicrotask = function (taskFn) { this.dequeueTask(taskFn); };
	    Zone.prototype.addEventListener = function () {
	        return this[keys.common.addEventListener].apply(this, arguments);
	    };
	    Zone.prototype.removeEventListener = function () {
	        return this[keys.common.removeEventListener].apply(this, arguments);
	    };
	    // Root zone ID === 1
	    Zone.nextId = 1;
	    Zone.bindPromiseFn = promise.bindPromiseFn;
	    return Zone;
	})();
	exports.Zone = Zone;
	;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb3JlLnRzIl0sIm5hbWVzIjpbImRlcHJlY2F0ZWRXYXJuaW5nIiwiWm9uZSIsIlpvbmUuY29uc3RydWN0b3IiLCJab25lLmZvcmsiLCJab25lLmJpbmQiLCJab25lLmJpbmQuem9uZUJvdW5kRm4iLCJab25lLmJpbmRPbmNlIiwiWm9uZS5pc1Jvb3Rab25lIiwiWm9uZS5ydW4iLCJab25lLmJlZm9yZVRhc2siLCJab25lLm9uWm9uZUNyZWF0ZWQiLCJab25lLmFmdGVyVGFzayIsIlpvbmUuZW5xdWV1ZVRhc2siLCJab25lLmRlcXVldWVUYXNrIiwiWm9uZS5hZGRUYXNrIiwiWm9uZS5yZW1vdmVUYXNrIiwiWm9uZS5hZGRSZXBlYXRpbmdUYXNrIiwiWm9uZS5yZW1vdmVSZXBlYXRpbmdUYXNrIiwiWm9uZS5hZGRNaWNyb3Rhc2siLCJab25lLnJlbW92ZU1pY3JvdGFzayIsIlpvbmUuYWRkRXZlbnRMaXN0ZW5lciIsIlpvbmUucmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxJQUFJLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDL0IsSUFBWSxPQUFPLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUUzQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFFcEIsMkJBQTJCLEdBQUcsRUFBRSxJQUFJO0lBQ2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNwQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDdkJBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLHdCQUF3QkEsR0FBR0EsR0FBR0E7WUFDdkNBLHNFQUFzRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDckZBLENBQUNBO0FBQ0hBLENBQUNBO0FBRUQ7SUFRRUMsY0FBWUEsVUFBV0EsRUFBRUEsSUFBS0E7UUFGOUJDLFdBQU1BLEdBQVNBLElBQUlBLENBQUNBO1FBMEdwQkEsOENBQThDQTtRQUM5Q0EseUZBQXlGQTtRQUN6RkEsMENBQTBDQTtRQUMxQ0EsRUFBRUE7UUFDRkEsMENBQTBDQTtRQUMxQ0EsRUFBRUE7UUFDRkEsK0ZBQStGQTtRQUMvRkEsK0ZBQStGQTtRQUMvRkEsV0FBV0E7UUFDWEEsWUFBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFoSGJBLElBQUlBLElBQUlBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBRWpFQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxVQUFVQSxJQUFJQSxJQUFJQSxDQUFDQTtRQUVqQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBU0EsUUFBUUE7WUFFL0MsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQywrREFBK0Q7WUFDL0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGNBQWEsQ0FBQyxDQUFDLENBQUM7WUFHNUUsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHO3dCQUNoQixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2hCLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFHSCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7d0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3RELENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFHSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxDQUFDO29CQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDQSxDQUFDQTtRQUVIQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFTQSxJQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUVoQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFFREQsbUJBQUlBLEdBQUpBLFVBQUtBLE1BQU9BO1FBQ1ZFLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO1FBQ3JCQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFREYsbUJBQUlBLEdBQUpBLFVBQUtBLEVBQUVBLEVBQUVBLFdBQVlBO1FBQ25CRyxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxFQUFFQSxLQUFLQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EsMEJBQTBCQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNuREEsQ0FBQ0E7UUFDREEsV0FBV0EsSUFBSUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDcENBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1FBQ2xEQSxNQUFNQSxDQUFDQTtZQUNMQyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN2Q0EsQ0FBQ0EsQ0FBQ0Q7SUFDSkEsQ0FBQ0E7SUFFREgsZUFBZUE7SUFDZkEsdUJBQVFBLEdBQVJBLFVBQVNBLEVBQUVBO1FBQ1RLLGlCQUFpQkEsQ0FBQ0EsVUFBVUEsRUFBRUEsMEJBQTBCQSxDQUFDQSxDQUFDQTtRQUMxREEsSUFBSUEsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDckJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1lBQ2YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFREwseUJBQVVBLEdBQVZBO1FBQ0VNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLElBQUlBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUVETixrQkFBR0EsR0FBSEEsVUFBSUEsRUFBRUEsRUFBRUEsT0FBUUEsRUFBRUEsU0FBVUE7UUFDMUJPLFNBQVNBLEdBQUdBLFNBQVNBLElBQUlBLEVBQUVBLENBQUNBO1FBRTVCQSxJQUFJQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUUxQkEsa0NBQWtDQTtRQUNsQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFFbkJBLElBQUlBLENBQUNBO1lBQ0hBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1lBQ2xCQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBRUE7UUFBQUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ05BLE1BQU1BLENBQUNBLENBQUNBO1lBQ1ZBLENBQUNBO1FBQ0hBLENBQUNBO2dCQUFTQSxDQUFDQTtZQUNUQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtZQUNqQkEsb0RBQW9EQTtZQUNwREEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0E7UUFDeEJBLENBQUNBO0lBQ0hBLENBQUNBO0lBWURQLHlCQUFVQSxHQUFWQSxjQUFjUSxDQUFDQTtJQUNmUiw0QkFBYUEsR0FBYkEsY0FBaUJTLENBQUNBO0lBQ2xCVCx3QkFBU0EsR0FBVEEsY0FBYVUsQ0FBQ0E7SUFFZFYsMEJBQVdBLEdBQVhBLFVBQVlBLEVBQVlBO1FBQ3RCVyxpQkFBaUJBLENBQUNBLGFBQWFBLEVBQUVBLDJDQUEyQ0EsQ0FBQ0EsQ0FBQ0E7SUFDaEZBLENBQUNBO0lBQ0RYLDBCQUFXQSxHQUFYQSxVQUFZQSxFQUFZQTtRQUN0QlksaUJBQWlCQSxDQUFDQSxhQUFhQSxFQUFFQSxvREFBb0RBLENBQUNBLENBQUNBO0lBQ3pGQSxDQUFDQTtJQUVEWixzQkFBT0EsR0FBUEEsVUFBUUEsTUFBTUEsSUFBSWEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDN0NiLHlCQUFVQSxHQUFWQSxVQUFXQSxNQUFNQSxJQUFJYyxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVoRGQsK0JBQWdCQSxHQUFoQkEsVUFBaUJBLE1BQU1BLElBQUllLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ3REZixrQ0FBbUJBLEdBQW5CQSxVQUFvQkEsTUFBTUEsSUFBSWdCLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRXpEaEIsMkJBQVlBLEdBQVpBLFVBQWFBLE1BQU1BLElBQUlpQixJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsRGpCLDhCQUFlQSxHQUFmQSxVQUFnQkEsTUFBTUEsSUFBSWtCLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRXJEbEIsK0JBQWdCQSxHQUFoQkE7UUFDRW1CLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFDbkVBLENBQUNBO0lBRURuQixrQ0FBbUJBLEdBQW5CQTtRQUNFb0IsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUN0RUEsQ0FBQ0E7SUFuSkRwQixxQkFBcUJBO0lBQ2RBLFdBQU1BLEdBQUdBLENBQUNBLENBQUNBO0lBQ1hBLGtCQUFhQSxHQUFHQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQTtJQWtKL0NBLFdBQUNBO0FBQURBLENBQUNBLEFBckpELElBcUpDO0FBckpZLFlBQUksT0FxSmhCLENBQUE7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga2V5cyBmcm9tICcuL2tleXMnO1xuaW1wb3J0ICogYXMgcHJvbWlzZSBmcm9tICcuL3BhdGNoL3Byb21pc2UnO1xuXG52YXIgZGVwcmVjYXRlZCA9IHt9O1xuXG5mdW5jdGlvbiBkZXByZWNhdGVkV2FybmluZyhrZXksIHRleHQpIHtcbiAgaWYgKCFkZXByZWNhdGVkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBkZXByZWNhdGVkW2tleV0gPSB0cnVlO1xuICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FUSU9OIFdBUk5JTkc6ICdcIiArIGtleSArXG4gICAgICAgIFwiJyBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciByZWxlYXNlLiBcIiArIHRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBab25lIHtcbiAgLy8gUm9vdCB6b25lIElEID09PSAxXG4gIHN0YXRpYyBuZXh0SWQgPSAxO1xuICBzdGF0aWMgYmluZFByb21pc2VGbiA9IHByb21pc2UuYmluZFByb21pc2VGbjtcblxuXG4gIHBhcmVudDogWm9uZSA9IG51bGw7XG4gICRpZDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihwYXJlbnRab25lPywgZGF0YT8pIHtcbiAgICB2YXIgem9uZSA9IChhcmd1bWVudHMubGVuZ3RoKSA/IE9iamVjdC5jcmVhdGUocGFyZW50Wm9uZSkgOiB0aGlzO1xuXG4gICAgem9uZS5wYXJlbnQgPSBwYXJlbnRab25lIHx8IG51bGw7XG5cbiAgICBPYmplY3Qua2V5cyhkYXRhIHx8IHt9KS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgIHZhciBfcHJvcGVydHkgPSBwcm9wZXJ0eS5zdWJzdHIoMSk7XG5cbiAgICAgIC8vIGF1Z21lbnQgdGhlIG5ldyB6b25lIHdpdGggYSBob29rIGRlY29yYXRlcyB0aGUgcGFyZW50J3MgaG9va1xuICAgICAgaWYgKHByb3BlcnR5WzBdID09PSAnJCcpIHtcbiAgICAgICAgem9uZVtfcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV0ocGFyZW50Wm9uZVtfcHJvcGVydHldIHx8IGZ1bmN0aW9uICgpIHt9KTtcblxuICAgICAgLy8gYXVnbWVudCB0aGUgbmV3IHpvbmUgd2l0aCBhIGhvb2sgdGhhdCBydW5zIGFmdGVyIHRoZSBwYXJlbnQncyBob29rXG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5WzBdID09PSAnKycpIHtcbiAgICAgICAgaWYgKHBhcmVudFpvbmVbX3Byb3BlcnR5XSkge1xuICAgICAgICAgIHpvbmVbX3Byb3BlcnR5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBwYXJlbnRab25lW19wcm9wZXJ0eV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGRhdGFbcHJvcGVydHldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgem9uZVtfcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgICAgLy8gYXVnbWVudCB0aGUgbmV3IHpvbmUgd2l0aCBhIGhvb2sgdGhhdCBydW5zIGJlZm9yZSB0aGUgcGFyZW50J3MgaG9va1xuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eVswXSA9PT0gJy0nKSB7XG4gICAgICAgIGlmIChwYXJlbnRab25lW19wcm9wZXJ0eV0pIHtcbiAgICAgICAgICB6b25lW19wcm9wZXJ0eV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhW3Byb3BlcnR5XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFpvbmVbX3Byb3BlcnR5XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgem9uZVtfcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBuZXcgem9uZSdzIGhvb2sgKHJlcGxhY2luZyB0aGUgcGFyZW50IHpvbmUncylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHpvbmVbcHJvcGVydHldID0gKHR5cGVvZiBkYXRhW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhW3Byb3BlcnR5XSkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB6b25lLiRpZCA9ICg8YW55PlpvbmUpLm5leHRJZCsrO1xuXG4gICAgcmV0dXJuIHpvbmU7XG4gIH1cblxuICBmb3JrKGxvY2Fscz8pIHtcbiAgICB0aGlzLm9uWm9uZUNyZWF0ZWQoKTtcbiAgICByZXR1cm4gbmV3IFpvbmUodGhpcywgbG9jYWxzKTtcbiAgfVxuXG4gIGJpbmQoZm4sIHNraXBFbnF1ZXVlPykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0aW5nIGZ1bmN0aW9uIGdvdDogJyArIGZuKTtcbiAgICB9XG4gICAgc2tpcEVucXVldWUgfHwgdGhpcy5lbnF1ZXVlVGFzayhmbik7XG4gICAgdmFyIHpvbmUgPSB0aGlzLmlzUm9vdFpvbmUoKSA/IHRoaXMgOiB0aGlzLmZvcmsoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gem9uZUJvdW5kRm4oKSB7XG4gICAgICByZXR1cm4gem9uZS5ydW4oZm4sIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vLyBAZGVwcmVjYXRlZFxuICBiaW5kT25jZShmbikge1xuICAgIGRlcHJlY2F0ZWRXYXJuaW5nKCdiaW5kT25jZScsICdUaGVyZSBpcyBubyByZXBsYWNlbWVudC4nKTtcbiAgICB2YXIgYm91bmRab25lID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5iaW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgYm91bmRab25lLmRlcXVldWVUYXNrKGZuKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBpc1Jvb3Rab25lKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA9PT0gbnVsbDtcbiAgfVxuXG4gIHJ1bihmbiwgYXBwbHlUbz8sIGFwcGx5V2l0aD8pIHtcbiAgICBhcHBseVdpdGggPSBhcHBseVdpdGggfHwgW107XG5cbiAgICB2YXIgb2xkWm9uZSA9IGdsb2JhbC56b25lO1xuXG4gICAgLy8gTUFLRSBUSElTIFpPTkUgVEhFIENVUlJFTlQgWk9ORVxuICAgIGdsb2JhbC56b25lID0gdGhpcztcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmJlZm9yZVRhc2soKTtcbiAgICAgIHJldHVybiBmbi5hcHBseShhcHBseVRvLCBhcHBseVdpdGgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh0aGlzLm9uRXJyb3IpIHtcbiAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5hZnRlclRhc2soKTtcbiAgICAgIC8vIFJFVkVSVCBUSEUgQ1VSUkVOVCBaT05FIEJBQ0sgVE8gVEhFIE9SSUdJTkFMIFpPTkVcbiAgICAgIGdsb2JhbC56b25lID0gb2xkWm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBvbkVycm9yIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZXJyb3IgaGFuZGxpbmcuXG4gIC8vIFdoZW4gYSBjdXN0b20gZXJyb3IgaGFuZGxlciBpcyBwcm92aWRlZCwgaXQgc2hvdWxkIG1vc3QgcHJvYmFibHkgcmV0aHJvdyB0aGUgZXhjZXB0aW9uXG4gIC8vIG5vdCB0byBicmVhayB0aGUgZXhwZWN0ZWQgY29udHJvbCBmbG93OlxuICAvL1xuICAvLyBgcHJvbWlzZS50aGVuKGZuVGhhdFRocm93cykuY2F0Y2goZm4pO2BcbiAgLy9cbiAgLy8gV2hlbiB0aGlzIGNvZGUgaXMgZXhlY3V0ZWQgaW4gYSB6b25lIHdpdGggYSBjdXN0b20gb25FcnJvciBoYW5kbGVyIHRoYXQgZG9lc24ndCByZXRocm93LCB0aGVcbiAgLy8gYC5jYXRjaCgpYCBicmFuY2ggd2lsbCBub3QgYmUgdGFrZW4gYXMgdGhlIGBmblRoYXRUaHJvd3NgIGV4Y2VwdGlvbiB3aWxsIGJlIHN3YWxsb3dlZCBieSB0aGVcbiAgLy8gaGFuZGxlci5cbiAgb25FcnJvciA9IG51bGw7XG4gIGJlZm9yZVRhc2soKSB7fVxuICBvblpvbmVDcmVhdGVkKCkge31cbiAgYWZ0ZXJUYXNrKCkge31cbiAgXG4gIGVucXVldWVUYXNrKGZuOiBGdW5jdGlvbikge1xuICAgIGRlcHJlY2F0ZWRXYXJuaW5nKCdlbnF1ZXVlVGFzaycsICdVc2UgYWRkVGFzay9hZGRSZXBlYXRpbmdUYXNrL2FkZE1pY3JvVGFzaycpO1xuICB9XG4gIGRlcXVldWVUYXNrKGZuOiBGdW5jdGlvbikge1xuICAgIGRlcHJlY2F0ZWRXYXJuaW5nKCdkZXF1ZXVlVGFzaycsICdVc2UgcmVtb3ZlVGFzay9yZW1vdmVSZXBlYXRpbmdUYXNrL3JlbW92ZU1pY3JvVGFzaycpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrRm4pIHsgdGhpcy5lbnF1ZXVlVGFzayh0YXNrRm4pOyB9XG4gIHJlbW92ZVRhc2sodGFza0ZuKSB7IHRoaXMuZGVxdWV1ZVRhc2sodGFza0ZuKTsgfVxuXG4gIGFkZFJlcGVhdGluZ1Rhc2sodGFza0ZuKSB7IHRoaXMuZW5xdWV1ZVRhc2sodGFza0ZuKTsgfVxuICByZW1vdmVSZXBlYXRpbmdUYXNrKHRhc2tGbikgeyB0aGlzLmRlcXVldWVUYXNrKHRhc2tGbik7IH1cblxuICBhZGRNaWNyb3Rhc2sodGFza0ZuKSB7IHRoaXMuZW5xdWV1ZVRhc2sodGFza0ZuKTsgfVxuICByZW1vdmVNaWNyb3Rhc2sodGFza0ZuKSB7IHRoaXMuZGVxdWV1ZVRhc2sodGFza0ZuKTsgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXNba2V5cy5jb21tb24uYWRkRXZlbnRMaXN0ZW5lcl0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXNba2V5cy5jb21tb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcl0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufTtcblxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Creates keys for `private` properties on exposed objects to minimize interactions with other codebases.
	 */
	function create(name) {
	    // `Symbol` implementation is broken in Chrome 39.0.2171, do not use them even if they are available
	    return '_zone$' + name;
	}
	exports.create = create;
	exports.common = {
	    addEventListener: create('addEventListener'),
	    removeEventListener: create('removeEventListener')
	};
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9rZXlzLnRzIl0sIm5hbWVzIjpbImNyZWF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxnQkFBdUIsSUFBSTtJQUN6QkEsb0dBQW9HQTtJQUNwR0EsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDekJBLENBQUNBO0FBSGUsY0FBTSxTQUdyQixDQUFBO0FBRVUsY0FBTSxHQUFHO0lBQ2xCLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QyxtQkFBbUIsRUFBRSxNQUFNLENBQUMscUJBQXFCLENBQUM7Q0FDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlcyBrZXlzIGZvciBgcHJpdmF0ZWAgcHJvcGVydGllcyBvbiBleHBvc2VkIG9iamVjdHMgdG8gbWluaW1pemUgaW50ZXJhY3Rpb25zIHdpdGggb3RoZXIgY29kZWJhc2VzLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUobmFtZSkge1xuICAvLyBgU3ltYm9sYCBpbXBsZW1lbnRhdGlvbiBpcyBicm9rZW4gaW4gQ2hyb21lIDM5LjAuMjE3MSwgZG8gbm90IHVzZSB0aGVtIGV2ZW4gaWYgdGhleSBhcmUgYXZhaWxhYmxlXG4gIHJldHVybiAnX3pvbmUkJyArIG5hbWU7XG59XG5cbmV4cG9ydCB2YXIgY29tbW9uID0ge1xuICBhZGRFdmVudExpc3RlbmVyOiBjcmVhdGUoJ2FkZEV2ZW50TGlzdGVuZXInKSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogY3JlYXRlKCdyZW1vdmVFdmVudExpc3RlbmVyJylcbn07XG4iXX0=

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(9);
	if (global.Promise) {
	    exports.bindPromiseFn = function (delegate) {
	        return function () {
	            var delegatePromise = delegate.apply(this, arguments);
	            // if the delegate returned an instance of Promise, forward it.
	            if (delegatePromise instanceof Promise) {
	                return delegatePromise;
	            }
	            // Otherwise wrap the Promise-like in a global Promise
	            return new Promise(function (resolve, reject) {
	                delegatePromise.then(resolve, reject);
	            });
	        };
	    };
	}
	else {
	    exports.bindPromiseFn = function (delegate) {
	        return function () {
	            return _patchThenable(delegate.apply(this, arguments));
	        };
	    };
	}
	function _patchPromiseFnsOnObject(objectPath, fnNames) {
	    var obj = global;
	    var exists = objectPath.every(function (segment) {
	        obj = obj[segment];
	        return obj;
	    });
	    if (!exists) {
	        return;
	    }
	    fnNames.forEach(function (name) {
	        var fn = obj[name];
	        if (fn) {
	            obj[name] = exports.bindPromiseFn(fn);
	        }
	    });
	}
	function _patchThenable(thenable) {
	    var then = thenable.then;
	    thenable.then = function () {
	        var args = utils.bindArguments(arguments);
	        var nextThenable = then.apply(thenable, args);
	        return _patchThenable(nextThenable);
	    };
	    var ocatch = thenable.catch;
	    thenable.catch = function () {
	        var args = utils.bindArguments(arguments);
	        var nextThenable = ocatch.apply(thenable, args);
	        return _patchThenable(nextThenable);
	    };
	    return thenable;
	}
	function apply() {
	    // Patch .then() and .catch() on native Promises to execute callbacks in the zone where
	    // those functions are called.
	    if (global.Promise) {
	        utils.patchPrototype(Promise.prototype, [
	            'then',
	            'catch'
	        ]);
	        // Patch browser APIs that return a Promise
	        var patchFns = [
	            // fetch
	            [[], ['fetch']],
	            [['Response', 'prototype'], ['arrayBuffer', 'blob', 'json', 'text']]
	        ];
	        patchFns.forEach(function (objPathAndFns) {
	            _patchPromiseFnsOnObject(objPathAndFns[0], objPathAndFns[1]);
	        });
	    }
	}
	exports.apply = apply;
	module.exports = {
	    apply: apply,
	    bindPromiseFn: exports.bindPromiseFn
	};
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wYXRjaC9wcm9taXNlLnRzIl0sIm5hbWVzIjpbIl9wYXRjaFByb21pc2VGbnNPbk9iamVjdCIsIl9wYXRjaFRoZW5hYmxlIiwiYXBwbHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQVksS0FBSyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBdUJsQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuQixxQkFBYSxHQUFHLFVBQVUsUUFBUTtRQUNoQyxNQUFNLENBQUM7WUFDTCxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUV0RCwrREFBK0Q7WUFDL0QsRUFBRSxDQUFDLENBQUMsZUFBZSxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDekIsQ0FBQztZQUVELHNEQUFzRDtZQUN0RCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtnQkFDekMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBQUMsSUFBSSxDQUFDLENBQUM7SUFDTixxQkFBYSxHQUFHLFVBQVUsUUFBUTtRQUNoQyxNQUFNLENBQUM7WUFDTCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUdELGtDQUFrQyxVQUFVLEVBQUUsT0FBTztJQUNuREEsSUFBSUEsR0FBR0EsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFFakJBLElBQUlBLE1BQU1BLEdBQUdBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLE9BQU9BO1FBQzdDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFFSEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDWkEsTUFBTUEsQ0FBQ0E7SUFDVEEsQ0FBQ0E7SUFFREEsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsSUFBSUE7UUFDNUIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcscUJBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDQSxDQUFDQTtBQUNMQSxDQUFDQTtBQUVELHdCQUF3QixRQUFRO0lBQzlCQyxJQUFJQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUN6QkEsUUFBUUEsQ0FBQ0EsSUFBSUEsR0FBR0E7UUFDZCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDQTtJQUVGQSxJQUFJQSxNQUFNQSxHQUFHQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUM1QkEsUUFBUUEsQ0FBQ0EsS0FBS0EsR0FBR0E7UUFDZixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDQTtJQUVGQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTtBQUNsQkEsQ0FBQ0E7QUFHRDtJQUNFQyx1RkFBdUZBO0lBQ3ZGQSw4QkFBOEJBO0lBQzlCQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuQkEsS0FBS0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsRUFBRUE7WUFDdENBLE1BQU1BO1lBQ05BLE9BQU9BO1NBQ1JBLENBQUNBLENBQUNBO1FBRUhBLDJDQUEyQ0E7UUFDM0NBLElBQUlBLFFBQVFBLEdBQUdBO1lBQ2JBLFFBQVFBO1lBQ1JBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ2ZBLENBQUNBLENBQUNBLFVBQVVBLEVBQUVBLFdBQVdBLENBQUNBLEVBQUVBLENBQUNBLGFBQWFBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1NBQ3JFQSxDQUFDQTtRQUVGQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFTQSxhQUFhQTtZQUNyQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtBQUNIQSxDQUFDQTtBQXBCZSxhQUFLLFFBb0JwQixDQUFBO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLEtBQUssRUFBRSxLQUFLO0lBQ1osYUFBYSxFQUFFLHFCQUFhO0NBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbi8qXG4gKiBQYXRjaGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZS1saWtlIGluc3RhbmNlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbXVzdCBiZSB1c2VkIHdoZW4gZWl0aGVyOlxuICogLSBOYXRpdmUgUHJvbWlzZXMgYXJlIG5vdCBhdmFpbGFibGUsXG4gKiAtIFRoZSBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZS1saWtlIG9iamVjdC5cbiAqXG4gKiBUaGlzIGlzIHJlcXVpcmVkIGJlY2F1c2Ugem9uZXMgcmVseSBvbiBhIFByb21pc2UgbW9ua2V5IHBhdGNoIHRoYXQgY291bGQgbm90IGJlIGFwcGxpZWQgd2hlblxuICogUHJvbWlzZSBpcyBub3QgbmF0aXZlbHkgYXZhaWxhYmxlIG9yIHdoZW4gdGhlIHJldHVybmVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgUHJvbWlzZS5cbiAqXG4gKiBOb3RlIHRoYXQgY2FsbGluZyBgYmluZFByb21pc2VGbmAgb24gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuYXRpdmUgUHJvbWlzZSB3aWxsIGFsc28gd29ya1xuICogd2l0aCBtaW5pbWFsIG92ZXJoZWFkLlxuICpcbiAqIGBgYFxuICogdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kUHJvbWlzZUZuKEZ1bmN0aW9uUmV0dXJuaW5nQVByb21pc2UpO1xuICpcbiAqIGJvdW5kRnVuY3Rpb24udGhlbihzdWNjZXNzSGFuZGxlciwgZXJyb3JIYW5kbGVyKTtcbiAqIGBgYFxuICovXG5leHBvcnQgdmFyIGJpbmRQcm9taXNlRm47XG5cbmlmIChnbG9iYWwuUHJvbWlzZSkge1xuICBiaW5kUHJvbWlzZUZuID0gZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRlbGVnYXRlUHJvbWlzZSA9IGRlbGVnYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIC8vIGlmIHRoZSBkZWxlZ2F0ZSByZXR1cm5lZCBhbiBpbnN0YW5jZSBvZiBQcm9taXNlLCBmb3J3YXJkIGl0LlxuICAgICAgaWYgKGRlbGVnYXRlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGRlbGVnYXRlUHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIHdyYXAgdGhlIFByb21pc2UtbGlrZSBpbiBhIGdsb2JhbCBQcm9taXNlXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRlbGVnYXRlUHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufSBlbHNlIHtcbiAgYmluZFByb21pc2VGbiA9IGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3BhdGNoVGhlbmFibGUoZGVsZWdhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfTtcbn1cblxuXG5mdW5jdGlvbiBfcGF0Y2hQcm9taXNlRm5zT25PYmplY3Qob2JqZWN0UGF0aCwgZm5OYW1lcykge1xuICB2YXIgb2JqID0gZ2xvYmFsO1xuXG4gIHZhciBleGlzdHMgPSBvYmplY3RQYXRoLmV2ZXJ5KGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgb2JqID0gb2JqW3NlZ21lbnRdO1xuICAgIHJldHVybiBvYmo7XG4gIH0pO1xuXG4gIGlmICghZXhpc3RzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm5OYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGZuID0gb2JqW25hbWVdO1xuICAgIGlmIChmbikge1xuICAgICAgb2JqW25hbWVdID0gYmluZFByb21pc2VGbihmbik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gX3BhdGNoVGhlbmFibGUodGhlbmFibGUpIHtcbiAgdmFyIHRoZW4gPSB0aGVuYWJsZS50aGVuO1xuICB0aGVuYWJsZS50aGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gdXRpbHMuYmluZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgIHZhciBuZXh0VGhlbmFibGUgPSB0aGVuLmFwcGx5KHRoZW5hYmxlLCBhcmdzKTtcbiAgICByZXR1cm4gX3BhdGNoVGhlbmFibGUobmV4dFRoZW5hYmxlKTtcbiAgfTtcblxuICB2YXIgb2NhdGNoID0gdGhlbmFibGUuY2F0Y2g7XG4gIHRoZW5hYmxlLmNhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gdXRpbHMuYmluZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgIHZhciBuZXh0VGhlbmFibGUgPSBvY2F0Y2guYXBwbHkodGhlbmFibGUsIGFyZ3MpO1xuICAgIHJldHVybiBfcGF0Y2hUaGVuYWJsZShuZXh0VGhlbmFibGUpO1xuICB9O1xuXG4gIHJldHVybiB0aGVuYWJsZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoKSB7XG4gIC8vIFBhdGNoIC50aGVuKCkgYW5kIC5jYXRjaCgpIG9uIG5hdGl2ZSBQcm9taXNlcyB0byBleGVjdXRlIGNhbGxiYWNrcyBpbiB0aGUgem9uZSB3aGVyZVxuICAvLyB0aG9zZSBmdW5jdGlvbnMgYXJlIGNhbGxlZC5cbiAgaWYgKGdsb2JhbC5Qcm9taXNlKSB7XG4gICAgdXRpbHMucGF0Y2hQcm90b3R5cGUoUHJvbWlzZS5wcm90b3R5cGUsIFtcbiAgICAgICd0aGVuJyxcbiAgICAgICdjYXRjaCdcbiAgICBdKTtcblxuICAgIC8vIFBhdGNoIGJyb3dzZXIgQVBJcyB0aGF0IHJldHVybiBhIFByb21pc2VcbiAgICB2YXIgcGF0Y2hGbnMgPSBbXG4gICAgICAvLyBmZXRjaFxuICAgICAgW1tdLCBbJ2ZldGNoJ11dLFxuICAgICAgW1snUmVzcG9uc2UnLCAncHJvdG90eXBlJ10sIFsnYXJyYXlCdWZmZXInLCAnYmxvYicsICdqc29uJywgJ3RleHQnXV1cbiAgICBdO1xuXG4gICAgcGF0Y2hGbnMuZm9yRWFjaChmdW5jdGlvbihvYmpQYXRoQW5kRm5zKSB7XG4gICAgICBfcGF0Y2hQcm9taXNlRm5zT25PYmplY3Qob2JqUGF0aEFuZEZuc1swXSwgb2JqUGF0aEFuZEZuc1sxXSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcGx5OiBhcHBseSxcbiAgYmluZFByb21pc2VGbjogYmluZFByb21pc2VGblxufTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var keys = __webpack_require__(7);
	function bindArguments(args) {
	    for (var i = args.length - 1; i >= 0; i--) {
	        if (typeof args[i] === 'function') {
	            args[i] = global.zone.bind(args[i]);
	        }
	    }
	    return args;
	}
	exports.bindArguments = bindArguments;
	;
	function patchPrototype(obj, fnNames) {
	    fnNames.forEach(function (name) {
	        var delegate = obj[name];
	        if (delegate) {
	            obj[name] = function () {
	                return delegate.apply(this, bindArguments(arguments));
	            };
	        }
	    });
	}
	exports.patchPrototype = patchPrototype;
	;
	function isWebWorker() {
	    return (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
	}
	exports.isWebWorker = isWebWorker;
	function isNode() {
	    return (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
	}
	exports.isNode = isNode;
	function patchProperty(obj, prop) {
	    var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
	        enumerable: true,
	        configurable: true
	    };
	    // A property descriptor cannot have getter/setter and be writable
	    // deleting the writable and value properties avoids this error:
	    //
	    // TypeError: property descriptors must not specify a value or be writable when a
	    // getter or setter has been specified
	    delete desc.writable;
	    delete desc.value;
	    // substr(2) cuz 'onclick' -> 'click', etc
	    var eventName = prop.substr(2);
	    var _prop = '_' + prop;
	    desc.set = function (fn) {
	        if (this[_prop]) {
	            this.removeEventListener(eventName, this[_prop]);
	        }
	        if (typeof fn === 'function') {
	            this[_prop] = fn;
	            this.addEventListener(eventName, fn, false);
	        }
	        else {
	            this[_prop] = null;
	        }
	    };
	    desc.get = function () {
	        return this[_prop];
	    };
	    Object.defineProperty(obj, prop, desc);
	}
	exports.patchProperty = patchProperty;
	;
	function patchProperties(obj, properties) {
	    (properties || (function () {
	        var props = [];
	        for (var prop in obj) {
	            props.push(prop);
	        }
	        return props;
	    }()).
	        filter(function (propertyName) {
	        return propertyName.substr(0, 2) === 'on';
	    })).
	        forEach(function (eventName) {
	        patchProperty(obj, eventName);
	    });
	}
	exports.patchProperties = patchProperties;
	;
	var originalFnKey = keys.create('originalFn');
	var boundFnsKey = keys.create('boundFns');
	function patchEventTargetMethods(obj) {
	    // This is required for the addEventListener hook on the root zone.
	    obj[keys.common.addEventListener] = obj.addEventListener;
	    obj.addEventListener = function (eventName, handler, useCapturing) {
	        //Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
	        if (handler && handler.toString() !== "[object FunctionWrapper]") {
	            var eventType = eventName + (useCapturing ? '$capturing' : '$bubbling');
	            var fn;
	            if (handler.handleEvent) {
	                // Have to pass in 'handler' reference as an argument here, otherwise it gets clobbered in
	                // IE9 by the arguments[1] assignment at end of this function.
	                fn = (function (handler) {
	                    return function () {
	                        handler.handleEvent.apply(handler, arguments);
	                    };
	                })(handler);
	            }
	            else {
	                fn = handler;
	            }
	            handler[originalFnKey] = fn;
	            handler[boundFnsKey] = handler[boundFnsKey] || {};
	            handler[boundFnsKey][eventType] = handler[boundFnsKey][eventType] || global.zone.bind(fn);
	            arguments[1] = handler[boundFnsKey][eventType];
	        }
	        // - Inside a Web Worker, `this` is undefined, the context is `global` (= `self`)
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = this || global;
	        return global.zone.addEventListener.apply(target, arguments);
	    };
	    // This is required for the removeEventListener hook on the root zone.
	    obj[keys.common.removeEventListener] = obj.removeEventListener;
	    obj.removeEventListener = function (eventName, handler, useCapturing) {
	        var eventType = eventName + (useCapturing ? '$capturing' : '$bubbling');
	        if (handler && handler[boundFnsKey] && handler[boundFnsKey][eventType]) {
	            var _bound = handler[boundFnsKey];
	            arguments[1] = _bound[eventType];
	            delete _bound[eventType];
	            global.zone.dequeueTask(handler[originalFnKey]);
	        }
	        // - Inside a Web Worker, `this` is undefined, the context is `global`
	        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	        // see https://github.com/angular/zone.js/issues/190
	        var target = this || global;
	        var result = global.zone.removeEventListener.apply(target, arguments);
	        return result;
	    };
	}
	exports.patchEventTargetMethods = patchEventTargetMethods;
	;
	var originalInstanceKey = keys.create('originalInstance');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = global[className];
	    if (!OriginalClass)
	        return;
	    global[className] = function () {
	        var a = bindArguments(arguments);
	        switch (a.length) {
	            case 0:
	                this[originalInstanceKey] = new OriginalClass();
	                break;
	            case 1:
	                this[originalInstanceKey] = new OriginalClass(a[0]);
	                break;
	            case 2:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
	                break;
	            case 3:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
	                break;
	            case 4:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
	                break;
	            default: throw new Error('what are you even doing?');
	        }
	    };
	    var instance = new OriginalClass();
	    var prop;
	    for (prop in instance) {
	        (function (prop) {
	            if (typeof instance[prop] === 'function') {
	                global[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                Object.defineProperty(global[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = global.zone.bind(fn);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	    for (prop in OriginalClass) {
	        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	            global[className][prop] = OriginalClass[prop];
	        }
	    }
	}
	exports.patchClass = patchClass;
	;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvdXRpbHMudHMiXSwibmFtZXMiOlsiYmluZEFyZ3VtZW50cyIsInBhdGNoUHJvdG90eXBlIiwiaXNXZWJXb3JrZXIiLCJpc05vZGUiLCJwYXRjaFByb3BlcnR5IiwicGF0Y2hQcm9wZXJ0aWVzIiwicGF0Y2hFdmVudFRhcmdldE1ldGhvZHMiLCJwYXRjaENsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFZLElBQUksV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUkvQix1QkFBOEIsSUFBSTtJQUNoQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7UUFDMUNBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7QUFDZEEsQ0FBQ0E7QUFQZSxxQkFBYSxnQkFPNUIsQ0FBQTtBQUFBLENBQUM7QUFFRix3QkFBK0IsR0FBRyxFQUFFLE9BQU87SUFDekNDLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLElBQUlBO1FBQzVCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQyxDQUFDQSxDQUFDQTtBQUNMQSxDQUFDQTtBQVRlLHNCQUFjLGlCQVM3QixDQUFBO0FBQUEsQ0FBQztBQUVGO0lBQ0VDLE1BQU1BLENBQUNBLENBQUNBLE9BQU9BLGlCQUFpQkEsS0FBS0EsV0FBV0EsSUFBSUEsSUFBSUEsWUFBWUEsaUJBQWlCQSxDQUFDQSxDQUFDQTtBQUN6RkEsQ0FBQ0E7QUFGZSxtQkFBVyxjQUUxQixDQUFBO0FBRUQ7SUFDRUMsTUFBTUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsT0FBT0EsS0FBS0EsV0FBV0EsSUFBSUEsRUFBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtBQUM5RkEsQ0FBQ0E7QUFGZSxjQUFNLFNBRXJCLENBQUE7QUFFRCx1QkFBOEIsR0FBRyxFQUFFLElBQUk7SUFDckNDLElBQUlBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBLHdCQUF3QkEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUE7UUFDdkRBLFVBQVVBLEVBQUVBLElBQUlBO1FBQ2hCQSxZQUFZQSxFQUFFQSxJQUFJQTtLQUNuQkEsQ0FBQ0E7SUFFRkEsa0VBQWtFQTtJQUNsRUEsZ0VBQWdFQTtJQUNoRUEsRUFBRUE7SUFDRkEsaUZBQWlGQTtJQUNqRkEsc0NBQXNDQTtJQUN0Q0EsT0FBT0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDckJBLE9BQU9BLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO0lBRWxCQSwwQ0FBMENBO0lBQzFDQSxJQUFJQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMvQkEsSUFBSUEsS0FBS0EsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFFdkJBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLFVBQVVBLEVBQUVBO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQ0E7SUFFRkEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0E7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQ0E7SUFFRkEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDekNBLENBQUNBO0FBcENlLHFCQUFhLGdCQW9DNUIsQ0FBQTtBQUFBLENBQUM7QUFFRix5QkFBZ0MsR0FBRyxFQUFFLFVBQVc7SUFDOUNDLENBQUNBLFVBQVVBLElBQUlBLENBQUNBO1FBQ1osSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUVBLENBQUNBO1FBQ0pBLE1BQU1BLENBQUNBLFVBQVVBLFlBQVlBO1FBQzNCLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDM0MsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxPQUFPQSxDQUFDQSxVQUFVQSxTQUFTQTtRQUN6QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQ0EsQ0FBQ0E7QUFDUEEsQ0FBQ0E7QUFkZSx1QkFBZSxrQkFjOUIsQ0FBQTtBQUFBLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFMUMsaUNBQXdDLEdBQUc7SUFDekNDLG1FQUFtRUE7SUFDbkVBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQTtJQUN6REEsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxVQUFVQSxTQUFTQSxFQUFFQSxPQUFPQSxFQUFFQSxZQUFZQTtRQUMvRCxzR0FBc0c7UUFDdEcsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQztZQUN4RSxJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN4QiwwRkFBMEY7Z0JBQzFGLDhEQUE4RDtnQkFDOUQsRUFBRSxHQUFHLENBQUMsVUFBUyxPQUFPO29CQUNwQixNQUFNLENBQUM7d0JBQ0wsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNoRCxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUNmLENBQUM7WUFFRCxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUYsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQsaUZBQWlGO1FBQ2pGLGdHQUFnRztRQUNoRyxvREFBb0Q7UUFDcEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQ0E7SUFFRkEsc0VBQXNFQTtJQUN0RUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBO0lBQy9EQSxHQUFHQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFVBQVVBLFNBQVNBLEVBQUVBLE9BQU9BLEVBQUVBLFlBQVlBO1FBQ2xFLElBQUksU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDeEUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRCxzRUFBc0U7UUFDdEUsZ0dBQWdHO1FBQ2hHLG9EQUFvRDtRQUNwRCxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQ0E7QUFDSkEsQ0FBQ0E7QUFuRGUsK0JBQXVCLDBCQW1EdEMsQ0FBQTtBQUFBLENBQUM7QUFFRixJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUxRCxtQ0FBbUM7QUFDbkMsb0JBQTJCLFNBQVM7SUFDbENDLElBQUlBLGFBQWFBLEdBQUdBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQTtRQUFDQSxNQUFNQSxDQUFDQTtJQUUzQkEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0E7UUFDbEIsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUMvRCxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQ25FLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQ3pFLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUMvRSxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQ3JGLFNBQVMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDSCxDQUFDLENBQUNBO0lBRUZBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLGFBQWFBLEVBQUVBLENBQUNBO0lBRW5DQSxJQUFJQSxJQUFJQSxDQUFDQTtJQUNUQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN0QkEsQ0FBQ0EsVUFBVUEsSUFBSUE7WUFDYixFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRixDQUFDLENBQUM7WUFDSixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtvQkFDdkQsR0FBRyxFQUFFLFVBQVUsRUFBRTt3QkFDZixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDekQsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0gsQ0FBQztvQkFDRCxHQUFHLEVBQUU7d0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxDQUFDO2lCQUNGLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ1hBLENBQUNBO0lBRURBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBO1FBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxXQUFXQSxJQUFJQSxhQUFhQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMvREEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDaERBLENBQUNBO0lBQ0hBLENBQUNBO0FBQ0hBLENBQUNBO0FBL0NlLGtCQUFVLGFBK0N6QixDQUFBO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGtleXMgZnJvbSAnLi9rZXlzJztcbi8vIEhhY2sgc2luY2UgVHlwZVNjcmlwdCBpc24ndCBjb21waWxpbmcgdGhpcyBmb3IgYSB3b3JrZXIuXG5kZWNsYXJlIHZhciBXb3JrZXJHbG9iYWxTY29wZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJncykge1xuICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJnc1tpXSA9IGdsb2JhbC56b25lLmJpbmQoYXJnc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoUHJvdG90eXBlKG9iaiwgZm5OYW1lcykge1xuICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGVsZWdhdGUgPSBvYmpbbmFtZV07XG4gICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICBvYmpbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2ViV29ya2VyKCkge1xuICByZXR1cm4gKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpIHtcbiAgcmV0dXJuICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApIHx8IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9O1xuXG4gIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAvLyBkZWxldGluZyB0aGUgd3JpdGFibGUgYW5kIHZhbHVlIHByb3BlcnRpZXMgYXZvaWRzIHRoaXMgZXJyb3I6XG4gIC8vXG4gIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAvLyBnZXR0ZXIgb3Igc2V0dGVyIGhhcyBiZWVuIHNwZWNpZmllZFxuICBkZWxldGUgZGVzYy53cml0YWJsZTtcbiAgZGVsZXRlIGRlc2MudmFsdWU7XG5cbiAgLy8gc3Vic3RyKDIpIGN1eiAnb25jbGljaycgLT4gJ2NsaWNrJywgZXRjXG4gIHZhciBldmVudE5hbWUgPSBwcm9wLnN1YnN0cigyKTtcbiAgdmFyIF9wcm9wID0gJ18nICsgcHJvcDtcblxuICBkZXNjLnNldCA9IGZ1bmN0aW9uIChmbikge1xuICAgIGlmICh0aGlzW19wcm9wXSkge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpc1tfcHJvcF0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbX3Byb3BdID0gZm47XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbiwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW19wcm9wXSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGRlc2MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzW19wcm9wXTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFByb3BlcnRpZXMob2JqLCBwcm9wZXJ0aWVzPykge1xuICAocHJvcGVydGllcyB8fCAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb3BzID0gW107XG4gICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICBwcm9wcy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH0oKSkuXG4gICAgZmlsdGVyKGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWUuc3Vic3RyKDAsMikgPT09ICdvbic7XG4gICAgfSkpLlxuICAgIGZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosIGV2ZW50TmFtZSk7XG4gICAgfSk7XG59O1xuXG52YXIgb3JpZ2luYWxGbktleSA9IGtleXMuY3JlYXRlKCdvcmlnaW5hbEZuJyk7XG52YXIgYm91bmRGbnNLZXkgPSBrZXlzLmNyZWF0ZSgnYm91bmRGbnMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKG9iaikge1xuICAvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciB0aGUgYWRkRXZlbnRMaXN0ZW5lciBob29rIG9uIHRoZSByb290IHpvbmUuXG4gIG9ialtrZXlzLmNvbW1vbi5hZGRFdmVudExpc3RlbmVyXSA9IG9iai5hZGRFdmVudExpc3RlbmVyO1xuICBvYmouYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmluZykge1xuICAgIC8vSWdub3JlIHNwZWNpYWwgbGlzdGVuZXJzIG9mIElFMTEgJiBFZGdlIGRldiB0b29scywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE1MFxuICAgIGlmIChoYW5kbGVyICYmIGhhbmRsZXIudG9TdHJpbmcoKSAhPT0gXCJbb2JqZWN0IEZ1bmN0aW9uV3JhcHBlcl1cIikge1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50TmFtZSArICh1c2VDYXB0dXJpbmcgPyAnJGNhcHR1cmluZycgOiAnJGJ1YmJsaW5nJyk7XG4gICAgICB2YXIgZm47XG4gICAgICBpZiAoaGFuZGxlci5oYW5kbGVFdmVudCkge1xuICAgICAgICAvLyBIYXZlIHRvIHBhc3MgaW4gJ2hhbmRsZXInIHJlZmVyZW5jZSBhcyBhbiBhcmd1bWVudCBoZXJlLCBvdGhlcndpc2UgaXQgZ2V0cyBjbG9iYmVyZWQgaW5cbiAgICAgICAgLy8gSUU5IGJ5IHRoZSBhcmd1bWVudHNbMV0gYXNzaWdubWVudCBhdCBlbmQgb2YgdGhpcyBmdW5jdGlvbi5cbiAgICAgICAgZm4gPSAoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuaGFuZGxlRXZlbnQuYXBwbHkoaGFuZGxlciwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KShoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuID0gaGFuZGxlcjtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlcltvcmlnaW5hbEZuS2V5XSA9IGZuO1xuICAgICAgaGFuZGxlcltib3VuZEZuc0tleV0gPSBoYW5kbGVyW2JvdW5kRm5zS2V5XSB8fCB7fTtcbiAgICAgIGhhbmRsZXJbYm91bmRGbnNLZXldW2V2ZW50VHlwZV0gPSBoYW5kbGVyW2JvdW5kRm5zS2V5XVtldmVudFR5cGVdIHx8IGdsb2JhbC56b25lLmJpbmQoZm4pO1xuICAgICAgYXJndW1lbnRzWzFdID0gaGFuZGxlcltib3VuZEZuc0tleV1bZXZlbnRUeXBlXTtcbiAgICB9XG5cbiAgICAvLyAtIEluc2lkZSBhIFdlYiBXb3JrZXIsIGB0aGlzYCBpcyB1bmRlZmluZWQsIHRoZSBjb250ZXh0IGlzIGBnbG9iYWxgICg9IGBzZWxmYClcbiAgICAvLyAtIFdoZW4gYGFkZEV2ZW50TGlzdGVuZXJgIGlzIGNhbGxlZCBvbiB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gc3RyaWN0IG1vZGUsIGB0aGlzYCBpcyB1bmRlZmluZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgZ2xvYmFsO1xuICAgIHJldHVybiBnbG9iYWwuem9uZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciB0aGUgcmVtb3ZlRXZlbnRMaXN0ZW5lciBob29rIG9uIHRoZSByb290IHpvbmUuXG4gIG9ialtrZXlzLmNvbW1vbi5yZW1vdmVFdmVudExpc3RlbmVyXSA9IG9iai5yZW1vdmVFdmVudExpc3RlbmVyO1xuICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmluZykge1xuICAgIHZhciBldmVudFR5cGUgPSBldmVudE5hbWUgKyAodXNlQ2FwdHVyaW5nID8gJyRjYXB0dXJpbmcnIDogJyRidWJibGluZycpO1xuICAgIGlmIChoYW5kbGVyICYmIGhhbmRsZXJbYm91bmRGbnNLZXldICYmIGhhbmRsZXJbYm91bmRGbnNLZXldW2V2ZW50VHlwZV0pIHtcbiAgICAgIHZhciBfYm91bmQgPSBoYW5kbGVyW2JvdW5kRm5zS2V5XTtcbiAgICAgIGFyZ3VtZW50c1sxXSA9IF9ib3VuZFtldmVudFR5cGVdO1xuICAgICAgZGVsZXRlIF9ib3VuZFtldmVudFR5cGVdO1xuICAgICAgZ2xvYmFsLnpvbmUuZGVxdWV1ZVRhc2soaGFuZGxlcltvcmlnaW5hbEZuS2V5XSk7XG4gICAgfVxuXG4gICAgLy8gLSBJbnNpZGUgYSBXZWIgV29ya2VyLCBgdGhpc2AgaXMgdW5kZWZpbmVkLCB0aGUgY29udGV4dCBpcyBgZ2xvYmFsYFxuICAgIC8vIC0gV2hlbiBgYWRkRXZlbnRMaXN0ZW5lcmAgaXMgY2FsbGVkIG9uIHRoZSBnbG9iYWwgY29udGV4dCBpbiBzdHJpY3QgbW9kZSwgYHRoaXNgIGlzIHVuZGVmaW5lZFxuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBnbG9iYWw7XG4gICAgdmFyIHJlc3VsdCA9IGdsb2JhbC56b25lLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG52YXIgb3JpZ2luYWxJbnN0YW5jZUtleSA9IGtleXMuY3JlYXRlKCdvcmlnaW5hbEluc3RhbmNlJyk7XG5cbi8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgdmFyIE9yaWdpbmFsQ2xhc3MgPSBnbG9iYWxbY2xhc3NOYW1lXTtcbiAgaWYgKCFPcmlnaW5hbENsYXNzKSByZXR1cm47XG5cbiAgZ2xvYmFsW2NsYXNzTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGEgPSBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgc3dpdGNoIChhLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdKTsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdKTsgYnJlYWs7XG4gICAgICBjYXNlIDQ6IHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdLCBhWzNdKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ3doYXQgYXJlIHlvdSBldmVuIGRvaW5nPycpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaW5zdGFuY2UgPSBuZXcgT3JpZ2luYWxDbGFzcygpO1xuXG4gIHZhciBwcm9wO1xuICBmb3IgKHByb3AgaW4gaW5zdGFuY2UpIHtcbiAgICAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlW3Byb3BdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlLCBwcm9wLCB7XG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IGdsb2JhbC56b25lLmJpbmQoZm4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IGZuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0ocHJvcCkpO1xuICB9XG5cbiAgZm9yIChwcm9wIGluIE9yaWdpbmFsQ2xhc3MpIHtcbiAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScgJiYgT3JpZ2luYWxDbGFzcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgZ2xvYmFsW2NsYXNzTmFtZV1bcHJvcF0gPSBPcmlnaW5hbENsYXNzW3Byb3BdO1xuICAgIH1cbiAgfVxufTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var fnPatch = __webpack_require__(11);
	var promisePatch = __webpack_require__(8);
	var mutationObserverPatch = __webpack_require__(13);
	var definePropertyPatch = __webpack_require__(14);
	var registerElementPatch = __webpack_require__(15);
	var eventTargetPatch = __webpack_require__(16);
	var propertyDescriptorPatch = __webpack_require__(17);
	var geolocationPatch = __webpack_require__(19);
	var fileReaderPatch = __webpack_require__(20);
	function apply() {
	    fnPatch.patchSetClearFunction(global, global.Zone, [
	        ['setTimeout', 'clearTimeout', false, false],
	        ['setInterval', 'clearInterval', true, false],
	        ['setImmediate', 'clearImmediate', false, false],
	        ['requestAnimationFrame', 'cancelAnimationFrame', false, true],
	        ['mozRequestAnimationFrame', 'mozCancelAnimationFrame', false, true],
	        ['webkitRequestAnimationFrame', 'webkitCancelAnimationFrame', false, true]
	    ]);
	    fnPatch.patchFunction(global, [
	        'alert',
	        'prompt'
	    ]);
	    eventTargetPatch.apply();
	    propertyDescriptorPatch.apply();
	    promisePatch.apply();
	    mutationObserverPatch.patchClass('MutationObserver');
	    mutationObserverPatch.patchClass('WebKitMutationObserver');
	    definePropertyPatch.apply();
	    registerElementPatch.apply();
	    geolocationPatch.apply();
	    fileReaderPatch.apply();
	}
	exports.apply = apply;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wYXRjaC9icm93c2VyLnRzIl0sIm5hbWVzIjpbImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFZLE9BQU8sV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUN2QyxJQUFZLFlBQVksV0FBTSxXQUFXLENBQUMsQ0FBQTtBQUMxQyxJQUFZLHFCQUFxQixXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDN0QsSUFBWSxtQkFBbUIsV0FBTSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3pELElBQVksb0JBQW9CLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUUzRCxJQUFZLGdCQUFnQixXQUFNLGdCQUFnQixDQUFDLENBQUE7QUFDbkQsSUFBWSx1QkFBdUIsV0FBTSx1QkFBdUIsQ0FBQyxDQUFBO0FBQ2pFLElBQVksZ0JBQWdCLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFDbEQsSUFBWSxlQUFlLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFFakQ7SUFDRUEsT0FBT0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQTtRQUNqREEsQ0FBQ0EsWUFBWUEsRUFBRUEsY0FBY0EsRUFBRUEsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0E7UUFDNUNBLENBQUNBLGFBQWFBLEVBQUVBLGVBQWVBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBO1FBQzdDQSxDQUFDQSxjQUFjQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLEtBQUtBLEVBQUVBLEtBQUtBLENBQUNBO1FBQ2hEQSxDQUFDQSx1QkFBdUJBLEVBQUVBLHNCQUFzQkEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0E7UUFDOURBLENBQUNBLDBCQUEwQkEsRUFBRUEseUJBQXlCQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQTtRQUNwRUEsQ0FBQ0EsNkJBQTZCQSxFQUFFQSw0QkFBNEJBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBO0tBQzNFQSxDQUFDQSxDQUFDQTtJQUVIQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxFQUFFQTtRQUM1QkEsT0FBT0E7UUFDUEEsUUFBUUE7S0FDVEEsQ0FBQ0EsQ0FBQ0E7SUFFSEEsZ0JBQWdCQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUV6QkEsdUJBQXVCQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUVoQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7SUFFckJBLHFCQUFxQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtJQUNyREEscUJBQXFCQSxDQUFDQSxVQUFVQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBO0lBRTNEQSxtQkFBbUJBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBRTVCQSxvQkFBb0JBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBRTdCQSxnQkFBZ0JBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBRXpCQSxlQUFlQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtBQUMxQkEsQ0FBQ0E7QUEvQmUsYUFBSyxRQStCcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZuUGF0Y2ggZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICogYXMgcHJvbWlzZVBhdGNoIGZyb20gJy4vcHJvbWlzZSc7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbk9ic2VydmVyUGF0Y2ggZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQgKiBhcyBkZWZpbmVQcm9wZXJ0eVBhdGNoIGZyb20gJy4vZGVmaW5lLXByb3BlcnR5JztcbmltcG9ydCAqIGFzIHJlZ2lzdGVyRWxlbWVudFBhdGNoIGZyb20gJy4vcmVnaXN0ZXItZWxlbWVudCc7XG5pbXBvcnQgKiBhcyB3ZWJTb2NrZXRQYXRjaCBmcm9tICcuL3dlYnNvY2tldCc7XG5pbXBvcnQgKiBhcyBldmVudFRhcmdldFBhdGNoIGZyb20gJy4vZXZlbnQtdGFyZ2V0JztcbmltcG9ydCAqIGFzIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoIGZyb20gJy4vcHJvcGVydHktZGVzY3JpcHRvcic7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvblBhdGNoIGZyb20gJy4vZ2VvbG9jYXRpb24nO1xuaW1wb3J0ICogYXMgZmlsZVJlYWRlclBhdGNoIGZyb20gJy4vZmlsZS1yZWFkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoKSB7XG4gIGZuUGF0Y2gucGF0Y2hTZXRDbGVhckZ1bmN0aW9uKGdsb2JhbCwgZ2xvYmFsLlpvbmUsIFtcbiAgICBbJ3NldFRpbWVvdXQnLCAnY2xlYXJUaW1lb3V0JywgZmFsc2UsIGZhbHNlXSxcbiAgICBbJ3NldEludGVydmFsJywgJ2NsZWFySW50ZXJ2YWwnLCB0cnVlLCBmYWxzZV0sXG4gICAgWydzZXRJbW1lZGlhdGUnLCAnY2xlYXJJbW1lZGlhdGUnLCBmYWxzZSwgZmFsc2VdLFxuICAgIFsncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ2NhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdLFxuICAgIFsnbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ21vekNhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdLFxuICAgIFsnd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ3dlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdXG4gIF0pO1xuXG4gIGZuUGF0Y2gucGF0Y2hGdW5jdGlvbihnbG9iYWwsIFtcbiAgICAnYWxlcnQnLFxuICAgICdwcm9tcHQnXG4gIF0pO1xuXG4gIGV2ZW50VGFyZ2V0UGF0Y2guYXBwbHkoKTtcblxuICBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaC5hcHBseSgpO1xuXG4gIHByb21pc2VQYXRjaC5hcHBseSgpO1xuXG4gIG11dGF0aW9uT2JzZXJ2ZXJQYXRjaC5wYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG4gIG11dGF0aW9uT2JzZXJ2ZXJQYXRjaC5wYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG5cbiAgZGVmaW5lUHJvcGVydHlQYXRjaC5hcHBseSgpO1xuXG4gIHJlZ2lzdGVyRWxlbWVudFBhdGNoLmFwcGx5KCk7XG5cbiAgZ2VvbG9jYXRpb25QYXRjaC5hcHBseSgpO1xuXG4gIGZpbGVSZWFkZXJQYXRjaC5hcHBseSgpO1xufVxuXG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var wtf = __webpack_require__(12);
	function patchSetClearFunction(window, Zone, fnNames) {
	    function patchMacroTaskMethod(setName, clearName, repeating, isRaf) {
	        var setNative = window[setName];
	        var clearNative = window[clearName];
	        var ids = {};
	        if (setNative) {
	            var wtfSetEventFn = wtf.createEvent('Zone#' + setName + '(uint32 zone, uint32 id, uint32 delay)');
	            var wtfClearEventFn = wtf.createEvent('Zone#' + clearName + '(uint32 zone, uint32 id)');
	            var wtfCallbackFn = wtf.createScope('Zone#cb:' + setName + '(uint32 zone, uint32 id, uint32 delay)');
	            // Forward all calls from the window through the zone.
	            window[setName] = function () {
	                return global.zone[setName].apply(global.zone, arguments);
	            };
	            window[clearName] = function () {
	                return global.zone[clearName].apply(global.zone, arguments);
	            };
	            // Set up zone processing for the set function.
	            Zone.prototype[setName] = function (fn, delay) {
	                // We need to save `fn` in var different then argument. This is because
	                // in IE9 `argument[0]` and `fn` have same identity, and assigning to
	                // `argument[0]` changes `fn`.
	                var callbackFn = fn;
	                if (typeof callbackFn !== 'function') {
	                    // force the error by calling the method with wrong args
	                    setNative.apply(window, arguments);
	                }
	                var zone = this;
	                var setId = null;
	                // wrap the callback function into the zone.
	                arguments[0] = function () {
	                    var callbackZone = zone.isRootZone() || isRaf ? zone : zone.fork();
	                    var callbackThis = this;
	                    var callbackArgs = arguments;
	                    return wtf.leaveScope(wtfCallbackFn(callbackZone.$id, setId, delay), callbackZone.run(function () {
	                        if (!repeating) {
	                            delete ids[setId];
	                            callbackZone.removeTask(callbackFn);
	                        }
	                        return callbackFn.apply(callbackThis, callbackArgs);
	                    }));
	                };
	                if (repeating) {
	                    zone.addRepeatingTask(callbackFn);
	                }
	                else {
	                    zone.addTask(callbackFn);
	                }
	                setId = setNative.apply(window, arguments);
	                ids[setId] = callbackFn;
	                wtfSetEventFn(zone.$id, setId, delay);
	                return setId;
	            };
	            Zone.prototype[setName + 'Unpatched'] = function () {
	                return setNative.apply(window, arguments);
	            };
	            // Set up zone processing for the clear function.
	            Zone.prototype[clearName] = function (id) {
	                wtfClearEventFn(this.$id, id);
	                if (ids.hasOwnProperty(id)) {
	                    var callbackFn = ids[id];
	                    delete ids[id];
	                    if (repeating) {
	                        this.removeRepeatingTask(callbackFn);
	                    }
	                    else {
	                        this.removeTask(callbackFn);
	                    }
	                }
	                return clearNative.apply(window, arguments);
	            };
	            Zone.prototype[clearName + 'Unpatched'] = function () {
	                return clearNative.apply(window, arguments);
	            };
	        }
	    }
	    fnNames.forEach(function (args) {
	        patchMacroTaskMethod.apply(null, args);
	    });
	}
	exports.patchSetClearFunction = patchSetClearFunction;
	;
	function patchFunction(obj, fnNames) {
	    fnNames.forEach(function (name) {
	        var delegate = obj[name];
	        global.zone[name] = function () {
	            return delegate.apply(obj, arguments);
	        };
	        obj[name] = function () {
	            return global.zone[name].apply(this, arguments);
	        };
	    });
	}
	exports.patchFunction = patchFunction;
	;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3BhdGNoL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6WyJwYXRjaFNldENsZWFyRnVuY3Rpb24iLCJwYXRjaFNldENsZWFyRnVuY3Rpb24ucGF0Y2hNYWNyb1Rhc2tNZXRob2QiLCJwYXRjaEZ1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFDQSxJQUFZLEdBQUcsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUU5QiwrQkFBc0MsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPO0lBQ3pEQSw4QkFBOEJBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLEtBQUtBO1FBQ2hFQyxJQUFJQSxTQUFTQSxHQUFHQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUNoQ0EsSUFBSUEsV0FBV0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDcENBLElBQUlBLEdBQUdBLEdBQUdBLEVBQUVBLENBQUNBO1FBRWJBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2RBLElBQUlBLGFBQWFBLEdBQUdBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLEdBQUdBLHdDQUF3Q0EsQ0FBQ0EsQ0FBQ0E7WUFDbEdBLElBQUlBLGVBQWVBLEdBQUdBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLEdBQUdBLDBCQUEwQkEsQ0FBQ0EsQ0FBQ0E7WUFDeEZBLElBQUlBLGFBQWFBLEdBQUdBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLFVBQVVBLEdBQUdBLE9BQU9BLEdBQUdBLHdDQUF3Q0EsQ0FBQ0EsQ0FBQ0E7WUFFckdBLHNEQUFzREE7WUFDdERBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBO2dCQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUNBO1lBQ0ZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBO2dCQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUNBO1lBR0ZBLCtDQUErQ0E7WUFDL0NBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLFVBQVVBLEVBQUVBLEVBQUVBLEtBQUtBO2dCQUMzQyx1RUFBdUU7Z0JBQ3ZFLHFFQUFxRTtnQkFDckUsOEJBQThCO2dCQUM5QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLHdEQUF3RDtvQkFDeEQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLDRDQUE0QztnQkFDNUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHO29CQUNiLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbkUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLFlBQVksR0FBRyxTQUFTLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUNqQixhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQzdDLFlBQVksQ0FBQyxHQUFHLENBQUM7d0JBQ2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNmLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNsQixZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO3dCQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDdEQsQ0FBQyxDQUFDLENBQ0wsQ0FBQztnQkFDSixDQUFDLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQ0E7WUFFRkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsR0FBR0EsV0FBV0EsQ0FBQ0EsR0FBR0E7Z0JBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUNBO1lBRUZBLGlEQUFpREE7WUFDakRBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLFVBQVVBLEVBQUVBO2dCQUN0QyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDekIsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2YsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUNBO1lBRUZBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEdBQUdBLFdBQVdBLENBQUNBLEdBQUdBO2dCQUN4QyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDQTtRQUVKQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUNERCxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFTQSxJQUFJQTtRQUMzQixvQkFBb0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQ0EsQ0FBQ0E7QUFDTEEsQ0FBQ0E7QUF2RmUsNkJBQXFCLHdCQXVGcEMsQ0FBQTtBQUFBLENBQUM7QUFFRix1QkFBOEIsR0FBRyxFQUFFLE9BQU87SUFDeENFLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLElBQUlBO1FBQzVCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDVixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQ0EsQ0FBQ0E7QUFDTEEsQ0FBQ0E7QUFYZSxxQkFBYSxnQkFXNUIsQ0FBQTtBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyB3dGYgZnJvbSAnLi4vd3RmJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoU2V0Q2xlYXJGdW5jdGlvbih3aW5kb3csIFpvbmUsIGZuTmFtZXMpIHtcbiAgZnVuY3Rpb24gcGF0Y2hNYWNyb1Rhc2tNZXRob2Qoc2V0TmFtZSwgY2xlYXJOYW1lLCByZXBlYXRpbmcsIGlzUmFmKSB7XG4gICAgdmFyIHNldE5hdGl2ZSA9IHdpbmRvd1tzZXROYW1lXTtcbiAgICB2YXIgY2xlYXJOYXRpdmUgPSB3aW5kb3dbY2xlYXJOYW1lXTtcbiAgICB2YXIgaWRzID0ge307XG5cbiAgICBpZiAoc2V0TmF0aXZlKSB7XG4gICAgICB2YXIgd3RmU2V0RXZlbnRGbiA9IHd0Zi5jcmVhdGVFdmVudCgnWm9uZSMnICsgc2V0TmFtZSArICcodWludDMyIHpvbmUsIHVpbnQzMiBpZCwgdWludDMyIGRlbGF5KScpO1xuICAgICAgdmFyIHd0ZkNsZWFyRXZlbnRGbiA9IHd0Zi5jcmVhdGVFdmVudCgnWm9uZSMnICsgY2xlYXJOYW1lICsgJyh1aW50MzIgem9uZSwgdWludDMyIGlkKScpO1xuICAgICAgdmFyIHd0ZkNhbGxiYWNrRm4gPSB3dGYuY3JlYXRlU2NvcGUoJ1pvbmUjY2I6JyArIHNldE5hbWUgKyAnKHVpbnQzMiB6b25lLCB1aW50MzIgaWQsIHVpbnQzMiBkZWxheSknKTtcblxuICAgICAgLy8gRm9yd2FyZCBhbGwgY2FsbHMgZnJvbSB0aGUgd2luZG93IHRocm91Z2ggdGhlIHpvbmUuXG4gICAgICB3aW5kb3dbc2V0TmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuem9uZVtzZXROYW1lXS5hcHBseShnbG9iYWwuem9uZSwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3dbY2xlYXJOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC56b25lW2NsZWFyTmFtZV0uYXBwbHkoZ2xvYmFsLnpvbmUsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG5cbiAgICAgIC8vIFNldCB1cCB6b25lIHByb2Nlc3NpbmcgZm9yIHRoZSBzZXQgZnVuY3Rpb24uXG4gICAgICBab25lLnByb3RvdHlwZVtzZXROYW1lXSA9IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBzYXZlIGBmbmAgaW4gdmFyIGRpZmZlcmVudCB0aGVuIGFyZ3VtZW50LiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgICAgLy8gaW4gSUU5IGBhcmd1bWVudFswXWAgYW5kIGBmbmAgaGF2ZSBzYW1lIGlkZW50aXR5LCBhbmQgYXNzaWduaW5nIHRvXG4gICAgICAgIC8vIGBhcmd1bWVudFswXWAgY2hhbmdlcyBgZm5gLlxuICAgICAgICB2YXIgY2FsbGJhY2tGbiA9IGZuO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrRm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBmb3JjZSB0aGUgZXJyb3IgYnkgY2FsbGluZyB0aGUgbWV0aG9kIHdpdGggd3JvbmcgYXJnc1xuICAgICAgICAgIHNldE5hdGl2ZS5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHpvbmUgPSB0aGlzO1xuICAgICAgICB2YXIgc2V0SWQgPSBudWxsO1xuICAgICAgICAvLyB3cmFwIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnRvIHRoZSB6b25lLlxuICAgICAgICBhcmd1bWVudHNbMF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2tab25lID0gem9uZS5pc1Jvb3Rab25lKCkgfHwgaXNSYWYgPyB6b25lIDogem9uZS5mb3JrKCk7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrVGhpcyA9IHRoaXM7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrQXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICByZXR1cm4gd3RmLmxlYXZlU2NvcGUoXG4gICAgICAgICAgICAgIHd0ZkNhbGxiYWNrRm4oY2FsbGJhY2tab25lLiRpZCwgc2V0SWQsIGRlbGF5KSxcbiAgICAgICAgICAgICAgY2FsbGJhY2tab25lLnJ1bihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdGluZykge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIGlkc1tzZXRJZF07XG4gICAgICAgICAgICAgICAgICBjYWxsYmFja1pvbmUucmVtb3ZlVGFzayhjYWxsYmFja0ZuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm4uYXBwbHkoY2FsbGJhY2tUaGlzLCBjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXBlYXRpbmcpIHtcbiAgICAgICAgICB6b25lLmFkZFJlcGVhdGluZ1Rhc2soY2FsbGJhY2tGbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgem9uZS5hZGRUYXNrKGNhbGxiYWNrRm4pO1xuICAgICAgICB9XG4gICAgICAgIHNldElkID0gc2V0TmF0aXZlLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcbiAgICAgICAgaWRzW3NldElkXSA9IGNhbGxiYWNrRm47XG4gICAgICAgIHd0ZlNldEV2ZW50Rm4oem9uZS4kaWQsIHNldElkLCBkZWxheSk7XG4gICAgICAgIHJldHVybiBzZXRJZDtcbiAgICAgIH07XG5cbiAgICAgIFpvbmUucHJvdG90eXBlW3NldE5hbWUgKyAnVW5wYXRjaGVkJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHNldE5hdGl2ZS5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG4gICAgICAvLyBTZXQgdXAgem9uZSBwcm9jZXNzaW5nIGZvciB0aGUgY2xlYXIgZnVuY3Rpb24uXG4gICAgICBab25lLnByb3RvdHlwZVtjbGVhck5hbWVdID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHd0ZkNsZWFyRXZlbnRGbih0aGlzLiRpZCwgaWQpO1xuICAgICAgICBpZiAoaWRzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIHZhciBjYWxsYmFja0ZuID0gaWRzW2lkXTtcbiAgICAgICAgICBkZWxldGUgaWRzW2lkXTtcbiAgICAgICAgICBpZiAocmVwZWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVJlcGVhdGluZ1Rhc2soY2FsbGJhY2tGbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFzayhjYWxsYmFja0ZuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcbiAgICAgIH07XG5cbiAgICAgIFpvbmUucHJvdG90eXBlW2NsZWFyTmFtZSArICdVbnBhdGNoZWQnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY2xlYXJOYXRpdmUuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuICAgIH1cbiAgfVxuICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24oYXJncykge1xuICAgIHBhdGNoTWFjcm9UYXNrTWV0aG9kLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEZ1bmN0aW9uKG9iaiwgZm5OYW1lcykge1xuICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGVsZWdhdGUgPSBvYmpbbmFtZV07XG4gICAgZ2xvYmFsLnpvbmVbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBvYmpbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsLnpvbmVbbmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KTtcbn07XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {// Detect and setup WTF.
	var wtfTrace = null;
	var wtfEvents = null;
	var wtfEnabled = (function () {
	    var wtf = global['wtf'];
	    if (wtf) {
	        wtfTrace = wtf['trace'];
	        if (wtfTrace) {
	            wtfEvents = wtfTrace['events'];
	            return true;
	        }
	    }
	    return false;
	})();
	function noop() {
	}
	exports.enabled = wtfEnabled;
	exports.createScope = wtfEnabled ? function (signature, flags) {
	    return wtfEvents.createScope(signature, flags);
	} : function (s, f) {
	    return noop;
	};
	exports.createEvent = wtfEnabled ? function (signature, flags) {
	    return wtfEvents.createInstance(signature, flags);
	} : function (s, f) {
	    return noop;
	};
	exports.leaveScope = wtfEnabled ? function (scope, returnValue) {
	    wtfTrace.leaveScope(scope, returnValue);
	    return returnValue;
	} : function (s, v) {
	    return v;
	};
	exports.beginTimeRange = wtfEnabled ? function (rangeType, action) {
	    return wtfTrace.beginTimeRange(rangeType, action);
	} : function (t, a) {
	    return null;
	};
	exports.endTimeRange = wtfEnabled ? function (range) {
	    wtfTrace.endTimeRange(range);
	} : function (r) {
	};
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3RmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3d0Zi50cyJdLCJuYW1lcyI6WyJub29wIl0sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFJLFVBQVUsR0FBRyxDQUFDO0lBQ2hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1IsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMO0FBQ0FBLENBQUNBO0FBVVksZUFBTyxHQUFXLFVBQVUsQ0FBQztBQUM3QixtQkFBVyxHQUFnRCxVQUFVLEdBQUcsVUFBVSxTQUFTLEVBQUUsS0FBSztJQUM3RyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakQsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNXLG1CQUFXLEdBQXVELFVBQVUsR0FBRyxVQUFVLFNBQVMsRUFBRSxLQUFLO0lBQ3BILE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwRCxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ1csa0JBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxLQUFnQixFQUFFLFdBQWU7SUFDaEYsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNyQixDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBQ1csc0JBQWMsR0FBRyxVQUFVLEdBQUcsVUFBVSxTQUFTLEVBQUUsTUFBTTtJQUNwRSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNXLG9CQUFZLEdBQUcsVUFBVSxHQUFHLFVBQVUsS0FBSztJQUN0RCxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsR0FBRyxVQUFVLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXRlY3QgYW5kIHNldHVwIFdURi5cbnZhciB3dGZUcmFjZSA9IG51bGw7XG52YXIgd3RmRXZlbnRzID0gbnVsbDtcbnZhciB3dGZFbmFibGVkID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHd0ZiA9IGdsb2JhbFsnd3RmJ107XG4gIGlmICh3dGYpIHtcbiAgICB3dGZUcmFjZSA9IHd0ZlsndHJhY2UnXTtcbiAgICBpZiAod3RmVHJhY2UpIHtcbiAgICAgIHd0ZkV2ZW50cyA9IHd0ZlRyYWNlWydldmVudHMnXTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG5mdW5jdGlvbiBub29wKCkge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFd0ZlNjb3BlRm4ge1xuICAoLi4uYXJncyk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXdGZFdmVudEZuIHtcbiAgKC4uLmFyZ3MpOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBlbmFibGVkOmJvb2xlYW4gPSB3dGZFbmFibGVkO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNjb3BlOihzaWduYXR1cmU6c3RyaW5nLCBmbGFncz86YW55KSA9PiBXdGZTY29wZUZuID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChzaWduYXR1cmUsIGZsYWdzKSB7XG4gIHJldHVybiB3dGZFdmVudHMuY3JlYXRlU2NvcGUoc2lnbmF0dXJlLCBmbGFncyk7XG59IDogZnVuY3Rpb24gKHMsIGYpIHtcbiAgcmV0dXJuIG5vb3A7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50OiAoc2lnbmF0dXJlOiBzdHJpbmcsIGFjdGlvbj86IHN0cmluZykgPT4gV3RmRXZlbnRGbiA9IHd0ZkVuYWJsZWQgPyBmdW5jdGlvbiAoc2lnbmF0dXJlLCBmbGFncykge1xuICByZXR1cm4gd3RmRXZlbnRzLmNyZWF0ZUluc3RhbmNlKHNpZ25hdHVyZSwgZmxhZ3MpO1xufSA6IGZ1bmN0aW9uIChzLCBmKSB7XG4gIHJldHVybiBub29wO1xufTtcbmV4cG9ydCBjb25zdCBsZWF2ZVNjb3BlID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChzY29wZTpXdGZTY29wZUZuLCByZXR1cm5WYWx1ZTphbnkpOmFueSB7XG4gIHd0ZlRyYWNlLmxlYXZlU2NvcGUoc2NvcGUsIHJldHVyblZhbHVlKTtcbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufSA6IGZ1bmN0aW9uIChzLCB2KSB7XG4gIHJldHVybiB2O1xufTtcbmV4cG9ydCBjb25zdCBiZWdpblRpbWVSYW5nZSA9IHd0ZkVuYWJsZWQgPyBmdW5jdGlvbiAocmFuZ2VUeXBlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHd0ZlRyYWNlLmJlZ2luVGltZVJhbmdlKHJhbmdlVHlwZSwgYWN0aW9uKTtcbn0gOiBmdW5jdGlvbiAodCwgYSkge1xuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgY29uc3QgZW5kVGltZVJhbmdlID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChyYW5nZSkge1xuICB3dGZUcmFjZS5lbmRUaW1lUmFuZ2UocmFuZ2UpO1xufSA6IGZ1bmN0aW9uIChyKSB7XG59O1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var keys = __webpack_require__(7);
	var originalInstanceKey = keys.create('originalInstance');
	var creationZoneKey = keys.create('creationZone');
	var isActiveKey = keys.create('isActive');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = global[className];
	    if (!OriginalClass)
	        return;
	    global[className] = function (fn) {
	        this[originalInstanceKey] = new OriginalClass(global.zone.bind(fn, true));
	        // Remember where the class was instantiate to execute the enqueueTask and dequeueTask hooks
	        this[creationZoneKey] = global.zone;
	    };
	    var instance = new OriginalClass(function () { });
	    global[className].prototype.disconnect = function () {
	        var result = this[originalInstanceKey].disconnect.apply(this[originalInstanceKey], arguments);
	        if (this[isActiveKey]) {
	            this[creationZoneKey].dequeueTask();
	            this[isActiveKey] = false;
	        }
	        return result;
	    };
	    global[className].prototype.observe = function () {
	        if (!this[isActiveKey]) {
	            this[creationZoneKey].enqueueTask();
	            this[isActiveKey] = true;
	        }
	        return this[originalInstanceKey].observe.apply(this[originalInstanceKey], arguments);
	    };
	    var prop;
	    for (prop in instance) {
	        (function (prop) {
	            if (typeof global[className].prototype !== 'undefined') {
	                return;
	            }
	            if (typeof instance[prop] === 'function') {
	                global[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                Object.defineProperty(global[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = global.zone.bind(fn);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	}
	exports.patchClass = patchClass;
	;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb24tb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcGF0Y2gvbXV0YXRpb24tb2JzZXJ2ZXIudHMiXSwibmFtZXMiOlsicGF0Y2hDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFaEMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNsRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTFDLG1DQUFtQztBQUNuQyxvQkFBMkIsU0FBUztJQUNsQ0EsSUFBSUEsYUFBYUEsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFDdENBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBO1FBQUNBLE1BQU1BLENBQUNBO0lBRTNCQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxVQUFVQSxFQUFFQTtRQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRSw0RkFBNEY7UUFDNUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQyxDQUFDQTtJQUVGQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxhQUFhQSxDQUFDQSxjQUFhLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFFakRBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLEdBQUdBO1FBQ3ZDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUNBO0lBRUZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLEdBQUdBO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkYsQ0FBQyxDQUFDQTtJQUVGQSxJQUFJQSxJQUFJQSxDQUFDQTtJQUNUQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN0QkEsQ0FBQ0EsVUFBVUEsSUFBSUE7WUFDYixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JGLENBQUMsQ0FBQztZQUNKLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFO29CQUN2RCxHQUFHLEVBQUUsVUFBVSxFQUFFO3dCQUNmLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RCxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDdkMsQ0FBQztvQkFDSCxDQUFDO29CQUNELEdBQUcsRUFBRTt3QkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUMsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDWEEsQ0FBQ0E7QUFDSEEsQ0FBQ0E7QUF2RGUsa0JBQVUsYUF1RHpCLENBQUE7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga2V5cyBmcm9tICcuLi9rZXlzJztcblxudmFyIG9yaWdpbmFsSW5zdGFuY2VLZXkgPSBrZXlzLmNyZWF0ZSgnb3JpZ2luYWxJbnN0YW5jZScpO1xudmFyIGNyZWF0aW9uWm9uZUtleSA9IGtleXMuY3JlYXRlKCdjcmVhdGlvblpvbmUnKTtcbnZhciBpc0FjdGl2ZUtleSA9IGtleXMuY3JlYXRlKCdpc0FjdGl2ZScpO1xuXG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIHZhciBPcmlnaW5hbENsYXNzID0gZ2xvYmFsW2NsYXNzTmFtZV07XG4gIGlmICghT3JpZ2luYWxDbGFzcykgcmV0dXJuO1xuXG4gIGdsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGdsb2JhbC56b25lLmJpbmQoZm4sIHRydWUpKTtcbiAgICAvLyBSZW1lbWJlciB3aGVyZSB0aGUgY2xhc3Mgd2FzIGluc3RhbnRpYXRlIHRvIGV4ZWN1dGUgdGhlIGVucXVldWVUYXNrIGFuZCBkZXF1ZXVlVGFzayBob29rc1xuICAgIHRoaXNbY3JlYXRpb25ab25lS2V5XSA9IGdsb2JhbC56b25lO1xuICB9O1xuXG4gIHZhciBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHt9KTtcblxuICBnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XS5kaXNjb25uZWN0LmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXNbaXNBY3RpdmVLZXldKSB7XG4gICAgICB0aGlzW2NyZWF0aW9uWm9uZUtleV0uZGVxdWV1ZVRhc2soKTtcbiAgICAgIHRoaXNbaXNBY3RpdmVLZXldID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzW2lzQWN0aXZlS2V5XSkge1xuICAgICAgdGhpc1tjcmVhdGlvblpvbmVLZXldLmVucXVldWVUYXNrKCk7XG4gICAgICB0aGlzW2lzQWN0aXZlS2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLm9ic2VydmUuYXBwbHkodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICB2YXIgcHJvcDtcbiAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIGdsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0uYXBwbHkodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZ2xvYmFsLnpvbmUuYmluZChmbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfShwcm9wKSk7XG4gIH1cbn07XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(7);
	// might need similar for object.freeze
	// i regret nothing
	var _defineProperty = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = keys.create('unconfigurables');
	function apply() {
	    Object.defineProperty = function (obj, prop, desc) {
	        if (isUnconfigurable(obj, prop)) {
	            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	        }
	        if (prop !== 'prototype') {
	            desc = rewriteDescriptor(obj, prop, desc);
	        }
	        return _defineProperty(obj, prop, desc);
	    };
	    Object.defineProperties = function (obj, props) {
	        Object.keys(props).forEach(function (prop) {
	            Object.defineProperty(obj, prop, props[prop]);
	        });
	        return obj;
	    };
	    Object.create = function (obj, proto) {
	        if (typeof proto === 'object') {
	            Object.keys(proto).forEach(function (prop) {
	                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	            });
	        }
	        return _create(obj, proto);
	    };
	    Object.getOwnPropertyDescriptor = function (obj, prop) {
	        var desc = _getOwnPropertyDescriptor(obj, prop);
	        if (isUnconfigurable(obj, prop)) {
	            desc.configurable = false;
	        }
	        return desc;
	    };
	}
	exports.apply = apply;
	;
	function _redefineProperty(obj, prop, desc) {
	    desc = rewriteDescriptor(obj, prop, desc);
	    return _defineProperty(obj, prop, desc);
	}
	exports._redefineProperty = _redefineProperty;
	;
	function isUnconfigurable(obj, prop) {
	    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}
	function rewriteDescriptor(obj, prop, desc) {
	    desc.configurable = true;
	    if (!desc.configurable) {
	        if (!obj[unconfigurablesKey]) {
	            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	        }
	        obj[unconfigurablesKey][prop] = true;
	    }
	    return desc;
	}
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLXByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3BhdGNoL2RlZmluZS1wcm9wZXJ0eS50cyJdLCJuYW1lcyI6WyJhcHBseSIsIl9yZWRlZmluZVByb3BlcnR5IiwiaXNVbmNvbmZpZ3VyYWJsZSIsInJld3JpdGVEZXNjcmlwdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFZLElBQUksV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVoQyx1Q0FBdUM7QUFDdkMsbUJBQW1CO0FBRW5CLElBQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDNUMsSUFBSSx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7QUFDaEUsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUM1QixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUV4RDtJQUNFQSxNQUFNQSxDQUFDQSxjQUFjQSxHQUFHQSxVQUFVQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQTtRQUMvQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxTQUFTLENBQUMsd0NBQXdDLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN4RixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUNBO0lBRUZBLE1BQU1BLENBQUNBLGdCQUFnQkEsR0FBR0EsVUFBVUEsR0FBR0EsRUFBRUEsS0FBS0E7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQ3ZDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUNBO0lBRUZBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLFVBQVVBLEdBQUdBLEVBQUVBLEtBQUtBO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUNBO0lBRUZBLE1BQU1BLENBQUNBLHdCQUF3QkEsR0FBR0EsVUFBVUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDbkQsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUNBO0FBQ0pBLENBQUNBO0FBbENlLGFBQUssUUFrQ3BCLENBQUE7QUFBQSxDQUFDO0FBRUYsMkJBQWtDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUMvQ0MsSUFBSUEsR0FBR0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUMxQ0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLENBQUNBO0FBSGUseUJBQWlCLG9CQUdoQyxDQUFBO0FBQUEsQ0FBQztBQUVGLDBCQUEyQixHQUFHLEVBQUUsSUFBSTtJQUNsQ0MsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3pFQSxDQUFDQTtBQUVELDJCQUE0QixHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDekNDLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3pCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsZUFBZUEsQ0FBQ0EsR0FBR0EsRUFBRUEsa0JBQWtCQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMxRUEsQ0FBQ0E7UUFDREEsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7QUFDZEEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBrZXlzIGZyb20gJy4uL2tleXMnO1xuXG4vLyBtaWdodCBuZWVkIHNpbWlsYXIgZm9yIG9iamVjdC5mcmVlemVcbi8vIGkgcmVncmV0IG5vdGhpbmdcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciB1bmNvbmZpZ3VyYWJsZXNLZXkgPSBrZXlzLmNyZWF0ZSgndW5jb25maWd1cmFibGVzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseSgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgZGVzYykge1xuICAgIGlmIChpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBhc3NpZ24gdG8gcmVhZCBvbmx5IHByb3BlcnR5IFxcJycgKyBwcm9wICsgJ1xcJyBvZiAnICsgb2JqKTtcbiAgICB9XG4gICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnKSB7XG4gICAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwgcHJvcHMpIHtcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcHJvcHNbcHJvcF0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChvYmosIHByb3RvKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90byA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHByb3RvKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHByb3RvW3Byb3BdID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBwcm90b1twcm9wXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGUob2JqLCBwcm90byk7XG4gIH07XG5cbiAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICB2YXIgZGVzYyA9IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZGVzYztcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpIHtcbiAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbn07XG5cbmZ1bmN0aW9uIGlzVW5jb25maWd1cmFibGUgKG9iaiwgcHJvcCkge1xuICByZXR1cm4gb2JqICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlRGVzY3JpcHRvciAob2JqLCBwcm9wLCBkZXNjKSB7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgaWYgKCFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgIGlmICghb2JqW3VuY29uZmlndXJhYmxlc0tleV0pIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShvYmosIHVuY29uZmlndXJhYmxlc0tleSwgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0pO1xuICAgIH1cbiAgICBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGRlc2M7XG59XG5cblxuIl19

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var define_property_1 = __webpack_require__(14);
	var utils = __webpack_require__(9);
	function apply() {
	    if (utils.isWebWorker() || utils.isNode() || !('registerElement' in global.document)) {
	        return;
	    }
	    var _registerElement = document.registerElement;
	    var callbacks = [
	        'createdCallback',
	        'attachedCallback',
	        'detachedCallback',
	        'attributeChangedCallback'
	    ];
	    document.registerElement = function (name, opts) {
	        if (opts && opts.prototype) {
	            callbacks.forEach(function (callback) {
	                if (opts.prototype.hasOwnProperty(callback)) {
	                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
	                    if (descriptor && descriptor.value) {
	                        descriptor.value = global.zone.bind(descriptor.value);
	                        define_property_1._redefineProperty(opts.prototype, callback, descriptor);
	                    }
	                    else {
	                        opts.prototype[callback] = global.zone.bind(opts.prototype[callback]);
	                    }
	                }
	                else if (opts.prototype[callback]) {
	                    opts.prototype[callback] = global.zone.bind(opts.prototype[callback]);
	                }
	            });
	        }
	        return _registerElement.apply(document, [name, opts]);
	    };
	}
	exports.apply = apply;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wYXRjaC9yZWdpc3Rlci1lbGVtZW50LnRzIl0sIm5hbWVzIjpbImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0MsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRCxJQUFZLEtBQUssV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUVsQztJQUNFQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxpQkFBaUJBLElBQVVBLE1BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzVGQSxNQUFNQSxDQUFDQTtJQUNUQSxDQUFDQTtJQUVEQSxJQUFJQSxnQkFBZ0JBLEdBQVNBLFFBQVNBLENBQUNBLGVBQWVBLENBQUNBO0lBQ3ZEQSxJQUFJQSxTQUFTQSxHQUFHQTtRQUNkQSxpQkFBaUJBO1FBQ2pCQSxrQkFBa0JBO1FBQ2xCQSxrQkFBa0JBO1FBQ2xCQSwwQkFBMEJBO0tBQzNCQSxDQUFDQTtJQUVJQSxRQUFTQSxDQUFDQSxlQUFlQSxHQUFHQSxVQUFVQSxJQUFJQSxFQUFFQSxJQUFJQTtRQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFFBQVE7Z0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzNFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsVUFBVSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3RELG1DQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUMxRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDQTtBQUNKQSxDQUFDQTtBQWhDZSxhQUFLLFFBZ0NwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtfcmVkZWZpbmVQcm9wZXJ0eX0gZnJvbSAnLi9kZWZpbmUtcHJvcGVydHknO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoKSB7XG4gIGlmICh1dGlscy5pc1dlYldvcmtlcigpIHx8IHV0aWxzLmlzTm9kZSgpIHx8ICEoJ3JlZ2lzdGVyRWxlbWVudCcgaW4gKDxhbnk+Z2xvYmFsKS5kb2N1bWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX3JlZ2lzdGVyRWxlbWVudCA9ICg8YW55PmRvY3VtZW50KS5yZWdpc3RlckVsZW1lbnQ7XG4gIHZhciBjYWxsYmFja3MgPSBbXG4gICAgJ2NyZWF0ZWRDYWxsYmFjaycsXG4gICAgJ2F0dGFjaGVkQ2FsbGJhY2snLFxuICAgICdkZXRhY2hlZENhbGxiYWNrJyxcbiAgICAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ1xuICBdO1xuXG4gICg8YW55PmRvY3VtZW50KS5yZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSwgb3B0cykge1xuICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG4gICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG9wdHMucHJvdG90eXBlLmhhc093blByb3BlcnR5KGNhbGxiYWNrKSkge1xuICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWUpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBnbG9iYWwuem9uZS5iaW5kKGRlc2NyaXB0b3IudmFsdWUpO1xuICAgICAgICAgICAgX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdID0gZ2xvYmFsLnpvbmUuYmluZChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICBvcHRzLnByb3RvdHlwZVtjYWxsYmFja10gPSBnbG9iYWwuem9uZS5iaW5kKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVnaXN0ZXJFbGVtZW50LmFwcGx5KGRvY3VtZW50LCBbbmFtZSwgb3B0c10pO1xuICB9O1xufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	var utils = __webpack_require__(9);
	function apply() {
	    // patched properties depend on addEventListener, so this needs to come first
	    if (global.EventTarget) {
	        utils.patchEventTargetMethods(global.EventTarget.prototype);
	    }
	    else {
	        var apis = [
	            'ApplicationCache',
	            'EventSource',
	            'FileReader',
	            'InputMethodContext',
	            'MediaController',
	            'MessagePort',
	            'Node',
	            'Performance',
	            'SVGElementInstance',
	            'SharedWorker',
	            'TextTrack',
	            'TextTrackCue',
	            'TextTrackList',
	            'WebKitNamedFlow',
	            'Worker',
	            'WorkerGlobalScope',
	            'XMLHttpRequest',
	            'XMLHttpRequestEventTarget',
	            'XMLHttpRequestUpload'
	        ];
	        apis.forEach(function (api) {
	            var proto = global[api] && global[api].prototype;
	            // Some browsers e.g. Android 4.3's don't actually implement
	            // the EventTarget methods for all of these e.g. FileReader.
	            // In this case, there is nothing to patch.
	            if (proto && proto.addEventListener) {
	                utils.patchEventTargetMethods(proto);
	            }
	        });
	        // Patch the methods on `window` instead of `Window.prototype`
	        // `Window` is not accessible on Android 4.3
	        if (typeof (window) !== 'undefined') {
	            utils.patchEventTargetMethods(window);
	        }
	    }
	}
	exports.apply = apply;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtdGFyZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3BhdGNoL2V2ZW50LXRhcmdldC50cyJdLCJuYW1lcyI6WyJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsSUFBWSxLQUFLLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFbEM7SUFDRUEsNkVBQTZFQTtJQUM3RUEsRUFBRUEsQ0FBQ0EsQ0FBT0EsTUFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLEtBQUtBLENBQUNBLHVCQUF1QkEsQ0FBT0EsTUFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFJckVBLENBQUNBO0lBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ05BLElBQUlBLElBQUlBLEdBQUdBO1lBQ1RBLGtCQUFrQkE7WUFDbEJBLGFBQWFBO1lBQ2JBLFlBQVlBO1lBQ1pBLG9CQUFvQkE7WUFDcEJBLGlCQUFpQkE7WUFDakJBLGFBQWFBO1lBQ2JBLE1BQU1BO1lBQ05BLGFBQWFBO1lBQ2JBLG9CQUFvQkE7WUFDcEJBLGNBQWNBO1lBQ2RBLFdBQVdBO1lBQ1hBLGNBQWNBO1lBQ2RBLGVBQWVBO1lBQ2ZBLGlCQUFpQkE7WUFDakJBLFFBQVFBO1lBQ1JBLG1CQUFtQkE7WUFDbkJBLGdCQUFnQkE7WUFDaEJBLDJCQUEyQkE7WUFDM0JBLHNCQUFzQkE7U0FDdkJBLENBQUNBO1FBRUZBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVNBLEdBQUdBO1lBQ3ZCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBRWpELDREQUE0RDtZQUM1RCw0REFBNEQ7WUFDNUQsMkNBQTJDO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNILENBQUMsQ0FBQ0EsQ0FBQ0E7UUFFSEEsOERBQThEQTtRQUM5REEsNENBQTRDQTtRQUM1Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLEtBQUtBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDeENBLENBQUNBO0lBQ0hBLENBQUNBO0FBQ0hBLENBQUNBO0FBL0NlLGFBQUssUUErQ3BCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KCkge1xuICAvLyBwYXRjaGVkIHByb3BlcnRpZXMgZGVwZW5kIG9uIGFkZEV2ZW50TGlzdGVuZXIsIHNvIHRoaXMgbmVlZHMgdG8gY29tZSBmaXJzdFxuICBpZiAoKDxhbnk+Z2xvYmFsKS5FdmVudFRhcmdldCkge1xuICAgIHV0aWxzLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKCg8YW55Pmdsb2JhbCkuRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcblxuICAvLyBOb3RlOiBFdmVudFRhcmdldCBpcyBub3QgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyxcbiAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlLCB3ZSBpbnN0ZWFkIHBhdGNoIHRoZSBBUElzIGluIHRoZSBJREwgdGhhdCBpbmhlcml0IGZyb20gRXZlbnRUYXJnZXRcbiAgfSBlbHNlIHtcbiAgICB2YXIgYXBpcyA9IFtcbiAgICAgICdBcHBsaWNhdGlvbkNhY2hlJyxcbiAgICAgICdFdmVudFNvdXJjZScsXG4gICAgICAnRmlsZVJlYWRlcicsXG4gICAgICAnSW5wdXRNZXRob2RDb250ZXh0JyxcbiAgICAgICdNZWRpYUNvbnRyb2xsZXInLFxuICAgICAgJ01lc3NhZ2VQb3J0JyxcbiAgICAgICdOb2RlJyxcbiAgICAgICdQZXJmb3JtYW5jZScsXG4gICAgICAnU1ZHRWxlbWVudEluc3RhbmNlJyxcbiAgICAgICdTaGFyZWRXb3JrZXInLFxuICAgICAgJ1RleHRUcmFjaycsXG4gICAgICAnVGV4dFRyYWNrQ3VlJyxcbiAgICAgICdUZXh0VHJhY2tMaXN0JyxcbiAgICAgICdXZWJLaXROYW1lZEZsb3cnLFxuICAgICAgJ1dvcmtlcicsXG4gICAgICAnV29ya2VyR2xvYmFsU2NvcGUnLFxuICAgICAgJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICdYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0JyxcbiAgICAgICdYTUxIdHRwUmVxdWVzdFVwbG9hZCdcbiAgICBdO1xuXG4gICAgYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKGFwaSkge1xuICAgICAgdmFyIHByb3RvID0gZ2xvYmFsW2FwaV0gJiYgZ2xvYmFsW2FwaV0ucHJvdG90eXBlO1xuXG4gICAgICAvLyBTb21lIGJyb3dzZXJzIGUuZy4gQW5kcm9pZCA0LjMncyBkb24ndCBhY3R1YWxseSBpbXBsZW1lbnRcbiAgICAgIC8vIHRoZSBFdmVudFRhcmdldCBtZXRob2RzIGZvciBhbGwgb2YgdGhlc2UgZS5nLiBGaWxlUmVhZGVyLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCB0aGVyZSBpcyBub3RoaW5nIHRvIHBhdGNoLlxuICAgICAgaWYgKHByb3RvICYmIHByb3RvLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdXRpbHMucGF0Y2hFdmVudFRhcmdldE1ldGhvZHMocHJvdG8pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUGF0Y2ggdGhlIG1ldGhvZHMgb24gYHdpbmRvd2AgaW5zdGVhZCBvZiBgV2luZG93LnByb3RvdHlwZWBcbiAgICAvLyBgV2luZG93YCBpcyBub3QgYWNjZXNzaWJsZSBvbiBBbmRyb2lkIDQuM1xuICAgIGlmICh0eXBlb2Yod2luZG93KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHV0aWxzLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKHdpbmRvdyk7XG4gICAgfVxuICB9XG59XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var webSocketPatch = __webpack_require__(18);
	var utils = __webpack_require__(9);
	var keys = __webpack_require__(7);
	var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');
	function apply() {
	    if (utils.isNode()) {
	        return;
	    }
	    var supportsWebSocket = typeof WebSocket !== 'undefined';
	    if (canPatchViaPropertyDescriptor()) {
	        // for browsers that we can patch the descriptor:  Chrome & Firefox
	        if (!utils.isWebWorker()) {
	            var onEventNames = eventNames.map(function (property) {
	                return 'on' + property;
	            });
	            utils.patchProperties(HTMLElement.prototype, onEventNames);
	        }
	        utils.patchProperties(XMLHttpRequest.prototype);
	        if (supportsWebSocket) {
	            utils.patchProperties(WebSocket.prototype);
	        }
	    }
	    else {
	        // Safari, Android browsers (Jelly Bean)
	        if (!utils.isWebWorker()) {
	            patchViaCapturingAllTheEvents();
	        }
	        utils.patchClass('XMLHttpRequest');
	        if (supportsWebSocket) {
	            webSocketPatch.apply();
	        }
	    }
	}
	exports.apply = apply;
	function canPatchViaPropertyDescriptor() {
	    if (!utils.isWebWorker() && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick')
	        && typeof Element !== 'undefined') {
	        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	        // IDL interface attributes are not configurable
	        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
	        if (desc && !desc.configurable)
	            return false;
	    }
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
	        get: function () {
	            return true;
	        }
	    });
	    var req = new XMLHttpRequest();
	    var result = !!req.onreadystatechange;
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
	    return result;
	}
	;
	var unboundKey = keys.create('unbound');
	// Whenever any event fires, we check the event target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents() {
	    eventNames.forEach(function (property) {
	        var onproperty = 'on' + property;
	        document.addEventListener(property, function (event) {
	            var elt = event.target, bound;
	            while (elt) {
	                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	                    bound = global.zone.bind(elt[onproperty]);
	                    bound[unboundKey] = elt[onproperty];
	                    elt[onproperty] = bound;
	                }
	                elt = elt.parentElement;
	            }
	        }, true);
	    });
	}
	;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktZGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wYXRjaC9wcm9wZXJ0eS1kZXNjcmlwdG9yLnRzIl0sIm5hbWVzIjpbImFwcGx5IiwiY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IiLCJwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxjQUFjLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDOUMsSUFBWSxLQUFLLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDbEMsSUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFaEMsSUFBSSxVQUFVLEdBQUcsdW1CQUF1bUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFcG9CO0lBQ0VBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ25CQSxNQUFNQSxDQUFDQTtJQUNUQSxDQUFDQTtJQUVEQSxJQUFJQSxpQkFBaUJBLEdBQUdBLE9BQU9BLFNBQVNBLEtBQUtBLFdBQVdBLENBQUNBO0lBQ3pEQSxFQUFFQSxDQUFDQSxDQUFDQSw2QkFBNkJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ3BDQSxtRUFBbUVBO1FBQ25FQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFBQSxDQUFDQTtZQUN4QkEsSUFBSUEsWUFBWUEsR0FBR0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsUUFBUUE7Z0JBQ2xELE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLENBQUMsQ0FBQ0EsQ0FBQ0E7WUFDSEEsS0FBS0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsRUFBRUEsWUFBWUEsQ0FBQ0EsQ0FBQ0E7UUFDN0RBLENBQUNBO1FBQ0RBLEtBQUtBLENBQUNBLGVBQWVBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBQ2hEQSxFQUFFQSxDQUFDQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RCQSxLQUFLQSxDQUFDQSxlQUFlQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUM3Q0EsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDTkEsd0NBQXdDQTtRQUN4Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDeEJBLDZCQUE2QkEsRUFBRUEsQ0FBQ0E7UUFDbENBLENBQUNBO1FBQ0RBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLEVBQUVBLENBQUNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLGNBQWNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1FBQ3pCQSxDQUFDQTtJQUNIQSxDQUFDQTtBQUNIQSxDQUFDQTtBQTVCZSxhQUFLLFFBNEJwQixDQUFBO0FBRUQ7SUFDRUMsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0Esd0JBQXdCQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQTtXQUN2RkEsT0FBT0EsT0FBT0EsS0FBS0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDdENBLHdEQUF3REE7UUFDeERBLGdEQUFnREE7UUFDaERBLElBQUlBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBLHdCQUF3QkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDekVBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBO1lBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQy9DQSxDQUFDQTtJQUVEQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxFQUFFQSxvQkFBb0JBLEVBQUVBO1FBQ3BFQSxHQUFHQSxFQUFFQTtZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQ0ZBLENBQUNBLENBQUNBO0lBQ0hBLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLGNBQWNBLEVBQUVBLENBQUNBO0lBQy9CQSxJQUFJQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBO0lBQ3RDQSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxFQUFFQSxvQkFBb0JBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0lBQzFFQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtBQUNoQkEsQ0FBQ0E7QUFBQSxDQUFDO0FBRUYsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV4QyxzRUFBc0U7QUFDdEUseUVBQXlFO0FBQ3pFLHFCQUFxQjtBQUNyQjtJQUNFQyxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxRQUFRQTtRQUNuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxLQUFLO1lBQ2pELElBQUksR0FBRyxHQUFTLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ1gsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixDQUFDO2dCQUNELEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQzFCLENBQUM7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUNBLENBQUNBO0FBQ0xBLENBQUNBO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdlYlNvY2tldFBhdGNoIGZyb20gJy4vd2Vic29ja2V0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGtleXMgZnJvbSAnLi4va2V5cyc7XG5cbnZhciBldmVudE5hbWVzID0gJ2NvcHkgY3V0IHBhc3RlIGFib3J0IGJsdXIgZm9jdXMgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBjaGFuZ2UgY2xpY2sgY29udGV4dG1lbnUgZGJsY2xpY2sgZHJhZyBkcmFnZW5kIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJhZ292ZXIgZHJhZ3N0YXJ0IGRyb3AgZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmRlZCBpbnB1dCBpbnZhbGlkIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbG9hZCBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBtZXNzYWdlIG1vdXNlZG93biBtb3VzZWVudGVyIG1vdXNlbGVhdmUgbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwIHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHJlc2V0IHNjcm9sbCBzZWVrZWQgc2Vla2luZyBzZWxlY3Qgc2hvdyBzdGFsbGVkIHN1Ym1pdCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmcgbW96ZnVsbHNjcmVlbmNoYW5nZSBtb3pmdWxsc2NyZWVuZXJyb3IgbW96cG9pbnRlcmxvY2tjaGFuZ2UgbW96cG9pbnRlcmxvY2tlcnJvciBlcnJvciB3ZWJnbGNvbnRleHRyZXN0b3JlZCB3ZWJnbGNvbnRleHRsb3N0IHdlYmdsY29udGV4dGNyZWF0aW9uZXJyb3InLnNwbGl0KCcgJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseSgpIHtcbiAgaWYgKHV0aWxzLmlzTm9kZSgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICB2YXIgc3VwcG9ydHNXZWJTb2NrZXQgPSB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJztcbiAgaWYgKGNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKCkpIHtcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCB3ZSBjYW4gcGF0Y2ggdGhlIGRlc2NyaXB0b3I6ICBDaHJvbWUgJiBGaXJlZm94XG4gICAgaWYgKCF1dGlscy5pc1dlYldvcmtlcigpKXtcbiAgICAgIHZhciBvbkV2ZW50TmFtZXMgPSBldmVudE5hbWVzLm1hcChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICdvbicgKyBwcm9wZXJ0eTtcbiAgICAgIH0pO1xuICAgICAgdXRpbHMucGF0Y2hQcm9wZXJ0aWVzKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgb25FdmVudE5hbWVzKTtcbiAgICB9XG4gICAgdXRpbHMucGF0Y2hQcm9wZXJ0aWVzKFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSk7XG4gICAgaWYgKHN1cHBvcnRzV2ViU29ja2V0KSB7XG4gICAgICB1dGlscy5wYXRjaFByb3BlcnRpZXMoV2ViU29ja2V0LnByb3RvdHlwZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFNhZmFyaSwgQW5kcm9pZCBicm93c2VycyAoSmVsbHkgQmVhbilcbiAgICBpZiAoIXV0aWxzLmlzV2ViV29ya2VyKCkpe1xuICAgICAgcGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMoKTtcbiAgICB9XG4gICAgdXRpbHMucGF0Y2hDbGFzcygnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgIHdlYlNvY2tldFBhdGNoLmFwcGx5KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKCkge1xuICBpZiAoIXV0aWxzLmlzV2ViV29ya2VyKCkgJiYgIU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpXG4gICAgICAmJiB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBXZWJLaXQgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDM2NFxuICAgIC8vIElETCBpbnRlcmZhY2UgYXR0cmlidXRlcyBhcmUgbm90IGNvbmZpZ3VyYWJsZVxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKTtcbiAgICBpZiAoZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUpIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHZhciByZXN1bHQgPSAhIXJlcS5vbnJlYWR5c3RhdGVjaGFuZ2U7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7fSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgdW5ib3VuZEtleSA9IGtleXMuY3JlYXRlKCd1bmJvdW5kJyk7XG5cbi8vIFdoZW5ldmVyIGFueSBldmVudCBmaXJlcywgd2UgY2hlY2sgdGhlIGV2ZW50IHRhcmdldCBhbmQgYWxsIHBhcmVudHNcbi8vIGZvciBgb253aGF0ZXZlcmAgcHJvcGVydGllcyBhbmQgcmVwbGFjZSB0aGVtIHdpdGggem9uZS1ib3VuZCBmdW5jdGlvbnNcbi8vIC0gQ2hyb21lIChmb3Igbm93KVxuZnVuY3Rpb24gcGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMoKSB7XG4gIGV2ZW50TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICB2YXIgb25wcm9wZXJ0eSA9ICdvbicgKyBwcm9wZXJ0eTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHByb3BlcnR5LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBlbHQgPSA8Tm9kZT5ldmVudC50YXJnZXQsIGJvdW5kO1xuICAgICAgd2hpbGUgKGVsdCkge1xuICAgICAgICBpZiAoZWx0W29ucHJvcGVydHldICYmICFlbHRbb25wcm9wZXJ0eV1bdW5ib3VuZEtleV0pIHtcbiAgICAgICAgICBib3VuZCA9IGdsb2JhbC56b25lLmJpbmQoZWx0W29ucHJvcGVydHldKTtcbiAgICAgICAgICBib3VuZFt1bmJvdW5kS2V5XSA9IGVsdFtvbnByb3BlcnR5XTtcbiAgICAgICAgICBlbHRbb25wcm9wZXJ0eV0gPSBib3VuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHQgPSBlbHQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9LCB0cnVlKTtcbiAgfSk7XG59O1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(9);
	// we have to patch the instance since the proto is non-configurable
	function apply() {
	    var WS = global.WebSocket;
	    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
	    // On older Chrome, no need since EventTarget was already patched
	    if (!global.EventTarget) {
	        utils.patchEventTargetMethods(WS.prototype);
	    }
	    global.WebSocket = function (a, b) {
	        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
	        var proxySocket;
	        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
	        if (onmessageDesc && onmessageDesc.configurable === false) {
	            proxySocket = Object.create(socket);
	            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
	                proxySocket[propName] = function () {
	                    return socket[propName].apply(socket, arguments);
	                };
	            });
	        }
	        else {
	            // we can patch the real socket
	            proxySocket = socket;
	        }
	        utils.patchProperties(proxySocket, ['onclose', 'onerror', 'onmessage', 'onopen']);
	        return proxySocket;
	    };
	}
	exports.apply = apply;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3BhdGNoL3dlYnNvY2tldC50cyJdLCJuYW1lcyI6WyJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxLQUFLLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFbEMsb0VBQW9FO0FBQ3BFO0lBQ0VBLElBQUlBLEVBQUVBLEdBQVNBLE1BQU9BLENBQUNBLFNBQVNBLENBQUNBO0lBQ2pDQSx5RkFBeUZBO0lBQ3pGQSxpRUFBaUVBO0lBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFPQSxNQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvQkEsS0FBS0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFDS0EsTUFBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsVUFBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDckMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxDQUFDO1FBRWhCLGdHQUFnRztRQUNoRyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsUUFBUTtnQkFDcEYsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sK0JBQStCO1lBQy9CLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVsRixNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3JCLENBQUMsQ0FBQ0E7QUFDSkEsQ0FBQ0E7QUE3QmUsYUFBSyxRQTZCcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbmV4cG9ydCBmdW5jdGlvbiBhcHBseSgpIHtcbiAgdmFyIFdTID0gKDxhbnk+Z2xvYmFsKS5XZWJTb2NrZXQ7XG4gIC8vIE9uIFNhZmFyaSB3aW5kb3cuRXZlbnRUYXJnZXQgZG9lc24ndCBleGlzdCBzbyBuZWVkIHRvIHBhdGNoIFdTIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyXG4gIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG4gIGlmICghKDxhbnk+Z2xvYmFsKS5FdmVudFRhcmdldCkge1xuICAgIHV0aWxzLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKFdTLnByb3RvdHlwZSk7XG4gIH1cbiAgKDxhbnk+Z2xvYmFsKS5XZWJTb2NrZXQgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHNvY2tldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gbmV3IFdTKGEsIGIpIDogbmV3IFdTKGEpO1xuICAgIHZhciBwcm94eVNvY2tldDtcblxuICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuICAgIHZhciBvbm1lc3NhZ2VEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb2NrZXQsICdvbm1lc3NhZ2UnKTtcbiAgICBpZiAob25tZXNzYWdlRGVzYyAmJiBvbm1lc3NhZ2VEZXNjLmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHByb3h5U29ja2V0ID0gT2JqZWN0LmNyZWF0ZShzb2NrZXQpO1xuICAgICAgWydhZGRFdmVudExpc3RlbmVyJywgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCAnc2VuZCcsICdjbG9zZSddLmZvckVhY2goZnVuY3Rpb24ocHJvcE5hbWUpIHtcbiAgICAgICAgcHJveHlTb2NrZXRbcHJvcE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNvY2tldFtwcm9wTmFtZV0uYXBwbHkoc29ja2V0LCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIGNhbiBwYXRjaCB0aGUgcmVhbCBzb2NrZXRcbiAgICAgIHByb3h5U29ja2V0ID0gc29ja2V0O1xuICAgIH1cblxuICAgIHV0aWxzLnBhdGNoUHJvcGVydGllcyhwcm94eVNvY2tldCwgWydvbmNsb3NlJywgJ29uZXJyb3InLCAnb25tZXNzYWdlJywgJ29ub3BlbiddKTtcblxuICAgIHJldHVybiBwcm94eVNvY2tldDtcbiAgfTtcbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(9);
	function apply() {
	    if (global.navigator && global.navigator.geolocation) {
	        utils.patchPrototype(global.navigator.geolocation, [
	            'getCurrentPosition',
	            'watchPosition'
	        ]);
	    }
	}
	exports.apply = apply;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcGF0Y2gvZ2VvbG9jYXRpb24udHMiXSwibmFtZXMiOlsiYXBwbHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQVksS0FBSyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBRWxDO0lBQ0VBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLElBQUlBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JEQSxLQUFLQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxXQUFXQSxFQUFFQTtZQUNqREEsb0JBQW9CQTtZQUNwQkEsZUFBZUE7U0FDaEJBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0FBQ0hBLENBQUNBO0FBUGUsYUFBSyxRQU9wQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoKSB7XG4gIGlmIChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICB1dGlscy5wYXRjaFByb3RvdHlwZShnbG9iYWwubmF2aWdhdG9yLmdlb2xvY2F0aW9uLCBbXG4gICAgICAnZ2V0Q3VycmVudFBvc2l0aW9uJyxcbiAgICAgICd3YXRjaFBvc2l0aW9uJ1xuICAgIF0pO1xuICB9XG59XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(9);
	function apply() {
	    utils.patchClass('FileReader');
	}
	exports.apply = apply;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1yZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcGF0Y2gvZmlsZS1yZWFkZXIudHMiXSwibmFtZXMiOlsiYXBwbHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQVksS0FBSyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBRWxDO0lBQ0VBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO0FBQ2pDQSxDQUFDQTtBQUZlLGFBQUssUUFFcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KCkge1xuICB1dGlscy5wYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG59XG4iXX0=

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var long_stack_trace_1 = __webpack_require__(1);
	if (!global.Zone) {
	    throw new Error('zone.js should be installed before loading the long stack trace zone');
	}
	global.Zone.longStackTraceZone = long_stack_trace_1.longStackTraceZone;
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1zdGFjay10cmFjZS16b25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2Jyb3dzZXIvbG9uZy1zdGFjay10cmFjZS16b25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQywyQkFBMkIsQ0FBQyxDQUFBO0FBRTdELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0FBQzFGLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHFDQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb25nU3RhY2tUcmFjZVpvbmV9IGZyb20gJy4uL3pvbmVzL2xvbmctc3RhY2stdHJhY2UnO1xuXG5pZiAoIWdsb2JhbC5ab25lKSB7XG4gIHRocm93IG5ldyBFcnJvcignem9uZS5qcyBzaG91bGQgYmUgaW5zdGFsbGVkIGJlZm9yZSBsb2FkaW5nIHRoZSBsb25nIHN0YWNrIHRyYWNlIHpvbmUnKTtcbn1cblxuZ2xvYmFsLlpvbmUubG9uZ1N0YWNrVHJhY2Vab25lID0gbG9uZ1N0YWNrVHJhY2Vab25lO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * Wrapped stacktrace
	 *
	 * We need this because in some implementations, constructing a trace is slow
	 * and so we want to defer accessing the trace for as long as possible
	 */
	'use strict';
	function _Stacktrace(e) {
	    this._e = e;
	}
	_Stacktrace.prototype.get = function () {
	    if (global.zone.stackFramesFilter && this._e.stack) {
	        return this._e.stack
	            .split('\n')
	            .filter(global.zone.stackFramesFilter)
	            .join('\n');
	    }
	    return this._e.stack;
	};
	function _getStacktraceWithUncaughtError() {
	    return new _Stacktrace(new Error());
	}
	function _getStacktraceWithCaughtError() {
	    try {
	        throw new Error();
	    }
	    catch (e) {
	        return new _Stacktrace(e);
	    }
	}
	// Some implementations of exception handling don't create a stack trace if the exception
	// isn't thrown, however it's faster not to actually throw the exception.
	var stack = _getStacktraceWithUncaughtError();
	var _getStacktrace = stack && stack._e.stack
	    ? _getStacktraceWithUncaughtError
	    : _getStacktraceWithCaughtError;
	exports.longStackTraceZone = {
	    getLongStacktrace: function (exception) {
	        var traces = [];
	        var currentZone = this;
	        if (exception) {
	            if (currentZone.stackFramesFilter && exception.stack) {
	                traces.push(exception.stack.split('\n')
	                    .filter(currentZone.stackFramesFilter)
	                    .join('\n'));
	            }
	            else {
	                traces.push(exception.stack);
	            }
	        }
	        var now = Date.now();
	        while (currentZone && currentZone.constructedAtException) {
	            traces.push('--- ' + (new Date(currentZone.constructedAtTime)).toString() +
	                ' - ' + (now - currentZone.constructedAtTime) + 'ms ago', currentZone.constructedAtException.get());
	            currentZone = currentZone.parent;
	        }
	        return traces.join('\n');
	    },
	    stackFramesFilter: function (line) {
	        return !/zone(-microtask)?(\.min)?\.js/.test(line);
	    },
	    onError: function (exception) {
	        var reporter = this.reporter || console.log.bind(console);
	        reporter(exception.toString());
	        reporter(this.getLongStacktrace(exception));
	    },
	    '$fork': function (parentFork) {
	        return function () {
	            var newZone = parentFork.apply(this, arguments);
	            newZone.constructedAtException = _getStacktrace();
	            newZone.constructedAtTime = Date.now();
	            return newZone;
	        };
	    }
	};
	//# sourceMappingURLDisabled=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1zdGFjay10cmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi96b25lcy9sb25nLXN0YWNrLXRyYWNlLnRzIl0sIm5hbWVzIjpbIl9TdGFja3RyYWNlIiwiX2dldFN0YWNrdHJhY2VXaXRoVW5jYXVnaHRFcnJvciIsIl9nZXRTdGFja3RyYWNlV2l0aENhdWdodEVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUVILFlBQVksQ0FBQztBQUViLHFCQUFxQixDQUFDO0lBQ3BCQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUNkQSxDQUFDQTtBQUVELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHO0lBQzFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7YUFDakIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztBQUVGO0lBQ0VDLE1BQU1BLENBQUNBLElBQUlBLFdBQVdBLENBQUNBLElBQUlBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBO0FBQ3RDQSxDQUFDQTtBQUVEO0lBQ0VDLElBQUlBLENBQUNBO1FBQ0hBLE1BQU1BLElBQUlBLEtBQUtBLEVBQUVBLENBQUNBO0lBQ3BCQSxDQUFFQTtJQUFBQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNYQSxNQUFNQSxDQUFDQSxJQUFJQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7QUFDSEEsQ0FBQ0E7QUFFRCx5RkFBeUY7QUFDekYseUVBQXlFO0FBQ3pFLElBQUksS0FBSyxHQUFHLCtCQUErQixFQUFFLENBQUM7QUFFOUMsSUFBSSxjQUFjLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSztNQUN4QywrQkFBK0I7TUFDL0IsNkJBQTZCLENBQUM7QUFFckIsMEJBQWtCLEdBQUc7SUFDaEMsaUJBQWlCLEVBQUUsVUFBVSxTQUFTO1FBQ3BDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ2hDLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7cUJBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVyQixPQUFPLFdBQVcsSUFBSSxXQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUNQLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUM3RCxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsUUFBUSxFQUN4RCxXQUFXLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM5QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxDQUFDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixFQUFFLFVBQVUsSUFBSTtRQUMvQixNQUFNLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE9BQU8sRUFBRSxVQUFVLFNBQVM7UUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxPQUFPLEVBQUUsVUFBVSxVQUFVO1FBQzNCLE1BQU0sQ0FBQztZQUNMLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV3JhcHBlZCBzdGFja3RyYWNlXG4gKlxuICogV2UgbmVlZCB0aGlzIGJlY2F1c2UgaW4gc29tZSBpbXBsZW1lbnRhdGlvbnMsIGNvbnN0cnVjdGluZyBhIHRyYWNlIGlzIHNsb3dcbiAqIGFuZCBzbyB3ZSB3YW50IHRvIGRlZmVyIGFjY2Vzc2luZyB0aGUgdHJhY2UgZm9yIGFzIGxvbmcgYXMgcG9zc2libGVcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9TdGFja3RyYWNlKGUpIHtcbiAgdGhpcy5fZSA9IGU7XG59XG5cbl9TdGFja3RyYWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChnbG9iYWwuem9uZS5zdGFja0ZyYW1lc0ZpbHRlciAmJiB0aGlzLl9lLnN0YWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Uuc3RhY2tcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5maWx0ZXIoZ2xvYmFsLnpvbmUuc3RhY2tGcmFtZXNGaWx0ZXIpXG4gICAgICAuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fZS5zdGFjaztcbn07XG5cbmZ1bmN0aW9uIF9nZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IgKCkge1xuICByZXR1cm4gbmV3IF9TdGFja3RyYWNlKG5ldyBFcnJvcigpKTtcbn1cblxuZnVuY3Rpb24gX2dldFN0YWNrdHJhY2VXaXRoQ2F1Z2h0RXJyb3IgKCkge1xuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG5ldyBfU3RhY2t0cmFjZShlKTtcbiAgfVxufVxuXG4vLyBTb21lIGltcGxlbWVudGF0aW9ucyBvZiBleGNlcHRpb24gaGFuZGxpbmcgZG9uJ3QgY3JlYXRlIGEgc3RhY2sgdHJhY2UgaWYgdGhlIGV4Y2VwdGlvblxuLy8gaXNuJ3QgdGhyb3duLCBob3dldmVyIGl0J3MgZmFzdGVyIG5vdCB0byBhY3R1YWxseSB0aHJvdyB0aGUgZXhjZXB0aW9uLlxudmFyIHN0YWNrID0gX2dldFN0YWNrdHJhY2VXaXRoVW5jYXVnaHRFcnJvcigpO1xuXG52YXIgX2dldFN0YWNrdHJhY2UgPSBzdGFjayAmJiBzdGFjay5fZS5zdGFja1xuICA/IF9nZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3JcbiAgOiBfZ2V0U3RhY2t0cmFjZVdpdGhDYXVnaHRFcnJvcjtcblxuZXhwb3J0IGNvbnN0IGxvbmdTdGFja1RyYWNlWm9uZSA9IHtcbiAgZ2V0TG9uZ1N0YWNrdHJhY2U6IGZ1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICB2YXIgdHJhY2VzID0gW107XG4gICAgdmFyIGN1cnJlbnRab25lID0gdGhpcztcbiAgICBpZiAoZXhjZXB0aW9uKSB7XG4gICAgICBpZiAoY3VycmVudFpvbmUuc3RhY2tGcmFtZXNGaWx0ZXIgJiYgZXhjZXB0aW9uLnN0YWNrKSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKGV4Y2VwdGlvbi5zdGFjay5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgLmZpbHRlcihjdXJyZW50Wm9uZS5zdGFja0ZyYW1lc0ZpbHRlcilcbiAgICAgICAgICAgICAgLmpvaW4oJ1xcbicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKGV4Y2VwdGlvbi5zdGFjayk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgd2hpbGUgKGN1cnJlbnRab25lICYmIGN1cnJlbnRab25lLmNvbnN0cnVjdGVkQXRFeGNlcHRpb24pIHtcbiAgICAgIHRyYWNlcy5wdXNoKFxuICAgICAgICAgICctLS0gJyArIChuZXcgRGF0ZShjdXJyZW50Wm9uZS5jb25zdHJ1Y3RlZEF0VGltZSkpLnRvU3RyaW5nKCkgK1xuICAgICAgICAgICcgLSAnICsgKG5vdyAtIGN1cnJlbnRab25lLmNvbnN0cnVjdGVkQXRUaW1lKSArICdtcyBhZ28nLFxuICAgICAgICAgIGN1cnJlbnRab25lLmNvbnN0cnVjdGVkQXRFeGNlcHRpb24uZ2V0KCkpO1xuICAgICAgY3VycmVudFpvbmUgPSBjdXJyZW50Wm9uZS5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYWNlcy5qb2luKCdcXG4nKTtcbiAgfSxcblxuICBzdGFja0ZyYW1lc0ZpbHRlcjogZnVuY3Rpb24gKGxpbmUpIHtcbiAgICByZXR1cm4gIS96b25lKC1taWNyb3Rhc2spPyhcXC5taW4pP1xcLmpzLy50ZXN0KGxpbmUpO1xuICB9LFxuXG4gIG9uRXJyb3I6IGZ1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICB2YXIgcmVwb3J0ZXIgPSB0aGlzLnJlcG9ydGVyIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgcmVwb3J0ZXIoZXhjZXB0aW9uLnRvU3RyaW5nKCkpO1xuICAgIHJlcG9ydGVyKHRoaXMuZ2V0TG9uZ1N0YWNrdHJhY2UoZXhjZXB0aW9uKSk7XG4gIH0sXG5cbiAgJyRmb3JrJzogZnVuY3Rpb24gKHBhcmVudEZvcmspIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmV3Wm9uZSA9IHBhcmVudEZvcmsuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIG5ld1pvbmUuY29uc3RydWN0ZWRBdEV4Y2VwdGlvbiA9IF9nZXRTdGFja3RyYWNlKCk7XG4gICAgICBuZXdab25lLmNvbnN0cnVjdGVkQXRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHJldHVybiBuZXdab25lO1xuICAgIH1cbiAgfVxufTtcblxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
/**
 @license
Apache License

Version 2.0, January 2004

http://www.apache.org/licenses/ 

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

You must give any other recipients of the Work or Derivative Works a copy of this License; and

You must cause any modified files to carry prominent notices stating that You changed the files; and

You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS
 */

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
"use strict";
var Reflect;
(function (Reflect) {
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    var __Metadata__ = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param targetKey (Optional) The property key to decorate.
      * @param targetDescriptor (Optional) The property descriptor for the target key
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     C = Reflect.decorate(decoratorsArray, C);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(C, "staticMethod",
      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(C.prototype, "method",
      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
      *
      */
    function decorate(decorators, target, targetKey, targetDescriptor) {
        if (!IsUndefined(targetDescriptor)) {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsObject(target)) {
                throw new TypeError();
            }
            else if (IsUndefined(targetKey)) {
                throw new TypeError();
            }
            else if (!IsObject(targetDescriptor)) {
                throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
        }
        else if (!IsUndefined(targetKey)) {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsObject(target)) {
                throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
        }
        else {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsConstructor(target)) {
                throw new TypeError();
            }
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class C {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, targetKey) {
            if (!IsUndefined(targetKey)) {
                if (!IsObject(target)) {
                    throw new TypeError();
                }
                targetKey = ToPropertyKey(targetKey);
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
            }
            else {
                if (!IsConstructor(target)) {
                    throw new TypeError();
                }
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, undefined);
            }
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param targetKey (Optional) The property key for the target.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, C);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetMetadata(metadataKey, target, targetKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(C);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(C.prototype, "method");
      *
      */
    function getMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryMetadataKeys(target, targetKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(C);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryOwnMetadataKeys(target, targetKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
        if (IsUndefined(metadataMap)) {
            return false;
        }
        if (!metadataMap.delete(metadataKey)) {
            return false;
        }
        if (metadataMap.size > 0) {
            return true;
        }
        var targetMetadata = __Metadata__.get(target);
        targetMetadata.delete(targetKey);
        if (targetMetadata.size > 0) {
            return true;
        }
        __Metadata__.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated)) {
                if (!IsConstructor(decorated)) {
                    throw new TypeError();
                }
                target = decorated;
            }
        }
        return target;
    }
    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated)) {
                if (!IsObject(decorated)) {
                    throw new TypeError();
                }
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            decorator(target, propertyKey);
        }
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
    function GetOrCreateMetadataMap(target, targetKey, create) {
        var targetMetadata = __Metadata__.get(target);
        if (!targetMetadata) {
            if (!create) {
                return undefined;
            }
            targetMetadata = new _Map();
            __Metadata__.set(target, targetMetadata);
        }
        var keyMetadata = targetMetadata.get(targetKey);
        if (!keyMetadata) {
            if (!create) {
                return undefined;
            }
            keyMetadata = new _Map();
            targetMetadata.set(targetKey, keyMetadata);
        }
        return keyMetadata;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
            return true;
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        }
        return false;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (metadataMap === undefined) {
            return false;
        }
        return Boolean(metadataMap.has(MetadataKey));
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        }
        return undefined;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (metadataMap === undefined) {
            return undefined;
        }
        return metadataMap.get(MetadataKey);
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = GetPrototypeOf(O);
        if (parent === null) {
            return ownKeys;
        }
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) {
            return ownKeys;
        }
        if (ownKeys.length <= 0) {
            return parentKeys;
        }
        var set = new _Set();
        var keys = [];
        for (var _i = 0; _i < ownKeys.length; _i++) {
            var key = ownKeys[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0; _a < parentKeys.length; _a++) {
            var key = parentKeys[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
    function OrdinaryOwnMetadataKeys(target, targetKey) {
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
        var keys = [];
        if (metadataMap) {
            metadataMap.forEach(function (_, key) { return keys.push(key); });
        }
        return keys;
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
    function IsArray(x) {
        return Array.isArray(x);
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
    function IsConstructor(x) {
        return typeof x === "function";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
    function ToPropertyKey(value) {
        if (IsSymbol(value)) {
            return value;
        }
        return String(value);
    }
    function GetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) {
            return proto;
        }
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard. 
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype) {
            return proto;
        }
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) {
            return proto;
        }
        // if the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") {
            return proto;
        }
        // if we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O) {
            return proto;
        }
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        function Map() {
            this._keys = [];
            this._values = [];
            this._cache = cacheSentinel;
        }
        Map.prototype = {
            get size() {
                return this._keys.length;
            },
            has: function (key) {
                if (key === this._cache) {
                    return true;
                }
                if (this._find(key) >= 0) {
                    this._cache = key;
                    return true;
                }
                return false;
            },
            get: function (key) {
                var index = this._find(key);
                if (index >= 0) {
                    this._cache = key;
                    return this._values[index];
                }
                return undefined;
            },
            set: function (key, value) {
                this.delete(key);
                this._keys.push(key);
                this._values.push(value);
                this._cache = key;
                return this;
            },
            delete: function (key) {
                var index = this._find(key);
                if (index >= 0) {
                    this._keys.splice(index, 1);
                    this._values.splice(index, 1);
                    this._cache = cacheSentinel;
                    return true;
                }
                return false;
            },
            clear: function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cache = cacheSentinel;
            },
            forEach: function (callback, thisArg) {
                var size = this.size;
                for (var i = 0; i < size; ++i) {
                    var key = this._keys[i];
                    var value = this._values[i];
                    this._cache = key;
                    callback.call(this, value, key, this);
                }
            },
            _find: function (key) {
                var keys = this._keys;
                var size = keys.length;
                for (var i = 0; i < size; ++i) {
                    if (keys[i] === key) {
                        return i;
                    }
                }
                return -1;
            }
        };
        return Map;
    }
    // naive Set shim
    function CreateSetPolyfill() {
        var cacheSentinel = {};
        function Set() {
            this._map = new _Map();
        }
        Set.prototype = {
            get size() {
                return this._map.length;
            },
            has: function (value) {
                return this._map.has(value);
            },
            add: function (value) {
                this._map.set(value, value);
                return this;
            },
            delete: function (value) {
                return this._map.delete(value);
            },
            clear: function () {
                this._map.clear();
            },
            forEach: function (callback, thisArg) {
                this._map.forEach(callback, thisArg);
            }
        };
        return Set;
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
        var nodeCrypto = isNode && require("crypto");
        var hasOwn = Object.prototype.hasOwnProperty;
        var keys = {};
        var rootKey = CreateUniqueKey();
        function WeakMap() {
            this._key = CreateUniqueKey();
        }
        WeakMap.prototype = {
            has: function (target) {
                var table = GetOrCreateWeakMapTable(target, false);
                if (table) {
                    return this._key in table;
                }
                return false;
            },
            get: function (target) {
                var table = GetOrCreateWeakMapTable(target, false);
                if (table) {
                    return table[this._key];
                }
                return undefined;
            },
            set: function (target, value) {
                var table = GetOrCreateWeakMapTable(target, true);
                table[this._key] = value;
                return this;
            },
            delete: function (target) {
                var table = GetOrCreateWeakMapTable(target, false);
                if (table && this._key in table) {
                    return delete table[this._key];
                }
                return false;
            },
            clear: function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            }
        };
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i) {
                buffer[i] = Math.random() * 255 | 0;
            }
        }
        function GenRandomBytes(size) {
            if (nodeCrypto) {
                var data = nodeCrypto.randomBytes(size);
                return data;
            }
            else if (typeof Uint8Array === "function") {
                var data = new Uint8Array(size);
                if (typeof crypto !== "undefined") {
                    crypto.getRandomValues(data);
                }
                else if (typeof msCrypto !== "undefined") {
                    msCrypto.getRandomValues(data);
                }
                else {
                    FillRandomBytes(data, size);
                }
                return data;
            }
            else {
                var data = new Array(size);
                FillRandomBytes(data, size);
                return data;
            }
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8) {
                    result += "-";
                }
                if (byte < 16) {
                    result += "0";
                }
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
        function CreateUniqueKey() {
            var key;
            do {
                key = "@@WeakMap@@" + CreateUUID();
            } while (hasOwn.call(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create) {
                    return undefined;
                }
                Object.defineProperty(target, rootKey, { value: Object.create(null) });
            }
            return target[rootKey];
        }
        return WeakMap;
    }
    // hook global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    __global.Reflect[p] = Reflect[p];
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof window !== "undefined" ? window :
        typeof WorkerGlobalScope !== "undefined" ? self :
            typeof global !== "undefined" ? global :
                Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURLDisabled=Reflect.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIyLXBvbHlmaWxscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGVwZW5kZW5jaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gQGxpY2Vuc2VcblRoZSBNSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIDIwMTYgR29vZ2xlLCBJbmMuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuICovXG5cbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7J3VzZSBzdHJpY3QnO1xuXHR2YXIgbWljcm90YXNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0dmFyIGVzNlByb21pc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHR2YXIgY29yZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdHZhciBicm93c2VyUGF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0aWYgKGNvcmUuWm9uZS5wcm90b3R5cGVbJ3NjaGVkdWxlTWljcm90YXNrJ10pIHtcblx0ICAgIGNvbnNvbGUud2FybignWm9uZS1taWNyb3Rhc2tzIGFscmVhZHkgZXhwb3J0ZWQgb24gd2luZG93IHRoZSBvYmplY3QhJyk7XG5cdH1cblx0ZWxzZSB7XG5cdCAgICBtaWNyb3Rhc2suYWRkTWljcm90YXNrU3VwcG9ydChjb3JlLlpvbmUpO1xuXHQgICAgZ2xvYmFsLlpvbmUgPSBjb3JlLlpvbmU7XG5cdCAgICBnbG9iYWwuem9uZSA9IG5ldyBnbG9iYWwuWm9uZSgpO1xuXHQgICAgLy8gTW9ua2V5IHBhdGNoIHRoZSBQcm9taXNlIGltcGxlbWVudGF0aW9uIHRvIGFkZCBzdXBwb3J0IGZvciBtaWNyb3Rhc2tzXG5cdCAgICBnbG9iYWwuUHJvbWlzZSA9IGVzNlByb21pc2UuUHJvbWlzZTtcblx0ICAgIGJyb3dzZXJQYXRjaC5hcHBseSgpO1xuXHR9XG5cdC8vIyBzb3VyY2VNYXBwaW5nVVJMRGlzYWJsZWQ9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZW05dVpTMXRhV055YjNSaGMyc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5c2FXSXZZbkp2ZDNObGNpOTZiMjVsTFcxcFkzSnZkR0Z6YXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3haUVVGWkxFTkJRVU03UVVGRllpeEpRVUZaTEZOQlFWTXNWMEZCVFN4alFVRmpMRU5CUVVNc1EwRkJRVHRCUVVNeFF5eEpRVUZaTEZWQlFWVXNWMEZCVFN4aFFVRmhMRU5CUVVNc1EwRkJRVHRCUVVNeFF5eEpRVUZaTEVsQlFVa3NWMEZCVFN4VFFVRlRMRU5CUVVNc1EwRkJRVHRCUVVOb1F5eEpRVUZaTEZsQlFWa3NWMEZCVFN4clFrRkJhMElzUTBGQlF5eERRVUZCTzBGQlJXcEVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpkRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNkMFJCUVhkRUxFTkJRVU1zUTBGQlF6dEJRVU42UlN4RFFVRkRPMEZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRFRpeFRRVUZUTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUlhwRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVONFFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlJXaERMSGRGUVVGM1JUdEpRVU40UlN4TlFVRk5MRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZGY0VNc1dVRkJXU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBGQlEzWkNMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbHRjRzl5ZENBcUlHRnpJRzFwWTNKdmRHRnpheUJtY205dElDY3VMaTl0YVdOeWIzUmhjMnNuTzF4dWFXMXdiM0owSUNvZ1lYTWdaWE0yVUhKdmJXbHpaU0JtY205dElDZGxjell0Y0hKdmJXbHpaU2M3WEc1cGJYQnZjblFnS2lCaGN5QmpiM0psSUdaeWIyMGdKeTR1TDJOdmNtVW5PMXh1YVcxd2IzSjBJQ29nWVhNZ1luSnZkM05sY2xCaGRHTm9JR1p5YjIwZ0p5NHVMM0JoZEdOb0wySnliM2R6WlhJbk8xeHVYRzVwWmlBb1kyOXlaUzVhYjI1bExuQnliM1J2ZEhsd1pWc25jMk5vWldSMWJHVk5hV055YjNSaGMyc25YU2tnZTF4dUlDQmpiMjV6YjJ4bExuZGhjbTRvSjFwdmJtVXRiV2xqY205MFlYTnJjeUJoYkhKbFlXUjVJR1Y0Y0c5eWRHVmtJRzl1SUhkcGJtUnZkeUIwYUdVZ2IySnFaV04wSVNjcE8xeHVmU0JsYkhObElIdGNiaUFnYldsamNtOTBZWE5yTG1Ga1pFMXBZM0p2ZEdGemExTjFjSEJ2Y25Rb1kyOXlaUzVhYjI1bEtUdGNibHh1SUNCbmJHOWlZV3d1V205dVpTQTlJR052Y21VdVdtOXVaVHRjYmlBZ1oyeHZZbUZzTG5wdmJtVWdQU0J1WlhjZ1oyeHZZbUZzTGxwdmJtVW9LVHRjYmx4dUlDQXZMeUJOYjI1clpYa2djR0YwWTJnZ2RHaGxJRkJ5YjIxcGMyVWdhVzF3YkdWdFpXNTBZWFJwYjI0Z2RHOGdZV1JrSUhOMWNIQnZjblFnWm05eUlHMXBZM0p2ZEdGemEzTmNiaUFnWjJ4dlltRnNMbEJ5YjIxcGMyVWdQU0JsY3paUWNtOXRhWE5sTGxCeWIyMXBjMlU3WEc1Y2JpQWdZbkp2ZDNObGNsQmhkR05vTG1Gd2NHeDVLQ2s3WEc1OVhHNGlYWDA9XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHsvLyBUT0RPKHZpY2IpOiBDcmVhdGUgYSBiZW5jaG1hcmsgZm9yIHRoZSBkaWZmZXJlbnQgbWV0aG9kcyAmIHRoZSB1c2FnZSBvZiB0aGUgcXVldWVcblx0Ly8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzk3XG5cdC8vIEl0IGlzIHJlcXVpcmVkIHRvIGluaXRpYWxpemUgaGFzTmF0aXZlUHJvbWlzZSBiZWZvcmUgcmVxdWlyaW5nIGVzNi1wcm9taXNlIG90aGVyd2lzZSBlczYtcHJvbWlzZSB3b3VsZFxuXHQvLyBvdmVyd3JpdGUgdGhlIG5hdGl2ZSBQcm9taXNlIGltcGxlbWVudGF0aW9uIG9uIHY4IGFuZCB0aGUgY2hlY2sgd291bGQgYWx3YXlzIHJldHVybiBmYWxzZS5cblx0Ly8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL2lzc3Vlcy8xNDBcblx0dmFyIGhhc05hdGl2ZVByb21pc2UgPSB0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHQgICAgUHJvbWlzZS50b1N0cmluZygpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcblx0dmFyIGlzRmlyZWZveCA9IGdsb2JhbC5uYXZpZ2F0b3IgJiZcblx0ICAgIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTE7XG5cdHZhciByZXNvbHZlZFByb21pc2U7XG5cdC8vIFRPRE8odmljYik6IHJlbW92ZSAnIWlzRmlyZWZveCcgd2hlbiB0aGUgYnVnIGdldHMgZml4ZWQ6XG5cdC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTExNjIwMTNcblx0aWYgKGhhc05hdGl2ZVByb21pc2UgJiYgIWlzRmlyZWZveCkge1xuXHQgICAgLy8gV2hlbiBhdmFpbGFibGUgdXNlIGEgbmF0aXZlIFByb21pc2UgdG8gc2NoZWR1bGUgbWljcm90YXNrcy5cblx0ICAgIC8vIFdoZW4gbm90IGF2YWlsYWJsZSwgZXM2LXByb21pc2UgZmFsbGJhY2sgd2lsbCBiZSB1c2VkXG5cdCAgICByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXHR2YXIgZXM2UHJvbWlzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMikuUHJvbWlzZTtcblx0aWYgKHJlc29sdmVkUHJvbWlzZSkge1xuXHQgICAgZXM2UHJvbWlzZS5fc2V0U2NoZWR1bGVyKGZ1bmN0aW9uIChmbikge1xuXHQgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZuKTtcblx0ICAgIH0pO1xuXHR9XG5cdC8vIGVzNi1wcm9taXNlIGFzYXAgc2hvdWxkIHNjaGVkdWxlIG1pY3JvdGFza3MgdmlhIHpvbmUuc2NoZWR1bGVNaWNyb3Rhc2sgc28gdGhhdCBhbnlcblx0Ly8gdXNlciBkZWZpbmVkIGhvb2tzIGFyZSB0cmlnZ2VyZWRcblx0ZXM2UHJvbWlzZS5fc2V0QXNhcChmdW5jdGlvbiAoZm4sIGFyZykge1xuXHQgICAgZ2xvYmFsLnpvbmUuc2NoZWR1bGVNaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZuKGFyZyk7XG5cdCAgICB9KTtcblx0fSk7XG5cdC8vIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHNjaGVkdWxlTWljcm90YXNrIHVzZSB0aGUgb3JpZ2luYWwgZXM2LXByb21pc2UgaW1wbGVtZW50YXRpb25cblx0Ly8gdG8gc2NoZWR1bGUgYSBtaWNyb3Rhc2tcblx0ZnVuY3Rpb24gc2NoZWR1bGVNaWNyb3Rhc2soZm4pIHtcblx0ICAgIGVzNlByb21pc2UuX2FzYXAodGhpcy5iaW5kKGZuKSk7XG5cdH1cblx0ZnVuY3Rpb24gYWRkTWljcm90YXNrU3VwcG9ydCh6b25lQ2xhc3MpIHtcblx0ICAgIHpvbmVDbGFzcy5wcm90b3R5cGUuc2NoZWR1bGVNaWNyb3Rhc2sgPSBzY2hlZHVsZU1pY3JvdGFzaztcblx0ICAgIHJldHVybiB6b25lQ2xhc3M7XG5cdH1cblx0ZXhwb3J0cy5hZGRNaWNyb3Rhc2tTdXBwb3J0ID0gYWRkTWljcm90YXNrU3VwcG9ydDtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkxEaXNhYmxlZD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV2xqY205MFlYTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YkdsaUwyMXBZM0p2ZEdGemF5NTBjeUpkTENKdVlXMWxjeUk2V3lKelkyaGxaSFZzWlUxcFkzSnZkR0Z6YXlJc0ltRmtaRTFwWTNKdmRHRnphMU4xY0hCdmNuUWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRzlHUVVGdlJqdEJRVU53Uml4dFJFRkJiVVE3UVVGRmJrUXNlVWRCUVhsSE8wRkJRM3BITERaR1FVRTJSanRCUVVNM1JpdzRSRUZCT0VRN1FVRkRPVVFzU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhQUVVGUExFOUJRVThzUzBGQlN5eFhRVUZYTzBsQlEycEVMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRmRrUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExGTkJRVk03U1VGRE5VSXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJYSkZMRWxCUVVrc1pVRkJaU3hEUVVGRE8wRkJSWEJDTERKRVFVRXlSRHRCUVVNelJDeDFSRUZCZFVRN1FVRkRka1FzUlVGQlJTeERRVUZETEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTI1RExEaEVRVUU0UkR0SlFVTTVSQ3gzUkVGQmQwUTdTVUZEZUVRc1pVRkJaU3hIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0QlFVTjBReXhEUVVGRE8wRkJSVVFzU1VGQlNTeFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dEJRVVZvUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzQkNMRlZCUVZVc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlV5eEZRVUZGTzFGQlEyeERMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZETTBJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFRDeERRVUZETzBGQlJVUXNjVVpCUVhGR08wRkJRM0pHTEcxRFFVRnRRenRCUVVOdVF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZNc1JVRkJSU3hGUVVGRkxFZEJRVWM3U1VGRGJFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0UlFVTTFRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEVml4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJVZ3NPRVpCUVRoR08wRkJRemxHTERCQ1FVRXdRanRCUVVNeFFpd3lRa0ZCTWtJc1JVRkJSVHRKUVVNelFrRXNWVUZCVlVFc1EwRkJRMEVzUzBGQlMwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdRVUZEYkVOQkxFTkJRVU5CTzBGQlJVUXNOa0pCUVc5RExGTkJRVk03U1VGRE0wTkRMRk5CUVZOQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxHbENRVUZwUWtFc1IwRkJSMEVzYVVKQlFXbENRU3hEUVVGRFFUdEpRVU14UkVFc1RVRkJUVUVzUTBGQlEwRXNVMEZCVTBFc1EwRkJRMEU3UVVGRGJrSkJMRU5CUVVOQk8wRkJTR1VzTWtKQlFXMUNMSE5DUVVkc1F5eERRVUZCSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdWRTlFVHloMmFXTmlLVG9nUTNKbFlYUmxJR0VnWW1WdVkyaHRZWEpySUdadmNpQjBhR1VnWkdsbVptVnlaVzUwSUcxbGRHaHZaSE1nSmlCMGFHVWdkWE5oWjJVZ2IyWWdkR2hsSUhGMVpYVmxYRzR2THlCelpXVWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMkZ1WjNWc1lYSXZlbTl1WlM1cWN5OXBjM04xWlhNdk9UZGNibHh1THk4Z1NYUWdhWE1nY21WeGRXbHlaV1FnZEc4Z2FXNXBkR2xoYkdsNlpTQm9ZWE5PWVhScGRtVlFjbTl0YVhObElHSmxabTl5WlNCeVpYRjFhWEpwYm1jZ1pYTTJMWEJ5YjIxcGMyVWdiM1JvWlhKM2FYTmxJR1Z6Tmkxd2NtOXRhWE5sSUhkdmRXeGtYRzR2THlCdmRtVnlkM0pwZEdVZ2RHaGxJRzVoZEdsMlpTQlFjbTl0YVhObElHbHRjR3hsYldWdWRHRjBhVzl1SUc5dUlIWTRJR0Z1WkNCMGFHVWdZMmhsWTJzZ2QyOTFiR1FnWVd4M1lYbHpJSEpsZEhWeWJpQm1ZV3h6WlM1Y2JpOHZJSE5sWlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmFtRnJaV0Z5WTJocFltRnNaQzlsY3pZdGNISnZiV2x6WlM5cGMzTjFaWE12TVRRd1hHNTJZWElnYUdGelRtRjBhWFpsVUhKdmJXbHpaU0E5SUhSNWNHVnZaaUJRY205dGFYTmxJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJQ1ltWEc0Z0lDQWdVSEp2YldselpTNTBiMU4wY21sdVp5Z3BMbWx1WkdWNFQyWW9YQ0piYm1GMGFYWmxJR052WkdWZFhDSXBJQ0U5UFNBdE1UdGNibHh1ZG1GeUlHbHpSbWx5WldadmVDQTlJR2RzYjJKaGJDNXVZWFpwWjJGMGIzSWdKaVpjYmlBZ0lDQm5iRzlpWVd3dWJtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNTBiMHh2ZDJWeVEyRnpaU2dwTG1sdVpHVjRUMllvSjJacGNtVm1iM2duS1NBK0lDMHhPMXh1WEc1MllYSWdjbVZ6YjJ4MlpXUlFjbTl0YVhObE8xeHVYRzR2THlCVVQwUlBLSFpwWTJJcE9pQnlaVzF2ZG1VZ0p5RnBjMFpwY21WbWIzZ25JSGRvWlc0Z2RHaGxJR0oxWnlCblpYUnpJR1pwZUdWa09seHVMeThnYUhSMGNITTZMeTlpZFdkNmFXeHNZUzV0YjNwcGJHeGhMbTl5Wnk5emFHOTNYMkoxWnk1aloyay9hV1E5TVRFMk1qQXhNMXh1YVdZZ0tHaGhjMDVoZEdsMlpWQnliMjFwYzJVZ0ppWWdJV2x6Um1seVpXWnZlQ2tnZTF4dUlDQXZMeUJYYUdWdUlHRjJZV2xzWVdKc1pTQjFjMlVnWVNCdVlYUnBkbVVnVUhKdmJXbHpaU0IwYnlCelkyaGxaSFZzWlNCdGFXTnliM1JoYzJ0ekxseHVJQ0F2THlCWGFHVnVJRzV2ZENCaGRtRnBiR0ZpYkdVc0lHVnpOaTF3Y205dGFYTmxJR1poYkd4aVlXTnJJSGRwYkd3Z1ltVWdkWE5sWkZ4dUlDQnlaWE52YkhabFpGQnliMjFwYzJVZ1BTQlFjbTl0YVhObExuSmxjMjlzZG1Vb0tUdGNibjFjYmx4dWRtRnlJR1Z6TmxCeWIyMXBjMlVnUFNCeVpYRjFhWEpsS0NkbGN6WXRjSEp2YldselpTY3BMbEJ5YjIxcGMyVTdYRzVjYm1sbUlDaHlaWE52YkhabFpGQnliMjFwYzJVcElIdGNiaUFnWlhNMlVISnZiV2x6WlM1ZmMyVjBVMk5vWldSMWJHVnlLR1oxYm1OMGFXOXVLR1p1S1NCN1hHNGdJQ0FnY21WemIyeDJaV1JRY205dGFYTmxMblJvWlc0b1ptNHBPMXh1SUNCOUtUdGNibjFjYmx4dUx5OGdaWE0yTFhCeWIyMXBjMlVnWVhOaGNDQnphRzkxYkdRZ2MyTm9aV1IxYkdVZ2JXbGpjbTkwWVhOcmN5QjJhV0VnZW05dVpTNXpZMmhsWkhWc1pVMXBZM0p2ZEdGemF5QnpieUIwYUdGMElHRnVlVnh1THk4Z2RYTmxjaUJrWldacGJtVmtJR2h2YjJ0eklHRnlaU0IwY21sbloyVnlaV1JjYm1Wek5sQnliMjFwYzJVdVgzTmxkRUZ6WVhBb1puVnVZM1JwYjI0b1ptNHNJR0Z5WnlrZ2UxeHVJQ0JuYkc5aVlXd3VlbTl1WlM1elkyaGxaSFZzWlUxcFkzSnZkR0Z6YXlobWRXNWpkR2x2YmlncElIdGNiaUFnSUNCbWJpaGhjbWNwTzF4dUlDQjlLVHRjYm4wcE8xeHVYRzR2THlCVWFHVWdaR1ZtWVhWc2RDQnBiWEJzWlcxbGJuUmhkR2x2YmlCdlppQnpZMmhsWkhWc1pVMXBZM0p2ZEdGemF5QjFjMlVnZEdobElHOXlhV2RwYm1Gc0lHVnpOaTF3Y205dGFYTmxJR2x0Y0d4bGJXVnVkR0YwYVc5dVhHNHZMeUIwYnlCelkyaGxaSFZzWlNCaElHMXBZM0p2ZEdGemExeHVablZ1WTNScGIyNGdjMk5vWldSMWJHVk5hV055YjNSaGMyc29abTRwSUh0Y2JpQWdaWE0yVUhKdmJXbHpaUzVmWVhOaGNDaDBhR2x6TG1KcGJtUW9abTRwS1R0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR0ZrWkUxcFkzSnZkR0Z6YTFOMWNIQnZjblFvZW05dVpVTnNZWE56S1NCN1hHNGdJSHB2Ym1WRGJHRnpjeTV3Y205MGIzUjVjR1V1YzJOb1pXUjFiR1ZOYVdOeWIzUmhjMnNnUFNCelkyaGxaSFZzWlUxcFkzSnZkR0Z6YXp0Y2JpQWdjbVYwZFhKdUlIcHZibVZEYkdGemN6dGNibjFjYmlKZGZRPT1cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHJlcXVpcmU7dmFyIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOy8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSkgey8qIVxuXHQgKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG5cdCAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG5cdCAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2Vcblx0ICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0Vcblx0ICogQHZlcnNpb24gICAzLjAuMlxuXHQgKi9cblxuXHQoZnVuY3Rpb24oKSB7XG5cdCAgICBcInVzZSBzdHJpY3RcIjtcblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih4KSB7XG5cdCAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oeCkge1xuXHQgICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNNYXliZVRoZW5hYmxlKHgpIHtcblx0ICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcblx0ICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuXHQgICAgICBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcblx0ICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHQgICAgICB9O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkgPSBsaWIkZXM2JHByb21pc2UkdXRpbHMkJF9pc0FycmF5O1xuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPSAwO1xuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQ7XG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuO1xuXG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcblx0ICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW5dID0gY2FsbGJhY2s7XG5cdCAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuICsgMV0gPSBhcmc7XG5cdCAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKz0gMjtcblx0ICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPT09IDIpIHtcblx0ICAgICAgICAvLyBJZiBsZW4gaXMgMiwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG5cdCAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcblx0ICAgICAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG5cdCAgICAgICAgaWYgKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRjdXN0b21TY2hlZHVsZXJGbikge1xuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuXHQgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm4gPSBzY2hlZHVsZUZuO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcChhc2FwRm4pIHtcblx0ICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBhc2FwRm47XG5cdCAgICB9XG5cblx0ICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyB8fCB7fTtcblx0ICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cblx0ICAgIC8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuXHQgICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0ICAgICAgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuXHQgICAgLy8gbm9kZVxuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU5leHRUaWNrKCkge1xuXHQgICAgICAvLyBub2RlIHZlcnNpb24gMC4xMC54IGRpc3BsYXlzIGEgZGVwcmVjYXRpb24gd2FybmluZyB3aGVuIG5leHRUaWNrIGlzIHVzZWQgcmVjdXJzaXZlbHlcblx0ICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG5cdCAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG5cdCAgICAgIH07XG5cdCAgICB9XG5cblx0ICAgIC8vIHZlcnR4XG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpIHtcblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR2ZXJ0eE5leHQobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG5cdCAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcblx0ICAgICAgdmFyIG9ic2VydmVyID0gbmV3IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcihsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuXHQgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0ICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIG5vZGUuZGF0YSA9IChpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMik7XG5cdCAgICAgIH07XG5cdCAgICB9XG5cblx0ICAgIC8vIHdlYiB3b3JrZXJcblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcblx0ICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcblx0ICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2g7XG5cdCAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG5cdCAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgICAgICBzZXRUaW1lb3V0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCwgMSk7XG5cdCAgICAgIH07XG5cdCAgICB9XG5cblx0ICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2goKSB7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbjsgaSs9Mikge1xuXHQgICAgICAgIHZhciBjYWxsYmFjayA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpXTtcblx0ICAgICAgICB2YXIgYXJnID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2krMV07XG5cblx0ICAgICAgICBjYWxsYmFjayhhcmcpO1xuXG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuXHQgICAgICB9XG5cblx0ICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhdHRlbXB0VmVydHgoKSB7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgdmFyIHIgPSByZXF1aXJlO1xuXHQgICAgICAgIHZhciB2ZXJ0eCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG5cdCAgICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VWZXJ0eFRpbWVyKCk7XG5cdCAgICAgIH0gY2F0Y2goZSkge1xuXHQgICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaDtcblx0ICAgIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG5cdCAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSkge1xuXHQgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpO1xuXHQgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcblx0ICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuXHQgICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIpIHtcblx0ICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKTtcblx0ICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiBcImZ1bmN0aW9uXCIgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXR0ZW1wdFZlcnR4KCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3AoKSB7fVxuXG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAgID0gdm9pZCAwO1xuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCA9IDE7XG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQgID0gMjtcblxuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxmaWxsbWVudCgpIHtcblx0ICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSB7XG5cdCAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGdldFRoZW4ocHJvbWlzZSkge1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG5cdCAgICAgIH0gY2F0Y2goZXJyb3IpIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvciA9IGVycm9yO1xuXHQgICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG5cdCAgICAgIH0gY2F0Y2goZSkge1xuXHQgICAgICAgIHJldHVybiBlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuXHQgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAoZnVuY3Rpb24ocHJvbWlzZSkge1xuXHQgICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcblx0ICAgICAgICB2YXIgZXJyb3IgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cblx0ICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG5cdCAgICAgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG5cdCAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG5cdCAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuXHQgICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG5cdCAgICAgICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuXHQgICAgICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG5cdCAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHByb21pc2UpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuXHQgICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuXHQgICAgICB9IGVsc2UgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdCAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcblx0ICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcblx0ICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSkge1xuXHQgICAgICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3Rvcikge1xuXHQgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHZhciB0aGVuID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbihtYXliZVRoZW5hYmxlKTtcblxuXHQgICAgICAgIGlmICh0aGVuID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUikge1xuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbih0aGVuKSkge1xuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG5cdCAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuXHQgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSk7XG5cdCAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuXHQgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuXHQgICAgICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuXHQgICAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcblx0ICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuXG5cdCAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuXHQgICAgICBwcm9taXNlLl9zdGF0ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRDtcblxuXHQgICAgICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcHJvbWlzZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuXHQgICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cdCAgICAgIHByb21pc2UuX3N0YXRlID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQ7XG5cdCAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuXHQgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG5cdCAgICAgIHZhciBzdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG5cdCAgICAgIHZhciBsZW5ndGggPSBzdWJzY3JpYmVycy5sZW5ndGg7XG5cblx0ICAgICAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuXHQgICAgICBzdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG5cdCAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuXHQgICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cblx0ICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcGFyZW50KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpIHtcblx0ICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG5cdCAgICAgIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cblx0ICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuXHQgICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuXHQgICAgICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG5cdCAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cblx0ICAgICAgICBpZiAoY2hpbGQpIHtcblx0ICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgY2FsbGJhY2soZGV0YWlsKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpIHtcblx0ICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG5cdCAgICB9XG5cblx0ICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuXHQgICAgICB9IGNhdGNoKGUpIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuXHQgICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1I7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuXHQgICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuXHQgICAgICAgICAgdmFsdWUsIGVycm9yLCBzdWNjZWVkZWQsIGZhaWxlZDtcblxuXHQgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcblx0ICAgICAgICB2YWx1ZSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG5cdCAgICAgICAgaWYgKHZhbHVlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IpIHtcblx0ICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG5cdCAgICAgICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuXHQgICAgICAgICAgdmFsdWUgPSBudWxsO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpKTtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YWx1ZSA9IGRldGFpbDtcblx0ICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG5cdCAgICAgICAgLy8gbm9vcFxuXHQgICAgICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuXHQgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuXHQgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpe1xuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG5cdCAgICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcblx0ICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICB9IGNhdGNoKGUpIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG5cdCAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuXHQgICAgICBlbnVtZXJhdG9yLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG5cdCAgICAgIGVudW1lcmF0b3IucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcblxuXHQgICAgICBpZiAoZW51bWVyYXRvci5fdmFsaWRhdGVJbnB1dChpbnB1dCkpIHtcblx0ICAgICAgICBlbnVtZXJhdG9yLl9pbnB1dCAgICAgPSBpbnB1dDtcblx0ICAgICAgICBlbnVtZXJhdG9yLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG5cdCAgICAgICAgZW51bWVyYXRvci5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG5cdCAgICAgICAgZW51bWVyYXRvci5faW5pdCgpO1xuXG5cdCAgICAgICAgaWYgKGVudW1lcmF0b3IubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKGVudW1lcmF0b3IucHJvbWlzZSwgZW51bWVyYXRvci5fcmVzdWx0KTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW51bWVyYXRvci5sZW5ndGggPSBlbnVtZXJhdG9yLmxlbmd0aCB8fCAwO1xuXHQgICAgICAgICAgZW51bWVyYXRvci5fZW51bWVyYXRlKCk7XG5cdCAgICAgICAgICBpZiAoZW51bWVyYXRvci5fcmVtYWluaW5nID09PSAwKSB7XG5cdCAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwoZW51bWVyYXRvci5wcm9taXNlLCBlbnVtZXJhdG9yLl9yZXN1bHQpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QoZW51bWVyYXRvci5wcm9taXNlLCBlbnVtZXJhdG9yLl92YWxpZGF0aW9uRXJyb3IoKSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0ICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheShpbnB1dCk7XG5cdCAgICB9O1xuXG5cdCAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcblx0ICAgIH07XG5cblx0ICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXHQgICAgfTtcblxuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG5cblx0ICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG5cdCAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuXHQgICAgICB2YXIgbGVuZ3RoICA9IGVudW1lcmF0b3IubGVuZ3RoO1xuXHQgICAgICB2YXIgcHJvbWlzZSA9IGVudW1lcmF0b3IucHJvbWlzZTtcblx0ICAgICAgdmFyIGlucHV0ICAgPSBlbnVtZXJhdG9yLl9pbnB1dDtcblxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgZW51bWVyYXRvci5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcblx0ICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbihlbnRyeSwgaSkge1xuXHQgICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cdCAgICAgIHZhciBjID0gZW51bWVyYXRvci5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcblxuXHQgICAgICBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc01heWJlVGhlbmFibGUoZW50cnkpKSB7XG5cdCAgICAgICAgaWYgKGVudHJ5LmNvbnN0cnVjdG9yID09PSBjICYmIGVudHJ5Ll9zdGF0ZSAhPT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORykge1xuXHQgICAgICAgICAgZW50cnkuX29uZXJyb3IgPSBudWxsO1xuXHQgICAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVudW1lcmF0b3IuX3dpbGxTZXR0bGVBdChjLnJlc29sdmUoZW50cnkpLCBpKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZW51bWVyYXRvci5fcmVtYWluaW5nLS07XG5cdCAgICAgICAgZW51bWVyYXRvci5fcmVzdWx0W2ldID0gZW50cnk7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG5cdCAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblx0ICAgICAgdmFyIHByb21pc2UgPSBlbnVtZXJhdG9yLnByb21pc2U7XG5cblx0ICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7XG5cdCAgICAgICAgZW51bWVyYXRvci5fcmVtYWluaW5nLS07XG5cblx0ICAgICAgICBpZiAoc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG5cdCAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbnVtZXJhdG9yLl9yZXN1bHRbaV0gPSB2YWx1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoZW51bWVyYXRvci5fcmVtYWluaW5nID09PSAwKSB7XG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBlbnVtZXJhdG9yLl9yZXN1bHQpO1xuXHQgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uKHByb21pc2UsIGkpIHtcblx0ICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG5cdCAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdCAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuXHQgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcblx0ICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUkVKRUNURUQsIGksIHJlYXNvbik7XG5cdCAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkYWxsKGVudHJpZXMpIHtcblx0ICAgICAgcmV0dXJuIG5ldyBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xuXHQgICAgfVxuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkYWxsO1xuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZShlbnRyaWVzKSB7XG5cdCAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdCAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cblx0ICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCk7XG5cblx0ICAgICAgaWYgKCFsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoZW50cmllcykpIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcblx0ICAgICAgICByZXR1cm4gcHJvbWlzZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcblxuXHQgICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxtZW50KHZhbHVlKSB7XG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG5cdCAgICAgIH1cblxuXHQgICAgICBmdW5jdGlvbiBvblJlamVjdGlvbihyZWFzb24pIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUoQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKSwgdW5kZWZpbmVkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gcHJvbWlzZTtcblx0ICAgIH1cblx0ICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZTtcblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmUob2JqZWN0KSB7XG5cdCAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdCAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cblx0ICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG5cdCAgICAgICAgcmV0dXJuIG9iamVjdDtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXHQgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG5cdCAgICAgIHJldHVybiBwcm9taXNlO1xuXHQgICAgfVxuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlO1xuXHQgICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3QocmVhc29uKSB7XG5cdCAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdCAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cdCAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXHQgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcblx0ICAgICAgcmV0dXJuIHByb21pc2U7XG5cdCAgICB9XG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3Q7XG5cblx0ICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkY291bnRlciA9IDA7XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCkge1xuXHQgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpIHtcblx0ICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2U7XG5cdCAgICAvKipcblx0ICAgICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuXHQgICAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuXHQgICAgICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cblx0ICAgICAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cblx0ICAgICAgVGVybWlub2xvZ3lcblx0ICAgICAgLS0tLS0tLS0tLS1cblxuXHQgICAgICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuXHQgICAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG5cdCAgICAgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cblx0ICAgICAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG5cdCAgICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cblx0ICAgICAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cblx0ICAgICAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG5cdCAgICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG5cdCAgICAgIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcblx0ICAgICAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cblx0ICAgICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG5cdCAgICAgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3Ncblx0ICAgICAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG5cdCAgICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcblx0ICAgICAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuXHQgICAgICBCYXNpYyBVc2FnZTpcblx0ICAgICAgLS0tLS0tLS0tLS0tXG5cblx0ICAgICAgYGBganNcblx0ICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0ICAgICAgICAvLyBvbiBzdWNjZXNzXG5cdCAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cblx0ICAgICAgICAvLyBvbiBmYWlsdXJlXG5cdCAgICAgICAgcmVqZWN0KHJlYXNvbik7XG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG5cdCAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuXHQgICAgICAgIC8vIG9uIHJlamVjdGlvblxuXHQgICAgICB9KTtcblx0ICAgICAgYGBgXG5cblx0ICAgICAgQWR2YW5jZWQgVXNhZ2U6XG5cdCAgICAgIC0tLS0tLS0tLS0tLS0tLVxuXG5cdCAgICAgIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcblx0ICAgICAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cblx0ICAgICAgYGBganNcblx0ICAgICAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcblx0ICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHQgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG5cdCAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcblx0ICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG5cdCAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0ICAgICAgICAgIHhoci5zZW5kKCk7XG5cblx0ICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuXHQgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdCAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuXHQgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdCAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcblx0ICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG5cdCAgICAgICAgLy8gb24gcmVqZWN0aW9uXG5cdCAgICAgIH0pO1xuXHQgICAgICBgYGBcblxuXHQgICAgICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG5cdCAgICAgIGBgYGpzXG5cdCAgICAgIFByb21pc2UuYWxsKFtcblx0ICAgICAgICBnZXRKU09OKCcvcG9zdHMnKSxcblx0ICAgICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuXHQgICAgICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG5cdCAgICAgICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuXHQgICAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuXHQgICAgICAgIHJldHVybiB2YWx1ZXM7XG5cdCAgICAgIH0pO1xuXHQgICAgICBgYGBcblxuXHQgICAgICBAY2xhc3MgUHJvbWlzZVxuXHQgICAgICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuXHQgICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG5cdCAgICAgIEBjb25zdHJ1Y3RvclxuXHQgICAgKi9cblx0ICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyKSB7XG5cdCAgICAgIHRoaXMuX2lkID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGNvdW50ZXIrKztcblx0ICAgICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG5cdCAgICAgIHRoaXMuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcblx0ICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuXHQgICAgICBpZiAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCAhPT0gcmVzb2x2ZXIpIHtcblx0ICAgICAgICBpZiAoIWxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNGdW5jdGlvbihyZXNvbHZlcikpIHtcblx0ICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKSkge1xuXHQgICAgICAgICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLmFsbCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdDtcblx0ICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJhY2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyYWNlJCRkZWZhdWx0O1xuXHQgICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmVzb2x2ZSA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQ7XG5cdCAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZWplY3QgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG5cdCAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldFNjaGVkdWxlcjtcblx0ICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLl9zZXRBc2FwID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHNldEFzYXA7XG5cdCAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fYXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwO1xuXG5cdCAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5wcm90b3R5cGUgPSB7XG5cdCAgICAgIGNvbnN0cnVjdG9yOiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSxcblxuXHQgICAgLyoqXG5cdCAgICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuXHQgICAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuXHQgICAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cblx0ICAgICAgYGBganNcblx0ICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuXHQgICAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG5cdCAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG5cdCAgICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcblx0ICAgICAgfSk7XG5cdCAgICAgIGBgYFxuXG5cdCAgICAgIENoYWluaW5nXG5cdCAgICAgIC0tLS0tLS0tXG5cblx0ICAgICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcblx0ICAgICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuXHQgICAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblxuXHQgICAgICBgYGBqc1xuXHQgICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcblx0ICAgICAgICByZXR1cm4gdXNlci5uYW1lO1xuXHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdCAgICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuXHQgICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuXHQgICAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcblx0ICAgICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2Bcblx0ICAgICAgfSk7XG5cblx0ICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuXHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG5cdCAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuXHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdCAgICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cblx0ICAgICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cblx0ICAgICAgfSk7XG5cdCAgICAgIGBgYFxuXHQgICAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cblxuXHQgICAgICBgYGBqc1xuXHQgICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG5cdCAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuXHQgICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcblx0ICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHQgICAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG5cdCAgICAgIH0pO1xuXHQgICAgICBgYGBcblxuXHQgICAgICBBc3NpbWlsYXRpb25cblx0ICAgICAgLS0tLS0tLS0tLS0tXG5cblx0ICAgICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcblx0ICAgICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuXHQgICAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuXHQgICAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cblxuXHQgICAgICBgYGBqc1xuXHQgICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcblx0ICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG5cdCAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG5cdCAgICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuXHQgICAgICB9KTtcblx0ICAgICAgYGBgXG5cblx0ICAgICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG5cblx0ICAgICAgYGBganNcblx0ICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG5cdCAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuXHQgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuXHQgICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcblx0ICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHQgICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcblx0ICAgICAgfSk7XG5cdCAgICAgIGBgYFxuXG5cdCAgICAgIFNpbXBsZSBFeGFtcGxlXG5cdCAgICAgIC0tLS0tLS0tLS0tLS0tXG5cblx0ICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG5cdCAgICAgIGBgYGphdmFzY3JpcHRcblx0ICAgICAgdmFyIHJlc3VsdDtcblxuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcblx0ICAgICAgICAvLyBzdWNjZXNzXG5cdCAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG5cdCAgICAgICAgLy8gZmFpbHVyZVxuXHQgICAgICB9XG5cdCAgICAgIGBgYFxuXG5cdCAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG5cdCAgICAgIGBgYGpzXG5cdCAgICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuXHQgICAgICAgIGlmIChlcnIpIHtcblx0ICAgICAgICAgIC8vIGZhaWx1cmVcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gc3VjY2Vzc1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIGBgYFxuXG5cdCAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuXHQgICAgICBgYGBqYXZhc2NyaXB0XG5cdCAgICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG5cdCAgICAgICAgLy8gc3VjY2Vzc1xuXHQgICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuXHQgICAgICAgIC8vIGZhaWx1cmVcblx0ICAgICAgfSk7XG5cdCAgICAgIGBgYFxuXG5cdCAgICAgIEFkdmFuY2VkIEV4YW1wbGVcblx0ICAgICAgLS0tLS0tLS0tLS0tLS1cblxuXHQgICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cblx0ICAgICAgYGBgamF2YXNjcmlwdFxuXHQgICAgICB2YXIgYXV0aG9yLCBib29rcztcblxuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcblx0ICAgICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuXHQgICAgICAgIC8vIHN1Y2Nlc3Ncblx0ICAgICAgfSBjYXRjaChyZWFzb24pIHtcblx0ICAgICAgICAvLyBmYWlsdXJlXG5cdCAgICAgIH1cblx0ICAgICAgYGBgXG5cblx0ICAgICAgRXJyYmFjayBFeGFtcGxlXG5cblx0ICAgICAgYGBganNcblxuXHQgICAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG5cblx0ICAgICAgfVxuXG5cdCAgICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG5cblx0ICAgICAgfVxuXG5cdCAgICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuXHQgICAgICAgIGlmIChlcnIpIHtcblx0ICAgICAgICAgIGZhaWx1cmUoZXJyKTtcblx0ICAgICAgICAgIC8vIGZhaWx1cmVcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuXHQgICAgICAgICAgICAgIGlmIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcblx0ICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG5cdCAgICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuXHQgICAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcblx0ICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gc3VjY2Vzc1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIGBgYFxuXG5cdCAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuXHQgICAgICBgYGBqYXZhc2NyaXB0XG5cdCAgICAgIGZpbmRBdXRob3IoKS5cblx0ICAgICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cblx0ICAgICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcblx0ICAgICAgICAgIC8vIGZvdW5kIGJvb2tzXG5cdCAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG5cdCAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3Jvbmdcblx0ICAgICAgfSk7XG5cdCAgICAgIGBgYFxuXG5cdCAgICAgIEBtZXRob2QgdGhlblxuXHQgICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuXHQgICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG5cdCAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cblx0ICAgICAgQHJldHVybiB7UHJvbWlzZX1cblx0ICAgICovXG5cdCAgICAgIHRoZW46IGZ1bmN0aW9uKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG5cdCAgICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuXHQgICAgICAgIGlmIChzdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEICYmICFvbkZ1bGZpbGxtZW50IHx8IHN0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCAmJiAhb25SZWplY3Rpb24pIHtcblx0ICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXHQgICAgICAgIHZhciByZXN1bHQgPSBwYXJlbnQuX3Jlc3VsdDtcblxuXHQgICAgICAgIGlmIChzdGF0ZSkge1xuXHQgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW3N0YXRlIC0gMV07XG5cdCAgICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbigpe1xuXHQgICAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCByZXN1bHQpO1xuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIGNoaWxkO1xuXHQgICAgICB9LFxuXG5cdCAgICAvKipcblx0ICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuXHQgICAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuXG5cdCAgICAgIGBgYGpzXG5cdCAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIC8vIHN5bmNocm9ub3VzXG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgZmluZEF1dGhvcigpO1xuXHQgICAgICB9IGNhdGNoKHJlYXNvbikge1xuXHQgICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG5cdCAgICAgIH1cblxuXHQgICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG5cdCAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuXHQgICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG5cdCAgICAgIH0pO1xuXHQgICAgICBgYGBcblxuXHQgICAgICBAbWV0aG9kIGNhdGNoXG5cdCAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG5cdCAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cblx0ICAgICAgQHJldHVybiB7UHJvbWlzZX1cblx0ICAgICovXG5cdCAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cdCAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsKCkge1xuXHQgICAgICB2YXIgbG9jYWw7XG5cblx0ICAgICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICBsb2NhbCA9IGdsb2JhbDtcblx0ICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgIGxvY2FsID0gc2VsZjtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHQgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cblx0ICAgICAgaWYgKFAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFAucmVzb2x2ZSgpKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblxuXHQgICAgICBsb2NhbC5Qcm9taXNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQ7XG5cdCAgICB9XG5cdCAgICB2YXIgbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRwb2x5ZmlsbDtcblxuXHQgICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2UgPSB7XG5cdCAgICAgICdQcm9taXNlJzogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQsXG5cdCAgICAgICdwb2x5ZmlsbCc6IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdFxuXHQgICAgfTtcblxuXHQgICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuXHQgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gJ2Z1bmN0aW9uJyAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpWydhbWQnXSkge1xuXHQgICAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlOyB9LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXywgZXhwb3J0cywgbW9kdWxlKSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVbJ2V4cG9ydHMnXSkge1xuXHQgICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9IGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICB0aGlzWydFUzZQcm9taXNlJ10gPSBsaWIkZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuXHQgICAgfVxuXG5cdCAgICBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQoKTtcblx0fSkuY2FsbCh0aGlzKTtcblxuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKG1vZHVsZSkpKVxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRcdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBtb2R1bGU7XHJcblx0fVxyXG5cblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qIChpZ25vcmVkKSAqL1xuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHt2YXIga2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBwcm9taXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblx0dmFyIGRlcHJlY2F0ZWQgPSB7fTtcblx0ZnVuY3Rpb24gZGVwcmVjYXRlZFdhcm5pbmcoa2V5LCB0ZXh0KSB7XG5cdCAgICBpZiAoIWRlcHJlY2F0ZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgIGRlcHJlY2F0ZWRba2V5XSA9IHRydWU7XG5cdCAgICAgICAgY29uc29sZS53YXJuKFwiREVQUkVDQVRJT04gV0FSTklORzogJ1wiICsga2V5ICtcblx0ICAgICAgICAgICAgXCInIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHJlbGVhc2UuIFwiICsgdGV4dCk7XG5cdCAgICB9XG5cdH1cblx0dmFyIFpvbmUgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gWm9uZShwYXJlbnRab25lLCBkYXRhKSB7XG5cdCAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXHQgICAgICAgIC8vIG9uRXJyb3IgaXMgdXNlZCB0byBvdmVycmlkZSBlcnJvciBoYW5kbGluZy5cblx0ICAgICAgICAvLyBXaGVuIGEgY3VzdG9tIGVycm9yIGhhbmRsZXIgaXMgcHJvdmlkZWQsIGl0IHNob3VsZCBtb3N0IHByb2JhYmx5IHJldGhyb3cgdGhlIGV4Y2VwdGlvblxuXHQgICAgICAgIC8vIG5vdCB0byBicmVhayB0aGUgZXhwZWN0ZWQgY29udHJvbCBmbG93OlxuXHQgICAgICAgIC8vXG5cdCAgICAgICAgLy8gYHByb21pc2UudGhlbihmblRoYXRUaHJvd3MpLmNhdGNoKGZuKTtgXG5cdCAgICAgICAgLy9cblx0ICAgICAgICAvLyBXaGVuIHRoaXMgY29kZSBpcyBleGVjdXRlZCBpbiBhIHpvbmUgd2l0aCBhIGN1c3RvbSBvbkVycm9yIGhhbmRsZXIgdGhhdCBkb2Vzbid0IHJldGhyb3csIHRoZVxuXHQgICAgICAgIC8vIGAuY2F0Y2goKWAgYnJhbmNoIHdpbGwgbm90IGJlIHRha2VuIGFzIHRoZSBgZm5UaGF0VGhyb3dzYCBleGNlcHRpb24gd2lsbCBiZSBzd2FsbG93ZWQgYnkgdGhlXG5cdCAgICAgICAgLy8gaGFuZGxlci5cblx0ICAgICAgICB0aGlzLm9uRXJyb3IgPSBudWxsO1xuXHQgICAgICAgIHZhciB6b25lID0gKGFyZ3VtZW50cy5sZW5ndGgpID8gT2JqZWN0LmNyZWF0ZShwYXJlbnRab25lKSA6IHRoaXM7XG5cdCAgICAgICAgem9uZS5wYXJlbnQgPSBwYXJlbnRab25lIHx8IG51bGw7XG5cdCAgICAgICAgT2JqZWN0LmtleXMoZGF0YSB8fCB7fSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcblx0ICAgICAgICAgICAgdmFyIF9wcm9wZXJ0eSA9IHByb3BlcnR5LnN1YnN0cigxKTtcblx0ICAgICAgICAgICAgLy8gYXVnbWVudCB0aGUgbmV3IHpvbmUgd2l0aCBhIGhvb2sgZGVjb3JhdGVzIHRoZSBwYXJlbnQncyBob29rXG5cdCAgICAgICAgICAgIGlmIChwcm9wZXJ0eVswXSA9PT0gJyQnKSB7XG5cdCAgICAgICAgICAgICAgICB6b25lW19wcm9wZXJ0eV0gPSBkYXRhW3Byb3BlcnR5XShwYXJlbnRab25lW19wcm9wZXJ0eV0gfHwgZnVuY3Rpb24gKCkgeyB9KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eVswXSA9PT0gJysnKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAocGFyZW50Wm9uZVtfcHJvcGVydHldKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgem9uZVtfcHJvcGVydHldID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcGFyZW50Wm9uZVtfcHJvcGVydHldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHpvbmVbX3Byb3BlcnR5XSA9IGRhdGFbcHJvcGVydHldO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5WzBdID09PSAnLScpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChwYXJlbnRab25lW19wcm9wZXJ0eV0pIHtcblx0ICAgICAgICAgICAgICAgICAgICB6b25lW19wcm9wZXJ0eV0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRab25lW19wcm9wZXJ0eV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgem9uZVtfcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB6b25lW3Byb3BlcnR5XSA9ICh0eXBlb2YgZGF0YVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSA/XG5cdCAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhW3Byb3BlcnR5XSkpIDpcblx0ICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHpvbmUuJGlkID0gWm9uZS5uZXh0SWQrKztcblx0ICAgICAgICByZXR1cm4gem9uZTtcblx0ICAgIH1cblx0ICAgIFpvbmUucHJvdG90eXBlLmZvcmsgPSBmdW5jdGlvbiAobG9jYWxzKSB7XG5cdCAgICAgICAgdGhpcy5vblpvbmVDcmVhdGVkKCk7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBab25lKHRoaXMsIGxvY2Fscyk7XG5cdCAgICB9O1xuXHQgICAgWm9uZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChmbiwgc2tpcEVucXVldWUpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0aW5nIGZ1bmN0aW9uIGdvdDogJyArIGZuKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgc2tpcEVucXVldWUgfHwgdGhpcy5lbnF1ZXVlVGFzayhmbik7XG5cdCAgICAgICAgdmFyIHpvbmUgPSB0aGlzLmlzUm9vdFpvbmUoKSA/IHRoaXMgOiB0aGlzLmZvcmsoKTtcblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gem9uZUJvdW5kRm4oKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB6b25lLnJ1bihmbiwgdGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIC8vLyBAZGVwcmVjYXRlZFxuXHQgICAgWm9uZS5wcm90b3R5cGUuYmluZE9uY2UgPSBmdW5jdGlvbiAoZm4pIHtcblx0ICAgICAgICBkZXByZWNhdGVkV2FybmluZygnYmluZE9uY2UnLCAnVGhlcmUgaXMgbm8gcmVwbGFjZW1lbnQuJyk7XG5cdCAgICAgICAgdmFyIGJvdW5kWm9uZSA9IHRoaXM7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuYmluZChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICBib3VuZFpvbmUuZGVxdWV1ZVRhc2soZm4pO1xuXHQgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgICAgIH0pO1xuXHQgICAgfTtcblx0ICAgIFpvbmUucHJvdG90eXBlLmlzUm9vdFpvbmUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID09PSBudWxsO1xuXHQgICAgfTtcblx0ICAgIFpvbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChmbiwgYXBwbHlUbywgYXBwbHlXaXRoKSB7XG5cdCAgICAgICAgYXBwbHlXaXRoID0gYXBwbHlXaXRoIHx8IFtdO1xuXHQgICAgICAgIHZhciBvbGRab25lID0gZ2xvYmFsLnpvbmU7XG5cdCAgICAgICAgLy8gTUFLRSBUSElTIFpPTkUgVEhFIENVUlJFTlQgWk9ORVxuXHQgICAgICAgIGdsb2JhbC56b25lID0gdGhpcztcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICB0aGlzLmJlZm9yZVRhc2soKTtcblx0ICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGFwcGx5VG8sIGFwcGx5V2l0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLm9uRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMub25FcnJvcihlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IGU7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgZmluYWxseSB7XG5cdCAgICAgICAgICAgIHRoaXMuYWZ0ZXJUYXNrKCk7XG5cdCAgICAgICAgICAgIC8vIFJFVkVSVCBUSEUgQ1VSUkVOVCBaT05FIEJBQ0sgVE8gVEhFIE9SSUdJTkFMIFpPTkVcblx0ICAgICAgICAgICAgZ2xvYmFsLnpvbmUgPSBvbGRab25lO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICBab25lLnByb3RvdHlwZS5iZWZvcmVUYXNrID0gZnVuY3Rpb24gKCkgeyB9O1xuXHQgICAgWm9uZS5wcm90b3R5cGUub25ab25lQ3JlYXRlZCA9IGZ1bmN0aW9uICgpIHsgfTtcblx0ICAgIFpvbmUucHJvdG90eXBlLmFmdGVyVGFzayA9IGZ1bmN0aW9uICgpIHsgfTtcblx0ICAgIFpvbmUucHJvdG90eXBlLmVucXVldWVUYXNrID0gZnVuY3Rpb24gKGZuKSB7XG5cdCAgICAgICAgZGVwcmVjYXRlZFdhcm5pbmcoJ2VucXVldWVUYXNrJywgJ1VzZSBhZGRUYXNrL2FkZFJlcGVhdGluZ1Rhc2svYWRkTWljcm9UYXNrJyk7XG5cdCAgICB9O1xuXHQgICAgWm9uZS5wcm90b3R5cGUuZGVxdWV1ZVRhc2sgPSBmdW5jdGlvbiAoZm4pIHtcblx0ICAgICAgICBkZXByZWNhdGVkV2FybmluZygnZGVxdWV1ZVRhc2snLCAnVXNlIHJlbW92ZVRhc2svcmVtb3ZlUmVwZWF0aW5nVGFzay9yZW1vdmVNaWNyb1Rhc2snKTtcblx0ICAgIH07XG5cdCAgICBab25lLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24gKHRhc2tGbikgeyB0aGlzLmVucXVldWVUYXNrKHRhc2tGbik7IH07XG5cdCAgICBab25lLnByb3RvdHlwZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24gKHRhc2tGbikgeyB0aGlzLmRlcXVldWVUYXNrKHRhc2tGbik7IH07XG5cdCAgICBab25lLnByb3RvdHlwZS5hZGRSZXBlYXRpbmdUYXNrID0gZnVuY3Rpb24gKHRhc2tGbikgeyB0aGlzLmVucXVldWVUYXNrKHRhc2tGbik7IH07XG5cdCAgICBab25lLnByb3RvdHlwZS5yZW1vdmVSZXBlYXRpbmdUYXNrID0gZnVuY3Rpb24gKHRhc2tGbikgeyB0aGlzLmRlcXVldWVUYXNrKHRhc2tGbik7IH07XG5cdCAgICBab25lLnByb3RvdHlwZS5hZGRNaWNyb3Rhc2sgPSBmdW5jdGlvbiAodGFza0ZuKSB7IHRoaXMuZW5xdWV1ZVRhc2sodGFza0ZuKTsgfTtcblx0ICAgIFpvbmUucHJvdG90eXBlLnJlbW92ZU1pY3JvdGFzayA9IGZ1bmN0aW9uICh0YXNrRm4pIHsgdGhpcy5kZXF1ZXVlVGFzayh0YXNrRm4pOyB9O1xuXHQgICAgWm9uZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpc1trZXlzLmNvbW1vbi5hZGRFdmVudExpc3RlbmVyXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgfTtcblx0ICAgIFpvbmUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXNba2V5cy5jb21tb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcl0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgIH07XG5cdCAgICAvLyBSb290IHpvbmUgSUQgPT09IDFcblx0ICAgIFpvbmUubmV4dElkID0gMTtcblx0ICAgIFpvbmUuYmluZFByb21pc2VGbiA9IHByb21pc2UuYmluZFByb21pc2VGbjtcblx0ICAgIHJldHVybiBab25lO1xuXHR9KSgpO1xuXHRleHBvcnRzLlpvbmUgPSBab25lO1xuXHQ7XG5cdC8vIyBzb3VyY2VNYXBwaW5nVVJMRGlzYWJsZWQ9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5eVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMMnhwWWk5amIzSmxMblJ6SWwwc0ltNWhiV1Z6SWpwYkltUmxjSEpsWTJGMFpXUlhZWEp1YVc1bklpd2lXbTl1WlNJc0lscHZibVV1WTI5dWMzUnlkV04wYjNJaUxDSmFiMjVsTG1admNtc2lMQ0phYjI1bExtSnBibVFpTENKYWIyNWxMbUpwYm1RdWVtOXVaVUp2ZFc1a1JtNGlMQ0phYjI1bExtSnBibVJQYm1ObElpd2lXbTl1WlM1cGMxSnZiM1JhYjI1bElpd2lXbTl1WlM1eWRXNGlMQ0phYjI1bExtSmxabTl5WlZSaGMyc2lMQ0phYjI1bExtOXVXbTl1WlVOeVpXRjBaV1FpTENKYWIyNWxMbUZtZEdWeVZHRnpheUlzSWxwdmJtVXVaVzV4ZFdWMVpWUmhjMnNpTENKYWIyNWxMbVJsY1hWbGRXVlVZWE5ySWl3aVdtOXVaUzVoWkdSVVlYTnJJaXdpV205dVpTNXlaVzF2ZG1WVVlYTnJJaXdpV205dVpTNWhaR1JTWlhCbFlYUnBibWRVWVhOcklpd2lXbTl1WlM1eVpXMXZkbVZTWlhCbFlYUnBibWRVWVhOcklpd2lXbTl1WlM1aFpHUk5hV055YjNSaGMyc2lMQ0phYjI1bExuSmxiVzkyWlUxcFkzSnZkR0Z6YXlJc0lscHZibVV1WVdSa1JYWmxiblJNYVhOMFpXNWxjaUlzSWxwdmJtVXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaUpkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzU1VGQldTeEpRVUZKTEZkQlFVMHNVVUZCVVN4RFFVRkRMRU5CUVVFN1FVRkRMMElzU1VGQldTeFBRVUZQTEZkQlFVMHNhVUpCUVdsQ0xFTkJRVU1zUTBGQlFUdEJRVVV6UXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRmNFSXNNa0pCUVRKQ0xFZEJRVWNzUlVGQlJTeEpRVUZKTzBsQlEyeERRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hqUVVGalFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU53UTBFc1ZVRkJWVUVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUjBGQlIwRXNTVUZCU1VFc1EwRkJRMEU3VVVGRGRrSkJMRTlCUVU5QkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxIZENRVUYzUWtFc1IwRkJSMEVzUjBGQlIwRTdXVUZEZGtOQkxITkZRVUZ6UlVFc1IwRkJSMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEU3U1VGRGNrWkJMRU5CUVVOQk8wRkJRMGhCTEVOQlFVTkJPMEZCUlVRN1NVRlJSVU1zWTBGQldVRXNWVUZCVjBFc1JVRkJSVUVzU1VGQlMwRTdVVUZHT1VKRExGZEJRVTFCTEVkQlFWTkJMRWxCUVVsQkxFTkJRVU5CTzFGQk1FZHdRa0VzT0VOQlFUaERRVHRSUVVNNVEwRXNlVVpCUVhsR1FUdFJRVU42UmtFc01FTkJRVEJEUVR0UlFVTXhRMEVzUlVGQlJVRTdVVUZEUmtFc01FTkJRVEJEUVR0UlFVTXhRMEVzUlVGQlJVRTdVVUZEUmtFc0swWkJRU3RHUVR0UlFVTXZSa0VzSzBaQlFTdEdRVHRSUVVNdlJrRXNWMEZCVjBFN1VVRkRXRUVzV1VGQlQwRXNSMEZCUjBFc1NVRkJTVUVzUTBGQlEwRTdVVUZvU0dKQkxFbEJRVWxCTEVsQlFVbEJMRWRCUVVkQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxFMUJRVTFCTEVOQlFVTkJMRWRCUVVkQkxFMUJRVTFCTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEZWQlFWVkJMRU5CUVVOQkxFZEJRVWRCTEVsQlFVbEJMRU5CUVVOQk8xRkJSV3BGUVN4SlFVRkpRU3hEUVVGRFFTeE5RVUZOUVN4SFFVRkhRU3hWUVVGVlFTeEpRVUZKUVN4SlFVRkpRU3hEUVVGRFFUdFJRVVZxUTBFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzU1VGQlNVRXNTVUZCU1VFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1QwRkJUMEVzUTBGQlEwRXNWVUZCVTBFc1VVRkJVVUU3V1VGRkwwTXNTVUZCU1N4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVnVReXdyUkVGQkswUTdXVUZETDBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzaENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEdOQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkhOVVVzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGREwwSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRNVUlzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhPM2RDUVVOb1FpeEpRVUZKTEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenQzUWtGRE1VUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN2QwSkJRM1JETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN2IwSkJRMmhDTEVOQlFVTXNRMEZCUXp0blFrRkRTaXhEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOT0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEyNURMRU5CUVVNN1dVRkhTQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNdlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTXhRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVYzdkMEpCUTJoQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzNkQ1FVTjBReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdiMEpCUTNSRUxFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4RFFVRkRPMmRDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTk9MRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRMjVETEVOQlFVTTdXVUZIU0N4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwNHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1VVRkJVU3hEUVVGRE8yOUNRVU51UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6RkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRPMUZCUTBnc1EwRkJReXhEUVVGRFFTeERRVUZEUVR0UlFVVklRU3hKUVVGSlFTeERRVUZEUVN4SFFVRkhRU3hIUVVGVFFTeEpRVUZMUVN4RFFVRkRRU3hOUVVGTlFTeEZRVUZGUVN4RFFVRkRRVHRSUVVWb1EwRXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFN1NVRkRaRUVzUTBGQlEwRTdTVUZGUkVRc2JVSkJRVWxCTEVkQlFVcEJMRlZCUVV0QkxFMUJRVTlCTzFGQlExWkZMRWxCUVVsQkxFTkJRVU5CTEdGQlFXRkJMRVZCUVVWQkxFTkJRVU5CTzFGQlEzSkNRU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hKUVVGSlFTeERRVUZEUVN4SlFVRkpRU3hGUVVGRlFTeE5RVUZOUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU5vUTBFc1EwRkJRMEU3U1VGRlJFWXNiVUpCUVVsQkxFZEJRVXBCTEZWQlFVdEJMRVZCUVVWQkxFVkJRVVZCTEZkQlFWbEJPMUZCUTI1Q1J5eEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeFBRVUZQUVN4RlFVRkZRU3hMUVVGTFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0WlFVTTNRa0VzVFVGQlRVRXNTVUZCU1VFc1MwRkJTMEVzUTBGQlEwRXNNRUpCUVRCQ1FTeEhRVUZIUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVR0UlFVTnVSRUVzUTBGQlEwRTdVVUZEUkVFc1YwRkJWMEVzU1VGQlNVRXNTVUZCU1VFc1EwRkJRMEVzVjBGQlYwRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFN1VVRkRjRU5CTEVsQlFVbEJMRWxCUVVsQkxFZEJRVWRCTEVsQlFVbEJMRU5CUVVOQkxGVkJRVlZCTEVWQlFVVkJMRWRCUVVkQkxFbEJRVWxCTEVkQlFVZEJMRWxCUVVsQkxFTkJRVU5CTEVsQlFVbEJMRVZCUVVWQkxFTkJRVU5CTzFGQlEyeEVRU3hOUVVGTlFTeERRVUZEUVR0WlFVTk1ReXhOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hGUVVGRlFTeEZRVUZGUVN4SlFVRkpRU3hGUVVGRlFTeFRRVUZUUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU4yUTBFc1EwRkJRMEVzUTBGQlEwUTdTVUZEU2tFc1EwRkJRMEU3U1VGRlJFZ3NaVUZCWlVFN1NVRkRaa0VzZFVKQlFWRkJMRWRCUVZKQkxGVkJRVk5CTEVWQlFVVkJPMUZCUTFSTExHbENRVUZwUWtFc1EwRkJRMEVzVlVGQlZVRXNSVUZCUlVFc01FSkJRVEJDUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU14UkVFc1NVRkJTVUVzVTBGQlUwRXNSMEZCUjBFc1NVRkJTVUVzUTBGQlEwRTdVVUZEY2tKQkxFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQk8xbEJRMllzU1VGQlNTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEZGtNc1UwRkJVeXhEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEyaENMRU5CUVVNc1EwRkJRMEVzUTBGQlEwRTdTVUZEVEVFc1EwRkJRMEU3U1VGRlJFd3NlVUpCUVZWQkxFZEJRVlpCTzFGQlEwVk5MRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFMUJRVTFCTEV0QlFVdEJMRWxCUVVsQkxFTkJRVU5CTzBsQlF6bENRU3hEUVVGRFFUdEpRVVZFVGl4clFrRkJSMEVzUjBGQlNFRXNWVUZCU1VFc1JVRkJSVUVzUlVGQlJVRXNUMEZCVVVFc1JVRkJSVUVzVTBGQlZVRTdVVUZETVVKUExGTkJRVk5CTEVkQlFVZEJMRk5CUVZOQkxFbEJRVWxCTEVWQlFVVkJMRU5CUVVOQk8xRkJSVFZDUVN4SlFVRkpRU3hQUVVGUFFTeEhRVUZIUVN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRVHRSUVVVeFFrRXNhME5CUVd0RFFUdFJRVU5zUTBFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1IwRkJSMEVzU1VGQlNVRXNRMEZCUTBFN1VVRkZia0pCTEVsQlFVbEJMRU5CUVVOQk8xbEJRMGhCTEVsQlFVbEJMRU5CUVVOQkxGVkJRVlZCTEVWQlFVVkJMRU5CUVVOQk8xbEJRMnhDUVN4TlFVRk5RU3hEUVVGRFFTeEZRVUZGUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVN4UFFVRlBRU3hGUVVGRlFTeFRRVUZUUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU4wUTBFc1EwRkJSVUU3VVVGQlFVRXNTMEZCUzBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1dVRkRXRUVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1QwRkJUMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3WjBKQlEycENRU3hKUVVGSlFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU5zUWtFc1EwRkJRMEU3V1VGQlEwRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRTdaMEpCUTA1QkxFMUJRVTFCTEVOQlFVTkJMRU5CUVVOQk8xbEJRMVpCTEVOQlFVTkJPMUZCUTBoQkxFTkJRVU5CTzJkQ1FVRlRRU3hEUVVGRFFUdFpRVU5VUVN4SlFVRkpRU3hEUVVGRFFTeFRRVUZUUVN4RlFVRkZRU3hEUVVGRFFUdFpRVU5xUWtFc2IwUkJRVzlFUVR0WlFVTndSRUVzVFVGQlRVRXNRMEZCUTBFc1NVRkJTVUVzUjBGQlIwRXNUMEZCVDBFc1EwRkJRMEU3VVVGRGVFSkJMRU5CUVVOQk8wbEJRMGhCTEVOQlFVTkJPMGxCV1VSUUxIbENRVUZWUVN4SFFVRldRU3hqUVVGalVTeERRVUZEUVR0SlFVTm1VaXcwUWtGQllVRXNSMEZCWWtFc1kwRkJhVUpUTEVOQlFVTkJPMGxCUTJ4Q1ZDeDNRa0ZCVTBFc1IwRkJWRUVzWTBGQllWVXNRMEZCUTBFN1NVRkZaRllzTUVKQlFWZEJMRWRCUVZoQkxGVkJRVmxCTEVWQlFWbEJPMUZCUTNSQ1Z5eHBRa0ZCYVVKQkxFTkJRVU5CTEdGQlFXRkJMRVZCUVVWQkxESkRRVUV5UTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZEYUVaQkxFTkJRVU5CTzBsQlEwUllMREJDUVVGWFFTeEhRVUZZUVN4VlFVRlpRU3hGUVVGWlFUdFJRVU4wUWxrc2FVSkJRV2xDUVN4RFFVRkRRU3hoUVVGaFFTeEZRVUZGUVN4dlJFRkJiMFJCTEVOQlFVTkJMRU5CUVVOQk8wbEJRM3BHUVN4RFFVRkRRVHRKUVVWRVdpeHpRa0ZCVDBFc1IwRkJVRUVzVlVGQlVVRXNUVUZCVFVFc1NVRkJTV0VzU1VGQlNVRXNRMEZCUTBFc1YwRkJWMEVzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3U1VGRE4wTmlMSGxDUVVGVlFTeEhRVUZXUVN4VlFVRlhRU3hOUVVGTlFTeEpRVUZKWXl4SlFVRkpRU3hEUVVGRFFTeFhRVUZYUVN4RFFVRkRRU3hOUVVGTlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0SlFVVm9SR1FzSzBKQlFXZENRU3hIUVVGb1FrRXNWVUZCYVVKQkxFMUJRVTFCTEVsQlFVbGxMRWxCUVVsQkxFTkJRVU5CTEZkQlFWZEJMRU5CUVVOQkxFMUJRVTFCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUTNSRVppeHJRMEZCYlVKQkxFZEJRVzVDUVN4VlFVRnZRa0VzVFVGQlRVRXNTVUZCU1dkQ0xFbEJRVWxCTEVOQlFVTkJMRmRCUVZkQkxFTkJRVU5CTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJSWHBFYUVJc01rSkJRVmxCTEVkQlFWcEJMRlZCUVdGQkxFMUJRVTFCTEVsQlFVbHBRaXhKUVVGSlFTeERRVUZEUVN4WFFVRlhRU3hEUVVGRFFTeE5RVUZOUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRKUVVOc1JHcENMRGhDUVVGbFFTeEhRVUZtUVN4VlFVRm5Ra0VzVFVGQlRVRXNTVUZCU1d0Q0xFbEJRVWxCTEVOQlFVTkJMRmRCUVZkQkxFTkJRVU5CTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJSWEpFYkVJc0swSkJRV2RDUVN4SFFVRm9Ra0U3VVVGRFJXMUNMRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEdkQ1FVRm5Ra0VzUTBGQlEwRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRXNTVUZCU1VFc1JVRkJSVUVzVTBGQlUwRXNRMEZCUTBFc1EwRkJRMEU3U1VGRGJrVkJMRU5CUVVOQk8wbEJSVVJ1UWl4clEwRkJiVUpCTEVkQlFXNUNRVHRSUVVORmIwSXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzYlVKQlFXMUNRU3hEUVVGRFFTeERRVUZEUVN4TFFVRkxRU3hEUVVGRFFTeEpRVUZKUVN4RlFVRkZRU3hUUVVGVFFTeERRVUZEUVN4RFFVRkRRVHRKUVVOMFJVRXNRMEZCUTBFN1NVRnVTa1J3UWl4eFFrRkJjVUpCTzBsQlEyUkJMRmRCUVUxQkxFZEJRVWRCTEVOQlFVTkJMRU5CUVVOQk8wbEJRMWhCTEd0Q1FVRmhRU3hIUVVGSFFTeFBRVUZQUVN4RFFVRkRRU3hoUVVGaFFTeERRVUZEUVR0SlFXdEtMME5CTEZkQlFVTkJPMEZCUVVSQkxFTkJRVU5CTEVGQmNrcEVMRWxCY1VwRE8wRkJja3BaTEZsQlFVa3NUMEZ4U21oQ0xFTkJRVUU3UVVGQlFTeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUNvZ1lYTWdhMlY1Y3lCbWNtOXRJQ2N1TDJ0bGVYTW5PMXh1YVcxd2IzSjBJQ29nWVhNZ2NISnZiV2x6WlNCbWNtOXRJQ2N1TDNCaGRHTm9MM0J5YjIxcGMyVW5PMXh1WEc1MllYSWdaR1Z3Y21WallYUmxaQ0E5SUh0OU8xeHVYRzVtZFc1amRHbHZiaUJrWlhCeVpXTmhkR1ZrVjJGeWJtbHVaeWhyWlhrc0lIUmxlSFFwSUh0Y2JpQWdhV1lnS0NGa1pYQnlaV05oZEdWa0xtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQmtaWEJ5WldOaGRHVmtXMnRsZVYwZ1BTQjBjblZsTzF4dUlDQWdJR052Ym5OdmJHVXVkMkZ5YmloY0lrUkZVRkpGUTBGVVNVOU9JRmRCVWs1SlRrYzZJQ2RjSWlBcklHdGxlU0FyWEc0Z0lDQWdJQ0FnSUZ3aUp5QnBjeUJ1YnlCc2IyNW5aWElnYzNWd2NHOXlkR1ZrSUdGdVpDQjNhV3hzSUdKbElISmxiVzkyWldRZ2FXNGdibVY0ZENCdFlXcHZjaUJ5Wld4bFlYTmxMaUJjSWlBcklIUmxlSFFwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCamJHRnpjeUJhYjI1bElIdGNiaUFnTHk4Z1VtOXZkQ0I2YjI1bElFbEVJRDA5UFNBeFhHNGdJSE4wWVhScFl5QnVaWGgwU1dRZ1BTQXhPMXh1SUNCemRHRjBhV01nWW1sdVpGQnliMjFwYzJWR2JpQTlJSEJ5YjIxcGMyVXVZbWx1WkZCeWIyMXBjMlZHYmp0Y2JseHVYRzRnSUhCaGNtVnVkRG9nV205dVpTQTlJRzUxYkd3N1hHNGdJQ1JwWkRvZ2JuVnRZbVZ5TzF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3WVhKbGJuUmFiMjVsUHl3Z1pHRjBZVDhwSUh0Y2JpQWdJQ0IyWVhJZ2VtOXVaU0E5SUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvS1NBL0lFOWlhbVZqZEM1amNtVmhkR1VvY0dGeVpXNTBXbTl1WlNrZ09pQjBhR2x6TzF4dVhHNGdJQ0FnZW05dVpTNXdZWEpsYm5RZ1BTQndZWEpsYm5SYWIyNWxJSHg4SUc1MWJHdzdYRzVjYmlBZ0lDQlBZbXBsWTNRdWEyVjVjeWhrWVhSaElIeDhJSHQ5S1M1bWIzSkZZV05vS0daMWJtTjBhVzl1S0hCeWIzQmxjblI1S1NCN1hHNWNiaUFnSUNBZ0lIWmhjaUJmY0hKdmNHVnlkSGtnUFNCd2NtOXdaWEowZVM1emRXSnpkSElvTVNrN1hHNWNiaUFnSUNBZ0lDOHZJR0YxWjIxbGJuUWdkR2hsSUc1bGR5QjZiMjVsSUhkcGRHZ2dZU0JvYjI5cklHUmxZMjl5WVhSbGN5QjBhR1VnY0dGeVpXNTBKM01nYUc5dmExeHVJQ0FnSUNBZ2FXWWdLSEJ5YjNCbGNuUjVXekJkSUQwOVBTQW5KQ2NwSUh0Y2JpQWdJQ0FnSUNBZ2VtOXVaVnRmY0hKdmNHVnlkSGxkSUQwZ1pHRjBZVnR3Y205d1pYSjBlVjBvY0dGeVpXNTBXbTl1WlZ0ZmNISnZjR1Z5ZEhsZElIeDhJR1oxYm1OMGFXOXVJQ2dwSUh0OUtUdGNibHh1SUNBZ0lDQWdMeThnWVhWbmJXVnVkQ0IwYUdVZ2JtVjNJSHB2Ym1VZ2QybDBhQ0JoSUdodmIyc2dkR2hoZENCeWRXNXpJR0ZtZEdWeUlIUm9aU0J3WVhKbGJuUW5jeUJvYjI5clhHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIQnliM0JsY25SNVd6QmRJRDA5UFNBbkt5Y3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIQmhjbVZ1ZEZwdmJtVmJYM0J5YjNCbGNuUjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIcHZibVZiWDNCeWIzQmxjblI1WFNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ5WlhOMWJIUWdQU0J3WVhKbGJuUmFiMjVsVzE5d2NtOXdaWEowZVYwdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0ZiY0hKdmNHVnlkSGxkTG1Gd2NHeDVLSFJvYVhNc0lHRnlaM1Z0Wlc1MGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdlbTl1WlZ0ZmNISnZjR1Z5ZEhsZElEMGdaR0YwWVZ0d2NtOXdaWEowZVYwN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnWVhWbmJXVnVkQ0IwYUdVZ2JtVjNJSHB2Ym1VZ2QybDBhQ0JoSUdodmIyc2dkR2hoZENCeWRXNXpJR0psWm05eVpTQjBhR1VnY0dGeVpXNTBKM01nYUc5dmExeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHdjbTl3WlhKMGVWc3dYU0E5UFQwZ0p5MG5LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHdZWEpsYm5SYWIyNWxXMTl3Y205d1pYSjBlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjZiMjVsVzE5d2NtOXdaWEowZVYwZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtZWFJoVzNCeWIzQmxjblI1WFM1aGNIQnNlU2gwYUdsekxDQmhjbWQxYldWdWRITXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhCaGNtVnVkRnB2Ym1WYlgzQnliM0JsY25SNVhTNWhjSEJzZVNoMGFHbHpMQ0JoY21kMWJXVnVkSE1wTzF4dUlDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnZW05dVpWdGZjSEp2Y0dWeWRIbGRJRDBnWkdGMFlWdHdjbTl3WlhKMGVWMDdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z2MyVjBJSFJvWlNCdVpYY2dlbTl1WlNkeklHaHZiMnNnS0hKbGNHeGhZMmx1WnlCMGFHVWdjR0Z5Wlc1MElIcHZibVVuY3lsY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhwdmJtVmJjSEp2Y0dWeWRIbGRJRDBnS0hSNWNHVnZaaUJrWVhSaFczQnliM0JsY25SNVhTQTlQVDBnSjI5aWFtVmpkQ2NwSUQ5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1NsTlBUaTV3WVhKelpTaEtVMDlPTG5OMGNtbHVaMmxtZVNoa1lYUmhXM0J5YjNCbGNuUjVYU2twSURwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZVnR3Y205d1pYSjBlVjA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2s3WEc1Y2JpQWdJQ0I2YjI1bExpUnBaQ0E5SUNnOFlXNTVQbHB2Ym1VcExtNWxlSFJKWkNzck8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhwdmJtVTdYRzRnSUgxY2JseHVJQ0JtYjNKcktHeHZZMkZzY3o4cElIdGNiaUFnSUNCMGFHbHpMbTl1V205dVpVTnlaV0YwWldRb0tUdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGcHZibVVvZEdocGN5d2diRzlqWVd4ektUdGNiaUFnZlZ4dVhHNGdJR0pwYm1Rb1ptNHNJSE5yYVhCRmJuRjFaWFZsUHlrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1ptNGdJVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblJYaHdaV04wYVc1bklHWjFibU4wYVc5dUlHZHZkRG9nSnlBcklHWnVLVHRjYmlBZ0lDQjlYRzRnSUNBZ2MydHBjRVZ1Y1hWbGRXVWdmSHdnZEdocGN5NWxibkYxWlhWbFZHRnpheWhtYmlrN1hHNGdJQ0FnZG1GeUlIcHZibVVnUFNCMGFHbHpMbWx6VW05dmRGcHZibVVvS1NBL0lIUm9hWE1nT2lCMGFHbHpMbVp2Y21zb0tUdGNiaUFnSUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnZW05dVpVSnZkVzVrUm00b0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2VtOXVaUzV5ZFc0b1ptNHNJSFJvYVhNc0lHRnlaM1Z0Wlc1MGN5azdYRzRnSUNBZ2ZUdGNiaUFnZlZ4dVhHNGdJQzh2THlCQVpHVndjbVZqWVhSbFpGeHVJQ0JpYVc1a1QyNWpaU2htYmlrZ2UxeHVJQ0FnSUdSbGNISmxZMkYwWldSWFlYSnVhVzVuS0NkaWFXNWtUMjVqWlNjc0lDZFVhR1Z5WlNCcGN5QnVieUJ5WlhCc1lXTmxiV1Z1ZEM0bktUdGNiaUFnSUNCMllYSWdZbTkxYm1SYWIyNWxJRDBnZEdocGN6dGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWlhVzVrS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lIWmhjaUJ5WlhOMWJIUWdQU0JtYmk1aGNIQnNlU2gwYUdsekxDQmhjbWQxYldWdWRITXBPMXh1SUNBZ0lDQWdZbTkxYm1SYWIyNWxMbVJsY1hWbGRXVlVZWE5yS0dadUtUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCcGMxSnZiM1JhYjI1bEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkJoY21WdWRDQTlQVDBnYm5Wc2JEdGNiaUFnZlZ4dVhHNGdJSEoxYmlobWJpd2dZWEJ3YkhsVWJ6OHNJR0Z3Y0d4NVYybDBhRDhwSUh0Y2JpQWdJQ0JoY0hCc2VWZHBkR2dnUFNCaGNIQnNlVmRwZEdnZ2ZId2dXMTA3WEc1Y2JpQWdJQ0IyWVhJZ2IyeGtXbTl1WlNBOUlHZHNiMkpoYkM1NmIyNWxPMXh1WEc0Z0lDQWdMeThnVFVGTFJTQlVTRWxUSUZwUFRrVWdWRWhGSUVOVlVsSkZUbFFnV2s5T1JWeHVJQ0FnSUdkc2IySmhiQzU2YjI1bElEMGdkR2hwY3p0Y2JseHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQjBhR2x6TG1KbFptOXlaVlJoYzJzb0tUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbWJpNWhjSEJzZVNoaGNIQnNlVlJ2TENCaGNIQnNlVmRwZEdncE8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXVSWEp5YjNJcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJrVnljbTl5S0dVcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdacGJtRnNiSGtnZTF4dUlDQWdJQ0FnZEdocGN5NWhablJsY2xSaGMyc29LVHRjYmlBZ0lDQWdJQzh2SUZKRlZrVlNWQ0JVU0VVZ1ExVlNVa1ZPVkNCYVQwNUZJRUpCUTBzZ1ZFOGdWRWhGSUU5U1NVZEpUa0ZNSUZwUFRrVmNiaUFnSUNBZ0lHZHNiMkpoYkM1NmIyNWxJRDBnYjJ4a1dtOXVaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCdmJrVnljbTl5SUdseklIVnpaV1FnZEc4Z2IzWmxjbkpwWkdVZ1pYSnliM0lnYUdGdVpHeHBibWN1WEc0Z0lDOHZJRmRvWlc0Z1lTQmpkWE4wYjIwZ1pYSnliM0lnYUdGdVpHeGxjaUJwY3lCd2NtOTJhV1JsWkN3Z2FYUWdjMmh2ZFd4a0lHMXZjM1FnY0hKdlltRmliSGtnY21WMGFISnZkeUIwYUdVZ1pYaGpaWEIwYVc5dVhHNGdJQzh2SUc1dmRDQjBieUJpY21WaGF5QjBhR1VnWlhod1pXTjBaV1FnWTI5dWRISnZiQ0JtYkc5M09seHVJQ0F2TDF4dUlDQXZMeUJnY0hKdmJXbHpaUzUwYUdWdUtHWnVWR2hoZEZSb2NtOTNjeWt1WTJGMFkyZ29abTRwTzJCY2JpQWdMeTljYmlBZ0x5OGdWMmhsYmlCMGFHbHpJR052WkdVZ2FYTWdaWGhsWTNWMFpXUWdhVzRnWVNCNmIyNWxJSGRwZEdnZ1lTQmpkWE4wYjIwZ2IyNUZjbkp2Y2lCb1lXNWtiR1Z5SUhSb1lYUWdaRzlsYzI0bmRDQnlaWFJvY205M0xDQjBhR1ZjYmlBZ0x5OGdZQzVqWVhSamFDZ3BZQ0JpY21GdVkyZ2dkMmxzYkNCdWIzUWdZbVVnZEdGclpXNGdZWE1nZEdobElHQm1ibFJvWVhSVWFISnZkM05nSUdWNFkyVndkR2x2YmlCM2FXeHNJR0psSUhOM1lXeHNiM2RsWkNCaWVTQjBhR1ZjYmlBZ0x5OGdhR0Z1Wkd4bGNpNWNiaUFnYjI1RmNuSnZjaUE5SUc1MWJHdzdYRzRnSUdKbFptOXlaVlJoYzJzb0tTQjdmVnh1SUNCdmJscHZibVZEY21WaGRHVmtLQ2tnZTMxY2JpQWdZV1owWlhKVVlYTnJLQ2tnZTMxY2JpQWdYRzRnSUdWdWNYVmxkV1ZVWVhOcktHWnVPaUJHZFc1amRHbHZiaWtnZTF4dUlDQWdJR1JsY0hKbFkyRjBaV1JYWVhKdWFXNW5LQ2RsYm5GMVpYVmxWR0Z6YXljc0lDZFZjMlVnWVdSa1ZHRnpheTloWkdSU1pYQmxZWFJwYm1kVVlYTnJMMkZrWkUxcFkzSnZWR0Z6YXljcE8xeHVJQ0I5WEc0Z0lHUmxjWFZsZFdWVVlYTnJLR1p1T2lCR2RXNWpkR2x2YmlrZ2UxeHVJQ0FnSUdSbGNISmxZMkYwWldSWFlYSnVhVzVuS0Nka1pYRjFaWFZsVkdGemF5Y3NJQ2RWYzJVZ2NtVnRiM1psVkdGemF5OXlaVzF2ZG1WU1pYQmxZWFJwYm1kVVlYTnJMM0psYlc5MlpVMXBZM0p2VkdGemF5Y3BPMXh1SUNCOVhHNWNiaUFnWVdSa1ZHRnpheWgwWVhOclJtNHBJSHNnZEdocGN5NWxibkYxWlhWbFZHRnpheWgwWVhOclJtNHBPeUI5WEc0Z0lISmxiVzkyWlZSaGMyc29kR0Z6YTBadUtTQjdJSFJvYVhNdVpHVnhkV1YxWlZSaGMyc29kR0Z6YTBadUtUc2dmVnh1WEc0Z0lHRmtaRkpsY0dWaGRHbHVaMVJoYzJzb2RHRnphMFp1S1NCN0lIUm9hWE11Wlc1eGRXVjFaVlJoYzJzb2RHRnphMFp1S1RzZ2ZWeHVJQ0J5WlcxdmRtVlNaWEJsWVhScGJtZFVZWE5yS0hSaGMydEdiaWtnZXlCMGFHbHpMbVJsY1hWbGRXVlVZWE5yS0hSaGMydEdiaWs3SUgxY2JseHVJQ0JoWkdSTmFXTnliM1JoYzJzb2RHRnphMFp1S1NCN0lIUm9hWE11Wlc1eGRXVjFaVlJoYzJzb2RHRnphMFp1S1RzZ2ZWeHVJQ0J5WlcxdmRtVk5hV055YjNSaGMyc29kR0Z6YTBadUtTQjdJSFJvYVhNdVpHVnhkV1YxWlZSaGMyc29kR0Z6YTBadUtUc2dmVnh1WEc0Z0lHRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmJhMlY1Y3k1amIyMXRiMjR1WVdSa1JYWmxiblJNYVhOMFpXNWxjbDB1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNiaUFnZlZ4dVhHNGdJSEpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhOYmEyVjVjeTVqYjIxdGIyNHVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjbDB1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNiaUFnZlZ4dWZUdGNibHh1SWwxOVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBrZXlzIGZvciBgcHJpdmF0ZWAgcHJvcGVydGllcyBvbiBleHBvc2VkIG9iamVjdHMgdG8gbWluaW1pemUgaW50ZXJhY3Rpb25zIHdpdGggb3RoZXIgY29kZWJhc2VzLlxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlKG5hbWUpIHtcblx0ICAgIC8vIGBTeW1ib2xgIGltcGxlbWVudGF0aW9uIGlzIGJyb2tlbiBpbiBDaHJvbWUgMzkuMC4yMTcxLCBkbyBub3QgdXNlIHRoZW0gZXZlbiBpZiB0aGV5IGFyZSBhdmFpbGFibGVcblx0ICAgIHJldHVybiAnX3pvbmUkJyArIG5hbWU7XG5cdH1cblx0ZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cdGV4cG9ydHMuY29tbW9uID0ge1xuXHQgICAgYWRkRXZlbnRMaXN0ZW5lcjogY3JlYXRlKCdhZGRFdmVudExpc3RlbmVyJyksXG5cdCAgICByZW1vdmVFdmVudExpc3RlbmVyOiBjcmVhdGUoJ3JlbW92ZUV2ZW50TGlzdGVuZXInKVxuXHR9O1xuXHQvLyMgc291cmNlTWFwcGluZ1VSTERpc2FibGVkPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWEyVjVjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDJ4cFlpOXJaWGx6TG5SeklsMHNJbTVoYldWeklqcGJJbU55WldGMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMGRCUlVjN1FVRkZTQ3huUWtGQmRVSXNTVUZCU1R0SlFVTjZRa0VzYjBkQlFXOUhRVHRKUVVOd1IwRXNUVUZCVFVFc1EwRkJRMEVzVVVGQlVVRXNSMEZCUjBFc1NVRkJTVUVzUTBGQlEwRTdRVUZEZWtKQkxFTkJRVU5CTzBGQlNHVXNZMEZCVFN4VFFVZHlRaXhEUVVGQk8wRkJSVlVzWTBGQlRTeEhRVUZITzBsQlEyeENMR2RDUVVGblFpeEZRVUZGTEUxQlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF6dEpRVU0xUXl4dFFrRkJiVUlzUlVGQlJTeE5RVUZOTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU03UTBGRGJrUXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCclpYbHpJR1p2Y2lCZ2NISnBkbUYwWldBZ2NISnZjR1Z5ZEdsbGN5QnZiaUJsZUhCdmMyVmtJRzlpYW1WamRITWdkRzhnYldsdWFXMXBlbVVnYVc1MFpYSmhZM1JwYjI1eklIZHBkR2dnYjNSb1pYSWdZMjlrWldKaGMyVnpMbHh1SUNvdlhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmpjbVZoZEdVb2JtRnRaU2tnZTF4dUlDQXZMeUJnVTNsdFltOXNZQ0JwYlhCc1pXMWxiblJoZEdsdmJpQnBjeUJpY205clpXNGdhVzRnUTJoeWIyMWxJRE01TGpBdU1qRTNNU3dnWkc4Z2JtOTBJSFZ6WlNCMGFHVnRJR1YyWlc0Z2FXWWdkR2hsZVNCaGNtVWdZWFpoYVd4aFlteGxYRzRnSUhKbGRIVnliaUFuWDNwdmJtVWtKeUFySUc1aGJXVTdYRzU5WEc1Y2JtVjRjRzl5ZENCMllYSWdZMjl0Ylc5dUlEMGdlMXh1SUNCaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5T2lCamNtVmhkR1VvSjJGa1pFVjJaVzUwVEdsemRHVnVaWEluS1N4Y2JpQWdjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjam9nWTNKbFlYUmxLQ2R5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5SnlsY2JuMDdYRzRpWFgwPVxuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge3ZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdGlmIChnbG9iYWwuUHJvbWlzZSkge1xuXHQgICAgZXhwb3J0cy5iaW5kUHJvbWlzZUZuID0gZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGRlbGVnYXRlUHJvbWlzZSA9IGRlbGVnYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgIC8vIGlmIHRoZSBkZWxlZ2F0ZSByZXR1cm5lZCBhbiBpbnN0YW5jZSBvZiBQcm9taXNlLCBmb3J3YXJkIGl0LlxuXHQgICAgICAgICAgICBpZiAoZGVsZWdhdGVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUHJvbWlzZTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBPdGhlcndpc2Ugd3JhcCB0aGUgUHJvbWlzZS1saWtlIGluIGEgZ2xvYmFsIFByb21pc2Vcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0ICAgICAgICAgICAgICAgIGRlbGVnYXRlUHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH07XG5cdCAgICB9O1xuXHR9XG5cdGVsc2Uge1xuXHQgICAgZXhwb3J0cy5iaW5kUHJvbWlzZUZuID0gZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9wYXRjaFRoZW5hYmxlKGRlbGVnYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHQgICAgICAgIH07XG5cdCAgICB9O1xuXHR9XG5cdGZ1bmN0aW9uIF9wYXRjaFByb21pc2VGbnNPbk9iamVjdChvYmplY3RQYXRoLCBmbk5hbWVzKSB7XG5cdCAgICB2YXIgb2JqID0gZ2xvYmFsO1xuXHQgICAgdmFyIGV4aXN0cyA9IG9iamVjdFBhdGguZXZlcnkoZnVuY3Rpb24gKHNlZ21lbnQpIHtcblx0ICAgICAgICBvYmogPSBvYmpbc2VnbWVudF07XG5cdCAgICAgICAgcmV0dXJuIG9iajtcblx0ICAgIH0pO1xuXHQgICAgaWYgKCFleGlzdHMpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgICAgICB2YXIgZm4gPSBvYmpbbmFtZV07XG5cdCAgICAgICAgaWYgKGZuKSB7XG5cdCAgICAgICAgICAgIG9ialtuYW1lXSA9IGV4cG9ydHMuYmluZFByb21pc2VGbihmbik7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cdH1cblx0ZnVuY3Rpb24gX3BhdGNoVGhlbmFibGUodGhlbmFibGUpIHtcblx0ICAgIHZhciB0aGVuID0gdGhlbmFibGUudGhlbjtcblx0ICAgIHRoZW5hYmxlLnRoZW4gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIGFyZ3MgPSB1dGlscy5iaW5kQXJndW1lbnRzKGFyZ3VtZW50cyk7XG5cdCAgICAgICAgdmFyIG5leHRUaGVuYWJsZSA9IHRoZW4uYXBwbHkodGhlbmFibGUsIGFyZ3MpO1xuXHQgICAgICAgIHJldHVybiBfcGF0Y2hUaGVuYWJsZShuZXh0VGhlbmFibGUpO1xuXHQgICAgfTtcblx0ICAgIHZhciBvY2F0Y2ggPSB0aGVuYWJsZS5jYXRjaDtcblx0ICAgIHRoZW5hYmxlLmNhdGNoID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBhcmdzID0gdXRpbHMuYmluZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xuXHQgICAgICAgIHZhciBuZXh0VGhlbmFibGUgPSBvY2F0Y2guYXBwbHkodGhlbmFibGUsIGFyZ3MpO1xuXHQgICAgICAgIHJldHVybiBfcGF0Y2hUaGVuYWJsZShuZXh0VGhlbmFibGUpO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiB0aGVuYWJsZTtcblx0fVxuXHRmdW5jdGlvbiBhcHBseSgpIHtcblx0ICAgIC8vIFBhdGNoIC50aGVuKCkgYW5kIC5jYXRjaCgpIG9uIG5hdGl2ZSBQcm9taXNlcyB0byBleGVjdXRlIGNhbGxiYWNrcyBpbiB0aGUgem9uZSB3aGVyZVxuXHQgICAgLy8gdGhvc2UgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXG5cdCAgICBpZiAoZ2xvYmFsLlByb21pc2UpIHtcblx0ICAgICAgICB1dGlscy5wYXRjaFByb3RvdHlwZShQcm9taXNlLnByb3RvdHlwZSwgW1xuXHQgICAgICAgICAgICAndGhlbicsXG5cdCAgICAgICAgICAgICdjYXRjaCdcblx0ICAgICAgICBdKTtcblx0ICAgICAgICAvLyBQYXRjaCBicm93c2VyIEFQSXMgdGhhdCByZXR1cm4gYSBQcm9taXNlXG5cdCAgICAgICAgdmFyIHBhdGNoRm5zID0gW1xuXHQgICAgICAgICAgICAvLyBmZXRjaFxuXHQgICAgICAgICAgICBbW10sIFsnZmV0Y2gnXV0sXG5cdCAgICAgICAgICAgIFtbJ1Jlc3BvbnNlJywgJ3Byb3RvdHlwZSddLCBbJ2FycmF5QnVmZmVyJywgJ2Jsb2InLCAnanNvbicsICd0ZXh0J11dXG5cdCAgICAgICAgXTtcblx0ICAgICAgICBwYXRjaEZucy5mb3JFYWNoKGZ1bmN0aW9uIChvYmpQYXRoQW5kRm5zKSB7XG5cdCAgICAgICAgICAgIF9wYXRjaFByb21pc2VGbnNPbk9iamVjdChvYmpQYXRoQW5kRm5zWzBdLCBvYmpQYXRoQW5kRm5zWzFdKTtcblx0ICAgICAgICB9KTtcblx0ICAgIH1cblx0fVxuXHRleHBvcnRzLmFwcGx5ID0gYXBwbHk7XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgICAgYXBwbHk6IGFwcGx5LFxuXHQgICAgYmluZFByb21pc2VGbjogZXhwb3J0cy5iaW5kUHJvbWlzZUZuXG5cdH07XG5cdC8vIyBzb3VyY2VNYXBwaW5nVVJMRGlzYWJsZWQ9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmJXbHpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTl3WVhSamFDOXdjbTl0YVhObExuUnpJbDBzSW01aGJXVnpJanBiSWw5d1lYUmphRkJ5YjIxcGMyVkdibk5QYms5aWFtVmpkQ0lzSWw5d1lYUmphRlJvWlc1aFlteGxJaXdpWVhCd2JIa2lYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRWxCUVZrc1MwRkJTeXhYUVVGTkxGVkJRVlVzUTBGQlF5eERRVUZCTzBGQmRVSnNReXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOdVFpeHhRa0ZCWVN4SFFVRkhMRlZCUVZVc1VVRkJVVHRSUVVOb1F5eE5RVUZOTEVOQlFVTTdXVUZEVEN4SlFVRkpMR1ZCUVdVc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVWMFJDd3JSRUZCSzBRN1dVRkRMMFFzUlVGQlJTeERRVUZETEVOQlFVTXNaVUZCWlN4WlFVRlpMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzWkRMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU03V1VGRGVrSXNRMEZCUXp0WlFVVkVMSE5FUVVGelJEdFpRVU4wUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zVlVGQlV5eFBRVUZQTEVWQlFVVXNUVUZCVFR0blFrRkRla01zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU03U1VGRFNpeERRVUZETEVOQlFVTTdRVUZEU2l4RFFVRkRPMEZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRFRpeHhRa0ZCWVN4SFFVRkhMRlZCUVZVc1VVRkJVVHRSUVVOb1F5eE5RVUZOTEVOQlFVTTdXVUZEVEN4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrUXNRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJReXhEUVVGRE8wRkJRMG9zUTBGQlF6dEJRVWRFTEd0RFFVRnJReXhWUVVGVkxFVkJRVVVzVDBGQlR6dEpRVU51UkVFc1NVRkJTVUVzUjBGQlIwRXNSMEZCUjBFc1RVRkJUVUVzUTBGQlEwRTdTVUZGYWtKQkxFbEJRVWxCTEUxQlFVMUJMRWRCUVVkQkxGVkJRVlZCTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEZWQlFWVkJMRTlCUVU5Qk8xRkJRemRETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOaUxFTkJRVU1zUTBGQlEwRXNRMEZCUTBFN1NVRkZTRUVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1VVRkRXa0VzVFVGQlRVRXNRMEZCUTBFN1NVRkRWRUVzUTBGQlEwRTdTVUZGUkVFc1QwRkJUMEVzUTBGQlEwRXNUMEZCVDBFc1EwRkJRMEVzVlVGQlZVRXNTVUZCU1VFN1VVRkROVUlzU1VGQlNTeEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMjVDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVDeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc2NVSkJRV0VzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTm9ReXhEUVVGRE8wbEJRMGdzUTBGQlF5eERRVUZEUVN4RFFVRkRRVHRCUVVOTVFTeERRVUZEUVR0QlFVVkVMSGRDUVVGM1FpeFJRVUZSTzBsQlF6bENReXhKUVVGSlFTeEpRVUZKUVN4SFFVRkhRU3hSUVVGUlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFUdEpRVU42UWtFc1VVRkJVVUVzUTBGQlEwRXNTVUZCU1VFc1IwRkJSMEU3VVVGRFpDeEpRVUZKTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlF6RkRMRWxCUVVrc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemxETEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGRGRFTXNRMEZCUXl4RFFVRkRRVHRKUVVWR1FTeEpRVUZKUVN4TlFVRk5RU3hIUVVGSFFTeFJRVUZSUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVR0SlFVTTFRa0VzVVVGQlVVRXNRMEZCUTBFc1MwRkJTMEVzUjBGQlIwRTdVVUZEWml4SlFVRkpMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFbEJRVWtzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEyaEVMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTVUZEZEVNc1EwRkJReXhEUVVGRFFUdEpRVVZHUVN4TlFVRk5RU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRVHRCUVVOc1FrRXNRMEZCUTBFN1FVRkhSRHRKUVVORlF5eDFSa0ZCZFVaQk8wbEJRM1pHUVN3NFFrRkJPRUpCTzBsQlF6bENRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3hOUVVGTlFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVOdVFrRXNTMEZCUzBFc1EwRkJRMEVzWTBGQlkwRXNRMEZCUTBFc1QwRkJUMEVzUTBGQlEwRXNVMEZCVTBFc1JVRkJSVUU3V1VGRGRFTkJMRTFCUVUxQk8xbEJRMDVCTEU5QlFVOUJPMU5CUTFKQkxFTkJRVU5CTEVOQlFVTkJPMUZCUlVoQkxESkRRVUV5UTBFN1VVRkRNME5CTEVsQlFVbEJMRkZCUVZGQkxFZEJRVWRCTzFsQlEySkJMRkZCUVZGQk8xbEJRMUpCTEVOQlFVTkJMRVZCUVVWQkxFVkJRVVZCTEVOQlFVTkJMRTlCUVU5QkxFTkJRVU5CTEVOQlFVTkJPMWxCUTJaQkxFTkJRVU5CTEVOQlFVTkJMRlZCUVZWQkxFVkJRVVZCTEZkQlFWZEJMRU5CUVVOQkxFVkJRVVZCTEVOQlFVTkJMR0ZCUVdGQkxFVkJRVVZCTEUxQlFVMUJMRVZCUVVWQkxFMUJRVTFCTEVWQlFVVkJMRTFCUVUxQkxFTkJRVU5CTEVOQlFVTkJPMU5CUTNKRlFTeERRVUZEUVR0UlFVVkdRU3hSUVVGUlFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeFZRVUZUUVN4aFFVRmhRVHRaUVVOeVF5eDNRa0ZCZDBJc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGREwwUXNRMEZCUXl4RFFVRkRRU3hEUVVGRFFUdEpRVU5NUVN4RFFVRkRRVHRCUVVOSVFTeERRVUZEUVR0QlFYQkNaU3hoUVVGTExGRkJiMEp3UWl4RFFVRkJPMEZCUlVRc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlJ6dEpRVU5tTEV0QlFVc3NSVUZCUlN4TFFVRkxPMGxCUTFvc1lVRkJZU3hGUVVGRkxIRkNRVUZoTzBOQlF6ZENMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUIxZEdsc2N5Qm1jbTl0SUNjdUxpOTFkR2xzY3ljN1hHNWNiaThxWEc0Z0tpQlFZWFJqYUdWeklHRWdablZ1WTNScGIyNGdkR2hoZENCeVpYUjFjbTV6SUdFZ1VISnZiV2x6WlMxc2FXdGxJR2x1YzNSaGJtTmxMbHh1SUNwY2JpQXFJRlJvYVhNZ1puVnVZM1JwYjI0Z2JYVnpkQ0JpWlNCMWMyVmtJSGRvWlc0Z1pXbDBhR1Z5T2x4dUlDb2dMU0JPWVhScGRtVWdVSEp2YldselpYTWdZWEpsSUc1dmRDQmhkbUZwYkdGaWJHVXNYRzRnS2lBdElGUm9aU0JtZFc1amRHbHZiaUJ5WlhSMWNtNXpJR0VnVUhKdmJXbHpaUzFzYVd0bElHOWlhbVZqZEM1Y2JpQXFYRzRnS2lCVWFHbHpJR2x6SUhKbGNYVnBjbVZrSUdKbFkyRjFjMlVnZW05dVpYTWdjbVZzZVNCdmJpQmhJRkJ5YjIxcGMyVWdiVzl1YTJWNUlIQmhkR05vSUhSb1lYUWdZMjkxYkdRZ2JtOTBJR0psSUdGd2NHeHBaV1FnZDJobGJseHVJQ29nVUhKdmJXbHpaU0JwY3lCdWIzUWdibUYwYVhabGJIa2dZWFpoYVd4aFlteGxJRzl5SUhkb1pXNGdkR2hsSUhKbGRIVnlibVZrSUc5aWFtVmpkQ0JwY3lCdWIzUWdZVzRnYVc1emRHRnVZMlVnYjJZZ1VISnZiV2x6WlM1Y2JpQXFYRzRnS2lCT2IzUmxJSFJvWVhRZ1kyRnNiR2x1WnlCZ1ltbHVaRkJ5YjIxcGMyVkdibUFnYjI0Z1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhKbGRIVnlibk1nWVNCdVlYUnBkbVVnVUhKdmJXbHpaU0IzYVd4c0lHRnNjMjhnZDI5eWExeHVJQ29nZDJsMGFDQnRhVzVwYldGc0lHOTJaWEpvWldGa0xseHVJQ3BjYmlBcUlHQmdZRnh1SUNvZ2RtRnlJR0p2ZFc1a1JuVnVZM1JwYjI0Z1BTQmlhVzVrVUhKdmJXbHpaVVp1S0VaMWJtTjBhVzl1VW1WMGRYSnVhVzVuUVZCeWIyMXBjMlVwTzF4dUlDcGNiaUFxSUdKdmRXNWtSblZ1WTNScGIyNHVkR2hsYmloemRXTmpaWE56U0dGdVpHeGxjaXdnWlhKeWIzSklZVzVrYkdWeUtUdGNiaUFxSUdCZ1lGeHVJQ292WEc1bGVIQnZjblFnZG1GeUlHSnBibVJRY205dGFYTmxSbTQ3WEc1Y2JtbG1JQ2huYkc5aVlXd3VVSEp2YldselpTa2dlMXh1SUNCaWFXNWtVSEp2YldselpVWnVJRDBnWm5WdVkzUnBiMjRnS0dSbGJHVm5ZWFJsS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlHUmxiR1ZuWVhSbFVISnZiV2x6WlNBOUlHUmxiR1ZuWVhSbExtRndjR3g1S0hSb2FYTXNJR0Z5WjNWdFpXNTBjeWs3WEc1Y2JpQWdJQ0FnSUM4dklHbG1JSFJvWlNCa1pXeGxaMkYwWlNCeVpYUjFjbTVsWkNCaGJpQnBibk4wWVc1alpTQnZaaUJRY205dGFYTmxMQ0JtYjNKM1lYSmtJR2wwTGx4dUlDQWdJQ0FnYVdZZ0tHUmxiR1ZuWVhSbFVISnZiV2x6WlNCcGJuTjBZVzVqWlc5bUlGQnliMjFwYzJVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUmxiR1ZuWVhSbFVISnZiV2x6WlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdUM1JvWlhKM2FYTmxJSGR5WVhBZ2RHaGxJRkJ5YjIxcGMyVXRiR2xyWlNCcGJpQmhJR2RzYjJKaGJDQlFjbTl0YVhObFhHNGdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0b2NtVnpiMngyWlN3Z2NtVnFaV04wS1NCN1hHNGdJQ0FnSUNBZ0lHUmxiR1ZuWVhSbFVISnZiV2x6WlM1MGFHVnVLSEpsYzI5c2RtVXNJSEpsYW1WamRDazdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlPMXh1SUNCOU8xeHVmU0JsYkhObElIdGNiaUFnWW1sdVpGQnliMjFwYzJWR2JpQTlJR1oxYm1OMGFXOXVJQ2hrWld4bFoyRjBaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdYM0JoZEdOb1ZHaGxibUZpYkdVb1pHVnNaV2RoZEdVdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLU2s3WEc0Z0lDQWdmVHRjYmlBZ2ZUdGNibjFjYmx4dVhHNW1kVzVqZEdsdmJpQmZjR0YwWTJoUWNtOXRhWE5sUm01elQyNVBZbXBsWTNRb2IySnFaV04wVUdGMGFDd2dabTVPWVcxbGN5a2dlMXh1SUNCMllYSWdiMkpxSUQwZ1oyeHZZbUZzTzF4dVhHNGdJSFpoY2lCbGVHbHpkSE1nUFNCdlltcGxZM1JRWVhSb0xtVjJaWEo1S0daMWJtTjBhVzl1SUNoelpXZHRaVzUwS1NCN1hHNGdJQ0FnYjJKcUlEMGdiMkpxVzNObFoyMWxiblJkTzF4dUlDQWdJSEpsZEhWeWJpQnZZbW83WEc0Z0lIMHBPMXh1WEc0Z0lHbG1JQ2doWlhocGMzUnpLU0I3WEc0Z0lDQWdjbVYwZFhKdU8xeHVJQ0I5WEc1Y2JpQWdabTVPWVcxbGN5NW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHVZVzFsS1NCN1hHNGdJQ0FnZG1GeUlHWnVJRDBnYjJKcVcyNWhiV1ZkTzF4dUlDQWdJR2xtSUNobWJpa2dlMXh1SUNBZ0lDQWdiMkpxVzI1aGJXVmRJRDBnWW1sdVpGQnliMjFwYzJWR2JpaG1iaWs3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1gzQmhkR05vVkdobGJtRmliR1VvZEdobGJtRmliR1VwSUh0Y2JpQWdkbUZ5SUhSb1pXNGdQU0IwYUdWdVlXSnNaUzUwYUdWdU8xeHVJQ0IwYUdWdVlXSnNaUzUwYUdWdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFpoY2lCaGNtZHpJRDBnZFhScGJITXVZbWx1WkVGeVozVnRaVzUwY3loaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUhaaGNpQnVaWGgwVkdobGJtRmliR1VnUFNCMGFHVnVMbUZ3Y0d4NUtIUm9aVzVoWW14bExDQmhjbWR6S1R0Y2JpQWdJQ0J5WlhSMWNtNGdYM0JoZEdOb1ZHaGxibUZpYkdVb2JtVjRkRlJvWlc1aFlteGxLVHRjYmlBZ2ZUdGNibHh1SUNCMllYSWdiMk5oZEdOb0lEMGdkR2hsYm1GaWJHVXVZMkYwWTJnN1hHNGdJSFJvWlc1aFlteGxMbU5oZEdOb0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFpoY2lCaGNtZHpJRDBnZFhScGJITXVZbWx1WkVGeVozVnRaVzUwY3loaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUhaaGNpQnVaWGgwVkdobGJtRmliR1VnUFNCdlkyRjBZMmd1WVhCd2JIa29kR2hsYm1GaWJHVXNJR0Z5WjNNcE8xeHVJQ0FnSUhKbGRIVnliaUJmY0dGMFkyaFVhR1Z1WVdKc1pTaHVaWGgwVkdobGJtRmliR1VwTzF4dUlDQjlPMXh1WEc0Z0lISmxkSFZ5YmlCMGFHVnVZV0pzWlR0Y2JuMWNibHh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVhCd2JIa29LU0I3WEc0Z0lDOHZJRkJoZEdOb0lDNTBhR1Z1S0NrZ1lXNWtJQzVqWVhSamFDZ3BJRzl1SUc1aGRHbDJaU0JRY205dGFYTmxjeUIwYnlCbGVHVmpkWFJsSUdOaGJHeGlZV05yY3lCcGJpQjBhR1VnZW05dVpTQjNhR1Z5WlZ4dUlDQXZMeUIwYUc5elpTQm1kVzVqZEdsdmJuTWdZWEpsSUdOaGJHeGxaQzVjYmlBZ2FXWWdLR2RzYjJKaGJDNVFjbTl0YVhObEtTQjdYRzRnSUNBZ2RYUnBiSE11Y0dGMFkyaFFjbTkwYjNSNWNHVW9VSEp2YldselpTNXdjbTkwYjNSNWNHVXNJRnRjYmlBZ0lDQWdJQ2QwYUdWdUp5eGNiaUFnSUNBZ0lDZGpZWFJqYUNkY2JpQWdJQ0JkS1R0Y2JseHVJQ0FnSUM4dklGQmhkR05vSUdKeWIzZHpaWElnUVZCSmN5QjBhR0YwSUhKbGRIVnliaUJoSUZCeWIyMXBjMlZjYmlBZ0lDQjJZWElnY0dGMFkyaEdibk1nUFNCYlhHNGdJQ0FnSUNBdkx5Qm1aWFJqYUZ4dUlDQWdJQ0FnVzF0ZExDQmJKMlpsZEdOb0oxMWRMRnh1SUNBZ0lDQWdXMXNuVW1WemNHOXVjMlVuTENBbmNISnZkRzkwZVhCbEoxMHNJRnNuWVhKeVlYbENkV1ptWlhJbkxDQW5ZbXh2WWljc0lDZHFjMjl1Snl3Z0ozUmxlSFFuWFYxY2JpQWdJQ0JkTzF4dVhHNGdJQ0FnY0dGMFkyaEdibk11Wm05eVJXRmphQ2htZFc1amRHbHZiaWh2WW1wUVlYUm9RVzVrUm01ektTQjdYRzRnSUNBZ0lDQmZjR0YwWTJoUWNtOXRhWE5sUm01elQyNVBZbXBsWTNRb2IySnFVR0YwYUVGdVpFWnVjMXN3WFN3Z2IySnFVR0YwYUVGdVpFWnVjMXN4WFNrN1hHNGdJQ0FnZlNrN1hHNGdJSDFjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYRzRnSUdGd2NHeDVPaUJoY0hCc2VTeGNiaUFnWW1sdVpGQnliMjFwYzJWR2Jqb2dZbWx1WkZCeWIyMXBjMlZHYmx4dWZUdGNiaUpkZlE9PVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7dmFyIGtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRmdW5jdGlvbiBiaW5kQXJndW1lbnRzKGFyZ3MpIHtcblx0ICAgIGZvciAodmFyIGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbaV0gPSBnbG9iYWwuem9uZS5iaW5kKGFyZ3NbaV0pO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBhcmdzO1xuXHR9XG5cdGV4cG9ydHMuYmluZEFyZ3VtZW50cyA9IGJpbmRBcmd1bWVudHM7XG5cdDtcblx0ZnVuY3Rpb24gcGF0Y2hQcm90b3R5cGUob2JqLCBmbk5hbWVzKSB7XG5cdCAgICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgICAgICB2YXIgZGVsZWdhdGUgPSBvYmpbbmFtZV07XG5cdCAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG5cdCAgICAgICAgICAgIG9ialtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cykpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9XG5cdGV4cG9ydHMucGF0Y2hQcm90b3R5cGUgPSBwYXRjaFByb3RvdHlwZTtcblx0O1xuXHRmdW5jdGlvbiBpc1dlYldvcmtlcigpIHtcblx0ICAgIHJldHVybiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpO1xuXHR9XG5cdGV4cG9ydHMuaXNXZWJXb3JrZXIgPSBpc1dlYldvcmtlcjtcblx0ZnVuY3Rpb24gaXNOb2RlKCkge1xuXHQgICAgcmV0dXJuICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcblx0fVxuXHRleHBvcnRzLmlzTm9kZSA9IGlzTm9kZTtcblx0ZnVuY3Rpb24gcGF0Y2hQcm9wZXJ0eShvYmosIHByb3ApIHtcblx0ICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApIHx8IHtcblx0ICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXHQgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHQgICAgfTtcblx0ICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuXHQgICAgLy8gZGVsZXRpbmcgdGhlIHdyaXRhYmxlIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGF2b2lkcyB0aGlzIGVycm9yOlxuXHQgICAgLy9cblx0ICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuXHQgICAgLy8gZ2V0dGVyIG9yIHNldHRlciBoYXMgYmVlbiBzcGVjaWZpZWRcblx0ICAgIGRlbGV0ZSBkZXNjLndyaXRhYmxlO1xuXHQgICAgZGVsZXRlIGRlc2MudmFsdWU7XG5cdCAgICAvLyBzdWJzdHIoMikgY3V6ICdvbmNsaWNrJyAtPiAnY2xpY2snLCBldGNcblx0ICAgIHZhciBldmVudE5hbWUgPSBwcm9wLnN1YnN0cigyKTtcblx0ICAgIHZhciBfcHJvcCA9ICdfJyArIHByb3A7XG5cdCAgICBkZXNjLnNldCA9IGZ1bmN0aW9uIChmbikge1xuXHQgICAgICAgIGlmICh0aGlzW19wcm9wXSkge1xuXHQgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzW19wcm9wXSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgdGhpc1tfcHJvcF0gPSBmbjtcblx0ICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIGZhbHNlKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgIHRoaXNbX3Byb3BdID0gbnVsbDtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgZGVzYy5nZXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXNbX3Byb3BdO1xuXHQgICAgfTtcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuXHR9XG5cdGV4cG9ydHMucGF0Y2hQcm9wZXJ0eSA9IHBhdGNoUHJvcGVydHk7XG5cdDtcblx0ZnVuY3Rpb24gcGF0Y2hQcm9wZXJ0aWVzKG9iaiwgcHJvcGVydGllcykge1xuXHQgICAgKHByb3BlcnRpZXMgfHwgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgcHJvcHMgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuXHQgICAgICAgICAgICBwcm9wcy5wdXNoKHByb3ApO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcHJvcHM7XG5cdCAgICB9KCkpLlxuXHQgICAgICAgIGZpbHRlcihmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG5cdCAgICAgICAgcmV0dXJuIHByb3BlcnR5TmFtZS5zdWJzdHIoMCwgMikgPT09ICdvbic7XG5cdCAgICB9KSkuXG5cdCAgICAgICAgZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG5cdCAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosIGV2ZW50TmFtZSk7XG5cdCAgICB9KTtcblx0fVxuXHRleHBvcnRzLnBhdGNoUHJvcGVydGllcyA9IHBhdGNoUHJvcGVydGllcztcblx0O1xuXHR2YXIgb3JpZ2luYWxGbktleSA9IGtleXMuY3JlYXRlKCdvcmlnaW5hbEZuJyk7XG5cdHZhciBib3VuZEZuc0tleSA9IGtleXMuY3JlYXRlKCdib3VuZEZucycpO1xuXHRmdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhvYmopIHtcblx0ICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIHRoZSBhZGRFdmVudExpc3RlbmVyIGhvb2sgb24gdGhlIHJvb3Qgem9uZS5cblx0ICAgIG9ialtrZXlzLmNvbW1vbi5hZGRFdmVudExpc3RlbmVyXSA9IG9iai5hZGRFdmVudExpc3RlbmVyO1xuXHQgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJpbmcpIHtcblx0ICAgICAgICAvL0lnbm9yZSBzcGVjaWFsIGxpc3RlbmVycyBvZiBJRTExICYgRWRnZSBkZXYgdG9vbHMsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xNTBcblx0ICAgICAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLnRvU3RyaW5nKCkgIT09IFwiW29iamVjdCBGdW5jdGlvbldyYXBwZXJdXCIpIHtcblx0ICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50TmFtZSArICh1c2VDYXB0dXJpbmcgPyAnJGNhcHR1cmluZycgOiAnJGJ1YmJsaW5nJyk7XG5cdCAgICAgICAgICAgIHZhciBmbjtcblx0ICAgICAgICAgICAgaWYgKGhhbmRsZXIuaGFuZGxlRXZlbnQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIEhhdmUgdG8gcGFzcyBpbiAnaGFuZGxlcicgcmVmZXJlbmNlIGFzIGFuIGFyZ3VtZW50IGhlcmUsIG90aGVyd2lzZSBpdCBnZXRzIGNsb2JiZXJlZCBpblxuXHQgICAgICAgICAgICAgICAgLy8gSUU5IGJ5IHRoZSBhcmd1bWVudHNbMV0gYXNzaWdubWVudCBhdCBlbmQgb2YgdGhpcyBmdW5jdGlvbi5cblx0ICAgICAgICAgICAgICAgIGZuID0gKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5oYW5kbGVFdmVudC5hcHBseShoYW5kbGVyLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICB9KShoYW5kbGVyKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGZuID0gaGFuZGxlcjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBoYW5kbGVyW29yaWdpbmFsRm5LZXldID0gZm47XG5cdCAgICAgICAgICAgIGhhbmRsZXJbYm91bmRGbnNLZXldID0gaGFuZGxlcltib3VuZEZuc0tleV0gfHwge307XG5cdCAgICAgICAgICAgIGhhbmRsZXJbYm91bmRGbnNLZXldW2V2ZW50VHlwZV0gPSBoYW5kbGVyW2JvdW5kRm5zS2V5XVtldmVudFR5cGVdIHx8IGdsb2JhbC56b25lLmJpbmQoZm4pO1xuXHQgICAgICAgICAgICBhcmd1bWVudHNbMV0gPSBoYW5kbGVyW2JvdW5kRm5zS2V5XVtldmVudFR5cGVdO1xuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyAtIEluc2lkZSBhIFdlYiBXb3JrZXIsIGB0aGlzYCBpcyB1bmRlZmluZWQsIHRoZSBjb250ZXh0IGlzIGBnbG9iYWxgICg9IGBzZWxmYClcblx0ICAgICAgICAvLyAtIFdoZW4gYGFkZEV2ZW50TGlzdGVuZXJgIGlzIGNhbGxlZCBvbiB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gc3RyaWN0IG1vZGUsIGB0aGlzYCBpcyB1bmRlZmluZWRcblx0ICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG5cdCAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgZ2xvYmFsO1xuXHQgICAgICAgIHJldHVybiBnbG9iYWwuem9uZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKTtcblx0ICAgIH07XG5cdCAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciB0aGUgcmVtb3ZlRXZlbnRMaXN0ZW5lciBob29rIG9uIHRoZSByb290IHpvbmUuXG5cdCAgICBvYmpba2V5cy5jb21tb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcl0gPSBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblx0ICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyaW5nKSB7XG5cdCAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50TmFtZSArICh1c2VDYXB0dXJpbmcgPyAnJGNhcHR1cmluZycgOiAnJGJ1YmJsaW5nJyk7XG5cdCAgICAgICAgaWYgKGhhbmRsZXIgJiYgaGFuZGxlcltib3VuZEZuc0tleV0gJiYgaGFuZGxlcltib3VuZEZuc0tleV1bZXZlbnRUeXBlXSkge1xuXHQgICAgICAgICAgICB2YXIgX2JvdW5kID0gaGFuZGxlcltib3VuZEZuc0tleV07XG5cdCAgICAgICAgICAgIGFyZ3VtZW50c1sxXSA9IF9ib3VuZFtldmVudFR5cGVdO1xuXHQgICAgICAgICAgICBkZWxldGUgX2JvdW5kW2V2ZW50VHlwZV07XG5cdCAgICAgICAgICAgIGdsb2JhbC56b25lLmRlcXVldWVUYXNrKGhhbmRsZXJbb3JpZ2luYWxGbktleV0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyAtIEluc2lkZSBhIFdlYiBXb3JrZXIsIGB0aGlzYCBpcyB1bmRlZmluZWQsIHRoZSBjb250ZXh0IGlzIGBnbG9iYWxgXG5cdCAgICAgICAgLy8gLSBXaGVuIGBhZGRFdmVudExpc3RlbmVyYCBpcyBjYWxsZWQgb24gdGhlIGdsb2JhbCBjb250ZXh0IGluIHN0cmljdCBtb2RlLCBgdGhpc2AgaXMgdW5kZWZpbmVkXG5cdCAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE5MFxuXHQgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IGdsb2JhbDtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gZ2xvYmFsLnpvbmUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdH1cblx0ZXhwb3J0cy5wYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyA9IHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzO1xuXHQ7XG5cdHZhciBvcmlnaW5hbEluc3RhbmNlS2V5ID0ga2V5cy5jcmVhdGUoJ29yaWdpbmFsSW5zdGFuY2UnKTtcblx0Ly8gd3JhcCBzb21lIG5hdGl2ZSBBUEkgb24gYHdpbmRvd2Bcblx0ZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcblx0ICAgIHZhciBPcmlnaW5hbENsYXNzID0gZ2xvYmFsW2NsYXNzTmFtZV07XG5cdCAgICBpZiAoIU9yaWdpbmFsQ2xhc3MpXG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgZ2xvYmFsW2NsYXNzTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIGEgPSBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cyk7XG5cdCAgICAgICAgc3dpdGNoIChhLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBjYXNlIDA6XG5cdCAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSk7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0pO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdKTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICBjYXNlIDQ6XG5cdCAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7XG5cdCAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCd3aGF0IGFyZSB5b3UgZXZlbiBkb2luZz8nKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgdmFyIGluc3RhbmNlID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTtcblx0ICAgIHZhciBwcm9wO1xuXHQgICAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG5cdCAgICAgICAgKGZ1bmN0aW9uIChwcm9wKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIGdsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcblx0ICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZ2xvYmFsLnpvbmUuYmluZChmbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0ocHJvcCkpO1xuXHQgICAgfVxuXHQgICAgZm9yIChwcm9wIGluIE9yaWdpbmFsQ2xhc3MpIHtcblx0ICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScgJiYgT3JpZ2luYWxDbGFzcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHQgICAgICAgICAgICBnbG9iYWxbY2xhc3NOYW1lXVtwcm9wXSA9IE9yaWdpbmFsQ2xhc3NbcHJvcF07XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9XG5cdGV4cG9ydHMucGF0Y2hDbGFzcyA9IHBhdGNoQ2xhc3M7XG5cdDtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkxEaXNhYmxlZD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXNhV0l2ZFhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2xzaVltbHVaRUZ5WjNWdFpXNTBjeUlzSW5CaGRHTm9VSEp2ZEc5MGVYQmxJaXdpYVhOWFpXSlhiM0pyWlhJaUxDSnBjMDV2WkdVaUxDSndZWFJqYUZCeWIzQmxjblI1SWl3aWNHRjBZMmhRY205d1pYSjBhV1Z6SWl3aWNHRjBZMmhGZG1WdWRGUmhjbWRsZEUxbGRHaHZaSE1pTENKd1lYUmphRU5zWVhOeklsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeEpRVUZaTEVsQlFVa3NWMEZCVFN4UlFVRlJMRU5CUVVNc1EwRkJRVHRCUVVrdlFpeDFRa0ZCT0VJc1NVRkJTVHRKUVVOb1EwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1NVRkJTVUVzUTBGQlEwRXNUVUZCVFVFc1IwRkJSMEVzUTBGQlEwRXNSVUZCUlVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRXNSVUZCUlVFc1JVRkJSVUVzUTBGQlEwRTdVVUZETVVOQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFOUJRVTlCTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRXRCUVV0QkxGVkJRVlZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEyeERRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0UlFVTjBRMEVzUTBGQlEwRTdTVUZEU0VFc1EwRkJRMEU3U1VGRFJFRXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFN1FVRkRaRUVzUTBGQlEwRTdRVUZRWlN4eFFrRkJZU3huUWtGUE5VSXNRMEZCUVR0QlFVRkJMRU5CUVVNN1FVRkZSaXgzUWtGQkswSXNSMEZCUnl4RlFVRkZMRTlCUVU4N1NVRkRla05ETEU5QlFVOUJMRU5CUVVOQkxFOUJRVTlCTEVOQlFVTkJMRlZCUVZWQkxFbEJRVWxCTzFGQlF6VkNMRWxCUVVrc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITzJkQ1FVTldMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UkN4RFFVRkRMRU5CUVVNN1VVRkRTaXhEUVVGRE8wbEJRMGdzUTBGQlF5eERRVUZEUVN4RFFVRkRRVHRCUVVOTVFTeERRVUZEUVR0QlFWUmxMSE5DUVVGakxHbENRVk0zUWl4RFFVRkJPMEZCUVVFc1EwRkJRenRCUVVWR08wbEJRMFZETEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEU5QlFVOUJMR2xDUVVGcFFrRXNTMEZCUzBFc1YwRkJWMEVzU1VGQlNVRXNTVUZCU1VFc1dVRkJXVUVzYVVKQlFXbENRU3hEUVVGRFFTeERRVUZEUVR0QlFVTjZSa0VzUTBGQlEwRTdRVUZHWlN4dFFrRkJWeXhqUVVVeFFpeERRVUZCTzBGQlJVUTdTVUZEUlVNc1RVRkJUVUVzUTBGQlEwRXNRMEZCUTBFc1QwRkJUMEVzVDBGQlQwRXNTMEZCUzBFc1YwRkJWMEVzU1VGQlNVRXNSVUZCUlVFc1EwRkJRMEVzVVVGQlVVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNUMEZCVDBFc1EwRkJRMEVzUzBGQlMwRXNhMEpCUVd0Q1FTeERRVUZEUVN4RFFVRkRRVHRCUVVNNVJrRXNRMEZCUTBFN1FVRkdaU3hqUVVGTkxGTkJSWEpDTEVOQlFVRTdRVUZGUkN4MVFrRkJPRUlzUjBGQlJ5eEZRVUZGTEVsQlFVazdTVUZEY2tORExFbEJRVWxCTEVsQlFVbEJMRWRCUVVkQkxFMUJRVTFCTEVOQlFVTkJMSGRDUVVGM1FrRXNRMEZCUTBFc1IwRkJSMEVzUlVGQlJVRXNTVUZCU1VFc1EwRkJRMEVzU1VGQlNVRTdVVUZEZGtSQkxGVkJRVlZCTEVWQlFVVkJMRWxCUVVsQk8xRkJRMmhDUVN4WlFVRlpRU3hGUVVGRlFTeEpRVUZKUVR0TFFVTnVRa0VzUTBGQlEwRTdTVUZGUmtFc2EwVkJRV3RGUVR0SlFVTnNSVUVzWjBWQlFXZEZRVHRKUVVOb1JVRXNSVUZCUlVFN1NVRkRSa0VzYVVaQlFXbEdRVHRKUVVOcVJrRXNjME5CUVhORFFUdEpRVU4wUTBFc1QwRkJUMEVzU1VGQlNVRXNRMEZCUTBFc1VVRkJVVUVzUTBGQlEwRTdTVUZEY2tKQkxFOUJRVTlCTEVsQlFVbEJMRU5CUVVOQkxFdEJRVXRCTEVOQlFVTkJPMGxCUld4Q1FTd3dRMEZCTUVOQk8wbEJRekZEUVN4SlFVRkpRU3hUUVVGVFFTeEhRVUZIUVN4SlFVRkpRU3hEUVVGRFFTeE5RVUZOUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRKUVVNdlFrRXNTVUZCU1VFc1MwRkJTMEVzUjBGQlIwRXNSMEZCUjBFc1IwRkJSMEVzU1VGQlNVRXNRMEZCUTBFN1NVRkZka0pCTEVsQlFVbEJMRU5CUVVOQkxFZEJRVWRCTEVkQlFVZEJMRlZCUVZWQkxFVkJRVVZCTzFGQlEzSkNMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRUlzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVJDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJwQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpsRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTk9MRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEY2tJc1EwRkJRenRKUVVOSUxFTkJRVU1zUTBGQlEwRTdTVUZGUmtFc1NVRkJTVUVzUTBGQlEwRXNSMEZCUjBFc1IwRkJSMEU3VVVGRFZDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM0pDTEVOQlFVTXNRMEZCUTBFN1NVRkZSa0VzVFVGQlRVRXNRMEZCUTBFc1kwRkJZMEVzUTBGQlEwRXNSMEZCUjBFc1JVRkJSVUVzU1VGQlNVRXNSVUZCUlVFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFN1FVRkRla05CTEVOQlFVTkJPMEZCY0VObExIRkNRVUZoTEdkQ1FXOUROVUlzUTBGQlFUdEJRVUZCTEVOQlFVTTdRVUZGUml4NVFrRkJaME1zUjBGQlJ5eEZRVUZGTEZWQlFWYzdTVUZET1VORExFTkJRVU5CTEZWQlFWVkJMRWxCUVVsQkxFTkJRVU5CTzFGQlExb3NTVUZCU1N4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMllzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkNMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEYmtJc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEWml4RFFVRkRMRVZCUVVWQkxFTkJRVU5CTzFGQlEwcEJMRTFCUVUxQkxFTkJRVU5CTEZWQlFWVkJMRmxCUVZsQk8xRkJRek5DTEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNN1NVRkRNME1zUTBGQlF5eERRVUZEUVN4RFFVRkRRVHRSUVVOSVFTeFBRVUZQUVN4RFFVRkRRU3hWUVVGVlFTeFRRVUZUUVR0UlFVTjZRaXhoUVVGaExFTkJRVU1zUjBGQlJ5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMGxCUTJoRExFTkJRVU1zUTBGQlEwRXNRMEZCUTBFN1FVRkRVRUVzUTBGQlEwRTdRVUZrWlN4MVFrRkJaU3hyUWtGak9VSXNRMEZCUVR0QlFVRkJMRU5CUVVNN1FVRkZSaXhKUVVGSkxHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRemxETEVsQlFVa3NWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdRVUZGTVVNc2FVTkJRWGRETEVkQlFVYzdTVUZEZWtORExHMUZRVUZ0UlVFN1NVRkRia1ZCTEVkQlFVZEJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEdkQ1FVRm5Ra0VzUTBGQlEwRXNSMEZCUjBFc1IwRkJSMEVzUTBGQlEwRXNaMEpCUVdkQ1FTeERRVUZEUVR0SlFVTjZSRUVzUjBGQlIwRXNRMEZCUTBFc1owSkJRV2RDUVN4SFFVRkhRU3hWUVVGVlFTeFRRVUZUUVN4RlFVRkZRU3hQUVVGUFFTeEZRVUZGUVN4WlFVRlpRVHRSUVVNdlJDeHpSMEZCYzBjN1VVRkRkRWNzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrVXNTVUZCU1N4VFFVRlRMRWRCUVVjc1UwRkJVeXhIUVVGSExFTkJRVU1zV1VGQldTeEhRVUZITEZsQlFWa3NSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJRenRaUVVONFJTeEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVTlFMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpd3dSa0ZCTUVZN1owSkJRekZHTERoRVFVRTRSRHRuUWtGRE9VUXNSVUZCUlN4SFFVRkhMRU5CUVVNc1ZVRkJVeXhQUVVGUE8yOUNRVU53UWl4TlFVRk5MRU5CUVVNN2QwSkJRMHdzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzI5Q1FVTm9SQ3hEUVVGRExFTkJRVU03WjBKQlEwb3NRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRFpDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXp0WlFVTm1MRU5CUVVNN1dVRkZSQ3hQUVVGUExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUXpWQ0xFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlEyeEVMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVZc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU5xUkN4RFFVRkRPMUZCUlVRc2FVWkJRV2xHTzFGQlEycEdMR2RIUVVGblJ6dFJRVU5vUnl4dlJFRkJiMFE3VVVGRGNFUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFMUJRVTBzUTBGQlF6dFJRVU0xUWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMGxCUXk5RUxFTkJRVU1zUTBGQlEwRTdTVUZGUmtFc2MwVkJRWE5GUVR0SlFVTjBSVUVzUjBGQlIwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzYlVKQlFXMUNRU3hEUVVGRFFTeEhRVUZIUVN4SFFVRkhRU3hEUVVGRFFTeHRRa0ZCYlVKQkxFTkJRVU5CTzBsQlF5OUVRU3hIUVVGSFFTeERRVUZEUVN4dFFrRkJiVUpCTEVkQlFVZEJMRlZCUVZWQkxGTkJRVk5CTEVWQlFVVkJMRTlCUVU5QkxFVkJRVVZCTEZsQlFWbEJPMUZCUTJ4RkxFbEJRVWtzVTBGQlV5eEhRVUZITEZOQlFWTXNSMEZCUnl4RFFVRkRMRmxCUVZrc1IwRkJSeXhaUVVGWkxFZEJRVWNzVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEZUVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pGTEVsQlFVa3NUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFOUJRVThzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMWxCUTNwQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkZSQ3h6UlVGQmMwVTdVVUZEZEVVc1owZEJRV2RITzFGQlEyaEhMRzlFUVVGdlJEdFJRVU53UkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFbEJRVWtzVFVGQlRTeERRVUZETzFGQlF6VkNMRWxCUVVrc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOMFJTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJoQ0xFTkJRVU1zUTBGQlEwRTdRVUZEU2tFc1EwRkJRMEU3UVVGdVJHVXNLMEpCUVhWQ0xEQkNRVzFFZEVNc1EwRkJRVHRCUVVGQkxFTkJRVU03UVVGRlJpeEpRVUZKTEcxQ1FVRnRRaXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dEJRVVV4UkN4dFEwRkJiVU03UVVGRGJrTXNiMEpCUVRKQ0xGTkJRVk03U1VGRGJFTkRMRWxCUVVsQkxHRkJRV0ZCTEVkQlFVZEJMRTFCUVUxQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlEzUkRRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeGhRVUZoUVN4RFFVRkRRVHRSUVVGRFFTeE5RVUZOUVN4RFFVRkRRVHRKUVVVelFrRXNUVUZCVFVFc1EwRkJRMEVzVTBGQlUwRXNRMEZCUTBFc1IwRkJSMEU3VVVGRGJFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEycERMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFdEJRVXNzUTBGQlF6dG5Ra0ZCUlN4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4SlFVRkpMR0ZCUVdFc1JVRkJSU3hEUVVGRE8yZENRVUZETEV0QlFVc3NRMEZCUXp0WlFVTXZSQ3hMUVVGTExFTkJRVU03WjBKQlFVVXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVkQlFVY3NTVUZCU1N4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUVVNc1MwRkJTeXhEUVVGRE8xbEJRMjVGTEV0QlFVc3NRMEZCUXp0blFrRkJSU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhKUVVGSkxHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUVVNc1MwRkJTeXhEUVVGRE8xbEJRM3BGTEV0QlFVc3NRMEZCUXp0blFrRkJSU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhKUVVGSkxHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVUZETEV0QlFVc3NRMEZCUXp0WlFVTXZSU3hMUVVGTExFTkJRVU03WjBKQlFVVXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVkQlFVY3NTVUZCU1N4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlFVTXNTMEZCU3l4RFFVRkRPMWxCUTNKR0xGTkJRVk1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eERRVUZETzFGQlEzWkVMRU5CUVVNN1NVRkRTQ3hEUVVGRExFTkJRVU5CTzBsQlJVWkJMRWxCUVVsQkxGRkJRVkZCTEVkQlFVZEJMRWxCUVVsQkxHRkJRV0ZCTEVWQlFVVkJMRU5CUVVOQk8wbEJSVzVEUVN4SlFVRkpRU3hKUVVGSlFTeERRVUZEUVR0SlFVTlVRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hKUVVGSlFTeEpRVUZKUVN4UlFVRlJRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVOMFFrRXNRMEZCUTBFc1ZVRkJWVUVzU1VGQlNVRTdXVUZEWWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU42UXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhPMjlDUVVOc1F5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzJkQ1FVTnlSaXhEUVVGRExFTkJRVU03V1VGRFNpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMDRzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NSVUZCUlR0dlFrRkRka1FzUjBGQlJ5eEZRVUZGTEZWQlFWVXNSVUZCUlR0M1FrRkRaaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU0zUWl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenQzUWtGRGVrUXNRMEZCUXp0M1FrRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czBRa0ZEVGl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03ZDBKQlEzWkRMRU5CUVVNN2IwSkJRMGdzUTBGQlF6dHZRa0ZEUkN4SFFVRkhMRVZCUVVVN2QwSkJRMGdzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVONlF5eERRVUZETzJsQ1FVTkdMRU5CUVVNc1EwRkJRenRaUVVOTUxFTkJRVU03VVVGRFNDeERRVUZETEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRMWhCTEVOQlFVTkJPMGxCUlVSQkxFZEJRVWRCTEVOQlFVTkJMRU5CUVVOQkxFbEJRVWxCTEVsQlFVbEJMR0ZCUVdGQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xRkJRek5DUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4SlFVRkpRU3hMUVVGTFFTeFhRVUZYUVN4SlFVRkpRU3hoUVVGaFFTeERRVUZEUVN4alFVRmpRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVNdlJFRXNUVUZCVFVFc1EwRkJRMEVzVTBGQlUwRXNRMEZCUTBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1IwRkJSMEVzWVVGQllVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFN1VVRkRhRVJCTEVOQlFVTkJPMGxCUTBoQkxFTkJRVU5CTzBGQlEwaEJMRU5CUVVOQk8wRkJMME5sTEd0Q1FVRlZMR0ZCSzBONlFpeERRVUZCTzBGQlFVRXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJR3RsZVhNZ1puSnZiU0FuTGk5clpYbHpKenRjYmk4dklFaGhZMnNnYzJsdVkyVWdWSGx3WlZOamNtbHdkQ0JwYzI0bmRDQmpiMjF3YVd4cGJtY2dkR2hwY3lCbWIzSWdZU0IzYjNKclpYSXVYRzVrWldOc1lYSmxJSFpoY2lCWGIzSnJaWEpIYkc5aVlXeFRZMjl3WlR0Y2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHSnBibVJCY21kMWJXVnVkSE1vWVhKbmN5a2dlMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdZWEpuY3k1c1pXNW5kR2dnTFNBeE95QnBJRDQ5SURBN0lHa3RMU2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWVhKbmMxdHBYU0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdZWEpuYzF0cFhTQTlJR2RzYjJKaGJDNTZiMjVsTG1KcGJtUW9ZWEpuYzF0cFhTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCaGNtZHpPMXh1ZlR0Y2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlIQmhkR05vVUhKdmRHOTBlWEJsS0c5aWFpd2dabTVPWVcxbGN5a2dlMXh1SUNCbWJrNWhiV1Z6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHRjYmlBZ0lDQjJZWElnWkdWc1pXZGhkR1VnUFNCdlltcGJibUZ0WlYwN1hHNGdJQ0FnYVdZZ0tHUmxiR1ZuWVhSbEtTQjdYRzRnSUNBZ0lDQnZZbXBiYm1GdFpWMGdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCa1pXeGxaMkYwWlM1aGNIQnNlU2gwYUdsekxDQmlhVzVrUVhKbmRXMWxiblJ6S0dGeVozVnRaVzUwY3lrcE8xeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dWZUdGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR2x6VjJWaVYyOXlhMlZ5S0NrZ2UxeHVJQ0J5WlhSMWNtNGdLSFI1Y0dWdlppQlhiM0pyWlhKSGJHOWlZV3hUWTI5d1pTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjMlZzWmlCcGJuTjBZVzVqWlc5bUlGZHZjbXRsY2tkc2IySmhiRk5qYjNCbEtUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdselRtOWtaU2dwSUh0Y2JpQWdjbVYwZFhKdUlDaDBlWEJsYjJZZ2NISnZZMlZ6Y3lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2UzMHVkRzlUZEhKcGJtY3VZMkZzYkNod2NtOWpaWE56S1NBOVBUMGdKMXR2WW1wbFkzUWdjSEp2WTJWemMxMG5LVHRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlIQmhkR05vVUhKdmNHVnlkSGtvYjJKcUxDQndjbTl3S1NCN1hHNGdJSFpoY2lCa1pYTmpJRDBnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNpaHZZbW9zSUhCeWIzQXBJSHg4SUh0Y2JpQWdJQ0JsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUNBZ0lHTnZibVpwWjNWeVlXSnNaVG9nZEhKMVpWeHVJQ0I5TzF4dVhHNGdJQzh2SUVFZ2NISnZjR1Z5ZEhrZ1pHVnpZM0pwY0hSdmNpQmpZVzV1YjNRZ2FHRjJaU0JuWlhSMFpYSXZjMlYwZEdWeUlHRnVaQ0JpWlNCM2NtbDBZV0pzWlZ4dUlDQXZMeUJrWld4bGRHbHVaeUIwYUdVZ2QzSnBkR0ZpYkdVZ1lXNWtJSFpoYkhWbElIQnliM0JsY25ScFpYTWdZWFp2YVdSeklIUm9hWE1nWlhKeWIzSTZYRzRnSUM4dlhHNGdJQzh2SUZSNWNHVkZjbkp2Y2pvZ2NISnZjR1Z5ZEhrZ1pHVnpZM0pwY0hSdmNuTWdiWFZ6ZENCdWIzUWdjM0JsWTJsbWVTQmhJSFpoYkhWbElHOXlJR0psSUhkeWFYUmhZbXhsSUhkb1pXNGdZVnh1SUNBdkx5Qm5aWFIwWlhJZ2IzSWdjMlYwZEdWeUlHaGhjeUJpWldWdUlITndaV05wWm1sbFpGeHVJQ0JrWld4bGRHVWdaR1Z6WXk1M2NtbDBZV0pzWlR0Y2JpQWdaR1ZzWlhSbElHUmxjMk11ZG1Gc2RXVTdYRzVjYmlBZ0x5OGdjM1ZpYzNSeUtESXBJR04xZWlBbmIyNWpiR2xqYXljZ0xUNGdKMk5zYVdOckp5d2daWFJqWEc0Z0lIWmhjaUJsZG1WdWRFNWhiV1VnUFNCd2NtOXdMbk4xWW5OMGNpZ3lLVHRjYmlBZ2RtRnlJRjl3Y205d0lEMGdKMThuSUNzZ2NISnZjRHRjYmx4dUlDQmtaWE5qTG5ObGRDQTlJR1oxYm1OMGFXOXVJQ2htYmlrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6VzE5d2NtOXdYU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLR1YyWlc1MFRtRnRaU3dnZEdocGMxdGZjSEp2Y0YwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1ptNGdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lIUm9hWE5iWDNCeWIzQmRJRDBnWm00N1hHNGdJQ0FnSUNCMGFHbHpMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9aWFpsYm5ST1lXMWxMQ0JtYml3Z1ptRnNjMlVwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6VzE5d2NtOXdYU0E5SUc1MWJHdzdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsYzJNdVoyVjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdselcxOXdjbTl3WFR0Y2JpQWdmVHRjYmx4dUlDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYjJKcUxDQndjbTl3TENCa1pYTmpLVHRjYm4wN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQndZWFJqYUZCeWIzQmxjblJwWlhNb2IySnFMQ0J3Y205d1pYSjBhV1Z6UHlrZ2UxeHVJQ0FvY0hKdmNHVnlkR2xsY3lCOGZDQW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIQnliM0J6SUQwZ1cxMDdYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQndjbTl3SUdsdUlHOWlhaWtnZTF4dUlDQWdJQ0FnSUNCd2NtOXdjeTV3ZFhOb0tIQnliM0FwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJSEJ5YjNCek8xeHVJQ0FnSUgwb0tTa3VYRzRnSUNBZ1ptbHNkR1Z5S0daMWJtTjBhVzl1SUNod2NtOXdaWEowZVU1aGJXVXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQndjbTl3WlhKMGVVNWhiV1V1YzNWaWMzUnlLREFzTWlrZ1BUMDlJQ2R2YmljN1hHNGdJQ0FnZlNrcExseHVJQ0FnSUdadmNrVmhZMmdvWm5WdVkzUnBiMjRnS0dWMlpXNTBUbUZ0WlNrZ2UxeHVJQ0FnSUNBZ2NHRjBZMmhRY205d1pYSjBlU2h2WW1vc0lHVjJaVzUwVG1GdFpTazdYRzRnSUNBZ2ZTazdYRzU5TzF4dVhHNTJZWElnYjNKcFoybHVZV3hHYmt0bGVTQTlJR3RsZVhNdVkzSmxZWFJsS0NkdmNtbG5hVzVoYkVadUp5azdYRzUyWVhJZ1ltOTFibVJHYm5OTFpYa2dQU0JyWlhsekxtTnlaV0YwWlNnblltOTFibVJHYm5NbktUdGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEJoZEdOb1JYWmxiblJVWVhKblpYUk5aWFJvYjJSektHOWlhaWtnZTF4dUlDQXZMeUJVYUdseklHbHpJSEpsY1hWcGNtVmtJR1p2Y2lCMGFHVWdZV1JrUlhabGJuUk1hWE4wWlc1bGNpQm9iMjlySUc5dUlIUm9aU0J5YjI5MElIcHZibVV1WEc0Z0lHOWlhbHRyWlhsekxtTnZiVzF2Ymk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5WFNBOUlHOWlhaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlPMXh1SUNCdlltb3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpQTlJR1oxYm1OMGFXOXVJQ2hsZG1WdWRFNWhiV1VzSUdoaGJtUnNaWElzSUhWelpVTmhjSFIxY21sdVp5a2dlMXh1SUNBZ0lDOHZTV2R1YjNKbElITndaV05wWVd3Z2JHbHpkR1Z1WlhKeklHOW1JRWxGTVRFZ0ppQkZaR2RsSUdSbGRpQjBiMjlzY3l3Z2MyVmxJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzloYm1kMWJHRnlMM3B2Ym1VdWFuTXZhWE56ZFdWekx6RTFNRnh1SUNBZ0lHbG1JQ2hvWVc1a2JHVnlJQ1ltSUdoaGJtUnNaWEl1ZEc5VGRISnBibWNvS1NBaFBUMGdYQ0piYjJKcVpXTjBJRVoxYm1OMGFXOXVWM0poY0hCbGNsMWNJaWtnZTF4dUlDQWdJQ0FnZG1GeUlHVjJaVzUwVkhsd1pTQTlJR1YyWlc1MFRtRnRaU0FySUNoMWMyVkRZWEIwZFhKcGJtY2dQeUFuSkdOaGNIUjFjbWx1WnljZ09pQW5KR0oxWW1Kc2FXNW5KeWs3WEc0Z0lDQWdJQ0IyWVhJZ1ptNDdYRzRnSUNBZ0lDQnBaaUFvYUdGdVpHeGxjaTVvWVc1a2JHVkZkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJJWVhabElIUnZJSEJoYzNNZ2FXNGdKMmhoYm1Sc1pYSW5JSEpsWm1WeVpXNWpaU0JoY3lCaGJpQmhjbWQxYldWdWRDQm9aWEpsTENCdmRHaGxjbmRwYzJVZ2FYUWdaMlYwY3lCamJHOWlZbVZ5WldRZ2FXNWNiaUFnSUNBZ0lDQWdMeThnU1VVNUlHSjVJSFJvWlNCaGNtZDFiV1Z1ZEhOYk1WMGdZWE56YVdkdWJXVnVkQ0JoZENCbGJtUWdiMllnZEdocGN5Qm1kVzVqZEdsdmJpNWNiaUFnSUNBZ0lDQWdabTRnUFNBb1puVnVZM1JwYjI0b2FHRnVaR3hsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHaGhibVJzWlhJdWFHRnVaR3hsUlhabGJuUXVZWEJ3Ykhrb2FHRnVaR3hsY2l3Z1lYSm5kVzFsYm5SektUdGNiaUFnSUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCOUtTaG9ZVzVrYkdWeUtUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHWnVJRDBnYUdGdVpHeGxjanRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYUdGdVpHeGxjbHR2Y21sbmFXNWhiRVp1UzJWNVhTQTlJR1p1TzF4dUlDQWdJQ0FnYUdGdVpHeGxjbHRpYjNWdVpFWnVjMHRsZVYwZ1BTQm9ZVzVrYkdWeVcySnZkVzVrUm01elMyVjVYU0I4ZkNCN2ZUdGNiaUFnSUNBZ0lHaGhibVJzWlhKYlltOTFibVJHYm5OTFpYbGRXMlYyWlc1MFZIbHdaVjBnUFNCb1lXNWtiR1Z5VzJKdmRXNWtSbTV6UzJWNVhWdGxkbVZ1ZEZSNWNHVmRJSHg4SUdkc2IySmhiQzU2YjI1bExtSnBibVFvWm00cE8xeHVJQ0FnSUNBZ1lYSm5kVzFsYm5Seld6RmRJRDBnYUdGdVpHeGxjbHRpYjNWdVpFWnVjMHRsZVYxYlpYWmxiblJVZVhCbFhUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QXRJRWx1YzJsa1pTQmhJRmRsWWlCWGIzSnJaWElzSUdCMGFHbHpZQ0JwY3lCMWJtUmxabWx1WldRc0lIUm9aU0JqYjI1MFpYaDBJR2x6SUdCbmJHOWlZV3hnSUNnOUlHQnpaV3htWUNsY2JpQWdJQ0F2THlBdElGZG9aVzRnWUdGa1pFVjJaVzUwVEdsemRHVnVaWEpnSUdseklHTmhiR3hsWkNCdmJpQjBhR1VnWjJ4dlltRnNJR052Ym5SbGVIUWdhVzRnYzNSeWFXTjBJRzF2WkdVc0lHQjBhR2x6WUNCcGN5QjFibVJsWm1sdVpXUmNiaUFnSUNBdkx5QnpaV1VnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJGdVozVnNZWEl2ZW05dVpTNXFjeTlwYzNOMVpYTXZNVGt3WEc0Z0lDQWdkbUZ5SUhSaGNtZGxkQ0E5SUhSb2FYTWdmSHdnWjJ4dlltRnNPMXh1SUNBZ0lISmxkSFZ5YmlCbmJHOWlZV3d1ZW05dVpTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUxtRndjR3g1S0hSaGNtZGxkQ3dnWVhKbmRXMWxiblJ6S1R0Y2JpQWdmVHRjYmx4dUlDQXZMeUJVYUdseklHbHpJSEpsY1hWcGNtVmtJR1p2Y2lCMGFHVWdjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaUJvYjI5cklHOXVJSFJvWlNCeWIyOTBJSHB2Ym1VdVhHNGdJRzlpYWx0clpYbHpMbU52YlcxdmJpNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlYU0E5SUc5aWFpNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlPMXh1SUNCdlltb3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaUE5SUdaMWJtTjBhVzl1SUNobGRtVnVkRTVoYldVc0lHaGhibVJzWlhJc0lIVnpaVU5oY0hSMWNtbHVaeWtnZTF4dUlDQWdJSFpoY2lCbGRtVnVkRlI1Y0dVZ1BTQmxkbVZ1ZEU1aGJXVWdLeUFvZFhObFEyRndkSFZ5YVc1bklEOGdKeVJqWVhCMGRYSnBibWNuSURvZ0p5UmlkV0ppYkdsdVp5Y3BPMXh1SUNBZ0lHbG1JQ2hvWVc1a2JHVnlJQ1ltSUdoaGJtUnNaWEpiWW05MWJtUkdibk5MWlhsZElDWW1JR2hoYm1Sc1pYSmJZbTkxYm1SR2JuTkxaWGxkVzJWMlpXNTBWSGx3WlYwcElIdGNiaUFnSUNBZ0lIWmhjaUJmWW05MWJtUWdQU0JvWVc1a2JHVnlXMkp2ZFc1a1JtNXpTMlY1WFR0Y2JpQWdJQ0FnSUdGeVozVnRaVzUwYzFzeFhTQTlJRjlpYjNWdVpGdGxkbVZ1ZEZSNWNHVmRPMXh1SUNBZ0lDQWdaR1ZzWlhSbElGOWliM1Z1WkZ0bGRtVnVkRlI1Y0dWZE8xeHVJQ0FnSUNBZ1oyeHZZbUZzTG5wdmJtVXVaR1Z4ZFdWMVpWUmhjMnNvYUdGdVpHeGxjbHR2Y21sbmFXNWhiRVp1UzJWNVhTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdMU0JKYm5OcFpHVWdZU0JYWldJZ1YyOXlhMlZ5TENCZ2RHaHBjMkFnYVhNZ2RXNWtaV1pwYm1Wa0xDQjBhR1VnWTI5dWRHVjRkQ0JwY3lCZ1oyeHZZbUZzWUZ4dUlDQWdJQzh2SUMwZ1YyaGxiaUJnWVdSa1JYWmxiblJNYVhOMFpXNWxjbUFnYVhNZ1kyRnNiR1ZrSUc5dUlIUm9aU0JuYkc5aVlXd2dZMjl1ZEdWNGRDQnBiaUJ6ZEhKcFkzUWdiVzlrWlN3Z1lIUm9hWE5nSUdseklIVnVaR1ZtYVc1bFpGeHVJQ0FnSUM4dklITmxaU0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WVc1bmRXeGhjaTk2YjI1bExtcHpMMmx6YzNWbGN5OHhPVEJjYmlBZ0lDQjJZWElnZEdGeVoyVjBJRDBnZEdocGN5QjhmQ0JuYkc5aVlXdzdYRzRnSUNBZ2RtRnlJSEpsYzNWc2RDQTlJR2RzYjJKaGJDNTZiMjVsTG5KbGJXOTJaVVYyWlc1MFRHbHpkR1Z1WlhJdVlYQndiSGtvZEdGeVoyVjBMQ0JoY21kMWJXVnVkSE1wTzF4dUlDQWdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNGdJSDA3WEc1OU8xeHVYRzUyWVhJZ2IzSnBaMmx1WVd4SmJuTjBZVzVqWlV0bGVTQTlJR3RsZVhNdVkzSmxZWFJsS0NkdmNtbG5hVzVoYkVsdWMzUmhibU5sSnlrN1hHNWNiaTh2SUhkeVlYQWdjMjl0WlNCdVlYUnBkbVVnUVZCSklHOXVJR0IzYVc1a2IzZGdYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjR0YwWTJoRGJHRnpjeWhqYkdGemMwNWhiV1VwSUh0Y2JpQWdkbUZ5SUU5eWFXZHBibUZzUTJ4aGMzTWdQU0JuYkc5aVlXeGJZMnhoYzNOT1lXMWxYVHRjYmlBZ2FXWWdLQ0ZQY21sbmFXNWhiRU5zWVhOektTQnlaWFIxY200N1hHNWNiaUFnWjJ4dlltRnNXMk5zWVhOelRtRnRaVjBnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RtRnlJR0VnUFNCaWFXNWtRWEpuZFcxbGJuUnpLR0Z5WjNWdFpXNTBjeWs3WEc0Z0lDQWdjM2RwZEdOb0lDaGhMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdZMkZ6WlNBd09pQjBhR2x6VzI5eWFXZHBibUZzU1c1emRHRnVZMlZMWlhsZElEMGdibVYzSUU5eWFXZHBibUZzUTJ4aGMzTW9LVHNnWW5KbFlXczdYRzRnSUNBZ0lDQmpZWE5sSURFNklIUm9hWE5iYjNKcFoybHVZV3hKYm5OMFlXNWpaVXRsZVYwZ1BTQnVaWGNnVDNKcFoybHVZV3hEYkdGemN5aGhXekJkS1RzZ1luSmxZV3M3WEc0Z0lDQWdJQ0JqWVhObElESTZJSFJvYVhOYmIzSnBaMmx1WVd4SmJuTjBZVzVqWlV0bGVWMGdQU0J1WlhjZ1QzSnBaMmx1WVd4RGJHRnpjeWhoV3pCZExDQmhXekZkS1RzZ1luSmxZV3M3WEc0Z0lDQWdJQ0JqWVhObElETTZJSFJvYVhOYmIzSnBaMmx1WVd4SmJuTjBZVzVqWlV0bGVWMGdQU0J1WlhjZ1QzSnBaMmx1WVd4RGJHRnpjeWhoV3pCZExDQmhXekZkTENCaFd6SmRLVHNnWW5KbFlXczdYRzRnSUNBZ0lDQmpZWE5sSURRNklIUm9hWE5iYjNKcFoybHVZV3hKYm5OMFlXNWpaVXRsZVYwZ1BTQnVaWGNnVDNKcFoybHVZV3hEYkdGemN5aGhXekJkTENCaFd6RmRMQ0JoV3pKZExDQmhXek5kS1RzZ1luSmxZV3M3WEc0Z0lDQWdJQ0JrWldaaGRXeDBPaUIwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM2RvWVhRZ1lYSmxJSGx2ZFNCbGRtVnVJR1J2YVc1blB5Y3BPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0IyWVhJZ2FXNXpkR0Z1WTJVZ1BTQnVaWGNnVDNKcFoybHVZV3hEYkdGemN5Z3BPMXh1WEc0Z0lIWmhjaUJ3Y205d08xeHVJQ0JtYjNJZ0tIQnliM0FnYVc0Z2FXNXpkR0Z1WTJVcElIdGNiaUFnSUNBb1puVnVZM1JwYjI0Z0tIQnliM0FwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2FXNXpkR0Z1WTJWYmNISnZjRjBnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnWjJ4dlltRnNXMk5zWVhOelRtRnRaVjB1Y0hKdmRHOTBlWEJsVzNCeWIzQmRJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6VzI5eWFXZHBibUZzU1c1emRHRnVZMlZMWlhsZFczQnliM0JkTG1Gd2NHeDVLSFJvYVhOYmIzSnBaMmx1WVd4SmJuTjBZVzVqWlV0bGVWMHNJR0Z5WjNWdFpXNTBjeWs3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aMnh2WW1Gc1cyTnNZWE56VG1GdFpWMHVjSEp2ZEc5MGVYQmxMQ0J3Y205d0xDQjdYRzRnSUNBZ0lDQWdJQ0FnYzJWME9pQm1kVzVqZEdsdmJpQW9abTRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnWm00Z1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHZjbWxuYVc1aGJFbHVjM1JoYm1ObFMyVjVYVnR3Y205d1hTQTlJR2RzYjJKaGJDNTZiMjVsTG1KcGJtUW9abTRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXR2Y21sbmFXNWhiRWx1YzNSaGJtTmxTMlY1WFZ0d2NtOXdYU0E5SUdadU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjMXR2Y21sbmFXNWhiRWx1YzNSaGJtTmxTMlY1WFZ0d2NtOXdYVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMG9jSEp2Y0NrcE8xeHVJQ0I5WEc1Y2JpQWdabTl5SUNod2NtOXdJR2x1SUU5eWFXZHBibUZzUTJ4aGMzTXBJSHRjYmlBZ0lDQnBaaUFvY0hKdmNDQWhQVDBnSjNCeWIzUnZkSGx3WlNjZ0ppWWdUM0pwWjJsdVlXeERiR0Z6Y3k1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d0tTa2dlMXh1SUNBZ0lDQWdaMnh2WW1Gc1cyTnNZWE56VG1GdFpWMWJjSEp2Y0YwZ1BTQlBjbWxuYVc1aGJFTnNZWE56VzNCeWIzQmRPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNiaUpkZlE9PVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiAxMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge3ZhciBmblBhdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdHZhciBwcm9taXNlUGF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHR2YXIgbXV0YXRpb25PYnNlcnZlclBhdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eVBhdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdHZhciByZWdpc3RlckVsZW1lbnRQYXRjaCA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXHR2YXIgZXZlbnRUYXJnZXRQYXRjaCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHR2YXIgcHJvcGVydHlEZXNjcmlwdG9yUGF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblx0dmFyIGdlb2xvY2F0aW9uUGF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblx0dmFyIGZpbGVSZWFkZXJQYXRjaCA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXHRmdW5jdGlvbiBhcHBseSgpIHtcblx0ICAgIGZuUGF0Y2gucGF0Y2hTZXRDbGVhckZ1bmN0aW9uKGdsb2JhbCwgZ2xvYmFsLlpvbmUsIFtcblx0ICAgICAgICBbJ3NldFRpbWVvdXQnLCAnY2xlYXJUaW1lb3V0JywgZmFsc2UsIGZhbHNlXSxcblx0ICAgICAgICBbJ3NldEludGVydmFsJywgJ2NsZWFySW50ZXJ2YWwnLCB0cnVlLCBmYWxzZV0sXG5cdCAgICAgICAgWydzZXRJbW1lZGlhdGUnLCAnY2xlYXJJbW1lZGlhdGUnLCBmYWxzZSwgZmFsc2VdLFxuXHQgICAgICAgIFsncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ2NhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdLFxuXHQgICAgICAgIFsnbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ21vekNhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdLFxuXHQgICAgICAgIFsnd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ3dlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdXG5cdCAgICBdKTtcblx0ICAgIGZuUGF0Y2gucGF0Y2hGdW5jdGlvbihnbG9iYWwsIFtcblx0ICAgICAgICAnYWxlcnQnLFxuXHQgICAgICAgICdwcm9tcHQnXG5cdCAgICBdKTtcblx0ICAgIGV2ZW50VGFyZ2V0UGF0Y2guYXBwbHkoKTtcblx0ICAgIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoLmFwcGx5KCk7XG5cdCAgICBwcm9taXNlUGF0Y2guYXBwbHkoKTtcblx0ICAgIG11dGF0aW9uT2JzZXJ2ZXJQYXRjaC5wYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG5cdCAgICBtdXRhdGlvbk9ic2VydmVyUGF0Y2gucGF0Y2hDbGFzcygnV2ViS2l0TXV0YXRpb25PYnNlcnZlcicpO1xuXHQgICAgZGVmaW5lUHJvcGVydHlQYXRjaC5hcHBseSgpO1xuXHQgICAgcmVnaXN0ZXJFbGVtZW50UGF0Y2guYXBwbHkoKTtcblx0ICAgIGdlb2xvY2F0aW9uUGF0Y2guYXBwbHkoKTtcblx0ICAgIGZpbGVSZWFkZXJQYXRjaC5hcHBseSgpO1xuXHR9XG5cdGV4cG9ydHMuYXBwbHkgPSBhcHBseTtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkxEaXNhYmxlZD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbkp2ZDNObGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOXdZWFJqYUM5aWNtOTNjMlZ5TG5SeklsMHNJbTVoYldWeklqcGJJbUZ3Y0d4NUlsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeEpRVUZaTEU5QlFVOHNWMEZCVFN4aFFVRmhMRU5CUVVNc1EwRkJRVHRCUVVOMlF5eEpRVUZaTEZsQlFWa3NWMEZCVFN4WFFVRlhMRU5CUVVNc1EwRkJRVHRCUVVNeFF5eEpRVUZaTEhGQ1FVRnhRaXhYUVVGTkxIRkNRVUZ4UWl4RFFVRkRMRU5CUVVFN1FVRkROMFFzU1VGQldTeHRRa0ZCYlVJc1YwRkJUU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkJPMEZCUTNwRUxFbEJRVmtzYjBKQlFXOUNMRmRCUVUwc2IwSkJRVzlDTEVOQlFVTXNRMEZCUVR0QlFVVXpSQ3hKUVVGWkxHZENRVUZuUWl4WFFVRk5MR2RDUVVGblFpeERRVUZETEVOQlFVRTdRVUZEYmtRc1NVRkJXU3gxUWtGQmRVSXNWMEZCVFN4MVFrRkJkVUlzUTBGQlF5eERRVUZCTzBGQlEycEZMRWxCUVZrc1owSkJRV2RDTEZkQlFVMHNaVUZCWlN4RFFVRkRMRU5CUVVFN1FVRkRiRVFzU1VGQldTeGxRVUZsTEZkQlFVMHNaVUZCWlN4RFFVRkRMRU5CUVVFN1FVRkZha1E3U1VGRFJVRXNUMEZCVDBFc1EwRkJRMEVzY1VKQlFYRkNRU3hEUVVGRFFTeE5RVUZOUVN4RlFVRkZRU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hGUVVGRlFUdFJRVU5xUkVFc1EwRkJRMEVzV1VGQldVRXNSVUZCUlVFc1kwRkJZMEVzUlVGQlJVRXNTMEZCUzBFc1JVRkJSVUVzUzBGQlMwRXNRMEZCUTBFN1VVRkROVU5CTEVOQlFVTkJMR0ZCUVdGQkxFVkJRVVZCTEdWQlFXVkJMRVZCUVVWQkxFbEJRVWxCTEVWQlFVVkJMRXRCUVV0QkxFTkJRVU5CTzFGQlF6ZERRU3hEUVVGRFFTeGpRVUZqUVN4RlFVRkZRU3huUWtGQlowSkJMRVZCUVVWQkxFdEJRVXRCTEVWQlFVVkJMRXRCUVV0QkxFTkJRVU5CTzFGQlEyaEVRU3hEUVVGRFFTeDFRa0ZCZFVKQkxFVkJRVVZCTEhOQ1FVRnpRa0VzUlVGQlJVRXNTMEZCUzBFc1JVRkJSVUVzU1VGQlNVRXNRMEZCUTBFN1VVRkRPVVJCTEVOQlFVTkJMREJDUVVFd1FrRXNSVUZCUlVFc2VVSkJRWGxDUVN4RlFVRkZRU3hMUVVGTFFTeEZRVUZGUVN4SlFVRkpRU3hEUVVGRFFUdFJRVU53UlVFc1EwRkJRMEVzTmtKQlFUWkNRU3hGUVVGRlFTdzBRa0ZCTkVKQkxFVkJRVVZCTEV0QlFVdEJMRVZCUVVWQkxFbEJRVWxCTEVOQlFVTkJPMHRCUXpORlFTeERRVUZEUVN4RFFVRkRRVHRKUVVWSVFTeFBRVUZQUVN4RFFVRkRRU3hoUVVGaFFTeERRVUZEUVN4TlFVRk5RU3hGUVVGRlFUdFJRVU0xUWtFc1QwRkJUMEU3VVVGRFVFRXNVVUZCVVVFN1MwRkRWRUVzUTBGQlEwRXNRMEZCUTBFN1NVRkZTRUVzWjBKQlFXZENRU3hEUVVGRFFTeExRVUZMUVN4RlFVRkZRU3hEUVVGRFFUdEpRVVY2UWtFc2RVSkJRWFZDUVN4RFFVRkRRU3hMUVVGTFFTeEZRVUZGUVN4RFFVRkRRVHRKUVVWb1EwRXNXVUZCV1VFc1EwRkJRMEVzUzBGQlMwRXNSVUZCUlVFc1EwRkJRMEU3U1VGRmNrSkJMSEZDUVVGeFFrRXNRMEZCUTBFc1ZVRkJWVUVzUTBGQlEwRXNhMEpCUVd0Q1FTeERRVUZEUVN4RFFVRkRRVHRKUVVOeVJFRXNjVUpCUVhGQ1FTeERRVUZEUVN4VlFVRlZRU3hEUVVGRFFTeDNRa0ZCZDBKQkxFTkJRVU5CTEVOQlFVTkJPMGxCUlRORVFTeHRRa0ZCYlVKQkxFTkJRVU5CTEV0QlFVdEJMRVZCUVVWQkxFTkJRVU5CTzBsQlJUVkNRU3h2UWtGQmIwSkJMRU5CUVVOQkxFdEJRVXRCTEVWQlFVVkJMRU5CUVVOQk8wbEJSVGRDUVN4blFrRkJaMEpCTEVOQlFVTkJMRXRCUVV0QkxFVkJRVVZCTEVOQlFVTkJPMGxCUlhwQ1FTeGxRVUZsUVN4RFFVRkRRU3hMUVVGTFFTeEZRVUZGUVN4RFFVRkRRVHRCUVVNeFFrRXNRMEZCUTBFN1FVRXZRbVVzWVVGQlN5eFJRU3RDY0VJc1EwRkJRU0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklHWnVVR0YwWTJnZ1puSnZiU0FuTGk5bWRXNWpkR2x2Ym5Nbk8xeHVhVzF3YjNKMElDb2dZWE1nY0hKdmJXbHpaVkJoZEdOb0lHWnliMjBnSnk0dmNISnZiV2x6WlNjN1hHNXBiWEJ2Y25RZ0tpQmhjeUJ0ZFhSaGRHbHZiazlpYzJWeWRtVnlVR0YwWTJnZ1puSnZiU0FuTGk5dGRYUmhkR2x2YmkxdlluTmxjblpsY2ljN1hHNXBiWEJ2Y25RZ0tpQmhjeUJrWldacGJtVlFjbTl3WlhKMGVWQmhkR05vSUdaeWIyMGdKeTR2WkdWbWFXNWxMWEJ5YjNCbGNuUjVKenRjYm1sdGNHOXlkQ0FxSUdGeklISmxaMmx6ZEdWeVJXeGxiV1Z1ZEZCaGRHTm9JR1p5YjIwZ0p5NHZjbVZuYVhOMFpYSXRaV3hsYldWdWRDYzdYRzVwYlhCdmNuUWdLaUJoY3lCM1pXSlRiMk5yWlhSUVlYUmphQ0JtY205dElDY3VMM2RsWW5OdlkydGxkQ2M3WEc1cGJYQnZjblFnS2lCaGN5QmxkbVZ1ZEZSaGNtZGxkRkJoZEdOb0lHWnliMjBnSnk0dlpYWmxiblF0ZEdGeVoyVjBKenRjYm1sdGNHOXlkQ0FxSUdGeklIQnliM0JsY25SNVJHVnpZM0pwY0hSdmNsQmhkR05vSUdaeWIyMGdKeTR2Y0hKdmNHVnlkSGt0WkdWelkzSnBjSFJ2Y2ljN1hHNXBiWEJ2Y25RZ0tpQmhjeUJuWlc5c2IyTmhkR2x2YmxCaGRHTm9JR1p5YjIwZ0p5NHZaMlZ2Ykc5allYUnBiMjRuTzF4dWFXMXdiM0owSUNvZ1lYTWdabWxzWlZKbFlXUmxjbEJoZEdOb0lHWnliMjBnSnk0dlptbHNaUzF5WldGa1pYSW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVhCd2JIa29LU0I3WEc0Z0lHWnVVR0YwWTJndWNHRjBZMmhUWlhSRGJHVmhja1oxYm1OMGFXOXVLR2RzYjJKaGJDd2daMnh2WW1Gc0xscHZibVVzSUZ0Y2JpQWdJQ0JiSjNObGRGUnBiV1Z2ZFhRbkxDQW5ZMnhsWVhKVWFXMWxiM1YwSnl3Z1ptRnNjMlVzSUdaaGJITmxYU3hjYmlBZ0lDQmJKM05sZEVsdWRHVnlkbUZzSnl3Z0oyTnNaV0Z5U1c1MFpYSjJZV3duTENCMGNuVmxMQ0JtWVd4elpWMHNYRzRnSUNBZ1d5ZHpaWFJKYlcxbFpHbGhkR1VuTENBblkyeGxZWEpKYlcxbFpHbGhkR1VuTENCbVlXeHpaU3dnWm1Gc2MyVmRMRnh1SUNBZ0lGc25jbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSnl3Z0oyTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxKeXdnWm1Gc2MyVXNJSFJ5ZFdWZExGeHVJQ0FnSUZzbmJXOTZVbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSnl3Z0oyMXZla05oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSnl3Z1ptRnNjMlVzSUhSeWRXVmRMRnh1SUNBZ0lGc25kMlZpYTJsMFVtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxKeXdnSjNkbFltdHBkRU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSnl3Z1ptRnNjMlVzSUhSeWRXVmRYRzRnSUYwcE8xeHVYRzRnSUdadVVHRjBZMmd1Y0dGMFkyaEdkVzVqZEdsdmJpaG5iRzlpWVd3c0lGdGNiaUFnSUNBbllXeGxjblFuTEZ4dUlDQWdJQ2R3Y205dGNIUW5YRzRnSUYwcE8xeHVYRzRnSUdWMlpXNTBWR0Z5WjJWMFVHRjBZMmd1WVhCd2JIa29LVHRjYmx4dUlDQndjbTl3WlhKMGVVUmxjMk55YVhCMGIzSlFZWFJqYUM1aGNIQnNlU2dwTzF4dVhHNGdJSEJ5YjIxcGMyVlFZWFJqYUM1aGNIQnNlU2dwTzF4dVhHNGdJRzExZEdGMGFXOXVUMkp6WlhKMlpYSlFZWFJqYUM1d1lYUmphRU5zWVhOektDZE5kWFJoZEdsdmJrOWljMlZ5ZG1WeUp5azdYRzRnSUcxMWRHRjBhVzl1VDJKelpYSjJaWEpRWVhSamFDNXdZWFJqYUVOc1lYTnpLQ2RYWldKTGFYUk5kWFJoZEdsdmJrOWljMlZ5ZG1WeUp5azdYRzVjYmlBZ1pHVm1hVzVsVUhKdmNHVnlkSGxRWVhSamFDNWhjSEJzZVNncE8xeHVYRzRnSUhKbFoybHpkR1Z5Uld4bGJXVnVkRkJoZEdOb0xtRndjR3g1S0NrN1hHNWNiaUFnWjJWdmJHOWpZWFJwYjI1UVlYUmphQzVoY0hCc2VTZ3BPMXh1WEc0Z0lHWnBiR1ZTWldGa1pYSlFZWFJqYUM1aGNIQnNlU2dwTzF4dWZWeHVYRzRpWFgwPVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge3ZhciB3dGYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0ZnVuY3Rpb24gcGF0Y2hTZXRDbGVhckZ1bmN0aW9uKHdpbmRvdywgWm9uZSwgZm5OYW1lcykge1xuXHQgICAgZnVuY3Rpb24gcGF0Y2hNYWNyb1Rhc2tNZXRob2Qoc2V0TmFtZSwgY2xlYXJOYW1lLCByZXBlYXRpbmcsIGlzUmFmKSB7XG5cdCAgICAgICAgdmFyIHNldE5hdGl2ZSA9IHdpbmRvd1tzZXROYW1lXTtcblx0ICAgICAgICB2YXIgY2xlYXJOYXRpdmUgPSB3aW5kb3dbY2xlYXJOYW1lXTtcblx0ICAgICAgICB2YXIgaWRzID0ge307XG5cdCAgICAgICAgaWYgKHNldE5hdGl2ZSkge1xuXHQgICAgICAgICAgICB2YXIgd3RmU2V0RXZlbnRGbiA9IHd0Zi5jcmVhdGVFdmVudCgnWm9uZSMnICsgc2V0TmFtZSArICcodWludDMyIHpvbmUsIHVpbnQzMiBpZCwgdWludDMyIGRlbGF5KScpO1xuXHQgICAgICAgICAgICB2YXIgd3RmQ2xlYXJFdmVudEZuID0gd3RmLmNyZWF0ZUV2ZW50KCdab25lIycgKyBjbGVhck5hbWUgKyAnKHVpbnQzMiB6b25lLCB1aW50MzIgaWQpJyk7XG5cdCAgICAgICAgICAgIHZhciB3dGZDYWxsYmFja0ZuID0gd3RmLmNyZWF0ZVNjb3BlKCdab25lI2NiOicgKyBzZXROYW1lICsgJyh1aW50MzIgem9uZSwgdWludDMyIGlkLCB1aW50MzIgZGVsYXkpJyk7XG5cdCAgICAgICAgICAgIC8vIEZvcndhcmQgYWxsIGNhbGxzIGZyb20gdGhlIHdpbmRvdyB0aHJvdWdoIHRoZSB6b25lLlxuXHQgICAgICAgICAgICB3aW5kb3dbc2V0TmFtZV0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZ2xvYmFsLnpvbmVbc2V0TmFtZV0uYXBwbHkoZ2xvYmFsLnpvbmUsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgIHdpbmRvd1tjbGVhck5hbWVdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbC56b25lW2NsZWFyTmFtZV0uYXBwbHkoZ2xvYmFsLnpvbmUsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgIC8vIFNldCB1cCB6b25lIHByb2Nlc3NpbmcgZm9yIHRoZSBzZXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICAgIFpvbmUucHJvdG90eXBlW3NldE5hbWVdID0gZnVuY3Rpb24gKGZuLCBkZWxheSkge1xuXHQgICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBzYXZlIGBmbmAgaW4gdmFyIGRpZmZlcmVudCB0aGVuIGFyZ3VtZW50LiBUaGlzIGlzIGJlY2F1c2Vcblx0ICAgICAgICAgICAgICAgIC8vIGluIElFOSBgYXJndW1lbnRbMF1gIGFuZCBgZm5gIGhhdmUgc2FtZSBpZGVudGl0eSwgYW5kIGFzc2lnbmluZyB0b1xuXHQgICAgICAgICAgICAgICAgLy8gYGFyZ3VtZW50WzBdYCBjaGFuZ2VzIGBmbmAuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tGbiA9IGZuO1xuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFja0ZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gZm9yY2UgdGhlIGVycm9yIGJ5IGNhbGxpbmcgdGhlIG1ldGhvZCB3aXRoIHdyb25nIGFyZ3Ncblx0ICAgICAgICAgICAgICAgICAgICBzZXROYXRpdmUuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNldElkID0gbnVsbDtcblx0ICAgICAgICAgICAgICAgIC8vIHdyYXAgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGludG8gdGhlIHpvbmUuXG5cdCAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrWm9uZSA9IHpvbmUuaXNSb290Wm9uZSgpIHx8IGlzUmFmID8gem9uZSA6IHpvbmUuZm9yaygpO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja1RoaXMgPSB0aGlzO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja0FyZ3MgPSBhcmd1bWVudHM7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHd0Zi5sZWF2ZVNjb3BlKHd0ZkNhbGxiYWNrRm4oY2FsbGJhY2tab25lLiRpZCwgc2V0SWQsIGRlbGF5KSwgY2FsbGJhY2tab25lLnJ1bihmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVwZWF0aW5nKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaWRzW3NldElkXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrWm9uZS5yZW1vdmVUYXNrKGNhbGxiYWNrRm4pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuLmFwcGx5KGNhbGxiYWNrVGhpcywgY2FsbGJhY2tBcmdzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9KSk7XG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgaWYgKHJlcGVhdGluZykge1xuXHQgICAgICAgICAgICAgICAgICAgIHpvbmUuYWRkUmVwZWF0aW5nVGFzayhjYWxsYmFja0ZuKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHpvbmUuYWRkVGFzayhjYWxsYmFja0ZuKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHNldElkID0gc2V0TmF0aXZlLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgIGlkc1tzZXRJZF0gPSBjYWxsYmFja0ZuO1xuXHQgICAgICAgICAgICAgICAgd3RmU2V0RXZlbnRGbih6b25lLiRpZCwgc2V0SWQsIGRlbGF5KTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBzZXRJZDtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgWm9uZS5wcm90b3R5cGVbc2V0TmFtZSArICdVbnBhdGNoZWQnXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBzZXROYXRpdmUuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAvLyBTZXQgdXAgem9uZSBwcm9jZXNzaW5nIGZvciB0aGUgY2xlYXIgZnVuY3Rpb24uXG5cdCAgICAgICAgICAgIFpvbmUucHJvdG90eXBlW2NsZWFyTmFtZV0gPSBmdW5jdGlvbiAoaWQpIHtcblx0ICAgICAgICAgICAgICAgIHd0ZkNsZWFyRXZlbnRGbih0aGlzLiRpZCwgaWQpO1xuXHQgICAgICAgICAgICAgICAgaWYgKGlkcy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tGbiA9IGlkc1tpZF07XG5cdCAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGlkc1tpZF07XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGVhdGluZykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVJlcGVhdGluZ1Rhc2soY2FsbGJhY2tGbik7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2soY2FsbGJhY2tGbik7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgWm9uZS5wcm90b3R5cGVbY2xlYXJOYW1lICsgJ1VucGF0Y2hlZCddID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGFyZ3MpIHtcblx0ICAgICAgICBwYXRjaE1hY3JvVGFza01ldGhvZC5hcHBseShudWxsLCBhcmdzKTtcblx0ICAgIH0pO1xuXHR9XG5cdGV4cG9ydHMucGF0Y2hTZXRDbGVhckZ1bmN0aW9uID0gcGF0Y2hTZXRDbGVhckZ1bmN0aW9uO1xuXHQ7XG5cdGZ1bmN0aW9uIHBhdGNoRnVuY3Rpb24ob2JqLCBmbk5hbWVzKSB7XG5cdCAgICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0ICAgICAgICB2YXIgZGVsZWdhdGUgPSBvYmpbbmFtZV07XG5cdCAgICAgICAgZ2xvYmFsLnpvbmVbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShvYmosIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICBvYmpbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBnbG9iYWwuem9uZVtuYW1lXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgIH07XG5cdCAgICB9KTtcblx0fVxuXHRleHBvcnRzLnBhdGNoRnVuY3Rpb24gPSBwYXRjaEZ1bmN0aW9uO1xuXHQ7XG5cdC8vIyBzb3VyY2VNYXBwaW5nVVJMRGlzYWJsZWQ9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5WdVkzUnBiMjV6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dkxpNHZiR2xpTDNCaGRHTm9MMloxYm1OMGFXOXVjeTUwY3lKZExDSnVZVzFsY3lJNld5SndZWFJqYUZObGRFTnNaV0Z5Um5WdVkzUnBiMjRpTENKd1lYUmphRk5sZEVOc1pXRnlSblZ1WTNScGIyNHVjR0YwWTJoTllXTnliMVJoYzJ0TlpYUm9iMlFpTENKd1lYUmphRVoxYm1OMGFXOXVJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkRRU3hKUVVGWkxFZEJRVWNzVjBGQlRTeFJRVUZSTEVOQlFVTXNRMEZCUVR0QlFVVTVRaXdyUWtGQmMwTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUE8wbEJRM3BFUVN3NFFrRkJPRUpCTEU5QlFVOUJMRVZCUVVWQkxGTkJRVk5CTEVWQlFVVkJMRk5CUVZOQkxFVkJRVVZCTEV0QlFVdEJPMUZCUTJoRlF5eEpRVUZKUVN4VFFVRlRRU3hIUVVGSFFTeE5RVUZOUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4RFFVRkRRVHRSUVVOb1EwRXNTVUZCU1VFc1YwRkJWMEVzUjBGQlIwRXNUVUZCVFVFc1EwRkJRMEVzVTBGQlUwRXNRMEZCUTBFc1EwRkJRMEU3VVVGRGNFTkJMRWxCUVVsQkxFZEJRVWRCTEVkQlFVZEJMRVZCUVVWQkxFTkJRVU5CTzFGQlJXSkJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRk5CUVZOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xbEJRMlJCTEVsQlFVbEJMR0ZCUVdGQkxFZEJRVWRCTEVkQlFVZEJMRU5CUVVOQkxGZEJRVmRCTEVOQlFVTkJMRTlCUVU5QkxFZEJRVWRCTEU5QlFVOUJMRWRCUVVkQkxIZERRVUYzUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZEYkVkQkxFbEJRVWxCTEdWQlFXVkJMRWRCUVVkQkxFZEJRVWRCTEVOQlFVTkJMRmRCUVZkQkxFTkJRVU5CTEU5QlFVOUJMRWRCUVVkQkxGTkJRVk5CTEVkQlFVZEJMREJDUVVFd1FrRXNRMEZCUTBFc1EwRkJRMEU3V1VGRGVFWkJMRWxCUVVsQkxHRkJRV0ZCTEVkQlFVZEJMRWRCUVVkQkxFTkJRVU5CTEZkQlFWZEJMRU5CUVVOQkxGVkJRVlZCTEVkQlFVZEJMRTlCUVU5QkxFZEJRVWRCTEhkRFFVRjNRMEVzUTBGQlEwRXNRMEZCUTBFN1dVRkZja2RCTEhORVFVRnpSRUU3V1VGRGRFUkJMRTFCUVUxQkxFTkJRVU5CTEU5QlFVOUJMRU5CUVVOQkxFZEJRVWRCTzJkQ1FVTm9RaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVNMVJDeERRVUZETEVOQlFVTkJPMWxCUTBaQkxFMUJRVTFCTEVOQlFVTkJMRk5CUVZOQkxFTkJRVU5CTEVkQlFVZEJPMmRDUVVOc1FpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFpRVU01UkN4RFFVRkRMRU5CUVVOQk8xbEJSMFpCTEN0RFFVRXJRMEU3V1VGREwwTkJMRWxCUVVsQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxFOUJRVTlCTEVOQlFVTkJMRWRCUVVkQkxGVkJRVlZCTEVWQlFVVkJMRVZCUVVWQkxFdEJRVXRCTzJkQ1FVTXpReXgxUlVGQmRVVTdaMEpCUTNaRkxIRkZRVUZ4UlR0blFrRkRja1VzT0VKQlFUaENPMmRDUVVNNVFpeEpRVUZKTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRM0JDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1ZVRkJWU3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNKRExIZEVRVUYzUkR0dlFrRkRlRVFzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03WjBKQlEzSkRMRU5CUVVNN1owSkJRMFFzU1VGQlNTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMmRDUVVOb1FpeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRMnBDTERSRFFVRTBRenRuUWtGRE5VTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSE8yOUNRVU5pTEVsQlFVa3NXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dHZRa0ZEYmtVc1NVRkJTU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETzI5Q1FVTjRRaXhKUVVGSkxGbEJRVmtzUjBGQlJ5eFRRVUZUTEVOQlFVTTdiMEpCUXpkQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVTnFRaXhoUVVGaExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRemRETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNN2QwSkJRMllzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU5tTEU5QlFVOHNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE96UkNRVU5zUWl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzNkQ1FVTjBReXhEUVVGRE8zZENRVU5FTEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0dlFrRkRkRVFzUTBGQlF5eERRVUZETEVOQlEwd3NRMEZCUXp0blFrRkRTaXhEUVVGRExFTkJRVU03WjBKQlEwWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEWkN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRM0JETEVOQlFVTTdaMEpCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEwNHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZETTBJc1EwRkJRenRuUWtGRFJDeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdaMEpCUXpORExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNN1owSkJRM2hDTEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRkRU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVTm1MRU5CUVVNc1EwRkJRMEU3V1VGRlJrRXNTVUZCU1VFc1EwRkJRMEVzVTBGQlUwRXNRMEZCUTBFc1QwRkJUMEVzUjBGQlIwRXNWMEZCVjBFc1EwRkJRMEVzUjBGQlIwRTdaMEpCUTNSRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFpRVU0xUXl4RFFVRkRMRU5CUVVOQk8xbEJSVVpCTEdsRVFVRnBSRUU3V1VGRGFrUkJMRWxCUVVsQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxGTkJRVk5CTEVOQlFVTkJMRWRCUVVkQkxGVkJRVlZCTEVWQlFVVkJPMmRDUVVOMFF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZET1VJc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6TkNMRWxCUVVrc1ZVRkJWU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkRla0lzVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN2IwSkJRMllzUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRFpDeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdiMEpCUTNaRExFTkJRVU03YjBKQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2QwSkJRMDRzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenR2UWtGRE9VSXNRMEZCUXp0blFrRkRTQ3hEUVVGRE8yZENRVU5FTEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0WlFVTTVReXhEUVVGRExFTkJRVU5CTzFsQlJVWkJMRWxCUVVsQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxGTkJRVk5CTEVkQlFVZEJMRmRCUVZkQkxFTkJRVU5CTEVkQlFVZEJPMmRDUVVONFF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdXVUZET1VNc1EwRkJReXhEUVVGRFFUdFJRVVZLUVN4RFFVRkRRVHRKUVVOSVFTeERRVUZEUVR0SlFVTkVSQ3hQUVVGUFFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeFZRVUZUUVN4SlFVRkpRVHRSUVVNelFpeHZRa0ZCYjBJc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU1zUTBGQlEwRXNRMEZCUTBFN1FVRkRURUVzUTBGQlEwRTdRVUYyUm1Vc05rSkJRWEZDTEhkQ1FYVkdjRU1zUTBGQlFUdEJRVUZCTEVOQlFVTTdRVUZGUml4MVFrRkJPRUlzUjBGQlJ5eEZRVUZGTEU5QlFVODdTVUZEZUVORkxFOUJRVTlCTEVOQlFVTkJMRTlCUVU5QkxFTkJRVU5CTEZWQlFWVkJMRWxCUVVsQk8xRkJRelZDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU42UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITzFsQlEyeENMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVONFF5eERRVUZETEVOQlFVTTdVVUZGUml4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWM3V1VGRFZpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMnhFTEVOQlFVTXNRMEZCUXp0SlFVTktMRU5CUVVNc1EwRkJRMEVzUTBGQlEwRTdRVUZEVEVFc1EwRkJRMEU3UVVGWVpTeHhRa0ZCWVN4blFrRlhOVUlzUTBGQlFUdEJRVUZCTEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdLaUJoY3lCMWRHbHNjeUJtY205dElDY3VMaTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdLaUJoY3lCM2RHWWdabkp2YlNBbkxpNHZkM1JtSnp0Y2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlIQmhkR05vVTJWMFEyeGxZWEpHZFc1amRHbHZiaWgzYVc1a2IzY3NJRnB2Ym1Vc0lHWnVUbUZ0WlhNcElIdGNiaUFnWm5WdVkzUnBiMjRnY0dGMFkyaE5ZV055YjFSaGMydE5aWFJvYjJRb2MyVjBUbUZ0WlN3Z1kyeGxZWEpPWVcxbExDQnlaWEJsWVhScGJtY3NJR2x6VW1GbUtTQjdYRzRnSUNBZ2RtRnlJSE5sZEU1aGRHbDJaU0E5SUhkcGJtUnZkMXR6WlhST1lXMWxYVHRjYmlBZ0lDQjJZWElnWTJ4bFlYSk9ZWFJwZG1VZ1BTQjNhVzVrYjNkYlkyeGxZWEpPWVcxbFhUdGNiaUFnSUNCMllYSWdhV1J6SUQwZ2UzMDdYRzVjYmlBZ0lDQnBaaUFvYzJWMFRtRjBhWFpsS1NCN1hHNGdJQ0FnSUNCMllYSWdkM1JtVTJWMFJYWmxiblJHYmlBOUlIZDBaaTVqY21WaGRHVkZkbVZ1ZENnbldtOXVaU01uSUNzZ2MyVjBUbUZ0WlNBcklDY29kV2x1ZERNeUlIcHZibVVzSUhWcGJuUXpNaUJwWkN3Z2RXbHVkRE15SUdSbGJHRjVLU2NwTzF4dUlDQWdJQ0FnZG1GeUlIZDBaa05zWldGeVJYWmxiblJHYmlBOUlIZDBaaTVqY21WaGRHVkZkbVZ1ZENnbldtOXVaU01uSUNzZ1kyeGxZWEpPWVcxbElDc2dKeWgxYVc1ME16SWdlbTl1WlN3Z2RXbHVkRE15SUdsa0tTY3BPMXh1SUNBZ0lDQWdkbUZ5SUhkMFprTmhiR3hpWVdOclJtNGdQU0IzZEdZdVkzSmxZWFJsVTJOdmNHVW9KMXB2Ym1ValkySTZKeUFySUhObGRFNWhiV1VnS3lBbktIVnBiblF6TWlCNmIyNWxMQ0IxYVc1ME16SWdhV1FzSUhWcGJuUXpNaUJrWld4aGVTa25LVHRjYmx4dUlDQWdJQ0FnTHk4Z1JtOXlkMkZ5WkNCaGJHd2dZMkZzYkhNZ1puSnZiU0IwYUdVZ2QybHVaRzkzSUhSb2NtOTFaMmdnZEdobElIcHZibVV1WEc0Z0lDQWdJQ0IzYVc1a2IzZGJjMlYwVG1GdFpWMGdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbmJHOWlZV3d1ZW05dVpWdHpaWFJPWVcxbFhTNWhjSEJzZVNobmJHOWlZV3d1ZW05dVpTd2dZWEpuZFcxbGJuUnpLVHRjYmlBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0IzYVc1a2IzZGJZMnhsWVhKT1lXMWxYU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHZHNiMkpoYkM1NmIyNWxXMk5zWldGeVRtRnRaVjB1WVhCd2JIa29aMnh2WW1Gc0xucHZibVVzSUdGeVozVnRaVzUwY3lrN1hHNGdJQ0FnSUNCOU8xeHVYRzVjYmlBZ0lDQWdJQzh2SUZObGRDQjFjQ0I2YjI1bElIQnliMk5sYzNOcGJtY2dabTl5SUhSb1pTQnpaWFFnWm5WdVkzUnBiMjR1WEc0Z0lDQWdJQ0JhYjI1bExuQnliM1J2ZEhsd1pWdHpaWFJPWVcxbFhTQTlJR1oxYm1OMGFXOXVJQ2htYml3Z1pHVnNZWGtwSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdWMlVnYm1WbFpDQjBieUJ6WVhabElHQm1ibUFnYVc0Z2RtRnlJR1JwWm1abGNtVnVkQ0IwYUdWdUlHRnlaM1Z0Wlc1MExpQlVhR2x6SUdseklHSmxZMkYxYzJWY2JpQWdJQ0FnSUNBZ0x5OGdhVzRnU1VVNUlHQmhjbWQxYldWdWRGc3dYV0FnWVc1a0lHQm1ibUFnYUdGMlpTQnpZVzFsSUdsa1pXNTBhWFI1TENCaGJtUWdZWE56YVdkdWFXNW5JSFJ2WEc0Z0lDQWdJQ0FnSUM4dklHQmhjbWQxYldWdWRGc3dYV0FnWTJoaGJtZGxjeUJnWm01Z0xseHVJQ0FnSUNBZ0lDQjJZWElnWTJGc2JHSmhZMnRHYmlBOUlHWnVPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdOaGJHeGlZV05yUm00Z0lUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeUJtYjNKalpTQjBhR1VnWlhKeWIzSWdZbmtnWTJGc2JHbHVaeUIwYUdVZ2JXVjBhRzlrSUhkcGRHZ2dkM0p2Ym1jZ1lYSm5jMXh1SUNBZ0lDQWdJQ0FnSUhObGRFNWhkR2wyWlM1aGNIQnNlU2gzYVc1a2IzY3NJR0Z5WjNWdFpXNTBjeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2RtRnlJSHB2Ym1VZ1BTQjBhR2x6TzF4dUlDQWdJQ0FnSUNCMllYSWdjMlYwU1dRZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnSUNBdkx5QjNjbUZ3SUhSb1pTQmpZV3hzWW1GamF5Qm1kVzVqZEdsdmJpQnBiblJ2SUhSb1pTQjZiMjVsTGx4dUlDQWdJQ0FnSUNCaGNtZDFiV1Z1ZEhOYk1GMGdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnWTJGc2JHSmhZMnRhYjI1bElEMGdlbTl1WlM1cGMxSnZiM1JhYjI1bEtDa2dmSHdnYVhOU1lXWWdQeUI2YjI1bElEb2dlbTl1WlM1bWIzSnJLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR05oYkd4aVlXTnJWR2hwY3lBOUlIUm9hWE03WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR05oYkd4aVlXTnJRWEpuY3lBOUlHRnlaM1Z0Wlc1MGN6dGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkM1JtTG14bFlYWmxVMk52Y0dVb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhkMFprTmhiR3hpWVdOclJtNG9ZMkZzYkdKaFkydGFiMjVsTGlScFpDd2djMlYwU1dRc0lHUmxiR0Y1S1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGc2JHSmhZMnRhYjI1bExuSjFiaWhtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWEpsY0dWaGRHbHVaeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUdsa2MxdHpaWFJKWkYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamExcHZibVV1Y21WdGIzWmxWR0Z6YXloallXeHNZbUZqYTBadUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhiR3hpWVdOclJtNHVZWEJ3Ykhrb1kyRnNiR0poWTJ0VWFHbHpMQ0JqWVd4c1ltRmphMEZ5WjNNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h5WlhCbFlYUnBibWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjZiMjVsTG1Ga1pGSmxjR1ZoZEdsdVoxUmhjMnNvWTJGc2JHSmhZMnRHYmlrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdlbTl1WlM1aFpHUlVZWE5yS0dOaGJHeGlZV05yUm00cE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSE5sZEVsa0lEMGdjMlYwVG1GMGFYWmxMbUZ3Y0d4NUtIZHBibVJ2ZHl3Z1lYSm5kVzFsYm5SektUdGNiaUFnSUNBZ0lDQWdhV1J6VzNObGRFbGtYU0E5SUdOaGJHeGlZV05yUm00N1hHNGdJQ0FnSUNBZ0lIZDBabE5sZEVWMlpXNTBSbTRvZW05dVpTNGthV1FzSUhObGRFbGtMQ0JrWld4aGVTazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFJKWkR0Y2JpQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lGcHZibVV1Y0hKdmRHOTBlWEJsVzNObGRFNWhiV1VnS3lBblZXNXdZWFJqYUdWa0oxMGdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhObGRFNWhkR2wyWlM1aGNIQnNlU2gzYVc1a2IzY3NJR0Z5WjNWdFpXNTBjeWs3WEc0Z0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNBdkx5QlRaWFFnZFhBZ2VtOXVaU0J3Y205alpYTnphVzVuSUdadmNpQjBhR1VnWTJ4bFlYSWdablZ1WTNScGIyNHVYRzRnSUNBZ0lDQmFiMjVsTG5CeWIzUnZkSGx3WlZ0amJHVmhjazVoYldWZElEMGdablZ1WTNScGIyNGdLR2xrS1NCN1hHNGdJQ0FnSUNBZ0lIZDBaa05zWldGeVJYWmxiblJHYmloMGFHbHpMaVJwWkN3Z2FXUXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb2FXUnpMbWhoYzA5M2JsQnliM0JsY25SNUtHbGtLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJqWVd4c1ltRmphMFp1SUQwZ2FXUnpXMmxrWFR0Y2JpQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2FXUnpXMmxrWFR0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvY21Wd1pXRjBhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuSmxiVzkyWlZKbGNHVmhkR2x1WjFSaGMyc29ZMkZzYkdKaFkydEdiaWs3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNtVnRiM1psVkdGemF5aGpZV3hzWW1GamEwWnVLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnNaV0Z5VG1GMGFYWmxMbUZ3Y0d4NUtIZHBibVJ2ZHl3Z1lYSm5kVzFsYm5SektUdGNiaUFnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJRnB2Ym1VdWNISnZkRzkwZVhCbFcyTnNaV0Z5VG1GdFpTQXJJQ2RWYm5CaGRHTm9aV1FuWFNBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKT1lYUnBkbVV1WVhCd2JIa29kMmx1Wkc5M0xDQmhjbWQxYldWdWRITXBPMXh1SUNBZ0lDQWdmVHRjYmx4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0JtYms1aGJXVnpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNG9ZWEpuY3lrZ2UxeHVJQ0FnSUhCaGRHTm9UV0ZqY205VVlYTnJUV1YwYUc5a0xtRndjR3g1S0c1MWJHd3NJR0Z5WjNNcE8xeHVJQ0I5S1R0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ3WVhSamFFWjFibU4wYVc5dUtHOWlhaXdnWm01T1lXMWxjeWtnZTF4dUlDQm1iazVoYldWekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHNWhiV1VwSUh0Y2JpQWdJQ0IyWVhJZ1pHVnNaV2RoZEdVZ1BTQnZZbXBiYm1GdFpWMDdYRzRnSUNBZ1oyeHZZbUZzTG5wdmJtVmJibUZ0WlYwZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaR1ZzWldkaGRHVXVZWEJ3Ykhrb2IySnFMQ0JoY21kMWJXVnVkSE1wTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J2WW1wYmJtRnRaVjBnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1oyeHZZbUZzTG5wdmJtVmJibUZ0WlYwdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVHRjYmlBZ0lDQjlPMXh1SUNCOUtUdGNibjA3WEc0aVhYMD1cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHsvLyBEZXRlY3QgYW5kIHNldHVwIFdURi5cblx0dmFyIHd0ZlRyYWNlID0gbnVsbDtcblx0dmFyIHd0ZkV2ZW50cyA9IG51bGw7XG5cdHZhciB3dGZFbmFibGVkID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciB3dGYgPSBnbG9iYWxbJ3d0ZiddO1xuXHQgICAgaWYgKHd0Zikge1xuXHQgICAgICAgIHd0ZlRyYWNlID0gd3RmWyd0cmFjZSddO1xuXHQgICAgICAgIGlmICh3dGZUcmFjZSkge1xuXHQgICAgICAgICAgICB3dGZFdmVudHMgPSB3dGZUcmFjZVsnZXZlbnRzJ107XG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBmYWxzZTtcblx0fSkoKTtcblx0ZnVuY3Rpb24gbm9vcCgpIHtcblx0fVxuXHRleHBvcnRzLmVuYWJsZWQgPSB3dGZFbmFibGVkO1xuXHRleHBvcnRzLmNyZWF0ZVNjb3BlID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChzaWduYXR1cmUsIGZsYWdzKSB7XG5cdCAgICByZXR1cm4gd3RmRXZlbnRzLmNyZWF0ZVNjb3BlKHNpZ25hdHVyZSwgZmxhZ3MpO1xuXHR9IDogZnVuY3Rpb24gKHMsIGYpIHtcblx0ICAgIHJldHVybiBub29wO1xuXHR9O1xuXHRleHBvcnRzLmNyZWF0ZUV2ZW50ID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChzaWduYXR1cmUsIGZsYWdzKSB7XG5cdCAgICByZXR1cm4gd3RmRXZlbnRzLmNyZWF0ZUluc3RhbmNlKHNpZ25hdHVyZSwgZmxhZ3MpO1xuXHR9IDogZnVuY3Rpb24gKHMsIGYpIHtcblx0ICAgIHJldHVybiBub29wO1xuXHR9O1xuXHRleHBvcnRzLmxlYXZlU2NvcGUgPSB3dGZFbmFibGVkID8gZnVuY3Rpb24gKHNjb3BlLCByZXR1cm5WYWx1ZSkge1xuXHQgICAgd3RmVHJhY2UubGVhdmVTY29wZShzY29wZSwgcmV0dXJuVmFsdWUpO1xuXHQgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuXHR9IDogZnVuY3Rpb24gKHMsIHYpIHtcblx0ICAgIHJldHVybiB2O1xuXHR9O1xuXHRleHBvcnRzLmJlZ2luVGltZVJhbmdlID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChyYW5nZVR5cGUsIGFjdGlvbikge1xuXHQgICAgcmV0dXJuIHd0ZlRyYWNlLmJlZ2luVGltZVJhbmdlKHJhbmdlVHlwZSwgYWN0aW9uKTtcblx0fSA6IGZ1bmN0aW9uICh0LCBhKSB7XG5cdCAgICByZXR1cm4gbnVsbDtcblx0fTtcblx0ZXhwb3J0cy5lbmRUaW1lUmFuZ2UgPSB3dGZFbmFibGVkID8gZnVuY3Rpb24gKHJhbmdlKSB7XG5cdCAgICB3dGZUcmFjZS5lbmRUaW1lUmFuZ2UocmFuZ2UpO1xuXHR9IDogZnVuY3Rpb24gKHIpIHtcblx0fTtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkxEaXNhYmxlZD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkM1JtTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmJHbGlMM2QwWmk1MGN5SmRMQ0p1WVcxbGN5STZXeUp1YjI5d0lsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeDNRa0ZCZDBJN1FVRkRlRUlzU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTNCQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnlRaXhKUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZETzBsQlEyaENMRWxCUVVrc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFJc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJJc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlEyUXNRMEZCUXp0SlFVTklMRU5CUVVNN1NVRkRSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzBGQlEyWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVWTU8wRkJRMEZCTEVOQlFVTkJPMEZCVlZrc1pVRkJUeXhIUVVGWExGVkJRVlVzUTBGQlF6dEJRVU0zUWl4dFFrRkJWeXhIUVVGblJDeFZRVUZWTEVkQlFVY3NWVUZCVlN4VFFVRlRMRVZCUVVVc1MwRkJTenRKUVVNM1J5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1EwRkJReXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEYWtRc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEYUVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU5rTEVOQlFVTXNRMEZCUXp0QlFVTlhMRzFDUVVGWExFZEJRWFZFTEZWQlFWVXNSMEZCUnl4VlFVRlZMRk5CUVZNc1JVRkJSU3hMUVVGTE8wbEJRM0JJTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTndSQ3hEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTm9RaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzBGQlEyUXNRMEZCUXl4RFFVRkRPMEZCUTFjc2EwSkJRVlVzUjBGQlJ5eFZRVUZWTEVkQlFVY3NWVUZCVlN4TFFVRm5RaXhGUVVGRkxGZEJRV1U3U1VGRGFFWXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEZUVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF6dEJRVU55UWl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU5vUWl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMWdzUTBGQlF5eERRVUZETzBGQlExY3NjMEpCUVdNc1IwRkJSeXhWUVVGVkxFZEJRVWNzVlVGQlZTeFRRVUZUTEVWQlFVVXNUVUZCVFR0SlFVTndSU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRGNFUXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGFFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRCUVVOa0xFTkJRVU1zUTBGQlF6dEJRVU5YTEc5Q1FVRlpMRWRCUVVjc1ZVRkJWU3hIUVVGSExGVkJRVlVzUzBGQlN6dEpRVU4wUkN4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF5OUNMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU03UVVGRFppeERRVUZETEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCRVpYUmxZM1FnWVc1a0lITmxkSFZ3SUZkVVJpNWNiblpoY2lCM2RHWlVjbUZqWlNBOUlHNTFiR3c3WEc1MllYSWdkM1JtUlhabGJuUnpJRDBnYm5Wc2JEdGNiblpoY2lCM2RHWkZibUZpYkdWa0lEMGdLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkbUZ5SUhkMFppQTlJR2RzYjJKaGJGc25kM1JtSjEwN1hHNGdJR2xtSUNoM2RHWXBJSHRjYmlBZ0lDQjNkR1pVY21GalpTQTlJSGQwWmxzbmRISmhZMlVuWFR0Y2JpQWdJQ0JwWmlBb2QzUm1WSEpoWTJVcElIdGNiaUFnSUNBZ0lIZDBaa1YyWlc1MGN5QTlJSGQwWmxSeVlXTmxXeWRsZG1WdWRITW5YVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNTlLU2dwTzF4dVhHNW1kVzVqZEdsdmJpQnViMjl3S0NrZ2UxeHVmVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUZkMFpsTmpiM0JsUm00Z2UxeHVJQ0FvTGk0dVlYSm5jeWs2SUdGdWVUdGNibjFjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCWGRHWkZkbVZ1ZEVadUlIdGNiaUFnS0M0dUxtRnlaM01wT2lCaGJuazdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JsYm1GaWJHVmtPbUp2YjJ4bFlXNGdQU0IzZEdaRmJtRmliR1ZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpWTmpiM0JsT2loemFXZHVZWFIxY21VNmMzUnlhVzVuTENCbWJHRm5jejg2WVc1NUtTQTlQaUJYZEdaVFkyOXdaVVp1SUQwZ2QzUm1SVzVoWW14bFpDQS9JR1oxYm1OMGFXOXVJQ2h6YVdkdVlYUjFjbVVzSUdac1lXZHpLU0I3WEc0Z0lISmxkSFZ5YmlCM2RHWkZkbVZ1ZEhNdVkzSmxZWFJsVTJOdmNHVW9jMmxuYm1GMGRYSmxMQ0JtYkdGbmN5azdYRzU5SURvZ1puVnVZM1JwYjI0Z0tITXNJR1lwSUh0Y2JpQWdjbVYwZFhKdUlHNXZiM0E3WEc1OU8xeHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVVYyWlc1ME9pQW9jMmxuYm1GMGRYSmxPaUJ6ZEhKcGJtY3NJR0ZqZEdsdmJqODZJSE4wY21sdVp5a2dQVDRnVjNSbVJYWmxiblJHYmlBOUlIZDBaa1Z1WVdKc1pXUWdQeUJtZFc1amRHbHZiaUFvYzJsbmJtRjBkWEpsTENCbWJHRm5jeWtnZTF4dUlDQnlaWFIxY200Z2QzUm1SWFpsYm5SekxtTnlaV0YwWlVsdWMzUmhibU5sS0hOcFoyNWhkSFZ5WlN3Z1pteGhaM01wTzF4dWZTQTZJR1oxYm1OMGFXOXVJQ2h6TENCbUtTQjdYRzRnSUhKbGRIVnliaUJ1YjI5d08xeHVmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnNaV0YyWlZOamIzQmxJRDBnZDNSbVJXNWhZbXhsWkNBL0lHWjFibU4wYVc5dUlDaHpZMjl3WlRwWGRHWlRZMjl3WlVadUxDQnlaWFIxY201V1lXeDFaVHBoYm5rcE9tRnVlU0I3WEc0Z0lIZDBabFJ5WVdObExteGxZWFpsVTJOdmNHVW9jMk52Y0dVc0lISmxkSFZ5YmxaaGJIVmxLVHRjYmlBZ2NtVjBkWEp1SUhKbGRIVnlibFpoYkhWbE8xeHVmU0E2SUdaMWJtTjBhVzl1SUNoekxDQjJLU0I3WEc0Z0lISmxkSFZ5YmlCMk8xeHVmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmlaV2RwYmxScGJXVlNZVzVuWlNBOUlIZDBaa1Z1WVdKc1pXUWdQeUJtZFc1amRHbHZiaUFvY21GdVoyVlVlWEJsTENCaFkzUnBiMjRwSUh0Y2JpQWdjbVYwZFhKdUlIZDBabFJ5WVdObExtSmxaMmx1VkdsdFpWSmhibWRsS0hKaGJtZGxWSGx3WlN3Z1lXTjBhVzl1S1R0Y2JuMGdPaUJtZFc1amRHbHZiaUFvZEN3Z1lTa2dlMXh1SUNCeVpYUjFjbTRnYm5Wc2JEdGNibjA3WEc1bGVIQnZjblFnWTI5dWMzUWdaVzVrVkdsdFpWSmhibWRsSUQwZ2QzUm1SVzVoWW14bFpDQS9JR1oxYm1OMGFXOXVJQ2h5WVc1blpTa2dlMXh1SUNCM2RHWlVjbUZqWlM1bGJtUlVhVzFsVW1GdVoyVW9jbUZ1WjJVcE8xeHVmU0E2SUdaMWJtTjBhVzl1SUNoeUtTQjdYRzU5TzF4dUlsMTlcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHt2YXIga2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBvcmlnaW5hbEluc3RhbmNlS2V5ID0ga2V5cy5jcmVhdGUoJ29yaWdpbmFsSW5zdGFuY2UnKTtcblx0dmFyIGNyZWF0aW9uWm9uZUtleSA9IGtleXMuY3JlYXRlKCdjcmVhdGlvblpvbmUnKTtcblx0dmFyIGlzQWN0aXZlS2V5ID0ga2V5cy5jcmVhdGUoJ2lzQWN0aXZlJyk7XG5cdC8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG5cdGZ1bmN0aW9uIHBhdGNoQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdCAgICB2YXIgT3JpZ2luYWxDbGFzcyA9IGdsb2JhbFtjbGFzc05hbWVdO1xuXHQgICAgaWYgKCFPcmlnaW5hbENsYXNzKVxuXHQgICAgICAgIHJldHVybjtcblx0ICAgIGdsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKGZuKSB7XG5cdCAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGdsb2JhbC56b25lLmJpbmQoZm4sIHRydWUpKTtcblx0ICAgICAgICAvLyBSZW1lbWJlciB3aGVyZSB0aGUgY2xhc3Mgd2FzIGluc3RhbnRpYXRlIHRvIGV4ZWN1dGUgdGhlIGVucXVldWVUYXNrIGFuZCBkZXF1ZXVlVGFzayBob29rc1xuXHQgICAgICAgIHRoaXNbY3JlYXRpb25ab25lS2V5XSA9IGdsb2JhbC56b25lO1xuXHQgICAgfTtcblx0ICAgIHZhciBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHsgfSk7XG5cdCAgICBnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XS5kaXNjb25uZWN0LmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgaWYgKHRoaXNbaXNBY3RpdmVLZXldKSB7XG5cdCAgICAgICAgICAgIHRoaXNbY3JlYXRpb25ab25lS2V5XS5kZXF1ZXVlVGFzaygpO1xuXHQgICAgICAgICAgICB0aGlzW2lzQWN0aXZlS2V5XSA9IGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblx0ICAgIGdsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmICghdGhpc1tpc0FjdGl2ZUtleV0pIHtcblx0ICAgICAgICAgICAgdGhpc1tjcmVhdGlvblpvbmVLZXldLmVucXVldWVUYXNrKCk7XG5cdCAgICAgICAgICAgIHRoaXNbaXNBY3RpdmVLZXldID0gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0ub2JzZXJ2ZS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuXHQgICAgfTtcblx0ICAgIHZhciBwcm9wO1xuXHQgICAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG5cdCAgICAgICAgKGZ1bmN0aW9uIChwcm9wKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIGdsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcblx0ICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZ2xvYmFsLnpvbmUuYmluZChmbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0ocHJvcCkpO1xuXHQgICAgfVxuXHR9XG5cdGV4cG9ydHMucGF0Y2hDbGFzcyA9IHBhdGNoQ2xhc3M7XG5cdDtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkxEaXNhYmxlZD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liWFYwWVhScGIyNHRiMkp6WlhKMlpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5c2FXSXZjR0YwWTJndmJYVjBZWFJwYjI0dGIySnpaWEoyWlhJdWRITWlYU3dpYm1GdFpYTWlPbHNpY0dGMFkyaERiR0Z6Y3lKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1NVRkJXU3hKUVVGSkxGZEJRVTBzVTBGQlV5eERRVUZETEVOQlFVRTdRVUZGYUVNc1NVRkJTU3h0UWtGQmJVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1FVRkRNVVFzU1VGQlNTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dEJRVU5zUkN4SlFVRkpMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMEZCUlRGRExHMURRVUZ0UXp0QlFVTnVReXh2UWtGQk1rSXNVMEZCVXp0SlFVTnNRMEVzU1VGQlNVRXNZVUZCWVVFc1IwRkJSMEVzVFVGQlRVRXNRMEZCUTBFc1UwRkJVMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkRkRU5CTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMR0ZCUVdGQkxFTkJRVU5CTzFGQlFVTkJMRTFCUVUxQkxFTkJRVU5CTzBsQlJUTkNRU3hOUVVGTlFTeERRVUZEUVN4VFFVRlRRU3hEUVVGRFFTeEhRVUZIUVN4VlFVRlZRU3hGUVVGRlFUdFJRVU01UWl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4SlFVRkpMR0ZCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UlN3MFJrRkJORVk3VVVGRE5VWXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEZEVNc1EwRkJReXhEUVVGRFFUdEpRVVZHUVN4SlFVRkpRU3hSUVVGUlFTeEhRVUZIUVN4SlFVRkpRU3hoUVVGaFFTeERRVUZEUVN4alFVRmhMRU5CUVVNc1EwRkJRMEVzUTBGQlEwRTdTVUZGYWtSQkxFMUJRVTFCTEVOQlFVTkJMRk5CUVZOQkxFTkJRVU5CTEVOQlFVTkJMRk5CUVZOQkxFTkJRVU5CTEZWQlFWVkJMRWRCUVVkQk8xRkJRM1pETEVsQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVVUZET1VZc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03V1VGRGNFTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU0xUWl4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU5vUWl4RFFVRkRMRU5CUVVOQk8wbEJSVVpCTEUxQlFVMUJMRU5CUVVOQkxGTkJRVk5CTEVOQlFVTkJMRU5CUVVOQkxGTkJRVk5CTEVOQlFVTkJMRTlCUVU5QkxFZEJRVWRCTzFGQlEzQkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03V1VGRGNFTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU16UWl4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRka1lzUTBGQlF5eERRVUZEUVR0SlFVVkdRU3hKUVVGSlFTeEpRVUZKUVN4RFFVRkRRVHRKUVVOVVFTeEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFTeEpRVUZKUVN4SlFVRkpRU3hSUVVGUlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU4wUWtFc1EwRkJRMEVzVlVGQlZVRXNTVUZCU1VFN1dVRkRZaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhUUVVGVExFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRka1FzVFVGQlRTeERRVUZETzFsQlExUXNRMEZCUXp0WlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzcERMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjN2IwSkJRMnhETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdaMEpCUTNKR0xFTkJRVU1zUTBGQlF6dFpRVU5LTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFRpeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RlFVRkZPMjlDUVVOMlJDeEhRVUZITEVWQlFVVXNWVUZCVlN4RlFVRkZPM2RDUVVObUxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlF6ZENMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8zZENRVU42UkN4RFFVRkRPM2RDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZET3pSQ1FVTk9MRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dDNRa0ZEZGtNc1EwRkJRenR2UWtGRFNDeERRVUZETzI5Q1FVTkVMRWRCUVVjc1JVRkJSVHQzUWtGRFNDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRM3BETEVOQlFVTTdhVUpCUTBZc1EwRkJReXhEUVVGRE8xbEJRMHdzUTBGQlF6dFJRVU5JTEVOQlFVTXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3U1VGRFdFRXNRMEZCUTBFN1FVRkRTRUVzUTBGQlEwRTdRVUYyUkdVc2EwSkJRVlVzWVVGMVJIcENMRU5CUVVFN1FVRkJRU3hEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElDb2dZWE1nYTJWNWN5Qm1jbTl0SUNjdUxpOXJaWGx6Snp0Y2JseHVkbUZ5SUc5eWFXZHBibUZzU1c1emRHRnVZMlZMWlhrZ1BTQnJaWGx6TG1OeVpXRjBaU2duYjNKcFoybHVZV3hKYm5OMFlXNWpaU2NwTzF4dWRtRnlJR055WldGMGFXOXVXbTl1WlV0bGVTQTlJR3RsZVhNdVkzSmxZWFJsS0NkamNtVmhkR2x2YmxwdmJtVW5LVHRjYm5aaGNpQnBjMEZqZEdsMlpVdGxlU0E5SUd0bGVYTXVZM0psWVhSbEtDZHBjMEZqZEdsMlpTY3BPMXh1WEc0dkx5QjNjbUZ3SUhOdmJXVWdibUYwYVhabElFRlFTU0J2YmlCZ2QybHVaRzkzWUZ4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhCaGRHTm9RMnhoYzNNb1kyeGhjM05PWVcxbEtTQjdYRzRnSUhaaGNpQlBjbWxuYVc1aGJFTnNZWE56SUQwZ1oyeHZZbUZzVzJOc1lYTnpUbUZ0WlYwN1hHNGdJR2xtSUNnaFQzSnBaMmx1WVd4RGJHRnpjeWtnY21WMGRYSnVPMXh1WEc0Z0lHZHNiMkpoYkZ0amJHRnpjMDVoYldWZElEMGdablZ1WTNScGIyNGdLR1p1S1NCN1hHNGdJQ0FnZEdocGMxdHZjbWxuYVc1aGJFbHVjM1JoYm1ObFMyVjVYU0E5SUc1bGR5QlBjbWxuYVc1aGJFTnNZWE56S0dkc2IySmhiQzU2YjI1bExtSnBibVFvWm00c0lIUnlkV1VwS1R0Y2JpQWdJQ0F2THlCU1pXMWxiV0psY2lCM2FHVnlaU0IwYUdVZ1kyeGhjM01nZDJGeklHbHVjM1JoYm5ScFlYUmxJSFJ2SUdWNFpXTjFkR1VnZEdobElHVnVjWFZsZFdWVVlYTnJJR0Z1WkNCa1pYRjFaWFZsVkdGemF5Qm9iMjlyYzF4dUlDQWdJSFJvYVhOYlkzSmxZWFJwYjI1YWIyNWxTMlY1WFNBOUlHZHNiMkpoYkM1NmIyNWxPMXh1SUNCOU8xeHVYRzRnSUhaaGNpQnBibk4wWVc1alpTQTlJRzVsZHlCUGNtbG5hVzVoYkVOc1lYTnpLR1oxYm1OMGFXOXVJQ2dwSUh0OUtUdGNibHh1SUNCbmJHOWlZV3hiWTJ4aGMzTk9ZVzFsWFM1d2NtOTBiM1I1Y0dVdVpHbHpZMjl1Ym1WamRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IyWVhJZ2NtVnpkV3gwSUQwZ2RHaHBjMXR2Y21sbmFXNWhiRWx1YzNSaGJtTmxTMlY1WFM1a2FYTmpiMjV1WldOMExtRndjR3g1S0hSb2FYTmJiM0pwWjJsdVlXeEpibk4wWVc1alpVdGxlVjBzSUdGeVozVnRaVzUwY3lrN1hHNGdJQ0FnYVdZZ0tIUm9hWE5iYVhOQlkzUnBkbVZMWlhsZEtTQjdYRzRnSUNBZ0lDQjBhR2x6VzJOeVpXRjBhVzl1V205dVpVdGxlVjB1WkdWeGRXVjFaVlJoYzJzb0tUdGNiaUFnSUNBZ0lIUm9hWE5iYVhOQlkzUnBkbVZMWlhsZElEMGdabUZzYzJVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNGdJSDA3WEc1Y2JpQWdaMnh2WW1Gc1cyTnNZWE56VG1GdFpWMHVjSEp2ZEc5MGVYQmxMbTlpYzJWeWRtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6VzJselFXTjBhWFpsUzJWNVhTa2dlMXh1SUNBZ0lDQWdkR2hwYzF0amNtVmhkR2x2YmxwdmJtVkxaWGxkTG1WdWNYVmxkV1ZVWVhOcktDazdYRzRnSUNBZ0lDQjBhR2x6VzJselFXTjBhWFpsUzJWNVhTQTlJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6VzI5eWFXZHBibUZzU1c1emRHRnVZMlZMWlhsZExtOWljMlZ5ZG1VdVlYQndiSGtvZEdocGMxdHZjbWxuYVc1aGJFbHVjM1JoYm1ObFMyVjVYU3dnWVhKbmRXMWxiblJ6S1R0Y2JpQWdmVHRjYmx4dUlDQjJZWElnY0hKdmNEdGNiaUFnWm05eUlDaHdjbTl3SUdsdUlHbHVjM1JoYm1ObEtTQjdYRzRnSUNBZ0tHWjFibU4wYVc5dUlDaHdjbTl3S1NCN1hHNGdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlHZHNiMkpoYkZ0amJHRnpjMDVoYldWZExuQnliM1J2ZEhsd1pTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQnBibk4wWVc1alpWdHdjbTl3WFNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnSUNCbmJHOWlZV3hiWTJ4aGMzTk9ZVzFsWFM1d2NtOTBiM1I1Y0dWYmNISnZjRjBnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhOYmIzSnBaMmx1WVd4SmJuTjBZVzVqWlV0bGVWMWJjSEp2Y0YwdVlYQndiSGtvZEdocGMxdHZjbWxuYVc1aGJFbHVjM1JoYm1ObFMyVjVYU3dnWVhKbmRXMWxiblJ6S1R0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2huYkc5aVlXeGJZMnhoYzNOT1lXMWxYUzV3Y205MGIzUjVjR1VzSUhCeWIzQXNJSHRjYmlBZ0lDQWdJQ0FnSUNCelpYUTZJR1oxYm1OMGFXOXVJQ2htYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCbWJpQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMjl5YVdkcGJtRnNTVzV6ZEdGdVkyVkxaWGxkVzNCeWIzQmRJRDBnWjJ4dlltRnNMbnB2Ym1VdVltbHVaQ2htYmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzI5eWFXZHBibUZzU1c1emRHRnVZMlZMWlhsZFczQnliM0JkSUQwZ1ptNDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6VzI5eWFXZHBibUZzU1c1emRHRnVZMlZMWlhsZFczQnliM0JkTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2h3Y205d0tTazdYRzRnSUgxY2JuMDdYRzRpWFgwPVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiAxNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHQvLyBtaWdodCBuZWVkIHNpbWlsYXIgZm9yIG9iamVjdC5mcmVlemVcblx0Ly8gaSByZWdyZXQgbm90aGluZ1xuXHR2YXIgX2RlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXHR2YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cdHZhciBfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblx0dmFyIHVuY29uZmlndXJhYmxlc0tleSA9IGtleXMuY3JlYXRlKCd1bmNvbmZpZ3VyYWJsZXMnKTtcblx0ZnVuY3Rpb24gYXBwbHkoKSB7XG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCBkZXNjKSB7XG5cdCAgICAgICAgaWYgKGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgYXNzaWduIHRvIHJlYWQgb25seSBwcm9wZXJ0eSBcXCcnICsgcHJvcCArICdcXCcgb2YgJyArIG9iaik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJykge1xuXHQgICAgICAgICAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuXHQgICAgfTtcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwgcHJvcHMpIHtcblx0ICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuXHQgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBwcm9wc1twcm9wXSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgcmV0dXJuIG9iajtcblx0ICAgIH07XG5cdCAgICBPYmplY3QuY3JlYXRlID0gZnVuY3Rpb24gKG9iaiwgcHJvdG8pIHtcblx0ICAgICAgICBpZiAodHlwZW9mIHByb3RvID09PSAnb2JqZWN0Jykge1xuXHQgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm90bykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuXHQgICAgICAgICAgICAgICAgcHJvdG9bcHJvcF0gPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIHByb3RvW3Byb3BdKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBfY3JlYXRlKG9iaiwgcHJvdG8pO1xuXHQgICAgfTtcblx0ICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XG5cdCAgICAgICAgdmFyIGRlc2MgPSBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG5cdCAgICAgICAgaWYgKGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuXHQgICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gZGVzYztcblx0ICAgIH07XG5cdH1cblx0ZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuXHQ7XG5cdGZ1bmN0aW9uIF9yZWRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYykge1xuXHQgICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG5cdCAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG5cdH1cblx0ZXhwb3J0cy5fcmVkZWZpbmVQcm9wZXJ0eSA9IF9yZWRlZmluZVByb3BlcnR5O1xuXHQ7XG5cdGZ1bmN0aW9uIGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSB7XG5cdCAgICByZXR1cm4gb2JqICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdO1xuXHR9XG5cdGZ1bmN0aW9uIHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYykge1xuXHQgICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuXHQgICAgaWYgKCFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHQgICAgICAgIGlmICghb2JqW3VuY29uZmlndXJhYmxlc0tleV0pIHtcblx0ICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KG9iaiwgdW5jb25maWd1cmFibGVzS2V5LCB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZToge30gfSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdID0gdHJ1ZTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBkZXNjO1xuXHR9XG5cdC8vIyBzb3VyY2VNYXBwaW5nVVJMRGlzYWJsZWQ9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdWbWFXNWxMWEJ5YjNCbGNuUjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmJHbGlMM0JoZEdOb0wyUmxabWx1WlMxd2NtOXdaWEowZVM1MGN5SmRMQ0p1WVcxbGN5STZXeUpoY0hCc2VTSXNJbDl5WldSbFptbHVaVkJ5YjNCbGNuUjVJaXdpYVhOVmJtTnZibVpwWjNWeVlXSnNaU0lzSW5KbGQzSnBkR1ZFWlhOamNtbHdkRzl5SWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4SlFVRlpMRWxCUVVrc1YwRkJUU3hUUVVGVExFTkJRVU1zUTBGQlFUdEJRVVZvUXl4MVEwRkJkVU03UVVGRGRrTXNiVUpCUVcxQ08wRkJSVzVDTEVsQlFVa3NaVUZCWlN4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU03UVVGRE5VTXNTVUZCU1N4NVFrRkJlVUlzUjBGQlJ5eE5RVUZOTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU03UVVGRGFFVXNTVUZCU1N4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU0xUWl4SlFVRkpMR3RDUVVGclFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0QlFVVjRSRHRKUVVORlFTeE5RVUZOUVN4RFFVRkRRU3hqUVVGalFTeEhRVUZIUVN4VlFVRlZRU3hIUVVGSFFTeEZRVUZGUVN4SlFVRkpRU3hGUVVGRlFTeEpRVUZKUVR0UlFVTXZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzU1VGQlNTeFRRVUZUTEVOQlFVTXNkME5CUVhkRExFZEJRVWNzU1VGQlNTeEhRVUZITEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVONFJpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZWtJc1NVRkJTU3hIUVVGSExHbENRVUZwUWl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETlVNc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRMRU5CUVVOQk8wbEJSVVpCTEUxQlFVMUJMRU5CUVVOQkxHZENRVUZuUWtFc1IwRkJSMEVzVlVGQlZVRXNSMEZCUjBFc1JVRkJSVUVzUzBGQlMwRTdVVUZETlVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hKUVVGSk8xbEJRM1pETEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1JDeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRFlpeERRVUZETEVOQlFVTkJPMGxCUlVaQkxFMUJRVTFCTEVOQlFVTkJMRTFCUVUxQkxFZEJRVWRCTEZWQlFWVkJMRWRCUVVkQkxFVkJRVVZCTEV0QlFVdEJPMUZCUTJ4RExFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNTMEZCU3l4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE9VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4SlFVRkpPMmRDUVVOMlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhSQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTNRaXhEUVVGRExFTkJRVU5CTzBsQlJVWkJMRTFCUVUxQkxFTkJRVU5CTEhkQ1FVRjNRa0VzUjBGQlIwRXNWVUZCVlVFc1IwRkJSMEVzUlVGQlJVRXNTVUZCU1VFN1VVRkRia1FzU1VGQlNTeEpRVUZKTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJoRUxFVkJRVVVzUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRU1zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkROVUlzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkRaQ3hEUVVGRExFTkJRVU5CTzBGQlEwcEJMRU5CUVVOQk8wRkJiRU5sTEdGQlFVc3NVVUZyUTNCQ0xFTkJRVUU3UVVGQlFTeERRVUZETzBGQlJVWXNNa0pCUVd0RExFZEJRVWNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1R0SlFVTXZRME1zU1VGQlNVRXNSMEZCUjBFc2FVSkJRV2xDUVN4RFFVRkRRU3hIUVVGSFFTeEZRVUZGUVN4SlFVRkpRU3hGUVVGRlFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU14UTBFc1RVRkJUVUVzUTBGQlEwRXNaVUZCWlVFc1EwRkJRMEVzUjBGQlIwRXNSVUZCUlVFc1NVRkJTVUVzUlVGQlJVRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRTdRVUZETVVOQkxFTkJRVU5CTzBGQlNHVXNlVUpCUVdsQ0xHOUNRVWRvUXl4RFFVRkJPMEZCUVVFc1EwRkJRenRCUVVWR0xEQkNRVUV5UWl4SFFVRkhMRVZCUVVVc1NVRkJTVHRKUVVOc1EwTXNUVUZCVFVFc1EwRkJRMEVzUjBGQlIwRXNTVUZCU1VFc1IwRkJSMEVzUTBGQlEwRXNhMEpCUVd0Q1FTeERRVUZEUVN4SlFVRkpRU3hIUVVGSFFTeERRVUZEUVN4clFrRkJhMEpCTEVOQlFVTkJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQk8wRkJRM3BGUVN4RFFVRkRRVHRCUVVWRUxESkNRVUUwUWl4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWs3U1VGRGVrTkRMRWxCUVVsQkxFTkJRVU5CTEZsQlFWbEJMRWRCUVVkQkxFbEJRVWxCTEVOQlFVTkJPMGxCUTNwQ1FTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeFpRVUZaUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0UlFVTjJRa0VzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzYTBKQlFXdENRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU0zUWtFc1pVRkJaVUVzUTBGQlEwRXNSMEZCUjBFc1JVRkJSVUVzYTBKQlFXdENRU3hGUVVGRlFTeEZRVUZGUVN4UlFVRlJRU3hGUVVGRlFTeEpRVUZKUVN4RlFVRkZRU3hMUVVGTFFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRVHRSUVVNeFJVRXNRMEZCUTBFN1VVRkRSRUVzUjBGQlIwRXNRMEZCUTBFc2EwSkJRV3RDUVN4RFFVRkRRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hIUVVGSFFTeEpRVUZKUVN4RFFVRkRRVHRKUVVOMlEwRXNRMEZCUTBFN1NVRkRSRUVzVFVGQlRVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRTdRVUZEWkVFc1EwRkJRMEVpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QnJaWGx6SUdaeWIyMGdKeTR1TDJ0bGVYTW5PMXh1WEc0dkx5QnRhV2RvZENCdVpXVmtJSE5wYldsc1lYSWdabTl5SUc5aWFtVmpkQzVtY21WbGVtVmNiaTh2SUdrZ2NtVm5jbVYwSUc1dmRHaHBibWRjYmx4dWRtRnlJRjlrWldacGJtVlFjbTl3WlhKMGVTQTlJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVR0Y2JuWmhjaUJmWjJWMFQzZHVVSEp2Y0dWeWRIbEVaWE5qY21sd2RHOXlJRDBnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNqdGNiblpoY2lCZlkzSmxZWFJsSUQwZ1QySnFaV04wTG1OeVpXRjBaVHRjYm5aaGNpQjFibU52Ym1acFozVnlZV0pzWlhOTFpYa2dQU0JyWlhsekxtTnlaV0YwWlNnbmRXNWpiMjVtYVdkMWNtRmliR1Z6SnlrN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmhjSEJzZVNncElIdGNiaUFnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUlEMGdablZ1WTNScGIyNGdLRzlpYWl3Z2NISnZjQ3dnWkdWell5a2dlMXh1SUNBZ0lHbG1JQ2hwYzFWdVkyOXVabWxuZFhKaFlteGxLRzlpYWl3Z2NISnZjQ2twSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owTmhibTV2ZENCaGMzTnBaMjRnZEc4Z2NtVmhaQ0J2Ym14NUlIQnliM0JsY25SNUlGeGNKeWNnS3lCd2NtOXdJQ3NnSjF4Y0p5QnZaaUFuSUNzZ2IySnFLVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSEJ5YjNBZ0lUMDlJQ2R3Y205MGIzUjVjR1VuS1NCN1hHNGdJQ0FnSUNCa1pYTmpJRDBnY21WM2NtbDBaVVJsYzJOeWFYQjBiM0lvYjJKcUxDQndjbTl3TENCa1pYTmpLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUY5a1pXWnBibVZRY205d1pYSjBlU2h2WW1vc0lIQnliM0FzSUdSbGMyTXBPMXh1SUNCOU8xeHVYRzRnSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGFXVnpJRDBnWm5WdVkzUnBiMjRnS0c5aWFpd2djSEp2Y0hNcElIdGNiaUFnSUNCUFltcGxZM1F1YTJWNWN5aHdjbTl3Y3lrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2NISnZjQ2tnZTF4dUlDQWdJQ0FnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHOWlhaXdnY0hKdmNDd2djSEp2Y0hOYmNISnZjRjBwTzF4dUlDQWdJSDBwTzF4dUlDQWdJSEpsZEhWeWJpQnZZbW83WEc0Z0lIMDdYRzVjYmlBZ1QySnFaV04wTG1OeVpXRjBaU0E5SUdaMWJtTjBhVzl1SUNodlltb3NJSEJ5YjNSdktTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQndjbTkwYnlBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJRTlpYW1WamRDNXJaWGx6S0hCeWIzUnZLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h3Y205d0tTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNSdlczQnliM0JkSUQwZ2NtVjNjbWwwWlVSbGMyTnlhWEIwYjNJb2IySnFMQ0J3Y205d0xDQndjbTkwYjF0d2NtOXdYU2s3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlGOWpjbVZoZEdVb2IySnFMQ0J3Y205MGJ5azdYRzRnSUgwN1hHNWNiaUFnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNpQTlJR1oxYm1OMGFXOXVJQ2h2WW1vc0lIQnliM0FwSUh0Y2JpQWdJQ0IyWVhJZ1pHVnpZeUE5SUY5blpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0lvYjJKcUxDQndjbTl3S1R0Y2JpQWdJQ0JwWmlBb2FYTlZibU52Ym1acFozVnlZV0pzWlNodlltb3NJSEJ5YjNBcEtTQjdYRzRnSUNBZ0lDQmtaWE5qTG1OdmJtWnBaM1Z5WVdKc1pTQTlJR1poYkhObE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdaR1Z6WXp0Y2JpQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmZjbVZrWldacGJtVlFjbTl3WlhKMGVTaHZZbW9zSUhCeWIzQXNJR1JsYzJNcElIdGNiaUFnWkdWell5QTlJSEpsZDNKcGRHVkVaWE5qY21sd2RHOXlLRzlpYWl3Z2NISnZjQ3dnWkdWell5azdYRzRnSUhKbGRIVnliaUJmWkdWbWFXNWxVSEp2Y0dWeWRIa29iMkpxTENCd2NtOXdMQ0JrWlhOaktUdGNibjA3WEc1Y2JtWjFibU4wYVc5dUlHbHpWVzVqYjI1bWFXZDFjbUZpYkdVZ0tHOWlhaXdnY0hKdmNDa2dlMXh1SUNCeVpYUjFjbTRnYjJKcUlDWW1JRzlpYWx0MWJtTnZibVpwWjNWeVlXSnNaWE5MWlhsZElDWW1JRzlpYWx0MWJtTnZibVpwWjNWeVlXSnNaWE5MWlhsZFczQnliM0JkTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlhkeWFYUmxSR1Z6WTNKcGNIUnZjaUFvYjJKcUxDQndjbTl3TENCa1pYTmpLU0I3WEc0Z0lHUmxjMk11WTI5dVptbG5kWEpoWW14bElEMGdkSEoxWlR0Y2JpQWdhV1lnS0NGa1pYTmpMbU52Ym1acFozVnlZV0pzWlNrZ2UxeHVJQ0FnSUdsbUlDZ2hiMkpxVzNWdVkyOXVabWxuZFhKaFlteGxjMHRsZVYwcElIdGNiaUFnSUNBZ0lGOWtaV1pwYm1WUWNtOXdaWEowZVNodlltb3NJSFZ1WTI5dVptbG5kWEpoWW14bGMwdGxlU3dnZXlCM2NtbDBZV0pzWlRvZ2RISjFaU3dnZG1Gc2RXVTZJSHQ5SUgwcE8xeHVJQ0FnSUgxY2JpQWdJQ0J2WW1wYmRXNWpiMjVtYVdkMWNtRmliR1Z6UzJWNVhWdHdjbTl3WFNBOUlIUnlkV1U3WEc0Z0lIMWNiaUFnY21WMGRYSnVJR1JsYzJNN1hHNTlYRzVjYmx4dUlsMTlcblxuLyoqKi8gfSxcbi8qIDE1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7dmFyIGRlZmluZV9wcm9wZXJ0eV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdGZ1bmN0aW9uIGFwcGx5KCkge1xuXHQgICAgaWYgKHV0aWxzLmlzV2ViV29ya2VyKCkgfHwgdXRpbHMuaXNOb2RlKCkgfHwgISgncmVnaXN0ZXJFbGVtZW50JyBpbiBnbG9iYWwuZG9jdW1lbnQpKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgdmFyIF9yZWdpc3RlckVsZW1lbnQgPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ7XG5cdCAgICB2YXIgY2FsbGJhY2tzID0gW1xuXHQgICAgICAgICdjcmVhdGVkQ2FsbGJhY2snLFxuXHQgICAgICAgICdhdHRhY2hlZENhbGxiYWNrJyxcblx0ICAgICAgICAnZGV0YWNoZWRDYWxsYmFjaycsXG5cdCAgICAgICAgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaydcblx0ICAgIF07XG5cdCAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSwgb3B0cykge1xuXHQgICAgICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG5cdCAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgICAgICAgICAgaWYgKG9wdHMucHJvdG90eXBlLmhhc093blByb3BlcnR5KGNhbGxiYWNrKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2spO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGdsb2JhbC56b25lLmJpbmQoZGVzY3JpcHRvci52YWx1ZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZV9wcm9wZXJ0eV8xLl9yZWRlZmluZVByb3BlcnR5KG9wdHMucHJvdG90eXBlLCBjYWxsYmFjaywgZGVzY3JpcHRvcik7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnByb3RvdHlwZVtjYWxsYmFja10gPSBnbG9iYWwuem9uZS5iaW5kKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgb3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdID0gZ2xvYmFsLnpvbmUuYmluZChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIF9yZWdpc3RlckVsZW1lbnQuYXBwbHkoZG9jdW1lbnQsIFtuYW1lLCBvcHRzXSk7XG5cdCAgICB9O1xuXHR9XG5cdGV4cG9ydHMuYXBwbHkgPSBhcHBseTtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkxEaXNhYmxlZD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZuYVhOMFpYSXRaV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOXdZWFJqYUM5eVpXZHBjM1JsY2kxbGJHVnRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJJbUZ3Y0d4NUlsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeG5RMEZCWjBNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUVR0QlFVTndSQ3hKUVVGWkxFdEJRVXNzVjBGQlRTeFZRVUZWTEVOQlFVTXNRMEZCUVR0QlFVVnNRenRKUVVORlFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeExRVUZMUVN4RFFVRkRRU3hYUVVGWFFTeEZRVUZGUVN4SlFVRkpRU3hMUVVGTFFTeERRVUZEUVN4TlFVRk5RU3hGUVVGRlFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFTeHBRa0ZCYVVKQkxFbEJRVlZCTEUxQlFVOUJMRU5CUVVOQkxGRkJRVkZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMUZCUXpWR1FTeE5RVUZOUVN4RFFVRkRRVHRKUVVOVVFTeERRVUZEUVR0SlFVVkVRU3hKUVVGSlFTeG5Ra0ZCWjBKQkxFZEJRVk5CTEZGQlFWTkJMRU5CUVVOQkxHVkJRV1ZCTEVOQlFVTkJPMGxCUTNaRVFTeEpRVUZKUVN4VFFVRlRRU3hIUVVGSFFUdFJRVU5rUVN4cFFrRkJhVUpCTzFGQlEycENRU3hyUWtGQmEwSkJPMUZCUTJ4Q1FTeHJRa0ZCYTBKQk8xRkJRMnhDUVN3d1FrRkJNRUpCTzB0QlF6TkNRU3hEUVVGRFFUdEpRVVZKUVN4UlFVRlRRU3hEUVVGRFFTeGxRVUZsUVN4SFFVRkhRU3hWUVVGVlFTeEpRVUZKUVN4RlFVRkZRU3hKUVVGSlFUdFJRVU53UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNMElzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRkZCUVZFN1owSkJRMnhETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE5VTXNTVUZCU1N4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdiMEpCUXpORkxFVkJRVVVzUTBGQlF5eERRVUZETEZWQlFWVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dDNRa0ZEYmtNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdkMEpCUTNSRUxHMURRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzVVVGQlVTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMjlDUVVNeFJDeERRVUZETzI5Q1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8zZENRVU5PTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVONFJTeERRVUZETzJkQ1FVTklMRU5CUVVNN1owSkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOd1F5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRlRVVzUTBGQlF6dFpRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFUXNRMEZCUXl4RFFVRkRRVHRCUVVOS1FTeERRVUZEUVR0QlFXaERaU3hoUVVGTExGRkJaME53UWl4RFFVRkJJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRmY21Wa1pXWnBibVZRY205d1pYSjBlWDBnWm5KdmJTQW5MaTlrWldacGJtVXRjSEp2Y0dWeWRIa25PMXh1YVcxd2IzSjBJQ29nWVhNZ2RYUnBiSE1nWm5KdmJTQW5MaTR2ZFhScGJITW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVhCd2JIa29LU0I3WEc0Z0lHbG1JQ2gxZEdsc2N5NXBjMWRsWWxkdmNtdGxjaWdwSUh4OElIVjBhV3h6TG1selRtOWtaU2dwSUh4OElDRW9KM0psWjJsemRHVnlSV3hsYldWdWRDY2dhVzRnS0R4aGJuaytaMnh2WW1Gc0tTNWtiMk4xYldWdWRDa3BJSHRjYmlBZ0lDQnlaWFIxY200N1hHNGdJSDFjYmx4dUlDQjJZWElnWDNKbFoybHpkR1Z5Uld4bGJXVnVkQ0E5SUNnOFlXNTVQbVJ2WTNWdFpXNTBLUzV5WldkcGMzUmxja1ZzWlcxbGJuUTdYRzRnSUhaaGNpQmpZV3hzWW1GamEzTWdQU0JiWEc0Z0lDQWdKMk55WldGMFpXUkRZV3hzWW1GamF5Y3NYRzRnSUNBZ0oyRjBkR0ZqYUdWa1EyRnNiR0poWTJzbkxGeHVJQ0FnSUNka1pYUmhZMmhsWkVOaGJHeGlZV05ySnl4Y2JpQWdJQ0FuWVhSMGNtbGlkWFJsUTJoaGJtZGxaRU5oYkd4aVlXTnJKMXh1SUNCZE8xeHVYRzRnSUNnOFlXNTVQbVJ2WTNWdFpXNTBLUzV5WldkcGMzUmxja1ZzWlcxbGJuUWdQU0JtZFc1amRHbHZiaUFvYm1GdFpTd2diM0IwY3lrZ2UxeHVJQ0FnSUdsbUlDaHZjSFJ6SUNZbUlHOXdkSE11Y0hKdmRHOTBlWEJsS1NCN1hHNGdJQ0FnSUNCallXeHNZbUZqYTNNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb1kyRnNiR0poWTJzcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0c5d2RITXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUtHTmhiR3hpWVdOcktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmtaWE5qY21sd2RHOXlJRDBnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNpaHZjSFJ6TG5CeWIzUnZkSGx3WlN3Z1kyRnNiR0poWTJzcE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoa1pYTmpjbWx3ZEc5eUlDWW1JR1JsYzJOeWFYQjBiM0l1ZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxjMk55YVhCMGIzSXVkbUZzZFdVZ1BTQm5iRzlpWVd3dWVtOXVaUzVpYVc1a0tHUmxjMk55YVhCMGIzSXVkbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWDNKbFpHVm1hVzVsVUhKdmNHVnlkSGtvYjNCMGN5NXdjbTkwYjNSNWNHVXNJR05oYkd4aVlXTnJMQ0JrWlhOamNtbHdkRzl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNCMGN5NXdjbTkwYjNSNWNHVmJZMkZzYkdKaFkydGRJRDBnWjJ4dlltRnNMbnB2Ym1VdVltbHVaQ2h2Y0hSekxuQnliM1J2ZEhsd1pWdGpZV3hzWW1GamExMHBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHZjSFJ6TG5CeWIzUnZkSGx3WlZ0allXeHNZbUZqYTEwcElIdGNiaUFnSUNBZ0lDQWdJQ0J2Y0hSekxuQnliM1J2ZEhsd1pWdGpZV3hzWW1GamExMGdQU0JuYkc5aVlXd3VlbTl1WlM1aWFXNWtLRzl3ZEhNdWNISnZkRzkwZVhCbFcyTmhiR3hpWVdOclhTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmZjbVZuYVhOMFpYSkZiR1Z0Wlc1MExtRndjR3g1S0dSdlkzVnRaVzUwTENCYmJtRnRaU3dnYjNCMGMxMHBPMXh1SUNCOU8xeHVmVnh1SWwxOVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiAxNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgeyd1c2Ugc3RyaWN0Jztcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0ZnVuY3Rpb24gYXBwbHkoKSB7XG5cdCAgICAvLyBwYXRjaGVkIHByb3BlcnRpZXMgZGVwZW5kIG9uIGFkZEV2ZW50TGlzdGVuZXIsIHNvIHRoaXMgbmVlZHMgdG8gY29tZSBmaXJzdFxuXHQgICAgaWYgKGdsb2JhbC5FdmVudFRhcmdldCkge1xuXHQgICAgICAgIHV0aWxzLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKGdsb2JhbC5FdmVudFRhcmdldC5wcm90b3R5cGUpO1xuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdCAgICAgICAgdmFyIGFwaXMgPSBbXG5cdCAgICAgICAgICAgICdBcHBsaWNhdGlvbkNhY2hlJyxcblx0ICAgICAgICAgICAgJ0V2ZW50U291cmNlJyxcblx0ICAgICAgICAgICAgJ0ZpbGVSZWFkZXInLFxuXHQgICAgICAgICAgICAnSW5wdXRNZXRob2RDb250ZXh0Jyxcblx0ICAgICAgICAgICAgJ01lZGlhQ29udHJvbGxlcicsXG5cdCAgICAgICAgICAgICdNZXNzYWdlUG9ydCcsXG5cdCAgICAgICAgICAgICdOb2RlJyxcblx0ICAgICAgICAgICAgJ1BlcmZvcm1hbmNlJyxcblx0ICAgICAgICAgICAgJ1NWR0VsZW1lbnRJbnN0YW5jZScsXG5cdCAgICAgICAgICAgICdTaGFyZWRXb3JrZXInLFxuXHQgICAgICAgICAgICAnVGV4dFRyYWNrJyxcblx0ICAgICAgICAgICAgJ1RleHRUcmFja0N1ZScsXG5cdCAgICAgICAgICAgICdUZXh0VHJhY2tMaXN0Jyxcblx0ICAgICAgICAgICAgJ1dlYktpdE5hbWVkRmxvdycsXG5cdCAgICAgICAgICAgICdXb3JrZXInLFxuXHQgICAgICAgICAgICAnV29ya2VyR2xvYmFsU2NvcGUnLFxuXHQgICAgICAgICAgICAnWE1MSHR0cFJlcXVlc3QnLFxuXHQgICAgICAgICAgICAnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCcsXG5cdCAgICAgICAgICAgICdYTUxIdHRwUmVxdWVzdFVwbG9hZCdcblx0ICAgICAgICBdO1xuXHQgICAgICAgIGFwaXMuZm9yRWFjaChmdW5jdGlvbiAoYXBpKSB7XG5cdCAgICAgICAgICAgIHZhciBwcm90byA9IGdsb2JhbFthcGldICYmIGdsb2JhbFthcGldLnByb3RvdHlwZTtcblx0ICAgICAgICAgICAgLy8gU29tZSBicm93c2VycyBlLmcuIEFuZHJvaWQgNC4zJ3MgZG9uJ3QgYWN0dWFsbHkgaW1wbGVtZW50XG5cdCAgICAgICAgICAgIC8vIHRoZSBFdmVudFRhcmdldCBtZXRob2RzIGZvciBhbGwgb2YgdGhlc2UgZS5nLiBGaWxlUmVhZGVyLlxuXHQgICAgICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHRoZXJlIGlzIG5vdGhpbmcgdG8gcGF0Y2guXG5cdCAgICAgICAgICAgIGlmIChwcm90byAmJiBwcm90by5hZGRFdmVudExpc3RlbmVyKSB7XG5cdCAgICAgICAgICAgICAgICB1dGlscy5wYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhwcm90byk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgICAvLyBQYXRjaCB0aGUgbWV0aG9kcyBvbiBgd2luZG93YCBpbnN0ZWFkIG9mIGBXaW5kb3cucHJvdG90eXBlYFxuXHQgICAgICAgIC8vIGBXaW5kb3dgIGlzIG5vdCBhY2Nlc3NpYmxlIG9uIEFuZHJvaWQgNC4zXG5cdCAgICAgICAgaWYgKHR5cGVvZiAod2luZG93KSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgICAgdXRpbHMucGF0Y2hFdmVudFRhcmdldE1ldGhvZHMod2luZG93KTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblx0ZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuXHQvLyMgc291cmNlTWFwcGluZ1VSTERpc2FibGVkPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYWmxiblF0ZEdGeVoyVjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmJHbGlMM0JoZEdOb0wyVjJaVzUwTFhSaGNtZGxkQzUwY3lKZExDSnVZVzFsY3lJNld5SmhjSEJzZVNKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1dVRkJXU3hEUVVGRE8wRkJSV0lzU1VGQldTeExRVUZMTEZkQlFVMHNWVUZCVlN4RFFVRkRMRU5CUVVFN1FVRkZiRU03U1VGRFJVRXNOa1ZCUVRaRlFUdEpRVU0zUlVFc1JVRkJSVUVzUTBGQlEwRXNRMEZCVDBFc1RVRkJUMEVzUTBGQlEwRXNWMEZCVjBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1VVRkRPVUpCTEV0QlFVdEJMRU5CUVVOQkxIVkNRVUYxUWtFc1EwRkJUMEVzVFVGQlQwRXNRMEZCUTBFc1YwRkJWMEVzUTBGQlEwRXNVMEZCVTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZKY2tWQkxFTkJRVU5CTzBsQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJPMUZCUTA1QkxFbEJRVWxCTEVsQlFVbEJMRWRCUVVkQk8xbEJRMVJCTEd0Q1FVRnJRa0U3V1VGRGJFSkJMR0ZCUVdGQk8xbEJRMkpCTEZsQlFWbEJPMWxCUTFwQkxHOUNRVUZ2UWtFN1dVRkRjRUpCTEdsQ1FVRnBRa0U3V1VGRGFrSkJMR0ZCUVdGQk8xbEJRMkpCTEUxQlFVMUJPMWxCUTA1QkxHRkJRV0ZCTzFsQlEySkJMRzlDUVVGdlFrRTdXVUZEY0VKQkxHTkJRV05CTzFsQlEyUkJMRmRCUVZkQk8xbEJRMWhCTEdOQlFXTkJPMWxCUTJSQkxHVkJRV1ZCTzFsQlEyWkJMR2xDUVVGcFFrRTdXVUZEYWtKQkxGRkJRVkZCTzFsQlExSkJMRzFDUVVGdFFrRTdXVUZEYmtKQkxHZENRVUZuUWtFN1dVRkRhRUpCTERKQ1FVRXlRa0U3V1VGRE0wSkJMSE5DUVVGelFrRTdVMEZEZGtKQkxFTkJRVU5CTzFGQlJVWkJMRWxCUVVsQkxFTkJRVU5CTEU5QlFVOUJMRU5CUVVOQkxGVkJRVk5CTEVkQlFVZEJPMWxCUTNaQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUldwRUxEUkVRVUUwUkR0WlFVTTFSQ3cwUkVGQk5FUTdXVUZETlVRc01rTkJRVEpETzFsQlF6TkRMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTndReXhMUVVGTExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGRrTXNRMEZCUXp0UlFVTklMRU5CUVVNc1EwRkJRMEVzUTBGQlEwRTdVVUZGU0VFc09FUkJRVGhFUVR0UlFVTTVSRUVzTkVOQlFUUkRRVHRSUVVNMVEwRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNUMEZCVFVFc1EwRkJRMEVzVFVGQlRVRXNRMEZCUTBFc1MwRkJTMEVzVjBGQlYwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZEYmtOQkxFdEJRVXRCTEVOQlFVTkJMSFZDUVVGMVFrRXNRMEZCUTBFc1RVRkJUVUVzUTBGQlEwRXNRMEZCUTBFN1VVRkRlRU5CTEVOQlFVTkJPMGxCUTBoQkxFTkJRVU5CTzBGQlEwaEJMRU5CUVVOQk8wRkJMME5sTEdGQlFVc3NVVUVyUTNCQ0xFTkJRVUVpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJbmRYTmxJSE4wY21samRDYzdYRzVjYm1sdGNHOXlkQ0FxSUdGeklIVjBhV3h6SUdaeWIyMGdKeTR1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdGd2NHeDVLQ2tnZTF4dUlDQXZMeUJ3WVhSamFHVmtJSEJ5YjNCbGNuUnBaWE1nWkdWd1pXNWtJRzl1SUdGa1pFVjJaVzUwVEdsemRHVnVaWElzSUhOdklIUm9hWE1nYm1WbFpITWdkRzhnWTI5dFpTQm1hWEp6ZEZ4dUlDQnBaaUFvS0R4aGJuaytaMnh2WW1Gc0tTNUZkbVZ1ZEZSaGNtZGxkQ2tnZTF4dUlDQWdJSFYwYVd4ekxuQmhkR05vUlhabGJuUlVZWEpuWlhSTlpYUm9iMlJ6S0NnOFlXNTVQbWRzYjJKaGJDa3VSWFpsYm5SVVlYSm5aWFF1Y0hKdmRHOTBlWEJsS1R0Y2JseHVJQ0F2THlCT2IzUmxPaUJGZG1WdWRGUmhjbWRsZENCcGN5QnViM1FnWVhaaGFXeGhZbXhsSUdsdUlHRnNiQ0JpY205M2MyVnljeXhjYmlBZ0x5OGdhV1lnYVhRbmN5QnViM1FnWVhaaGFXeGhZbXhsTENCM1pTQnBibk4wWldGa0lIQmhkR05vSUhSb1pTQkJVRWx6SUdsdUlIUm9aU0JKUkV3Z2RHaGhkQ0JwYm1obGNtbDBJR1p5YjIwZ1JYWmxiblJVWVhKblpYUmNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjJZWElnWVhCcGN5QTlJRnRjYmlBZ0lDQWdJQ2RCY0hCc2FXTmhkR2x2YmtOaFkyaGxKeXhjYmlBZ0lDQWdJQ2RGZG1WdWRGTnZkWEpqWlNjc1hHNGdJQ0FnSUNBblJtbHNaVkpsWVdSbGNpY3NYRzRnSUNBZ0lDQW5TVzV3ZFhSTlpYUm9iMlJEYjI1MFpYaDBKeXhjYmlBZ0lDQWdJQ2ROWldScFlVTnZiblJ5YjJ4c1pYSW5MRnh1SUNBZ0lDQWdKMDFsYzNOaFoyVlFiM0owSnl4Y2JpQWdJQ0FnSUNkT2IyUmxKeXhjYmlBZ0lDQWdJQ2RRWlhKbWIzSnRZVzVqWlNjc1hHNGdJQ0FnSUNBblUxWkhSV3hsYldWdWRFbHVjM1JoYm1ObEp5eGNiaUFnSUNBZ0lDZFRhR0Z5WldSWGIzSnJaWEluTEZ4dUlDQWdJQ0FnSjFSbGVIUlVjbUZqYXljc1hHNGdJQ0FnSUNBblZHVjRkRlJ5WVdOclEzVmxKeXhjYmlBZ0lDQWdJQ2RVWlhoMFZISmhZMnRNYVhOMEp5eGNiaUFnSUNBZ0lDZFhaV0pMYVhST1lXMWxaRVpzYjNjbkxGeHVJQ0FnSUNBZ0oxZHZjbXRsY2ljc1hHNGdJQ0FnSUNBblYyOXlhMlZ5UjJ4dlltRnNVMk52Y0dVbkxGeHVJQ0FnSUNBZ0oxaE5URWgwZEhCU1pYRjFaWE4wSnl4Y2JpQWdJQ0FnSUNkWVRVeElkSFJ3VW1WeGRXVnpkRVYyWlc1MFZHRnlaMlYwSnl4Y2JpQWdJQ0FnSUNkWVRVeElkSFJ3VW1WeGRXVnpkRlZ3Ykc5aFpDZGNiaUFnSUNCZE8xeHVYRzRnSUNBZ1lYQnBjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVLR0Z3YVNrZ2UxeHVJQ0FnSUNBZ2RtRnlJSEJ5YjNSdklEMGdaMnh2WW1Gc1cyRndhVjBnSmlZZ1oyeHZZbUZzVzJGd2FWMHVjSEp2ZEc5MGVYQmxPMXh1WEc0Z0lDQWdJQ0F2THlCVGIyMWxJR0p5YjNkelpYSnpJR1V1Wnk0Z1FXNWtjbTlwWkNBMExqTW5jeUJrYjI0bmRDQmhZM1IxWVd4c2VTQnBiWEJzWlcxbGJuUmNiaUFnSUNBZ0lDOHZJSFJvWlNCRmRtVnVkRlJoY21kbGRDQnRaWFJvYjJSeklHWnZjaUJoYkd3Z2IyWWdkR2hsYzJVZ1pTNW5MaUJHYVd4bFVtVmhaR1Z5TGx4dUlDQWdJQ0FnTHk4Z1NXNGdkR2hwY3lCallYTmxMQ0IwYUdWeVpTQnBjeUJ1YjNSb2FXNW5JSFJ2SUhCaGRHTm9MbHh1SUNBZ0lDQWdhV1lnS0hCeWIzUnZJQ1ltSUhCeWIzUnZMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSXBJSHRjYmlBZ0lDQWdJQ0FnZFhScGJITXVjR0YwWTJoRmRtVnVkRlJoY21kbGRFMWxkR2h2WkhNb2NISnZkRzhwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnTHk4Z1VHRjBZMmdnZEdobElHMWxkR2h2WkhNZ2IyNGdZSGRwYm1SdmQyQWdhVzV6ZEdWaFpDQnZaaUJnVjJsdVpHOTNMbkJ5YjNSdmRIbHdaV0JjYmlBZ0lDQXZMeUJnVjJsdVpHOTNZQ0JwY3lCdWIzUWdZV05qWlhOemFXSnNaU0J2YmlCQmJtUnliMmxrSURRdU0xeHVJQ0FnSUdsbUlDaDBlWEJsYjJZb2QybHVaRzkzS1NBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUhWMGFXeHpMbkJoZEdOb1JYWmxiblJVWVhKblpYUk5aWFJvYjJSektIZHBibVJ2ZHlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc0aVhYMD1cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9LFxuLyogMTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHt2YXIgd2ViU29ja2V0UGF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0dmFyIGtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHR2YXIgZXZlbnROYW1lcyA9ICdjb3B5IGN1dCBwYXN0ZSBhYm9ydCBibHVyIGZvY3VzIGNhbnBsYXkgY2FucGxheXRocm91Z2ggY2hhbmdlIGNsaWNrIGNvbnRleHRtZW51IGRibGNsaWNrIGRyYWcgZHJhZ2VuZCBkcmFnZW50ZXIgZHJhZ2xlYXZlIGRyYWdvdmVyIGRyYWdzdGFydCBkcm9wIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5kZWQgaW5wdXQgaW52YWxpZCBrZXlkb3duIGtleXByZXNzIGtleXVwIGxvYWQgbG9hZGVkZGF0YSBsb2FkZWRtZXRhZGF0YSBsb2Fkc3RhcnQgbWVzc2FnZSBtb3VzZWRvd24gbW91c2VlbnRlciBtb3VzZWxlYXZlIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSByZXNldCBzY3JvbGwgc2Vla2VkIHNlZWtpbmcgc2VsZWN0IHNob3cgc3RhbGxlZCBzdWJtaXQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nIG1vemZ1bGxzY3JlZW5jaGFuZ2UgbW96ZnVsbHNjcmVlbmVycm9yIG1venBvaW50ZXJsb2NrY2hhbmdlIG1venBvaW50ZXJsb2NrZXJyb3IgZXJyb3Igd2ViZ2xjb250ZXh0cmVzdG9yZWQgd2ViZ2xjb250ZXh0bG9zdCB3ZWJnbGNvbnRleHRjcmVhdGlvbmVycm9yJy5zcGxpdCgnICcpO1xuXHRmdW5jdGlvbiBhcHBseSgpIHtcblx0ICAgIGlmICh1dGlscy5pc05vZGUoKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHZhciBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuXHQgICAgaWYgKGNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKCkpIHtcblx0ICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCB3ZSBjYW4gcGF0Y2ggdGhlIGRlc2NyaXB0b3I6ICBDaHJvbWUgJiBGaXJlZm94XG5cdCAgICAgICAgaWYgKCF1dGlscy5pc1dlYldvcmtlcigpKSB7XG5cdCAgICAgICAgICAgIHZhciBvbkV2ZW50TmFtZXMgPSBldmVudE5hbWVzLm1hcChmdW5jdGlvbiAocHJvcGVydHkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiAnb24nICsgcHJvcGVydHk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICB1dGlscy5wYXRjaFByb3BlcnRpZXMoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBvbkV2ZW50TmFtZXMpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB1dGlscy5wYXRjaFByb3BlcnRpZXMoWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKTtcblx0ICAgICAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcblx0ICAgICAgICAgICAgdXRpbHMucGF0Y2hQcm9wZXJ0aWVzKFdlYlNvY2tldC5wcm90b3R5cGUpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICAgIC8vIFNhZmFyaSwgQW5kcm9pZCBicm93c2VycyAoSmVsbHkgQmVhbilcblx0ICAgICAgICBpZiAoIXV0aWxzLmlzV2ViV29ya2VyKCkpIHtcblx0ICAgICAgICAgICAgcGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMoKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdXRpbHMucGF0Y2hDbGFzcygnWE1MSHR0cFJlcXVlc3QnKTtcblx0ICAgICAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcblx0ICAgICAgICAgICAgd2ViU29ja2V0UGF0Y2guYXBwbHkoKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblx0ZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuXHRmdW5jdGlvbiBjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcigpIHtcblx0ICAgIGlmICghdXRpbHMuaXNXZWJXb3JrZXIoKSAmJiAhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJylcblx0ICAgICAgICAmJiB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAvLyBXZWJLaXQgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDM2NFxuXHQgICAgICAgIC8vIElETCBpbnRlcmZhY2UgYXR0cmlidXRlcyBhcmUgbm90IGNvbmZpZ3VyYWJsZVxuXHQgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKTtcblx0ICAgICAgICBpZiAoZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUpXG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7XG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHQgICAgdmFyIHJlc3VsdCA9ICEhcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZTtcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7fSk7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdDtcblx0dmFyIHVuYm91bmRLZXkgPSBrZXlzLmNyZWF0ZSgndW5ib3VuZCcpO1xuXHQvLyBXaGVuZXZlciBhbnkgZXZlbnQgZmlyZXMsIHdlIGNoZWNrIHRoZSBldmVudCB0YXJnZXQgYW5kIGFsbCBwYXJlbnRzXG5cdC8vIGZvciBgb253aGF0ZXZlcmAgcHJvcGVydGllcyBhbmQgcmVwbGFjZSB0aGVtIHdpdGggem9uZS1ib3VuZCBmdW5jdGlvbnNcblx0Ly8gLSBDaHJvbWUgKGZvciBub3cpXG5cdGZ1bmN0aW9uIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKCkge1xuXHQgICAgZXZlbnROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuXHQgICAgICAgIHZhciBvbnByb3BlcnR5ID0gJ29uJyArIHByb3BlcnR5O1xuXHQgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIocHJvcGVydHksIGZ1bmN0aW9uIChldmVudCkge1xuXHQgICAgICAgICAgICB2YXIgZWx0ID0gZXZlbnQudGFyZ2V0LCBib3VuZDtcblx0ICAgICAgICAgICAgd2hpbGUgKGVsdCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKGVsdFtvbnByb3BlcnR5XSAmJiAhZWx0W29ucHJvcGVydHldW3VuYm91bmRLZXldKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYm91bmQgPSBnbG9iYWwuem9uZS5iaW5kKGVsdFtvbnByb3BlcnR5XSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYm91bmRbdW5ib3VuZEtleV0gPSBlbHRbb25wcm9wZXJ0eV07XG5cdCAgICAgICAgICAgICAgICAgICAgZWx0W29ucHJvcGVydHldID0gYm91bmQ7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBlbHQgPSBlbHQucGFyZW50RWxlbWVudDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sIHRydWUpO1xuXHQgICAgfSk7XG5cdH1cblx0O1xuXHQvLyMgc291cmNlTWFwcGluZ1VSTERpc2FibGVkPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZjR1Z5ZEhrdFpHVnpZM0pwY0hSdmNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOXdZWFJqYUM5d2NtOXdaWEowZVMxa1pYTmpjbWx3ZEc5eUxuUnpJbDBzSW01aGJXVnpJanBiSW1Gd2NHeDVJaXdpWTJGdVVHRjBZMmhXYVdGUWNtOXdaWEowZVVSbGMyTnlhWEIwYjNJaUxDSndZWFJqYUZacFlVTmhjSFIxY21sdVowRnNiRlJvWlVWMlpXNTBjeUpkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzU1VGQldTeGpRVUZqTEZkQlFVMHNZVUZCWVN4RFFVRkRMRU5CUVVFN1FVRkRPVU1zU1VGQldTeExRVUZMTEZkQlFVMHNWVUZCVlN4RFFVRkRMRU5CUVVFN1FVRkRiRU1zU1VGQldTeEpRVUZKTEZkQlFVMHNVMEZCVXl4RFFVRkRMRU5CUVVFN1FVRkZhRU1zU1VGQlNTeFZRVUZWTEVkQlFVY3NkVzFDUVVGMWJVSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRmNHOUNPMGxCUTBWQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFdEJRVXRCTEVOQlFVTkJMRTFCUVUxQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFGQlEyNUNRU3hOUVVGTlFTeERRVUZEUVR0SlFVTlVRU3hEUVVGRFFUdEpRVVZFUVN4SlFVRkpRU3hwUWtGQmFVSkJMRWRCUVVkQkxFOUJRVTlCTEZOQlFWTkJMRXRCUVV0QkxGZEJRVmRCTEVOQlFVTkJPMGxCUTNwRVFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTdzJRa0ZCTmtKQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFGQlEzQkRRU3h0UlVGQmJVVkJPMUZCUTI1RlFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4TFFVRkxRU3hEUVVGRFFTeFhRVUZYUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZCUVN4RFFVRkRRVHRaUVVONFFrRXNTVUZCU1VFc1dVRkJXVUVzUjBGQlIwRXNWVUZCVlVFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1ZVRkJWVUVzVVVGQlVVRTdaMEpCUTJ4RUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRPMWxCUTNwQ0xFTkJRVU1zUTBGQlEwRXNRMEZCUTBFN1dVRkRTRUVzUzBGQlMwRXNRMEZCUTBFc1pVRkJaVUVzUTBGQlEwRXNWMEZCVjBFc1EwRkJRMEVzVTBGQlUwRXNSVUZCUlVFc1dVRkJXVUVzUTBGQlEwRXNRMEZCUTBFN1VVRkROMFJCTEVOQlFVTkJPMUZCUTBSQkxFdEJRVXRCTEVOQlFVTkJMR1ZCUVdWQkxFTkJRVU5CTEdOQlFXTkJMRU5CUVVOQkxGTkJRVk5CTEVOQlFVTkJMRU5CUVVOQk8xRkJRMmhFUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4cFFrRkJhVUpCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEzUkNRU3hMUVVGTFFTeERRVUZEUVN4bFFVRmxRU3hEUVVGRFFTeFRRVUZUUVN4RFFVRkRRU3hUUVVGVFFTeERRVUZEUVN4RFFVRkRRVHRSUVVNM1EwRXNRMEZCUTBFN1NVRkRTRUVzUTBGQlEwRTdTVUZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFN1VVRkRUa0VzZDBOQlFYZERRVHRSUVVONFEwRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRXNWMEZCVjBFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUVVFc1EwRkJRMEU3V1VGRGVFSkJMRFpDUVVFMlFrRXNSVUZCUlVFc1EwRkJRMEU3VVVGRGJFTkJMRU5CUVVOQk8xRkJRMFJCTEV0QlFVdEJMRU5CUVVOQkxGVkJRVlZCTEVOQlFVTkJMR2RDUVVGblFrRXNRMEZCUTBFc1EwRkJRMEU3VVVGRGJrTkJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMR2xDUVVGcFFrRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZEZEVKQkxHTkJRV05CTEVOQlFVTkJMRXRCUVV0QkxFVkJRVVZCTEVOQlFVTkJPMUZCUTNwQ1FTeERRVUZEUVR0SlFVTklRU3hEUVVGRFFUdEJRVU5JUVN4RFFVRkRRVHRCUVRWQ1pTeGhRVUZMTEZGQk5FSndRaXhEUVVGQk8wRkJSVVE3U1VGRFJVTXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRXNWMEZCVjBFc1JVRkJSVUVzU1VGQlNVRXNRMEZCUTBFc1RVRkJUVUVzUTBGQlEwRXNkMEpCUVhkQ1FTeERRVUZEUVN4WFFVRlhRU3hEUVVGRFFTeFRRVUZUUVN4RlFVRkZRU3hUUVVGVFFTeERRVUZEUVR0WFFVTjJSa0VzVDBGQlQwRXNUMEZCVDBFc1MwRkJTMEVzVjBGQlYwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdVVUZEZEVOQkxIZEVRVUYzUkVFN1VVRkRlRVJCTEdkRVFVRm5SRUU3VVVGRGFFUkJMRWxCUVVsQkxFbEJRVWxCTEVkQlFVZEJMRTFCUVUxQkxFTkJRVU5CTEhkQ1FVRjNRa0VzUTBGQlEwRXNUMEZCVDBFc1EwRkJRMEVzVTBGQlUwRXNSVUZCUlVFc1UwRkJVMEVzUTBGQlEwRXNRMEZCUTBFN1VVRkRla1ZCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEVsQlFVbEJMRWxCUVVsQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxGbEJRVmxCTEVOQlFVTkJPMWxCUVVOQkxFMUJRVTFCTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTzBsQlF5OURRU3hEUVVGRFFUdEpRVVZFUVN4TlFVRk5RU3hEUVVGRFFTeGpRVUZqUVN4RFFVRkRRU3hqUVVGalFTeERRVUZEUVN4VFFVRlRRU3hGUVVGRlFTeHZRa0ZCYjBKQkxFVkJRVVZCTzFGQlEzQkZRU3hIUVVGSFFTeEZRVUZGUVR0WlFVTklMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRFpDeERRVUZETzB0QlEwWkJMRU5CUVVOQkxFTkJRVU5CTzBsQlEwaEJMRWxCUVVsQkxFZEJRVWRCTEVkQlFVZEJMRWxCUVVsQkxHTkJRV05CTEVWQlFVVkJMRU5CUVVOQk8wbEJReTlDUVN4SlFVRkpRU3hOUVVGTlFTeEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hyUWtGQmEwSkJMRU5CUVVOQk8wbEJRM1JEUVN4TlFVRk5RU3hEUVVGRFFTeGpRVUZqUVN4RFFVRkRRU3hqUVVGalFTeERRVUZEUVN4VFFVRlRRU3hGUVVGRlFTeHZRa0ZCYjBKQkxFVkJRVVZCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTzBsQlF6RkZRU3hOUVVGTlFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFUdEJRVU5vUWtFc1EwRkJRMEU3UVVGQlFTeERRVUZETzBGQlJVWXNTVUZCU1N4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0QlFVVjRReXh6UlVGQmMwVTdRVUZEZEVVc2VVVkJRWGxGTzBGQlEzcEZMSEZDUVVGeFFqdEJRVU55UWp0SlFVTkZReXhWUVVGVlFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeFZRVUZWUVN4UlFVRlJRVHRSUVVOdVF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRMnBETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNWVUZCVlN4TFFVRkxPMWxCUTJwRUxFbEJRVWtzUjBGQlJ5eEhRVUZUTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRE8xbEJRM0JETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMWdzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEY0VRc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTXhReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8yOUNRVU53UXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzJkQ1FVTXhRaXhEUVVGRE8yZENRVU5FTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRE8xbEJRekZDTEVOQlFVTTdVVUZEU0N4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTkJMRU5CUVVOQk8wRkJRMHhCTEVOQlFVTkJPMEZCUVVFc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklIZGxZbE52WTJ0bGRGQmhkR05vSUdaeWIyMGdKeTR2ZDJWaWMyOWphMlYwSnp0Y2JtbHRjRzl5ZENBcUlHRnpJSFYwYVd4eklHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENBcUlHRnpJR3RsZVhNZ1puSnZiU0FuTGk0dmEyVjVjeWM3WEc1Y2JuWmhjaUJsZG1WdWRFNWhiV1Z6SUQwZ0oyTnZjSGtnWTNWMElIQmhjM1JsSUdGaWIzSjBJR0pzZFhJZ1ptOWpkWE1nWTJGdWNHeGhlU0JqWVc1d2JHRjVkR2h5YjNWbmFDQmphR0Z1WjJVZ1kyeHBZMnNnWTI5dWRHVjRkRzFsYm5VZ1pHSnNZMnhwWTJzZ1pISmhaeUJrY21GblpXNWtJR1J5WVdkbGJuUmxjaUJrY21GbmJHVmhkbVVnWkhKaFoyOTJaWElnWkhKaFozTjBZWEowSUdSeWIzQWdaSFZ5WVhScGIyNWphR0Z1WjJVZ1pXMXdkR2xsWkNCbGJtUmxaQ0JwYm5CMWRDQnBiblpoYkdsa0lHdGxlV1J2ZDI0Z2EyVjVjSEpsYzNNZ2EyVjVkWEFnYkc5aFpDQnNiMkZrWldSa1lYUmhJR3h2WVdSbFpHMWxkR0ZrWVhSaElHeHZZV1J6ZEdGeWRDQnRaWE56WVdkbElHMXZkWE5sWkc5M2JpQnRiM1Z6WldWdWRHVnlJRzF2ZFhObGJHVmhkbVVnYlc5MWMyVnRiM1psSUcxdmRYTmxiM1YwSUcxdmRYTmxiM1psY2lCdGIzVnpaWFZ3SUhCaGRYTmxJSEJzWVhrZ2NHeGhlV2x1WnlCd2NtOW5jbVZ6Y3lCeVlYUmxZMmhoYm1kbElISmxjMlYwSUhOamNtOXNiQ0J6WldWclpXUWdjMlZsYTJsdVp5QnpaV3hsWTNRZ2MyaHZkeUJ6ZEdGc2JHVmtJSE4xWW0xcGRDQnpkWE53Wlc1a0lIUnBiV1YxY0dSaGRHVWdkbTlzZFcxbFkyaGhibWRsSUhkaGFYUnBibWNnYlc5NlpuVnNiSE5qY21WbGJtTm9ZVzVuWlNCdGIzcG1kV3hzYzJOeVpXVnVaWEp5YjNJZ2JXOTZjRzlwYm5SbGNteHZZMnRqYUdGdVoyVWdiVzk2Y0c5cGJuUmxjbXh2WTJ0bGNuSnZjaUJsY25KdmNpQjNaV0puYkdOdmJuUmxlSFJ5WlhOMGIzSmxaQ0IzWldKbmJHTnZiblJsZUhSc2IzTjBJSGRsWW1kc1kyOXVkR1Y0ZEdOeVpXRjBhVzl1WlhKeWIzSW5Mbk53YkdsMEtDY2dKeWs3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCaGNIQnNlU2dwSUh0Y2JpQWdhV1lnS0hWMGFXeHpMbWx6VG05a1pTZ3BLU0I3WEc0Z0lDQWdjbVYwZFhKdU8xeHVJQ0I5WEc0Z0lGeHVJQ0IyWVhJZ2MzVndjRzl5ZEhOWFpXSlRiMk5yWlhRZ1BTQjBlWEJsYjJZZ1YyVmlVMjlqYTJWMElDRTlQU0FuZFc1a1pXWnBibVZrSnp0Y2JpQWdhV1lnS0dOaGJsQmhkR05vVm1saFVISnZjR1Z5ZEhsRVpYTmpjbWx3ZEc5eUtDa3BJSHRjYmlBZ0lDQXZMeUJtYjNJZ1luSnZkM05sY25NZ2RHaGhkQ0IzWlNCallXNGdjR0YwWTJnZ2RHaGxJR1JsYzJOeWFYQjBiM0k2SUNCRGFISnZiV1VnSmlCR2FYSmxabTk0WEc0Z0lDQWdhV1lnS0NGMWRHbHNjeTVwYzFkbFlsZHZjbXRsY2lncEtYdGNiaUFnSUNBZ0lIWmhjaUJ2YmtWMlpXNTBUbUZ0WlhNZ1BTQmxkbVZ1ZEU1aGJXVnpMbTFoY0NobWRXNWpkR2x2YmlBb2NISnZjR1Z5ZEhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZHZiaWNnS3lCd2NtOXdaWEowZVR0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ2RYUnBiSE11Y0dGMFkyaFFjbTl3WlhKMGFXVnpLRWhVVFV4RmJHVnRaVzUwTG5CeWIzUnZkSGx3WlN3Z2IyNUZkbVZ1ZEU1aGJXVnpLVHRjYmlBZ0lDQjlYRzRnSUNBZ2RYUnBiSE11Y0dGMFkyaFFjbTl3WlhKMGFXVnpLRmhOVEVoMGRIQlNaWEYxWlhOMExuQnliM1J2ZEhsd1pTazdYRzRnSUNBZ2FXWWdLSE4xY0hCdmNuUnpWMlZpVTI5amEyVjBLU0I3WEc0Z0lDQWdJQ0IxZEdsc2N5NXdZWFJqYUZCeWIzQmxjblJwWlhNb1YyVmlVMjlqYTJWMExuQnliM1J2ZEhsd1pTazdYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDOHZJRk5oWm1GeWFTd2dRVzVrY205cFpDQmljbTkzYzJWeWN5QW9TbVZzYkhrZ1FtVmhiaWxjYmlBZ0lDQnBaaUFvSVhWMGFXeHpMbWx6VjJWaVYyOXlhMlZ5S0NrcGUxeHVJQ0FnSUNBZ2NHRjBZMmhXYVdGRFlYQjBkWEpwYm1kQmJHeFVhR1ZGZG1WdWRITW9LVHRjYmlBZ0lDQjlYRzRnSUNBZ2RYUnBiSE11Y0dGMFkyaERiR0Z6Y3lnbldFMU1TSFIwY0ZKbGNYVmxjM1FuS1R0Y2JpQWdJQ0JwWmlBb2MzVndjRzl5ZEhOWFpXSlRiMk5yWlhRcElIdGNiaUFnSUNBZ0lIZGxZbE52WTJ0bGRGQmhkR05vTG1Gd2NHeDVLQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdOaGJsQmhkR05vVm1saFVISnZjR1Z5ZEhsRVpYTmpjbWx3ZEc5eUtDa2dlMXh1SUNCcFppQW9JWFYwYVd4ekxtbHpWMlZpVjI5eWEyVnlLQ2tnSmlZZ0lVOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0lvU0ZSTlRFVnNaVzFsYm5RdWNISnZkRzkwZVhCbExDQW5iMjVqYkdsamF5Y3BYRzRnSUNBZ0lDQW1KaUIwZVhCbGIyWWdSV3hsYldWdWRDQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBdkx5QlhaV0pMYVhRZ2FIUjBjSE02THk5aWRXZHpMbmRsWW10cGRDNXZjbWN2YzJodmQxOWlkV2N1WTJkcFAybGtQVEV6TkRNMk5GeHVJQ0FnSUM4dklFbEVUQ0JwYm5SbGNtWmhZMlVnWVhSMGNtbGlkWFJsY3lCaGNtVWdibTkwSUdOdmJtWnBaM1Z5WVdKc1pWeHVJQ0FnSUhaaGNpQmtaWE5qSUQwZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVSR1Z6WTNKcGNIUnZjaWhGYkdWdFpXNTBMbkJ5YjNSdmRIbHdaU3dnSjI5dVkyeHBZMnNuS1R0Y2JpQWdJQ0JwWmlBb1pHVnpZeUFtSmlBaFpHVnpZeTVqYjI1bWFXZDFjbUZpYkdVcElISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ2ZWeHVYRzRnSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaFlUVXhJZEhSd1VtVnhkV1Z6ZEM1d2NtOTBiM1I1Y0dVc0lDZHZibkpsWVdSNWMzUmhkR1ZqYUdGdVoyVW5MQ0I3WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVJQ0IyWVhJZ2NtVnhJRDBnYm1WM0lGaE5URWgwZEhCU1pYRjFaWE4wS0NrN1hHNGdJSFpoY2lCeVpYTjFiSFFnUFNBaElYSmxjUzV2Ym5KbFlXUjVjM1JoZEdWamFHRnVaMlU3WEc0Z0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hZVFV4SWRIUndVbVZ4ZFdWemRDNXdjbTkwYjNSNWNHVXNJQ2R2Ym5KbFlXUjVjM1JoZEdWamFHRnVaMlVuTENCN2ZTazdYRzRnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5TzF4dVhHNTJZWElnZFc1aWIzVnVaRXRsZVNBOUlHdGxlWE11WTNKbFlYUmxLQ2QxYm1KdmRXNWtKeWs3WEc1Y2JpOHZJRmRvWlc1bGRtVnlJR0Z1ZVNCbGRtVnVkQ0JtYVhKbGN5d2dkMlVnWTJobFkyc2dkR2hsSUdWMlpXNTBJSFJoY21kbGRDQmhibVFnWVd4c0lIQmhjbVZ1ZEhOY2JpOHZJR1p2Y2lCZ2IyNTNhR0YwWlhabGNtQWdjSEp2Y0dWeWRHbGxjeUJoYm1RZ2NtVndiR0ZqWlNCMGFHVnRJSGRwZEdnZ2VtOXVaUzFpYjNWdVpDQm1kVzVqZEdsdmJuTmNiaTh2SUMwZ1EyaHliMjFsSUNobWIzSWdibTkzS1Z4dVpuVnVZM1JwYjI0Z2NHRjBZMmhXYVdGRFlYQjBkWEpwYm1kQmJHeFVhR1ZGZG1WdWRITW9LU0I3WEc0Z0lHVjJaVzUwVG1GdFpYTXVabTl5UldGamFDaG1kVzVqZEdsdmJpQW9jSEp2Y0dWeWRIa3BJSHRjYmlBZ0lDQjJZWElnYjI1d2NtOXdaWEowZVNBOUlDZHZiaWNnS3lCd2NtOXdaWEowZVR0Y2JpQWdJQ0JrYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLSEJ5YjNCbGNuUjVMQ0JtZFc1amRHbHZiaUFvWlhabGJuUXBJSHRjYmlBZ0lDQWdJSFpoY2lCbGJIUWdQU0E4VG05a1pUNWxkbVZ1ZEM1MFlYSm5aWFFzSUdKdmRXNWtPMXh1SUNBZ0lDQWdkMmhwYkdVZ0tHVnNkQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9aV3gwVzI5dWNISnZjR1Z5ZEhsZElDWW1JQ0ZsYkhSYmIyNXdjbTl3WlhKMGVWMWJkVzVpYjNWdVpFdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmliM1Z1WkNBOUlHZHNiMkpoYkM1NmIyNWxMbUpwYm1Rb1pXeDBXMjl1Y0hKdmNHVnlkSGxkS1R0Y2JpQWdJQ0FnSUNBZ0lDQmliM1Z1WkZ0MWJtSnZkVzVrUzJWNVhTQTlJR1ZzZEZ0dmJuQnliM0JsY25SNVhUdGNiaUFnSUNBZ0lDQWdJQ0JsYkhSYmIyNXdjbTl3WlhKMGVWMGdQU0JpYjNWdVpEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhRZ1BTQmxiSFF1Y0dGeVpXNTBSV3hsYldWdWREdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxDQjBjblZsS1R0Y2JpQWdmU2s3WEc1OU8xeHVJbDE5XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSxcbi8qIDE4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0Ly8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcblx0ZnVuY3Rpb24gYXBwbHkoKSB7XG5cdCAgICB2YXIgV1MgPSBnbG9iYWwuV2ViU29ja2V0O1xuXHQgICAgLy8gT24gU2FmYXJpIHdpbmRvdy5FdmVudFRhcmdldCBkb2Vzbid0IGV4aXN0IHNvIG5lZWQgdG8gcGF0Y2ggV1MgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXJcblx0ICAgIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG5cdCAgICBpZiAoIWdsb2JhbC5FdmVudFRhcmdldCkge1xuXHQgICAgICAgIHV0aWxzLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKFdTLnByb3RvdHlwZSk7XG5cdCAgICB9XG5cdCAgICBnbG9iYWwuV2ViU29ja2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcblx0ICAgICAgICB2YXIgc29ja2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBuZXcgV1MoYSwgYikgOiBuZXcgV1MoYSk7XG5cdCAgICAgICAgdmFyIHByb3h5U29ja2V0O1xuXHQgICAgICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuXHQgICAgICAgIHZhciBvbm1lc3NhZ2VEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb2NrZXQsICdvbm1lc3NhZ2UnKTtcblx0ICAgICAgICBpZiAob25tZXNzYWdlRGVzYyAmJiBvbm1lc3NhZ2VEZXNjLmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcblx0ICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBPYmplY3QuY3JlYXRlKHNvY2tldCk7XG5cdCAgICAgICAgICAgIFsnYWRkRXZlbnRMaXN0ZW5lcicsICdyZW1vdmVFdmVudExpc3RlbmVyJywgJ3NlbmQnLCAnY2xvc2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wTmFtZSkge1xuXHQgICAgICAgICAgICAgICAgcHJveHlTb2NrZXRbcHJvcE5hbWVdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2NrZXRbcHJvcE5hbWVdLmFwcGx5KHNvY2tldCwgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBlbHNlIHtcblx0ICAgICAgICAgICAgLy8gd2UgY2FuIHBhdGNoIHRoZSByZWFsIHNvY2tldFxuXHQgICAgICAgICAgICBwcm94eVNvY2tldCA9IHNvY2tldDtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdXRpbHMucGF0Y2hQcm9wZXJ0aWVzKHByb3h5U29ja2V0LCBbJ29uY2xvc2UnLCAnb25lcnJvcicsICdvbm1lc3NhZ2UnLCAnb25vcGVuJ10pO1xuXHQgICAgICAgIHJldHVybiBwcm94eVNvY2tldDtcblx0ICAgIH07XG5cdH1cblx0ZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuXHQvLyMgc291cmNlTWFwcGluZ1VSTERpc2FibGVkPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWQyVmljMjlqYTJWMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZMaTR2YkdsaUwzQmhkR05vTDNkbFluTnZZMnRsZEM1MGN5SmRMQ0p1WVcxbGN5STZXeUpoY0hCc2VTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNTVUZCV1N4TFFVRkxMRmRCUVUwc1ZVRkJWU3hEUVVGRExFTkJRVUU3UVVGRmJFTXNiMFZCUVc5Rk8wRkJRM0JGTzBsQlEwVkJMRWxCUVVsQkxFVkJRVVZCTEVkQlFWTkJMRTFCUVU5QkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQk8wbEJRMnBEUVN4NVJrRkJlVVpCTzBsQlEzcEdRU3hwUlVGQmFVVkJPMGxCUTJwRlFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZQUVN4TlFVRlBRU3hEUVVGRFFTeFhRVUZYUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0UlFVTXZRa0VzUzBGQlMwRXNRMEZCUTBFc2RVSkJRWFZDUVN4RFFVRkRRU3hGUVVGRlFTeERRVUZEUVN4VFFVRlRRU3hEUVVGRFFTeERRVUZEUVR0SlFVTTVRMEVzUTBGQlEwRTdTVUZEUzBFc1RVRkJUMEVzUTBGQlEwRXNVMEZCVTBFc1IwRkJSMEVzVlVGQlUwRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRTdVVUZEY2tNc1NVRkJTU3hOUVVGTkxFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZEVMRWxCUVVrc1YwRkJWeXhEUVVGRE8xRkJSV2hDTEdkSFFVRm5SenRSUVVOb1J5eEpRVUZKTEdGQlFXRXNSMEZCUnl4TlFVRk5MRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRM3BGTEVWQlFVVXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1NVRkJTU3hoUVVGaExFTkJRVU1zV1VGQldTeExRVUZMTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVVFzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRGNFTXNRMEZCUXl4clFrRkJhMElzUlVGQlJTeHhRa0ZCY1VJc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZNc1VVRkJVVHRuUWtGRGNFWXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSE8yOUNRVU4wUWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03WjBKQlEyNUVMRU5CUVVNc1EwRkJRenRaUVVOS0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwd3NRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMDRzSzBKQlFTdENPMWxCUXk5Q0xGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEZGtJc1EwRkJRenRSUVVWRUxFdEJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFhRVUZYTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWc1JpeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUTNKQ0xFTkJRVU1zUTBGQlEwRTdRVUZEU2tFc1EwRkJRMEU3UVVFM1FtVXNZVUZCU3l4UlFUWkNjRUlzUTBGQlFTSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUhWMGFXeHpJR1p5YjIwZ0p5NHVMM1YwYVd4ekp6dGNibHh1THk4Z2QyVWdhR0YyWlNCMGJ5QndZWFJqYUNCMGFHVWdhVzV6ZEdGdVkyVWdjMmx1WTJVZ2RHaGxJSEJ5YjNSdklHbHpJRzV2YmkxamIyNW1hV2QxY21GaWJHVmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmhjSEJzZVNncElIdGNiaUFnZG1GeUlGZFRJRDBnS0R4aGJuaytaMnh2WW1Gc0tTNVhaV0pUYjJOclpYUTdYRzRnSUM4dklFOXVJRk5oWm1GeWFTQjNhVzVrYjNjdVJYWmxiblJVWVhKblpYUWdaRzlsYzI0bmRDQmxlR2x6ZENCemJ5QnVaV1ZrSUhSdklIQmhkR05vSUZkVElHRmtaQzl5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5WEc0Z0lDOHZJRTl1SUc5c1pHVnlJRU5vY205dFpTd2dibThnYm1WbFpDQnphVzVqWlNCRmRtVnVkRlJoY21kbGRDQjNZWE1nWVd4eVpXRmtlU0J3WVhSamFHVmtYRzRnSUdsbUlDZ2hLRHhoYm5rK1oyeHZZbUZzS1M1RmRtVnVkRlJoY21kbGRDa2dlMXh1SUNBZ0lIVjBhV3h6TG5CaGRHTm9SWFpsYm5SVVlYSm5aWFJOWlhSb2IyUnpLRmRUTG5CeWIzUnZkSGx3WlNrN1hHNGdJSDFjYmlBZ0tEeGhibmsrWjJ4dlltRnNLUzVYWldKVGIyTnJaWFFnUFNCbWRXNWpkR2x2YmloaExDQmlLU0I3WEc0Z0lDQWdkbUZ5SUhOdlkydGxkQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeElEOGdibVYzSUZkVEtHRXNJR0lwSURvZ2JtVjNJRmRUS0dFcE8xeHVJQ0FnSUhaaGNpQndjbTk0ZVZOdlkydGxkRHRjYmx4dUlDQWdJQzh2SUZOaFptRnlhU0EzTGpBZ2FHRnpJRzV2YmkxamIyNW1hV2QxY21GaWJHVWdiM2R1SUNkdmJtMWxjM05oWjJVbklHRnVaQ0JtY21sbGJtUnpJSEJ5YjNCbGNuUnBaWE1nYjI0Z2RHaGxJSE52WTJ0bGRDQnBibk4wWVc1alpWeHVJQ0FnSUhaaGNpQnZibTFsYzNOaFoyVkVaWE5qSUQwZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVSR1Z6WTNKcGNIUnZjaWh6YjJOclpYUXNJQ2R2Ym0xbGMzTmhaMlVuS1R0Y2JpQWdJQ0JwWmlBb2IyNXRaWE56WVdkbFJHVnpZeUFtSmlCdmJtMWxjM05oWjJWRVpYTmpMbU52Ym1acFozVnlZV0pzWlNBOVBUMGdabUZzYzJVcElIdGNiaUFnSUNBZ0lIQnliM2g1VTI5amEyVjBJRDBnVDJKcVpXTjBMbU55WldGMFpTaHpiMk5yWlhRcE8xeHVJQ0FnSUNBZ1d5ZGhaR1JGZG1WdWRFeHBjM1JsYm1WeUp5d2dKM0psYlc5MlpVVjJaVzUwVEdsemRHVnVaWEluTENBbmMyVnVaQ2NzSUNkamJHOXpaU2RkTG1admNrVmhZMmdvWm5WdVkzUnBiMjRvY0hKdmNFNWhiV1VwSUh0Y2JpQWdJQ0FnSUNBZ2NISnZlSGxUYjJOclpYUmJjSEp2Y0U1aGJXVmRJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlITnZZMnRsZEZ0d2NtOXdUbUZ0WlYwdVlYQndiSGtvYzI5amEyVjBMQ0JoY21kMWJXVnVkSE1wTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUM4dklIZGxJR05oYmlCd1lYUmphQ0IwYUdVZ2NtVmhiQ0J6YjJOclpYUmNiaUFnSUNBZ0lIQnliM2g1VTI5amEyVjBJRDBnYzI5amEyVjBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVjBhV3h6TG5CaGRHTm9VSEp2Y0dWeWRHbGxjeWh3Y205NGVWTnZZMnRsZEN3Z1d5ZHZibU5zYjNObEp5d2dKMjl1WlhKeWIzSW5MQ0FuYjI1dFpYTnpZV2RsSnl3Z0oyOXViM0JsYmlkZEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCd2NtOTRlVk52WTJ0bGREdGNiaUFnZlR0Y2JuMWNiaUpkZlE9PVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiAxOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge3ZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdGZ1bmN0aW9uIGFwcGx5KCkge1xuXHQgICAgaWYgKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuXHQgICAgICAgIHV0aWxzLnBhdGNoUHJvdG90eXBlKGdsb2JhbC5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24sIFtcblx0ICAgICAgICAgICAgJ2dldEN1cnJlbnRQb3NpdGlvbicsXG5cdCAgICAgICAgICAgICd3YXRjaFBvc2l0aW9uJ1xuXHQgICAgICAgIF0pO1xuXHQgICAgfVxuXHR9XG5cdGV4cG9ydHMuYXBwbHkgPSBhcHBseTtcblx0Ly8jIHNvdXJjZU1hcHBpbmdVUkxEaXNhYmxlZD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laMlZ2Ykc5allYUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXNhV0l2Y0dGMFkyZ3ZaMlZ2Ykc5allYUnBiMjR1ZEhNaVhTd2libUZ0WlhNaU9sc2lZWEJ3YkhraVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFbEJRVmtzUzBGQlN5eFhRVUZOTEZWQlFWVXNRMEZCUXl4RFFVRkJPMEZCUld4RE8wbEJRMFZCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEUxQlFVMUJMRU5CUVVOQkxGTkJRVk5CTEVsQlFVbEJMRTFCUVUxQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxGZEJRVmRCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFGQlEzSkVRU3hMUVVGTFFTeERRVUZEUVN4alFVRmpRU3hEUVVGRFFTeE5RVUZOUVN4RFFVRkRRU3hUUVVGVFFTeERRVUZEUVN4WFFVRlhRU3hGUVVGRlFUdFpRVU5xUkVFc2IwSkJRVzlDUVR0WlFVTndRa0VzWlVGQlpVRTdVMEZEYUVKQkxFTkJRVU5CTEVOQlFVTkJPMGxCUTB4QkxFTkJRVU5CTzBGQlEwaEJMRU5CUVVOQk8wRkJVR1VzWVVGQlN5eFJRVTl3UWl4RFFVRkJJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJQ29nWVhNZ2RYUnBiSE1nWm5KdmJTQW5MaTR2ZFhScGJITW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVhCd2JIa29LU0I3WEc0Z0lHbG1JQ2huYkc5aVlXd3VibUYyYVdkaGRHOXlJQ1ltSUdkc2IySmhiQzV1WVhacFoyRjBiM0l1WjJWdmJHOWpZWFJwYjI0cElIdGNiaUFnSUNCMWRHbHNjeTV3WVhSamFGQnliM1J2ZEhsd1pTaG5iRzlpWVd3dWJtRjJhV2RoZEc5eUxtZGxiMnh2WTJGMGFXOXVMQ0JiWEc0Z0lDQWdJQ0FuWjJWMFEzVnljbVZ1ZEZCdmMybDBhVzl1Snl4Y2JpQWdJQ0FnSUNkM1lYUmphRkJ2YzJsMGFXOXVKMXh1SUNBZ0lGMHBPMXh1SUNCOVhHNTlYRzRpWFgwPVxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiAyMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0ZnVuY3Rpb24gYXBwbHkoKSB7XG5cdCAgICB1dGlscy5wYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG5cdH1cblx0ZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuXHQvLyMgc291cmNlTWFwcGluZ1VSTERpc2FibGVkPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptbHNaUzF5WldGa1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5c2FXSXZjR0YwWTJndlptbHNaUzF5WldGa1pYSXVkSE1pWFN3aWJtRnRaWE1pT2xzaVlYQndiSGtpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEVsQlFWa3NTMEZCU3l4WFFVRk5MRlZCUVZVc1EwRkJReXhEUVVGQk8wRkJSV3hETzBsQlEwVkJMRXRCUVV0QkxFTkJRVU5CTEZWQlFWVkJMRU5CUVVOQkxGbEJRVmxCTEVOQlFVTkJMRU5CUVVOQk8wRkJRMnBEUVN4RFFVRkRRVHRCUVVabExHRkJRVXNzVVVGRmNFSXNRMEZCUVNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSFYwYVd4eklHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHRndjR3g1S0NrZ2UxeHVJQ0IxZEdsc2N5NXdZWFJqYUVOc1lYTnpLQ2RHYVd4bFVtVmhaR1Z5SnlrN1hHNTlYRzRpWFgwPVxuXG4vKioqLyB9XG4vKioqKioqLyBdKTtcbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7dmFyIGxvbmdfc3RhY2tfdHJhY2VfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdGlmICghZ2xvYmFsLlpvbmUpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignem9uZS5qcyBzaG91bGQgYmUgaW5zdGFsbGVkIGJlZm9yZSBsb2FkaW5nIHRoZSBsb25nIHN0YWNrIHRyYWNlIHpvbmUnKTtcblx0fVxuXHRnbG9iYWwuWm9uZS5sb25nU3RhY2tUcmFjZVpvbmUgPSBsb25nX3N0YWNrX3RyYWNlXzEubG9uZ1N0YWNrVHJhY2Vab25lO1xuXHQvLyMgc291cmNlTWFwcGluZ1VSTERpc2FibGVkPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOXVaeTF6ZEdGamF5MTBjbUZqWlMxNmIyNWxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmJHbGlMMkp5YjNkelpYSXZiRzl1WnkxemRHRmpheTEwY21GalpTMTZiMjVsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMR2xEUVVGcFF5d3lRa0ZCTWtJc1EwRkJReXhEUVVGQk8wRkJSVGRFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYWtJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpSVUZCYzBVc1EwRkJReXhEUVVGRE8wRkJRekZHTEVOQlFVTTdRVUZGUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SFFVRkhMSEZEUVVGclFpeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0c2IyNW5VM1JoWTJ0VWNtRmpaVnB2Ym1WOUlHWnliMjBnSnk0dUwzcHZibVZ6TDJ4dmJtY3RjM1JoWTJzdGRISmhZMlVuTzF4dVhHNXBaaUFvSVdkc2IySmhiQzVhYjI1bEtTQjdYRzRnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduZW05dVpTNXFjeUJ6YUc5MWJHUWdZbVVnYVc1emRHRnNiR1ZrSUdKbFptOXlaU0JzYjJGa2FXNW5JSFJvWlNCc2IyNW5JSE4wWVdOcklIUnlZV05sSUhwdmJtVW5LVHRjYm4xY2JseHVaMnh2WW1Gc0xscHZibVV1Ykc5dVoxTjBZV05yVkhKaFkyVmFiMjVsSUQwZ2JHOXVaMU4wWVdOclZISmhZMlZhYjI1bE8xeHVJbDE5XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHsvKlxuXHQgKiBXcmFwcGVkIHN0YWNrdHJhY2Vcblx0ICpcblx0ICogV2UgbmVlZCB0aGlzIGJlY2F1c2UgaW4gc29tZSBpbXBsZW1lbnRhdGlvbnMsIGNvbnN0cnVjdGluZyBhIHRyYWNlIGlzIHNsb3dcblx0ICogYW5kIHNvIHdlIHdhbnQgdG8gZGVmZXIgYWNjZXNzaW5nIHRoZSB0cmFjZSBmb3IgYXMgbG9uZyBhcyBwb3NzaWJsZVxuXHQgKi9cblx0J3VzZSBzdHJpY3QnO1xuXHRmdW5jdGlvbiBfU3RhY2t0cmFjZShlKSB7XG5cdCAgICB0aGlzLl9lID0gZTtcblx0fVxuXHRfU3RhY2t0cmFjZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKGdsb2JhbC56b25lLnN0YWNrRnJhbWVzRmlsdGVyICYmIHRoaXMuX2Uuc3RhY2spIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5fZS5zdGFja1xuXHQgICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG5cdCAgICAgICAgICAgIC5maWx0ZXIoZ2xvYmFsLnpvbmUuc3RhY2tGcmFtZXNGaWx0ZXIpXG5cdCAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLl9lLnN0YWNrO1xuXHR9O1xuXHRmdW5jdGlvbiBfZ2V0U3RhY2t0cmFjZVdpdGhVbmNhdWdodEVycm9yKCkge1xuXHQgICAgcmV0dXJuIG5ldyBfU3RhY2t0cmFjZShuZXcgRXJyb3IoKSk7XG5cdH1cblx0ZnVuY3Rpb24gX2dldFN0YWNrdHJhY2VXaXRoQ2F1Z2h0RXJyb3IoKSB7XG5cdCAgICB0cnkge1xuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuXHQgICAgfVxuXHQgICAgY2F0Y2ggKGUpIHtcblx0ICAgICAgICByZXR1cm4gbmV3IF9TdGFja3RyYWNlKGUpO1xuXHQgICAgfVxuXHR9XG5cdC8vIFNvbWUgaW1wbGVtZW50YXRpb25zIG9mIGV4Y2VwdGlvbiBoYW5kbGluZyBkb24ndCBjcmVhdGUgYSBzdGFjayB0cmFjZSBpZiB0aGUgZXhjZXB0aW9uXG5cdC8vIGlzbid0IHRocm93biwgaG93ZXZlciBpdCdzIGZhc3RlciBub3QgdG8gYWN0dWFsbHkgdGhyb3cgdGhlIGV4Y2VwdGlvbi5cblx0dmFyIHN0YWNrID0gX2dldFN0YWNrdHJhY2VXaXRoVW5jYXVnaHRFcnJvcigpO1xuXHR2YXIgX2dldFN0YWNrdHJhY2UgPSBzdGFjayAmJiBzdGFjay5fZS5zdGFja1xuXHQgICAgPyBfZ2V0U3RhY2t0cmFjZVdpdGhVbmNhdWdodEVycm9yXG5cdCAgICA6IF9nZXRTdGFja3RyYWNlV2l0aENhdWdodEVycm9yO1xuXHRleHBvcnRzLmxvbmdTdGFja1RyYWNlWm9uZSA9IHtcblx0ICAgIGdldExvbmdTdGFja3RyYWNlOiBmdW5jdGlvbiAoZXhjZXB0aW9uKSB7XG5cdCAgICAgICAgdmFyIHRyYWNlcyA9IFtdO1xuXHQgICAgICAgIHZhciBjdXJyZW50Wm9uZSA9IHRoaXM7XG5cdCAgICAgICAgaWYgKGV4Y2VwdGlvbikge1xuXHQgICAgICAgICAgICBpZiAoY3VycmVudFpvbmUuc3RhY2tGcmFtZXNGaWx0ZXIgJiYgZXhjZXB0aW9uLnN0YWNrKSB7XG5cdCAgICAgICAgICAgICAgICB0cmFjZXMucHVzaChleGNlcHRpb24uc3RhY2suc3BsaXQoJ1xcbicpXG5cdCAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihjdXJyZW50Wm9uZS5zdGFja0ZyYW1lc0ZpbHRlcilcblx0ICAgICAgICAgICAgICAgICAgICAuam9pbignXFxuJykpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdHJhY2VzLnB1c2goZXhjZXB0aW9uLnN0YWNrKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcblx0ICAgICAgICB3aGlsZSAoY3VycmVudFpvbmUgJiYgY3VycmVudFpvbmUuY29uc3RydWN0ZWRBdEV4Y2VwdGlvbikge1xuXHQgICAgICAgICAgICB0cmFjZXMucHVzaCgnLS0tICcgKyAobmV3IERhdGUoY3VycmVudFpvbmUuY29uc3RydWN0ZWRBdFRpbWUpKS50b1N0cmluZygpICtcblx0ICAgICAgICAgICAgICAgICcgLSAnICsgKG5vdyAtIGN1cnJlbnRab25lLmNvbnN0cnVjdGVkQXRUaW1lKSArICdtcyBhZ28nLCBjdXJyZW50Wm9uZS5jb25zdHJ1Y3RlZEF0RXhjZXB0aW9uLmdldCgpKTtcblx0ICAgICAgICAgICAgY3VycmVudFpvbmUgPSBjdXJyZW50Wm9uZS5wYXJlbnQ7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB0cmFjZXMuam9pbignXFxuJyk7XG5cdCAgICB9LFxuXHQgICAgc3RhY2tGcmFtZXNGaWx0ZXI6IGZ1bmN0aW9uIChsaW5lKSB7XG5cdCAgICAgICAgcmV0dXJuICEvem9uZSgtbWljcm90YXNrKT8oXFwubWluKT9cXC5qcy8udGVzdChsaW5lKTtcblx0ICAgIH0sXG5cdCAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXhjZXB0aW9uKSB7XG5cdCAgICAgICAgdmFyIHJlcG9ydGVyID0gdGhpcy5yZXBvcnRlciB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuXHQgICAgICAgIHJlcG9ydGVyKGV4Y2VwdGlvbi50b1N0cmluZygpKTtcblx0ICAgICAgICByZXBvcnRlcih0aGlzLmdldExvbmdTdGFja3RyYWNlKGV4Y2VwdGlvbikpO1xuXHQgICAgfSxcblx0ICAgICckZm9yayc6IGZ1bmN0aW9uIChwYXJlbnRGb3JrKSB7XG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIG5ld1pvbmUgPSBwYXJlbnRGb3JrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgIG5ld1pvbmUuY29uc3RydWN0ZWRBdEV4Y2VwdGlvbiA9IF9nZXRTdGFja3RyYWNlKCk7XG5cdCAgICAgICAgICAgIG5ld1pvbmUuY29uc3RydWN0ZWRBdFRpbWUgPSBEYXRlLm5vdygpO1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3Wm9uZTtcblx0ICAgICAgICB9O1xuXHQgICAgfVxuXHR9O1xuXHQvLyMgc291cmNlTWFwcGluZ1VSTERpc2FibGVkPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOXVaeTF6ZEdGamF5MTBjbUZqWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5NmIyNWxjeTlzYjI1bkxYTjBZV05yTFhSeVlXTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYklsOVRkR0ZqYTNSeVlXTmxJaXdpWDJkbGRGTjBZV05yZEhKaFkyVlhhWFJvVlc1allYVm5hSFJGY25KdmNpSXNJbDluWlhSVGRHRmphM1J5WVdObFYybDBhRU5oZFdkb2RFVnljbTl5SWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdSMEZMUnp0QlFVVklMRmxCUVZrc1EwRkJRenRCUVVWaUxIRkNRVUZ4UWl4RFFVRkRPMGxCUTNCQ1FTeEpRVUZKUVN4RFFVRkRRU3hGUVVGRlFTeEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFUdEJRVU5rUVN4RFFVRkRRVHRCUVVWRUxGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4SFFVRkhPMGxCUXpGQ0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNUVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVczdZVUZEYWtJc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF6dGhRVU5ZTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRPMkZCUTNKRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJSVVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRE8wRkJRM1pDTEVOQlFVTXNRMEZCUXp0QlFVVkdPMGxCUTBWRExFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxGZEJRVmRCTEVOQlFVTkJMRWxCUVVsQkxFdEJRVXRCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTzBGQlEzUkRRU3hEUVVGRFFUdEJRVVZFTzBsQlEwVkRMRWxCUVVsQkxFTkJRVU5CTzFGQlEwaEJMRTFCUVUxQkxFbEJRVWxCTEV0QlFVdEJMRVZCUVVWQkxFTkJRVU5CTzBsQlEzQkNRU3hEUVVGRlFUdEpRVUZCUVN4TFFVRkxRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVOWVFTeE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeFhRVUZYUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRKUVVNMVFrRXNRMEZCUTBFN1FVRkRTRUVzUTBGQlEwRTdRVUZGUkN4NVJrRkJlVVk3UVVGRGVrWXNlVVZCUVhsRk8wRkJRM3BGTEVsQlFVa3NTMEZCU3l4SFFVRkhMQ3RDUVVFclFpeEZRVUZGTEVOQlFVTTdRVUZGT1VNc1NVRkJTU3hqUVVGakxFZEJRVWNzUzBGQlN5eEpRVUZKTEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTenROUVVONFF5d3JRa0ZCSzBJN1RVRkRMMElzTmtKQlFUWkNMRU5CUVVNN1FVRkZja0lzTUVKQlFXdENMRWRCUVVjN1NVRkRhRU1zYVVKQlFXbENMRVZCUVVVc1ZVRkJWU3hUUVVGVE8xRkJRM0JETEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOb1FpeEpRVUZKTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRka0lzUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOa0xFVkJRVVVzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4cFFrRkJhVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGNrUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNN2NVSkJRMmhETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTTdjVUpCUTNKRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKQ0xFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNdlFpeERRVUZETzFGQlEwZ3NRMEZCUXp0UlFVTkVMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVnlRaXhQUVVGUExGZEJRVmNzU1VGQlNTeFhRVUZYTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVVzUTBGQlF6dFpRVU42UkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVOUUxFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8yZENRVU0zUkN4TFFVRkxMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzVjBGQlZ5eERRVUZETEdsQ1FVRnBRaXhEUVVGRExFZEJRVWNzVVVGQlVTeEZRVU40UkN4WFFVRlhMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVNNVF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVOdVF5eERRVUZETzFGQlJVUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVWRUxHbENRVUZwUWl4RlFVRkZMRlZCUVZVc1NVRkJTVHRSUVVNdlFpeE5RVUZOTEVOQlFVTXNRMEZCUXl3clFrRkJLMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRja1FzUTBGQlF6dEpRVVZFTEU5QlFVOHNSVUZCUlN4VlFVRlZMRk5CUVZNN1VVRkRNVUlzU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNeFJDeFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGREwwSXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRemxETEVOQlFVTTdTVUZGUkN4UFFVRlBMRVZCUVVVc1ZVRkJWU3hWUVVGVk8xRkJRek5DTEUxQlFVMHNRMEZCUXp0WlFVTk1MRWxCUVVrc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEU5QlFVOHNRMEZCUXl4elFrRkJjMElzUjBGQlJ5eGpRVUZqTEVWQlFVVXNRMEZCUXp0WlFVTnNSQ3hQUVVGUExFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzWkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU03VVVGRGFrSXNRMEZCUXl4RFFVRkJPMGxCUTBnc1EwRkJRenREUVVOR0xFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ29nVjNKaGNIQmxaQ0J6ZEdGamEzUnlZV05sWEc0Z0tseHVJQ29nVjJVZ2JtVmxaQ0IwYUdseklHSmxZMkYxYzJVZ2FXNGdjMjl0WlNCcGJYQnNaVzFsYm5SaGRHbHZibk1zSUdOdmJuTjBjblZqZEdsdVp5QmhJSFJ5WVdObElHbHpJSE5zYjNkY2JpQXFJR0Z1WkNCemJ5QjNaU0IzWVc1MElIUnZJR1JsWm1WeUlHRmpZMlZ6YzJsdVp5QjBhR1VnZEhKaFkyVWdabTl5SUdGeklHeHZibWNnWVhNZ2NHOXpjMmxpYkdWY2JpQXFMMXh1WEc0bmRYTmxJSE4wY21samRDYzdYRzVjYm1aMWJtTjBhVzl1SUY5VGRHRmphM1J5WVdObEtHVXBJSHRjYmlBZ2RHaHBjeTVmWlNBOUlHVTdYRzU5WEc1Y2JsOVRkR0ZqYTNSeVlXTmxMbkJ5YjNSdmRIbHdaUzVuWlhRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lHbG1JQ2huYkc5aVlXd3VlbTl1WlM1emRHRmphMFp5WVcxbGMwWnBiSFJsY2lBbUppQjBhR2x6TGw5bExuTjBZV05yS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyVXVjM1JoWTJ0Y2JpQWdJQ0FnSUM1emNHeHBkQ2duWEZ4dUp5bGNiaUFnSUNBZ0lDNW1hV3gwWlhJb1oyeHZZbUZzTG5wdmJtVXVjM1JoWTJ0R2NtRnRaWE5HYVd4MFpYSXBYRzRnSUNBZ0lDQXVhbTlwYmlnblhGeHVKeWs3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZEdocGN5NWZaUzV6ZEdGamF6dGNibjA3WEc1Y2JtWjFibU4wYVc5dUlGOW5aWFJUZEdGamEzUnlZV05sVjJsMGFGVnVZMkYxWjJoMFJYSnliM0lnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUY5VGRHRmphM1J5WVdObEtHNWxkeUJGY25KdmNpZ3BLVHRjYm4xY2JseHVablZ1WTNScGIyNGdYMmRsZEZOMFlXTnJkSEpoWTJWWGFYUm9RMkYxWjJoMFJYSnliM0lnS0NrZ2UxeHVJQ0IwY25rZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWdwTzF4dUlDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJmVTNSaFkydDBjbUZqWlNobEtUdGNiaUFnZlZ4dWZWeHVYRzR2THlCVGIyMWxJR2x0Y0d4bGJXVnVkR0YwYVc5dWN5QnZaaUJsZUdObGNIUnBiMjRnYUdGdVpHeHBibWNnWkc5dUozUWdZM0psWVhSbElHRWdjM1JoWTJzZ2RISmhZMlVnYVdZZ2RHaGxJR1Y0WTJWd2RHbHZibHh1THk4Z2FYTnVKM1FnZEdoeWIzZHVMQ0JvYjNkbGRtVnlJR2wwSjNNZ1ptRnpkR1Z5SUc1dmRDQjBieUJoWTNSMVlXeHNlU0IwYUhKdmR5QjBhR1VnWlhoalpYQjBhVzl1TGx4dWRtRnlJSE4wWVdOcklEMGdYMmRsZEZOMFlXTnJkSEpoWTJWWGFYUm9WVzVqWVhWbmFIUkZjbkp2Y2lncE8xeHVYRzUyWVhJZ1gyZGxkRk4wWVdOcmRISmhZMlVnUFNCemRHRmpheUFtSmlCemRHRmpheTVmWlM1emRHRmphMXh1SUNBL0lGOW5aWFJUZEdGamEzUnlZV05sVjJsMGFGVnVZMkYxWjJoMFJYSnliM0pjYmlBZ09pQmZaMlYwVTNSaFkydDBjbUZqWlZkcGRHaERZWFZuYUhSRmNuSnZjanRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR3h2Ym1kVGRHRmphMVJ5WVdObFdtOXVaU0E5SUh0Y2JpQWdaMlYwVEc5dVoxTjBZV05yZEhKaFkyVTZJR1oxYm1OMGFXOXVJQ2hsZUdObGNIUnBiMjRwSUh0Y2JpQWdJQ0IyWVhJZ2RISmhZMlZ6SUQwZ1cxMDdYRzRnSUNBZ2RtRnlJR04xY25KbGJuUmFiMjVsSUQwZ2RHaHBjenRjYmlBZ0lDQnBaaUFvWlhoalpYQjBhVzl1S1NCN1hHNGdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGcHZibVV1YzNSaFkydEdjbUZ0WlhOR2FXeDBaWElnSmlZZ1pYaGpaWEIwYVc5dUxuTjBZV05yS1NCN1hHNGdJQ0FnSUNBZ0lIUnlZV05sY3k1d2RYTm9LR1Y0WTJWd2RHbHZiaTV6ZEdGamF5NXpjR3hwZENnblhGeHVKeWxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdMbVpwYkhSbGNpaGpkWEp5Wlc1MFdtOXVaUzV6ZEdGamEwWnlZVzFsYzBacGJIUmxjaWxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdMbXB2YVc0b0oxeGNiaWNwS1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSeVlXTmxjeTV3ZFhOb0tHVjRZMlZ3ZEdsdmJpNXpkR0ZqYXlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSFpoY2lCdWIzY2dQU0JFWVhSbExtNXZkeWdwTzF4dVhHNGdJQ0FnZDJocGJHVWdLR04xY25KbGJuUmFiMjVsSUNZbUlHTjFjbkpsYm5SYWIyNWxMbU52Ym5OMGNuVmpkR1ZrUVhSRmVHTmxjSFJwYjI0cElIdGNiaUFnSUNBZ0lIUnlZV05sY3k1d2RYTm9LRnh1SUNBZ0lDQWdJQ0FnSUNjdExTMGdKeUFySUNodVpYY2dSR0YwWlNoamRYSnlaVzUwV205dVpTNWpiMjV6ZEhKMVkzUmxaRUYwVkdsdFpTa3BMblJ2VTNSeWFXNW5LQ2tnSzF4dUlDQWdJQ0FnSUNBZ0lDY2dMU0FuSUNzZ0tHNXZkeUF0SUdOMWNuSmxiblJhYjI1bExtTnZibk4wY25WamRHVmtRWFJVYVcxbEtTQXJJQ2R0Y3lCaFoyOG5MRnh1SUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJhYjI1bExtTnZibk4wY25WamRHVmtRWFJGZUdObGNIUnBiMjR1WjJWMEtDa3BPMXh1SUNBZ0lDQWdZM1Z5Y21WdWRGcHZibVVnUFNCamRYSnlaVzUwV205dVpTNXdZWEpsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJ5WVdObGN5NXFiMmx1S0NkY1hHNG5LVHRjYmlBZ2ZTeGNibHh1SUNCemRHRmphMFp5WVcxbGMwWnBiSFJsY2pvZ1puVnVZM1JwYjI0Z0tHeHBibVVwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdJUzk2YjI1bEtDMXRhV055YjNSaGMyc3BQeWhjWEM1dGFXNHBQMXhjTG1wekx5NTBaWE4wS0d4cGJtVXBPMXh1SUNCOUxGeHVYRzRnSUc5dVJYSnliM0k2SUdaMWJtTjBhVzl1SUNobGVHTmxjSFJwYjI0cElIdGNiaUFnSUNCMllYSWdjbVZ3YjNKMFpYSWdQU0IwYUdsekxuSmxjRzl5ZEdWeUlIeDhJR052Ym5OdmJHVXViRzluTG1KcGJtUW9ZMjl1YzI5c1pTazdYRzRnSUNBZ2NtVndiM0owWlhJb1pYaGpaWEIwYVc5dUxuUnZVM1J5YVc1bktDa3BPMXh1SUNBZ0lISmxjRzl5ZEdWeUtIUm9hWE11WjJWMFRHOXVaMU4wWVdOcmRISmhZMlVvWlhoalpYQjBhVzl1S1NrN1hHNGdJSDBzWEc1Y2JpQWdKeVJtYjNKckp6b2dablZ1WTNScGIyNGdLSEJoY21WdWRFWnZjbXNwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2JtVjNXbTl1WlNBOUlIQmhjbVZ1ZEVadmNtc3VZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1R0Y2JpQWdJQ0FnSUc1bGQxcHZibVV1WTI5dWMzUnlkV04wWldSQmRFVjRZMlZ3ZEdsdmJpQTlJRjluWlhSVGRHRmphM1J5WVdObEtDazdYRzRnSUNBZ0lDQnVaWGRhYjI1bExtTnZibk4wY25WamRHVmtRWFJVYVcxbElEMGdSR0YwWlM1dWIzY29LVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnVaWGRhYjI1bE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JseHVJbDE5XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG4vKipcbiBAbGljZW5zZVxuQXBhY2hlIExpY2Vuc2VcblxuVmVyc2lvbiAyLjAsIEphbnVhcnkgMjAwNFxuXG5odHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvIFxuXG5URVJNUyBBTkQgQ09ORElUSU9OUyBGT1IgVVNFLCBSRVBST0RVQ1RJT04sIEFORCBESVNUUklCVVRJT05cblxuMS4gRGVmaW5pdGlvbnMuXG5cblwiTGljZW5zZVwiIHNoYWxsIG1lYW4gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwgYW5kIGRpc3RyaWJ1dGlvbiBhcyBkZWZpbmVkIGJ5IFNlY3Rpb25zIDEgdGhyb3VnaCA5IG9mIHRoaXMgZG9jdW1lbnQuXG5cblwiTGljZW5zb3JcIiBzaGFsbCBtZWFuIHRoZSBjb3B5cmlnaHQgb3duZXIgb3IgZW50aXR5IGF1dGhvcml6ZWQgYnkgdGhlIGNvcHlyaWdodCBvd25lciB0aGF0IGlzIGdyYW50aW5nIHRoZSBMaWNlbnNlLlxuXG5cIkxlZ2FsIEVudGl0eVwiIHNoYWxsIG1lYW4gdGhlIHVuaW9uIG9mIHRoZSBhY3RpbmcgZW50aXR5IGFuZCBhbGwgb3RoZXIgZW50aXRpZXMgdGhhdCBjb250cm9sLCBhcmUgY29udHJvbGxlZCBieSwgb3IgYXJlIHVuZGVyIGNvbW1vbiBjb250cm9sIHdpdGggdGhhdCBlbnRpdHkuIEZvciB0aGUgcHVycG9zZXMgb2YgdGhpcyBkZWZpbml0aW9uLCBcImNvbnRyb2xcIiBtZWFucyAoaSkgdGhlIHBvd2VyLCBkaXJlY3Qgb3IgaW5kaXJlY3QsIHRvIGNhdXNlIHRoZSBkaXJlY3Rpb24gb3IgbWFuYWdlbWVudCBvZiBzdWNoIGVudGl0eSwgd2hldGhlciBieSBjb250cmFjdCBvciBvdGhlcndpc2UsIG9yIChpaSkgb3duZXJzaGlwIG9mIGZpZnR5IHBlcmNlbnQgKDUwJSkgb3IgbW9yZSBvZiB0aGUgb3V0c3RhbmRpbmcgc2hhcmVzLCBvciAoaWlpKSBiZW5lZmljaWFsIG93bmVyc2hpcCBvZiBzdWNoIGVudGl0eS5cblxuXCJZb3VcIiAob3IgXCJZb3VyXCIpIHNoYWxsIG1lYW4gYW4gaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkgZXhlcmNpc2luZyBwZXJtaXNzaW9ucyBncmFudGVkIGJ5IHRoaXMgTGljZW5zZS5cblxuXCJTb3VyY2VcIiBmb3JtIHNoYWxsIG1lYW4gdGhlIHByZWZlcnJlZCBmb3JtIGZvciBtYWtpbmcgbW9kaWZpY2F0aW9ucywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBzb2Z0d2FyZSBzb3VyY2UgY29kZSwgZG9jdW1lbnRhdGlvbiBzb3VyY2UsIGFuZCBjb25maWd1cmF0aW9uIGZpbGVzLlxuXG5cIk9iamVjdFwiIGZvcm0gc2hhbGwgbWVhbiBhbnkgZm9ybSByZXN1bHRpbmcgZnJvbSBtZWNoYW5pY2FsIHRyYW5zZm9ybWF0aW9uIG9yIHRyYW5zbGF0aW9uIG9mIGEgU291cmNlIGZvcm0sIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gY29tcGlsZWQgb2JqZWN0IGNvZGUsIGdlbmVyYXRlZCBkb2N1bWVudGF0aW9uLCBhbmQgY29udmVyc2lvbnMgdG8gb3RoZXIgbWVkaWEgdHlwZXMuXG5cblwiV29ya1wiIHNoYWxsIG1lYW4gdGhlIHdvcmsgb2YgYXV0aG9yc2hpcCwgd2hldGhlciBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0sIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBMaWNlbnNlLCBhcyBpbmRpY2F0ZWQgYnkgYSBjb3B5cmlnaHQgbm90aWNlIHRoYXQgaXMgaW5jbHVkZWQgaW4gb3IgYXR0YWNoZWQgdG8gdGhlIHdvcmsgKGFuIGV4YW1wbGUgaXMgcHJvdmlkZWQgaW4gdGhlIEFwcGVuZGl4IGJlbG93KS5cblxuXCJEZXJpdmF0aXZlIFdvcmtzXCIgc2hhbGwgbWVhbiBhbnkgd29yaywgd2hldGhlciBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0sIHRoYXQgaXMgYmFzZWQgb24gKG9yIGRlcml2ZWQgZnJvbSkgdGhlIFdvcmsgYW5kIGZvciB3aGljaCB0aGUgZWRpdG9yaWFsIHJldmlzaW9ucywgYW5ub3RhdGlvbnMsIGVsYWJvcmF0aW9ucywgb3Igb3RoZXIgbW9kaWZpY2F0aW9ucyByZXByZXNlbnQsIGFzIGEgd2hvbGUsIGFuIG9yaWdpbmFsIHdvcmsgb2YgYXV0aG9yc2hpcC4gRm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIExpY2Vuc2UsIERlcml2YXRpdmUgV29ya3Mgc2hhbGwgbm90IGluY2x1ZGUgd29ya3MgdGhhdCByZW1haW4gc2VwYXJhYmxlIGZyb20sIG9yIG1lcmVseSBsaW5rIChvciBiaW5kIGJ5IG5hbWUpIHRvIHRoZSBpbnRlcmZhY2VzIG9mLCB0aGUgV29yayBhbmQgRGVyaXZhdGl2ZSBXb3JrcyB0aGVyZW9mLlxuXG5cIkNvbnRyaWJ1dGlvblwiIHNoYWxsIG1lYW4gYW55IHdvcmsgb2YgYXV0aG9yc2hpcCwgaW5jbHVkaW5nIHRoZSBvcmlnaW5hbCB2ZXJzaW9uIG9mIHRoZSBXb3JrIGFuZCBhbnkgbW9kaWZpY2F0aW9ucyBvciBhZGRpdGlvbnMgdG8gdGhhdCBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiwgdGhhdCBpcyBpbnRlbnRpb25hbGx5IHN1Ym1pdHRlZCB0byBMaWNlbnNvciBmb3IgaW5jbHVzaW9uIGluIHRoZSBXb3JrIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIgb3IgYnkgYW4gaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkgYXV0aG9yaXplZCB0byBzdWJtaXQgb24gYmVoYWxmIG9mIHRoZSBjb3B5cmlnaHQgb3duZXIuIEZvciB0aGUgcHVycG9zZXMgb2YgdGhpcyBkZWZpbml0aW9uLCBcInN1Ym1pdHRlZFwiIG1lYW5zIGFueSBmb3JtIG9mIGVsZWN0cm9uaWMsIHZlcmJhbCwgb3Igd3JpdHRlbiBjb21tdW5pY2F0aW9uIHNlbnQgdG8gdGhlIExpY2Vuc29yIG9yIGl0cyByZXByZXNlbnRhdGl2ZXMsIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gY29tbXVuaWNhdGlvbiBvbiBlbGVjdHJvbmljIG1haWxpbmcgbGlzdHMsIHNvdXJjZSBjb2RlIGNvbnRyb2wgc3lzdGVtcywgYW5kIGlzc3VlIHRyYWNraW5nIHN5c3RlbXMgdGhhdCBhcmUgbWFuYWdlZCBieSwgb3Igb24gYmVoYWxmIG9mLCB0aGUgTGljZW5zb3IgZm9yIHRoZSBwdXJwb3NlIG9mIGRpc2N1c3NpbmcgYW5kIGltcHJvdmluZyB0aGUgV29yaywgYnV0IGV4Y2x1ZGluZyBjb21tdW5pY2F0aW9uIHRoYXQgaXMgY29uc3BpY3VvdXNseSBtYXJrZWQgb3Igb3RoZXJ3aXNlIGRlc2lnbmF0ZWQgaW4gd3JpdGluZyBieSB0aGUgY29weXJpZ2h0IG93bmVyIGFzIFwiTm90IGEgQ29udHJpYnV0aW9uLlwiXG5cblwiQ29udHJpYnV0b3JcIiBzaGFsbCBtZWFuIExpY2Vuc29yIGFuZCBhbnkgaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkgb24gYmVoYWxmIG9mIHdob20gYSBDb250cmlidXRpb24gaGFzIGJlZW4gcmVjZWl2ZWQgYnkgTGljZW5zb3IgYW5kIHN1YnNlcXVlbnRseSBpbmNvcnBvcmF0ZWQgd2l0aGluIHRoZSBXb3JrLlxuXG4yLiBHcmFudCBvZiBDb3B5cmlnaHQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLCB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZSBjb3B5cmlnaHQgbGljZW5zZSB0byByZXByb2R1Y2UsIHByZXBhcmUgRGVyaXZhdGl2ZSBXb3JrcyBvZiwgcHVibGljbHkgZGlzcGxheSwgcHVibGljbHkgcGVyZm9ybSwgc3VibGljZW5zZSwgYW5kIGRpc3RyaWJ1dGUgdGhlIFdvcmsgYW5kIHN1Y2ggRGVyaXZhdGl2ZSBXb3JrcyBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0uXG5cbjMuIEdyYW50IG9mIFBhdGVudCBMaWNlbnNlLiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGlzIExpY2Vuc2UsIGVhY2ggQ29udHJpYnV0b3IgaGVyZWJ5IGdyYW50cyB0byBZb3UgYSBwZXJwZXR1YWwsIHdvcmxkd2lkZSwgbm9uLWV4Y2x1c2l2ZSwgbm8tY2hhcmdlLCByb3lhbHR5LWZyZWUsIGlycmV2b2NhYmxlIChleGNlcHQgYXMgc3RhdGVkIGluIHRoaXMgc2VjdGlvbikgcGF0ZW50IGxpY2Vuc2UgdG8gbWFrZSwgaGF2ZSBtYWRlLCB1c2UsIG9mZmVyIHRvIHNlbGwsIHNlbGwsIGltcG9ydCwgYW5kIG90aGVyd2lzZSB0cmFuc2ZlciB0aGUgV29yaywgd2hlcmUgc3VjaCBsaWNlbnNlIGFwcGxpZXMgb25seSB0byB0aG9zZSBwYXRlbnQgY2xhaW1zIGxpY2Vuc2FibGUgYnkgc3VjaCBDb250cmlidXRvciB0aGF0IGFyZSBuZWNlc3NhcmlseSBpbmZyaW5nZWQgYnkgdGhlaXIgQ29udHJpYnV0aW9uKHMpIGFsb25lIG9yIGJ5IGNvbWJpbmF0aW9uIG9mIHRoZWlyIENvbnRyaWJ1dGlvbihzKSB3aXRoIHRoZSBXb3JrIHRvIHdoaWNoIHN1Y2ggQ29udHJpYnV0aW9uKHMpIHdhcyBzdWJtaXR0ZWQuIElmIFlvdSBpbnN0aXR1dGUgcGF0ZW50IGxpdGlnYXRpb24gYWdhaW5zdCBhbnkgZW50aXR5IChpbmNsdWRpbmcgYSBjcm9zcy1jbGFpbSBvciBjb3VudGVyY2xhaW0gaW4gYSBsYXdzdWl0KSBhbGxlZ2luZyB0aGF0IHRoZSBXb3JrIG9yIGEgQ29udHJpYnV0aW9uIGluY29ycG9yYXRlZCB3aXRoaW4gdGhlIFdvcmsgY29uc3RpdHV0ZXMgZGlyZWN0IG9yIGNvbnRyaWJ1dG9yeSBwYXRlbnQgaW5mcmluZ2VtZW50LCB0aGVuIGFueSBwYXRlbnQgbGljZW5zZXMgZ3JhbnRlZCB0byBZb3UgdW5kZXIgdGhpcyBMaWNlbnNlIGZvciB0aGF0IFdvcmsgc2hhbGwgdGVybWluYXRlIGFzIG9mIHRoZSBkYXRlIHN1Y2ggbGl0aWdhdGlvbiBpcyBmaWxlZC5cblxuNC4gUmVkaXN0cmlidXRpb24uIFlvdSBtYXkgcmVwcm9kdWNlIGFuZCBkaXN0cmlidXRlIGNvcGllcyBvZiB0aGUgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YgaW4gYW55IG1lZGl1bSwgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbnMsIGFuZCBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0sIHByb3ZpZGVkIHRoYXQgWW91IG1lZXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5Zb3UgbXVzdCBnaXZlIGFueSBvdGhlciByZWNpcGllbnRzIG9mIHRoZSBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgYSBjb3B5IG9mIHRoaXMgTGljZW5zZTsgYW5kXG5cbllvdSBtdXN0IGNhdXNlIGFueSBtb2RpZmllZCBmaWxlcyB0byBjYXJyeSBwcm9taW5lbnQgbm90aWNlcyBzdGF0aW5nIHRoYXQgWW91IGNoYW5nZWQgdGhlIGZpbGVzOyBhbmRcblxuWW91IG11c3QgcmV0YWluLCBpbiB0aGUgU291cmNlIGZvcm0gb2YgYW55IERlcml2YXRpdmUgV29ya3MgdGhhdCBZb3UgZGlzdHJpYnV0ZSwgYWxsIGNvcHlyaWdodCwgcGF0ZW50LCB0cmFkZW1hcmssIGFuZCBhdHRyaWJ1dGlvbiBub3RpY2VzIGZyb20gdGhlIFNvdXJjZSBmb3JtIG9mIHRoZSBXb3JrLCBleGNsdWRpbmcgdGhvc2Ugbm90aWNlcyB0aGF0IGRvIG5vdCBwZXJ0YWluIHRvIGFueSBwYXJ0IG9mIHRoZSBEZXJpdmF0aXZlIFdvcmtzOyBhbmRcblxuSWYgdGhlIFdvcmsgaW5jbHVkZXMgYSBcIk5PVElDRVwiIHRleHQgZmlsZSBhcyBwYXJ0IG9mIGl0cyBkaXN0cmlidXRpb24sIHRoZW4gYW55IERlcml2YXRpdmUgV29ya3MgdGhhdCBZb3UgZGlzdHJpYnV0ZSBtdXN0IGluY2x1ZGUgYSByZWFkYWJsZSBjb3B5IG9mIHRoZSBhdHRyaWJ1dGlvbiBub3RpY2VzIGNvbnRhaW5lZCB3aXRoaW4gc3VjaCBOT1RJQ0UgZmlsZSwgZXhjbHVkaW5nIHRob3NlIG5vdGljZXMgdGhhdCBkbyBub3QgcGVydGFpbiB0byBhbnkgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaW4gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgcGxhY2VzOiB3aXRoaW4gYSBOT1RJQ0UgdGV4dCBmaWxlIGRpc3RyaWJ1dGVkIGFzIHBhcnQgb2YgdGhlIERlcml2YXRpdmUgV29ya3M7IHdpdGhpbiB0aGUgU291cmNlIGZvcm0gb3IgZG9jdW1lbnRhdGlvbiwgaWYgcHJvdmlkZWQgYWxvbmcgd2l0aCB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgb3IsIHdpdGhpbiBhIGRpc3BsYXkgZ2VuZXJhdGVkIGJ5IHRoZSBEZXJpdmF0aXZlIFdvcmtzLCBpZiBhbmQgd2hlcmV2ZXIgc3VjaCB0aGlyZC1wYXJ0eSBub3RpY2VzIG5vcm1hbGx5IGFwcGVhci4gVGhlIGNvbnRlbnRzIG9mIHRoZSBOT1RJQ0UgZmlsZSBhcmUgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seSBhbmQgZG8gbm90IG1vZGlmeSB0aGUgTGljZW5zZS4gWW91IG1heSBhZGQgWW91ciBvd24gYXR0cmlidXRpb24gbm90aWNlcyB3aXRoaW4gRGVyaXZhdGl2ZSBXb3JrcyB0aGF0IFlvdSBkaXN0cmlidXRlLCBhbG9uZ3NpZGUgb3IgYXMgYW4gYWRkZW5kdW0gdG8gdGhlIE5PVElDRSB0ZXh0IGZyb20gdGhlIFdvcmssIHByb3ZpZGVkIHRoYXQgc3VjaCBhZGRpdGlvbmFsIGF0dHJpYnV0aW9uIG5vdGljZXMgY2Fubm90IGJlIGNvbnN0cnVlZCBhcyBtb2RpZnlpbmcgdGhlIExpY2Vuc2UuIFlvdSBtYXkgYWRkIFlvdXIgb3duIGNvcHlyaWdodCBzdGF0ZW1lbnQgdG8gWW91ciBtb2RpZmljYXRpb25zIGFuZCBtYXkgcHJvdmlkZSBhZGRpdGlvbmFsIG9yIGRpZmZlcmVudCBsaWNlbnNlIHRlcm1zIGFuZCBjb25kaXRpb25zIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwgb3IgZGlzdHJpYnV0aW9uIG9mIFlvdXIgbW9kaWZpY2F0aW9ucywgb3IgZm9yIGFueSBzdWNoIERlcml2YXRpdmUgV29ya3MgYXMgYSB3aG9sZSwgcHJvdmlkZWQgWW91ciB1c2UsIHJlcHJvZHVjdGlvbiwgYW5kIGRpc3RyaWJ1dGlvbiBvZiB0aGUgV29yayBvdGhlcndpc2UgY29tcGxpZXMgd2l0aCB0aGUgY29uZGl0aW9ucyBzdGF0ZWQgaW4gdGhpcyBMaWNlbnNlLlxuXG41LiBTdWJtaXNzaW9uIG9mIENvbnRyaWJ1dGlvbnMuIFVubGVzcyBZb3UgZXhwbGljaXRseSBzdGF0ZSBvdGhlcndpc2UsIGFueSBDb250cmlidXRpb24gaW50ZW50aW9uYWxseSBzdWJtaXR0ZWQgZm9yIGluY2x1c2lvbiBpbiB0aGUgV29yayBieSBZb3UgdG8gdGhlIExpY2Vuc29yIHNoYWxsIGJlIHVuZGVyIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGlzIExpY2Vuc2UsIHdpdGhvdXQgYW55IGFkZGl0aW9uYWwgdGVybXMgb3IgY29uZGl0aW9ucy4gTm90d2l0aHN0YW5kaW5nIHRoZSBhYm92ZSwgbm90aGluZyBoZXJlaW4gc2hhbGwgc3VwZXJzZWRlIG9yIG1vZGlmeSB0aGUgdGVybXMgb2YgYW55IHNlcGFyYXRlIGxpY2Vuc2UgYWdyZWVtZW50IHlvdSBtYXkgaGF2ZSBleGVjdXRlZCB3aXRoIExpY2Vuc29yIHJlZ2FyZGluZyBzdWNoIENvbnRyaWJ1dGlvbnMuXG5cbjYuIFRyYWRlbWFya3MuIFRoaXMgTGljZW5zZSBkb2VzIG5vdCBncmFudCBwZXJtaXNzaW9uIHRvIHVzZSB0aGUgdHJhZGUgbmFtZXMsIHRyYWRlbWFya3MsIHNlcnZpY2UgbWFya3MsIG9yIHByb2R1Y3QgbmFtZXMgb2YgdGhlIExpY2Vuc29yLCBleGNlcHQgYXMgcmVxdWlyZWQgZm9yIHJlYXNvbmFibGUgYW5kIGN1c3RvbWFyeSB1c2UgaW4gZGVzY3JpYmluZyB0aGUgb3JpZ2luIG9mIHRoZSBXb3JrIGFuZCByZXByb2R1Y2luZyB0aGUgY29udGVudCBvZiB0aGUgTk9USUNFIGZpbGUuXG5cbjcuIERpc2NsYWltZXIgb2YgV2FycmFudHkuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgTGljZW5zb3IgcHJvdmlkZXMgdGhlIFdvcmsgKGFuZCBlYWNoIENvbnRyaWJ1dG9yIHByb3ZpZGVzIGl0cyBDb250cmlidXRpb25zKSBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLCBpbmNsdWRpbmcsIHdpdGhvdXQgbGltaXRhdGlvbiwgYW55IHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBUSVRMRSwgTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZLCBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gWW91IGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIGRldGVybWluaW5nIHRoZSBhcHByb3ByaWF0ZW5lc3Mgb2YgdXNpbmcgb3IgcmVkaXN0cmlidXRpbmcgdGhlIFdvcmsgYW5kIGFzc3VtZSBhbnkgcmlza3MgYXNzb2NpYXRlZCB3aXRoIFlvdXIgZXhlcmNpc2Ugb2YgcGVybWlzc2lvbnMgdW5kZXIgdGhpcyBMaWNlbnNlLlxuXG44LiBMaW1pdGF0aW9uIG9mIExpYWJpbGl0eS4gSW4gbm8gZXZlbnQgYW5kIHVuZGVyIG5vIGxlZ2FsIHRoZW9yeSwgd2hldGhlciBpbiB0b3J0IChpbmNsdWRpbmcgbmVnbGlnZW5jZSksIGNvbnRyYWN0LCBvciBvdGhlcndpc2UsIHVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyAoc3VjaCBhcyBkZWxpYmVyYXRlIGFuZCBncm9zc2x5IG5lZ2xpZ2VudCBhY3RzKSBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc2hhbGwgYW55IENvbnRyaWJ1dG9yIGJlIGxpYWJsZSB0byBZb3UgZm9yIGRhbWFnZXMsIGluY2x1ZGluZyBhbnkgZGlyZWN0LCBpbmRpcmVjdCwgc3BlY2lhbCwgaW5jaWRlbnRhbCwgb3IgY29uc2VxdWVudGlhbCBkYW1hZ2VzIG9mIGFueSBjaGFyYWN0ZXIgYXJpc2luZyBhcyBhIHJlc3VsdCBvZiB0aGlzIExpY2Vuc2Ugb3Igb3V0IG9mIHRoZSB1c2Ugb3IgaW5hYmlsaXR5IHRvIHVzZSB0aGUgV29yayAoaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBkYW1hZ2VzIGZvciBsb3NzIG9mIGdvb2R3aWxsLCB3b3JrIHN0b3BwYWdlLCBjb21wdXRlciBmYWlsdXJlIG9yIG1hbGZ1bmN0aW9uLCBvciBhbnkgYW5kIGFsbCBvdGhlciBjb21tZXJjaWFsIGRhbWFnZXMgb3IgbG9zc2VzKSwgZXZlbiBpZiBzdWNoIENvbnRyaWJ1dG9yIGhhcyBiZWVuIGFkdmlzZWQgb2YgdGhlIHBvc3NpYmlsaXR5IG9mIHN1Y2ggZGFtYWdlcy5cblxuOS4gQWNjZXB0aW5nIFdhcnJhbnR5IG9yIEFkZGl0aW9uYWwgTGlhYmlsaXR5LiBXaGlsZSByZWRpc3RyaWJ1dGluZyB0aGUgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIFlvdSBtYXkgY2hvb3NlIHRvIG9mZmVyLCBhbmQgY2hhcmdlIGEgZmVlIGZvciwgYWNjZXB0YW5jZSBvZiBzdXBwb3J0LCB3YXJyYW50eSwgaW5kZW1uaXR5LCBvciBvdGhlciBsaWFiaWxpdHkgb2JsaWdhdGlvbnMgYW5kL29yIHJpZ2h0cyBjb25zaXN0ZW50IHdpdGggdGhpcyBMaWNlbnNlLiBIb3dldmVyLCBpbiBhY2NlcHRpbmcgc3VjaCBvYmxpZ2F0aW9ucywgWW91IG1heSBhY3Qgb25seSBvbiBZb3VyIG93biBiZWhhbGYgYW5kIG9uIFlvdXIgc29sZSByZXNwb25zaWJpbGl0eSwgbm90IG9uIGJlaGFsZiBvZiBhbnkgb3RoZXIgQ29udHJpYnV0b3IsIGFuZCBvbmx5IGlmIFlvdSBhZ3JlZSB0byBpbmRlbW5pZnksIGRlZmVuZCwgYW5kIGhvbGQgZWFjaCBDb250cmlidXRvciBoYXJtbGVzcyBmb3IgYW55IGxpYWJpbGl0eSBpbmN1cnJlZCBieSwgb3IgY2xhaW1zIGFzc2VydGVkIGFnYWluc3QsIHN1Y2ggQ29udHJpYnV0b3IgYnkgcmVhc29uIG9mIHlvdXIgYWNjZXB0aW5nIGFueSBzdWNoIHdhcnJhbnR5IG9yIGFkZGl0aW9uYWwgbGlhYmlsaXR5LlxuXG5FTkQgT0YgVEVSTVMgQU5EIENPTkRJVElPTlNcbiAqL1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChDKSBNaWNyb3NvZnQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxudmFyIFJlZmxlY3Q7XHJcbihmdW5jdGlvbiAoUmVmbGVjdCkge1xyXG4gICAgLy8gTG9hZCBnbG9iYWwgb3Igc2hpbSB2ZXJzaW9ucyBvZiBNYXAsIFNldCwgYW5kIFdlYWtNYXBcclxuICAgIHZhciBmdW5jdGlvblByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbik7XHJcbiAgICB2YXIgX01hcCA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IE1hcCA6IENyZWF0ZU1hcFBvbHlmaWxsKCk7XHJcbiAgICB2YXIgX1NldCA9IHR5cGVvZiBTZXQgPT09IFwiZnVuY3Rpb25cIiA/IFNldCA6IENyZWF0ZVNldFBvbHlmaWxsKCk7XHJcbiAgICB2YXIgX1dlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gXCJmdW5jdGlvblwiID8gV2Vha01hcCA6IENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpO1xyXG4gICAgLy8gW1tNZXRhZGF0YV1dIGludGVybmFsIHNsb3RcclxuICAgIHZhciBfX01ldGFkYXRhX18gPSBuZXcgX1dlYWtNYXAoKTtcclxuICAgIC8qKlxyXG4gICAgICAqIEFwcGxpZXMgYSBzZXQgb2YgZGVjb3JhdG9ycyB0byBhIHByb3BlcnR5IG9mIGEgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gZGVjb3JhdG9ycyBBbiBhcnJheSBvZiBkZWNvcmF0b3JzLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3QuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgdG8gZGVjb3JhdGUuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldERlc2NyaXB0b3IgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkgZGVzY3JpcHRvciBmb3IgdGhlIHRhcmdldCBrZXlcclxuICAgICAgKiBAcmVtYXJrcyBEZWNvcmF0b3JzIGFyZSBhcHBsaWVkIGluIHJldmVyc2Ugb3JkZXIuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBDIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICBDID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEMpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEMsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEMucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDLCBcInN0YXRpY01ldGhvZFwiLFxyXG4gICAgICAqICAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEMsIFwic3RhdGljTWV0aG9kXCIsXHJcbiAgICAgICogICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDLCBcInN0YXRpY01ldGhvZFwiKSkpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQy5wcm90b3R5cGUsIFwibWV0aG9kXCIsXHJcbiAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgQy5wcm90b3R5cGUsIFwibWV0aG9kXCIsXHJcbiAgICAgICogICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDLnByb3RvdHlwZSwgXCJtZXRob2RcIikpKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCB0YXJnZXRLZXksIHRhcmdldERlc2NyaXB0b3IpIHtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldERlc2NyaXB0b3IpKSB7XHJcbiAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFJc09iamVjdCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoSXNVbmRlZmluZWQodGFyZ2V0S2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFJc09iamVjdCh0YXJnZXREZXNjcmlwdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlUHJvcGVydHlXaXRoRGVzY3JpcHRvcihkZWNvcmF0b3JzLCB0YXJnZXQsIHRhcmdldEtleSwgdGFyZ2V0RGVzY3JpcHRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKSB7XHJcbiAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFJc09iamVjdCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVQcm9wZXJ0eVdpdGhvdXREZXNjcmlwdG9yKGRlY29yYXRvcnMsIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFJc0NvbnN0cnVjdG9yKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJlZmxlY3QuZGVjb3JhdGUgPSBkZWNvcmF0ZTtcclxuICAgIC8qKlxyXG4gICAgICAqIEEgZGVmYXVsdCBtZXRhZGF0YSBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGNhbiBiZSB1c2VkIG9uIGEgY2xhc3MsIGNsYXNzIG1lbWJlciwgb3IgcGFyYW1ldGVyLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBUaGUga2V5IGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXHJcbiAgICAgICogQHJldHVybnMgQSBkZWNvcmF0b3IgZnVuY3Rpb24uXHJcbiAgICAgICogQHJlbWFya3NcclxuICAgICAgKiBJZiBgbWV0YWRhdGFLZXlgIGlzIGFscmVhZHkgZGVmaW5lZCBmb3IgdGhlIHRhcmdldCBhbmQgdGFyZ2V0IGtleSwgdGhlXHJcbiAgICAgICogbWV0YWRhdGFWYWx1ZSBmb3IgdGhhdCBrZXkgd2lsbCBiZSBvdmVyd3JpdHRlbi5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgIGNsYXNzIEMge1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yLCBUeXBlU2NyaXB0IG9ubHkpXHJcbiAgICAgICogICAgIGNsYXNzIEMge1xyXG4gICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUsIFR5cGVTY3JpcHQgb25seSlcclxuICAgICAgKiAgICAgY2xhc3MgQyB7XHJcbiAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICAgICAgcHJvcGVydHk7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBjbGFzcyBDIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgY2xhc3MgQyB7XHJcbiAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgICAgICBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgICAgICBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogRGVmaW5lIGEgdW5pcXVlIG1ldGFkYXRhIGVudHJ5IG9uIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIEEgdmFsdWUgdGhhdCBjb250YWlucyBhdHRhY2hlZCBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRvIGRlZmluZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEMge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBDKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBDLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBDLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgQywgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBDLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gZGVjb3JhdG9yIGZhY3RvcnkgYXMgbWV0YWRhdGEtcHJvZHVjaW5nIGFubm90YXRpb24uXHJcbiAgICAgICogICAgIGZ1bmN0aW9uIE15QW5ub3RhdGlvbihvcHRpb25zKTogRGVjb3JhdG9yIHtcclxuICAgICAgKiAgICAgICAgIHJldHVybiAodGFyZ2V0LCBrZXk/KSA9PiBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgdGFyZ2V0LCBrZXkpO1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEgPSBkZWZpbmVNZXRhZGF0YTtcclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbiBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW47IG90aGVyd2lzZSwgYGZhbHNlYC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEMge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBDKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBDLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBDLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQywgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBDLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuaGFzTWV0YWRhdGEgPSBoYXNNZXRhZGF0YTtcclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3QgaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgQyB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEMpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEMsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEMucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBDLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEMucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIUlzVW5kZWZpbmVkKHRhcmdldEtleSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0S2V5ID0gVG9Qcm9wZXJ0eUtleSh0YXJnZXRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5oYXNPd25NZXRhZGF0YSA9IGhhc093bk1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBDIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQyk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQywgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQy5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEMsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQy5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSkge1xyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeUdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmdldE1ldGFkYXRhID0gZ2V0TWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBDIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQyk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQywgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQy5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEMsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQy5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSkge1xyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmdldE93bk1ldGFkYXRhID0gZ2V0T3duTWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSBrZXlzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgQyB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoQyk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhDLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEMucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEMsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhDLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5TWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzID0gZ2V0TWV0YWRhdGFLZXlzO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgdW5pcXVlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXRLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgQyB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoQyk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhDLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEMucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEMsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhDLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFJc1VuZGVmaW5lZCh0YXJnZXRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldEtleSA9IFRvUHJvcGVydHlLZXkodGFyZ2V0S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzID0gZ2V0T3duTWV0YWRhdGFLZXlzO1xyXG4gICAgLyoqXHJcbiAgICAgICogRGVsZXRlcyB0aGUgbWV0YWRhdGEgZW50cnkgZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldEtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBlbnRyeSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQ7IG90aGVyd2lzZSwgZmFsc2UuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBDIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQyk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQywgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQy5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEMsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgQy5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghSXNVbmRlZmluZWQodGFyZ2V0S2V5KSkge1xyXG4gICAgICAgICAgICB0YXJnZXRLZXkgPSBUb1Byb3BlcnR5S2V5KHRhcmdldEtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25hdGhhbmR0dXJuZXIvZGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjcy9tZXRhZGF0YS5tZCNkZWxldGVtZXRhZGF0YS1tZXRhZGF0YWtleS1wLVxyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIGZhbHNlKTtcclxuICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtZXRhZGF0YU1hcC5kZWxldGUobWV0YWRhdGFLZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBfX01ldGFkYXRhX18uZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgdGFyZ2V0TWV0YWRhdGEuZGVsZXRlKHRhcmdldEtleSk7XHJcbiAgICAgICAgaWYgKHRhcmdldE1ldGFkYXRhLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX01ldGFkYXRhX18uZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhID0gZGVsZXRlTWV0YWRhdGE7XHJcbiAgICBmdW5jdGlvbiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKGRlY29yYXRlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBkZWNvcmF0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIERlY29yYXRlUHJvcGVydHlXaXRoRGVzY3JpcHRvcihkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XHJcbiAgICAgICAgICAgIHZhciBkZWNvcmF0ZWQgPSBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XHJcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChkZWNvcmF0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIERlY29yYXRlUHJvcGVydHlXaXRob3V0RGVzY3JpcHRvcihkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XHJcbiAgICAgICAgICAgIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vam9uYXRoYW5kdHVybmVyL2RlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlY3MvbWV0YWRhdGEubWQjZ2V0b3JjcmVhdGVtZXRhZGF0YW1hcC0tby1wLWNyZWF0ZS1cclxuICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIGNyZWF0ZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IF9fTWV0YWRhdGFfXy5nZXQodGFyZ2V0KTtcclxuICAgICAgICBpZiAoIXRhcmdldE1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghY3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhID0gbmV3IF9NYXAoKTtcclxuICAgICAgICAgICAgX19NZXRhZGF0YV9fLnNldCh0YXJnZXQsIHRhcmdldE1ldGFkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGtleU1ldGFkYXRhID0gdGFyZ2V0TWV0YWRhdGEuZ2V0KHRhcmdldEtleSk7XHJcbiAgICAgICAgaWYgKCFrZXlNZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWNyZWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXlNZXRhZGF0YSA9IG5ldyBfTWFwKCk7XHJcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhLnNldCh0YXJnZXRLZXksIGtleU1ldGFkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleU1ldGFkYXRhO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvbmF0aGFuZHR1cm5lci9kZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWNzL21ldGFkYXRhLm1kI29yZGluYXJ5aGFzbWV0YWRhdGEtLW1ldGFkYXRha2V5LW8tcC1cclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcclxuICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XHJcbiAgICAgICAgaWYgKGhhc093bikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IEdldFByb3RvdHlwZU9mKE8pO1xyXG4gICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25hdGhhbmR0dXJuZXIvZGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjcy9tZXRhZGF0YS5tZCNvcmRpbmFyeWhhc293bm1ldGFkYXRhLS1tZXRhZGF0YWtleS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQm9vbGVhbihtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpKTtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25hdGhhbmR0dXJuZXIvZGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjcy9tZXRhZGF0YS5tZCNvcmRpbmFyeWdldG1ldGFkYXRhLS1tZXRhZGF0YWtleS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xyXG4gICAgICAgIGlmIChoYXNPd24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFyZW50ID0gR2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25hdGhhbmR0dXJuZXIvZGVjb3JhdG9ycy9ibG9iL21hc3Rlci9zcGVjcy9tZXRhZGF0YS5tZCNvcmRpbmFyeWdldG93bm1ldGFkYXRhLS1tZXRhZGF0YWtleS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vam9uYXRoYW5kdHVybmVyL2RlY29yYXRvcnMvYmxvYi9tYXN0ZXIvc3BlY3MvbWV0YWRhdGEubWQjb3JkaW5hcnlkZWZpbmVvd25tZXRhZGF0YS0tbWV0YWRhdGFrZXktbWV0YWRhdGF2YWx1ZS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCB0cnVlKTtcclxuICAgICAgICBtZXRhZGF0YU1hcC5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvbmF0aGFuZHR1cm5lci9kZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWNzL21ldGFkYXRhLm1kI29yZGluYXJ5bWV0YWRhdGFrZXlzLS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKSB7XHJcbiAgICAgICAgdmFyIG93bktleXMgPSBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gR2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3duS2V5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhcmVudEtleXMgPSBPcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xyXG4gICAgICAgIGlmIChwYXJlbnRLZXlzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3duS2V5cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50S2V5cztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNldCA9IG5ldyBfU2V0KCk7XHJcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgb3duS2V5cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG93bktleXNbX2ldO1xyXG4gICAgICAgICAgICB2YXIgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xyXG4gICAgICAgICAgICBpZiAoIWhhc0tleSkge1xyXG4gICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwOyBfYSA8IHBhcmVudEtleXMubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBwYXJlbnRLZXlzW19hXTtcclxuICAgICAgICAgICAgdmFyIGhhc0tleSA9IHNldC5oYXMoa2V5KTtcclxuICAgICAgICAgICAgaWYgKCFoYXNLZXkpIHtcclxuICAgICAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvbmF0aGFuZHR1cm5lci9kZWNvcmF0b3JzL2Jsb2IvbWFzdGVyL3NwZWNzL21ldGFkYXRhLm1kI29yZGluYXJ5b3dubWV0YWRhdGFrZXlzLS1vLXAtXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHRhcmdldEtleSkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIGZhbHNlKTtcclxuICAgICAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgICAgIGlmIChtZXRhZGF0YU1hcCkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YU1hcC5mb3JFYWNoKGZ1bmN0aW9uIChfLCBrZXkpIHsgcmV0dXJuIGtleXMucHVzaChrZXkpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy11bmRlZmluZWQtdHlwZVxyXG4gICAgZnVuY3Rpb24gSXNVbmRlZmluZWQoeCkge1xyXG4gICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxyXG4gICAgZnVuY3Rpb24gSXNBcnJheSh4KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoeCk7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LXR5cGVcclxuICAgIGZ1bmN0aW9uIElzT2JqZWN0KHgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgPyB4ICE9PSBudWxsIDogdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NvbnN0cnVjdG9yXHJcbiAgICBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKHgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH1cclxuICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLXN5bWJvbC10eXBlXHJcbiAgICBmdW5jdGlvbiBJc1N5bWJvbCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xyXG4gICAgfVxyXG4gICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcclxuICAgIGZ1bmN0aW9uIFRvUHJvcGVydHlLZXkodmFsdWUpIHtcclxuICAgICAgICBpZiAoSXNTeW1ib2wodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBHZXRQcm90b3R5cGVPZihPKSB7XHJcbiAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pO1xyXG4gICAgICAgIGlmICh0eXBlb2YgTyAhPT0gXCJmdW5jdGlvblwiIHx8IE8gPT09IGZ1bmN0aW9uUHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVHlwZVNjcmlwdCBkb2Vzbid0IHNldCBfX3Byb3RvX18gaW4gRVM1LCBhcyBpdCdzIG5vbi1zdGFuZGFyZC4gXHJcbiAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSB0aGUgc3VwZXJjbGFzcyBjb25zdHJ1Y3Rvci4gQ29tcGF0aWJsZSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAgICAvLyBtdXN0IGVpdGhlciBzZXQgX19wcm90b19fIG9uIGEgc3ViY2xhc3MgY29uc3RydWN0b3IgdG8gdGhlIHN1cGVyY2xhc3MgY29uc3RydWN0b3IsXHJcbiAgICAgICAgLy8gb3IgZW5zdXJlIGVhY2ggY2xhc3MgaGFzIGEgdmFsaWQgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSBvbiBpdHMgcHJvdG90eXBlIHRoYXRcclxuICAgICAgICAvLyBwb2ludHMgYmFjayB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgRnVuY3Rpb24uW1tQcm90b3R5cGVdXSwgdGhlbiB0aGlzIGlzIGRlZmluYXRlbHkgaW5oZXJpdGVkLlxyXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGNhc2Ugd2hlbiBpbiBFUzYgb3Igd2hlbiB1c2luZyBfX3Byb3RvX18gaW4gYSBjb21wYXRpYmxlIGJyb3dzZXIuXHJcbiAgICAgICAgaWYgKHByb3RvICE9PSBmdW5jdGlvblByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHRoZSBzdXBlciBwcm90b3R5cGUgaXMgT2JqZWN0LnByb3RvdHlwZSwgbnVsbCwgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIHZhciBwcm90b3R5cGUgPSBPLnByb3RvdHlwZTtcclxuICAgICAgICB2YXIgcHJvdG90eXBlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcclxuICAgICAgICBpZiAocHJvdG90eXBlUHJvdG8gPT0gbnVsbCB8fCBwcm90b3R5cGVQcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHRoZSBjb25zdHJ1Y3RvciB3YXMgbm90IGEgZnVuY3Rpb24sIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gcHJvdG90eXBlUHJvdG8uY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBzb21lIGtpbmQgb2Ygc2VsZi1yZWZlcmVuY2UsIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09PSBPKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2UgaGF2ZSBhIHByZXR0eSBnb29kIGd1ZXNzIGF0IHRoZSBoZXJpdGFnZS5cclxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICAvLyBuYWl2ZSBNYXAgc2hpbVxyXG4gICAgZnVuY3Rpb24gQ3JlYXRlTWFwUG9seWZpbGwoKSB7XHJcbiAgICAgICAgdmFyIGNhY2hlU2VudGluZWwgPSB7fTtcclxuICAgICAgICBmdW5jdGlvbiBNYXAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlID0gY2FjaGVTZW50aW5lbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgTWFwLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZ2V0IHNpemUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhczogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5fY2FjaGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9maW5kKGtleSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZSA9IGtleTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlID0gY2FjaGVTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBjYWNoZVNlbnRpbmVsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3JFYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5fa2V5c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl92YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB2YWx1ZSwga2V5LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgX2ZpbmQ6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5fa2V5cztcclxuICAgICAgICAgICAgICAgIHZhciBzaXplID0ga2V5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gTWFwO1xyXG4gICAgfVxyXG4gICAgLy8gbmFpdmUgU2V0IHNoaW1cclxuICAgIGZ1bmN0aW9uIENyZWF0ZVNldFBvbHlmaWxsKCkge1xyXG4gICAgICAgIHZhciBjYWNoZVNlbnRpbmVsID0ge307XHJcbiAgICAgICAgZnVuY3Rpb24gU2V0KCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgX01hcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTZXQucHJvdG90eXBlID0ge1xyXG4gICAgICAgICAgICBnZXQgc2l6ZSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoYXM6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcC5oYXModmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwLnNldCh2YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXAuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9yRWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXAuZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBTZXQ7XHJcbiAgICB9XHJcbiAgICAvLyBuYWl2ZSBXZWFrTWFwIHNoaW1cclxuICAgIGZ1bmN0aW9uIENyZWF0ZVdlYWtNYXBQb2x5ZmlsbCgpIHtcclxuICAgICAgICB2YXIgVVVJRF9TSVpFID0gMTY7XHJcbiAgICAgICAgdmFyIGlzTm9kZSA9IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xyXG4gICAgICAgIHZhciBub2RlQ3J5cHRvID0gaXNOb2RlICYmIHJlcXVpcmUoXCJjcnlwdG9cIik7XHJcbiAgICAgICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbiAgICAgICAgdmFyIGtleXMgPSB7fTtcclxuICAgICAgICB2YXIgcm9vdEtleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBXZWFrTWFwLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgaGFzOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXkgaW4gdGFibGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGVbdGhpcy5fa2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZVt0aGlzLl9rZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJsZSAmJiB0aGlzLl9rZXkgaW4gdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlIHRhYmxlW3RoaXMuX2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiBub3QgYSByZWFsIGNsZWFyLCBqdXN0IG1ha2VzIHRoZSBwcmV2aW91cyBkYXRhIHVucmVhY2hhYmxlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gRmlsbFJhbmRvbUJ5dGVzKGJ1ZmZlciwgc2l6ZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gTWF0aC5yYW5kb20oKSAqIDI1NSB8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gR2VuUmFuZG9tQnl0ZXMoc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAobm9kZUNyeXB0bykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBub2RlQ3J5cHRvLnJhbmRvbUJ5dGVzKHNpemUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheShzaXplKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIEZpbGxSYW5kb21CeXRlcyhkYXRhLCBzaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgQXJyYXkoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBGaWxsUmFuZG9tQnl0ZXMoZGF0YSwgc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVVVUlEKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEdlblJhbmRvbUJ5dGVzKFVVSURfU0laRSk7XHJcbiAgICAgICAgICAgIC8vIG1hcmsgYXMgcmFuZG9tIC0gUkZDIDQxMjIgwqcgNC40XHJcbiAgICAgICAgICAgIGRhdGFbNl0gPSBkYXRhWzZdICYgMHg0ZiB8IDB4NDA7XHJcbiAgICAgICAgICAgIGRhdGFbOF0gPSBkYXRhWzhdICYgMHhiZiB8IDB4ODA7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBVVUlEX1NJWkU7ICsrb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnl0ZSA9IGRhdGFbb2Zmc2V0XTtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IDQgfHwgb2Zmc2V0ID09PSA2IHx8IG9mZnNldCA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChieXRlIDwgMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gYnl0ZS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVVbmlxdWVLZXkoKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IFwiQEBXZWFrTWFwQEBcIiArIENyZWF0ZVVVSUQoKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoaGFzT3duLmNhbGwoa2V5cywga2V5KSk7XHJcbiAgICAgICAgICAgIGtleXNba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgY3JlYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duLmNhbGwodGFyZ2V0LCByb290S2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcm9vdEtleSwgeyB2YWx1ZTogT2JqZWN0LmNyZWF0ZShudWxsKSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Jvb3RLZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gV2Vha01hcDtcclxuICAgIH1cclxuICAgIC8vIGhvb2sgZ2xvYmFsIFJlZmxlY3RcclxuICAgIChmdW5jdGlvbiAoX19nbG9iYWwpIHtcclxuICAgICAgICBpZiAodHlwZW9mIF9fZ2xvYmFsLlJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKF9fZ2xvYmFsLlJlZmxlY3QgIT09IFJlZmxlY3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gUmVmbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9fZ2xvYmFsLlJlZmxlY3RbcF0gPSBSZWZsZWN0W3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfX2dsb2JhbC5SZWZsZWN0ID0gUmVmbGVjdDtcclxuICAgICAgICB9XHJcbiAgICB9KSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDpcclxuICAgICAgICB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDpcclxuICAgICAgICAgICAgdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6XHJcbiAgICAgICAgICAgICAgICBGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpKTtcclxufSkoUmVmbGVjdCB8fCAoUmVmbGVjdCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMRGlzYWJsZWQ9UmVmbGVjdC5qcy5tYXAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=