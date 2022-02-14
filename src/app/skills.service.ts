import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {Skills} from "./skills";
import {RegistrationService} from "./registration.service";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  id:number=this.regs.getuser().id

  constructor(private _http: HttpClient,private regs:RegistrationService ) {
  }

  public addSkillToUser(skill:Skills): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addskill/"+ this.id , skill);
  }
  public getSkillsByUserId(){
    return this._http.get<any>("http://localhost:8080/getskills/"+ this.id);
  }

  public deleteSkillById(id: number){
    return this._http.delete<any>("http://localhost:8080/deleteskills/"+this.id+"/"+id);
  }

  public updateSkillToUser(skill:Skills): Observable<any> {
    return this._http.put<any>("http://localhost:8080/updateskill/"+ this.id , skill);
  }
}
