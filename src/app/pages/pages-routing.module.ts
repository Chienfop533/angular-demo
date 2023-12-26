import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PagesComponent } from './pages.component';
import { ProjectsComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path:'project',
        component: ProjectsComponent,
      },
      // {
      //   path:'debt',
      //   loadChildren: () => import('./debt/debt.module')
      //   .then(m => m.DebtModule),
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
