import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    // const searchBox = new google.maps.places.SearchBox(
    //   this.searchField.nativeElement,
    // );
    // this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    //   this.searchField.nativeElement,
    // );
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


