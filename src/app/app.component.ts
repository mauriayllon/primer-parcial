import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  sw=false;
  platos=[{nombre:'kha soi', 
  stock:1, 
  precio : 20, 
  tipo : 'internacional',
  existe: true
  },{nombre : 'sajta', 
    stock: 2, 
    precio : 42, 
    tipo : 'nacional', 
    existe: true
  },{nombre : 'semla',
   stock: 0, 
   precio : 52, 
   tipo : 'internacional',
   existe: true
  },{nombre : 'silpancho', 
  stock: 45, 
  precio : 5, 
  tipo : 'nacional',
  existe: true
  },{nombre : 'pulao',
  stock: 20, 
  precio : 41, 
  tipo : 'internacional',
  existe: true},
  {nombre : 'saice', 
  stock: 1, 
  precio : 7, 
  tipo : 'nacional',
  existe: true},
  {nombre : 'poutine', 
  stock: 4, 
  precio : 10, 
  tipo : 'internacional',
  existe: true
},{nombre : 'chicharron', 
  stock: 0, 
  precio : 4, 
  tipo : 'nacional',
  existe: true
},{nombre : 'fricase', 
  stock: 33, 
  precio : 47, 
  tipo :'nacional',
  existe: true
},{nombre : 'sushi', 
  stock: 75, precio : 5, 
  tipo : 'internacional',
  existe: true}
]
sumar(platos){
    let aux = 0;
  for(let i=0; i< this.platos.length;i++){
    aux = aux + this.platos[i].stock;
}
    return aux;
}

pedir(nombre:string){
  let index = this.platos.findIndex(s=>s.nombre == nombre);
  this.platos[index].stock = this.platos[index].stock-1;
}
  name = 'Angular ' + VERSION.major;
}
