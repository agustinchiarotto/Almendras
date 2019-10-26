import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  movil:boolean = false;
  mostrarDulces:boolean = false;
  mostrarNaturales:boolean = false;
  mostrarSalados:boolean = false;
  dulces = [{
    nombre: 'ALMENDRAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_alm_choco.jpg' ,
    imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
    imagenCE: '../../assets/imagenes/etiquetas/almendras_chocolate_CE.png',
    size:false, //para ver si es 100% o 50%
    mouse:false, // para el mouse over
    click:false, // para ver si ponemos el coso marron o no
  
  },
  {
    nombre: 'PASAS DE UVA',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_pasas_choco.jpg',
    imagen2: '../../assets/imagenes/etiquetas/pasas_chocolate.jpg',
    imagenCE: '../../assets/imagenes/etiquetas/pasas_chocolate_CE.png',
    size:false,
    mouse:false,
    click:false
  },
  {
    nombre: 'AVELLANAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_avellana_choco.jpg',
    imagen2: '../../assets/imagenes/etiquetas/avellanas_chocolate.jpg',
    imagenCE: '../../assets/imagenes/etiquetas/avellana_chocolate_CE.png',
    size:false ,
    mouse:false,
    click:false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'DULCES',
    imagen: '../../assets/imagenes/productos/dulces_alm_dulces.jpg',
    imagen2: '../../assets/imagenes/etiquetas/almendras_dulces.jpg',
    imagenCE: '../../assets/imagenes/etiquetas/almendras_dulces_CE.png',
    size:true,
    mouse:false,
    click:false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'EN GARRAPINIADA',
    imagen: '../../assets/imagenes/productos/dulces_garra.jpg',
    imagen2: '../../assets/imagenes/etiquetas/almendras_garrapinadas.jpg',
    imagenCE: '../../assets/imagenes/etiquetas/almendras_garrapinadas_CE.png',
    size:true,
    mouse:false,
    click:false
  }
];

salados = [{
  nombre: 'ALMENDRAS',
  negrita: 'AHUMADAS',
  imagen: '../../assets/imagenes/productos/saladas_ahumadas.jpg',
  imagen2: '../../assets/imagenes/etiquetas/almendras_ahumadas.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_ahumadas_CE.png',
  mouse:false,
  click:false
},
{
  nombre: 'ALMENDRAS',
  negrita: 'CON OLIVA',
  imagen: '../../assets/imagenes/productos/saladas_oliva.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_oliva.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_oliva_CE.png',
  mouse:false,
  click:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'PICANTES',
  imagen: '../../assets/imagenes/productos/saladas_pimenton.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_picantes.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_picantes_CE.png',
  mouse:false,
  click:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON ROMERO',
  imagen: '../../assets/imagenes/productos/saladas_romero.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_romero.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_romero_CE.png',
  mouse:false,
  click:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'TOSTADAS',
  imagen: '../../assets/imagenes/productos/saladas_tostadas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_tostadas.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_tostadas_CE.png',
  mouse:false,
  click:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'CON WASABI',
  imagen: '../../assets/imagenes/productos/saladas_wasabi.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_wasabi.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_wasabi_CE.png',
  mouse:false,
  click:false
},
];

naturales = [{
  nombre: 'AVELLANAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_avellanas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/avellana_chocolate_CE.png',
  mouse:false,
  click:false
},
{
  nombre: 'NUECES',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_nueces.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/nueces_mariposa.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/nueces_mariposa_CE.png',
  mouse:false,
  click:false
},{
  nombre: 'MIX',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_mix.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/mix.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/mix_CE.png',
  mouse:false,
  click:false
},{
  nombre: 'PASAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_pasas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/pasas.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/pasas_CE.png',
  mouse:false,
  click:false
},{
  nombre: 'ALMENDRAS',
  negrita: 'FILETEADAS',
  imagen: '../../assets/imagenes/productos/naturales_alm_fileteadas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_chocolate_CE.png',
  mouse:false,
  click:false
},
{
  nombre: 'ALMENDRAS',
  negrita: 'ENTERAS',
  imagen: '../../assets/imagenes/productos/naturales_almendras_enteras.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_enteras.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_enteras_CE.png',
  mouse:false,
  click:false
},
{
  nombre: 'HARINA',
  negrita: 'HARINA 000',
  imagen: '../../assets/imagenes/productos/naturales_harina01.jpg',
  imagen2: '../../assets/imagenes/productos/naturales_harina01.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_chocolate_CE.png',
  mouse:false,
  click:false
},
{
  nombre: 'HARINA',
  negrita: 'HARINA 0000',
  imagen: '../../assets/imagenes/productos/naturales_harina_02.jpg' ,
  imagen2: '../../assets/imagenes/productos/naturales_harina_02.jpg',
  imagenCE: '../../assets/imagenes/etiquetas/almendras_chocolate_CE.png',
  mouse:false,
  click:false
}
];

  ngOnInit() {

    if(window.innerWidth<414){
      this.movil=true;
    }

  }



mouseEnter(producto:any){
producto.mouse = true;
this.cambiarImagen(producto);

}

mouseLeave(producto:any){
  this.devolverImagen(producto);
  producto.mouse = false;
  
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


 onclickDulce(producto:any){
  this.cambiarImagen(producto);
   
   this.mostrarDulces= true;
   producto.click=true;
   
 }

 onclickSalado(producto:any){
  this.cambiarImagen(producto);
  
   this.mostrarSalados= true;
   producto.click=true;
   
 }
 onclickNaturales(producto:any){
  this.cambiarImagen(producto);

   this.mostrarNaturales= true;
   producto.click=true;
   
 }

 cerrarMarron(){
  
  for(let i = 0; i< this.dulces.length; i++){
    this.dulces[i].click=false;
  }
  for(let i = 0; i< this.salados.length; i++){
  
    this.salados[i].click=false;
  }
  for(let i = 0; i< this.naturales.length; i++){
  
    this.naturales[i].click=false;
  }

   this.mostrarDulces=false;
   this.mostrarNaturales=false;
   this.mostrarSalados=false;
 }

 estilo(i:number){
   let r="";
    if(i==3){
      r="{margin-left:15%}"
   }
   if(i==4){
    r="{margin-rigth:15%}"
 }

   return r;
 }

  
}
