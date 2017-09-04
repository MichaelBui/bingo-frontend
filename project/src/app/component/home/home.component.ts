import { Component, OnInit } from '@angular/core';
import { getGameKey, updateGameData } from '../../helper/game.helper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IJsonResponse } from '../../interface/json-response.interface';
import { urlHelper } from '../../helper/url.helper';
import { Store } from '@ngrx/store';
import { IAppState, STATE_GAME_LEVEL, STATE_GAME_NUMBER } from "../../interface/app-state.interface";
import { Observable } from "rxjs/Observable";
import { GameAction } from "../../action/game.action";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  gameLevel$: Observable<number>;
  gameNumber$: Observable<number>;

  gameKey: string;

  constructor(
    public http: HttpClient,
    private store: Store<IAppState>,
    private gameAction: GameAction,
  ) {
    this.gameKey = getGameKey();
    this.gameLevel$ = this.store.select(appState => appState[STATE_GAME_LEVEL]);
    this.gameNumber$ = this.store.select(appState => appState[STATE_GAME_NUMBER]);
  }

  ngOnInit() {
  }

  generateGameNumber(gameKey) {
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + gameKey)
      .set('Content-Type', 'application/json');
    this.http.post(urlHelper('/secured/numbers'), {}, {headers})
      .subscribe((response: IJsonResponse) => {
        this.gameAction.setGameNumber(response.data);
        this.gameAction.nextGameLevel();
      }, () => {
        alert('Unknown Error!!!');
      })
  }

}
