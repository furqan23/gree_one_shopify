/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/account-form/index.js":
/*!*******************************************!*\
  !*** ./src/modules/account-form/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Account form
 *
 * Show / hide account forms
*/
var AccountForm = /*#__PURE__*/function () {
  function AccountForm() {
    _classCallCheck(this, AccountForm);
  }
  _createClass(AccountForm, [{
    key: "init",
    value:
    /**
     * Initiate the class.
    */
    function init() {
      // Cache DOM elements.
      this.loginForm = document.querySelector('.js-login-form');
      this.recoverForm = document.querySelector('.js-recover-form');
      this.loginButton = document.querySelector('.js-login-button');
      this.recoverButton = document.querySelector('.js-recover-button');
      if (this.loginForm && this.recoverForm && this.loginButton && this.recoverButton) {
        this.attachEvtListeners();
      }
    }
  }, {
    key: "attachEvtListeners",
    value: function attachEvtListeners() {
      var _this = this;
      this.loginButton.addEventListener('click', function () {
        _this.recoverForm.classList.toggle('hidden');
        _this.loginForm.classList.toggle('hidden');
      });
      this.recoverButton.addEventListener('click', function () {
        _this.recoverForm.classList.toggle('hidden');
        _this.loginForm.classList.toggle('hidden');
      });
    }
  }]);
  return AccountForm;
}();
/* harmony default export */ __webpack_exports__["default"] = (new AccountForm());

/***/ }),

/***/ "./src/modules/addresses-form/index.js":
/*!*********************************************!*\
  !*** ./src/modules/addresses-form/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Adresses form
 *
 * Show / hide address forms
*/
var AdressesForm = /*#__PURE__*/function () {
  function AdressesForm() {
    var _this = this;
    _classCallCheck(this, AdressesForm);
    _defineProperty(this, "handleToggleButtonClick", function (_ref) {
      var currentTarget = _ref.currentTarget;
      currentTarget.closest('[data-address]').querySelector('.js-address-form').classList.toggle('medium:translate-x-full');
      currentTarget.closest('[data-address]').querySelector('.js-address-form').classList.toggle('mediumMax:translate-y-full');
      currentTarget.closest('[data-address]').querySelector('.js-overlay-bg').classList.toggle('-translate-x-full');
      currentTarget.setAttribute('aria-expanded', (currentTarget.getAttribute('aria-expanded') === 'false').toString());
    });
    _defineProperty(this, "handleCloseButtonClick", function (event) {
      document.body.classList.remove('overflow-hidden');
      _this.handleToggleButtonClick(event);
    });
  }
  _createClass(AdressesForm, [{
    key: "init",
    value:
    /**
     * Initiate the class.
    */
    function init() {
      // Cache DOM elements.
      this.toggleButtons = document.querySelectorAll('.js-toggle-address-button');
      this.closeButtons = document.querySelectorAll('.js-close-address-button');
      this.countrySelectElements = document.querySelectorAll('.js-country-select');
      if (this.toggleButtons) {
        this.attachEvtListeners();
      }
      if (this.countrySelectElements) {
        this.handleCountrySelect();
      }
    }
  }, {
    key: "attachEvtListeners",
    value: function attachEvtListeners() {
      var _this2 = this;
      if (this.toggleButtons.length) {
        this.toggleButtons.forEach(function (button) {
          button.addEventListener('click', _this2.handleToggleButtonClick);
        });
      }
      if (this.closeButtons.length) {
        this.closeButtons.forEach(function (button) {
          button.addEventListener('click', _this2.handleCloseButtonClick);
        });
      }
    }
  }, {
    key: "handleCountrySelect",
    value: function handleCountrySelect() {
      this.countrySelectElements.forEach(function (el) {
        var _provinces;
        var formId = el.getAttribute('data-form-id');
        var defaultCountry = el.getAttribute('data-default');
        el.value = defaultCountry;
        var valueOption = _toConsumableArray(el.options).filter(function (option) {
          return option.value === el.value;
        })[0];
        var provincesSelectContainer = null;
        var provincesSelect = null;
        var provinces = null;
        if (el.value) {
          provincesSelectContainer = document.getElementById("AddressProvinceContainer".concat(formId ? "_".concat(formId) : 'New'));
          provincesSelect = provincesSelectContainer.querySelector('select');
          provinces = JSON.parse(valueOption.dataset.provinces);
        }
        if ((_provinces = provinces) !== null && _provinces !== void 0 && _provinces.length) {
          provinces.forEach(function (province) {
            var opt = document.createElement('option');
            opt.value = province[0];
            opt.innerHTML = province[1];
            provincesSelect.appendChild(opt);
          });
          provincesSelect.value = provincesSelect.dataset.default;
          provincesSelectContainer.style.display = null;
        }
        el.addEventListener('change', function () {
          valueOption = _toConsumableArray(el.options).filter(function (option) {
            return option.value === el.value;
          })[0];
          provincesSelectContainer = document.getElementById("AddressProvinceContainer".concat(formId ? "_".concat(formId) : 'New'));
          provincesSelect = provincesSelectContainer.querySelector('select');
          provinces = JSON.parse(valueOption.dataset.provinces);
          if (provinces.length) {
            _toConsumableArray(provincesSelect.querySelectorAll('option')).forEach(function (option) {
              return option.remove();
            });
            provinces.forEach(function (province) {
              var opt = document.createElement('option');
              opt.value = province[0];
              opt.innerHTML = province[1];
              provincesSelect.appendChild(opt);
            });
            provincesSelectContainer.style.display = null;
          } else {
            _toConsumableArray(provincesSelect.querySelectorAll('option')).forEach(function (option) {
              return option.remove();
            });
            provincesSelectContainer.style.display = 'none';
            provincesSelect.value === '';
          }
        });
      });
    }
  }]);
  return AdressesForm;
}();
/* harmony default export */ __webpack_exports__["default"] = (new AdressesForm());

/***/ }),

/***/ "./src/modules/pagination/index.js":
/*!*****************************************!*\
  !*** ./src/modules/pagination/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.scss */ "./src/modules/pagination/pagination.scss");


/***/ }),

/***/ "./src/modules/pagination/pagination.scss":
/*!************************************************!*\
  !*** ./src/modules/pagination/pagination.scss ***!
  \************************************************/
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
  !*** ./src/entrypoints/account/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_account_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/account-form */ "./src/modules/account-form/index.js");
/* harmony import */ var _modules_addresses_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/addresses-form */ "./src/modules/addresses-form/index.js");
/* harmony import */ var _modules_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/pagination */ "./src/modules/pagination/index.js");



_modules_account_form__WEBPACK_IMPORTED_MODULE_0__["default"].init();
_modules_addresses_form__WEBPACK_IMPORTED_MODULE_1__["default"].init();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNHO0FBRXRCO0FBRTlCakIsNkRBQVcsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7QUFDbEJZLCtEQUFZLENBQUNaLElBQUksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hY2NvdW50LWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWRkcmVzc2VzLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9lbnRyeXBvaW50cy9hY2NvdW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgQWNjb3VudCBmb3JtXG4gKlxuICogU2hvdyAvIGhpZGUgYWNjb3VudCBmb3Jtc1xuKi9cblxuY2xhc3MgQWNjb3VudEZvcm0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHRoZSBjbGFzcy5cbiAgICAqL1xuICAgIGluaXQgKCkge1xuICAgICAgICAvLyBDYWNoZSBET00gZWxlbWVudHMuXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxvZ2luLWZvcm0nKTtcbiAgICAgICAgdGhpcy5yZWNvdmVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLWZvcm0nKTtcbiAgICAgICAgdGhpcy5sb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2dpbi1idXR0b24nKTtcbiAgICAgICAgdGhpcy5yZWNvdmVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlY292ZXItYnV0dG9uJyk7XG5cbiAgICAgICAgaWYgKHRoaXMubG9naW5Gb3JtICYmIHRoaXMucmVjb3ZlckZvcm0gJiYgdGhpcy5sb2dpbkJ1dHRvbiAmJiB0aGlzLnJlY292ZXJCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZ0TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2hFdnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY292ZXJGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVjb3ZlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3ZlckZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWNjb3VudEZvcm0oKTtcbiIsIi8qKlxuICogQGZpbGUgQWRyZXNzZXMgZm9ybVxuICpcbiAqIFNob3cgLyBoaWRlIGFkZHJlc3MgZm9ybXNcbiovXG5cbmNsYXNzIEFkcmVzc2VzRm9ybSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgdGhlIGNsYXNzLlxuICAgICovXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIC8vIENhY2hlIERPTSBlbGVtZW50cy5cbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXRvZ2dsZS1hZGRyZXNzLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jbG9zZS1hZGRyZXNzLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmNvdW50cnlTZWxlY3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jb3VudHJ5LXNlbGVjdCcpO1xuXG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUJ1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZ0TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb3VudHJ5U2VsZWN0RWxlbWVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ291bnRyeVNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNoRXZ0TGlzdGVuZXJzKCkge1xuICAgICAgICBpZiAodGhpcy50b2dnbGVCdXR0b25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlQnV0dG9uQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jbG9zZUJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsb3NlQnV0dG9uQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb2dnbGVCdXR0b25DbGljayA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xuICAgICAgICBjdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFkZHJlc3NdJykucXVlcnlTZWxlY3RvcignLmpzLWFkZHJlc3MtZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ21lZGl1bTp0cmFuc2xhdGUteC1mdWxsJyk7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnW2RhdGEtYWRkcmVzc10nKS5xdWVyeVNlbGVjdG9yKCcuanMtYWRkcmVzcy1mb3JtJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVkaXVtTWF4OnRyYW5zbGF0ZS15LWZ1bGwnKTtcbiAgICAgICAgY3VycmVudFRhcmdldC5jbG9zZXN0KCdbZGF0YS1hZGRyZXNzXScpLnF1ZXJ5U2VsZWN0b3IoJy5qcy1vdmVybGF5LWJnJykuY2xhc3NMaXN0LnRvZ2dsZSgnLXRyYW5zbGF0ZS14LWZ1bGwnKTtcbiAgICAgICAgY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAoY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xvc2VCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlVG9nZ2xlQnV0dG9uQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGhhbmRsZUNvdW50cnlTZWxlY3QoKSB7XG4gICAgICAgIHRoaXMuY291bnRyeVNlbGVjdEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybS1pZCcpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENvdW50cnkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVmYXVsdCcpO1xuICAgICAgICAgICAgZWwudmFsdWUgPSBkZWZhdWx0Q291bnRyeTtcblxuICAgICAgICAgICAgbGV0IHZhbHVlT3B0aW9uID0gWy4uLmVsLm9wdGlvbnNdLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBlbC52YWx1ZSlbMF07XG4gICAgICAgICAgICBsZXQgcHJvdmluY2VzU2VsZWN0Q29udGFpbmVyID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBwcm92aW5jZXNTZWxlY3QgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHByb3ZpbmNlcyA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChlbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlc1NlbGVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBBZGRyZXNzUHJvdmluY2VDb250YWluZXIke2Zvcm1JZCA/IGBfJHtmb3JtSWR9YCA6ICdOZXcnfWApO1xuICAgICAgICAgICAgICAgIHByb3ZpbmNlc1NlbGVjdCA9IHByb3ZpbmNlc1NlbGVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBwcm92aW5jZXMgPSBKU09OLnBhcnNlKHZhbHVlT3B0aW9uLmRhdGFzZXQucHJvdmluY2VzKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAocHJvdmluY2VzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwcm92aW5jZXMuZm9yRWFjaChwcm92aW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gcHJvdmluY2VbMF07XG4gICAgICAgICAgICAgICAgICAgIG9wdC5pbm5lckhUTUwgPSBwcm92aW5jZVsxXTtcblxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZXNTZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHByb3ZpbmNlc1NlbGVjdC52YWx1ZSA9IHByb3ZpbmNlc1NlbGVjdC5kYXRhc2V0LmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VzU2VsZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFsdWVPcHRpb24gPSBbLi4uZWwub3B0aW9uc10uZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGVsLnZhbHVlKVswXTtcbiAgICAgICAgICAgICAgICBwcm92aW5jZXNTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgQWRkcmVzc1Byb3ZpbmNlQ29udGFpbmVyJHtmb3JtSWQgPyBgXyR7Zm9ybUlkfWAgOiAnTmV3J31gKTtcbiAgICAgICAgICAgICAgICBwcm92aW5jZXNTZWxlY3QgPSBwcm92aW5jZXNTZWxlY3RDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VzID0gSlNPTi5wYXJzZSh2YWx1ZU9wdGlvbi5kYXRhc2V0LnByb3ZpbmNlcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvdmluY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBbLi4ucHJvdmluY2VzU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24ucmVtb3ZlKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlcy5mb3JFYWNoKHByb3ZpbmNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHQudmFsdWUgPSBwcm92aW5jZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdC5pbm5lckhUTUwgPSBwcm92aW5jZVsxXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2VzU2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZXNTZWxlY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgWy4uLnByb3ZpbmNlc1NlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKV0uZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnJlbW92ZSgpKTtcblxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZXNTZWxlY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgcHJvdmluY2VzU2VsZWN0LnZhbHVlID09PSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWRyZXNzZXNGb3JtKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWNjb3VudEZvcm0gZnJvbSAnQC9tb2R1bGVzL2FjY291bnQtZm9ybSc7XG5pbXBvcnQgQWRyZXNzZXNGb3JtIGZyb20gJ0AvbW9kdWxlcy9hZGRyZXNzZXMtZm9ybSc7XG5cbmltcG9ydCAnQC9tb2R1bGVzL3BhZ2luYXRpb24nO1xuXG5BY2NvdW50Rm9ybS5pbml0KCk7XG5BZHJlc3Nlc0Zvcm0uaW5pdCgpO1xuIl0sIm5hbWVzIjpbIkFjY291bnRGb3JtIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbml0IiwibG9naW5Gb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVjb3ZlckZvcm0iLCJsb2dpbkJ1dHRvbiIsInJlY292ZXJCdXR0b24iLCJhdHRhY2hFdnRMaXN0ZW5lcnMiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJBZHJlc3Nlc0Zvcm0iLCJfZGVmaW5lUHJvcGVydHkiLCJfcmVmIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImV2ZW50IiwiYm9keSIsInJlbW92ZSIsImhhbmRsZVRvZ2dsZUJ1dHRvbkNsaWNrIiwidG9nZ2xlQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZUJ1dHRvbnMiLCJjb3VudHJ5U2VsZWN0RWxlbWVudHMiLCJoYW5kbGVDb3VudHJ5U2VsZWN0IiwiX3RoaXMyIiwibGVuZ3RoIiwiZm9yRWFjaCIsImJ1dHRvbiIsImhhbmRsZUNsb3NlQnV0dG9uQ2xpY2siLCJlbCIsIl9wcm92aW5jZXMiLCJmb3JtSWQiLCJkZWZhdWx0Q291bnRyeSIsInZhbHVlT3B0aW9uIiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib3B0aW9ucyIsImZpbHRlciIsIm9wdGlvbiIsInByb3ZpbmNlc1NlbGVjdENvbnRhaW5lciIsInByb3ZpbmNlc1NlbGVjdCIsInByb3ZpbmNlcyIsImdldEVsZW1lbnRCeUlkIiwiY29uY2F0IiwiSlNPTiIsInBhcnNlIiwiZGF0YXNldCIsInByb3ZpbmNlIiwib3B0IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZGVmYXVsdCIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=