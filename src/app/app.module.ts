import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, NgForm, NgModel, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillupdateComponent } from './skills/skillupdate/skillupdate.component';
import { ProfileupdateComponent } from './profile/profileupdate/profileupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    EducationComponent,
    SkillsComponent,
    ProfileComponent,
    HomeComponent,
    SkillListComponent,
    ExperienceComponent,
    SkillupdateComponent,
    ProfileupdateComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
