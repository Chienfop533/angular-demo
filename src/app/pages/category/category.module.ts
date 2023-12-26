import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryMapComponent } from './category-map/category-map.component';
import { CategoryProjectComponent } from './category-project/category-project.component';
import { CategoryLandComponent } from './category-land/category-land.component';


@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
  ],
  declarations: [
    CategoryComponent,
    CategoryMapComponent,
    CategoryProjectComponent,
    CategoryLandComponent
  ]
})
export class CategoryModule { }
