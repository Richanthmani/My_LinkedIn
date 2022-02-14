import { Injectable } from '@angular/core';
import {Skills} from "./skills";
import {Observable} from "rxjs";
import {Profile} from "./profile";
import {HttpClient} from "@angular/common/http";
import {RegistrationService} from "./registration.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  id:number=this.regs.getuser().id
  constructor(private _http: HttpClient,private regs:RegistrationService) { }


  public getProfileByUserId(){
    return this._http.get<any>("http://localhost:8080/getprofile/"+ this.id);
  }
  public updateProfileToUser(profile:Profile): Observable<any> {
    return this._http.put<any>("http://localhost:8080/updateprofile/"+ this.id , profile);
  }
}
