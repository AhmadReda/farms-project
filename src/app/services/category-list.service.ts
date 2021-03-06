import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http: HttpClient) {}

  getCategoryListData(routeName: any): Observable<any> {
    return this.http.get(baseUrl + `erpnext.stock.doctype.item.item.getItemsByCategory?category=${routeName}`);
  }
}
