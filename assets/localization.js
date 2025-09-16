/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/localization/index.js":
/*!*******************************************!*\
  !*** ./src/modules/localization/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSelector: function() { return /* binding */ LanguageSelector; },
/* harmony export */   RegionCheckerBar: function() { return /* binding */ RegionCheckerBar; },
/* harmony export */   RegionCurrent: function() { return /* binding */ RegionCurrent; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var LanguageSelector = /*#__PURE__*/function (_HTMLElement) {
  _inherits(LanguageSelector, _HTMLElement);
  function LanguageSelector(el) {
    var _this;
    _classCallCheck(this, LanguageSelector);
    _this = _callSuper(this, LanguageSelector);
    if (!el) return _possibleConstructorReturn(_this);
    _this.el = el;
    _this.form = _this.el.querySelector('.js-language-selector-form');
    _this.formInput = _this.el.querySelector('.js-language-selector-form-input');
    _this.languageHyperlinks = _toConsumableArray(_this.el.querySelectorAll('.js-language-selector-lang-hyperlink'));
    _this.languageHyperlinks.forEach(function (item) {
      return item.addEventListener('click', _this.onLangHyperlinkClick.bind(_assertThisInitialized(_this)));
    });
    return _this;
  }
  _createClass(LanguageSelector, [{
    key: "onLangHyperlinkClick",
    value: function onLangHyperlinkClick(event) {
      event.preventDefault();
      this.formInput.value = event.currentTarget.dataset.value;
      localStorage.selectedLanguage = event.currentTarget.dataset.value;
      if (this.form) this.form.submit();
    }
  }]);
  return LanguageSelector;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('language-selector', LanguageSelector);
var RegionCheckerBar = /*#__PURE__*/function () {
  /**
      * Class constructor *
      * @arg {object} - `element` check for the
      * region checker bar element.
  **/
  function RegionCheckerBar(element) {
    _classCallCheck(this, RegionCheckerBar);
    if (!element) return;
    this.hostname = window.location.hostname;
    this.pathname = window.location.pathname;
    this.regionCheckerBar = element;
    this.regionCheckerBarToggle = element.querySelector('.js-toggle-region-check');
    this.storeDataElements = document.querySelectorAll('[data-js-country-selector-store-data]');
    this.regionCheckerLangSelect = element.querySelector('#LanguageSelectorRegChecker');
    this.getCountry();
    this.attachEventListeners();
  }
  _createClass(RegionCheckerBar, [{
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this2 = this;
      if (this.regionCheckerBarToggle) {
        this.regionCheckerBarToggle.addEventListener('click', function () {
          _this2.regionCheckerBar.classList.add('hidden');
          _this2.regionCheckerBar.setAttribute('aria-hidden', 'true');

          // eslint-disable-next-line no-undef
          localStorage.selectedLanguage = Shopify.locale;
        });
      }
    }
  }, {
    key: "getCountry",
    value: function getCountry() {
      if (this.differentLanguage()) {
        this.regionCheckerBar.classList.remove('hidden');
        this.regionCheckerBar.setAttribute('aria-hidden', 'false');
      }
      if (window.geoip2 && localStorage.getItem('country') === null) {
        window.geoip2.country(this.onSuccess.bind(this), this.onError.bind(this));
      }
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(obj) {
      var _this3 = this;
      window.localStorage.setItem('country', obj.country.iso_code);
      var userCountryISOCode = window.localStorage.getItem('country');
      this.storeDataElements.forEach(function (storeDataElement) {
        var storeDataParsed = JSON.parse(storeDataElement.dataset.jsCountrySelectorStoreData);
        var storeCountryISOCode = storeDataParsed.iso_code;
        var storeURL = new URL(storeDataParsed.link);
        if (_this3.hostname === storeURL.hostname && userCountryISOCode !== storeCountryISOCode) {
          _this3.regionCheckerBar.classList.remove('hidden');
          _this3.regionCheckerBar.setAttribute('aria-hidden', 'false');
        }
      });
    }
  }, {
    key: "onError",
    value: function onError() {
      var _this4 = this;
      this.storeDataElements.forEach(function (storeDataElement) {
        var storeDataParsed = JSON.parse(storeDataElement.dataset.jsCountrySelectorStoreData);
        var storeCountryISOCode = storeDataParsed.iso_code;
        var storeURL = new URL(storeDataParsed.link);
        if (_this4.hostname === storeURL.hostname) {
          window.localStorage.setItem('country', storeCountryISOCode);
        }
      });
    }
  }, {
    key: "differentLanguage",
    value: function differentLanguage() {
      // eslint-disable-next-line no-undef
      if (navigator.language.split('-')[0] !== Shopify.locale && !localStorage.selectedLanguage && this.regionCheckerLangSelect || localStorage.selectedLanguage && localStorage.selectedLanguage !== Shopify.locale && this.regionCheckerLangSelect) {
        return true;
      }
    }
  }]);
  return RegionCheckerBar;
}();
var RegionCurrent = /*#__PURE__*/function () {
  function RegionCurrent(el) {
    _classCallCheck(this, RegionCurrent);
    this.toSetToCurrent = document.querySelector('.js-localization-set-current-region');
    if (!el && !this.toSetToCurrent) return;
    this.current = el;
    this.init();
  }
  _createClass(RegionCurrent, [{
    key: "init",
    value: function init() {
      this.toSetToCurrent.src = this.current.src;
    }
  }]);
  return RegionCurrent;
}();


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
/*!***********************************************!*\
  !*** ./src/entrypoints/localization/index.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/localization */ "./src/modules/localization/index.js");

if (document.getElementById('LanguageSelector')) {
  new _modules_localization__WEBPACK_IMPORTED_MODULE_0__.LanguageSelector(document.getElementById('LanguageSelector'));
}
if (document.querySelector('.js-region-checker-bar')) {
  new _modules_localization__WEBPACK_IMPORTED_MODULE_0__.RegionCheckerBar(document.querySelector('.js-region-checker-bar'));
}
if (document.getElementById('RegionCurrent')) {
  new _modules_localization__WEBPACK_IMPORTED_MODULE_0__.RegionCurrent(document.getElementById('RegionCurrent'));
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsT0FBQUosYUFBQTtBQUFBOzs7Ozs7O1VDeEhMO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yRjtBQUUzRixJQUFJbkMsUUFBUSxDQUFDd0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7RUFDN0MsSUFBSW5GLG1FQUFnQixDQUFDMkMsUUFBUSxDQUFDd0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDckU7QUFFQSxJQUFJeEMsUUFBUSxDQUFDbEMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7RUFDbEQsSUFBSXlCLG1FQUFnQixDQUFDUyxRQUFRLENBQUNsQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUMxRTtBQUVBLElBQUlrQyxRQUFRLENBQUN3QyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7RUFDMUMsSUFBSUwsZ0VBQWEsQ0FBQ25DLFFBQVEsQ0FBQ3dDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbG9jYWxpemF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9lbnRyeXBvaW50cy9sb2NhbGl6YXRpb24vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGFuZ3VhZ2VTZWxlY3RvciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmICghZWwpIHJldHVybjtcblxuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmpzLWxhbmd1YWdlLXNlbGVjdG9yLWZvcm0nKTtcbiAgICAgICAgdGhpcy5mb3JtSW5wdXQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy1sYW5ndWFnZS1zZWxlY3Rvci1mb3JtLWlucHV0Jyk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VIeXBlcmxpbmtzID0gWy4uLnRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnLmpzLWxhbmd1YWdlLXNlbGVjdG9yLWxhbmctaHlwZXJsaW5rJyldO1xuXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VIeXBlcmxpbmtzLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxhbmdIeXBlcmxpbmtDbGljay5iaW5kKHRoaXMpKSk7XG4gICAgfVxuXG4gICAgb25MYW5nSHlwZXJsaW5rQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZm9ybUlucHV0LnZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2VsZWN0ZWRMYW5ndWFnZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybSkgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsYW5ndWFnZS1zZWxlY3RvcicsIExhbmd1YWdlU2VsZWN0b3IpO1xuXG5jbGFzcyBSZWdpb25DaGVja2VyQmFyIHtcbiAgICAvKipcbiAgICAgICAgKiBDbGFzcyBjb25zdHJ1Y3RvciAqXG4gICAgICAgICogQGFyZyB7b2JqZWN0fSAtIGBlbGVtZW50YCBjaGVjayBmb3IgdGhlXG4gICAgICAgICogcmVnaW9uIGNoZWNrZXIgYmFyIGVsZW1lbnQuXG4gICAgKiovXG4gICAgY29uc3RydWN0b3IgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5ob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgICB0aGlzLnJlZ2lvbkNoZWNrZXJCYXIgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnJlZ2lvbkNoZWNrZXJCYXJUb2dnbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2dnbGUtcmVnaW9uLWNoZWNrJyk7XG5cbiAgICAgICAgdGhpcy5zdG9yZURhdGFFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWNvdW50cnktc2VsZWN0b3Itc3RvcmUtZGF0YV0nKTtcbiAgICAgICAgdGhpcy5yZWdpb25DaGVja2VyTGFuZ1NlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignI0xhbmd1YWdlU2VsZWN0b3JSZWdDaGVja2VyJyk7XG5cbiAgICAgICAgdGhpcy5nZXRDb3VudHJ5KCk7XG4gICAgICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhdHRhY2hFdmVudExpc3RlbmVycyAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZ2lvbkNoZWNrZXJCYXJUb2dnbGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaW9uQ2hlY2tlckJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbkNoZWNrZXJCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb25DaGVja2VyQmFyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBTaG9waWZ5LmxvY2FsZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q291bnRyeSAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpZmZlcmVudExhbmd1YWdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaW9uQ2hlY2tlckJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMucmVnaW9uQ2hlY2tlckJhci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93Lmdlb2lwMiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291bnRyeScpID09PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2VvaXAyLmNvdW50cnkodGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWNjZXNzIChvYmopIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3VudHJ5Jywgb2JqLmNvdW50cnkuaXNvX2NvZGUpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJDb3VudHJ5SVNPQ29kZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291bnRyeScpO1xuXG4gICAgICAgIHRoaXMuc3RvcmVEYXRhRWxlbWVudHMuZm9yRWFjaChzdG9yZURhdGFFbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlRGF0YVBhcnNlZCA9IEpTT04ucGFyc2Uoc3RvcmVEYXRhRWxlbWVudC5kYXRhc2V0LmpzQ291bnRyeVNlbGVjdG9yU3RvcmVEYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlQ291bnRyeUlTT0NvZGUgPSBzdG9yZURhdGFQYXJzZWQuaXNvX2NvZGU7XG4gICAgICAgICAgICBjb25zdCBzdG9yZVVSTCA9IG5ldyBVUkwoc3RvcmVEYXRhUGFyc2VkLmxpbmspO1xuXG4gICAgICAgICAgICBpZiAoKHRoaXMuaG9zdG5hbWUgPT09IHN0b3JlVVJMLmhvc3RuYW1lKSAmJiAodXNlckNvdW50cnlJU09Db2RlICE9PSBzdG9yZUNvdW50cnlJU09Db2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uQ2hlY2tlckJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbkNoZWNrZXJCYXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkVycm9yICgpIHtcbiAgICAgICAgdGhpcy5zdG9yZURhdGFFbGVtZW50cy5mb3JFYWNoKHN0b3JlRGF0YUVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVEYXRhUGFyc2VkID0gSlNPTi5wYXJzZShzdG9yZURhdGFFbGVtZW50LmRhdGFzZXQuanNDb3VudHJ5U2VsZWN0b3JTdG9yZURhdGEpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVDb3VudHJ5SVNPQ29kZSA9IHN0b3JlRGF0YVBhcnNlZC5pc29fY29kZTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlVVJMID0gbmV3IFVSTChzdG9yZURhdGFQYXJzZWQubGluayk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhvc3RuYW1lID09PSBzdG9yZVVSTC5ob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnRyeScsIHN0b3JlQ291bnRyeUlTT0NvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaWZmZXJlbnRMYW5ndWFnZSgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIGlmKChuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXSAhPT0gU2hvcGlmeS5sb2NhbGUgJiYgIWxvY2FsU3RvcmFnZS5zZWxlY3RlZExhbmd1YWdlICYmIHRoaXMucmVnaW9uQ2hlY2tlckxhbmdTZWxlY3QpIHx8IChsb2NhbFN0b3JhZ2Uuc2VsZWN0ZWRMYW5ndWFnZSAmJiBsb2NhbFN0b3JhZ2Uuc2VsZWN0ZWRMYW5ndWFnZSAhPT0gU2hvcGlmeS5sb2NhbGUgJiYgdGhpcy5yZWdpb25DaGVja2VyTGFuZ1NlbGVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSAgXG59XG5cbmNsYXNzIFJlZ2lvbkN1cnJlbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMudG9TZXRUb0N1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbG9jYWxpemF0aW9uLXNldC1jdXJyZW50LXJlZ2lvbicpO1xuXG4gICAgICAgIGlmICghZWwgJiYgIXRoaXMudG9TZXRUb0N1cnJlbnQpIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBlbDtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0ICgpIHtcbiAgICAgICAgdGhpcy50b1NldFRvQ3VycmVudC5zcmMgPSB0aGlzLmN1cnJlbnQuc3JjO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBMYW5ndWFnZVNlbGVjdG9yLFxuICAgIFJlZ2lvbkNoZWNrZXJCYXIsXG4gICAgUmVnaW9uQ3VycmVudFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTGFuZ3VhZ2VTZWxlY3RvciwgUmVnaW9uQ2hlY2tlckJhciwgUmVnaW9uQ3VycmVudCB9IGZyb20gJ0AvbW9kdWxlcy9sb2NhbGl6YXRpb24nO1xuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xhbmd1YWdlU2VsZWN0b3InKSkge1xuICAgIG5ldyBMYW5ndWFnZVNlbGVjdG9yKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMYW5ndWFnZVNlbGVjdG9yJykpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlZ2lvbi1jaGVja2VyLWJhcicpKSB7XG4gICAgbmV3IFJlZ2lvbkNoZWNrZXJCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlZ2lvbi1jaGVja2VyLWJhcicpKTtcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWdpb25DdXJyZW50JykpIHtcbiAgICBuZXcgUmVnaW9uQ3VycmVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVnaW9uQ3VycmVudCcpKTtcbn1cblxuIl0sIm5hbWVzIjpbIkxhbmd1YWdlU2VsZWN0b3IiLCJfSFRNTEVsZW1lbnQiLCJfaW5oZXJpdHMiLCJlbCIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtSW5wdXQiLCJsYW5ndWFnZUh5cGVybGlua3MiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwib25MYW5nSHlwZXJsaW5rQ2xpY2siLCJiaW5kIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibG9jYWxTdG9yYWdlIiwic2VsZWN0ZWRMYW5ndWFnZSIsInN1Ym1pdCIsIl93cmFwTmF0aXZlU3VwZXIiLCJIVE1MRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiUmVnaW9uQ2hlY2tlckJhciIsImVsZW1lbnQiLCJob3N0bmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZWdpb25DaGVja2VyQmFyIiwicmVnaW9uQ2hlY2tlckJhclRvZ2dsZSIsInN0b3JlRGF0YUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJyZWdpb25DaGVja2VyTGFuZ1NlbGVjdCIsImdldENvdW50cnkiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsIl90aGlzMiIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsIlNob3BpZnkiLCJsb2NhbGUiLCJkaWZmZXJlbnRMYW5ndWFnZSIsInJlbW92ZSIsImdlb2lwMiIsImdldEl0ZW0iLCJjb3VudHJ5Iiwib25TdWNjZXNzIiwib25FcnJvciIsIm9iaiIsIl90aGlzMyIsInNldEl0ZW0iLCJpc29fY29kZSIsInVzZXJDb3VudHJ5SVNPQ29kZSIsInN0b3JlRGF0YUVsZW1lbnQiLCJzdG9yZURhdGFQYXJzZWQiLCJKU09OIiwicGFyc2UiLCJqc0NvdW50cnlTZWxlY3RvclN0b3JlRGF0YSIsInN0b3JlQ291bnRyeUlTT0NvZGUiLCJzdG9yZVVSTCIsIlVSTCIsImxpbmsiLCJfdGhpczQiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInNwbGl0IiwiUmVnaW9uQ3VycmVudCIsInRvU2V0VG9DdXJyZW50IiwiY3VycmVudCIsImluaXQiLCJzcmMiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=