import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider1Component } from './components/provider1/provider1.component';
import { SharedModule } from '../shared/shared.module';
import { ProviderRoutingModule } from './provider-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProviderRoutingModule
  ],
  declarations: [
    Provider1Component
  ],
  exports:[
  ],
})
export class ProviderModule { }