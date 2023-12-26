import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navigation: any
  menuId: string;

  ngOnInit() {
    this.navigation = [
      {
        id: "1",
        name: "Dự án",
        icon: "fas fa-store-alt",
        url: "project",
        childrens: []
      },
      {
        id: "2",
        name: "Danh mục",
        icon: "fa fa-layer-group",
        url: "",
        childrens: [
          {
            id: "21",
            name: "Bản đồ",
            url: "category/category-map"
          },
          {
            id: "22",
            name: "Dự án",
            url: "category/category-project"
          },

          {
            id: "23",
            name: "Lô đất",
            url: "category/category-land"
          }
        ]
      },
    ];
  }

  openMenu(item: any) {

    if (this.menuId == null || this.menuId == item.id) {
      this.menuId = item.id;
      item.isSelected = !item.isSelected;
    }
    else {
      this.navigation.forEach(x => x.isSelected = false);
      item.isSelected = !item.isSelected;
      this.menuId = item.id;
    }

  }
}
