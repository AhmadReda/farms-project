import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  constructor(private searchService: SearchService) { }
  allItem:any;

  ngOnInit(): void {
      ////////// this is data send from searchService <search.service.ts> and catch this by getMsg function //////////
      this.searchService.getMsg().subscribe(data =>{
        this.allItem = data;
      })
  }

}
