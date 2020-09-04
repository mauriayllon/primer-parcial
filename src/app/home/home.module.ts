import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home.component';
import { TicketService } from '../services/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    NgbModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [
    HomeComponent
    ],
  providers:[
    TicketService
    ],
})
export class HomeModule { }