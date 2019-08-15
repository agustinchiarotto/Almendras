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
    imagen: '../../assets/imagenes/productos/dulces_alm_choco.jpg' ,
    size:false //para ver si es 100% o 50%
  },
  {
    nombre: 'PASAS DE UVA',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_pasas_choco.jpg',
    size:false
  },
  {
    nombre: 'AVELLANAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_avellana_choco.jpg',
    size:false 
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'DULCES',
    imagen: '../../assets/imagenes/productos/dulces_alm_dulces.jpg',
    size:true
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'EN GARRAPINIADA',
    imagen: '../../assets/imagenes/productos/dulces_garra.jpg',
    size:true
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
