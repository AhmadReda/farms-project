import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  numbers = new BehaviorSubject(null);

  private subject = new BehaviorSubject<any>(CartServiceService.list);
  private subjectTwo = new BehaviorSubject<any>(CartServiceService.itemNumber);
  static list: any;
  static itemNumber: number;
  constructor() {}

  sendMsg(product: any) {
    CartServiceService.list = product;
    this.subject.next(product);
  }

  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }



  sendNum(num:number){
    CartServiceService.itemNumber = num;
    this.subjectTwo.next(num);
    // this.itemNumber = num;
    console.log(num);
    console.log(CartServiceService.itemNumber);
  }
  getNum(){
    return this.subjectTwo.asObservable();
  }
}
