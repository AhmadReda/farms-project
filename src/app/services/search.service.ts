import { Injectable, DoCheck } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private subject = new BehaviorSubject(SearchService.list);
  static list: any;
  constructor() {}

  sendMsg(product: any) {
    SearchService.list = product;
    this.subject.next(product);
  }

  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }
}
