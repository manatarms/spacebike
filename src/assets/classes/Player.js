import * as PIXI from "pixi.js";
const playerImage = PIXI.Sprite.fromImage("/assets/images/player.png");
playerImage.interactive = true;
playerImage.hitArea = new PIXI.Rectangle(0, 0, 10, 10);

class Player {
	constructor() {
		this.currentX = 0;
		this.currentY = 0;
	}

	get getX() {
		return this.currentX;
	}

	get getY() {
		return this.currentY;
	}

	get getCanRun() {
		return this.canRun;
	}

	set setX(newX) {
		this.currentX = newX;
	}

	set setY(newY) {
		this.currentY = newY;
	}

	drawPlayer(app, x, y) {
		playerImage.anchor.set(0.5);
		playerImage.x = x;
		playerImage.y = y;
		app.stage.addChild(playerImage);
	}
}

export default Player;
