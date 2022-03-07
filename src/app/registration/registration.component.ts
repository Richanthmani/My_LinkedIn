import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { first } from 'rxjs/operators';
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user= new User(0,"","","","");
  registrationForm: FormGroup = new FormGroup({});
  msg='';
  constructor(private _service:RegistrationService,private _router :Router) { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      'emailId':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required),
      'userName':new FormControl("",Validators.required),
      'cpassword':new FormControl("",Validators.required)
    })
  }

  get registrationform(){
    return this.registrationForm.controls
  }


  registeruser(){
    this.user=this.registrationForm.value;
    this._service.registerUserFormRemote(this.user).subscribe(
      data => {
        console.log("response recived")
        this._router.navigate(['/login'])

      },
      error => {
        console.log("exception occured")
        this.msg = "EmailId is already taken";
      }
    )

  }
  gotologin(){
    console.log("hi hello");
    this._router.navigate(['/login'])

  }

}
