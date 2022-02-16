/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./webpack/dark-theme.js":
/*!*******************************!*\
  !*** ./webpack/dark-theme.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var toggleSwitch = document.querySelector('.theme-switch input[type=\"checkbox\"]'); // Get previous setting\n  // const currentTheme = localStorage.getItem(\"theme\")\n  //   ? localStorage.getItem(\"theme\")\n  //   : null;\n  //\n  // if (currentTheme) {\n  //   document.documentElement.setAttribute(\"data-theme\", currentTheme);\n  //\n  //   if (currentTheme === \"dark\") {\n  //     toggleSwitch.checked = true;\n  //   }\n  // }\n  // // Auto Night mode at night time\n  // const d = new Date();\n  // const hours = d.getHours();\n  // const nightTime = hours >= 19 || hours <= 7; // between 7pm and 7am\n  // if (nightTime) {\n  //   input.checked = true;\n  //   body.classList.add(\"night\");\n  // }\n\n  var switchTheme = function switchTheme(e) {\n    if (e.target.checked) {\n      document.documentElement.setAttribute(\"data-theme\", \"dark\");\n      localStorage.setItem(\"theme\", \"dark\");\n    } else {\n      document.documentElement.setAttribute(\"data-theme\", \"light\");\n      localStorage.setItem(\"theme\", \"light\");\n    }\n  };\n\n  toggleSwitch.addEventListener(\"change\", switchTheme, false); // const body = document.querySelector(\"body\");\n  // const toggle = document.getElementById(\"toggle\");\n  // const input = document.getElementById(\"switch\");\n  // // Night mode toggle\n  // toggle.addEventListener(\"click\", function () {\n  //   const isChecked = input.checked;\n  //   if (isChecked) {\n  //     body.classList.remove(\"night\");\n  //   } else {\n  //     body.classList.add(\"night\");\n  //   }\n  // });\n});\n\n//# sourceURL=webpack://portfolio-v2/./webpack/dark-theme.js?");

/***/ }),

/***/ "./webpack/main.js":
/*!*************************!*\
  !*** ./webpack/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dark_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark-theme */ \"./webpack/dark-theme.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./webpack/navigation.js\");\n/* harmony import */ var _portfolio_splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio-splash */ \"./webpack/portfolio-splash.js\");\n\n\n // Alternative to: document.addEventListener(\"DOMContentLoaded\", function(event) {});\n\n$(\"document\").ready(main);\n\nfunction main() {\n  // const domain = \"https://wksoh.com/\"\n  // const currentUrl = window.location.href;\n  // darkTheme();\n  (0,_portfolio_splash__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // HANDLE BROKEN IMAGES\n\n  document.querySelectorAll(\"img\").forEach(function (img) {\n    img.onerror = function () {\n      this.style.display = \"none\";\n    };\n  }); // SCROLL DOWN HINT ARROW\n  // const arrows = document.querySelector(\".arrows\");\n  // setTimeout(function () {\n  //   if (window.scrollY < 300) {\n  //     arrows.style.display = \"block\";\n  //   } else {\n  //     console.log(\"Scroll down arrow hint skipped.\");\n  //   }\n  // }, 3000);\n  // if (!(\n  //   currentUrl === domain || \n  //   currentUrl === \"http://localhost:4000/\"\n  // )) return;\n}\n\n//# sourceURL=webpack://portfolio-v2/./webpack/main.js?");

/***/ }),

/***/ "./webpack/navigation.js":
/*!*******************************!*\
  !*** ./webpack/navigation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var navButtonNames = [\"navigation-home\", \"navigation-about\", \"navigation-experiences\", \"navigation-projects\"];\n\n  var clearCurrentFromAllNav = function clearCurrentFromAllNav() {\n    navButtonNames.forEach(function (navButtonName) {\n      var currentTarget = document.getElementById(navButtonName);\n      if (currentTarget.classList.contains('current')) currentTarget.classList.remove('current');\n    });\n  };\n\n  navButtonNames.forEach(function (navButtonName) {\n    $(\"#\".concat(navButtonName)).on(\"click\", function (event) {\n      event.preventDefault();\n      clearCurrentFromAllNav();\n      window.scroll({\n        behavior: \"smooth\",\n        left: 0,\n        top: $(\"#\".concat(navButtonName.split(\"-\")[1])).offset().top - 64\n      });\n      document.getElementById(navButtonName).classList.add('current');\n    });\n  });\n});\n\n//# sourceURL=webpack://portfolio-v2/./webpack/navigation.js?");

/***/ }),

/***/ "./webpack/portfolio-splash.js":
/*!*************************************!*\
  !*** ./webpack/portfolio-splash.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scroll_reveal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-reveal */ \"./webpack/scroll-reveal.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var forceSplash = false;\n  var splashScreen = sessionStorage.getItem(\"splash\") ? sessionStorage.getItem(\"splash\") : \"enabled\";\n  var prod = \"true\" === \"true\";\n  var splashDisabled = splashScreen === \"disabled\";\n  var splashDoneTiming = forceSplash ? 3000 : prod || splashDisabled ? 1100 : 3000;\n  $(\"#portfolio-splash\").css(\"animation-delay\", \"\".concat(splashDoneTiming, \"ms\")); // $(\"#portfolio-splash\").css(\"display\", `none`);\n\n  setTimeout(function () {\n    $(\"#site\").css(\"display\", \"block\");\n    (0,_scroll_reveal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }, splashDoneTiming + 500);\n  sessionStorage.setItem(\"splash\", \"disabled\"); // console.log($(\".blob\")[0].getTotalLength());\n});\n\n//# sourceURL=webpack://portfolio-v2/./webpack/portfolio-splash.js?");

/***/ }),

/***/ "./webpack/scroll-reveal.js":
/*!**********************************!*\
  !*** ./webpack/scroll-reveal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  window.sr = ScrollReveal({\n    reset: false,\n    duration: 600,\n    easing: \"cubic-bezier(.694,0,.335,1)\",\n    scale: 1,\n    viewFactor: 0.3\n  });\n  sr.reveal(\".portfolio__background\");\n  sr.reveal(\".skills\");\n  sr.reveal(\".experience\", {\n    viewFactor: 0.2\n  });\n  sr.reveal(\".featured-projects\", {\n    viewFactor: 0.1\n  });\n  sr.reveal(\".other-projects\", {\n    viewFactor: 0.1\n  });\n});\n\n//# sourceURL=webpack://portfolio-v2/./webpack/scroll-reveal.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./webpack/main.js");
/******/ 	
/******/ })()
;