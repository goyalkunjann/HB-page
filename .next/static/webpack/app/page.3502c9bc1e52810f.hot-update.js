"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/MainSection/HeroSection.jsx":
/*!*******************************************************!*\
  !*** ./src/app/component/MainSection/HeroSection.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeroSection: function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeroSectionContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroSectionContent */ \"(app-pages-browser)/./src/app/component/MainSection/HeroSectionContent.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_assets_images_whatsapp_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/assets/images/whatsapp.svg */ \"(app-pages-browser)/./public/assets/images/whatsapp.svg\");\n/* harmony import */ var _public_assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/assets/images/phone.svg */ \"(app-pages-browser)/./public/assets/images/phone.svg\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slice_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/slice/slice */ \"(app-pages-browser)/./src/app/store/slice/slice.js\");\n/* harmony import */ var _Utils_CustomModal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utils/CustomModal/Modal */ \"(app-pages-browser)/./src/app/component/Utils/CustomModal/Modal.jsx\");\n/* __next_internal_client_entry_do_not_use__ HeroSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst HeroSection = (param)=>{\n    let { bannerimage, altText } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    const style = \"cursor-pointer inline z-[20] fixed right-0 overflow-hidden bg-white px-[10px] py-[7px] rounded-l-[6px] shadow-xl flex items-center w-[44px] h-[44px]\";\n    const handleButton = ()=>{\n        dispatch((0,_store_slice_slice__WEBPACK_IMPORTED_MODULE_6__.toggleModal)({\n            screen: _Utils_CustomModal_Modal__WEBPACK_IMPORTED_MODULE_7__.SCREENS.LEAD_POPUP,\n            visible: true\n        }));\n    };\n    function openLink() {\n        window.location.href = this;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: bannerimage,\n                        alt: altText,\n                        className: \"w-full h-[600px] object-cover object-bottom\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://api.whatsapp.com/send?phone=15551234567\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"\".concat(style, \" top-[118px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: _public_assets_images_whatsapp_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"whatsapp\",\n                            className: \"w-[30px]\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"tel:+919810431883\",\n                        className: \"\".concat(style, \" top-[180px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: _public_assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"contact\",\n                            className: \"w-[21px]\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroSectionContent__WEBPACK_IMPORTED_MODULE_2__.HeroSectionContent, {}, void 0, false, {\n                        fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full mt-10 px-4 lg:hidden flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookForm, {}, void 0, false, {\n                    fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kunjangoyal/Desktop/HBV2-main/src/app/component/MainSection/HeroSection.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HeroSection, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch\n    ];\n});\n_c = HeroSection;\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L01haW5TZWN0aW9uL0hlcm9TZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ2dDO0FBQzNCO0FBQzBDO0FBQ0o7QUFDM0I7QUFDWTtBQUNEO0FBRTdDLE1BQU1RLGNBQWM7UUFBQyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRTs7SUFDbEQsTUFBTUMsV0FBV04sd0RBQVdBO0lBQzVCLE1BQU1PLFFBQVE7SUFFZCxNQUFNQyxlQUFlO1FBQ25CRixTQUNFTCwrREFBV0EsQ0FBQztZQUNWUSxRQUFRUCw2REFBT0EsQ0FBQ1EsVUFBVTtZQUMxQkMsU0FBUztRQUNYO0lBRUo7SUFFQSxTQUFTQztRQUNQQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxJQUFJO0lBQzdCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJQyxLQUFLZjt3QkFBYWdCLEtBQUtmO3dCQUFTWSxXQUFVOzs7Ozs7a0NBQy9DLDhEQUFDSTt3QkFBRU4sTUFBSzt3QkFBa0RPLFFBQU87d0JBQVNDLEtBQUk7d0JBQXNCTixXQUFXLEdBQVMsT0FBTlYsT0FBTTtrQ0FDdEgsNEVBQUNWLGtEQUFLQTs0QkFBQ3NCLEtBQUtyQiwwRUFBWUE7NEJBQUVzQixLQUFJOzRCQUFXSCxXQUFVOzs7Ozs7Ozs7OztrQ0FFckQsOERBQUNJO3dCQUFFTixNQUFLO3dCQUFvQkUsV0FBVyxHQUFTLE9BQU5WLE9BQU07a0NBQzlDLDRFQUFDVixrREFBS0E7NEJBQUNzQixLQUFLcEIsdUVBQVdBOzRCQUFFcUIsS0FBSTs0QkFBVUgsV0FBVTs7Ozs7Ozs7Ozs7a0NBRW5ELDhEQUFDckIsbUVBQWtCQTs7Ozs7Ozs7Ozs7MEJBRXJCLDhEQUFDNEI7Z0JBQVFQLFdBQVU7MEJBQ2pCLDRFQUFDUTs7Ozs7Ozs7Ozs7O0FBSVQsRUFBQztHQWxDWXRCOztRQUNNSCxvREFBV0E7OztLQURqQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvTWFpblNlY3Rpb24vSGVyb1NlY3Rpb24uanN4P2I0ZWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZXJvU2VjdGlvbkNvbnRlbnQgfSBmcm9tICcuL0hlcm9TZWN0aW9uQ29udGVudCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHdoYXRzYXBwaWNvbiBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvd2hhdHNhcHAuc3ZnXCJcbmltcG9ydCBwaG9uZU5vaWNvbiBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcGhvbmUuc3ZnXCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gJy4uLy4uL3N0b3JlL3NsaWNlL3NsaWNlJ1xuaW1wb3J0IHsgU0NSRUVOUyB9IGZyb20gJy4uL1V0aWxzL0N1c3RvbU1vZGFsL01vZGFsJ1xuXG5leHBvcnQgY29uc3QgSGVyb1NlY3Rpb24gPSAoeyBiYW5uZXJpbWFnZSwgYWx0VGV4dCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGUgPSAnY3Vyc29yLXBvaW50ZXIgaW5saW5lIHotWzIwXSBmaXhlZCByaWdodC0wIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSBweC1bMTBweF0gcHktWzdweF0gcm91bmRlZC1sLVs2cHhdIHNoYWRvdy14bCBmbGV4IGl0ZW1zLWNlbnRlciB3LVs0NHB4XSBoLVs0NHB4XSdcblxuICBjb25zdCBoYW5kbGVCdXR0b24gPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICB0b2dnbGVNb2RhbCh7XG4gICAgICAgIHNjcmVlbjogU0NSRUVOUy5MRUFEX1BPUFVQLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkxpbmsoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZVwiPlxuICAgICAgICA8aW1nIHNyYz17YmFubmVyaW1hZ2V9IGFsdD17YWx0VGV4dH0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1bNjAwcHhdIG9iamVjdC1jb3ZlciBvYmplY3QtYm90dG9tJyAvPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9MTU1NTEyMzQ1NjdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPXtgJHtzdHlsZX0gdG9wLVsxMThweF1gfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXt3aGF0c2FwcGljb259IGFsdD0nd2hhdHNhcHAnIGNsYXNzTmFtZT0ndy1bMzBweF0nIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cInRlbDorOTE5ODEwNDMxODgzXCIgY2xhc3NOYW1lPXtgJHtzdHlsZX0gdG9wLVsxODBweF1gfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwaG9uZU5vaWNvbn0gYWx0PSdjb250YWN0JyBjbGFzc05hbWU9J3ctWzIxcHhdJyAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxIZXJvU2VjdGlvbkNvbnRlbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIG10LTEwIHB4LTQgbGc6aGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPEJvb2tGb3JtIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlcm9TZWN0aW9uQ29udGVudCIsIkltYWdlIiwid2hhdHNhcHBpY29uIiwicGhvbmVOb2ljb24iLCJ1c2VEaXNwYXRjaCIsInRvZ2dsZU1vZGFsIiwiU0NSRUVOUyIsIkhlcm9TZWN0aW9uIiwiYmFubmVyaW1hZ2UiLCJhbHRUZXh0IiwiZGlzcGF0Y2giLCJzdHlsZSIsImhhbmRsZUJ1dHRvbiIsInNjcmVlbiIsIkxFQURfUE9QVVAiLCJ2aXNpYmxlIiwib3BlbkxpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJhIiwidGFyZ2V0IiwicmVsIiwic2VjdGlvbiIsIkJvb2tGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/MainSection/HeroSection.jsx\n"));

/***/ })

});