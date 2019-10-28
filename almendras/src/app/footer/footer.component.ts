import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  movilV:boolean=false;
   anio:number;
   ancho:any;

  constructor() {
    this.anio= new Date().getFullYear();
   }

  ngOnInit() {
    this.ancho=window.innerWidth;
    if(this.ancho<414){
      this.movilV=true
    }
  }

}
