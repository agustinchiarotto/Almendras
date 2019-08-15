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
  negrita: 'AHUMADAS',
  imagen: '../../assets/imagenes/productos/saladas_ahumadas.jpg' 
},
{
  nombre: 'ALMENDRAS',
  negrita: 'CON OLIVA',
  imagen: '../../assets/imagenes/productos/saladas_oliva.jpg' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON PIMENTON',
  imagen: '../../assets/imagenes/productos/saladas_pimenton.jpg' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON ROMERO',
  imagen: '../../assets/imagenes/productos/saladas_romero.jpg' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'TOSTADAS',
  imagen: '../../assets/imagenes/productos/saladas_tostadas.jpg' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON WASABI',
  imagen: '../../assets/imagenes/productos/saladas_wasabi.jpg' 
},
];

naturales = [{
  nombre: 'AVELLANAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_avellanas.jpg' 
},
{
  nombre: 'NUECES',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_nueces.jpg' 
},{
  nombre: 'MIX',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_mix.jpg' 
},{
  nombre: 'PASAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_pasas.jpg' 
},{
  nombre: 'TOSTADAS',
  negrita: 'A GRANEL',
  imagen: '../../assets/imagenes/productos/naturales_tostadas_granel.jpg' 
},{
  nombre: 'ALMENDRAS',
  negrita: 'FILETEADAS',
  imagen: '../../assets/imagenes/productos/naturales_alm_fileteadas.jpg' 
},
{
  nombre: 'ALMENDRAS',
  negrita: 'ENTERAS',
  imagen: '../../assets/imagenes/productos/naturales_almendras_enteras.jpg' 
},
{
  nombre: 'HARINA',
  negrita: 'HARINA 000',
  imagen: '../../assets/imagenes/productos/naturales_harina01.jpg'
},
{
  nombre: 'HARINA',
  negrita: 'HARINA 0000',
  imagen: '../../assets/imagenes/productos/naturales_harina_02.jpg' 
}
];

  ngOnInit() {
  }
//arreglo con ngfor
}
