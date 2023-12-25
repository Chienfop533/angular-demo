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
        name: "Dự Án",
        url: "/project",
        childrens: []
      },
      {
        id: "2",
        name: "Công nợ",
        url: "",
        childrens: [
          {
            id: "21",
            name: "Hợp đồng",
            url: "debt/contract"
          },
          {
            id: "22",
            name: "Giấy báo có",
            url: "debt/credit-note"
          },

          {
            id: "23",
            name: "Khách hàng",
            url: "/debt/customer"
          }
        ]
      },
    ];

  }

}
