import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExprienceComponent } from './exprience/exprience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';


const routes: Routes = [
  // {path:'**',component:AboutComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {path:'about',component:AboutComponent},
  {path:'experience',component:ExprienceComponent},
  {path:'education',component:EducationComponent},
  {path:'skills',component:SkillsComponent},
  {path:'intrests',component:InterestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
