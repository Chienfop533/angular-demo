import { Component, OnInit, ViewChild,  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-action',
  templateUrl: './project-action.component.html',
  styleUrls: ['./project-action.component.css'],
  standalone: false,
})
export class ProjectActionComponent implements OnInit {
  @ViewChild('lgModal', { static: false }) childModal?: ModalDirective;
  ngOnInit() {
  }
  openModal(data?: any) {
    this.childModal.show();
    console.log(data);
  }
  fnSave() {

  }
}
