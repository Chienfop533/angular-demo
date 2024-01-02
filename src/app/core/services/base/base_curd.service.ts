import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { IBaseCURDService } from '../../interface/ibase.service';

export class BaseCURDService<T>
  extends BaseService
  implements IBaseCURDService<T>
{
  // Thêm tài nguyên mới
  add(resource: T): Observable<T> {
    const url = `${this.baseUrl}/${this._path}`;
    return this.http.post<T>(url, resource).pipe(
      catchError((err) => {
        console.error('Error adding resource:', err);
        throw err;
      })
    );
  }

  addFromFormData(formData: FormData) {
    return this.http.post(`${this.baseUrl}/${this._path}/add`, formData);
  }

  // Lấy danh sách tất cả tài nguyên
  getAll(): Observable<T[]> {
    const url = `${this.baseUrl}/${this._path}`;
    return this.http.get<any>(url).pipe(
      map((x) => x.products as T[]),
      catchError((err) => {
        console.error('Error getting all resources:', err);
        throw err;
      })
    );
  }

  // Lấy tài nguyên theo ID
  getById(id: string): Observable<T> {
    const url = `${this.baseUrl}/${this._path}/${id}`;
    return this.http.get<any>(url).pipe(
      map((x) => x.data as T),
      catchError((err) => {
        console.error(`Error getting resource with ID ${id}:`, err);
        throw err;
      })
    );
  }

  // Sửa thông tin tài nguyên
  update(id: string, changes: Partial<T>): Observable<T> {
    const url = `${this.baseUrl}/${this._path}/${id}`;
    return this.http.put<T>(url, changes).pipe(
      catchError((err) => {
        console.error(`Error updating resource with ID ${id}:`, err);
        throw err;
      })
    );
  }

  updateFromFormData(formData: FormData, id: string) {
    return this.http.put(`${this.baseUrl}/${this._path}/${id}`, formData);
  }

  // Xóa tài nguyên
  delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/${this._path}/${id}`;
    return this.http.delete(url).pipe(
      catchError((err) => {
        console.error(`Error deleting resource with ID ${id}:`, err);
        throw err;
      })
    );
  }
}
