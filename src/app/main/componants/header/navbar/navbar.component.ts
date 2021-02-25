import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../services/search.service';
import { CartServiceService } from '../../../../services/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private searchService: SearchService,
    private cartService: CartServiceService) { }
    numberItem!: number;
 
  ngOnInit(): void {
    this.cartService.getNum().subscribe((data) => {
      if (data != undefined) {
        this.numberItem = data;
      }
    });
  }


  searchItems = [
    {
      id: 1,
      name: 'motor',
      img: 'assets/images/pick.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 2,
      name: 'picke',
      img: 'assets/images/pro-item.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 3,
      name: 'picke',
      img: 'assets/images/pro-item.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 3,
      name: 'big-picke',
      img: 'assets/images/pro-item.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 3,
      name: 'big-picke',
      img: 'assets/images/pro-item.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 4,
      name: 'motor',
      img: 'assets/images/pick.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 5,
      name: 'motor',
      img: 'assets/images/pick.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 6,
      name: 'motor',
      img: 'assets/images/pick.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 7,
      name: 'motor',
      img: 'assets/images/pick.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 8,
      name: 't-shirt',
      img: 'assets/images/item3.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 9,
      name: 't-shirt',
      img: 'assets/images/item3.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 10,
      name: 't-shirt',
      img: 'assets/images/item3.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
    {
      id: 11,
      name: 't-shirt',
      img: 'assets/images/item3.jpg',
      link: 'Lorem ipsum dolor sit amet consectetur.',
      priceFrom: '$11.00',
      priceTo: '$14.00',
    },
  ];

  dataSearch: any = [];
  clear: String = '';
  inputVal: any;
  isEmpty: boolean = false;
  getValueInput(input: any) {
    if (input.value.length > 0) {
      this.inputVal = input.value;
      this.searchItems.forEach((data) => {
        if (input.value == data['name'] || data['name'].match(this.inputVal)) {
          this.dataSearch.push(data);
          this.searchService.sendMsg(this.dataSearch);
        }
      });
      input.value = this.clear;
      this.dataSearch = [];
    } else {
      this.isEmpty = true;
    }
  }
}
