import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";
import {SkillsService} from "../skills.service";
import {Router} from "@angular/router";
import {Profile} from "../profile";
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile=new Profile(0,"","","","","","",new Date());



  constructor(public nav:NavbarService,private service:ProfileService,private _router :Router) { }

  ngOnInit(): void {
    this.nav.show();

    this.service.getProfileByUserId().subscribe(
      data=>{
         this.profile=data;
        console.log("Response recived");

      },
      error=> {
        console.log("exception occured")
      }
    )
  }


  updateprofile(id:number){

    this._router.navigate(['/profile/updateprofile',id])

  }

}
