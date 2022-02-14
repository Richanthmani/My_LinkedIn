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
  user=new User(0,"","","","")
  msg='';
  submitted=false;

  constructor( private service:RegistrationService, private router :Router) {
    //this.service.user=new User(0,"","","","");
  }


  ngOnInit(): void {
  }
  loginuser(){
   // this.service.user=new User(0,"","","","");
    this.service.loginUserFormRemote(this.user).subscribe(
      data => {
        console.log("response Recived")
        this.user=data
        //this.service.user=data;
        localStorage.setItem("user",JSON.stringify(data));
        this.router.navigate(['/home'])

      },
      error => {
        console.log("exception occured")
        this.msg = "Bad credentials,Please enter valid emailid and password";
      }
    )
     //this._service.loginUserFormRemote(this.user)
  }
  gotoregistration(){
    console.log("hi hello");
    this.router.navigate(['/registration'])

  }

}
