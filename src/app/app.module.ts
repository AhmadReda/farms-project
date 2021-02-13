import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

/////////////////// import component module ///////////////////////
import { ComponentsModule } from './components/components.module';

///////////////////  pages import //////////////////////
import { ViewProductDetailsComponent } from './pages/view-product-details/view-product-details.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SearchItemComponent } from './pages/search-item/search-item.component';
///////////////////// lazy loade inports /////////////////////////////////
import { CategoriesModule } from './lazy-route/categories/categories.module';
import { RegisterPagesModule } from './lazy-route/register-pages/register-pages.module'
import { PagesModule } from './lazy-route/pages/pages.module';






import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    ViewProductDetailsComponent,
    CartPageComponent,
    SearchItemComponent,
  ],
  imports: [
    MatBadgeModule,
    ReactiveFormsModule,
    RegisterPagesModule,
    PagesModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ComponentsModule,
    CategoriesModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
