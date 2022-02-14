import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";
import {Skills} from "../skills";
import {RegistrationService} from "../registration.service";
import {SkillsService} from "../skills.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skill=new Skills(0,"");
  msg=" "
  skilllist : Skills[]=[];
  id: any;

  constructor(public nav:NavbarService,private service:SkillsService,private _router :Router) { }



  ngOnInit(): void{
    this.nav.show()

    this.service.getSkillsByUserId().subscribe(
      data=>{
        this.skilllist=data;
        console.log("Response recived");

      },
      error=> {
        console.log("exception occured")
      }
    )
    }







  addskill() {


    this.service.addSkillToUser(this.skill).subscribe(
      data => {
        console.log("response recived");
       // this._router.navigate(['/skills'])
        this.service.getSkillsByUserId().subscribe(
          data=>{
            this.skilllist=data;
            console.log("Response recived");

          },
          error=> {
            console.log("exception occured")
          }
        )

      },
      error => {
        console.log("exception occured");
        this.msg = "EmailId is already taken";
      }
    )




  }

  deleteskill(id:number){
      this.service.deleteSkillById(id).subscribe(
        data=>{
          this.skilllist=data;
          console.log("skill deleted");
        },
        error=>{
          console.log("exception occured");
        }
      )




    }
  updateskill(id:number){
    this._router.navigate(['/skills/updateskill',id])

  }



}
