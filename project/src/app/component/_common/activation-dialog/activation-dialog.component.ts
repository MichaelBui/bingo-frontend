import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlHelper } from '../../../helper/url.helper';
import { clearGameKey, getGameKey, setGameKey } from '../../../helper/game.helper';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-activation-dialog',
  templateUrl: './activation-dialog.component.html',
  styleUrls: ['./activation-dialog.component.scss']
})
export class ActivationDialogComponent implements OnInit {
  gameKey: string;

  constructor(
    public dialogRef: MdDialogRef<ActivationDialogComponent>,
    private http: HttpClient
  ) {
    this.gameKey = getGameKey();
  }

  ngOnInit() {
  }

  startActivation(gameKey: string) {
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + gameKey)
      .set('Content-Type', 'application/json');
    this.http.post(urlHelper('/secured/activate'), {}, {headers})
      .subscribe(() => {
        setGameKey(gameKey);
        localStorage.setItem('gameLevel', '0');
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
