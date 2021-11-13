import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  initialCoordinates ={
    lat : 23.7850,
    lng: 90.4113,
  };

  mapConfigurations ={
    disableDefaultUI: true,
    fullscreenControl: true,
    zoomControl: true,
  }


}


