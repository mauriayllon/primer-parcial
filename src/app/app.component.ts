import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  platos=[{
nombre : 'khao soi', stock:1, precio : 20, tipo : 'internacional'
},{
nombre : 'sajta' , stock: 2, precio : 42, tipo : 'nacional',existe: true
},{
nombre : 'semla', stock: 0, precio : 52, tipo : 'internacional',existe: true
},{
nombre : 'silpancho', stock: 45, precio : 5, tipo : 'nacional',existe: true
},{
nombre : 'pulao', stock: 20, precio : 41, tipo : 'internacional',existe: true
},{
nombre : 'saice', stock: 1, precio : 7, tipo : 'nacional',existe: true
},{
nombre : 'poutine', stock: 4, precio : 10, tipo : 'internacional',existe: true
},{
nombre : 'chicharron', stock: 0, precio : 4, tipo : 'nacional',existe: true
},
{nombre : 'fricase', stock: 33, precio : 47, tipo :'nacional',existe: true
},
{
nombre : 'sushi', stock: 75, precio : 5, tipo : 'internacional',existe: true}

]
  name = 'Angular ' + VERSION.major;
}
