import { moveStageHandler } from "./stage.handler";
import { gameEnd, gameStart } from "./game.handler";

const HandlerMappings = {
    2: gameStart,
    3: gameEnd,
    11: moveStageHandler,
};

export default HandlerMappings;