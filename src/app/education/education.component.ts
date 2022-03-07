import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";
import { Education} from "../education";
import {SkillsService} from "../skills.service";
import {Router} from "@angular/router";
import {EducationService} from "../education.service";
import {FormControl, FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education =new Education(0 , 0 ,  "","","","", new Date(),new Date());
  addEducationForm:FormGroup=new FormGroup({})
  EducationDetails : Education[]=[];
  constructor(public nav:NavbarService,private service:EducationService,private _router :Router) { }
 msg=" "
  ngOnInit(): void {
    this.nav.show();
    this.addEducationForm=new FormGroup({
      'degree':new FormControl(),
      'institution':new FormControl(),
      'major':new FormControl(),
      'startDate':new FormControl(),
      'endDate':new FormControl(),
      'score':new FormControl(),
      'location':new FormControl()
    })


    this.service.getEducationByUserId().subscribe(
      data=>{
        this.EducationDetails=data;
        console.log("Response recived");

      },
      error=> {
        console.log("exception occured")
      }
    )
  }


  get addeducationform(){
    return this.addEducationForm.controls
  }
  addeducation() {


    this.education=this.addEducationForm.value
    this.service.addEducationToUser(this.education).subscribe(
      data => {
        console.log("response recived");


        this.service.getEducationByUserId().subscribe(
          data=>{
            this.EducationDetails=data;
            console.log("Response recived");

          },
          error=> {
            console.log("exception occured")
          }
        )

      },
      error => {
        console.log("exception occured");
        this.msg = "degree is already added is already taken";
      }
    )



  }

  deleteeducation(id:number){
    this.service.deleteEducationById(id).subscribe(
      data=>{
        this.EducationDetails=data;
        console.log("skill deleted");
      },
      error=>{
        console.log("exception occured");
      }
    )

  }
}
