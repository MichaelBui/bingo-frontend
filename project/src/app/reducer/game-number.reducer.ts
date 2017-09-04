import { SET_GAME_NUMBER } from "../action/game.action";
import { IAction } from "../interface/action.interface";

export default function gameNumberReducer(state: number = null, action: IAction) {
  switch (action.type) {

    case SET_GAME_NUMBER:
      return action.payload;

  }

  return state
}