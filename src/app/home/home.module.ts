import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home.component';
import { TicketService } from '../services/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent
    ],
  providers:[
    TicketService
    ],
})
export class HomeModule { }