import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string ='';
  password:string ='';

  constructor(private auth:AuthService,
    private router:Router,
    private ViewportScroller:ViewportScroller) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email == ''){
      alert('please enter email');
      return;
    }
    if(this.password == ''){
      alert('please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
  }

  // sign in wtih google
  signInWithGoogle(){
    this.auth.googleSignIn()
  }

  // to signUp

  signupId:string ='sign-up'
  toSignUp(){
    this.router.navigate(['/home'])
    .then(()=>{
      this.ViewportScroller.scrollToAnchor(this.signupId);
    })

  }

}
