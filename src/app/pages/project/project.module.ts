import { NgModule } from '@angular/core';
import { ProjectsComponent } from './project.component';
import { SharedModule } from '../../core/shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectActionComponent } from '../../views/project-action/project-action.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectActionComponent],
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],

})
export class ProjectModule { }
