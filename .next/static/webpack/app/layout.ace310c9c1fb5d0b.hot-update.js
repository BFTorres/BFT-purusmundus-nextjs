"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ae62600a0436\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2luZGV4LmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2luZGV4LmNzcz84MjNmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiYWU2MjYwMGEwNDM2XCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./styles/index.css\n"));

/***/ }),

/***/ "(app-client)/./components/Header/menuData.tsx":
/*!****************************************!*\
  !*** ./components/Header/menuData.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst menuData = [\n    {\n        id: 1,\n        title: \"Home\",\n        path: \"/\",\n        newTab: false\n    },\n    {\n        id: 2,\n        title: \"services\",\n        path: \"/about\",\n        newTab: false\n    },\n    {\n        id: 33,\n        title: \"Blog\",\n        path: \"/blog\",\n        newTab: false\n    },\n    {\n        id: 3,\n        title: \"Support\",\n        path: \"/contact\",\n        newTab: false\n    },\n    {\n        id: 4,\n        title: \"Pages\",\n        newTab: false,\n        submenu: [\n            {\n                id: 41,\n                title: \"About Page\",\n                path: \"/about\",\n                newTab: false\n            },\n            {\n                id: 42,\n                title: \"Contact Page\",\n                path: \"/contact\",\n                newTab: false\n            },\n            {\n                id: 43,\n                title: \"Blog Grid Page\",\n                path: \"/blog\",\n                newTab: false\n            },\n            {\n                id: 44,\n                title: \"Blog Sidebar Page\",\n                path: \"/blog-sidebar\",\n                newTab: false\n            },\n            {\n                id: 45,\n                title: \"Blog Details Page\",\n                path: \"/blog-details\",\n                newTab: false\n            },\n            {\n                id: 46,\n                title: \"Sign In Page\",\n                path: \"/signin\",\n                newTab: false\n            },\n            {\n                id: 47,\n                title: \"Sign Up Page\",\n                path: \"/signup\",\n                newTab: false\n            },\n            {\n                id: 48,\n                title: \"Error Page\",\n                path: \"/error\",\n                newTab: false\n            }\n        ]\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9IZWFkZXIvbWVudURhdGEudHN4LmpzIiwibWFwcGluZ3MiOiI7QUFJQSxNQUFNQSxXQUFtQjtJQUN2QjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxRQUFRLEtBQUs7SUFDZjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFFBQVEsS0FBSztJQUNmO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsUUFBUSxLQUFLO0lBQ2Y7SUFDQTtRQUNFSCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxRQUFRLEtBQUs7SUFDZjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsT0FBTztRQUNQRSxRQUFRLEtBQUs7UUFDYkMsU0FBUztZQUNQO2dCQUNFSixJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRLEtBQUs7WUFDZjtZQUNBO2dCQUNFSCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRLEtBQUs7WUFDZjtZQUNBO2dCQUNFSCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRLEtBQUs7WUFDZjtZQUNBO2dCQUNFSCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRLEtBQUs7WUFDZjtZQUNBO2dCQUNFSCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRLEtBQUs7WUFDZjtZQUNBO2dCQUNFSCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRLEtBQUs7WUFDZjtZQUNBO2dCQUNFSCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRLEtBQUs7WUFDZjtZQUNBO2dCQUNFSCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRLEtBQUs7WUFDZjtTQUNEO0lBQ0g7Q0FDRDtBQUNELCtEQUFlSixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL21lbnVEYXRhLnRzeD8yMjk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUgfSBmcm9tIFwiQC90eXBlcy9tZW51XCI7XG5cblxuXG5jb25zdCBtZW51RGF0YTogTWVudVtdID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG5ld1RhYjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJzZXJ2aWNlc1wiLFxuICAgIHBhdGg6IFwiL2Fib3V0XCIsXG4gICAgbmV3VGFiOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAzMyxcbiAgICB0aXRsZTogXCJCbG9nXCIsXG4gICAgcGF0aDogXCIvYmxvZ1wiLFxuICAgIG5ld1RhYjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJTdXBwb3J0XCIsXG4gICAgcGF0aDogXCIvY29udGFjdFwiLFxuICAgIG5ld1RhYjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJQYWdlc1wiLFxuICAgIG5ld1RhYjogZmFsc2UsXG4gICAgc3VibWVudTogW1xuICAgICAge1xuICAgICAgICBpZDogNDEsXG4gICAgICAgIHRpdGxlOiBcIkFib3V0IFBhZ2VcIixcbiAgICAgICAgcGF0aDogXCIvYWJvdXRcIixcbiAgICAgICAgbmV3VGFiOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0MixcbiAgICAgICAgdGl0bGU6IFwiQ29udGFjdCBQYWdlXCIsXG4gICAgICAgIHBhdGg6IFwiL2NvbnRhY3RcIixcbiAgICAgICAgbmV3VGFiOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0MyxcbiAgICAgICAgdGl0bGU6IFwiQmxvZyBHcmlkIFBhZ2VcIixcbiAgICAgICAgcGF0aDogXCIvYmxvZ1wiLFxuICAgICAgICBuZXdUYWI6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQ0LFxuICAgICAgICB0aXRsZTogXCJCbG9nIFNpZGViYXIgUGFnZVwiLFxuICAgICAgICBwYXRoOiBcIi9ibG9nLXNpZGViYXJcIixcbiAgICAgICAgbmV3VGFiOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0NSxcbiAgICAgICAgdGl0bGU6IFwiQmxvZyBEZXRhaWxzIFBhZ2VcIixcbiAgICAgICAgcGF0aDogXCIvYmxvZy1kZXRhaWxzXCIsXG4gICAgICAgIG5ld1RhYjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNDYsXG4gICAgICAgIHRpdGxlOiBcIlNpZ24gSW4gUGFnZVwiLFxuICAgICAgICBwYXRoOiBcIi9zaWduaW5cIixcbiAgICAgICAgbmV3VGFiOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0NyxcbiAgICAgICAgdGl0bGU6IFwiU2lnbiBVcCBQYWdlXCIsXG4gICAgICAgIHBhdGg6IFwiL3NpZ251cFwiLFxuICAgICAgICBuZXdUYWI6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQ4LFxuICAgICAgICB0aXRsZTogXCJFcnJvciBQYWdlXCIsXG4gICAgICAgIHBhdGg6IFwiL2Vycm9yXCIsXG4gICAgICAgIG5ld1RhYjogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgbWVudURhdGE7XG4iXSwibmFtZXMiOlsibWVudURhdGEiLCJpZCIsInRpdGxlIiwicGF0aCIsIm5ld1RhYiIsInN1Ym1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Header/menuData.tsx\n"));

/***/ })

});