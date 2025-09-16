/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entrypoints/helpers/cartChangeEvent.js":
/*!****************************************************!*\
  !*** ./src/entrypoints/helpers/cartChangeEvent.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


var cartChangeEvent = {
  emitEvent: function emitEvent(data) {
    var event = new CustomEvent('cartChange', {
      detail: data
    });
    window.dispatchEvent(event);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cartChangeEvent);

/***/ }),

/***/ "./src/entrypoints/helpers/fetchConfig.js":
/*!************************************************!*\
  !*** ./src/entrypoints/helpers/fetchConfig.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


var fetchConfig = {
  init: function init() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'json';
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/".concat(type)
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (fetchConfig);

/***/ }),

/***/ "./src/modules/product-form/index.js":
/*!*******************************************!*\
  !*** ./src/modules/product-form/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductForm; }
/* harmony export */ });
/* harmony import */ var _entrypoints_helpers_cartChangeEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entrypoints/helpers/cartChangeEvent */ "./src/entrypoints/helpers/cartChangeEvent.js");
/* harmony import */ var _entrypoints_helpers_fetchConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entrypoints/helpers/fetchConfig */ "./src/entrypoints/helpers/fetchConfig.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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


var ProductForm = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ProductForm, _HTMLElement);
  function ProductForm() {
    var _this;
    _classCallCheck(this, ProductForm);
    _this = _callSuper(this, ProductForm);
    _this.form = _this.querySelector('form');
    _this.form.querySelector('[name=id]').disabled = false;
    _this.form.addEventListener('submit', _this.onSubmitHandler.bind(_assertThisInitialized(_this)));
    _this.productId = _this.form.querySelector('input[name="id"]');
    _this.variantCtas = _this.form.querySelectorAll('.js-add-variant-to-bag');
    _this.cartNotification = document.querySelector('cart-notification');
    _this.initEventListeners();
    return _this;
  }
  _createClass(ProductForm, [{
    key: "onSubmitHandler",
    value: function onSubmitHandler(evt) {
      evt.preventDefault();
      var submitButton = this.querySelector('[type="submit"]');
      if (submitButton.classList.contains('loading')) return;
      this.handleErrorMessage();
      this.cartNotification.setActiveElement(document.activeElement);
      submitButton.setAttribute('aria-disabled', true);
      submitButton.classList.add('loading');
      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');
      this.submitForm();
    }
  }, {
    key: "initEventListeners",
    value: function initEventListeners() {
      var _this2 = this;
      this.variantCtas.forEach(function (element) {
        element.addEventListener("click", function (evt) {
          evt.preventDefault();
          _this2.productId.value = element.dataset.vid;
          _this2.submitForm();
        });
      });
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var _this3 = this;
      var submitButton = this.querySelector('[type="submit"]');
      var config = _entrypoints_helpers_fetchConfig__WEBPACK_IMPORTED_MODULE_1__["default"].init('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];
      var formData = new FormData(this.form);
      formData.append('sections', this.cartNotification.getSectionsToRender().map(function (section) {
        return section.id;
      }));
      formData.append('sections_url', window.location.pathname);
      config.body = formData;
      var error = false;
      fetch("".concat(window.routes.cart_add_url), config).then(function (response) {
        return response.json();
      }).then(function (response) {
        if (response.status) {
          _this3.handleErrorMessage(response.description);
          error = true;
          return;
        }
        _entrypoints_helpers_cartChangeEvent__WEBPACK_IMPORTED_MODULE_0__["default"].emitEvent(response);
        _this3.cartNotification.renderContents(response);
      }).catch(function (e) {
        console.error(e);
      }).finally(function () {
        if (submitButton) {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('aria-disabled');
        }
        if (!error) {
          _this3.handleQuickAddModal();
        }
        if (_this3.querySelector('.loading-overlay__spinner')) {
          _this3.querySelector('.loading-overlay__spinner').classList.add('hidden');
        }
      });
    }
  }, {
    key: "handleErrorMessage",
    value: function handleErrorMessage() {
      var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');
      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);
      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  }, {
    key: "handleQuickAddModal",
    value: function handleQuickAddModal() {
      var quickAddModal = document.querySelector('quick-add-modal.is-active');
      if (quickAddModal && quickAddModal.classList.contains('is-active')) {
        quickAddModal.hide();
      }
    }
  }]);
  return ProductForm;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));


/***/ }),

/***/ "./src/modules/product-form/product.scss":
/*!***********************************************!*\
  !*** ./src/modules/product-form/product.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
  !*** ./src/entrypoints/product-form/index.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_product_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/product-form */ "./src/modules/product-form/index.js");
/* harmony import */ var _modules_product_form_product_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/product-form/product.scss */ "./src/modules/product-form/product.scss");


if (document.getElementsByTagName('product-form')) {
  customElements.define('product-form', _modules_product_form__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ0o7QUFFN0MsSUFBSXpELFFBQVEsQ0FBQzJELG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxFQUFFO0VBQy9DQyxjQUFjLENBQUNDLE1BQU0sQ0FBQyxjQUFjLEVBQUU5RSw2REFBVyxDQUFDO0FBQ3RELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50cnlwb2ludHMvaGVscGVycy9jYXJ0Q2hhbmdlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2hlbHBlcnMvZmV0Y2hDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcHJvZHVjdC1mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LnNjc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL3Byb2R1Y3QtZm9ybS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgY2FydENoYW5nZUV2ZW50ID0ge1xuICAgIGVtaXRFdmVudCAoZGF0YSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2FydENoYW5nZScsIHtcbiAgICAgICAgICAgIGRldGFpbDogZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYXJ0Q2hhbmdlRXZlbnQ7XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgZmV0Y2hDb25maWcgPSB7XG5cbiAgICBpbml0KHR5cGUgPSAnanNvbicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXB0JzogYGFwcGxpY2F0aW9uLyR7dHlwZX1gIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ29uZmlnIiwiaW1wb3J0IGVtaXRFdmVudCBmcm9tICdAL2VudHJ5cG9pbnRzL2hlbHBlcnMvY2FydENoYW5nZUV2ZW50JztcbmltcG9ydCBmZXRjaENvbmZpZyBmcm9tICdAL2VudHJ5cG9pbnRzL2hlbHBlcnMvZmV0Y2hDb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0Rm9ybSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWlkXScpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLm9uU3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImlkXCJdJyk7XG4gICAgICAgIHRoaXMudmFyaWFudEN0YXMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFkZC12YXJpYW50LXRvLWJhZycpO1xuICAgICAgICB0aGlzLmNhcnROb3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYXJ0LW5vdGlmaWNhdGlvbicpO1xuXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXRIYW5kbGVyKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgICBpZiAoc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbG9hZGluZycpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvck1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5jYXJ0Tm90aWZpY2F0aW9uLnNldEFjdGl2ZUVsZW1lbnQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLW92ZXJsYXlfX3NwaW5uZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMudmFyaWFudEN0YXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdElkLnZhbHVlID0gZWxlbWVudC5kYXRhc2V0LnZpZDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gZmV0Y2hDb25maWcuaW5pdCgnamF2YXNjcmlwdCcpO1xuICAgICAgICBjb25maWcuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzWydDb250ZW50LVR5cGUnXTtcblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlY3Rpb25zJywgdGhpcy5jYXJ0Tm90aWZpY2F0aW9uLmdldFNlY3Rpb25zVG9SZW5kZXIoKS5tYXAoKHNlY3Rpb24pID0+IHNlY3Rpb24uaWQpKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzZWN0aW9uc191cmwnLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICBjb25maWcuYm9keSA9IGZvcm1EYXRhO1xuICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcblxuICAgICAgICBmZXRjaChgJHt3aW5kb3cucm91dGVzLmNhcnRfYWRkX3VybH1gLCBjb25maWcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvck1lc3NhZ2UocmVzcG9uc2UuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbWl0RXZlbnQuZW1pdEV2ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnROb3RpZmljYXRpb24ucmVuZGVyQ29udGVudHMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHN1Ym1pdEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUXVpY2tBZGRNb2RhbCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMucXVlcnlTZWxlY3RvcignLmxvYWRpbmctb3ZlcmxheV9fc3Bpbm5lcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLmxvYWRpbmctb3ZlcmxheV9fc3Bpbm5lcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlciA9IHRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlciB8fCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWZvcm1fX2Vycm9yLW1lc3NhZ2Utd3JhcHBlcicpO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHRoaXMuZXJyb3JNZXNzYWdlIHx8IHRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1mb3JtX19lcnJvci1tZXNzYWdlJyk7XG5cbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VXcmFwcGVyLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJywgIWVycm9yTWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVRdWlja0FkZE1vZGFsKCkge1xuICAgICAgICBjb25zdCBxdWlja0FkZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncXVpY2stYWRkLW1vZGFsLmlzLWFjdGl2ZScpO1xuICAgICAgICBpZihxdWlja0FkZE1vZGFsICYmIHF1aWNrQWRkTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgcXVpY2tBZGRNb2RhbC5oaWRlKClcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9kdWN0Rm9ybSBmcm9tICdAL21vZHVsZXMvcHJvZHVjdC1mb3JtJztcbmltcG9ydCAnQC9tb2R1bGVzL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LnNjc3MnO1xuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Byb2R1Y3QtZm9ybScpKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwcm9kdWN0LWZvcm0nLCBQcm9kdWN0Rm9ybSk7XG59Il0sIm5hbWVzIjpbImNhcnRDaGFuZ2VFdmVudCIsImVtaXRFdmVudCIsImRhdGEiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsImZldGNoQ29uZmlnIiwiaW5pdCIsInR5cGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29uY2F0IiwiUHJvZHVjdEZvcm0iLCJfSFRNTEVsZW1lbnQiLCJfaW5oZXJpdHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImRpc2FibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU3VibWl0SGFuZGxlciIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwicHJvZHVjdElkIiwidmFyaWFudEN0YXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FydE5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdEJ1dHRvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaGFuZGxlRXJyb3JNZXNzYWdlIiwic2V0QWN0aXZlRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhZGQiLCJyZW1vdmUiLCJzdWJtaXRGb3JtIiwiX3RoaXMyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkYXRhc2V0IiwidmlkIiwiX3RoaXMzIiwiY29uZmlnIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImdldFNlY3Rpb25zVG9SZW5kZXIiLCJtYXAiLCJzZWN0aW9uIiwiaWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYm9keSIsImVycm9yIiwiZmV0Y2giLCJyb3V0ZXMiLCJjYXJ0X2FkZF91cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic3RhdHVzIiwiZGVzY3JpcHRpb24iLCJyZW5kZXJDb250ZW50cyIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJmaW5hbGx5IiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlUXVpY2tBZGRNb2RhbCIsImVycm9yTWVzc2FnZSIsImVycm9yTWVzc2FnZVdyYXBwZXIiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInF1aWNrQWRkTW9kYWwiLCJoaWRlIiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiZGVmYXVsdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwic291cmNlUm9vdCI6IiJ9