import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  movil:boolean=false;
  ancho:any;

  constructor() { }

  ngOnInit() {

    this.ancho=window.innerWidth;
    console.log("El ancho es: "+this.ancho);
    if(this.ancho<414)
    {
        this.movil=true;
    }
  }
  

}
