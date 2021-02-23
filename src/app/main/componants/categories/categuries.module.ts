import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CateguriesRoutingModule } from './categuries-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';


@NgModule({
  declarations: [CategoriesListComponent, CategoriesDetailsComponent],
  imports: [
    CommonModule,
    CateguriesRoutingModule
  ]
})
export class CateguriesModule { }
