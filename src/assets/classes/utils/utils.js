import * as PIXI from "pixi.js";

const Container = PIXI.Container,
	autoDetectRenderer = PIXI.autoDetectRenderer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;

let appendToBody = renderer => {
	document.body.appendChild(renderer.view);
};

let getWindowHeight = () => window.innerHeight;

let getWindowWidth = () => window.innerWidth;

let makeRenderer = () => autoDetectRenderer(256, 256);

let makeStage = () => new Container();

let setFullScreen = renderer => {
	//Set the size to full screen
	renderer.view.style.position = "absolute";
	renderer.view.style.display = "block";
	renderer.autoResize = true;
	renderer.resize(getWindowWidth(), getWindowHeight());
};

export {
	appendToBody,
	getWindowHeight,
	getWindowWidth,
	makeRenderer,
	makeStage,
	setFullScreen
};
