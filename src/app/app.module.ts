import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RoutingModule } from './modules/routing/routing.module';
import { AppRouting } from './app.routing';

@NgModule({
  imports:      [ 
   BrowserModule,
   FormsModule,
   AppRouting
   ],
  declarations: [ 
   AppComponent
    ],
  bootstrap:    [ 
   AppComponent 
    ]
})
export class AppModule { }
