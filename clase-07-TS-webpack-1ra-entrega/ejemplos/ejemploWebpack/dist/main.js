/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./a1.js":
/*!***************!*\
  !*** ./a1.js ***!
  \***************/
/***/ (() => {

eval("console.log('soy el archivo 1')\n\n//# sourceURL=webpack://ejemplowebpack/./a1.js?");

/***/ }),

/***/ "./a2.js":
/*!***************!*\
  !*** ./a2.js ***!
  \***************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const saludar = __webpack_require__(/*! ./a3.js */ \"./a3.js\")\n\nconsole.log('soy el archivo 2')\n\nsaludar()\n\n//# sourceURL=webpack://ejemplowebpack/./a2.js?");

/***/ }),

/***/ "./a3.js":
/*!***************!*\
  !*** ./a3.js ***!
  \***************/
/***/ ((module) => {

eval("console.log('soy el archivo 3')\n\nmodule.exports = function saludar() {\n    console.log('hola mundo')\n}\n\n//# sourceURL=webpack://ejemplowebpack/./a3.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./a1.js");
/******/ 	__webpack_require__("./a2.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./a3.js");
/******/ 	
/******/ })()
;