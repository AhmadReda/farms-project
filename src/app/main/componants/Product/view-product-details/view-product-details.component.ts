import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../../../services/cart-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {

  quantity: number = 0;
  addToCart: any = [];

  //////////////////// this data is used in this component ////////////////////////////
  overview = [
    {
      productTitle:
        'Top Quality Fresh Berries Fruits Eco Friendly Packages Korean Delicious Sweet Golden Strawberry',
      priceFrom: '$11.10',
      priceTo: '$33.60',
      productImg: 'assets/images/product-img.jpg',
      style: 'Fresh',
      type: 'Strawberry',
      PlaceOfOrigin: 'South Korea',
      Color: 'Red',
      ProductType: 'Berries',
      CultivationType: 'COMMON',
      BrandName: 'Golden Fruit',
      imgPanarOne: 'assets/images/product-img.jpg',
      // imgPanarTwo:"assets/images/slide1.jpg",
      // imgPanarThree:"assets/images/slide2.jpg",
    },
  ];

  constructor(private msg: CartServiceService) { }

  ngOnInit(): void {
  }


  mediaSlide = [
    {
      id: 1,
      img: 'assets/images/slide1.jpg',
    },
    {
      id: 2,
      img: 'assets/images/slide2.jpg',
    },
    {
      id: 3,
      img: 'assets/images/slide1.jpg',
    },
    {
      id: 4,
      img: 'assets/images/product-img.jpg',
    },
  ];

  pluse() {
    this.quantity++;
  }
  minus() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addHandly(item: any) {
    this.msg.sendMsg(item);
  }

  customOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    pullDrag: true,
    dots: false,
    navSpeed: 50,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
}
