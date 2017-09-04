import { SET_GAME_NUMBERS } from "../action/game.action";
import { IAction } from "../interface/action.interface";
import { IGameNumbers } from "../interface/game-numbers.interface";

export default function gameNumbersReducer(state: IGameNumbers = null, action: IAction) {
  switch (action.type) {

    case SET_GAME_NUMBERS:
      return action.payload;

  }

  return state
}