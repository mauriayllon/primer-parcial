import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AmazonService } from '../../shared/services/amazon.service';
import { AuthService } from '../../shared/services/auth.service';
import { AddProduct } from './store/admin.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productGetSubs: Subscription;
  reportSubs: Subscription;
  products=[];
  report=[];
  sw:boolean;
  constructor(private authService: AuthService, private amazonService:AmazonService,private store: Store<any>) {

   }

  public ngOnInit():void {
    this.loadProduct();
    this.sw=null;
    this.reportSubs=this.store.select(s => s.home).subscribe(
      res =>{
        console.log('ppp',res);
        this.report = Object.assign([],res.items);
      }
    );
  }
  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.amazonService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  public onLogout():void{
    this.authService.logout();
  }

  onReport(){
    this.sw=true;
    this.store.dispatch(AddProduct({product: {
    "total":this.sumar(),
    "hot": this.sumarHot(), 
    "cold": this.sumarCold()
    }}));
  }
  ngOnDestroy(){
    this.productGetSubs ? this.productGetSubs.unsubscribe():'';}

  sumar(){
    let aux = 0;
    for(let i=0; i< this.products.length;i++){
      aux = aux + parseFloat(this.products[i].stock);
  }
     return aux;
  }

  sumarCold(){
  let aux1 = 0;
    for(let i=0; i< this.products.length;i++){
      if(this.products[i].type=="frio"){
        aux1 = aux1 + parseFloat(this.products[i].stock);
        console.log('Frio',aux1);

      }
    }
     return aux1;
  }
  sumarHot(){
  let aux2 = 0;
    for(let i=0; i< this.products.length;i++){
      if(this.products[i].type=="calor"){
        aux2 = aux2 + parseFloat(this.products[i].stock);
        console.log('Calor',aux2);
      }
   }
    return aux2;
  }

}