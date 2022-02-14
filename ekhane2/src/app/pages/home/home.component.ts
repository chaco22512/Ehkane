import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin= faLinkedin;
  faGithub=faGithub;

  email:string ='';
  password:string ='';

  constructor(
    private fB : FormBuilder,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  get Name(){
    return this.signupForm.get('name');
  }
  get Email(){
    return this.signupForm.get('email');
  }
  get Password(){
    return this.signupForm.get('password');
  }

  signup(){
    if(this.email == ''){
      alert('please enter email');
      return;
    }
    if(this.password == ''){
      alert('please enter password');
      return;
    }

    this.auth.signup(this.email, this.password);
    this.email='';
    this.password='';
  }

  // sign in wtih google
  signInWithGoogle(){
    this.auth.googleSignIn()
  }

}
