import { IGameNumbers } from "./game-numbers.interface";
import { IGameTimestamps } from "./game-timestamps.interface";

export const STATE_GAME_LEVEL = 'gameLevel';
export const STATE_GAME_NUMBER = 'gameNumber';
export const STATE_GAME_NUMBERS = 'gameNumbers';
export const STATE_GAME_TIMESTAMPS = 'gameTimestamps$';

export interface IAppState {
  gameLevel: number;
  gameNumber: number;
  gameNumbers: IGameNumbers;
  gameTimestamps: IGameTimestamps;
}