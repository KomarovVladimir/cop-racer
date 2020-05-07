import gameMedia from "./gameMedia";

export const imageSources = [
    "./images/player.png",
    "./images/road.png",
    "./images/smallObstacle.png",
    "./images/mediumObstacle.png",
    "./images/bigObstacle.png",
    "./images/road.png",
    "./images/bin.png",
    "./images/road.png"
];

export const fps = 120;
export const tps = 12;

export const sceneStates = {
    on: "ON",
    lose: "LOSE",
    pending: "PENDING"
}

export let obstacleSpeed = 12;

export const stage2 = 700;
export const stage3 = 1400;

export const playerProps = {
    image: gameMedia.player,
    tileHeight: 56,
    tileWidth: 84,
    tilesAmount: 3,
    posX: 32,
    posY: 264
}

export const roadProps = {
    image: gameMedia.road,
    tileHeight: 48,
    tileWidth: 768,
    offset: 128,
    posX: 0,
    posY: 312,
    speed: obstacleSpeed
}

export const bigObstacleProps = {
    type: "OBSTACLE",
    image: gameMedia.bigObstacle,
    speed: obstacleSpeed,
    tileHeight: 32,
    tileWidth: 90,
    posX: 640,
    posY: 168
}

export const mediumObstacleProps = {
    type: "OBSTACLE",
    image: gameMedia.mediumObstacle,
    speed: obstacleSpeed,
    tileHeight: 32,
    tileWidth: 32,
    posX: 640,
    posY: 64
}

export const obstacleProps = {
    type: "OBSTACLE",
    image: gameMedia.bin,
    speed: obstacleSpeed,
    tileHeight: 42,
    tileWidth: 30,
    posX: 640,
    posY: 278
}

