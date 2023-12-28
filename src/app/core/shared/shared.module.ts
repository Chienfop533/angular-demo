import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [DxDataGridModule, ModalModule.forRoot()],
  exports: [DxDataGridModule, ModalModule],
  providers: [],
})
export class SharedModule {}
