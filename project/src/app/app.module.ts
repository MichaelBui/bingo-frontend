import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdIconModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdMenuModule,
  MdToolbarModule,
  MdCardModule,
  MdDialogModule,
  MdInputModule,
} from '@angular/material'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/_common/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ActivationDialogComponent } from './component/_common/activation-dialog/activation-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetDialogComponent } from './component/_common/reset-dialog/reset-dialog.component';
import { NumbersComponent } from './component/numbers/numbers.component';
import gameLevelReducer from "./reducer/game-level.reducer";
import gameNumberReducer from "./reducer/game-number.reducer";
import gameNumbersReducer from "./reducer/game-numbers.reducer";
import gameTimestampsReducer from "./reducer/game-timestamps.reducer";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'numbers', component: NumbersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ActivationDialogComponent,
    ResetDialogComponent,
    NumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FlexLayoutModule,
    MdIconModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdDialogModule,
    MdInputModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      gameLevel: gameLevelReducer,
      gameNumber: gameNumberReducer,
      gameNumbers: gameNumbersReducer,
      gameTimestamps: gameTimestampsReducer,
    }),
    StoreDevtoolsModule.instrument(<StoreDevtoolsOptions>{
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ActivationDialogComponent, ResetDialogComponent],
})
export class AppModule {
}
