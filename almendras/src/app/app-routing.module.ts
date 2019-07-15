import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'mapa', component: GoogleMapComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
