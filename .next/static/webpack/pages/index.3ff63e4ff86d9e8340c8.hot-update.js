self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\HRD1-2\\Desktop\\gatech-bc\\__wbReactRonaAPI\\pages\\index.js",
    _s = $RefreshSig$();



function useStats() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      stats = _useState[0],
      setStats = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0,C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var data;
        return C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('Fetching the Data');
                _context.next = 3;
                return fetch('https://covid19.mathdro.id/api').then(function (res) {
                  return res.json();
                });

              case 3:
                data = _context.sent;
                setStats(data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, []);
  return stats;
  /*Return the Stats from the Hook */
} // function Stats() {
//     const stats = useStats();
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


_s(useStats, "Mp/QVXeoqe/OOvjesPlqtG3ZKME=");

function IndexPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Stats, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}
_c = IndexPage;

var _c;

$RefreshReg$(_c, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdHMiLCJ1c2VTdGF0ZSIsInN0YXRzIiwic2V0U3RhdHMiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1VDLCtDQUFRLEVBRGxCO0FBQUEsTUFDVEMsS0FEUztBQUFBLE1BQ0ZDLFFBREU7O0FBRWhCQyxrREFBUyxDQUFDLFlBQUs7QUFBQSxhQUNBQyxTQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFUQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFESjtBQUFBLHVCQUV1QkMsS0FBSyxDQUFDLGdDQUFELENBQUwsQ0FBd0NDLElBQXhDLENBQTZDLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxpQkFBaEQsQ0FGdkI7O0FBQUE7QUFFVUMsb0JBRlY7QUFJUVQsd0JBQVEsQ0FBQ1MsSUFBRCxDQUFSOztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGU7QUFBQTtBQUFBOztBQU9YUCxhQUFTO0FBQ1osR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBLFNBQU9ILEtBQVA7QUFBYztBQUNqQixDLENBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXBDU0YsUTs7QUFzQ00sU0FBU2EsU0FBVCxHQUFvQjtBQUMvQixzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIO0tBTnVCQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNmZjYzZTRmZjg2ZDllODM0MGM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZVN0YXRzKCkge1xyXG4gICAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyB0aGUgRGF0YScpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jb3ZpZDE5Lm1hdGhkcm8uaWQvYXBpJykudGhlbihyZXMgPT4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZXRTdGF0cyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gc3RhdHM7IC8qUmV0dXJuIHRoZSBTdGF0cyBmcm9tIHRoZSBIb29rICovXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBTdGF0cygpIHtcclxuLy8gICAgIGNvbnN0IHN0YXRzID0gdXNlU3RhdHMoKTtcclxuLy8gICAgIGlmKCFzdGF0cylyZXR1cm48cD5Mb2FkaW5nLi4uPC9wPjtcclxuLy8gICAgIGNvbnNvbGUubG9nKHN0YXRzKTtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgey8qIDxwPlN0YXRzPC9wPiAqL31cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0QmxvY2tcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxoMz5Db25maXJtZWQ8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4+e3N0YXRzLmNvbmZpcm1lZC52YWx1ZX08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRCbG9ja1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGgzPkRlYXRoczwvaDM+XHJcbi8vICAgICAgICAgICAgICAgICA8c3Bhbj57c3RhdHMuZGVhdGhzLnZhbHVlfTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdEJsb2NrXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8aDM+UmVjb3ZlcmVkPC9oMz5cclxuLy8gICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0cy5yZWNvdmVyZWQudmFsdWV9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U3RhdHM+PC9TdGF0cz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=