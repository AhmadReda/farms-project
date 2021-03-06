import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsPerPage:number = 4;
  constructor(
    private homeDataService: HomeService,

  ) { }

  ngOnInit(): void {
    this.getHomePageData()
  }

  getHomePageData() {
    this.homeDataService.getHomePageData().subscribe(
      (response: any) => {
      /////////////////  advertisements ///////////////////
      this.advertisements = response.message.advertisements;
      /////////////////  advertisements ///////////////////

      //////////////// category api ////////////////
      this.categoryItems = response.message.categroies;

      //////////////// category api ////////////////
      ////////////////////////// cart item list from api //////////////////////
      this.allItems = response.message.items
      ////////////////////////// cart item list from api //////////////////////
      },
      (error) => { }
    );
  }


    /////////////////// customiz owl carousel //////////////////
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      autoplay:true,
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



    categoryItems:any = [];
    subCategoryItems:any = [];
    advertisements:any = [];
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

    allItems = [];
    ////////////////////// this data is bind to <app-items-for-you> and input in it //////////////////


}
