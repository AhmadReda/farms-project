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
    return this.http.get(baseUrl + `erpnext.stock.doctype.item.item.getFarmMain`, {headers:new HttpHeaders({'Authorization': "token 77c862f6deea7a8:c5630d3fa46796a"})});
  }
}
