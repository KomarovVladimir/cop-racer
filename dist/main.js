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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _MediaHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaHandler */ \"./src/js/MediaHandler.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ \"./src/js/Scene.js\");\n\n\nconst mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst imageSources = [\"./images/player.png\", \"./images/road.png\", \"./images/smallObstacle.png\", \"./images/mediumObstacle.png\", \"./images/bigObstacle.png\", \"./images/background.png\", \"./images/road.png\"];\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.scene = new _Scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      ctx: this.ctx\n    });\n  }\n\n  async init() {\n    mediaHandler.setImageSources(imageSources);\n    console.log(\"Image preloading.\");\n    await mediaHandler.preloadAllImages();\n    console.log(\"Images preloading done.\");\n  }\n\n  async start() {\n    await this.init();\n    this.scene.start();\n  }\n\n} // const imageSources = [\n//     \"../images/player.png\",\n//     \"../images/road.png\",\n//     \"../images/punk.png\",\n//     \"../images/trash.png\",\n//     \"../images/hooker.png\",\n//     \"../images/background.png\",\n//     \"../images/hologram.png\",\n//     \"../images/cloud.png\",\n// ];\n\n//# sourceURL=webpack:///./src/js/Game.js?");

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

/***/ "./src/js/Object.js":
/*!**************************!*\
  !*** ./src/js/Object.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Object; });\n/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyStates */ \"./src/js/keyStates.js\");\n\nclass Object {\n  constructor(props) {\n    this.type = props.type || \"\";\n    this.image = props.image || null;\n    this.tilesAmount = props.tilesAmount || 0;\n    this.tileWidth = props.tileWidth || 0;\n    this.tileHeight = props.tileHeight || 0;\n    this.currentTileRow = props.currentTileRow || 0;\n    this.currentTile = props.currentTile || 0;\n    this.posX = props.posX || 0;\n    this.posY = props.posY || 0;\n    this.baseX = this.posX;\n    this.baseY = this.posY;\n    this.rightBorder = this.posX + this.tileWidth;\n    this.bottomBorder = this.posY + this.tileHeight;\n  }\n\n  update(dt) {\n    this.rightBorder = this.posX + this.tileWidth;\n    this.bottomBorder = this.posY + this.tileHeight;\n  }\n\n  draw(ctx) {\n    ctx.save();\n    ctx.translate(this.posX + this.tileWidth / 2, this.posY + this.tileHeight / 2);\n    ctx.rotate(-(this.angle - 90) * Math.PI / 180);\n    ctx.drawImage(this.image, this.currentTile * this.tileWidth, this.currentTileRow * this.tileHeight, this.tileWidth, this.tileHeight, -this.tileWidth / 2, -this.tileHeight / 2, this.tileWidth, this.tileHeight);\n    ctx.restore();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Object.js?");

/***/ }),

/***/ "./src/js/Obstacle.js":
/*!****************************!*\
  !*** ./src/js/Obstacle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Obstacle; });\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object */ \"./src/js/Object.js\");\n\nclass Obstacle extends _Object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(props) {\n    super(props);\n    this.speed = 12;\n  }\n\n  update(dt) {\n    super.update(dt);\n    this.posX -= this.speed;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Obstacle.js?");

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyStates */ \"./src/js/keyStates.js\");\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object */ \"./src/js/Object.js\");\n\n\nclass Player extends _Object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(props) {\n    super(props);\n    this.upForce = 0;\n    this.downForce = 1;\n    this.jumped = false;\n  }\n\n  update(dt) {\n    super.update(dt);\n\n    if (_keyStates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].space && !this.jumped) {\n      this.jumped = true;\n      this.upForce = 16;\n      this.posY -= this.upForce;\n    } else if (this.jumped) {\n      this.upForce -= this.downForce;\n      this.posY -= this.upForce;\n\n      if (this.posY > this.baseY) {\n        this.posY = this.baseY;\n        this.jumped = false;\n      }\n    }\n  }\n\n} //flappy bird version lol\n// if(keyStates.space) {\n//     this.jumped = true;\n//     this.upForce = 8;\n//     this.posY -= this.upForce;\n// } else {\n//     this.upForce -= this.downForce;\n//     this.posY -= this.upForce;\n//     if (this.posY > this.baseY) {\n//         this.posY = this.baseY;\n//         this.jumped = false;\n//     }\n// }\n\n//# sourceURL=webpack:///./src/js/Player.js?");

/***/ }),

/***/ "./src/js/Scene.js":
/*!*************************!*\
  !*** ./src/js/Scene.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyStates */ \"./src/js/keyStates.js\");\n/* harmony import */ var _gameMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameMedia */ \"./src/js/gameMedia.js\");\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Object */ \"./src/js/Object.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ \"./src/js/Player.js\");\n/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Obstacle */ \"./src/js/Obstacle.js\");\n\n\n\n\n\nlet gameObjects = [];\nconst sceneStates = {\n  on: \"ON\",\n  lose: \"LOSE\",\n  pending: \"PENDING\"\n};\nconst score = document.getElementById(\"score\");\nconst topScore = document.getElementById(\"top-score\");\nclass Scene {\n  constructor(props) {\n    this.ctx = props.ctx;\n    this.requestId = null;\n    this.fps = 60;\n    this.tps = 12;\n    this.lastTime = null;\n    this.lastTileTime = null;\n    this.frameDelay = Math.floor(1000 / this.fps);\n    this.tileDelay = Math.floor(1000 / this.tps);\n    this.sceneStartTime = null;\n    this.sceneState = sceneStates.pending;\n    this.score = 0;\n    this.scoreDelay = 60;\n    this.lastScore = null;\n    this.obstacleDelay = 800;\n    this.lastObstacle = 0;\n    this.loseTime = null;\n    this.restartDelay = 1000;\n    this.topScore = 0;\n    this.frame = this.frame.bind(this);\n  }\n\n  init() {\n    gameObjects = [];\n    this.score = 0;\n    this.sceneState = sceneStates.pending;\n    this.player = this.createObject(_Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: _gameMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player,\n      tileHeight: 32,\n      tileWidth: 48,\n      posX: 32,\n      posY: 168\n    });\n  }\n\n  async start() {\n    await this.init();\n    this.sceneState = sceneStates.pending;\n    this.startSceneLoop();\n    console.log('Scene started.');\n  }\n\n  startSceneLoop() {\n    this.last = this.lastTileTime = performance.now();\n    this.sceneStartTime = performance.now();\n    this.requestId = requestAnimationFrame(this.frame);\n  }\n\n  update(dt) {\n    // this.keyHandler(dt);\n    for (let obj of gameObjects) {\n      if (obj.update) {\n        obj.update(dt);\n      }\n    }\n  }\n\n  refreshTiles(objects) {\n    let dt = performance.now() - this.lastTileTime;\n\n    if (dt > this.tileDelay) {\n      for (let obj of objects) {\n        obj.nextTile();\n      }\n\n      this.lastTileTime = performance.now();\n    }\n  }\n\n  keyHandler(dt) {\n    if (_keyStates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].space) {}\n  }\n\n  render() {\n    this.drawBackground();\n\n    for (let obj of gameObjects) {\n      obj.draw(this.ctx);\n    }\n  }\n\n  drawBackground() {\n    let gradient = this.ctx.createLinearGradient(0, 120, 0, 0);\n    gradient.addColorStop(0, \"rgb(125, 100, 190)\");\n    gradient.addColorStop(1, \"rgb(155, 60, 160, 160)\");\n    this.ctx.fillStyle = gradient;\n    this.ctx.fillRect(0, 0, 640, 240);\n    this.ctx.drawImage(_gameMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].road, 0, 192);\n  }\n\n  frame() {\n    const currentTime = performance.now();\n    let dt = ~~(currentTime - this.lastTime);\n\n    if (dt < this.frameDelay) {\n      this.requestId = requestAnimationFrame(this.frame);\n    } else {\n      switch (this.sceneState) {\n        case \"PENDING\":\n          this.render();\n\n          if (_keyStates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].space) {\n            this.sceneState = sceneStates.on;\n            this.obstacleDelay += 2000;\n            this.lastObstacle = currentTime;\n          }\n\n          break;\n\n        case \"ON\":\n          if (!this.checkCollisions()) {\n            if (currentTime - this.lastObstacle >= this.obstacleDelay) {\n              this.lastObstacle = currentTime;\n              this.obstacleDelay = 600 + Math.floor(Math.random() * 400 + 200);\n              this.createObstacle();\n              this.clearObstacles();\n            }\n\n            if (currentTime - this.lastScore >= this.scoreDelay) {\n              this.lastScore = currentTime;\n              this.score++;\n              score.textContent = this.score;\n            }\n\n            this.update(dt); // this.refreshTiles(gameObjects);\n\n            this.render();\n          } else {\n            this.sceneState = sceneStates.lose;\n            this.loseTime = currentTime;\n\n            if (this.topScore < this.score) {\n              this.topScore = this.score;\n            }\n\n            topScore.textContent = this.topScore;\n          }\n\n          break;\n\n        case \"LOSE\":\n          if (currentTime - this.loseTime >= this.restartDelay && _keyStates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].space) {\n            this.init();\n          }\n\n          break;\n      }\n\n      this.lastTime = performance.now();\n      this.requestId = requestAnimationFrame(this.frame);\n    }\n  }\n\n  createObject(Class, props) {\n    let obj = new Class(props);\n    gameObjects.push(obj);\n    return obj;\n  }\n\n  createObstacle() {\n    const random = Math.random() * 100;\n\n    if (random > 90) {\n      this.createObject(_Obstacle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"OBSTACLE\",\n        image: _gameMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bigObstacle,\n        tileHeight: 32,\n        tileWidth: 64,\n        posX: 640,\n        posY: 168\n      });\n    } else if (random > 80) {\n      this.createObject(_Obstacle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"OBSTACLE\",\n        image: _gameMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mediumObstacle,\n        tileHeight: 32,\n        tileWidth: 32,\n        posX: 640,\n        posY: 64\n      });\n    } else if (random > 75) {\n      this.createObject(_Obstacle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"OBSTACLE\",\n        image: _gameMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mediumObstacle,\n        tileHeight: 32,\n        tileWidth: 32,\n        posX: 640,\n        posY: 128\n      });\n    } else if (random > 70) {\n      this.createObject(_Obstacle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"OBSTACLE\",\n        image: _gameMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mediumObstacle,\n        tileHeight: 32,\n        tileWidth: 32,\n        posX: 640,\n        posY: 168\n      });\n    } else {\n      this.createObject(_Obstacle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"OBSTACLE\",\n        image: _gameMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].smallObstacle,\n        tileHeight: 32,\n        tileWidth: 16,\n        posX: 640,\n        posY: 168\n      });\n    }\n  }\n\n  checkCollisions() {\n    for (let obj of gameObjects) {\n      if (obj.type === \"OBSTACLE\") {\n        if (this.player.rightBorder >= obj.posX && this.player.posX <= obj.rightBorder && this.player.bottomBorder >= obj.posY && this.player.posY <= obj.bottomBorder) {\n          return true;\n        }\n      }\n    }\n  }\n\n  clearObstacles() {\n    const filteredObjects = gameObjects.filter(obj => obj.posX > -obj.tileWidth);\n    gameObjects = [...filteredObjects];\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Scene.js?");

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

/***/ "./src/js/keyStates.js":
/*!*****************************!*\
  !*** ./src/js/keyStates.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet keyStates = {\n  space: false\n};\nwindow.addEventListener(\"keydown\", e => {\n  if (e.keyCode === 32) {\n    keyStates.space = true;\n  }\n}, true);\nwindow.addEventListener(\"keyup\", e => {\n  if (e.keyCode === 32) {\n    keyStates.space = false;\n  }\n}, true);\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyStates);\n\n//# sourceURL=webpack:///./src/js/keyStates.js?");

/***/ })

},[["./src/index.js","runtime"]]]);