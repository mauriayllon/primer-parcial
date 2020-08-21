import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dish1Component } from './components/dish1/dish1.component';
import { Dish2Component } from './components/dish2/dish2.component';
import { ClientModule } from '../client/client.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ClientModule,
    SharedModule
  ],
  declarations: [
    Dish1Component,
   Dish2Component],
  exports:[
    Dish1Component, 
    Dish2Component]
})
export class DishModule { }