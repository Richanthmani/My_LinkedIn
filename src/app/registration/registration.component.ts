import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  user= new User();
  msg='';
  constructor(private _service:RegistrationService,private _router :Router) { }

  ngOnInit(): void {
  }
  registeruser(){
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

}
