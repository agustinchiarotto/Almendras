import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

}
