import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryListService } from 'src/app/services/category-list.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  loadingError = false;
  loading = false;
  Error = 'Error';
  routeParam: any;
  itemsPerPage:number = 10;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryListServices: CategoryListService
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.routeParam = data['name'];
    });
  }

  ngOnInit(): void {
    this.getCategoryListData();
  }

  ///////////////// data bind to <app-items-for-you> ////////////////////
  allItems = [
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
    // {
    //   img: 'assets/images/pick.jpg',
    //   link: 'Lorem ipsum dolor sit amet consectetur.',
    //   priceFrom: '$100.00',
    //   priceTo: '$200.00',
    //   type: 'Pair',
    //   quant: '10',
    // },
  ];
  ///////////////// data bind to <app-items-for-you> ////////////////////

  getCategoryListData() {
    this.categoryListServices.getCategoryListData(this.routeParam).subscribe(
      (response: any) => {
        this.allItems = response.message
      },
      (error) => {}
    );
  }
  ///////////////// data bind to <app-slide-show-items> ////////////////////

  // owlSlideOne = [
  //   {
  //     img:"assets/images/slide-img1.png",
  //     price:"$20.0",
  //     case:"Trending Now"
  //   },
  //   {
  //     img:"assets/images/slide-img2.jpg",
  //     price:"$20.0",
  //     case:"Trending Now"
  //   },
  //   {
  //     img:"assets/images/slide-img3.jpg",
  //     price:"$20.0",
  //     case:"Trending Now"
  //   },
  //   {
  //     img:"assets/images/slide-img1.png",
  //     price:"$20.0",
  //     case:"Trending Now"
  //   },
  //   {
  //     img:"assets/images/slide-img2.jpg",
  //     price:"$20.0",
  //     case:"Trending Now"
  //   },
  //   {
  //     img:"assets/images/slide-img3.jpg",
  //     price:"$20.0",
  //     case:"Trending Now"
  //   },
  // ];
  ///////////////// data bind to <app-slide-show-items> ////////////////////

  getData() {}
}
