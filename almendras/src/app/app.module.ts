import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ProductosComponent } from './productos/productos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import {ContactoService } from './contacto/contacto.service'


import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ProductosComponent,
    RecetasComponent,
    ContactoComponent,
    GoogleMapComponent,
    NosotrosComponent
  ],
  imports: [FormsModule ,HttpModule,    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiUl0t3_wkX1n_bRWaUhsKrPoQKucR9co'
    }),
  ],
  providers: [ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
