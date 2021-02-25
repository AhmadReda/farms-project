import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    /////////////////// customiz owl carousel //////////////////
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 3,
        },
        740: {
          items: 3,
        },
        940: {
          items: 3,
        },
      },
      nav: true,
    };
    /////////////////// customiz owl carousel //////////////////
  
    ////////////////// data for owl slide carousel bind to <app-slide-ahow-items> ////////////////////////////
    owlSlideOne = [
      {
        img: 'assets/images/slide-img1.png',
        price: '$20.0',
        case: 'Trending Now',
      },
      {
        img: 'assets/images/slide-img2.jpg',
        price: '$20.0',
        case: 'Trending Now',
      },
      {
        img: 'assets/images/slide-img3.jpg',
        price: '$20.0',
        case: 'Trending Now',
      },
      {
        img: 'assets/images/slide-img1.png',
        price: '$20.0',
        case: 'Trending Now',
      },
      {
        img: 'assets/images/slide-img2.jpg',
        price: '$20.0',
        case: 'Trending Now',
      },
      {
        img: 'assets/images/slide-img3.jpg',
        price: '$20.0',
        case: 'Trending Now',
      },
    ];
    ////////////////// data for owl slide carousel bind to <app-slide-ahow-items> ////////////////////////////
  
    ////////////////////// this data is bind to <app-part-items> and input in it //////////////////
    partItemsSection = [
      {
        mainImg: 'assets/images/item1.jpg',
        mainPara: 'Lorem ipsum dolor sit amet.',
        mainHead: 'Lorem ipsum dolor sit amet.',
        verImg: 'assets/images/item3.jpg',
        verHead: 'Lorem, ipsum dolor.',
        verPara: 'Lorem ipsum dolor sit amet.',
        itemHead: 'Lorem, ipsum dolor.',
        itemPara: 'Lorem ipsum dolor sit amet.',
        itemOneImg: 'assets/images/item2.jpg',
        itemTwoImg: 'assets/images/item2.jpg',
        itemThreeImg: 'assets/images/item4.jpg',
        itemFourImg: 'assets/images/item5.png',
      },
    ];
    ////////////////////// this data is bind to <app-part-items> and input in it //////////////////
  
  
    ////////////////////// this data is bind to <app-items-for-you> and input in it //////////////////
    allItems = [
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
      {
        img: 'assets/images/pick.jpg',
        link: 'Lorem ipsum dolor sit amet consectetur.',
        priceFrom: '$100.00',
        priceTo: '$200.00',
        type: 'Pair',
        quant: '10',
      },
    ];
    ////////////////////// this data is bind to <app-items-for-you> and input in it //////////////////
  
}
