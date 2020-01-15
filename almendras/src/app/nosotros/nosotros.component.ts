import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  movil = false;
  ancho: any;
  historia = false;
  compromiso = false;
  tecnologia = false;
  calidad = false;

  constructor() { }

  ngOnInit() {

    this.ancho = window.innerWidth;
    console.log('El ancho es: ' + this.ancho);
    if (this.ancho < 414) {
        this.movil = true;
    }
  }

  onclickHistoria() {
    this.historia=true;
    this.tecnologia=false;
    this.calidad=false;
    this.compromiso=false;
  }

  onclickCompromiso() {
    this.compromiso=true;
    this.historia=false;
    this.tecnologia=false;
    this.calidad=false;
    
  }

  onclickTecnologia() {
    this.tecnologia=true;
    this.historia=false;
    this.calidad=false;
    this.compromiso=false;
  }

  onclickCalidad() {
    this.historia=false;
    this.tecnologia=false;
    this.calidad=true;
    this.compromiso=false;
  }


}
