module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./features/Feature/Feature.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feature; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/vladimir.cibizov/work/react-next-boilerplate/features/Feature/Feature.js';


var Feature = function Feature() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    'Hello world!'
  );
};

/***/ }),

/***/ "./features/Feature/ducks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return featureReducer; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {};

var featureReducer = function featureReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    default:
      {
        return _extends({}, state);
      }
  }
};

/***/ }),

/***/ "./features/Feature/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Feature__ = __webpack_require__("./features/Feature/Feature.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Feature__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ducks__ = __webpack_require__("./features/Feature/ducks.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ducks__["a"]; });



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_store__ = __webpack_require__("./root/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_Feature__ = __webpack_require__("./features/Feature/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_index_css__ = __webpack_require__("./styles/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_index_css__);
var _jsxFileName = '/Users/vladimir.cibizov/work/react-next-boilerplate/pages/index.js';







var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'Boilerplate'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_4__styles_index_css___default.a }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__features_Feature__["a" /* Feature */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__root_store__["a" /* withReduxSaga */])(App));

/***/ }),

/***/ "./root/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_Feature__ = __webpack_require__("./features/Feature/index.js");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  feature: __WEBPACK_IMPORTED_MODULE_1__features_Feature__["b" /* featureReducer */]
}));

/***/ }),

/***/ "./root/saga.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(rootSaga);



function rootSaga() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"])([].map(function (saga) {
            return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(saga);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),

/***/ "./root/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configureStore */
/* harmony export (immutable) */ __webpack_exports__["a"] = withReduxSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_saga__ = __webpack_require__("next-redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__("./root/reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__saga__ = __webpack_require__("./root/saga.js");
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }









var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_3_redux_saga___default()();

var bindMiddleware = function bindMiddleware(middleware) {
  if ({
    NODE_ENV: 'development'
  }.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    var _require = __webpack_require__("redux-devtools-extension"),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(middleware)));
  }
  return __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(middleware));
};

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */], initialState, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_5__saga__["a" /* default */]);
  return store;
}

function withReduxSaga(BaseComponent) {
  return __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default()(configureStore)(__WEBPACK_IMPORTED_MODULE_2_next_redux_saga___default()(BaseComponent));
}

/***/ }),

/***/ "./styles/index.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&subset=cyrillic-ext,latin-ext');\n\nbody {\n  font-family: Roboto, Arial, sans-serif;\n  background-color: #1d3452;\n  color: #fff;\n\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n}\n\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n";

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next-redux-saga":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map