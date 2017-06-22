import * as utils from "./utils.js";

let init = () => {
	let stage = utils.makeStage();
	let renderer = utils.makeRenderer();

	utils.setFullScreen(renderer);
	utils.appendToBody(renderer);

	return {
		stage,
		renderer
	};
};

export default init;
