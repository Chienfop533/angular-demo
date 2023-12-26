import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CategoryComponent } from './category.component';
import { CategoryMapComponent } from './category-map/category-map.component';
import { CategoryProjectComponent } from './category-project/category-project.component';
import { CategoryLandComponent } from './category-land/category-land.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path:'category-map',
        component: CategoryMapComponent,
      },
      {
        path:'category-project',
        component: CategoryProjectComponent,
      },
      {
        path:'category-land',
        component: CategoryLandComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
