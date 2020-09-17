import { Component, OnDestroy,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AmazonService } from '../../../../shared/services/amazon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
 
  products=[];
 
  productForm : FormGroup;
 
  productSubs: Subscription;
  productGetSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;
 
  constructor(private productService: AmazonService, private formBuilder: FormBuilder) {}
 
  ngOnInit() {
   this.productForm = this.formBuilder.group({
      name:['', [Validators.minLength(3)]],
      size:'',
      stock:'',
      type:['',[Validators.required]],
      urlImage:''
    })
  }
 
  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
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
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe():'';
    }

    
 
}