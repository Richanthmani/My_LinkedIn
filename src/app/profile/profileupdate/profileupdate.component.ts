import { Component, OnInit } from '@angular/core';
import {Skills} from "../../skills";
import {Profile} from "../../profile";
import {SkillsService} from "../../skills.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../profile.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  profile=new Profile(0,"","","","","","",new Date());
  id: any;
  updateProfileForm:FormGroup=new FormGroup({})
  constructor( private service:ProfileService,private _router :Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id= parseInt(<string> this.route.snapshot.paramMap.get("id"));
    this.updateProfileForm=new FormGroup({
      'fullName':new FormControl(),
      'emailId':new FormControl(),
      'phoneNumber':new FormControl(),
      'birthDate':new FormControl(),
      'image':new FormControl(),
      'about':new FormControl(),
      'gender':new FormControl()
    })
  }

  updateprofile(){
    this.profile=this.updateProfileForm.value
    this.profile.id=this.id
    this.service.updateProfileToUser(this.profile).subscribe(
      data => {
        console.log("response recived");
        this._router.navigate(['/profile'])
        this.service.getProfileByUserId().subscribe(
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
