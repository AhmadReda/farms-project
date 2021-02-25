import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  loadingError = false;
  loading = false;
  Error = 'Error'
  constructor() { }

  ngOnInit(): void {
  }

    ///////////////// data bind to <app-items-for-you> ////////////////////
    allItems = [
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
      {
        img:"assets/images/pick.jpg",
        link:"Lorem ipsum dolor sit amet consectetur.",
        priceFrom:"$100.00",
        priceTo:"$200.00",
        type:"Pair",
        quant:"10"
      },
    ];
    ///////////////// data bind to <app-items-for-you> ////////////////////

    ///////////////// data bind to <app-slide-show-items> ////////////////////

    owlSlideOne = [
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
    ///////////////// data bind to <app-slide-show-items> ////////////////////

    getData(){}

}
