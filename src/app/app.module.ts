import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DishModule } from './modules/dish/dish.module';
import { ProviderModule } from './modules/provider/provider.module';




@NgModule({
  imports:      [ 
   BrowserModule,
   FormsModule, 
   DishModule, 
   ProviderModule],
  declarations: [ 
   AppComponent 
    ],
  bootstrap:    [ 
   AppComponent 
    ]
})
export class AppModule { }
