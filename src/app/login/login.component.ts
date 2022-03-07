import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
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
  loginForm:FormGroup=new FormGroup({})
  submitted=false;

  constructor( private service:RegistrationService, private router :Router) {
    //this.service.user=new User(0,"","","","");
  }


  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'emailId':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    })

  }

  get loginform(){
    return this.loginForm.controls
  }
  loginuser(){
   // this.service.user=new User(0,"","","","");
    this.user=this.loginForm.value;
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

  }
  gotoregistration(){
    console.log("hi hello");
    this.router.navigate(['/registration'])

  }

}
