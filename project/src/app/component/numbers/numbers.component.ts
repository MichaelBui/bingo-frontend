import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { IAppState, STATE_GAME_NUMBERS, STATE_GAME_TIMESTAMPS } from "../../interface/app-state.interface";
import { IGameNumbers } from "../../interface/game-numbers.interface";
import { IJsonResponse } from "../../interface/json-response.interface";
import { GameAction } from "../../action/game.action";
import { HttpClient } from "@angular/common/http";
import { updateGameData } from "../../helper/game.helper";
import { IGameTimestamps } from "../../interface/game-timestamps.interface";

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
  providers: [GameAction],
})
export class NumbersComponent implements OnInit {

  gameNumbers$: Observable<IGameNumbers>;
  gameTimestamps$: Observable<IGameTimestamps>;

  constructor(private store: Store<IAppState>, private gameAction: GameAction, private http: HttpClient) {
    this.gameNumbers$ = this.store.select(appState => appState[STATE_GAME_NUMBERS]);
    this.gameTimestamps$ = this.store.select(appState => appState[STATE_GAME_TIMESTAMPS]);
    updateGameData(this.http, (response: IJsonResponse) => {
      this.gameAction.setGameNumbers(response.data.values);
      this.gameAction.setGameTimestamps(response.data.timestamps);
    }, () => {
      this.gameAction.setGameNumbers(null);
      this.gameAction.setGameTimestamps(null);
    })
  }

  ngOnInit() {
  }

}
