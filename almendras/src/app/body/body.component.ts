import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  movil:boolean = false;
  ancho;
  constructor() { }

  ngOnInit() {
    this.ancho=window.innerWidth;
    if(this.ancho<415){
      this.movil=true
    }
  }

}
