import { NgModule } from '@angular/core';
import { ProjectsComponent } from './project.component';
import { SharedModule } from '../../core/shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ViewsModule } from '../../views/views.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    SharedModule,
    ProjectRoutingModule,
    ViewsModule
  ]

})
export class ProjectModule { }
