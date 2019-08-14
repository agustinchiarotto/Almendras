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
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [

    trigger('hamburTrigger', [
      // ...
      state('armado', style({
        
        opacity: 0.8,
       
      })),
      state('normal', style({
      
        opacity: 1,
    
      })),
      transition('armado => normal', [
        animate('0.5s')
      ]),
      transition('normal => armado', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  prevScrollpos = window.pageYOffset;
  hamburguesa:boolean=false;
  armado:boolean=false;
  hizoClick:boolean=false;
  constructor(@Inject(DOCUMENT) document) {
    
 }
  ngOnInit() {
    this.hamburguesa=false;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.hizoClick=true;
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 300 ) {
        this.hamburguesa=false;
      //  console.log(this.hamburguesa)
    }
    if (number > 300) {
      this.hamburguesa=true;
      //console.log('You are 100px from the top to bottom ' + this.hamburguesa);
    }
    document.getElementById('navbarSupportedContent').classList.remove('show');
  }

  mouseEnter(){
    this.armado=false
  }
  mouseLeave(){
    this.armado=true;
  }


}
