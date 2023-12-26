import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './theme/layout/layout.component';
import { ProjectsComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path: 'project',
        component: ProjectsComponent
      },
    ]
  },
  { path: '**', redirectTo: '' },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
