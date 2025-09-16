/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/blog-listing-filter/index.js":
/*!**************************************************!*\
  !*** ./src/modules/blog-listing-filter/index.js ***!
  \**************************************************/
/***/ (function() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BlogFilter = /*#__PURE__*/function () {
  "use strict";

  function BlogFilter(formId, buttonId) {
    _classCallCheck(this, BlogFilter);
    this.form = document.getElementById(formId);
    this.button = document.getElementById(buttonId);
    this.init();
  }
  _createClass(BlogFilter, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.button.addEventListener('click', function () {
        return _this.applyFilters();
      });
      this.updateArticlesShowing();
      this.applyButton();
    }
  }, {
    key: "applyButton",
    value: function applyButton() {
      var _this2 = this;
      var checkboxes = this.form.querySelectorAll("input[type='checkbox']");
      var applyButtonCount = this.button.querySelector(".apply-button__count");
      if (checkboxes && applyButtonCount) {
        checkboxes.forEach(function (checkbox) {
          checkbox.addEventListener('change', function () {
            _this2.updateSelectedCount(checkboxes, _this2.button, applyButtonCount);
          });
        });
      }
    }
  }, {
    key: "updateSelectedCount",
    value: function updateSelectedCount(checkboxes, applyButton, applyButtonCount) {
      var selectedFilters = Array.from(checkboxes).filter(function (checkbox) {
        return checkbox.checked;
      }).length;
      applyButtonCount.textContent = "(".concat(selectedFilters, ")");
      if (selectedFilters > 0) {
        applyButton.disabled = false;
      } else {
        applyButton.disabled = true;
      }
    }
  }, {
    key: "applyFilters",
    value: function applyFilters() {
      var filters = this.form.querySelectorAll('input[name="filter"]:checked');
      var selectedFilters = Array.from(filters).map(function (filter) {
        return filter.value;
      });
      var blogUrl = this.form.getAttribute('data-url');
      var baseUrl = location.protocol + '//' + location.host;
      if (selectedFilters.length > 0) {
        if (selectedFilters.includes('all')) {
          window.location.href = baseUrl + blogUrl;
        } else {
          var filterParam = selectedFilters.join(',');
          window.location.href = baseUrl + blogUrl + '/tagged/' + filterParam;
        }
      } else {
        window.location.href = baseUrl + blogUrl;
      }
    }
  }, {
    key: "updateArticlesShowing",
    value: function updateArticlesShowing() {
      var articleWrap = document.querySelector('.js-article-wrap');
      if (articleWrap) {
        var articles = articleWrap.querySelectorAll('.card-wrapper');
        var articleCount = articles.length;
        var showing = document.querySelector('.js-blogs-showing');
        if (showing) {
          showing.innerHTML = articleCount;
        }
      }
    }
  }]);
  return BlogFilter;
}();
new BlogFilter('blog-filter', 'apply-button');

/***/ }),

/***/ "./src/modules/pagination/index.js":
/*!*****************************************!*\
  !*** ./src/modules/pagination/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.scss */ "./src/modules/pagination/pagination.scss");


/***/ }),

/***/ "./src/modules/pagination/pagination.scss":
/*!************************************************!*\
  !*** ./src/modules/pagination/pagination.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************************!*\
  !*** ./src/entrypoints/blog-listing/index.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/pagination */ "./src/modules/pagination/index.js");
/* harmony import */ var _modules_blog_listing_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/blog-listing-filter */ "./src/modules/blog-listing-filter/index.js");
/* harmony import */ var _modules_blog_listing_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_blog_listing_filter__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy1saXN0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxVQUFVO0VBQUE7O0VBQ1osU0FBQUEsV0FBWUMsTUFBTSxFQUFFQyxRQUFRLEVBQUU7SUFBQUMsZUFBQSxPQUFBSCxVQUFBO0lBQzFCLElBQUksQ0FBQ0ksSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ0wsTUFBTSxDQUFDO0lBQzNDLElBQUksQ0FBQ00sTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQ0osUUFBUSxDQUFDO0lBQy9DLElBQUksQ0FBQ00sSUFBSSxDQUFDLENBQUM7RUFDZjtFQUFDQyxZQUFBLENBQUFULFVBQUE7SUFBQVUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsS0FBQSxFQUFPO01BQUEsSUFBQUksS0FBQTtNQUNILElBQUksQ0FBQ0wsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFBQSxPQUFNRCxLQUFJLENBQUNFLFlBQVksQ0FBQyxDQUFDO01BQUEsRUFBQztNQUNoRSxJQUFJLENBQUNDLHFCQUFxQixDQUFDLENBQUM7TUFDNUIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUN0QjtFQUFDO0lBQUFOLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFLLFlBQUEsRUFBYztNQUFBLElBQUFDLE1BQUE7TUFDVixJQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDZCxJQUFJLENBQUNlLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO01BQ3ZFLElBQU1DLGdCQUFnQixHQUFHLElBQUksQ0FBQ2IsTUFBTSxDQUFDYyxhQUFhLENBQUMsc0JBQXNCLENBQUM7TUFDMUUsSUFBSUgsVUFBVSxJQUFJRSxnQkFBZ0IsRUFBRTtRQUNoQ0YsVUFBVSxDQUFDSSxPQUFPLENBQUMsVUFBQUMsUUFBUSxFQUFJO1VBQzNCQSxRQUFRLENBQUNWLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO1lBQ3RDSSxNQUFJLENBQUNPLG1CQUFtQixDQUFDTixVQUFVLEVBQUVELE1BQUksQ0FBQ1YsTUFBTSxFQUFFYSxnQkFBZ0IsQ0FBQztVQUN2RSxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDTjtJQUNKO0VBQUM7SUFBQVYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWEsb0JBQW9CTixVQUFVLEVBQUVGLFdBQVcsRUFBRUksZ0JBQWdCLEVBQUU7TUFDM0QsSUFBTUssZUFBZSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ1QsVUFBVSxDQUFDLENBQUNVLE1BQU0sQ0FBQyxVQUFBTCxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDTSxPQUFPO01BQUEsRUFBQyxDQUFDQyxNQUFNO01BQzFGVixnQkFBZ0IsQ0FBQ1csV0FBVyxPQUFBQyxNQUFBLENBQU9QLGVBQWUsTUFBRztNQUVyRCxJQUFJQSxlQUFlLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCVCxXQUFXLENBQUNpQixRQUFRLEdBQUcsS0FBSztNQUNoQyxDQUFDLE1BQU07UUFDSGpCLFdBQVcsQ0FBQ2lCLFFBQVEsR0FBRyxJQUFJO01BQy9CO0lBQ0o7RUFBQztJQUFBdkIsR0FBQTtJQUFBQyxLQUFBLEVBR0QsU0FBQUcsYUFBQSxFQUFlO01BQ1gsSUFBTW9CLE9BQU8sR0FBRyxJQUFJLENBQUM5QixJQUFJLENBQUNlLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDO01BQzFFLElBQU1NLGVBQWUsR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNPLE9BQU8sQ0FBQyxDQUFDQyxHQUFHLENBQUMsVUFBQVAsTUFBTTtRQUFBLE9BQUlBLE1BQU0sQ0FBQ2pCLEtBQUs7TUFBQSxFQUFDO01BQ3ZFLElBQU15QixPQUFPLEdBQUcsSUFBSSxDQUFDaEMsSUFBSSxDQUFDaUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztNQUNsRCxJQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBUSxHQUFHLElBQUksR0FBR0QsUUFBUSxDQUFDRSxJQUFJO01BRXhELElBQUloQixlQUFlLENBQUNLLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDNUIsSUFBSUwsZUFBZSxDQUFDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1VBQ2pDQyxNQUFNLENBQUNKLFFBQVEsQ0FBQ0ssSUFBSSxHQUFHTixPQUFPLEdBQUdGLE9BQU87UUFDNUMsQ0FBQyxNQUFNO1VBQ0gsSUFBTVMsV0FBVyxHQUFHcEIsZUFBZSxDQUFDcUIsSUFBSSxDQUFDLEdBQUcsQ0FBQztVQUM3Q0gsTUFBTSxDQUFDSixRQUFRLENBQUNLLElBQUksR0FBR04sT0FBTyxHQUFHRixPQUFPLEdBQUcsVUFBVSxHQUFHUyxXQUFXO1FBQ3ZFO01BQ0osQ0FBQyxNQUFNO1FBQ0hGLE1BQU0sQ0FBQ0osUUFBUSxDQUFDSyxJQUFJLEdBQUdOLE9BQU8sR0FBR0YsT0FBTztNQUM1QztJQUNKO0VBQUM7SUFBQTFCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFJLHNCQUFBLEVBQXdCO01BQ3BCLElBQU1nQyxXQUFXLEdBQUcxQyxRQUFRLENBQUNnQixhQUFhLENBQUMsa0JBQWtCLENBQUM7TUFDOUQsSUFBSTBCLFdBQVcsRUFBRTtRQUNiLElBQU1DLFFBQVEsR0FBR0QsV0FBVyxDQUFDNUIsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQzlELElBQU04QixZQUFZLEdBQUdELFFBQVEsQ0FBQ2xCLE1BQU07UUFDcEMsSUFBTW9CLE9BQU8sR0FBRzdDLFFBQVEsQ0FBQ2dCLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRCxJQUFJNkIsT0FBTyxFQUFFO1VBQ1RBLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHRixZQUFZO1FBQ3BDO01BQ0o7SUFDSjtFQUFDO0VBQUEsT0FBQWpELFVBQUE7QUFBQTtBQU1MLElBQUlBLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkU3Qzs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ044QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Jsb2ctbGlzdGluZy1maWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9lbnRyeXBvaW50cy9ibG9nLWxpc3RpbmcvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmxvZ0ZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoZm9ybUlkLCBidXR0b25JZCkge1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbklkKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICBcbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXBwbHlGaWx0ZXJzKCkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFydGljbGVzU2hvd2luZygpO1xuICAgICAgICB0aGlzLmFwcGx5QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgYXBwbHlCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XG4gICAgICAgIGNvbnN0IGFwcGx5QnV0dG9uQ291bnQgPSB0aGlzLmJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwiLmFwcGx5LWJ1dHRvbl9fY291bnRcIik7XG4gICAgICAgIGlmIChjaGVja2JveGVzICYmIGFwcGx5QnV0dG9uQ291bnQpIHtcbiAgICAgICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnQoY2hlY2tib3hlcywgdGhpcy5idXR0b24sIGFwcGx5QnV0dG9uQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3RlZENvdW50KGNoZWNrYm94ZXMsIGFwcGx5QnV0dG9uLCBhcHBseUJ1dHRvbkNvdW50KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IEFycmF5LmZyb20oY2hlY2tib3hlcykuZmlsdGVyKGNoZWNrYm94ID0+IGNoZWNrYm94LmNoZWNrZWQpLmxlbmd0aDtcbiAgICAgICAgYXBwbHlCdXR0b25Db3VudC50ZXh0Q29udGVudCA9IGAoJHtzZWxlY3RlZEZpbHRlcnN9KWA7XG4gICAgXG4gICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcnMgPiAwKSB7XG4gICAgICAgICAgICBhcHBseUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICBcbiAgICBhcHBseUZpbHRlcnMoKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImZpbHRlclwiXTpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IEFycmF5LmZyb20oZmlsdGVycykubWFwKGZpbHRlciA9PiBmaWx0ZXIudmFsdWUpO1xuICAgICAgICBjb25zdCBibG9nVXJsID0gdGhpcy5mb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKTtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3Q7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRGaWx0ZXJzLmluY2x1ZGVzKCdhbGwnKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFzZVVybCArIGJsb2dVcmw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlclBhcmFtID0gc2VsZWN0ZWRGaWx0ZXJzLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhc2VVcmwgKyBibG9nVXJsICsgJy90YWdnZWQvJyArIGZpbHRlclBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYXNlVXJsICsgYmxvZ1VybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFydGljbGVzU2hvd2luZygpIHtcbiAgICAgICAgY29uc3QgYXJ0aWNsZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYXJ0aWNsZS13cmFwJyk7XG4gICAgICAgIGlmIChhcnRpY2xlV3JhcCkge1xuICAgICAgICAgICAgY29uc3QgYXJ0aWNsZXMgPSBhcnRpY2xlV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC13cmFwcGVyJyk7XG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlQ291bnQgPSBhcnRpY2xlcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJsb2dzLXNob3dpbmcnKTtcbiAgICAgICAgICAgIGlmIChzaG93aW5nKSB7XG4gICAgICAgICAgICAgICAgc2hvd2luZy5pbm5lckhUTUwgPSBhcnRpY2xlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cbm5ldyBCbG9nRmlsdGVyKCdibG9nLWZpbHRlcicsICdhcHBseS1idXR0b24nKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0AvbW9kdWxlcy9wYWdpbmF0aW9uJztcbmltcG9ydCAnQC9tb2R1bGVzL2Jsb2ctbGlzdGluZy1maWx0ZXInO1xuIl0sIm5hbWVzIjpbIkJsb2dGaWx0ZXIiLCJmb3JtSWQiLCJidXR0b25JZCIsIl9jbGFzc0NhbGxDaGVjayIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uIiwiaW5pdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwbHlGaWx0ZXJzIiwidXBkYXRlQXJ0aWNsZXNTaG93aW5nIiwiYXBwbHlCdXR0b24iLCJfdGhpczIiLCJjaGVja2JveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImFwcGx5QnV0dG9uQ291bnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsImNoZWNrYm94IiwidXBkYXRlU2VsZWN0ZWRDb3VudCIsInNlbGVjdGVkRmlsdGVycyIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsImNoZWNrZWQiLCJsZW5ndGgiLCJ0ZXh0Q29udGVudCIsImNvbmNhdCIsImRpc2FibGVkIiwiZmlsdGVycyIsIm1hcCIsImJsb2dVcmwiLCJnZXRBdHRyaWJ1dGUiLCJiYXNlVXJsIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJpbmNsdWRlcyIsIndpbmRvdyIsImhyZWYiLCJmaWx0ZXJQYXJhbSIsImpvaW4iLCJhcnRpY2xlV3JhcCIsImFydGljbGVzIiwiYXJ0aWNsZUNvdW50Iiwic2hvd2luZyIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=