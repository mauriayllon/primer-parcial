import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HomeModule } from './home/home.module';





@NgModule({
  imports:      [ 
   BrowserModule,
   FormsModule, 
   AppRouting,
   HomeModule,
   ],
  declarations: [ 
   AppComponent, 
    ],
  bootstrap:    [ 
   AppComponent 
    ],
  providers: []
})
export class AppModule { }
