import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ProjectsComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
