import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module'
@NgModule({
  declarations: [
    ProductListComponent,
    ViewProductDetailsComponent,
  ],
  imports: [FormsModule, CarouselModule, CommonModule, ProductRoutingModule,ReactiveFormsModule,SharedModule],
})
export class ProductModule {}
