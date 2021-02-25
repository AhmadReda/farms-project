import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-items',
  templateUrl: './part-items.component.html',
  styleUrls: ['./part-items.component.css']
})
export class PartItemsComponent implements OnInit {
  @Input() partItems:any;
  constructor() { }

  ngOnInit(): void {
  }

}
