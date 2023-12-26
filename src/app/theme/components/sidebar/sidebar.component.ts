import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navigation: any

  ngOnInit() {
    this.navigation = [
      {
        id: "1",
        name: "Dự án",
        url: "/project",
        childrens: []
      },
      {
        id: "2",
        name: "Danh mục",
        url: "",
        childrens: [
          {
            id: "21",
            name: "Bản đồ",
            url: "category/map"
          },
          {
            id: "22",
            name: "Dự án",
            url: "category/project"
          },

          {
            id: "23",
            name: "Lô đất",
            url: "category/state"
          }
        ]
      },
    ];

  }

}
