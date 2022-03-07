import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../../skills.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Skills} from "../../skills";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-skillupdate',
  templateUrl: './skillupdate.component.html',
  styleUrls: ['./skillupdate.component.css']
})
export class SkillupdateComponent implements OnInit {
  updateSkillForm:FormGroup=new FormGroup({});
  skill=new Skills(0,"");
  id: any;

  constructor(private service:SkillsService,private _router :Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id= parseInt(<string> this.route.snapshot.paramMap.get("id"));
    this.updateSkillForm=new FormGroup({
      'skill':new FormControl(null)
    })


  }

  updateskill(){
    this.skill.id=this.id
    this.skill.skill=this.updateSkillForm.value.skill
    this.service.updateSkillToUser(this.skill).subscribe(
      data => {
        console.log("response recived");
        this._router.navigate(['/skills'])
        this.service.getSkillsByUserId().subscribe(
          data=>{
            // this.skilllist=data;
            console.log("Response recived");

          },
          error=> {
            console.log("exception occured")
          }
        )

      },
      error => {
        console.log("exception occured");
        // this.msg = "EmailId is already taken";
      }
    )

  }

}
