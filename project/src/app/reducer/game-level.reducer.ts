import { NEXT_GAME_LEVEL, SET_GAME_LEVEL } from "../action/game.action";
import { IAction } from "../interface/action.interface";

export default function gameStatusReducer(state: number = -1, action: IAction) {
  switch (action.type) {

    case SET_GAME_LEVEL:
      return action.payload;

    case NEXT_GAME_LEVEL:
      return state + 1;
  }

  return state
}