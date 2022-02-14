import { Injectable } from '@angular/core';
import {Education} from "./education";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RegistrationService} from "./registration.service";
import {Experience} from "./experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  id:number=this.regs.getuser().id
  constructor(private _http: HttpClient,private regs:RegistrationService) { }

  public addExperienceToUser(experience:Experience): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addexperience/"+ this.id , experience);
  }

  public getExperienceByUserId(){
    return this._http.get<any>("http://localhost:8080/getexperience/"+ this.id);
  }

  public deleteExperienceById(id: number){
    return this._http.delete<any>("http://localhost:8080/deleteexperience/"+this.id+"/"+id);
  }
}
