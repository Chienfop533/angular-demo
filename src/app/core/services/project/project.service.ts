import { Injectable } from "@angular/core";
import { BaseCURDService } from "../base/base_curd.service";
import { HttpClient } from "@angular/common/http";
import { Products } from "../../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseCURDService<Products> {
  constructor(http: HttpClient) {
      super(http, 'products');
  }

}
