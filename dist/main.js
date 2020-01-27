(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _MediaHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaHandler */ \"./src/js/MediaHandler.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ \"./src/js/Scene.js\");\n\n\nconst mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst gameStates = {\n  gameOn: \"GAME_ON\"\n};\nconst imageSources = [\"./images/player.png\", \"./images/road.png\", \"./images/obstacle.png\", \"./images/background.png\"];\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.scene = new _Scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  async init() {\n    mediaHandler.setImageSources(imageSources);\n    console.log(\"Image preloading.\");\n    await mediaHandler.preloadAllImages();\n    console.log(\"Images preloading done.\");\n  }\n\n  async start() {\n    await this.init();\n    this.gameState = gameStates.gameOn;\n    this.scene.init();\n    this.scene.render(this.ctx);\n  }\n\n} // const imageSources = [\n//     \"../images/player.png\",\n//     \"../images/road.png\",\n//     \"../images/punk.png\",\n//     \"../images/trash.png\",\n//     \"../images/hooker.png\",\n//     \"../images/background.png\",\n//     \"../images/hologram.png\",\n//     \"../images/cloud.png\",\n// ];\n\n//# sourceURL=webpack:///./src/js/Game.js?");

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

/***/ "./src/js/Obstacle.js":
/*!****************************!*\
  !*** ./src/js/Obstacle.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/js/Obstacle.js?");

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyStates */ \"./src/js/keyStates.js\");\n\nclass Player {\n  constructor(props) {\n    this.image = props.image || null;\n    this.tilesAmount = props.tilesAmount || 0;\n    this.tileWidth = props.tileWidth || 0;\n    this.tileHeight = props.tileHeight || 0;\n    this.currentTileRow = props.currentTileRow || 0;\n    this.currentTile = props.currentTile || 0;\n    this.posX = props.posX || 0;\n    this.posY = props.posY || 0;\n  }\n\n  update(dt) {\n    if (_keyStates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].space) {}\n  }\n\n  draw(ctx) {\n    ctx.save();\n    ctx.translate(this.positionX + this.tileWidth / 2, this.positionY + this.tileHeight / 2);\n    ctx.rotate(-(this.angle - 90) * Math.PI / 180);\n    ctx.drawImage(this.image, this.currentTile * this.tileWidth, this.currentTileRow * this.tileHeight, this.tileWidth, this.tileHeight, -this.tileWidth / 2, -this.tileHeight / 2, this.tileWidth, this.tileHeight);\n    ctx.restore();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Player.js?");

/***/ }),

/***/ "./src/js/Scene.js":
/*!*************************!*\
  !*** ./src/js/Scene.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyStates */ \"./src/js/keyStates.js\");\n/* harmony import */ var _gameMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameMedia */ \"./src/js/gameMedia.js\");\n/* harmony import */ var _gameObjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameObjects.js */ \"./src/js/gameObjects.js\");\n/* harmony import */ var _objectHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objectHandler */ \"./src/js/objectHandler.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ \"./src/js/Player.js\");\n/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Obstacle */ \"./src/js/Obstacle.js\");\n/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Obstacle__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nclass Scene {\n  init() {\n    this.player = _objectHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createObject(_Player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      image: _gameMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player,\n      tileHeight: 32,\n      tileWidth: 48\n    });\n  }\n\n  render(ctx) {\n    // console.log(gameObjects);\n    for (let object of _gameObjects_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      object.draw(ctx);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Scene.js?");

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

/***/ }),

/***/ "./src/js/gameObjects.js":
/*!*******************************!*\
  !*** ./src/js/gameObjects.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet objects = [];\n/* harmony default export */ __webpack_exports__[\"default\"] = (objects);\n\n//# sourceURL=webpack:///./src/js/gameObjects.js?");

/***/ }),

/***/ "./src/js/keyStates.js":
/*!*****************************!*\
  !*** ./src/js/keyStates.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet keyStates = {\n  space: false\n};\nwindow.addEventListener(\"keydown\", e => {\n  if (e.keyCode === 32) {\n    keyStates.space = true;\n  }\n}, true);\nwindow.addEventListener(\"keyup\", e => {\n  if (e.keyCode === 32) {\n    keyStates.space = false;\n  }\n}, true);\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyStates);\n\n//# sourceURL=webpack:///./src/js/keyStates.js?");

/***/ }),

/***/ "./src/js/objectHandler.js":
/*!*********************************!*\
  !*** ./src/js/objectHandler.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObjects */ \"./src/js/gameObjects.js\");\n\n\nclass ObjectHandler {\n  createObject(Class, props) {\n    let obj = new Class(props);\n    this.addObject(obj);\n    return obj;\n  }\n\n  addObject(obj) {\n    _gameObjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(obj);\n  }\n\n  getObject(n) {\n    return _gameObjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"][n];\n  }\n\n  getObjects() {\n    return _gameObjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n\n  deleteObject(obj) {\n    _gameObjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(_gameObjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOf(obj), 1);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ObjectHandler());\n\n//# sourceURL=webpack:///./src/js/objectHandler.js?");

/***/ })

},[["./src/index.js","runtime"]]]);