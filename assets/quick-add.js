/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entrypoints/helpers/pauseAllMedia.js":
/*!**************************************************!*\
  !*** ./src/entrypoints/helpers/pauseAllMedia.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


var pauseAllMedia = {
  init: function init() {
    document.querySelectorAll('.js-youtube').forEach(function (video) {
      video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
    document.querySelectorAll('.js-vimeo').forEach(function (video) {
      video.contentWindow.postMessage('{"method":"pause"}', '*');
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (pauseAllMedia);

/***/ }),

/***/ "./src/entrypoints/helpers/trapFocus.js":
/*!**********************************************!*\
  !*** ./src/entrypoints/helpers/trapFocus.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


var trapFocusHandlers = {};
var trapFocus = {
  init: function init(container) {
    var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : container;
    var elements = this.getFocusableElements(container);
    var first = elements[0];
    var last = elements[elements.length - 1];
    this.remove();
    trapFocusHandlers.focusin = function (event) {
      if (event.target !== container && event.target !== last && event.target !== first) return;
      document.addEventListener('keydown', trapFocusHandlers.keydown);
    };
    trapFocusHandlers.focusout = function () {
      document.removeEventListener('keydown', trapFocusHandlers.keydown);
    };
    trapFocusHandlers.keydown = function (event) {
      if (event.code.toUpperCase() !== 'TAB') return; // If not TAB key
      // On the last focusable element and tab forward, focus the first element.
      if (event.target === last && !event.shiftKey) {
        event.preventDefault();
        first.focus();
      }

      //  On the first focusable element and tab backward, focus the last element.
      if ((event.target === container || event.target === first) && event.shiftKey) {
        event.preventDefault();
        last.focus();
      }
    };
    document.addEventListener('focusout', trapFocusHandlers.focusout);
    document.addEventListener('focusin', trapFocusHandlers.focusin);
    elementToFocus.focus();
  },
  remove: function remove() {
    var elementToFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    document.removeEventListener('focusin', trapFocusHandlers.focusin);
    document.removeEventListener('focusout', trapFocusHandlers.focusout);
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
    if (elementToFocus) elementToFocus.focus();
  },
  getFocusableElements: function getFocusableElements(container) {
    return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (trapFocus);

/***/ }),

/***/ "./src/modules/global/custom-elements/modal-dialog.js":
/*!************************************************************!*\
  !*** ./src/modules/global/custom-elements/modal-dialog.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModalDialog; }
/* harmony export */ });
/* harmony import */ var _entrypoints_helpers_trapFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/entrypoints/helpers/trapFocus */ "./src/entrypoints/helpers/trapFocus.js");
/* harmony import */ var _entrypoints_helpers_pauseAllMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entrypoints/helpers/pauseAllMedia */ "./src/entrypoints/helpers/pauseAllMedia.js");
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


var ModalDialog = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ModalDialog, _HTMLElement);
  function ModalDialog() {
    var _this;
    _classCallCheck(this, ModalDialog);
    _this = _callSuper(this, ModalDialog);
    _this.querySelector('[id^="ModalClose-"]').addEventListener('click', _this.hide.bind(_assertThisInitialized(_this)));
    _this.addEventListener('keyup', function (event) {
      if (event.code.toUpperCase() === 'ESCAPE') _this.hide();
    });
    if (_this.classList.contains('media-modal')) {
      _this.addEventListener('pointerup', function (event) {
        if (event.pointerType === 'mouse' && !event.target.closest('deferred-media, product-model')) _this.hide();
      });
    } else if (_this.querySelector('.js-modal-overlay')) {
      _this.querySelector('.js-modal-overlay').addEventListener('pointerup', function (event) {
        if (event.pointerType === 'mouse') _this.hide();
      });
    } else {
      _this.addEventListener('click', function (event) {
        if (event.target.nodeName === 'MODAL-DIALOG') _this.hide();
      });
    }
    return _this;
  }
  _createClass(ModalDialog, [{
    key: "show",
    value: function show(opener) {
      this.openedBy = opener;
      var popup = this.querySelector('.template-popup');
      document.body.classList.add('overflow-hidden');
      this.setAttribute('open', '');
      this.classList.add('is-active');
      if (popup) popup.loadContent();
      _entrypoints_helpers_trapFocus__WEBPACK_IMPORTED_MODULE_0__["default"].init(this, this.querySelector('[role="dialog"]'));
      _entrypoints_helpers_pauseAllMedia__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    }
  }, {
    key: "hide",
    value: function hide() {
      document.body.classList.remove('overflow-hidden');
      this.removeAttribute('open');
      this.classList.remove('is-active');
      if (this.openedBy) {
        this.openedBy.classList.remove('is-active');
        _entrypoints_helpers_trapFocus__WEBPACK_IMPORTED_MODULE_0__["default"].remove(this.openedBy);
      }
      _entrypoints_helpers_pauseAllMedia__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    }
  }]);
  return ModalDialog;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

if (!customElements.get('modal-dialog')) {
  customElements.define('modal-dialog', ModalDialog);
}

/***/ }),

/***/ "./src/modules/quick-add/index.js":
/*!****************************************!*\
  !*** ./src/modules/quick-add/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ QuickAddModal; }
/* harmony export */ });
/* harmony import */ var _quick_add_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quick-add.scss */ "./src/modules/quick-add/quick-add.scss");
/* harmony import */ var _global_custom_elements_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/custom-elements/modal-dialog */ "./src/modules/global/custom-elements/modal-dialog.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var QuickAddModal = /*#__PURE__*/function (_ModalDialog) {
  _inherits(QuickAddModal, _ModalDialog);
  /**
   * Class constructor
   *
   * @arg {object} - `el` Selector for the media gallery
  */
  function QuickAddModal() {
    var _this;
    _classCallCheck(this, QuickAddModal);
    _this = _callSuper(this, QuickAddModal);
    _this.modalContent = _this.querySelector('[id^="QuickAddModalContent"]');
    return _this;
  }
  _createClass(QuickAddModal, [{
    key: "hide",
    value: function hide() {
      var _this2 = this;
      var preventFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var cartNotification = document.querySelector('cart-notification');
      if (cartNotification) cartNotification.setActiveElement(this.openedBy);
      setTimeout(function () {
        _this2.modalContent.innerHTML = '';
      }, 300);
      if (preventFocus) this.openedBy = null;
      _get(_getPrototypeOf(QuickAddModal.prototype), "hide", this).call(this);
    }
  }, {
    key: "show",
    value: function show(opener) {
      var _this3 = this;
      opener.setAttribute('aria-disabled', true);
      opener.classList.add('loading');
      opener.querySelector('.loading-overlay__spinner').classList.remove('hidden');
      fetch(opener.getAttribute('data-product-url')).then(function (response) {
        return response.text();
      }).then(function (responseText) {
        var responseHTML = new DOMParser().parseFromString(responseText, 'text/html');
        _this3.productElement = responseHTML.querySelector('[id^="MainProduct-"]');
        _this3.preventDuplicatedIDs();
        _this3.removeDOMElements();
        _this3.adjustDOMElements();
        _this3.setInnerHTML(_this3.modalContent, _this3.productElement.innerHTML);
        if (window.Shopify && window.Shopify.PaymentButton) {
          window.Shopify.PaymentButton.init();
        }
        if (window.ProductModel) window.ProductModel.loadShopifyXR();
        _this3.removeGalleryListSemantic();
        _this3.preventVariantURLSwitching();
        _get(_getPrototypeOf(QuickAddModal.prototype), "show", _this3).call(_this3, opener);
      }).finally(function () {
        opener.removeAttribute('aria-disabled');
        opener.classList.remove('loading');
        opener.querySelector('.loading-overlay__spinner').classList.add('hidden');
      });
    }
  }, {
    key: "setInnerHTML",
    value: function setInnerHTML(element, html) {
      element.innerHTML = html;

      // Reinjects the script tags to allow execution. By default, scripts are disabled when using element.innerHTML.
      element.querySelectorAll('script').forEach(function (oldScriptTag) {
        var newScriptTag = document.createElement('script');
        Array.from(oldScriptTag.attributes).forEach(function (attribute) {
          newScriptTag.setAttribute(attribute.name, attribute.value);
        });
        newScriptTag.appendChild(document.createTextNode(oldScriptTag.innerHTML));
        oldScriptTag.parentNode.replaceChild(newScriptTag, oldScriptTag);
      });
    }
  }, {
    key: "preventVariantURLSwitching",
    value: function preventVariantURLSwitching() {
      this.modalContent.querySelector('variant-radios,variant-selects').setAttribute('data-update-url', 'false');
    }
  }, {
    key: "removeDOMElements",
    value: function removeDOMElements() {
      var _this4 = this;
      var deleteDomElements = ['nav', 'pickup-availability', 'product-modal', '.swiper', '.swiper-scrollbar', '.js-quick-add-context-breadcrumb', '.js-product-media', '.js-product-kf-images', '.js-product-kf-icons', '.js-pdp-cta-sticky', '.js-info-footer'];
      deleteDomElements.forEach(function (selector) {
        var elements = _this4.productElement.querySelectorAll(selector);
        if (elements.length > 0) {
          elements.forEach(function (element) {
            element.remove();
          });
        }
      });
    }
  }, {
    key: "adjustDOMElements",
    value: function adjustDOMElements() {
      var wrap = this.productElement.querySelector('.js-quick-add-context-wrap');
      if (wrap) {
        wrap.classList.add('mediumMax:wrap', 'medium:px-10');
        wrap.classList.remove('medium:wrap', 'bg-uiMidGrey', 'medium:px-10', 'border-t-4');
      }
      var container = this.productElement.querySelector('.js-quick-add-context-container');
      if (container) {
        container.classList.remove('container');
      }
      var productGrid = this.productElement.querySelector('.js-quick-add-context-grid');
      if (productGrid) productGrid.classList.remove('grid', 'grid-cols-4', 'medium:grid-cols-12', 'medium:gap-x-5');
      var modalMoreInfo = this.productElement.querySelector('.product__modal-more-info');
      if (modalMoreInfo) {
        modalMoreInfo.classList.remove('hidden');
        modalMoreInfo.classList.add('inline-block');
      }
      var productCarousel = this.productElement.querySelector('.js-pdp-media-gallery');
      if (productCarousel) productCarousel.classList.remove('js-pdp-media-gallery');
      var productInfoContainer = this.productElement.querySelector('.js-quick-add-context-product-info-container');
      if (productInfoContainer) {
        productInfoContainer.classList.remove('col-span-4', 'mediumMax:mt-10', 'mediumMax:wrap', 'medium:col-span-6', 'xLarge:medium:col-start-8', 'xLarge:medium-col-span-5');
      }
      var h1 = this.productElement.querySelector('.js-quick-add-context-heading');
      if (h1) {
        h1.classList.add('heading-xs', 'mr-20', 'medium:mr-24');
      }
      var quantityAtc = this.productElement.querySelector('.js-quick-add-context-quantity-atc');
      if (quantityAtc) {
        quantityAtc.classList.add('mediumMax:flex-wrap');
      }
      var variants = this.productElement.querySelector('.js-quick-add-context-variants');
      if (variants) {
        variants.classList.remove('xLarge:mt-8');
        variants.classList.add('medium:mt-[1.5625rem]');
      }
      var productForm = this.productElement.querySelector('.js-quick-add-context-product-form');
      if (productForm) {
        productForm.classList.remove('w-full');
        productForm.classList.add('inline-block', 'w-auto');
      }
      var submit = this.productElement.querySelector('.js-quick-add-context-submit');
      if (submit) {
        submit.classList.remove('button--full-width-mobile');
      }
    }
  }, {
    key: "preventDuplicatedIDs",
    value: function preventDuplicatedIDs() {
      var sectionId = this.productElement.dataset.section;
      this.productElement.innerHTML = this.productElement.innerHTML.replaceAll(sectionId, "quickadd-".concat(sectionId));
      this.productElement.querySelectorAll('variant-selects, variant-radios').forEach(function (variantSelect) {
        variantSelect.dataset.originalSection = sectionId;
      });
    }
  }, {
    key: "removeGalleryListSemantic",
    value: function removeGalleryListSemantic() {
      var galleryList = this.modalContent.querySelector('[id^="Slider-Gallery"]');
      if (!galleryList) return;
      galleryList.setAttribute('role', 'presentation');
      galleryList.querySelectorAll('[id^="Slide-"]').forEach(function (li) {
        return li.setAttribute('role', 'presentation');
      });
    }
  }]);
  return QuickAddModal;
}(_global_custom_elements_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/modules/quick-add/quick-add.scss":
/*!**********************************************!*\
  !*** ./src/modules/quick-add/quick-add.scss ***!
  \**********************************************/
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
/*!********************************************!*\
  !*** ./src/entrypoints/quick-add/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_quick_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/quick-add */ "./src/modules/quick-add/index.js");

if (document.getElementsByTagName('quick-add-modal')) {
  customElements.define('quick-add-modal', _modules_quick_add__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFFaEQsSUFBSWhDLFFBQVEsQ0FBQ3VJLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQUU7RUFDbER6RSxjQUFjLENBQUNFLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRUMsMERBQWEsQ0FBQztBQUMzRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2hlbHBlcnMvcGF1c2VBbGxNZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnlwb2ludHMvaGVscGVycy90cmFwRm9jdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2xvYmFsL2N1c3RvbS1lbGVtZW50cy9tb2RhbC1kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcXVpY2stYWRkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3F1aWNrLWFkZC9xdWljay1hZGQuc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnlwb2ludHMvcXVpY2stYWRkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXVzZUFsbE1lZGlhID0ge1xuICAgIGluaXQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy15b3V0dWJlJykuZm9yRWFjaCgodmlkZW8pID0+IHtcbiAgICAgICAgICAgIHZpZGVvLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCInICsgJ3BhdXNlVmlkZW8nICsgJ1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy12aW1lbycpLmZvckVhY2goKHZpZGVvKSA9PiB7XG4gICAgICAgICAgICB2aWRlby5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJtZXRob2RcIjpcInBhdXNlXCJ9JywgJyonKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXVzZUFsbE1lZGlhXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgdHJhcEZvY3VzSGFuZGxlcnMgPSB7fTtcblxuY29uc3QgdHJhcEZvY3VzID0geyAgIFxuXG4gICAgaW5pdChjb250YWluZXIsIGVsZW1lbnRUb0ZvY3VzID0gY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRGb2N1c2FibGVFbGVtZW50cyhjb250YWluZXIpO1xuICAgICAgICBjb25zdCBmaXJzdCA9IGVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBsYXN0ID0gZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV07XG4gICAgXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgXG4gICAgICAgIHRyYXBGb2N1c0hhbmRsZXJzLmZvY3VzaW4gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQgIT09IGNvbnRhaW5lciAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCAhPT0gbGFzdCAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCAhPT0gZmlyc3RcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdHJhcEZvY3VzSGFuZGxlcnMua2V5ZG93bik7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHRyYXBGb2N1c0hhbmRsZXJzLmZvY3Vzb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdHJhcEZvY3VzSGFuZGxlcnMua2V5ZG93bik7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHRyYXBGb2N1c0hhbmRsZXJzLmtleWRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUudG9VcHBlckNhc2UoKSAhPT0gJ1RBQicpIHJldHVybjsgLy8gSWYgbm90IFRBQiBrZXlcbiAgICAgICAgICAgIC8vIE9uIHRoZSBsYXN0IGZvY3VzYWJsZSBlbGVtZW50IGFuZCB0YWIgZm9yd2FyZCwgZm9jdXMgdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBsYXN0ICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZmlyc3QuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vICBPbiB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgYW5kIHRhYiBiYWNrd2FyZCwgZm9jdXMgdGhlIGxhc3QgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoZXZlbnQudGFyZ2V0ID09PSBjb250YWluZXIgfHwgZXZlbnQudGFyZ2V0ID09PSBmaXJzdCkgJiZcbiAgICAgICAgICAgICAgICBldmVudC5zaGlmdEtleVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsYXN0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdHJhcEZvY3VzSGFuZGxlcnMuZm9jdXNvdXQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdHJhcEZvY3VzSGFuZGxlcnMuZm9jdXNpbik7XG4gICAgXG4gICAgICAgIGVsZW1lbnRUb0ZvY3VzLmZvY3VzKCk7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmUoZWxlbWVudFRvRm9jdXMgPSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0cmFwRm9jdXNIYW5kbGVycy5mb2N1c2luKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0cmFwRm9jdXNIYW5kbGVycy5mb2N1c291dCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0cmFwRm9jdXNIYW5kbGVycy5rZXlkb3duKTtcbiAgICAgIFxuICAgICAgICBpZiAoZWxlbWVudFRvRm9jdXMpIGVsZW1lbnRUb0ZvY3VzLmZvY3VzKCk7XG4gICAgfSxcblxuICAgIGdldEZvY3VzYWJsZUVsZW1lbnRzKGNvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgIFwic3VtbWFyeSwgYVtocmVmXSwgYnV0dG9uOmVuYWJsZWQsIFt0YWJpbmRleF06bm90KFt0YWJpbmRleF49Jy0nXSksIFtkcmFnZ2FibGVdLCBhcmVhLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSk6ZW5hYmxlZCwgc2VsZWN0OmVuYWJsZWQsIHRleHRhcmVhOmVuYWJsZWQsIG9iamVjdCwgaWZyYW1lXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYXBGb2N1c1xuIiwiaW1wb3J0IHRyYXBGb2N1cyBmcm9tICdAL2VudHJ5cG9pbnRzL2hlbHBlcnMvdHJhcEZvY3VzJztcbmltcG9ydCBwYXVzZUFsbE1lZGlhIGZyb20gJ0AvZW50cnlwb2ludHMvaGVscGVycy9wYXVzZUFsbE1lZGlhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxEaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignW2lkXj1cIk1vZGFsQ2xvc2UtXCJdJykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICB0aGlzLmhpZGUuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZS50b1VwcGVyQ2FzZSgpID09PSAnRVNDQVBFJykgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ21lZGlhLW1vZGFsJykpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnICYmICFldmVudC50YXJnZXQuY2xvc2VzdCgnZGVmZXJyZWQtbWVkaWEsIHByb2R1Y3QtbW9kZWwnKSkgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5qcy1tb2RhbC1vdmVybGF5JykpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLmpzLW1vZGFsLW92ZXJsYXknKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gJ01PREFMLURJQUxPRycpIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KG9wZW5lcikge1xuICAgICAgICB0aGlzLm9wZW5lZEJ5ID0gb3BlbmVyO1xuICAgICAgICBjb25zdCBwb3B1cCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlLXBvcHVwJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdvcGVuJywgJycpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBpZiAocG9wdXApIHBvcHVwLmxvYWRDb250ZW50KCk7XG4gICAgICAgIHRyYXBGb2N1cy5pbml0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignW3JvbGU9XCJkaWFsb2dcIl0nKSk7XG4gICAgICAgIHBhdXNlQWxsTWVkaWEuaW5pdCgpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLm9wZW5lZEJ5KSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5lZEJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgdHJhcEZvY3VzLnJlbW92ZSh0aGlzLm9wZW5lZEJ5KTtcbiAgICAgICAgfVxuICAgICAgICBwYXVzZUFsbE1lZGlhLmluaXQoKTtcbiAgICB9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdtb2RhbC1kaWFsb2cnKSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbW9kYWwtZGlhbG9nJywgTW9kYWxEaWFsb2cpO1xufVxuIiwiaW1wb3J0ICcuL3F1aWNrLWFkZC5zY3NzJ1xuaW1wb3J0IE1vZGFsRGlhbG9nIGZyb20gJy4uL2dsb2JhbC9jdXN0b20tZWxlbWVudHMvbW9kYWwtZGlhbG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tBZGRNb2RhbCBleHRlbmRzIE1vZGFsRGlhbG9nIHtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQGFyZyB7b2JqZWN0fSAtIGBlbGAgU2VsZWN0b3IgZm9yIHRoZSBtZWRpYSBnYWxsZXJ5XG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJRdWlja0FkZE1vZGFsQ29udGVudFwiXScpO1xuICAgIH1cblxuICAgIGhpZGUocHJldmVudEZvY3VzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FydE5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhcnQtbm90aWZpY2F0aW9uJyk7XG4gICAgICAgIGlmIChjYXJ0Tm90aWZpY2F0aW9uKSBjYXJ0Tm90aWZpY2F0aW9uLnNldEFjdGl2ZUVsZW1lbnQodGhpcy5vcGVuZWRCeSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgaWYgKHByZXZlbnRGb2N1cykgdGhpcy5vcGVuZWRCeSA9IG51bGw7XG4gICAgICAgIHN1cGVyLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzaG93KG9wZW5lcikge1xuICAgICAgICBvcGVuZXIuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIG9wZW5lci5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgICAgIG9wZW5lci5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1vdmVybGF5X19zcGlubmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgZmV0Y2gob3BlbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LXVybCcpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VUZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VIVE1MID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhyZXNwb25zZVRleHQsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RFbGVtZW50ID0gcmVzcG9uc2VIVE1MLnF1ZXJ5U2VsZWN0b3IoJ1tpZF49XCJNYWluUHJvZHVjdC1cIl0nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnREdXBsaWNhdGVkSURzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVET01FbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRqdXN0RE9NRWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldElubmVySFRNTCh0aGlzLm1vZGFsQ29udGVudCwgdGhpcy5wcm9kdWN0RWxlbWVudC5pbm5lckhUTUwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5TaG9waWZ5ICYmIHdpbmRvdy5TaG9waWZ5LlBheW1lbnRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LlNob3BpZnkuUGF5bWVudEJ1dHRvbi5pbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5Qcm9kdWN0TW9kZWwpIHdpbmRvdy5Qcm9kdWN0TW9kZWwubG9hZFNob3BpZnlYUigpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVHYWxsZXJ5TGlzdFNlbWFudGljKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2ZW50VmFyaWFudFVSTFN3aXRjaGluZygpO1xuICAgICAgICAgICAgICAgIHN1cGVyLnNob3cob3BlbmVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3BlbmVyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIG9wZW5lci5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgb3BlbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLW92ZXJsYXlfX3NwaW5uZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldElubmVySFRNTChlbGVtZW50LCBodG1sKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgICAvLyBSZWluamVjdHMgdGhlIHNjcmlwdCB0YWdzIHRvIGFsbG93IGV4ZWN1dGlvbi4gQnkgZGVmYXVsdCwgc2NyaXB0cyBhcmUgZGlzYWJsZWQgd2hlbiB1c2luZyBlbGVtZW50LmlubmVySFRNTC5cbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKS5mb3JFYWNoKG9sZFNjcmlwdFRhZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTY3JpcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIEFycmF5LmZyb20ob2xkU2NyaXB0VGFnLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgICAgICBuZXdTY3JpcHRUYWcuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsdWUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1NjcmlwdFRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvbGRTY3JpcHRUYWcuaW5uZXJIVE1MKSk7XG4gICAgICAgICAgICBvbGRTY3JpcHRUYWcucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U2NyaXB0VGFnLCBvbGRTY3JpcHRUYWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2ZW50VmFyaWFudFVSTFN3aXRjaGluZygpIHtcbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcigndmFyaWFudC1yYWRpb3MsdmFyaWFudC1zZWxlY3RzJykuc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZS11cmwnLCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICByZW1vdmVET01FbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlRG9tRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAnbmF2JyxcbiAgICAgICAgICAgICdwaWNrdXAtYXZhaWxhYmlsaXR5JyxcbiAgICAgICAgICAgICdwcm9kdWN0LW1vZGFsJyxcbiAgICAgICAgICAgICcuc3dpcGVyJyxcbiAgICAgICAgICAgICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgICAgICAnLmpzLXF1aWNrLWFkZC1jb250ZXh0LWJyZWFkY3J1bWInLFxuICAgICAgICAgICAgJy5qcy1wcm9kdWN0LW1lZGlhJyxcbiAgICAgICAgICAgICcuanMtcHJvZHVjdC1rZi1pbWFnZXMnLFxuICAgICAgICAgICAgJy5qcy1wcm9kdWN0LWtmLWljb25zJyxcbiAgICAgICAgICAgICcuanMtcGRwLWN0YS1zdGlja3knLFxuICAgICAgICAgICAgJy5qcy1pbmZvLWZvb3RlcidcbiAgICAgICAgXTtcblxuICAgICAgICBkZWxldGVEb21FbGVtZW50cy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5wcm9kdWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgICAgICAgaWYoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRqdXN0RE9NRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IHdyYXAgPSB0aGlzLnByb2R1Y3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1xdWljay1hZGQtY29udGV4dC13cmFwJyk7XG4gICAgICAgIGlmICh3cmFwKSB7XG4gICAgICAgICAgICB3cmFwLmNsYXNzTGlzdC5hZGQoJ21lZGl1bU1heDp3cmFwJywgJ21lZGl1bTpweC0xMCcpO1xuICAgICAgICAgICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW06d3JhcCcsICdiZy11aU1pZEdyZXknLCAnbWVkaXVtOnB4LTEwJywgJ2JvcmRlci10LTQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucHJvZHVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXF1aWNrLWFkZC1jb250ZXh0LWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9kdWN0R3JpZCA9IHRoaXMucHJvZHVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXF1aWNrLWFkZC1jb250ZXh0LWdyaWQnKTtcbiAgICAgICAgaWYgKHByb2R1Y3RHcmlkKSBwcm9kdWN0R3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdncmlkJywgJ2dyaWQtY29scy00JywgJ21lZGl1bTpncmlkLWNvbHMtMTInLCAnbWVkaXVtOmdhcC14LTUnKTtcblxuICAgICAgICBjb25zdCBtb2RhbE1vcmVJbmZvID0gdGhpcy5wcm9kdWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fbW9kYWwtbW9yZS1pbmZvJyk7XG4gICAgICAgIGlmIChtb2RhbE1vcmVJbmZvKSB7XG4gICAgICAgICAgICBtb2RhbE1vcmVJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgbW9kYWxNb3JlSW5mby5jbGFzc0xpc3QuYWRkKCdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RDYXJvdXNlbCA9IHRoaXMucHJvZHVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBkcC1tZWRpYS1nYWxsZXJ5Jyk7XG4gICAgICAgIGlmIChwcm9kdWN0Q2Fyb3VzZWwpIHByb2R1Y3RDYXJvdXNlbC5jbGFzc0xpc3QucmVtb3ZlKCdqcy1wZHAtbWVkaWEtZ2FsbGVyeScpO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJbmZvQ29udGFpbmVyID0gdGhpcy5wcm9kdWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcXVpY2stYWRkLWNvbnRleHQtcHJvZHVjdC1pbmZvLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAocHJvZHVjdEluZm9Db250YWluZXIpIHtcbiAgICAgICAgICAgIHByb2R1Y3RJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbC1zcGFuLTQnLCAnbWVkaXVtTWF4Om10LTEwJywgJ21lZGl1bU1heDp3cmFwJywgJ21lZGl1bTpjb2wtc3Bhbi02JywgJ3hMYXJnZTptZWRpdW06Y29sLXN0YXJ0LTgnLCAneExhcmdlOm1lZGl1bS1jb2wtc3Bhbi01Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoMSA9IHRoaXMucHJvZHVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXF1aWNrLWFkZC1jb250ZXh0LWhlYWRpbmcnKTtcbiAgICAgICAgaWYgKGgxKSB7XG4gICAgICAgICAgICBoMS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXhzJywgJ21yLTIwJywgJ21lZGl1bTptci0yNCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVhbnRpdHlBdGMgPSB0aGlzLnByb2R1Y3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1xdWljay1hZGQtY29udGV4dC1xdWFudGl0eS1hdGMnKTtcbiAgICAgICAgaWYgKHF1YW50aXR5QXRjKSB7XG4gICAgICAgICAgICBxdWFudGl0eUF0Yy5jbGFzc0xpc3QuYWRkKCdtZWRpdW1NYXg6ZmxleC13cmFwJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YXJpYW50cyA9IHRoaXMucHJvZHVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXF1aWNrLWFkZC1jb250ZXh0LXZhcmlhbnRzJyk7XG4gICAgICAgIGlmICh2YXJpYW50cykge1xuICAgICAgICAgICAgdmFyaWFudHMuY2xhc3NMaXN0LnJlbW92ZSgneExhcmdlOm10LTgnKTtcbiAgICAgICAgICAgIHZhcmlhbnRzLmNsYXNzTGlzdC5hZGQoJ21lZGl1bTptdC1bMS41NjI1cmVtXScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdEZvcm0gPSB0aGlzLnByb2R1Y3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1xdWljay1hZGQtY29udGV4dC1wcm9kdWN0LWZvcm0nKTtcbiAgICAgICAgaWYgKHByb2R1Y3RGb3JtKSB7XG4gICAgICAgICAgICBwcm9kdWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd3LWZ1bGwnKTtcbiAgICAgICAgICAgIHByb2R1Y3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2lubGluZS1ibG9jaycsICd3LWF1dG8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IHRoaXMucHJvZHVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXF1aWNrLWFkZC1jb250ZXh0LXN1Ym1pdCcpO1xuICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLS1mdWxsLXdpZHRoLW1vYmlsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmVudER1cGxpY2F0ZWRJRHMoKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25JZCA9IHRoaXMucHJvZHVjdEVsZW1lbnQuZGF0YXNldC5zZWN0aW9uO1xuICAgICAgICB0aGlzLnByb2R1Y3RFbGVtZW50LmlubmVySFRNTCA9IHRoaXMucHJvZHVjdEVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2VBbGwoc2VjdGlvbklkLCBgcXVpY2thZGQtJHsgc2VjdGlvbklkIH1gKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2YXJpYW50LXNlbGVjdHMsIHZhcmlhbnQtcmFkaW9zJykuZm9yRWFjaCgodmFyaWFudFNlbGVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyaWFudFNlbGVjdC5kYXRhc2V0Lm9yaWdpbmFsU2VjdGlvbiA9IHNlY3Rpb25JZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlR2FsbGVyeUxpc3RTZW1hbnRpYygpIHtcbiAgICAgICAgY29uc3QgZ2FsbGVyeUxpc3QgPSB0aGlzLm1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKCdbaWRePVwiU2xpZGVyLUdhbGxlcnlcIl0nKTtcbiAgICAgICAgaWYgKCFnYWxsZXJ5TGlzdCkgcmV0dXJuO1xuXG4gICAgICAgIGdhbGxlcnlMaXN0LnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcbiAgICAgICAgZ2FsbGVyeUxpc3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIlNsaWRlLVwiXScpLmZvckVhY2gobGkgPT4gbGkuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpKTtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUXVpY2tBZGRNb2RhbCBmcm9tICdAL21vZHVsZXMvcXVpY2stYWRkJztcblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdxdWljay1hZGQtbW9kYWwnKSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncXVpY2stYWRkLW1vZGFsJywgUXVpY2tBZGRNb2RhbCk7XG59Il0sIm5hbWVzIjpbInBhdXNlQWxsTWVkaWEiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInZpZGVvIiwiY29udGVudFdpbmRvdyIsInBvc3RNZXNzYWdlIiwidHJhcEZvY3VzSGFuZGxlcnMiLCJ0cmFwRm9jdXMiLCJjb250YWluZXIiLCJlbGVtZW50VG9Gb2N1cyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImVsZW1lbnRzIiwiZ2V0Rm9jdXNhYmxlRWxlbWVudHMiLCJmaXJzdCIsImxhc3QiLCJyZW1vdmUiLCJmb2N1c2luIiwiZXZlbnQiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5ZG93biIsImZvY3Vzb3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsIkFycmF5IiwiZnJvbSIsIk1vZGFsRGlhbG9nIiwiX0hUTUxFbGVtZW50IiwiX2luaGVyaXRzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwicXVlcnlTZWxlY3RvciIsImhpZGUiLCJiaW5kIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicG9pbnRlclR5cGUiLCJjbG9zZXN0Iiwibm9kZU5hbWUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInNob3ciLCJvcGVuZXIiLCJvcGVuZWRCeSIsInBvcHVwIiwiYm9keSIsImFkZCIsInNldEF0dHJpYnV0ZSIsImxvYWRDb250ZW50IiwicmVtb3ZlQXR0cmlidXRlIiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiZGVmYXVsdCIsImN1c3RvbUVsZW1lbnRzIiwiZ2V0IiwiZGVmaW5lIiwiUXVpY2tBZGRNb2RhbCIsIl9Nb2RhbERpYWxvZyIsIm1vZGFsQ29udGVudCIsIl90aGlzMiIsInByZXZlbnRGb2N1cyIsImNhcnROb3RpZmljYXRpb24iLCJzZXRBY3RpdmVFbGVtZW50Iiwic2V0VGltZW91dCIsImlubmVySFRNTCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjYWxsIiwiX3RoaXMzIiwiZmV0Y2giLCJnZXRBdHRyaWJ1dGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VIVE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicHJvZHVjdEVsZW1lbnQiLCJwcmV2ZW50RHVwbGljYXRlZElEcyIsInJlbW92ZURPTUVsZW1lbnRzIiwiYWRqdXN0RE9NRWxlbWVudHMiLCJzZXRJbm5lckhUTUwiLCJ3aW5kb3ciLCJTaG9waWZ5IiwiUGF5bWVudEJ1dHRvbiIsIlByb2R1Y3RNb2RlbCIsImxvYWRTaG9waWZ5WFIiLCJyZW1vdmVHYWxsZXJ5TGlzdFNlbWFudGljIiwicHJldmVudFZhcmlhbnRVUkxTd2l0Y2hpbmciLCJmaW5hbGx5IiwiZWxlbWVudCIsImh0bWwiLCJvbGRTY3JpcHRUYWciLCJuZXdTY3JpcHRUYWciLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZSIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsIl90aGlzNCIsImRlbGV0ZURvbUVsZW1lbnRzIiwic2VsZWN0b3IiLCJ3cmFwIiwicHJvZHVjdEdyaWQiLCJtb2RhbE1vcmVJbmZvIiwicHJvZHVjdENhcm91c2VsIiwicHJvZHVjdEluZm9Db250YWluZXIiLCJoMSIsInF1YW50aXR5QXRjIiwidmFyaWFudHMiLCJwcm9kdWN0Rm9ybSIsInN1Ym1pdCIsInNlY3Rpb25JZCIsImRhdGFzZXQiLCJzZWN0aW9uIiwicmVwbGFjZUFsbCIsImNvbmNhdCIsInZhcmlhbnRTZWxlY3QiLCJvcmlnaW5hbFNlY3Rpb24iLCJnYWxsZXJ5TGlzdCIsImxpIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiXSwic291cmNlUm9vdCI6IiJ9