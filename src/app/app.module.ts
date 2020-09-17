import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from 
'@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule, } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {metaReducers} from './core/meta';
import {reducers} from './core';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    MatSliderModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name: 'Angular Course', logOnly: environment.production})
  ], 
  exports: [],
  bootstrap: [AppComponent],
  providers: [
  ]
})
export class AppModule { } 
