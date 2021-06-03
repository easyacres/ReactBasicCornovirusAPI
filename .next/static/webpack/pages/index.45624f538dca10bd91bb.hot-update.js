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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



function useStats() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      stats = _useState[0],
      setStats = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function fetchdata() {
      return _fetchdata.apply(this, arguments);
    }

    function _fetchdata() {
      _fetchdata = (0,C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var data;
        return C_Users_HRD1_2_Desktop_gatech_bc_wbReactRonaAPI_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('Fetching the Data');
                _context.next = 3;
                return fetch('https://covid19.mathdro.id/api').then(function (data) {
                  return data.json();
                });

              case 3:
                data = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchdata.apply(this, arguments);
    }

    fetchData();
  }, []);
}

_s(useStats, "Mp/QVXeoqe/OOvjesPlqtG3ZKME=");

function Stats() {
  _s2();

  var stats = useStats();
  console.log(stats);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Stats"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s2(Stats, "s+Z56IfX4wiafbK0Bc4N0iptpVY=", false, function () {
  return [useStats];
});

_c = Stats;
function IndexPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Stats, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
_c2 = IndexPage;

var _c, _c2;

$RefreshReg$(_c, "Stats");
$RefreshReg$(_c2, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdHMiLCJ1c2VTdGF0ZSIsInN0YXRzIiwic2V0U3RhdHMiLCJ1c2VFZmZlY3QiLCJmZXRjaGRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJmZXRjaERhdGEiLCJTdGF0cyIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ1NDLCtDQUFRLEVBRGpCO0FBQUEsTUFDUkMsS0FEUTtBQUFBLE1BQ0RDLFFBREM7O0FBRWZDLGtEQUFTLENBQUMsWUFBSztBQUFBLGFBQ0FDLFNBREE7QUFBQTtBQUFBOztBQUFBO0FBQUEscVRBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQURKO0FBQUEsdUJBRXVCQyxLQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUF3Q0MsSUFBeEMsQ0FBNkMsVUFBQUMsSUFBSTtBQUFBLHlCQUFJQSxJQUFJLENBQUNDLElBQUwsRUFBSjtBQUFBLGlCQUFqRCxDQUZ2Qjs7QUFBQTtBQUVVRCxvQkFGVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURlO0FBQUE7QUFBQTs7QUFLWEUsYUFBUztBQUNaLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPSDs7R0FUUVosUTs7QUFZVCxTQUFTYSxLQUFULEdBQWlCO0FBQUE7O0FBQ2IsTUFBTVgsS0FBSyxHQUFHRixRQUFRLEVBQXRCO0FBQ0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztJQVJRVyxLO1VBQ1NiLFE7OztLQURUYSxLO0FBVU0sU0FBU0MsU0FBVCxHQUFvQjtBQUMvQixzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIO01BTnVCQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ1NjI0ZjUzOGRjYTEwYmQ5MWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZVN0YXRzKCl7XHJcbiAgICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXT11c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hkYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyB0aGUgRGF0YScpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jb3ZpZDE5Lm1hdGhkcm8uaWQvYXBpJykudGhlbihkYXRhID0+IGRhdGEuanNvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTdGF0cygpIHtcclxuICAgIGNvbnN0IHN0YXRzID0gdXNlU3RhdHMoKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+U3RhdHM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFN0YXRzPjwvU3RhdHM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9