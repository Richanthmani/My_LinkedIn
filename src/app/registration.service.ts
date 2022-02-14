import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user : any;
  msg="";
  constructor( private _http:HttpClient,private _router:Router) { }
 /*public loginUserFormRemote(user:User){
     this._http.post<User>("http://localhost:8080/login" ,user).subscribe(
       data => {
         console.log("response Recived")
         this.user=data
         this._router.navigate(['/home'])

       },
       error => {
         console.log("exception occured")
         this.msg = "Bad credentials,Please enter valid emailid and password";
       }
     )

  }*/

  public loginUserFormRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user)
  }
  public registerUserFormRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser",user)


  }

  getuser(){
    let local=localStorage.getItem("user")
    if(local!=null){
     return JSON.parse (local);
  }
  }
}
