import * as PIXI from "pixi.js";
import init from "./assets/classes/utils/init.js";
import Coin from "./assets/classes/Coin.js";
import Player from "./assets/classes/Player.js";

import Keyboard from "./assets/classes/Keyboard.js";

const playerImage = "assets/images/player.png";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
//Aliases
const Container = PIXI.Container,
	autoDetectRenderer = PIXI.autoDetectRenderer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;

let playerSprite, state;

// Init the game
const game = init();
const stage = game.stage;
const renderer = game.renderer;

//Use Pixi's built-in `loader` object to load an image
loader.add(playerImage).on("progress", loadProgressHandler).load(setup);

//This `setup` function will run when the image has loaded
function setup() {
	//Set the game state
	state = play;

	//Create the `playerSprite` sprite from the texture
	playerSprite = new Sprite(resources[playerImage].texture);

	//Initialize the playerSprite's velocity variables
	playerSprite.vx = 0;
	playerSprite.vy = 0;
	//Change the sprite's size
	playerSprite.anchor.set(0.5, 0.5);

	//Add the playerSprite to the stage
	stage.addChild(playerSprite);

	//set up keyboard
	//Capture the keyboard arrow keys
	let left = Keyboard(37),
		up = Keyboard(38),
		right = Keyboard(39),
		down = Keyboard(40);

	//Left arrow key `press` method
	left.press = function() {
		//Change the playerSprite's velocity when the key is pressed
		playerSprite.vx = -5;
		playerSprite.vy = 0;
		playerSprite.rotation = -1.5708;
	};

	//Left arrow key `release` method
	left.release = function() {
		//If the left arrow has been released, and the right arrow isn't down,
		//and the playerSprite isn't moving vertically:
		//Stop the playerSprite
		if (!right.isDown && playerSprite.vy === 0) {
			//	playerSprite.vx = 0;
		}
	};

	//Right
	right.press = function() {
		playerSprite.vx = 5;
		playerSprite.vy = 0;
		playerSprite.rotation = 1.5708;
	};
	right.release = function() {
		if (!left.isDown && playerSprite.vy === 0) {
			//playerSprite.vx = 0;
		}
	};

	//Up
	up.press = function() {
		playerSprite.vy = -5;
		playerSprite.vx = 0;
		playerSprite.rotation = 0;
	};
	up.release = function() {
		if (!down.isDown && playerSprite.vx === 0) {
			//playerSprite.vy = 0;
		}
	};

	//Down
	down.press = function() {
		playerSprite.vy = 5;
		playerSprite.vx = 0;
		playerSprite.rotation = 3.14159;
	};
	down.release = function() {
		if (!up.isDown && playerSprite.vx === 0) {
			//playerSprite.vy = 0;
		}
	};

	//Start the game loop
	gameLoop();
}

function gameLoop() {
	//Loop this function 60 times per second
	requestAnimationFrame(gameLoop);

	//Update the current game state:
	state();

	//Render the stage
	renderer.render(stage);
}

function play() {
	//Move the playerSprite 1 pixel per frame
	if (playerSprite.x < 0) {
		playerSprite.x = windowWidth;
	}

	if (playerSprite.y < 0) {
		playerSprite.y = windowHeight;
	}

	if (playerSprite.x > windowWidth) {
		playerSprite.x = 0;
	}
	if (playerSprite.y > windowHeight) {
		playerSprite.y = 0;
	}
	playerSprite.x += playerSprite.vx;
	playerSprite.y += playerSprite.vy;
}

//TODO Add a progress bar

function loadProgressHandler(loader, resource) {
	//Display the file `url` currently being loaded
	console.log("loading: " + resource.url);

	//Display the precentage of files currently loaded
	console.log("progress: " + loader.progress + "%");

	//If you gave your files names as the first argument
	//of the `add` method, you can access them like this
}
