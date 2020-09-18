import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmazonService } from '../../../../shared/services/amazon.service';
import { AdminComponent } from '../../admin.component';
import { CardComponent } from '../card/card.component';
 
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  sw2=true;
  sw3:boolean;
  productsCarlor=[];
  productsFrio=[];
  sw:boolean;
  productFormm : FormGroup;

  @Input() var: string='a';
  //nameControl = new FormControl();
 
  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;
 
  constructor(private productService: AmazonService, private formBuilder: FormBuilder, private adminComponent: AdminComponent) {
    this.var='e';
  }
 
  ngOnInit() {
    this.sw2=true;
    this.loadProduct(true);
     this.productFormm = this.formBuilder.group({
      name:['', [Validators.minLength(3)]],
      size:['',[Validators.required]],
      stock:['',[Validators.required]],
      type:['',[Validators.required]],
      urlImage:['',[Validators.required]]
    })
  } 
 
  loadProduct(s:boolean): void {
      console.log('hola chozzp');
      console.log(this.var);
      if(s){
      this.productsCarlor = [];
      this.productsFrio= [];
      this.productGetSubs = this.productService.getProducts().subscribe(res => {
        Object.entries(res).map((p: any) => {
        if (p[1].type=='calor') {
          this.productsCarlor.push({id: p[0], ...p[1]});
        } else {
          this.productsFrio.push({id: p[0], ...p[1]});
        }
      });
    });
  }else{
    console.log('False');
    console.log(this.var);
    this.productsCarlor = [];
    this.productsFrio= [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => {
        if (p[1].type=='calor' && p[1].name.includes(this.var)) {
          this.productsCarlor.push({id: p[0], ...p[1]});
        } else if (p[1].type=='frio' && p[1].name.includes(this.var)){
          this.productsFrio.push({id: p[0], ...p[1]});
        }
      });
    });
  }
  }
 
  onDelete(id: any): void {
   this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct(true);
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }
 
  onEdit(product): void {
    this.idEdit = product.id;
    this.productFormm.patchValue(product);
  }
 
  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productFormm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct(true);
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }
 
  onEnviar2(){
    console.log('Form group: ',this.productFormm.value);
    this.productSubs = this.productService.addProduct(this.productFormm.value).subscribe(
      res => {console.log('Resp: ', res),
       this.loadProduct(true);}, err =>{
        console.log('Error de servidor')
      })
  }
 
  ngOnDestroy(){
    this.productSubs ? this.productSubs.unsubscribe():''; 
    this.productGetSubs ? this.productGetSubs.unsubscribe():'';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe():'';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe():'';
    }

    onSaveProduct(){
      if(this.sw){
        this.productSubs = this.productService.addProduct(this.productFormm.value).subscribe(
      res => {console.log('Resp: ', res),
       this.loadProduct(true);}, err =>{
        console.log('Error de servidor')
      })
      }else{
        this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productFormm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct(true);
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
      }
    }
    onReport(){
      this.sw2=false;
      console.log('pp')
      this.adminComponent.onReport();
    }

    onSearch(name:string){
      this.var=name;
      this.sw3=false;
      this.loadProduct(false);
    }
 
}