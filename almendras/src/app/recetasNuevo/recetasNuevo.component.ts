import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-recetasNuevo',
  templateUrl: './recetasNuevo.component.html',
  styleUrls: ['./recetasNuevo.component.scss']
})
export class RecetasNuevoComponent implements OnInit {
  receta:boolean=false;
  hamburguesa = false;
  armado = false;
  movil = false;
  ancho:any;
  ruta = 'assets/imagenes/logoChico.png';


  constructor(
    private activatedRoute:ActivatedRoute, private _rotuer:Router) { }

  ngOnInit() {
    this.hamburguesa = false;
    const number = window.innerWidth;

    if (number < 380 ) {
      this.movil = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number <= 150 ) {
        this.hamburguesa = false;

        this.ruta = 'assets/imagenes/logoChico.png';
      //  console.log(this.hamburguesa)
    }
    if (number > 150) {
      this.hamburguesa = true;
      // tslint:disable-next-line:comment-format
      this.ruta = 'assets/imagenes/logoChico.png'; //Esta ruta esta por si hay que cambiar la imagen del logo al bajar
      // console.log('You are 100px from the top to bottom ' + this.hamburguesa);


    }
    document.getElementById('navbarSupportedContent').classList.remove('show');
  }
  

}
