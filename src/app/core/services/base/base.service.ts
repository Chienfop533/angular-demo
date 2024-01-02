import { HttpClient } from '@angular/common/http';

export class BaseService {
  public baseUrl: string = 'https://dummyjson.com';
  public _path: string;

  constructor(public http: HttpClient, path: string) {
    this._path = path;
  }
}
