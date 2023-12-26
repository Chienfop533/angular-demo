import { RouterModule, Routes } from '@angular/router';
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
      {
        path: 'category',
        loadChildren: () => import('./pages/category/category.module')
          .then(m => m.CategoryModule),
      }
    ]
  },
  { path: '**', redirectTo: '' },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
