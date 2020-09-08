import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Concert1Component } from './components/concert1/concert1.component';

const routes: Routes = [
  {path:'', component: Concert1Component}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcertRoutingModule{}