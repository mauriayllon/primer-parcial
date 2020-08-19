import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  @Input() name:string;
  @Input() stock:number;
  @Input() precio:number;
  @Input() existe:boolean;
  @Input() tipo:string;

  constructor() { }

  ngOnInit() {
  }

} 