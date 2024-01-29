import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DxDataGridModule } from 'devextreme-angular';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    DxDataGridModule,
    ModalModule.forRoot(),
    AngularSvgIconModule.forRoot(),
  ],
  exports: [DxDataGridModule, ModalModule, AngularSvgIconModule],
  providers: [],
})
export class SharedModule {}
