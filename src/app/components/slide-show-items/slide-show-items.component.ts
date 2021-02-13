import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slide-show-items',
  templateUrl: './slide-show-items.component.html',
  styleUrls: ['./slide-show-items.component.css']
})
export class SlideShowItemsComponent implements OnInit {
  @Input() owlSlide:any;


  constructor() { }

  ngOnInit(): void {
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    autoplay:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
