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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dark_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark-theme */ \"./webpack/dark-theme.js\");\n/* harmony import */ var _portfolio_splash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio-splash */ \"./webpack/portfolio-splash.js\");\n/* harmony import */ var _scroll_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-reveal */ \"./webpack/scroll-reveal.js\");\n\n\n // Alternative to: document.addEventListener(\"DOMContentLoaded\", function(event) {});\n\n$(\"document\").ready(main);\n\nfunction main() {\n  var domain = \"https://wksoh.com/\";\n  var currentUrl = window.location.href; // darkTheme();\n\n  (0,_portfolio_splash__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_scroll_reveal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // GO TO TOP BUTTON\n\n  var goTopButton = document.getElementById(\"go-top-btn\"); // const $goTopButton = $(\"#go-top-btn\");\n  // const introHeight = document.querySelector(\".intro\").offsetHeight;\n  // Show Go-Top-Button when scroll beyond first-page\n\n  window.addEventListener(\"scroll\", function () {\n    if (window.scrollY > 300) {\n      // if (window.scrollY > introHeight * 0.8) {\n      // goTopButton.style.display = 'block'; // $goTopButton.fadeIn();\n      goTopButton.style.transform = \"translateY(0px)\";\n    } else {\n      // goTopButton.style.display = 'none'; // $goTopButton.fadeOut();\n      goTopButton.style.transform = \"translateY(100px)\";\n    }\n  }, false); // Click Go-Top-Button to go back up\n\n  goTopButton.addEventListener(\"click\", function () {\n    // $(\"html, body\").animate({ scrollTop: 0 }, 500);\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  }); // HANDLE BROKEN IMAGES\n\n  document.querySelectorAll(\"img\").forEach(function (img) {\n    img.onerror = function () {\n      this.style.display = \"none\";\n    };\n  });\n  if (!(currentUrl === domain || currentUrl === \"http://localhost:4000/\")) return; // SCROLL DOWN HINT ARROW\n\n  var arrows = document.querySelector(\".arrows\");\n  setTimeout(function () {\n    if (window.scrollY < 300) {\n      arrows.style.display = \"block\";\n    } else {\n      console.log(\"Scroll down arrow hint skipped.\");\n    }\n  }, 3000); // REPLACE fake email with real email after 10ms\n\n  var fakeEmailAddr = \"annoying.spammer83295@gmail.com\";\n  setTimeout(function () {\n    $(\"a\").html(function (_, html) {\n      return html.replace(fakeEmailAddr, \"ksoh@tuta.io\");\n    });\n    document.querySelectorAll(\"a[href=\\\"mailto:\".concat(fakeEmailAddr, \"\\\"]\")).forEach(function (a) {\n      a.setAttribute(\"href\", \"mailto:ksoh@tuta.io\");\n    });\n  }, 10); // HAND WAVE ANIMATION\n\n  var hand = document.querySelector(\".emoji.wave-hand\");\n\n  function waveOnLoad() {\n    hand.classList.add(\"wave\");\n    setTimeout(function () {\n      hand.classList.remove(\"wave\");\n    }, 2000);\n  }\n\n  setTimeout(function () {\n    waveOnLoad();\n  }, 1000);\n  hand.addEventListener(\"mouseover\", function () {\n    hand.classList.add(\"wave\");\n  });\n  hand.addEventListener(\"mouseout\", function () {\n    hand.classList.remove(\"wave\");\n  }); // SCROLL REVEAL\n\n  window.sr = ScrollReveal({\n    reset: false,\n    duration: 600,\n    easing: \"cubic-bezier(.694,0,.335,1)\",\n    scale: 1,\n    viewFactor: 0.3\n  });\n  sr.reveal(\".background\");\n  sr.reveal(\".skills\");\n  sr.reveal(\".experience\", {\n    viewFactor: 0.2\n  });\n  sr.reveal(\".featured-projects\", {\n    viewFactor: 0.1\n  });\n  sr.reveal(\".other-projects\", {\n    viewFactor: 0.05\n  });\n}\n\n//# sourceURL=webpack://portfolio-v2/./webpack/main.js?");

/***/ }),

/***/ "./webpack/portfolio-splash.js":
/*!*************************************!*\
  !*** ./webpack/portfolio-splash.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var forceSplash = false;\n  var splashScreen = localStorage.getItem(\"splash\") ? localStorage.getItem(\"splash\") : \"enabled\";\n  var prod = \"true\" === \"true\";\n  var splashDisabled = splashScreen === \"disabled\";\n  var splashDoneTiming = !forceSplash && (prod || splashDisabled) ? 1100 : 3300;\n  $(\"#portfolio-splash\").css(\"animation-delay\", \"\".concat(splashDoneTiming, \"ms\")); // $(\"#portfolio-splash\").css(\"display\", `none`);\n\n  setTimeout(function () {\n    $(\"#site\").css(\"display\", \"block\");\n  }, splashDoneTiming + 500);\n  localStorage.setItem(\"splash\", \"disabled\"); // console.log($(\".blob\")[0].getTotalLength());\n});\n\n//# sourceURL=webpack://portfolio-v2/./webpack/portfolio-splash.js?");

/***/ }),

/***/ "./webpack/scroll-reveal.js":
/*!**********************************!*\
  !*** ./webpack/scroll-reveal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {});\n\n//# sourceURL=webpack://portfolio-v2/./webpack/scroll-reveal.js?");

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