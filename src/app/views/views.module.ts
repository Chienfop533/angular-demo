import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { ProjectActionComponent } from "./project-action/project-action.component";
import { CommonModule } from "@angular/common";
import { DxFormModule } from "devextreme-angular";

@NgModule({
  declarations: [ProjectActionComponent],
  imports: [
    SharedModule,
    CommonModule,
    DxFormModule
  ],
  exports: [ProjectActionComponent]
})
export class ViewsModule { }
