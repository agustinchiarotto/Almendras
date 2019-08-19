import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {
  receta:boolean=false;
  ancho:any;
  constructor() { }

  ngOnInit() {
    this.ancho=window.innerWidth;
    console.log("El ancho es: "+this.ancho);
    if(this.ancho<414)
    {
        this.receta=true;
    }
  }
  

}
