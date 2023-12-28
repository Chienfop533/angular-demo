import { Component, EventEmitter, OnInit, Output, ViewChild,  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-action',
  templateUrl: './project-action.component.html',
  styleUrls: ['./project-action.component.css'],
  standalone: false,
})
export class ProjectActionComponent implements OnInit {
  @ViewChild('lgModal', { static: false }) childModal?: ModalDirective;
  @Output() sendData = new EventEmitter();
  entity: any = {}
  newValue: any = {}
  submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true
}
  ngOnInit() {
  }
  openModal(data?: any) {
    this.childModal.show();
    this.entity = data
  }
  fnSave() {
    this.sendData.emit(this.newValue)
    this.childModal.hide()
  }
  onFieldDataChanged(e) {
    this.newValue = {...this.newValue, [e.dataField]: e.value}
  }

}
