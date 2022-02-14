
import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SkillupdateComponent} from "./skills/skillupdate/skillupdate.component";
import {ProfileupdateComponent} from "./profile/profileupdate/profileupdate.component";
const appRoutes:Routes=[
  //{path: "", redirectTo:'/home',pathMatch:'full'},
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'home', component: HomeComponent},
  {path:'profile', component: ProfileComponent},
  {path:'education', component: EducationComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'skills', component: SkillsComponent},
  {path:"skills/updateskill/:id",component: SkillupdateComponent},
  {path:"profile/updateprofile/:id",component: ProfileupdateComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
