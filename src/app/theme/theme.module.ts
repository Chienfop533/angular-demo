import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [
      LayoutComponent,
      SidebarComponent
  ],
  imports: [
      CommonModule,
      RouterModule,
  ],
  exports: [
      LayoutComponent,
      SidebarComponent
  ],

})
export class ThemeModule { }
