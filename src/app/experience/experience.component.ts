import { Component, OnInit } from '@angular/core';
import {Education} from "../education";
import {Experience} from "../experience";
import {NavbarService} from "../navbar.service";
import {EducationService} from "../education.service";
import {Router} from "@angular/router";
import {ExperienceService} from "../experience.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience = new Experience(0, "", "", "", new Date(), new Date());
  ExperienceDetails : Experience[]=[];

  constructor(public nav: NavbarService, private service: ExperienceService, private _router: Router) {
  }

  ngOnInit(): void {
    this.nav.show();


    this.service.getExperienceByUserId().subscribe(
      data=>{
        this.ExperienceDetails=data;
        console.log("Response recived");

      },
      error=> {
        console.log("exception occured")
      }
    )
  }

  addexperience() {

    this.service.addExperienceToUser(this.experience).subscribe(
      data => {
        console.log("response recived");
        // this._router.navigate(['/education'])
        this.service.getExperienceByUserId().subscribe(
          data=>{
            this.ExperienceDetails=data;
            console.log("Response recived");

          },
          error=> {
            console.log("exception occured")
          }
        )


      },
      error => {
        console.log("exception occured");
        //this.msg = "degree is already added is already taken";
      }
    )
  }

  deletexperience(id:number){
    this.service.deleteExperienceById(id).subscribe(
      data=>{
        this.ExperienceDetails=data;
        console.log("skill deleted");
      },
      error=>{
        console.log("exception occured");
      }
    )

  }
}
