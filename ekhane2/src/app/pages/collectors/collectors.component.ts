import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-collectors',
  templateUrl: './collectors.component.html',
  styleUrls: ['./collectors.component.css']
})
export class CollectorsComponent implements OnInit {

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
