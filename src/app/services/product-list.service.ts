import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }
  getProductDetails(routeName: any): Observable<any> {
    return this.http.get(baseUrl + `erpnext.stock.doctype.item.item.getItemByName?name=${routeName}`);
  }
}

// http://41.38.70.8:9090/api/method/erpnext.stock.doctype.item.item.getItemByName?name=