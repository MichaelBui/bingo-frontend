import { SET_GAME_TIMESTAMPS } from "../action/game.action";
import { IAction } from "../interface/action.interface";
import { IGameTimestamps } from "../interface/game-timestamps.interface";

export default function gameNumbersReducer(state: IGameTimestamps = null, action: IAction) {
  switch (action.type) {

    case SET_GAME_TIMESTAMPS:
      return action.payload;

  }

  return state
}