import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHomePageData(): Observable<any> {
    return this.http.get(baseUrl + `erpnext.stock.doctype.item.item.getFarmMain`);
  }
}

// http://41.38.70.8:9090/api/method/erpnext.stock.doctype.item.item.getItemsByCategory?category=