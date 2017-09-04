import { HttpClient } from '@angular/common/http';
import { urlHelper } from './url.helper';
import { IJsonResponse } from '../interface/json-response.interface';

export const NAME_GAME_STATUS = 'gameLevel';
export const NAME_GAME_KEY = 'gameKey';
export const VALUE_GAME_INACTIVATED = '-1';

export function updateGameData(http: HttpClient, onSuccess, onError) {
  http.get(urlHelper('/numbers')).subscribe(onSuccess, onError)
}

export function setGameKey(key: string) {
  localStorage.setItem(NAME_GAME_KEY, key);
}

export function getGameKey(): string {
  return localStorage.getItem(NAME_GAME_KEY);
}

export function clearGameKey() {
  localStorage.removeItem(NAME_GAME_KEY);
}
