import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service'
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {


  productSend:any = [];
  quantity:number = 0;
  constructor(private msg:CartServiceService) { }

  ngOnInit(): void {
    // searvice methode
    this.msg.getMsg().subscribe(data => {
      if(data != undefined){
        this.productSend.push(data);
      }      
    });

    if(this.productSend != undefined){
      this.msg.sendNum(this.productSend.length)
    }
    
  }

  pluse() {
    this.quantity++;
  }
  minus() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }


  removeItem(index:any){
    this.productSend.splice(index,1);
  }
}
