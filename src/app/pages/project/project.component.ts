
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectActionComponent } from "../../views/project-action/project-action.component";
import { ProjectService } from '../../core/services/project/project.service';

@Component({
    selector: 'app-projects',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
})
export class ProjectsComponent implements OnInit {
  @ViewChild("modalChild", { static: false }) modalChild: ProjectActionComponent;
  dataSource: any;
  dataRowEdit: any;
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.projectService.getAll().subscribe(res => {this.dataSource = res
    })
  }
  onRowClick(e) {
    this.dataRowEdit = e.data
  }
  fnAdd() {
    this.modalChild.openModal()
    this.dataRowEdit = null
  }
  fnEdit() {
    this.modalChild.openModal(this.dataRowEdit)
  }
  fnDelete() {
    this.dataSource = this.dataSource.filter(item => item.id != this.dataRowEdit.id)
    this.dataRowEdit = null
  }
  loadData(data) {
    if(!this.dataRowEdit) {
      const newData = {...data, ID: Math.floor(Math.random()*1000)}
      this.dataSource = [...this.dataSource, newData]
    }
  }

}
