import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
