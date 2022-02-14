import { Injectable } from '@angular/core';
import {Skills} from "./skills";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RegistrationService} from "./registration.service";
import {Education} from "./education";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  id:number=this.regs.getuser().id
  constructor(private _http: HttpClient,private regs:RegistrationService ) { }

  public addEducationToUser(education:Education): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addeducation/"+ this.id , education);
  }

  public getEducationByUserId(){
    return this._http.get<any>("http://localhost:8080/geteducation/"+ this.id);
  }

  public deleteEducationById(id: number){
    return this._http.delete<any>("http://localhost:8080/deleteeducation/"+this.id+"/"+id);
  }
}
