import * as PIXI from "pixi.js";
const coinImage = PIXI.Sprite.fromImage("/assets/images/coin.gif");
coinImage.interactive = true;
coinImage.hitArea = new PIXI.Rectangle(0, 0, 10, 10);
const w = 20;
const h = 20;

class Coin {
	constructor(width, height) {
		this.CoinX = this.getRandom(0, width);
		this.CoinY = this.getRandom(0, height);
	}

	get getX() {
		return this.CoinX;
	}

	get getY() {
		return this.CoinY;
	}

	getRandom(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	drawCoin(app, x, y) {
		coinImage.anchor.set(0.5);
		coinImage.x = x;
		coinImage.y = y;
		app.stage.addChild(coinImage);
	}
}

export default Coin;
