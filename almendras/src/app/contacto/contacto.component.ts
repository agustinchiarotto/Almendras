import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoService } from "./contacto.service";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {


  model: any = {};

  constructor(
    private contactoService:ContactoService
  ) { 
    
  }

  ngOnInit() {
  }



  enviarMail(f: NgForm){
    console.log("envio un mail  CON " + this.model.nombre
    +this.model.apellido
    +this.model.tel
    +this.model.localidad
    +this.model.email
    );
    this.contactoService.enviarMail(this.model.nombre,this.model.apellido,this.model.email,this.model.tel,this.model.localidad,this.model.mensaje)

  }

}
