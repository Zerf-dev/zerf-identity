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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_general_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/general/header */ \"./src/components/general/header.js\");\n/* harmony import */ var _components_general_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/general/frame */ \"./src/components/general/frame.js\");\n/* harmony import */ var _assets_test_profile_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/test_profile.jpg */ \"./src/assets/test_profile.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_general_bg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/general/bg */ \"./src/components/general/bg.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Field(param) {\n    let { fieldname , value , isList =false  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"flex flex-col space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"text-white text-sm\",\n                children: [\n                    fieldname,\n                    \":\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            isList ? value.map((v)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_frame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    class: \"text-white font-bold text-lg\",\n                    spy: true,\n                    children: v\n                }, void 0, false, {\n                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                    lineNumber: 16,\n                    columnNumber: 22\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_frame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                class: \"text-white font-bold text-lg\",\n                spy: true,\n                children: value\n            }, void 0, false, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Field;\nfunction Card(param) {\n    let { children , editRedirect =\"\" , title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_frame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"flex flex-col w-full justify-between p-3 space-y-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    href: editRedirect,\n                    children: \"edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 27\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"h-0.5 w-4/5 bg-gray-500\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"flex\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n            lineNumber: 26,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this);\n}\n_c1 = Card;\nfunction Home() {\n    const testUser = {\n        image: _assets_test_profile_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        firstname: \"Maximiliano\",\n        lastname: \"Kallenbach\",\n        rol: \"Dev\",\n        projects: [\n            \"Adelphi\",\n            \"Prior\"\n        ],\n        food: \"Milanesa Napo\",\n        hobbie: \"Videojuegos\",\n        hair: \"Marron\",\n        eyes: \"Marron\"\n    };\n    const user = testUser;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Page Title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                class: \"bg-black h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_bg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex flex-row p-16 space-x-20 w-full h-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex flex-col w-1/3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_frame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: user.image,\n                                            class: \"rounded-xl w-[292px]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex flex-col w-2/3 space-y-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \" text-5xl font-semibold\",\n                                            children: [\n                                                user.firstname,\n                                                \" \",\n                                                user.lastname\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"flex flex-col w-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                                title: \"Name\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                                        fieldname: \"Rol\",\n                                                        value: user.rol\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Field, {\n                                                        fieldname: \"Projects\",\n                                                        value: user.projects,\n                                                        isList: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/maxo/Desktop/Zerf/zerf-identity/src/pages/profile/[id].js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c2 = Home;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Field\");\n$RefreshReg$(_c1, \"Card\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ29CO0FBQ0Y7QUFDSTtBQUNwQjtBQUNVO0FBQ1o7QUFFN0IsU0FBU08sTUFBTSxLQUFvQyxFQUFDO1FBQXJDLEVBQUVDLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxRQUFTLEtBQUssR0FBRSxHQUFwQztJQUViLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFNOzswQkFDVCw4REFBQ0M7Z0JBQUtELE9BQU07O29CQUFzQko7b0JBQVU7Ozs7Ozs7WUFFNUNFLFNBQ0FELE1BQU1LLEdBQUcsQ0FBQ0MsQ0FBQUEsa0JBQUssOERBQUNiLGlFQUFLQTtvQkFBQ1UsT0FBTTtvQkFBK0JJLEtBQUssSUFBSTs4QkFBR0Q7Ozs7OzBDQUN2RSw4REFBQ2IsaUVBQUtBO2dCQUFDVSxPQUFNO2dCQUErQkksS0FBSyxJQUFJOzBCQUFHUDs7Ozs7b0JBQWM7Ozs7Ozs7QUFJNUU7S0FaU0Y7QUFjVCxTQUFTVSxLQUFLLEtBQW1DLEVBQUM7UUFBcEMsRUFBQ0MsU0FBUSxFQUFFQyxjQUFjLEdBQUUsRUFBRUMsTUFBSyxFQUFDLEdBQW5DO0lBQ2QscUJBQ0UsOERBQUNsQixpRUFBS0E7a0JBQ0osNEVBQUNTO1lBQUlDLE9BQU07OzhCQUNULDhEQUFDQzs4QkFBTU87Ozs7Ozs4QkFBYSw4REFBQ2Qsa0RBQUlBO29CQUFDZSxNQUFNRjs4QkFBYzs7Ozs7OzhCQUM5Qyw4REFBQ1I7b0JBQUlDLE9BQU07Ozs7Ozs4QkFDWCw4REFBQ0Q7b0JBQUlDLE9BQU07OEJBQVFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QjtNQVZTRDtBQVlNLFNBQVNLLE9BQU87SUFFN0IsTUFBTUMsV0FBVztRQUNmQyxPQUFPckIsZ0VBQVdBO1FBQ2xCc0IsV0FBVTtRQUNWQyxVQUFTO1FBQ1RDLEtBQUk7UUFDSkMsVUFBVTtZQUFDO1lBQVc7U0FBUTtRQUM5QkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsT0FBT1Y7SUFFYixxQkFDRTs7MEJBQ0UsOERBQUN2QixrREFBSUE7O2tDQUNILDhEQUFDb0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ2M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT2pCLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNrQjtnQkFBSzNCLE9BQU07MEJBQ1YsNEVBQUNQLDhEQUFFQTs7c0NBQ0QsOERBQUNKLGtFQUFNQTs7Ozs7c0NBQ1AsOERBQUNVOzRCQUFJQyxPQUFNOzs4Q0FDVCw4REFBQ0Q7b0NBQUlDLE9BQU07OENBQ1QsNEVBQUNWLGlFQUFLQTtrREFDSiw0RUFBQ0UsbURBQUtBOzRDQUFDb0MsS0FBS1AsS0FBS1QsS0FBSzs0Q0FBRVosT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHbEMsOERBQUNEO29DQUFJQyxPQUFNOztzREFDVCw4REFBQ0Q7NENBQUlDLE9BQU07O2dEQUNScUIsS0FBS1IsU0FBUztnREFBQztnREFBRVEsS0FBS1AsUUFBUTs7Ozs7OztzREFFakMsOERBQUNmOzRDQUFJQyxPQUFNO3NEQUNULDRFQUFDSztnREFBS0csT0FBTzs7a0VBQ1gsOERBQUNiO3dEQUFNQyxXQUFVO3dEQUFNQyxPQUFPd0IsS0FBS04sR0FBRzs7Ozs7O2tFQUN0Qyw4REFBQ3BCO3dEQUFNQyxXQUFVO3dEQUFXQyxPQUFPd0IsS0FBS0wsUUFBUTt3REFBRWxCLFFBQVEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2hGLENBQUM7TUFqRHVCWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZmlsZS9baWRdLmpzPzZhMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2dlbmVyYWwvaGVhZGVyXCI7XG5pbXBvcnQgRnJhbWUgZnJvbSBcIkAvY29tcG9uZW50cy9nZW5lcmFsL2ZyYW1lXCI7XG5pbXBvcnQgVGVzdFByb2ZpbGUgZnJvbSBcIkAvYXNzZXRzL3Rlc3RfcHJvZmlsZS5qcGdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQmcgZnJvbSBcIkAvY29tcG9uZW50cy9nZW5lcmFsL2JnXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEZpZWxkKHsgZmllbGRuYW1lLCB2YWx1ZSwgaXNMaXN0ID0gZmFsc2UgfSl7XG4gIFxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC1zbVwiPntmaWVsZG5hbWV9Ojwvc3Bhbj5cbiAgICAgIHtcbiAgICAgIGlzTGlzdD8gXG4gICAgICB2YWx1ZS5tYXAodiA9PiA8RnJhbWUgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnXCIgc3B5PXt0cnVlfT57dn08L0ZyYW1lPikgOlxuICAgICAgPEZyYW1lIGNsYXNzPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZ1wiIHNweT17dHJ1ZX0+e3ZhbHVlfTwvRnJhbWU+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmQoe2NoaWxkcmVuLCBlZGl0UmVkaXJlY3QgPVwiXCIsIHRpdGxlfSl7XG5yZXR1cm4gKFxuICA8RnJhbWU+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBwLTMgc3BhY2UteS0yXCI+XG4gICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPjxMaW5rIGhyZWY9e2VkaXRSZWRpcmVjdH0+ZWRpdDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3M9XCJoLTAuNSB3LTQvNSBiZy1ncmF5LTUwMFwiLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L0ZyYW1lPlxuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCB0ZXN0VXNlciA9IHtcbiAgICBpbWFnZTogVGVzdFByb2ZpbGUsXG4gICAgZmlyc3RuYW1lOlwiTWF4aW1pbGlhbm9cIixcbiAgICBsYXN0bmFtZTpcIkthbGxlbmJhY2hcIixcbiAgICByb2w6XCJEZXZcIixcbiAgICBwcm9qZWN0czogW1wiQWRlbHBoaVwiLCBcIlByaW9yXCJdLFxuICAgIGZvb2Q6IFwiTWlsYW5lc2EgTmFwb1wiLFxuICAgIGhvYmJpZTogXCJWaWRlb2p1ZWdvc1wiLFxuICAgIGhhaXI6IFwiTWFycm9uXCIsXG4gICAgZXllczogXCJNYXJyb25cIlxuICB9XG5cbiAgY29uc3QgdXNlciA9IHRlc3RVc2VyO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QYWdlIFRpdGxlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzcz1cImJnLWJsYWNrIGgtc2NyZWVuXCI+XG4gICAgICAgIDxCZz5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgcC0xNiBzcGFjZS14LTIwIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHctMS8zXCI+XG4gICAgICAgICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyLmltYWdlfSBjbGFzcz1cInJvdW5kZWQteGwgdy1bMjkycHhdXCIvPlxuICAgICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LTIvMyBzcGFjZS15LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiB0ZXh0LTV4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAge3VzZXIuZmlyc3RuYW1lfSB7dXNlci5sYXN0bmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXtcIk5hbWVcIn0+XG4gICAgICAgICAgICAgICAgICA8RmllbGQgZmllbGRuYW1lPVwiUm9sXCIgdmFsdWU9e3VzZXIucm9sfS8+XG4gICAgICAgICAgICAgICAgICA8RmllbGQgZmllbGRuYW1lPVwiUHJvamVjdHNcIiB2YWx1ZT17dXNlci5wcm9qZWN0c30gaXNMaXN0PXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0JnPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJIZWFkZXIiLCJGcmFtZSIsIlRlc3RQcm9maWxlIiwiSW1hZ2UiLCJCZyIsIkxpbmsiLCJGaWVsZCIsImZpZWxkbmFtZSIsInZhbHVlIiwiaXNMaXN0IiwiZGl2IiwiY2xhc3MiLCJzcGFuIiwibWFwIiwidiIsInNweSIsIkNhcmQiLCJjaGlsZHJlbiIsImVkaXRSZWRpcmVjdCIsInRpdGxlIiwiaHJlZiIsIkhvbWUiLCJ0ZXN0VXNlciIsImltYWdlIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJyb2wiLCJwcm9qZWN0cyIsImZvb2QiLCJob2JiaWUiLCJoYWlyIiwiZXllcyIsInVzZXIiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwibWFpbiIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile/[id].js\n"));

/***/ })

});