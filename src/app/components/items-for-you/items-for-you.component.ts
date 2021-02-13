import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-for-you',
  templateUrl: './items-for-you.component.html',
  styleUrls: ['./items-for-you.component.css']
})
export class ItemsForYouComponent implements OnInit {
  
  @Input() items:any;
  constructor() { }

  ngOnInit(): void {
  }

}
