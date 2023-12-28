
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectActionComponent } from "../../views/project-action/project-action.component";


@Component({
    selector: 'app-projects',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
})
export class ProjectsComponent implements OnInit {
  @ViewChild("modalChild", { static: false }) modalChild: ProjectActionComponent;
  dataSource: any;
  constructor() {}
  ngOnInit() {
    this.dataSource = [{
      "ID": 1,
      "CompanyName": "Premier Buy",
      "Address": "7601 Penn Avenue South",
      "City": "Richfield",
      "State": "Minnesota",
      "Zipcode": 55423,
      "Phone": "(612) 291-1000",
      "Fax": "(612) 291-2001",
      "Website": "http://www.nowebsitepremierbuy.dx"
  }, {
      "ID": 2,
      "CompanyName": "ElectrixMax",
      "Address": "263 Shuman Blvd",
      "City": "Naperville",
      "State": "Illinois",
      "Zipcode": 60563,
      "Phone": "(630) 438-7800",
      "Fax": "(630) 438-7801",
      "Website": "http://www.nowebsiteelectrixmax.dx"
  }, {
      "ID": 3,
      "CompanyName": "Video Emporium",
      "Address": "1201 Elm Street",
      "City": "Dallas",
      "State": "Texas",
      "Zipcode": 75270,
      "Phone": "(214) 854-3000",
      "Fax": "(214) 854-3001",
      "Website": "http://www.nowebsitevideoemporium.dx"
  }, {
      "ID": 4,
      "CompanyName": "Screen Shop",
      "Address": "1000 Lowes Blvd",
      "City": "Mooresville",
      "State": "North Carolina",
      "Zipcode": 28117,
      "Phone": "(800) 445-6937",
      "Fax": "(800) 445-6938",
      "Website": "http://www.nowebsitescreenshop.dx"
  }, {
      "ID": 5,
      "CompanyName": "Braeburn",
      "Address": "1 Infinite Loop",
      "City": "Cupertino",
      "State": "California",
      "Zipcode": 95014,
      "Phone": "(408) 996-1010",
      "Fax": "(408) 996-1012",
      "Website": "http://www.nowebsitebraeburn.dx"
  }, {
      "ID": 6,
      "CompanyName": "PriceCo",
      "Address": "30 Hunter Lane",
      "City": "Camp Hill",
      "State": "Pennsylvania",
      "Zipcode": 17011,
      "Phone": "(717) 761-2633",
      "Fax": "(717) 761-2334",
      "Website": "http://www.nowebsitepriceco.dx"
  }, {
      "ID": 7,
      "CompanyName": "Ultimate Gadget",
      "Address": "1557 Watson Blvd",
      "City": "Warner Robbins",
      "State": "Georgia",
      "Zipcode": 31093,
      "Phone": "(995) 623-6785",
      "Fax": "(995) 623-6786",
      "Website": "http://www.nowebsiteultimategadget.dx"
  }, {
      "ID": 8,
      "CompanyName": "EZ Stop",
      "Address": "618 Michillinda Ave.",
      "City": "Arcadia",
      "State": "California",
      "Zipcode": 91007,
      "Phone": "(626) 265-8632",
      "Fax": "(626) 265-8633",
      "Website": "http://www.nowebsiteezstop.dx"
  }, {
      "ID": 9,
      "CompanyName": "Clicker",
      "Address": "1100 W. Artesia Blvd.",
      "City": "Compton",
      "State": "California",
      "Zipcode": 90220,
      "Phone": "(310) 884-9000",
      "Fax": "(310) 884-9001",
      "Website": "http://www.nowebsiteclicker.dx"
  }, {
      "ID": 10,
      "CompanyName": "Store of America",
      "Address": "2401 Utah Ave. South",
      "City": "Seattle",
      "State": "Washington",
      "Zipcode": 98134,
      "Phone": "(206) 447-1575",
      "Fax": "(206) 447-1576",
      "Website": "http://www.nowebsiteamerica.dx"
  }, {
      "ID": 11,
      "CompanyName": "Zone Toys",
      "Address": "1945 S Cienega Boulevard",
      "City": "Los Angeles",
      "State": "California",
      "Zipcode": 90034,
      "Phone": "(310) 237-5642",
      "Fax": "(310) 237-5643",
      "Website": "http://www.nowebsitezonetoys.dx"
  }, {
      "ID": 12,
      "CompanyName": "ACME",
      "Address": "2525 E El Segundo Blvd",
      "City": "El Segundo",
      "State": "California",
      "Zipcode": 90245,
      "Phone": "(310) 536-0611",
      "Fax": "(310) 536-0612",
      "Website": "http://www.nowebsiteacme.dx"
  }]
  }
  onRowClick(e) {
    console.log(e.data);

  }
}
