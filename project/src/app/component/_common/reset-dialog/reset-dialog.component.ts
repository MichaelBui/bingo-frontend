import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { clearGameKey, getGameKey, setGameKey, VALUE_GAME_INACTIVATED } from '../../../helper/game.helper';
import { urlHelper } from '../../../helper/url.helper';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-reset-dialog',
  templateUrl: './reset-dialog.component.html',
  styleUrls: ['./reset-dialog.component.scss']
})
export class ResetDialogComponent implements OnInit {

  gameKey: string;

  constructor(
    public dialogRef: MdDialogRef<ResetDialogComponent>,
    private http: HttpClient
  ) {
    this.gameKey = getGameKey();
  }

  ngOnInit() {
  }

  startResetting(gameKey: string) {
    console.log(gameKey);
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + gameKey)
      .set('Content-Type', 'application/json');
    this.http.post(urlHelper('/secured/reset'), {}, {headers})
      .subscribe(() => {
        setGameKey(gameKey);
        localStorage.setItem('gameLevel', VALUE_GAME_INACTIVATED);
        location.reload();
      }, (error) => {
        clearGameKey();
        alert(error.error.message || 'Unknown Error!');
      })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
