import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  dulces = [{
    nombre: 'ALMENDRAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/dulces_alm_choco.jpg' 
  },
  {
    nombre: 'PASAS DE UVA',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/dulces_pasas_choco.jpg' 
  },
  {
    nombre: 'AVELLANAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/dulces_avellana_choco.jpg' 
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'DULCES',
    imagen: '../../assets/imagenes/dulces_alm_dulces.jpg' 
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'EN GARRAPINIADA',
    imagen: '../../assets/imagenes/dulces_garra.jpg' 
  }
];

salados = [{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},
{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},
];

naturales = [{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},
{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},
];

harinas = [{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},
{
  nombre: 'ALMENDRAS',
  negrita: 'CON CHOCOLATE',
  imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
},
];

  ngOnInit() {
  }
//arreglo con ngfor
}
