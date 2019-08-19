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
    imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
    size:false, //para ver si es 100% o 50%
    mouse:false // para el mouse over
  },
  {
    nombre: 'PASAS DE UVA',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_pasas_choco.jpg',
    imagen2: '../../assets/imagenes/etiquetas/pasas_chocolate.jpg',
    size:false,
    mouse:false
  },
  {
    nombre: 'AVELLANAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_avellana_choco.jpg',
    imagen2: '../../assets/imagenes/etiquetas/avellanas_chocolate.jpg',
    size:false ,
    mouse:false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'DULCES',
    imagen: '../../assets/imagenes/productos/dulces_alm_dulces.jpg',
    imagen2: '../../assets/imagenes/etiquetas/almendras_dulces.jpg',
    size:true,
    mouse:false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'EN GARRAPINIADA',
    imagen: '../../assets/imagenes/productos/dulces_garra.jpg',
    imagen2: '../../assets/imagenes/etiquetas/almendras_garrapinadas.jpg',
    size:true,
    mouse:false
  }
];

salados = [{
  nombre: 'ALMENDRAS',
  negrita: 'AHUMADAS',
  imagen: '../../assets/imagenes/productos/saladas_ahumadas.jpg',
  imagen2: '../../assets/imagenes/etiquetas/almendras_ahumadas.jpg',
  mouse:false
},
{
  nombre: 'ALMENDRAS',
  negrita: 'CON OLIVA',
  imagen: '../../assets/imagenes/productos/saladas_oliva.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_oliva.jpg',
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON PIMENTON',
  imagen: '../../assets/imagenes/productos/saladas_pimenton.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_pimenton.jpg',
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON ROMERO',
  imagen: '../../assets/imagenes/productos/saladas_romero.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_romero.jpg',
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'TOSTADAS',
  imagen: '../../assets/imagenes/productos/saladas_tostadas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_tostadas.jpg',
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON WASABI',
  imagen: '../../assets/imagenes/productos/saladas_wasabi.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_wasabi.jpg',
  mouse:false
},
];

naturales = [{
  nombre: 'AVELLANAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_avellanas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
  mouse:false
},
{
  nombre: 'NUECES',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_nueces.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/nueces_mariposa.jpg',
  mouse:false
},{
  nombre: 'MIX',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_mix.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/mix.jpg',
  mouse:false
},{
  nombre: 'PASAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_pasas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/pasas.jpg',
  mouse:false
},{
  nombre: 'TOSTADAS',
  negrita: 'A GRANEL',
  imagen: '../../assets/imagenes/productos/naturales_tostadas_granel.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
  mouse:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'FILETEADAS',
  imagen: '../../assets/imagenes/productos/naturales_alm_fileteadas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
  mouse:false
},
{
  nombre: 'ALMENDRAS',
  negrita: 'ENTERAS',
  imagen: '../../assets/imagenes/productos/naturales_almendras_enteras.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_enteras.jpg',
  mouse:false
},
{
  nombre: 'HARINA',
  negrita: 'HARINA 000',
  imagen: '../../assets/imagenes/productos/naturales_harina01.jpg',
  imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
  mouse:false
},
{
  nombre: 'HARINA',
  negrita: 'HARINA 0000',
  imagen: '../../assets/imagenes/productos/naturales_harina_02.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
  mouse:false
}
];

  ngOnInit() {
  }



mouseEnter(producto:any){
producto.mouse = true;
this.cambiarImagen(producto);
console.log("entro el mouse en " + producto.nombre);
}

mouseLeave(producto:any){
  this.devolverImagen(producto);
  producto.mouse = false;
  console.log("salio el mouse en " + producto.nombre);
  }

 cambiarImagen(producto:any){
   let aux = producto.imagen;
   producto.imagen = producto.imagen2;
   producto.imagen2 = aux;

 }

devolverImagen(producto:any){
  let aux = producto.imagen;
  producto.imagen = producto.imagen2;
  producto.imagen2 = aux;

 }

  
}
