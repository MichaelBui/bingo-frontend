import { Component, OnInit } from '@angular/core';
import { ActivationDialogComponent } from '../activation-dialog/activation-dialog.component';
import { ResetDialogComponent } from '../reset-dialog/reset-dialog.component';
import { MdDialog } from '@angular/material';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { IAppState } from "../../../interface/app-state.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private gameLevel$: Observable<number>;
  private gameNumber$: Observable<number>;

  constructor(public dialog: MdDialog, private store: Store<IAppState>) {
    this.gameLevel$ = this.store.select(appState => appState.gameLevel);
    this.gameNumber$ = this.store.select(appState => appState.gameNumber);
  }

  ngOnInit() {
  }

  openActivationDialog() {
    this.dialog.open(ActivationDialogComponent);
  }

  openResetDialog() {
    this.dialog.open(ResetDialogComponent);
  }

}
