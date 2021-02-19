import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-media-slide',
  templateUrl: './media-slide.component.html',
  styleUrls: ['./media-slide.component.css']
})
export class MediaSlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // this data to bind in the component

  mediaSlide=[
    {
      id:1,
      img:"assets/images/slide1.jpg"
    },
    {
      id:2,
      img:"assets/images/slide2.jpg"
    },
    {
      id:3,
      img:"assets/images/slide1.jpg"
    },
  ]



//  to custome owl carousel
  customOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    // autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
