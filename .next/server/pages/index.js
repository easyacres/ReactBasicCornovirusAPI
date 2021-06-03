(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Stats; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");

var _jsxFileName = "C:\\Users\\HRD1-2\\Desktop\\gatech-bc\\__wbReactRonaAPI\\components\\Stats.js";

function Stats() {
  const stats = (0,_utils_useStats__WEBPACK_IMPORTED_MODULE_1__.default)('https://covid19.mathdro.id/api');
  if (!stats) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 21
  }, this);
  console.log(stats);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "statBlock",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Confirmed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: stats.confirmed.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "statBlock",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Deaths"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: stats.deaths.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "statBlock",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Recovered"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: stats.recovered.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");

var _jsxFileName = "C:\\Users\\HRD1-2\\Desktop\\gatech-bc\\__wbReactRonaAPI\\pages\\index.js";
// import {useState, useEffect} from 'react';  Refactored See seeStats.js
// function useStats() {
//     const [stats, setStats] = useState();
//     useEffect(()=> {
//     async function fetchData() {
//         console.log('Fetching the Data');
//         const data = await fetch('https://covid19.mathdro.id/api').then(res => res.json()
//             );
//             setStats(data);
//         }
//         fetchData();
//     }, []);
//     return stats; /*Return the Stats from the Hook */
// }
// REFACTORED FOR COMPONENT

 // function Stats() {
//     const stats = useStats('https://covid19.mathdro.id/api');
//     if(!stats)return<p>Loading...</p>;
//     console.log(stats);
//     return (
//         <div>
//             {/* <p>Stats</p> */}
//             <div className="statBlock">
//                 <h3>Confirmed</h3>
//                 <span>{stats.confirmed.value}</span>
//             </div>
//             <div className="statBlock">
//                 <h3>Deaths</h3>
//                 <span>{stats.deaths.value}</span>
//             </div>
//             <div className="statBlock">
//                 <h3>Recovered</h3>
//                 <span>{stats.recovered.value}</span>
//             </div>
//         </div>
//     );
// }

function IndexPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stats__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./utils/useStats.js":
/*!***************************!*\
  !*** ./utils/useStats.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useStats; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStats(url) {
  const {
    0: stats,
    1: setStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchData() {
      console.log('Fetching the Data');
      const data = await fetch(url).then(res => res.json());
      setStats(data);
    }

    fetchData();
  }, []);
  return stats;
  /*Return the Stats from the Hook */
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jb3JvbmF2aXJ1cy1hcGkvLi9jb21wb25lbnRzL1N0YXRzLmpzIiwid2VicGFjazovL3JlYWN0LWNvcm9uYXZpcnVzLWFwaS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LWNvcm9uYXZpcnVzLWFwaS8uL3V0aWxzL3VzZVN0YXRzLmpzIiwid2VicGFjazovL3JlYWN0LWNvcm9uYXZpcnVzLWFwaS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtY29yb25hdmlydXMtYXBpL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU3RhdHMiLCJzdGF0cyIsInVzZVN0YXRzIiwiY29uc29sZSIsImxvZyIsImNvbmZpcm1lZCIsInZhbHVlIiwiZGVhdGhzIiwicmVjb3ZlcmVkIiwiSW5kZXhQYWdlIiwidXJsIiwic2V0U3RhdHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzVCLFFBQU1DLEtBQUssR0FBR0Msd0RBQVEsQ0FBQyxnQ0FBRCxDQUF0QjtBQUNBLE1BQUcsQ0FBQ0QsS0FBSixFQUFVLG9CQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47QUFDVkUsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQSxzQkFDSTtBQUFBLDRCQUVJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxrQkFBT0EsS0FBSyxDQUFDSSxTQUFOLENBQWdCQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFNSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQU9MLEtBQUssQ0FBQ00sTUFBTixDQUFhRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFVSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQU9MLEtBQUssQ0FBQ08sU0FBTixDQUFnQkY7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNHLFNBQVQsR0FBb0I7QUFDL0Isc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFFZSxTQUFTUCxRQUFULENBQWtCUSxHQUFsQixFQUF1QjtBQUNsQyxRQUFNO0FBQUEsT0FBQ1QsS0FBRDtBQUFBLE9BQVFVO0FBQVIsTUFBb0JDLCtDQUFRLEVBQWxDO0FBQ0FDLGtEQUFTLENBQUMsTUFBSztBQUNmLG1CQUFlQyxTQUFmLEdBQTJCO0FBQ3ZCWCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFlBQU1XLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUNOLEdBQUQsQ0FBTCxDQUFXTyxJQUFYLENBQWdCQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUF2QixDQUFuQjtBQUVJUixjQUFRLENBQUNJLElBQUQsQ0FBUjtBQUNIOztBQUNERCxhQUFTO0FBQ1osR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBLFNBQU9iLEtBQVA7QUFBYztBQUNqQixDOzs7Ozs7Ozs7OztBQ2RELG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0YXRzIGZyb20gJy4uL3V0aWxzL3VzZVN0YXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRzKCkge1xyXG4gICAgY29uc3Qgc3RhdHMgPSB1c2VTdGF0cygnaHR0cHM6Ly9jb3ZpZDE5Lm1hdGhkcm8uaWQvYXBpJyk7XHJcbiAgICBpZighc3RhdHMpcmV0dXJuPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0cyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8cD5TdGF0czwvcD4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdEJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q29uZmlybWVkPC9oMz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0cy5jb25maXJtZWQudmFsdWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0QmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5EZWF0aHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3N0YXRzLmRlYXRocy52YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRCbG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlJlY292ZXJlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c3RhdHMucmVjb3ZlcmVkLnZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiLy8gaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7ICBSZWZhY3RvcmVkIFNlZSBzZWVTdGF0cy5qc1xyXG5cclxuLy8gZnVuY3Rpb24gdXNlU3RhdHMoKSB7XHJcbi8vICAgICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKCk7XHJcbi8vICAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbi8vICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIHRoZSBEYXRhJyk7XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NvdmlkMTkubWF0aGRyby5pZC9hcGknKS50aGVuKHJlcyA9PiByZXMuanNvbigpXHJcbi8vICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgIHNldFN0YXRzKGRhdGEpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBmZXRjaERhdGEoKTtcclxuLy8gICAgIH0sIFtdKTtcclxuLy8gICAgIHJldHVybiBzdGF0czsgLypSZXR1cm4gdGhlIFN0YXRzIGZyb20gdGhlIEhvb2sgKi9cclxuLy8gfVxyXG5cclxuXHJcbi8vIFJFRkFDVE9SRUQgRk9SIENPTVBPTkVOVFxyXG5pbXBvcnQgdXNlU3RhdHMgZnJvbSAnLi4vdXRpbHMvdXNlU3RhdHMnO1xyXG5pbXBvcnQgU3RhdHMgZnJvbSAnLi4vY29tcG9uZW50cy9TdGF0cyc7XHJcblxyXG4vLyBmdW5jdGlvbiBTdGF0cygpIHtcclxuLy8gICAgIGNvbnN0IHN0YXRzID0gdXNlU3RhdHMoJ2h0dHBzOi8vY292aWQxOS5tYXRoZHJvLmlkL2FwaScpO1xyXG4vLyAgICAgaWYoIXN0YXRzKXJldHVybjxwPkxvYWRpbmcuLi48L3A+O1xyXG4vLyAgICAgY29uc29sZS5sb2coc3RhdHMpO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICB7LyogPHA+U3RhdHM8L3A+ICovfVxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRCbG9ja1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGgzPkNvbmZpcm1lZDwvaDM+XHJcbi8vICAgICAgICAgICAgICAgICA8c3Bhbj57c3RhdHMuY29uZmlybWVkLnZhbHVlfTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdEJsb2NrXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8aDM+RGVhdGhzPC9oMz5cclxuLy8gICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0cy5kZWF0aHMudmFsdWV9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0QmxvY2tcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxoMz5SZWNvdmVyZWQ8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4+e3N0YXRzLnJlY292ZXJlZC52YWx1ZX08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFN0YXRzPjwvU3RhdHM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN0YXRzKHVybCkge1xyXG4gICAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyB0aGUgRGF0YScpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0U3RhdHMoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHN0YXRzOyAvKlJldHVybiB0aGUgU3RhdHMgZnJvbSB0aGUgSG9vayAqL1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=