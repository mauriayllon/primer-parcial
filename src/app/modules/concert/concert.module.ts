import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Concert1Component } from './components/concert1/concert1.component';
import { SharedModule } from '../shared/shared.module';
import { ConcertRoutingModule } from './concert-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConcertRoutingModule
  ],
  declarations: [
    Concert1Component
  ]
})
export class ConcertModule { }