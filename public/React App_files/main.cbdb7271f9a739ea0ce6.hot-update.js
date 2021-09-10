webpackHotUpdate("main",{

/***/ "./src/component/landing/landing.style.ts":
/*!************************************************!*\
  !*** ./src/component/landing/landing.style.ts ***!
  \************************************************/
/*! exports provided: Wrapper, Heading, Body, Footer, Header, HeaderLeft, HeaderMiddle, HeaderRight, WayneHillsLogo, SignIn, HeadingContainer, Carosel, TypoGraphy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLeft", function() { return HeaderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMiddle", function() { return HeaderMiddle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRight", function() { return HeaderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WayneHillsLogo", function() { return WayneHillsLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingContainer", function() { return HeadingContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carosel", function() { return Carosel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypoGraphy", function() { return TypoGraphy; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
const Heading = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 70vw;
  height: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Body = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100vw;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: #000000;
`;
const Footer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 70vw;
  height: 10%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const Header = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 70vw;
  height: 20%;
  display: flex;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f;
`;
const HeaderLeft = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const HeaderMiddle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 40%;
  height: 100%;
`;
const HeaderRight = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
`;
const WayneHillsLogo = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 200px;
  height: 57px;
`;
const SignIn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  font-size: 14px;
  background-color: black;
  color: white;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f;
  cursor: pointer;
  outline: none;
  border: none;
  min-width: 70px;
  height: 35px;
  border-radius: 4px;
  font-weight: bold;
`;
const HeadingContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  height: 80%;
  border: 1px solid black;
`;
const Carosel = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 40%;
  height: 100%;
  border: 1px solid red;
`;
const TypoGraphy = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 60%;
  height: 100%;
  text-align: center;
  font-size: 90px;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.cbdb7271f9a739ea0ce6.hot-update.js.map