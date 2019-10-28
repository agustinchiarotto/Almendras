import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ContactoComponent } from './contacto.component';
import { Mail } from './mail';



@Injectable()
export class ContactoService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private contactoURL = 'http://localhost:4000/contacto';  // URL a la api

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
            console.log("Enviar mail de servicio");
        return this.http.post(this.contactoURL,
            JSON.stringify({
                nombre: nombreC, apellido: apellidoC,
                email: emailC, telefono: telefonoC,localidad: localidadC,
                mensaje: mensajeC
            }), { headers: this.headers }).toPromise()
            .then(response => response.json().obj as Mail)
            .catch(this.handleError);
    }
    handleError(handleError: any) {
        throw new Error("Method not implemented.");
    }

   
}
