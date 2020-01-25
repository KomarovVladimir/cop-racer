(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\nconsole.log(1234123);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _MediaHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaHandler */ \"./src/js/MediaHandler.js\");\n\nconst mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst gameStates = {\n  gameOn: \"GAME_ON\"\n};\nconst imageSources = [\"./images/player.png\", \"./images/road.png\", \"./images/obstacle.png\", \"./images/background.png\"];\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n  }\n\n  async init() {\n    mediaHandler.setImageSources(imageSources);\n    console.log(\"Image preloading.\");\n    await mediaHandler.preloadAllImages();\n    console.log(\"Images preloading done.\");\n  }\n\n  async start() {\n    await this.init();\n    this.gameState = gameStates.gameOn;\n    console.log(this.gameState);\n  }\n\n} // const imageSources = [\n//     \"../images/player.png\",\n//     \"../images/road.png\",\n//     \"../images/punk.png\",\n//     \"../images/trash.png\",\n//     \"../images/hooker.png\",\n//     \"../images/background.png\",\n//     \"../images/hologram.png\",\n//     \"../images/cloud.png\",\n// ];\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/MediaHandler.js":
/*!********************************!*\
  !*** ./src/js/MediaHandler.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaHandler; });\n/* harmony import */ var _gameMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameMedia */ \"./src/js/gameMedia.js\");\n\nclass MediaHandler {\n  constructor(imageSources) {\n    this.imageSources = imageSources || [];\n  }\n\n  setImageSources(sourcesArray) {\n    this.imageSources = sourcesArray.slice();\n  }\n\n  getImageSources() {\n    return this.imageSources;\n  }\n\n  addImage(image, src) {\n    const imageName = src.match(/(\\w+)(?:\\.\\w+)$/)[1];\n    _gameMedia__WEBPACK_IMPORTED_MODULE_0__[\"default\"][imageName] = image;\n  }\n\n  getImage(image) {\n    return _gameMedia__WEBPACK_IMPORTED_MODULE_0__[\"default\"][image];\n  }\n\n  async preloadAllImages() {\n    for (let src of this.imageSources) {\n      console.log(`Loading ${src}.`);\n      this.addImage((await this.preloadImage(src)), src);\n    }\n  }\n\n  preloadImage(src) {\n    return new Promise((resolve, reject) => {\n      let img = new Image();\n\n      img.onload = () => {\n        console.log(`Image ${img.src} loaded.`);\n        resolve(img);\n      };\n\n      img.onerror = () => reject();\n\n      img.src = src;\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/MediaHandler.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n\nconst canvas = document.getElementById('game');\nconst ctx = canvas.getContext('2d');\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\ngame.start();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/gameMedia.js":
/*!*****************************!*\
  !*** ./src/js/gameMedia.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet gameMedia = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameMedia);\n\n//# sourceURL=webpack:///./src/js/gameMedia.js?");

/***/ })

},[["./src/index.js","runtime"]]]);