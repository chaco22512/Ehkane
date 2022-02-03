import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  faMapMarkerAlt=faMapMarkerAlt;
  faEnvelope=faEnvelope;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faInstagram=faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
