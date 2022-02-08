import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
