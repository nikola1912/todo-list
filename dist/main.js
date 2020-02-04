/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst displayControllerModule = (() => {\r\n\r\n    const _form = document.getElementById(\"form\");\r\n    \r\n    const displayNewTaskForm = () => {\r\n        form.style.display = \"block\";\r\n    };\r\n\r\n    const closeNewTaskForm = () => {\r\n        form.style.display = \"none\";\r\n    };\r\n\r\n    return {\r\n        displayNewTaskForm,\r\n        closeNewTaskForm\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayControllerModule);\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\r\n\r\nconst eventListenersModule = (() => {\r\n\r\n    const _addTaskButton = document.getElementById(\"addNewTask\");\r\n    const _cancelButton = document.getElementById(\"cancelButton\");\r\n    const _form = document.getElementById(\"form\");\r\n\r\n    const _addNewTask = () => {\r\n        _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayNewTaskForm();\r\n    };\r\n\r\n    const _closeNewTaskForm = (event) => {\r\n        if (event.target == _form || event.target == _cancelButton) {\r\n            _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeNewTaskForm();\r\n        }\r\n    };\r\n\r\n    const applyEventListeners = () => {\r\n        document.addEventListener(\"click\", (event) => console.log(event.target));\r\n        _addTaskButton.addEventListener(\"click\", _addNewTask);\r\n        _cancelButton.addEventListener(\"click\", _closeNewTaskForm);\r\n        _form.addEventListener(\"click\", _closeNewTaskForm);\r\n    };\r\n\r\n    return {\r\n        applyEventListeners\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventListenersModule);\n\n//# sourceURL=webpack:///./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners.js */ \"./src/eventListeners.js\");\n\r\n\r\nconst todoListFactory = (title) => {\r\n\r\n    let description = \"\";\r\n\r\n    const getTitle = () => title;\r\n\r\n    const getDescription = () => description;\r\n\r\n    const setDescription = () => {\r\n        let newDescription = prompt(\"Enter description\");\r\n        description = newDescription;\r\n    };\r\n\r\n    return {\r\n        getTitle,\r\n        setDescription,\r\n        getDescription\r\n    }\r\n};\r\n\r\n/* const newList = todoListFactory(\"list #1\");\r\n\r\nconsole.log(newList.getDescription());\r\nnewList.setDescription();\r\nconsole.log(newList.getDescription());\r\nconsole.log(newList.getTitle()); */\r\n\r\n_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].applyEventListeners();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });