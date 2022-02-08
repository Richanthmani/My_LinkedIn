import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {RegistrationService} from "../registration.service";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User()
  msg='';
  submitted=false;
  constructor( private _service:RegistrationService, private _router :Router) {

  }

  ngOnInit(): void {
  }
  loginuser(){
     this._service.loginUserFormRemote(this.user).subscribe(
       data => {
         console.log("response Recived")
         this._router.navigate(['/home'])
         this.submitted=true;
       },
       error => {
         console.log("exception occured")
         this.msg = "Bad credentials,Please enter valid emailid and password";
       }
       )
  }
  gotoregistration(){
    console.log("hi hello");
    this._router.navigate(['/registration'])

  }

}
