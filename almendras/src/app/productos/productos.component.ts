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
    imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
  },
  {
    nombre: 'PASAS DE UVA',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/caja_pasas_chocolate.png' 
  },
  {
    nombre: 'AVELLANAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/caja_pasas_uva.png' 
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/caja_avellanas_chocolate.png' 
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
