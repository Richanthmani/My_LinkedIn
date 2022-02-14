import { Component, OnInit } from '@angular/core';
import {Skills} from "../../skills";
import {Profile} from "../../profile";
import {SkillsService} from "../../skills.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  profile=new Profile(0,"","","","","","",new Date());
  id: any;

  constructor( private service:ProfileService,private _router :Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id= parseInt(<string> this.route.snapshot.paramMap.get("id"));
  }

  updateprofile(){
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
