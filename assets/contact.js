/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ID: function() { return /* binding */ DEFAULT_ID; },
/* harmony export */   Loader: function() { return /* binding */ Loader; },
/* harmony export */   LoaderStatus: function() { return /* binding */ LoaderStatus; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     * @deprecated
     */
    createUrl() {
        let url = this.url;
        url += `?callback=__googleMapsCallback`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     * @deprecated, use importLibrary() instead.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     * @deprecated, use importLibrary() instead.
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    importLibrary(name) {
        this.execute();
        return google.maps.importLibrary(name);
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     * @deprecated, use importLibrary() instead.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        var _a, _b;
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const params = {
            key: this.apiKey,
            channel: this.channel,
            client: this.client,
            libraries: this.libraries.length && this.libraries,
            v: this.version,
            mapIds: this.mapIds,
            language: this.language,
            region: this.region,
            authReferrerPolicy: this.authReferrerPolicy,
        };
        // keep the URL minimal:
        Object.keys(params).forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key) => !params[key] && delete params[key]);
        if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
            // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
            // which also sets the base url, the id, and the nonce
            /* eslint-disable */
            ((g) => {
                // @ts-ignore
                let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
                // @ts-ignore
                b = b[c] || (b[c] = {});
                // @ts-ignore
                const d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => 
                // @ts-ignore
                h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    yield (a = m.createElement("script"));
                    a.id = this.id;
                    e.set("libraries", [...r] + "");
                    // @ts-ignore
                    for (k in g)
                        e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
                    e.set("callback", c + ".maps." + q);
                    a.src = this.url + `?` + e;
                    d[q] = f;
                    a.onerror = () => (h = n(Error(p + " could not load.")));
                    // @ts-ignore
                    a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
                    m.head.append(a);
                })));
                // @ts-ignore
                d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
            })(params);
            /* eslint-enable */
        }
        // While most libraries populate the global namespace when loaded via bootstrap params,
        // this is not the case for "marker" when used with the inline bootstrap loader
        // (and maybe others in the future). So ensure there is an importLibrary for each:
        const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
        // ensure at least one library, to kick off loading...
        if (!libraryPromises.length) {
            libraryPromises.push(this.importLibrary("core"));
        }
        Promise.all(libraryPromises).then(() => this.callback(), (error) => {
            const event = new ErrorEvent("error", { error }); // for backwards compat
            this.loadErrorCallback(event);
        });
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setScript();
            }
        }
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./src/modules/google-maps/index.js":
/*!******************************************!*\
  !*** ./src/modules/google-maps/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleMap: function() { return /* binding */ GoogleMap; }
/* harmony export */ });
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GoogleMap = /*#__PURE__*/function (_HTMLElement) {
  _inherits(GoogleMap, _HTMLElement);
  function GoogleMap() {
    var _this;
    _classCallCheck(this, GoogleMap);
    _this = _callSuper(this, GoogleMap);
    var mapLat = parseFloat(_this.dataset.mapLat);
    var mapLong = parseFloat(_this.dataset.mapLong);
    var googleMapsLoader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({
      apiKey: null,
      version: "weekly"
    });
    googleMapsLoader.load().then(function (google) {
      var googleMap = new google.maps.Map(_assertThisInitialized(_this), {
        center: {
          lat: mapLat,
          lng: mapLong
        },
        zoom: 14
      });
      new google.maps.Marker({
        position: {
          lat: mapLat,
          lng: mapLong
        },
        map: googleMap
      });
    }).catch(function (error) {
      console.error(error);
    });
    return _this;
  }
  return _createClass(GoogleMap);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************************!*\
  !*** ./src/entrypoints/contact/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/google-maps */ "./src/modules/google-maps/index.js");

if (document.getElementsByTagName('google-map')) {
  customElements.define('google-map', _modules_google_maps__WEBPACK_IMPORTED_MODULE_0__.GoogleMap);
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtEO0FBRWxELElBQUlDLFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsWUFBWSxDQUFDLEVBQUU7RUFDN0NDLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksRUFBRXBDLDJEQUFTLENBQUM7QUFDbEQsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZ29vZ2xlbWFwcy9qcy1hcGktbG9hZGVyL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dvb2dsZS1tYXBzL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9lbnRyeXBvaW50cy9jb250YWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XG5cbi8vIGRvIG5vdCBlZGl0IC5qcyBmaWxlcyBkaXJlY3RseSAtIGVkaXQgc3JjL2luZGV4LmpzdFxuXG5cblxudmFyIGZhc3REZWVwRXF1YWwgPSBmdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZikgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0cnVlIGlmIGJvdGggTmFOLCBmYWxzZSBvdGhlcndpc2VcbiAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xufTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQuXG4gKlxuICogICAgICBIdHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgREVGQVVMVF9JRCA9IFwiX19nb29nbGVNYXBzU2NyaXB0SWRcIjtcbi8qKlxuICogVGhlIHN0YXR1cyBvZiB0aGUgW1tMb2FkZXJdXS5cbiAqL1xudmFyIExvYWRlclN0YXR1cztcbihmdW5jdGlvbiAoTG9hZGVyU3RhdHVzKSB7XG4gICAgTG9hZGVyU3RhdHVzW0xvYWRlclN0YXR1c1tcIklOSVRJQUxJWkVEXCJdID0gMF0gPSBcIklOSVRJQUxJWkVEXCI7XG4gICAgTG9hZGVyU3RhdHVzW0xvYWRlclN0YXR1c1tcIkxPQURJTkdcIl0gPSAxXSA9IFwiTE9BRElOR1wiO1xuICAgIExvYWRlclN0YXR1c1tMb2FkZXJTdGF0dXNbXCJTVUNDRVNTXCJdID0gMl0gPSBcIlNVQ0NFU1NcIjtcbiAgICBMb2FkZXJTdGF0dXNbTG9hZGVyU3RhdHVzW1wiRkFJTFVSRVwiXSA9IDNdID0gXCJGQUlMVVJFXCI7XG59KShMb2FkZXJTdGF0dXMgfHwgKExvYWRlclN0YXR1cyA9IHt9KSk7XG4vKipcbiAqIFtbTG9hZGVyXV0gbWFrZXMgaXQgZWFzaWVyIHRvIGFkZCBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSB0byB5b3VyIGFwcGxpY2F0aW9uXG4gKiBkeW5hbWljYWxseSB1c2luZ1xuICogW1Byb21pc2VzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9Qcm9taXNlKS5cbiAqIEl0IHdvcmtzIGJ5IGR5bmFtaWNhbGx5IGNyZWF0aW5nIGFuZCBhcHBlbmRpbmcgYSBzY3JpcHQgbm9kZSB0byB0aGUgdGhlXG4gKiBkb2N1bWVudCBoZWFkIGFuZCB3cmFwcGluZyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gc28gYXMgdG8gcmV0dXJuIGEgcHJvbWlzZS5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoe1xuICogICBhcGlLZXk6IFwiXCIsXG4gKiAgIHZlcnNpb246IFwid2Vla2x5XCIsXG4gKiAgIGxpYnJhcmllczogW1wicGxhY2VzXCJdXG4gKiB9KTtcbiAqXG4gKiBsb2FkZXIubG9hZCgpLnRoZW4oKGdvb2dsZSkgPT4ge1xuICogICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKC4uLilcbiAqIH0pXG4gKiBgYGBcbiAqL1xuY2xhc3MgTG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExvYWRlciB1c2luZyBbW0xvYWRlck9wdGlvbnNdXS4gTm8gZGVmYXVsdHMgYXJlIHNldFxuICAgICAqIHVzaW5nIHRoaXMgbGlicmFyeSwgaW5zdGVhZCB0aGUgZGVmYXVsdHMgYXJlIHNldCBieSB0aGUgR29vZ2xlIE1hcHNcbiAgICAgKiBKYXZhU2NyaXB0IEFQSSBzZXJ2ZXIuXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBsb2FkZXIgPSBMb2FkZXIoe2FwaUtleSwgdmVyc2lvbjogJ3dlZWtseScsIGxpYnJhcmllczogWydwbGFjZXMnXX0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgYXBpS2V5LCBhdXRoUmVmZXJyZXJQb2xpY3ksIGNoYW5uZWwsIGNsaWVudCwgaWQgPSBERUZBVUxUX0lELCBsYW5ndWFnZSwgbGlicmFyaWVzID0gW10sIG1hcElkcywgbm9uY2UsIHJlZ2lvbiwgcmV0cmllcyA9IDMsIHVybCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzXCIsIHZlcnNpb24sIH0pIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcbiAgICAgICAgdGhpcy5hdXRoUmVmZXJyZXJQb2xpY3kgPSBhdXRoUmVmZXJyZXJQb2xpY3k7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgREVGQVVMVF9JRDsgLy8gRG8gbm90IGFsbG93IGVtcHR5IHN0cmluZ1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMubGlicmFyaWVzID0gbGlicmFyaWVzO1xuICAgICAgICB0aGlzLm1hcElkcyA9IG1hcElkcztcbiAgICAgICAgdGhpcy5ub25jZSA9IG5vbmNlO1xuICAgICAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcbiAgICAgICAgdGhpcy5yZXRyaWVzID0gcmV0cmllcztcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIGlmIChMb2FkZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGlmICghZmFzdERlZXBFcXVhbCh0aGlzLm9wdGlvbnMsIExvYWRlci5pbnN0YW5jZS5vcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTG9hZGVyIG11c3Qgbm90IGJlIGNhbGxlZCBhZ2FpbiB3aXRoIGRpZmZlcmVudCBvcHRpb25zLiAke0pTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucyl9ICE9PSAke0pTT04uc3RyaW5naWZ5KExvYWRlci5pbnN0YW5jZS5vcHRpb25zKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBMb2FkZXIuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgTG9hZGVyLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICAgICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgbGlicmFyaWVzOiB0aGlzLmxpYnJhcmllcyxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgICAgICAgcmVnaW9uOiB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgIG1hcElkczogdGhpcy5tYXBJZHMsXG4gICAgICAgICAgICBub25jZTogdGhpcy5ub25jZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBhdXRoUmVmZXJyZXJQb2xpY3k6IHRoaXMuYXV0aFJlZmVycmVyUG9saWN5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gTG9hZGVyU3RhdHVzLkZBSUxVUkU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIExvYWRlclN0YXR1cy5TVUNDRVNTO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBMb2FkZXJTdGF0dXMuTE9BRElORztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTG9hZGVyU3RhdHVzLklOSVRJQUxJWkVEO1xuICAgIH1cbiAgICBnZXQgZmFpbGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb25lICYmICF0aGlzLmxvYWRpbmcgJiYgdGhpcy5lcnJvcnMubGVuZ3RoID49IHRoaXMucmV0cmllcyArIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZVVybCByZXR1cm5zIHRoZSBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBzY3JpcHQgdXJsIGdpdmVuIHRoZSBbW0xvYWRlck9wdGlvbnNdXS5cbiAgICAgKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIGNyZWF0ZVVybCgpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMudXJsO1xuICAgICAgICB1cmwgKz0gYD9jYWxsYmFjaz1fX2dvb2dsZU1hcHNDYWxsYmFja2A7XG4gICAgICAgIGlmICh0aGlzLmFwaUtleSkge1xuICAgICAgICAgICAgdXJsICs9IGAma2V5PSR7dGhpcy5hcGlLZXl9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGFubmVsKSB7XG4gICAgICAgICAgICB1cmwgKz0gYCZjaGFubmVsPSR7dGhpcy5jaGFubmVsfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpZW50KSB7XG4gICAgICAgICAgICB1cmwgKz0gYCZjbGllbnQ9JHt0aGlzLmNsaWVudH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxpYnJhcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB1cmwgKz0gYCZsaWJyYXJpZXM9JHt0aGlzLmxpYnJhcmllcy5qb2luKFwiLFwiKX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICB1cmwgKz0gYCZsYW5ndWFnZT0ke3RoaXMubGFuZ3VhZ2V9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWdpb24pIHtcbiAgICAgICAgICAgIHVybCArPSBgJnJlZ2lvbj0ke3RoaXMucmVnaW9ufWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmVyc2lvbikge1xuICAgICAgICAgICAgdXJsICs9IGAmdj0ke3RoaXMudmVyc2lvbn1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hcElkcykge1xuICAgICAgICAgICAgdXJsICs9IGAmbWFwX2lkcz0ke3RoaXMubWFwSWRzLmpvaW4oXCIsXCIpfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0aFJlZmVycmVyUG9saWN5KSB7XG4gICAgICAgICAgICB1cmwgKz0gYCZhdXRoX3JlZmVycmVyX3BvbGljeT0ke3RoaXMuYXV0aFJlZmVycmVyUG9saWN5fWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgZGVsZXRlU2NyaXB0KCkge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHNjcmlwdCBhbmQgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgKiBAZGVwcmVjYXRlZCwgdXNlIGltcG9ydExpYnJhcnkoKSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGxvYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRQcm9taXNlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHNjcmlwdCBhbmQgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAZGVwcmVjYXRlZCwgdXNlIGltcG9ydExpYnJhcnkoKSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGxvYWRQcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ2FsbGJhY2soKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUod2luZG93Lmdvb2dsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGltcG9ydExpYnJhcnkobmFtZSkge1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKTtcbiAgICAgICAgcmV0dXJuIGdvb2dsZS5tYXBzLmltcG9ydExpYnJhcnkobmFtZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHNjcmlwdCB3aXRoIGEgY2FsbGJhY2suXG4gICAgICogQGRlcHJlY2F0ZWQsIHVzZSBpbXBvcnRMaWJyYXJ5KCkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBsb2FkQ2FsbGJhY2soZm4pIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaChmbik7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNjcmlwdCBvbiBkb2N1bWVudC5cbiAgICAgKi9cbiAgICBzZXRTY3JpcHQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSkge1xuICAgICAgICAgICAgLy8gVE9ETyB3cmFwIG9uZXJyb3IgY2FsbGJhY2sgZm9yIGNhc2VzIHdoZXJlIHRoZSBzY3JpcHQgd2FzIGxvYWRlZCBlbHNld2hlcmVcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBrZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgICAgIGxpYnJhcmllczogdGhpcy5saWJyYXJpZXMubGVuZ3RoICYmIHRoaXMubGlicmFyaWVzLFxuICAgICAgICAgICAgdjogdGhpcy52ZXJzaW9uLFxuICAgICAgICAgICAgbWFwSWRzOiB0aGlzLm1hcElkcyxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgICAgICAgcmVnaW9uOiB0aGlzLnJlZ2lvbixcbiAgICAgICAgICAgIGF1dGhSZWZlcnJlclBvbGljeTogdGhpcy5hdXRoUmVmZXJyZXJQb2xpY3ksXG4gICAgICAgIH07XG4gICAgICAgIC8vIGtlZXAgdGhlIFVSTCBtaW5pbWFsOlxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIChrZXkpID0+ICFwYXJhbXNba2V5XSAmJiBkZWxldGUgcGFyYW1zW2tleV0pO1xuICAgICAgICBpZiAoISgoX2IgPSAoX2EgPSB3aW5kb3cgPT09IG51bGwgfHwgd2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5kb3cuZ29vZ2xlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWFwcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmltcG9ydExpYnJhcnkpKSB7XG4gICAgICAgICAgICAvLyB0d2Vha2VkIGNvcHkgb2YgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbG9hZC1tYXBzLWpzLWFwaSNkeW5hbWljLWxpYnJhcnktaW1wb3J0XG4gICAgICAgICAgICAvLyB3aGljaCBhbHNvIHNldHMgdGhlIGJhc2UgdXJsLCB0aGUgaWQsIGFuZCB0aGUgbm9uY2VcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgICAgICAoKGcpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgbGV0IGgsIGEsIGssIHAgPSBcIlRoZSBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSVwiLCBjID0gXCJnb29nbGVcIiwgbCA9IFwiaW1wb3J0TGlicmFyeVwiLCBxID0gXCJfX2liX19cIiwgbSA9IGRvY3VtZW50LCBiID0gd2luZG93O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBiID0gYltjXSB8fCAoYltjXSA9IHt9KTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGIubWFwcyB8fCAoYi5tYXBzID0ge30pLCByID0gbmV3IFNldCgpLCBlID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpLCB1ID0gKCkgPT4gXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGggfHwgKGggPSBuZXcgUHJvbWlzZSgoZiwgbikgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIChhID0gbS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgYS5pZCA9IHRoaXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGUuc2V0KFwibGlicmFyaWVzXCIsIFsuLi5yXSArIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayBpbiBnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXQoay5yZXBsYWNlKC9bQS1aXS9nLCAodCkgPT4gXCJfXCIgKyB0WzBdLnRvTG93ZXJDYXNlKCkpLCBnW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zZXQoXCJjYWxsYmFja1wiLCBjICsgXCIubWFwcy5cIiArIHEpO1xuICAgICAgICAgICAgICAgICAgICBhLnNyYyA9IHRoaXMudXJsICsgYD9gICsgZTtcbiAgICAgICAgICAgICAgICAgICAgZFtxXSA9IGY7XG4gICAgICAgICAgICAgICAgICAgIGEub25lcnJvciA9ICgpID0+IChoID0gbihFcnJvcihwICsgXCIgY291bGQgbm90IGxvYWQuXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgYS5ub25jZSA9IHRoaXMubm9uY2UgfHwgKChfYSA9IG0ucXVlcnlTZWxlY3RvcihcInNjcmlwdFtub25jZV1cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub25jZSkgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgbS5oZWFkLmFwcGVuZChhKTtcbiAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBkW2xdID8gY29uc29sZS53YXJuKHAgKyBcIiBvbmx5IGxvYWRzIG9uY2UuIElnbm9yaW5nOlwiLCBnKSA6IChkW2xdID0gKGYsIC4uLm4pID0+IHIuYWRkKGYpICYmIHUoKS50aGVuKCgpID0+IGRbbF0oZiwgLi4ubikpKTtcbiAgICAgICAgICAgIH0pKHBhcmFtcyk7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hpbGUgbW9zdCBsaWJyYXJpZXMgcG9wdWxhdGUgdGhlIGdsb2JhbCBuYW1lc3BhY2Ugd2hlbiBsb2FkZWQgdmlhIGJvb3RzdHJhcCBwYXJhbXMsXG4gICAgICAgIC8vIHRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciBcIm1hcmtlclwiIHdoZW4gdXNlZCB3aXRoIHRoZSBpbmxpbmUgYm9vdHN0cmFwIGxvYWRlclxuICAgICAgICAvLyAoYW5kIG1heWJlIG90aGVycyBpbiB0aGUgZnV0dXJlKS4gU28gZW5zdXJlIHRoZXJlIGlzIGFuIGltcG9ydExpYnJhcnkgZm9yIGVhY2g6XG4gICAgICAgIGNvbnN0IGxpYnJhcnlQcm9taXNlcyA9IHRoaXMubGlicmFyaWVzLm1hcCgobGlicmFyeSkgPT4gdGhpcy5pbXBvcnRMaWJyYXJ5KGxpYnJhcnkpKTtcbiAgICAgICAgLy8gZW5zdXJlIGF0IGxlYXN0IG9uZSBsaWJyYXJ5LCB0byBraWNrIG9mZiBsb2FkaW5nLi4uXG4gICAgICAgIGlmICghbGlicmFyeVByb21pc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlicmFyeVByb21pc2VzLnB1c2godGhpcy5pbXBvcnRMaWJyYXJ5KFwiY29yZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgUHJvbWlzZS5hbGwobGlicmFyeVByb21pc2VzKS50aGVuKCgpID0+IHRoaXMuY2FsbGJhY2soKSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFcnJvckV2ZW50KFwiZXJyb3JcIiwgeyBlcnJvciB9KTsgLy8gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICAgICAgICAgIHRoaXMubG9hZEVycm9yQ2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGxvYWRlciBzdGF0ZS5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5kZWxldGVTY3JpcHQoKTtcbiAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLm9uZXJyb3JFdmVudCA9IG51bGw7XG4gICAgfVxuICAgIHJlc2V0SWZSZXRyeWluZ0ZhaWxlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmFpbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZEVycm9yQ2FsbGJhY2soZSkge1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xuICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoIDw9IHRoaXMucmV0cmllcykge1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLmVycm9ycy5sZW5ndGggKiBNYXRoLnBvdygyLCB0aGlzLmVycm9ycy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxvYWQgR29vZ2xlIE1hcHMgc2NyaXB0LCByZXRyeWluZyBpbiAke2RlbGF5fSBtcy5gKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU2NyaXB0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JpcHQoKTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25lcnJvckV2ZW50ID0gZTtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgICBjYih0aGlzLm9uZXJyb3JFdmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICAgIH1cbiAgICBleGVjdXRlKCkge1xuICAgICAgICB0aGlzLnJlc2V0SWZSZXRyeWluZ0ZhaWxlZCgpO1xuICAgICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG9ydCBjaXJjdWl0IGFuZCB3YXJuIGlmIGdvb2dsZS5tYXBzIGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICBpZiAod2luZG93Lmdvb2dsZSAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMgJiYgd2luZG93Lmdvb2dsZS5tYXBzLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJHb29nbGUgTWFwcyBhbHJlYWR5IGxvYWRlZCBvdXRzaWRlIEBnb29nbGVtYXBzL2pzLWFwaS1sb2FkZXIuXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgbWF5IHJlc3VsdCBpbiB1bmRlc2lyYWJsZSBiZWhhdmlvciBhcyBvcHRpb25zIGFuZCBzY3JpcHQgcGFyYW1ldGVycyBtYXkgbm90IG1hdGNoLlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZykgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjcmlwdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBERUZBVUxUX0lELCBMb2FkZXIsIExvYWRlclN0YXR1cyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlcic7XG5cbmNsYXNzIEdvb2dsZU1hcCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBtYXBMYXQgPSBwYXJzZUZsb2F0KHRoaXMuZGF0YXNldC5tYXBMYXQpO1xuICAgICAgICBjb25zdCBtYXBMb25nID0gcGFyc2VGbG9hdCh0aGlzLmRhdGFzZXQubWFwTG9uZyk7XG5cbiAgICAgICAgY29uc3QgZ29vZ2xlTWFwc0xvYWRlciA9IG5ldyBMb2FkZXIoe1xuICAgICAgICAgICAgYXBpS2V5OiBudWxsLFxuICAgICAgICAgICAgdmVyc2lvbjogXCJ3ZWVrbHlcIlxuICAgICAgICB9KTtcblxuICAgICAgICBnb29nbGVNYXBzTG9hZGVyXG4gICAgICAgICAgICAubG9hZCgpXG4gICAgICAgICAgICAudGhlbigoZ29vZ2xlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ29vZ2xlTWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXBMYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IG1hcExvbmdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTQsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogbWFwTGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBtYXBMb25nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcDogZ29vZ2xlTWFwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIEdvb2dsZU1hcFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR29vZ2xlTWFwIH0gZnJvbSAnQC9tb2R1bGVzL2dvb2dsZS1tYXBzJztcblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdnb29nbGUtbWFwJykpIHtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2dvb2dsZS1tYXAnLCBHb29nbGVNYXApO1xufVxuIl0sIm5hbWVzIjpbIkxvYWRlciIsIkdvb2dsZU1hcCIsIl9IVE1MRWxlbWVudCIsIl9pbmhlcml0cyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIm1hcExhdCIsInBhcnNlRmxvYXQiLCJkYXRhc2V0IiwibWFwTG9uZyIsImdvb2dsZU1hcHNMb2FkZXIiLCJhcGlLZXkiLCJ2ZXJzaW9uIiwibG9hZCIsInRoZW4iLCJnb29nbGUiLCJnb29nbGVNYXAiLCJtYXBzIiwiTWFwIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJNYXJrZXIiLCJwb3NpdGlvbiIsIm1hcCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiX2NyZWF0ZUNsYXNzIiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==