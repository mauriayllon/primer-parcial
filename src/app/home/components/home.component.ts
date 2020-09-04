import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketService } from '../../services/ticket.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products=[];

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  
  constructor(private formBuilder: FormBuilder,private productService: TicketService) { }

  ngOnInit(): void {
    this.productSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }
  ngOnDestroy(){
    this.productSubs ? this.productSubs.unsubscribe():'';
  }

  comprar(nombre:string){
  let index = this.products.findIndex(s=>s.name == nombre);
  this.products[index].stock = this.products[index].stock-1;
  if(this.products[index].stock==0){
    this.products[index].enable==false;
  }
}
}