import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  {path:'client', component: ClientComponent},
  {path:'concert', loadChildren: () => import('./modules/concert/concert.module').then(m => m.ConcertModule)},
  {path:'provider', loadChildren: () => import('./modules/provider/provider.module').then(m => m.ProviderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRouting{}