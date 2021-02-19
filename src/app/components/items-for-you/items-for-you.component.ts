import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-for-you',
  templateUrl: './items-for-you.component.html',
  styleUrls: ['./items-for-you.component.css']
})
export class ItemsForYouComponent implements OnInit {
  
  @Input() items:any;
  currenpg:number = 1;
  itemsPerPage:number = 4;
  constructor() { }

  ngOnInit(): void {
  }

  inc(){
    if(this.itemsPerPage <this.items.length){
      this.itemsPerPage += 4;
    }
     if(this.itemsPerPage > this.items.length){
      this.itemsPerPage = this.items.length
    }
  }
  dec(){
    if(this.itemsPerPage > 4){
      this.itemsPerPage -=4
    }
  }

}