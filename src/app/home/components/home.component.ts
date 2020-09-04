import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketService } from '../../services/ticket.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 
  products=[];
 
  productForm : FormGroup;
  //nameControl = new FormControl();
 
  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;
 
  constructor(private formBuilder: FormBuilder, private productService: TicketService) {}
 
  ngOnInit() {
    this.loadProduct();
    this.productForm = this.formBuilder.group({
      enable: true,
      name:['', [Validators.minLength(3)]],
      stock:'',
      typee:['',[Validators.required]],
      urlImage:''
    })
  } 
 
  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }
 
  onDelete(id: any): void {
   this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }
 
  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }
 
  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }
 
  onEnviar2(){
    this.loadProduct();
    console.log('Form group: ',this.productForm.value);
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {console.log('Resp: ', res)}, err =>{
        console.log('Error de servidor')
      })
  }
 
  ngOnDestroy(){
    this.productSubs ? this.productSubs.unsubscribe():''; 
    this.productGetSubs ? this.productGetSubs.unsubscribe():'';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe():'';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe():'';
    }

    
 
}
