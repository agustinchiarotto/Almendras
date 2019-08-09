import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [

    trigger('hamburTrigger', [
      // ...
      state('hamburguesa', style({
        
        opacity: 0.8,
       
      })),
      state('normal', style({
      
        opacity: 1,
    
      })),
      transition('hamburguesa => normal', [
        animate('0.5s')
      ]),
      transition('normal => hamburguesa', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  prevScrollpos = window.pageYOffset;
  hamburguesa:boolean=false;
  constructor() { 

  }

  ngOnInit() {
    this.hamburguesa=false;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 300 ) {
        this.hamburguesa=false;
        console.log(this.hamburguesa)
    }
    if (number > 300) {
      this.hamburguesa=true;
      console.log('You are 100px from the top to bottom ' + this.hamburguesa);
    }
  }

  mouseEnter(){
    this.hamburguesa=false
  }
  mouseLeave(){
    this.hamburguesa=true;
  }

}
