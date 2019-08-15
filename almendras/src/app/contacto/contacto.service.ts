import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ContactoComponent } from './contacto.component';



@Injectable()
export class ContactoService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private contactoURL = 'http://localhost:4200/';  // URL a la api

    constructor(
        private http: Http,
        
    ) { }

   
    enviarMail(
        nombreC: string,
        apellidoC: string,
        emailC: string,
        telefonoC: string,
        localidadC: string,
        mensajeC: string){
        return this.http.post(this.contactoURL,
            JSON.stringify({
                nombre: nombreC, apellido: apellidoC,
                email: emailC, telefono: telefonoC,localidad: localidadC,
                mensaje: mensajeC
            }), { headers: this.headers })
    }

   
}
