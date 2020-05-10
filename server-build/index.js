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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! request */ \"request\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_js_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/js/App */ \"./src/js/App.js\");\nvar _jsxFileName = \"D:\\\\events-project\\\\server\\\\index.js\";\n// ------------- use server side code from https://www.digitalocean.com/community/tutorials/react-server-side-rendering\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.get('/events/', (req, res) => {\n  console.log('events links.....');\n  var resBody;\n  request__WEBPACK_IMPORTED_MODULE_6___default()({\n    url: 'http://open-api.myhelsinki.fi/v1/events/'\n  }, (error, response, body) => {\n    if (error || response.statusCode !== 200) {\n      return res.status(500).json({\n        type: 'error',\n        message: err.message\n      });\n    } //console.log(response);\n    //console.log(body)\n\n\n    resBody = JSON.parse(body);\n    res.json(resBody);\n  }); //res.send('hello world')    \n  //console.log(res);\n});\napp.get('/*', (req, res) => {\n  console.log('----/app-----');\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_js_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 45\n    }\n  }));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/css/App.css":
/*!*************************!*\
  !*** ./src/css/App.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".App {\\n  text-align: center;\\n}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n@media (prefers-reduced-motion: no-preference) {\\n  .App-logo {\\n    animation: App-logo-spin infinite 20s linear;\\n  }\\n}\\n\\n.App-header {\\n  background-color: #282c34;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n@keyframes App-logo-spin {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/App.css?");

/***/ }),

/***/ "./src/css/Event.css":
/*!***************************!*\
  !*** ./src/css/Event.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"ul\\r\\n{\\r\\n    border-bottom: 1px solid #000;\\r\\n    padding: 5px;\\r\\n    width: 50%;\\r\\n    margin: 0 auto;\\r\\n    text-align: center;\\r\\n    padding-bottom: 1em;\\r\\n}\\r\\nul:nth-child(even) {background: #eef}\\r\\nul:nth-child(odd) {background: #FFF}\\r\\nh1{text-align: center;}\\r\\n.loading{text-align: center;}\\r\\n.error{text-align: center;}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/Event.css?");

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/App.css */ \"./src/css/App.css\");\n/* harmony import */ var _css_App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event */ \"./src/js/Event.js\");\nvar _jsxFileName = \"D:\\\\events-project\\\\src\\\\js\\\\App.js\";\n //import logo from '../logo.svg';\n\n\n\nvar testResponse = '';\nvar allData;\nvar filteredData = [];\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      toggle: false,\n      dataEmpty: false\n    };\n  }\n\n  componentDidMount() {\n    console.log('COMPONENT DID MOUNT.....');\n    var targetUrl = 'http://localhost:3006/events/';\n    fetch(targetUrl, {\n      method: 'GET',\n      headers: {\n        'Access-Control-Allow-Origin': '*'\n      }\n    }).then(response => response.json()).then(data => {\n      allData = data.data; //console.log(allData)\n\n      var filteredDateObj = this.dateFilter();\n      this.dataFilter(filteredDateObj);\n      this.setState({\n        toggle: !this.state.toggle\n      });\n\n      if (!allData) {\n        this.setState({\n          dataEmpty: !this.state.dataEmpty\n        });\n      }\n    });\n  }\n\n  dateFilter() {\n    var startDate = new Date();\n    var endDate = new Date();\n    var date = startDate.getDate();\n    var day = startDate.getDay();\n    var startDay;\n    day > 0 ? startDay = date - day : startDay = date;\n    startDate.setDate(startDay);\n    var startFormat = startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate();\n    endDate.setDate(startDay + 7);\n    var endFormat = endDate.getFullYear() + '-' + (endDate.getMonth() + 1) + '-' + endDate.getDate();\n    console.log(startFormat + ' --- ' + endFormat);\n    return {\n      start: startFormat,\n      end: endFormat\n    };\n  }\n\n  dataFilter(filteredDateObj) {\n    var startArr = filteredDateObj.start.split('-');\n    var endArr = filteredDateObj.end.split('-'); //console.log('start filtering data')\n\n    allData.filter(eachData => {\n      var eachDataDate = eachData.event_dates.starting_day;\n\n      if (eachDataDate) {\n        var dataSplit = eachDataDate.split(/-|T/);\n        var startYear = Number(startArr[0]);\n        var endYear = Number(endArr[0]);\n        var dataYear = Number(dataSplit[0]);\n        var startMonth = Number(startArr[1]);\n        var endMonth = Number(endArr[1]);\n        var dataMonth = Number(dataSplit[1]);\n\n        if ((dataYear == startYear || dataYear == endYear) && (dataMonth == startMonth || dataMonth == endMonth)) {\n          //console.log('match year and month')\n          var startDate = Number(startArr[2]);\n          var endDate = Number(endArr[2]);\n          var dataDate = Number(dataSplit[2]);\n\n          if (dataDate > startDate && dataDate < endDate || dataDate == startDate || dataDate == endDate) {\n            //console.log('match date')\n            //console.log(dataDate + ' --- ' + startDate + ' --- ' + endDate );\n            filteredData.push(eachData);\n          }\n        }\n      }\n    }); //console.log(filteredData)\n  }\n\n  render() {\n    console.log('Redering');\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }\n    }, \" EVENTS THIS WEEK \"), this.state.toggle == false && this.state.dataEmpty == false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"loading\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 12\n      }\n    }, \" Loading ... \") : null, this.state.toggle == true && this.state.dataEmpty == false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      list: filteredData,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 12\n      }\n    }) : null, this.state.toggle == true && this.state.dataEmpty == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"error\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 12\n      }\n    }, \" Events Not Found \") : null);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/js/App.js?");

/***/ }),

/***/ "./src/js/Event.js":
/*!*************************!*\
  !*** ./src/js/Event.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_Event_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Event.css */ \"./src/css/Event.css\");\n/* harmony import */ var _css_Event_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Event_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"D:\\\\events-project\\\\src\\\\js\\\\Event.js\";\n\n\n\nconst Events = ({\n  list\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, list.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {\n  key: item.id,\n  item: item,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }\n})));\n\nconst ListItem = ({\n  item\n}) => {\n  var eventDateInfo = item.event_dates.starting_day.split(\"T\");\n  var eventDate = eventDateInfo[0].split(\"-\");\n  var eventTime = eventDateInfo[1].split(\".\");\n  eventTime = eventTime[0].split(\":\", 2);\n\n  if (item.event_dates.ending_day) {\n    var eventEndDateInfo = item.event_dates.ending_day.split(\"T\");\n    var eventEndDate = eventEndDateInfo[0].split(\"-\");\n    var eventEndTime = eventEndDateInfo[1].split(\".\");\n    eventEndTime = eventEndTime[0].split(\":\", 2);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, item.name.fi), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, item.location.address.street_address ? item.location.address.street_address + ' , ' + item.location.address.locality : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, 'Starts ' + eventDate[2] + '-' + eventDate[1] + '-' + eventDate[0] + ' At ' + eventTime[0] + ':' + eventTime[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, item.event_dates.ending_day ? 'Ends ' + eventEndDate[2] + '-' + eventEndDate[1] + '-' + eventEndDate[0] + ' At ' + eventEndTime[0] + ':' + eventEndTime[1] : null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\n\n//# sourceURL=webpack:///./src/js/Event.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ })

/******/ });