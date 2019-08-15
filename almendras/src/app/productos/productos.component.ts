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
    imagen2: '../../assets/imagenes/productos/dulces_pasas_choco.jpg',
    size:false, //para ver si es 100% o 50%
    mouse:false // para el mouse over
  },
  {
    nombre: 'PASAS DE UVA',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_pasas_choco.jpg',
    size:false,
    mouse:false
  },
  {
    nombre: 'AVELLANAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_avellana_choco.jpg',
    size:false ,
    mouse:false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'DULCES',
    imagen: '../../assets/imagenes/productos/dulces_alm_dulces.jpg',
    size:true,
    mouse:false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'EN GARRAPINIADA',
    imagen: '../../assets/imagenes/productos/dulces_garra.jpg',
    size:true,
    mouse:false
  }
];

salados = [{
  nombre: 'ALMENDRAS',
  negrita: 'AHUMADAS',
  imagen: '../../assets/imagenes/productos/saladas_ahumadas.jpg',
  mouse:false
},
{
  nombre: 'ALMENDRAS',
  negrita: 'CON OLIVA',
  imagen: '../../assets/imagenes/productos/saladas_oliva.jpg' ,
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON PIMENTON',
  imagen: '../../assets/imagenes/productos/saladas_pimenton.jpg' ,
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON ROMERO',
  imagen: '../../assets/imagenes/productos/saladas_romero.jpg' ,
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'TOSTADAS',
  imagen: '../../assets/imagenes/productos/saladas_tostadas.jpg' ,
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON WASABI',
  imagen: '../../assets/imagenes/productos/saladas_wasabi.jpg' ,
  mouse:false
},
];

naturales = [{
  nombre: 'AVELLANAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_avellanas.jpg' ,
  mouse:false
},
{
  nombre: 'NUECES',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_nueces.jpg' ,
  mouse:false
},{
  nombre: 'MIX',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_mix.jpg' ,
  mouse:false
},{
  nombre: 'PASAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_pasas.jpg' ,
  mouse:false
},{
  nombre: 'TOSTADAS',
  negrita: 'A GRANEL',
  imagen: '../../assets/imagenes/productos/naturales_tostadas_granel.jpg' ,
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'FILETEADAS',
  imagen: '../../assets/imagenes/productos/naturales_alm_fileteadas.jpg' ,
  mouse:false
},
{
  nombre: 'ALMENDRAS',
  negrita: 'ENTERAS',
  imagen: '../../assets/imagenes/productos/naturales_almendras_enteras.jpg' ,
  mouse:false
},
{
  nombre: 'HARINA',
  negrita: 'HARINA 000',
  imagen: '../../assets/imagenes/productos/naturales_harina01.jpg',
  mouse:false
},
{
  nombre: 'HARINA',
  negrita: 'HARINA 0000',
  imagen: '../../assets/imagenes/productos/naturales_harina_02.jpg' ,
  mouse:false
}
];

  ngOnInit() {
  }



mouseEnter(producto:any){
producto.mouse = true;
console.log("entro el mouse en " + producto.nombre);
}

mouseLeave(producto:any){
  producto.mouse = false;
  console.log("salio el mouse en " + producto.nombre);
  }
}
