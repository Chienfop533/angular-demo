import { Component, EventEmitter, OnInit, Output, ViewChild,  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Products } from '../../core/models/project';
import { cloneData, objectToFormData } from '../../core/common/helper';
import { ProjectService } from '../../core/services/project/project.service';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-project-action',
  templateUrl: './project-action.component.html',
  styleUrls: ['./project-action.component.css'],
  standalone: false,
})
export class ProjectActionComponent implements OnInit {
  @ViewChild('lgModal', { static: false }) childModal?: ModalDirective;
  @ViewChild("targetForm", { static: false }) targetForm: DxFormComponent;
  @Output() loadInit = new EventEmitter<any>();
  entity: Products = new Products();
  categoryList : string[]
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.categoryList = ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration']
  }
  openModal(item: Products = null) {
    if (item != null && item.id != null) {
      this.entity = cloneData(item);
    }
    else {
      this.entity = new Products();
    }
    this.childModal.show();
  }
  fnSave() {
    const validation = this.targetForm.instance.validate()
    if(validation.isValid) {
      if(this.entity.id != null && this.entity != null) {
        this.updateProduct(this.entity.id)
      } else {
        this.addNewProduct()
      }
      this.childModal.hide()
    }
  }
  addNewProduct() {
    let formData: FormData = objectToFormData(this.entity);
    this.projectService.addFromFormData(formData).subscribe(data => {
      this.loadInit.emit(data)
    })
  }
  updateProduct(id) {
    let formData: FormData = objectToFormData(this.entity);
    this.projectService.updateFromFormData(formData, id).subscribe(data => {
      this.loadInit.emit(data)
    })
  }
  fnCancel() {
    this.childModal.hide()
  }
}
