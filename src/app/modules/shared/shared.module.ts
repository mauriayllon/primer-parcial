import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared1Component } from './components/shared1/shared1.component';
import { Shared2Directive } from './directives/shared2.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Shared1Component,
    Shared2Directive
  ],
  exports:[
    Shared1Component,
    Shared2Directive
  ]
})
export class SharedModule { }