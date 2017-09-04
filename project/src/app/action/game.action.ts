import { Store } from "@ngrx/store";
import { IAppState } from "../interface/app-state.interface";
import { Injectable } from "@angular/core";
import { IGameNumbers } from "../interface/game-numbers.interface";
import { IGameTimestamps } from "../interface/game-timestamps.interface";

export const SET_GAME_LEVEL = 'SET_GAME_LEVEL';
export const NEXT_GAME_LEVEL = 'NEXT_GAME_LEVEL';
export const SET_GAME_NUMBER = 'SET_GAME_NUMBER';
export const SET_GAME_NUMBERS = 'SET_GAME_NUMBERS';
export const SET_GAME_TIMESTAMPS = 'SET_GAME_TIMESTAMPS';

@Injectable()
export class GameAction {

  constructor(private store: Store<IAppState>) {
  }

  setGameLevel(status: number) {
    this.store.dispatch({
      type: SET_GAME_LEVEL,
      payload: status
    })
  }

  nextGameLevel() {
    this.store.dispatch({
      type: NEXT_GAME_LEVEL
    })
  }

  setGameNumber(number: number) {
    this.store.dispatch({
      type: SET_GAME_NUMBER,
      payload: number
    })
  }

  setGameNumbers(numbers: IGameNumbers) {
    this.store.dispatch({
      type: SET_GAME_NUMBERS,
      payload: numbers
    })
  }

  setGameTimestamps(numbers: IGameTimestamps) {
    this.store.dispatch({
      type: SET_GAME_TIMESTAMPS,
      payload: numbers
    })
  }
}
