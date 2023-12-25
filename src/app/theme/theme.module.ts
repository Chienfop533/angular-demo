import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
      LayoutComponent,
      SidebarComponent,
      HeaderComponent
  ],
  imports: [
      CommonModule,
      RouterModule,
  ],
  exports: [
      LayoutComponent,
      SidebarComponent,
      HeaderComponent
  ],

})
export class ThemeModule { }
