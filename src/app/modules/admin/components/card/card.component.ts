import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  productForm : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.productForm = this.formBuilder.group({
      name:['', [Validators.minLength(3)]],
      size:'',
      stock:'',
      type:['',[Validators.required]],
      urlImage:''
    })
  }

}