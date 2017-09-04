import { Component } from '@angular/core';
import { IJsonResponse } from "./interface/json-response.interface";
import { getGameKey, updateGameData } from "./helper/game.helper";
import { HttpClient } from "@angular/common/http";
import { GameAction } from "./action/game.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameAction],
})
export class AppComponent {
  gameKey: string;
  constructor(public http: HttpClient, public gameAction: GameAction) {
    this.gameKey = getGameKey();
    updateGameData(this.http, (response: IJsonResponse) => {
      this.gameAction.setGameNumber(response.data.values[response.data.values.length - 1]);
      this.gameAction.setGameLevel(response.data.values.length);
    }, () => {
      this.gameAction.setGameNumber(null);
      this.gameAction.setGameLevel(-1);
    })
  }
}
