import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  initialCoordinates={
    lat : 23.7850,
    lng: 90.4113,
  };

  mapConfigurationn ={
    disableDefaultUI: true,
    fullscreenControl: true,
    zoomControl: true,
  };


  constructor() { }

  ngOnInit() {
    
    }
  }



