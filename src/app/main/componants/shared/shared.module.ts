import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ItemsForYouComponent } from './items-for-you/items-for-you.component';
import { MediaSlideComponent } from './media-slide/media-slide.component';
import { PartItemsComponent } from './part-items/part-items.component';
import { SlideShowItemsComponent } from './slide-show-items/slide-show-items.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartPageModule } from '../cart-page/cart-page.module';
import { LoaderComponent } from '../loader/loader.component';
@NgModule({
  declarations: [SharedComponent, ItemsForYouComponent, MediaSlideComponent, PartItemsComponent, SlideShowItemsComponent, LoaderComponent],
  imports: [
    CartPageModule,
    CarouselModule,
    NgxPaginationModule,
    CommonModule,
    SharedRoutingModule
  ]
  ,exports:[ ItemsForYouComponent, MediaSlideComponent, PartItemsComponent, SlideShowItemsComponent, LoaderComponent]
})
export class SharedModule { }
