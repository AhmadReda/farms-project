import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PartItemsComponent } from './part-items/part-items.component';
import { SlideShowItemsComponent } from './slide-show-items/slide-show-items.component';
import { ItemsForYouComponent } from './items-for-you/items-for-you.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { MediaSlideComponent } from './media-slide/media-slide.component';
import { FormsModule } from '@angular/forms';


import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';



// import { PagesModule } from '../lazy-route/pages/pages.module'
@NgModule({
  declarations: [NavbarComponent, FooterComponent, PartItemsComponent, SlideShowItemsComponent, ItemsForYouComponent, MediaSlideComponent],
  imports: [
    // PagesModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    CommonModule,
    CarouselModule
  ],
  exports: [NavbarComponent, FooterComponent, PartItemsComponent, SlideShowItemsComponent, ItemsForYouComponent,MediaSlideComponent],

})
export class ComponentsModule { }
