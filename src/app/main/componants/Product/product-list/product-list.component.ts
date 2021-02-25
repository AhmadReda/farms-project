import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  ///////////////////////// his data bind to <app-items-for-you> and input on it//////////////////////////
  allItem = [
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
    {
      img:"assets/images/pro-item.jpg",
      link:"Lorem ipsum dolor sit amet consectetur.",
      priceFrom:"$100.00",
      priceTo:"$200.00",
      type:"Pair",
      quant:"10"
    },
  ];
  ///////////////////////// his data bind to <app-items-for-you> and input on it/////////////////////////////


  ///////////////////////// data bind to <app-slide-show-items> and input on it//////////////////////////
  owlSlideTwo = [
    {
      img:"assets/images/slide-img1.png",
      price:"$20.0",
      case:"Trending Now"
    },
    {
      img:"assets/images/slide-img2.jpg",
      price:"$20.0",
      case:"Trending Now"
    },
    {
      img:"assets/images/slide-img3.jpg",
      price:"$20.0",
      case:"Trending Now"
    },
    {
      img:"assets/images/slide-img1.png",
      price:"$20.0",
      case:"Trending Now"
    },
    {
      img:"assets/images/slide-img2.jpg",
      price:"$20.0",
      case:"Trending Now"
    },
    {
      img:"assets/images/slide-img3.jpg",
      price:"$20.0",
      case:"Trending Now"
    },
  ];
  ///////////////////////// data bind to <app-slide-show-items> and input on it////////////////////////////

}
