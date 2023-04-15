"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[id]",{

/***/ "./src/pages/profile/[id].js":
/*!***********************************!*\
  !*** ./src/pages/profile/[id].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_general_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/general/header */ \"./src/components/general/header.js\");\n/* harmony import */ var _components_general_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/general/frame */ \"./src/components/general/frame.js\");\n/* harmony import */ var _assets_test_profile_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/test_profile.jpg */ \"./src/assets/test_profile.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_general_bg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/general/bg */ \"./src/components/general/bg.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Field(param) {\n    let { fieldname , value , isList =false  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"flex flex-col space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"text-white text-sm\",\n                children: [\n                    fieldname,\n                    \":\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            isList ? value.map((v)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_frame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    class: \"text-white font-bold text-lg\",\n                    spy: true,\n                    children: v\n                }, void 0, false, {\n                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                    lineNumber: 16,\n                    columnNumber: 22\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_frame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                class: \"text-white font-bold text-lg\",\n                spy: true,\n                children: value\n            }, void 0, false, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Field;\nfunction Card(param) {\n    let { children , editRedirect =\"\" , title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"w-3/4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_frame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            wfull: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex flex-col w-full p-3 space-y-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex flex-row justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                href: editRedirect,\n                                children: \"edit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                lineNumber: 29,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"h-0.5 w-full bg-gray-500\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"grid grid-cols-2 w-full\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n            lineNumber: 26,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this);\n}\n_c1 = Card;\nfunction Home() {\n    const testUser = {\n        image: _assets_test_profile_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        firstname: \"Maximiliano\",\n        lastname: \"Kallenbach\",\n        rol: \"Dev\",\n        projects: [\n            \"Adelphi\",\n            \"Prior\"\n        ],\n        food: \"Milanesa Napo\",\n        hobbie: \"Videojuegos\",\n        hair: \"Marron\",\n        eyes: \"Marron\"\n    };\n    const user = testUser;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Page Title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                class: \"bg-black h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_bg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex flex-row p-16 space-x-20 w-full h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex flex-col w-1/3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_frame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: user.image,\n                                            class: \"rounded-xl w-[292px]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex flex-col w-2/3 space-y-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \" text-5xl font-semibold\",\n                                            children: [\n                                                user.firstname,\n                                                \" \",\n                                                user.lastname\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"flex flex-col w-full space-y-4 overflow-scroll p-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                                    title: \"Name\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                                            fieldname: \"Rol\",\n                                                            value: user.rol\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 19\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                                            fieldname: \"Projects\",\n                                                            value: user.projects,\n                                                            isList: true\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                                    title: \"Name\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                                            fieldname: \"Comida Favorita\",\n                                                            value: user.food\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 19\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                                            fieldname: \"Hobbie\",\n                                                            value: user.hobbie\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                                    title: \"Name\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                                            fieldname: \"Color de pelo\",\n                                                            value: user.hair\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                                            fieldname: \"Color de ojos\",\n                                                            value: user.eyes\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c2 = Home;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Field\");\n$RefreshReg$(_c1, \"Card\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7c0VBQ25ELDhEQUFDdkI7NERBQU1DLFdBQVU7NERBQVNDLE9BQU95QixLQUFLSCxNQUFNOzs7Ozs7Ozs7Ozs7OERBRTlDLDhEQUFDZDtvREFBS0csT0FBTzs7c0VBQ1QsOERBQUNiOzREQUFNQyxXQUFVOzREQUFnQkMsT0FBT3lCLEtBQUtGLElBQUk7Ozs7OztzRUFDakQsOERBQUN6Qjs0REFBTUMsV0FBVTs0REFBZ0JDLE9BQU95QixLQUFLRCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3JFLENBQUM7TUF6RHVCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZmlsZS9baWRdLmpzPzZhMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2dlbmVyYWwvaGVhZGVyXCI7XG5pbXBvcnQgRnJhbWUgZnJvbSBcIkAvY29tcG9uZW50cy9nZW5lcmFsL2ZyYW1lXCI7XG5pbXBvcnQgVGVzdFByb2ZpbGUgZnJvbSBcIkAvYXNzZXRzL3Rlc3RfcHJvZmlsZS5qcGdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQmcgZnJvbSBcIkAvY29tcG9uZW50cy9nZW5lcmFsL2JnXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEZpZWxkKHsgZmllbGRuYW1lLCB2YWx1ZSwgaXNMaXN0ID0gZmFsc2UgfSl7XG4gIFxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC1zbVwiPntmaWVsZG5hbWV9Ojwvc3Bhbj5cbiAgICAgIHtcbiAgICAgIGlzTGlzdD8gXG4gICAgICB2YWx1ZS5tYXAodiA9PiA8RnJhbWUgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnXCIgc3B5PXt0cnVlfT57dn08L0ZyYW1lPikgOlxuICAgICAgPEZyYW1lIGNsYXNzPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZ1wiIHNweT17dHJ1ZX0+e3ZhbHVlfTwvRnJhbWU+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmQoe2NoaWxkcmVuLCBlZGl0UmVkaXJlY3QgPVwiXCIsIHRpdGxlfSl7XG5yZXR1cm4gKFxuICA8ZGl2IGNsYXNzPVwidy0zLzRcIj5cbiAgPEZyYW1lIHdmdWxsPXt0cnVlfT5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcC0zIHNwYWNlLXktM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+PExpbmsgaHJlZj17ZWRpdFJlZGlyZWN0fT5lZGl0PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaC0wLjUgdy1mdWxsIGJnLWdyYXktNTAwXCIvPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgdy1mdWxsXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L0ZyYW1lPlxuICA8L2Rpdj5cbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgdGVzdFVzZXIgPSB7XG4gICAgaW1hZ2U6IFRlc3RQcm9maWxlLFxuICAgIGZpcnN0bmFtZTpcIk1heGltaWxpYW5vXCIsXG4gICAgbGFzdG5hbWU6XCJLYWxsZW5iYWNoXCIsXG4gICAgcm9sOlwiRGV2XCIsXG4gICAgcHJvamVjdHM6IFtcIkFkZWxwaGlcIiwgXCJQcmlvclwiXSxcbiAgICBmb29kOiBcIk1pbGFuZXNhIE5hcG9cIixcbiAgICBob2JiaWU6IFwiVmlkZW9qdWVnb3NcIixcbiAgICBoYWlyOiBcIk1hcnJvblwiLFxuICAgIGV5ZXM6IFwiTWFycm9uXCJcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSB0ZXN0VXNlcjtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGFnZSBUaXRsZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3M9XCJiZy1ibGFjayBoLXNjcmVlblwiPlxuICAgICAgICA8Qmc+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IHAtMTYgc3BhY2UteC0yMCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LTEvM1wiPlxuICAgICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dXNlci5pbWFnZX0gY2xhc3M9XCJyb3VuZGVkLXhsIHctWzI5MnB4XVwiLz5cbiAgICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdy0yLzMgc3BhY2UteS01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgdGV4dC01eGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIHt1c2VyLmZpcnN0bmFtZX0ge3VzZXIubGFzdG5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgc3BhY2UteS00IG92ZXJmbG93LXNjcm9sbCBwLTJcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17XCJOYW1lXCJ9PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkIGZpZWxkbmFtZT1cIlJvbFwiIHZhbHVlPXt1c2VyLnJvbH0vPlxuICAgICAgICAgICAgICAgICAgPEZpZWxkIGZpZWxkbmFtZT1cIlByb2plY3RzXCIgdmFsdWU9e3VzZXIucHJvamVjdHN9IGlzTGlzdD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17XCJOYW1lXCJ9PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkIGZpZWxkbmFtZT1cIkNvbWlkYSBGYXZvcml0YVwiIHZhbHVlPXt1c2VyLmZvb2R9Lz5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBmaWVsZG5hbWU9XCJIb2JiaWVcIiB2YWx1ZT17dXNlci5ob2JiaWV9Lz5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9e1wiTmFtZVwifT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGZpZWxkbmFtZT1cIkNvbG9yIGRlIHBlbG9cIiB2YWx1ZT17dXNlci5oYWlyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBmaWVsZG5hbWU9XCJDb2xvciBkZSBvam9zXCIgdmFsdWU9e3VzZXIuZXllc30vPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9CZz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiRnJhbWUiLCJUZXN0UHJvZmlsZSIsIkltYWdlIiwiQmciLCJMaW5rIiwiRmllbGQiLCJmaWVsZG5hbWUiLCJ2YWx1ZSIsImlzTGlzdCIsImRpdiIsImNsYXNzIiwic3BhbiIsIm1hcCIsInYiLCJzcHkiLCJDYXJkIiwiY2hpbGRyZW4iLCJlZGl0UmVkaXJlY3QiLCJ0aXRsZSIsIndmdWxsIiwiaHJlZiIsIkhvbWUiLCJ0ZXN0VXNlciIsImltYWdlIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJyb2wiLCJwcm9qZWN0cyIsImZvb2QiLCJob2JiaWUiLCJoYWlyIiwiZXllcyIsInVzZXIiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwibWFpbiIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile/[id].js\n"));

/***/ })

});