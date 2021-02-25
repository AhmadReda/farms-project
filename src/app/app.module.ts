import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// ////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
import { SharedModule } from './main/componants/shared/shared.module';
import { ProductModule } from './main/componants/Product/product.module';
import { HomeModule } from './main/componants/home/home.module';
import { HeaderModule } from './main/componants/header/header.module';
import { FooterModule } from './main/componants/footer/footer.module';
import { CateguriesModule } from './main/componants/categories/categuries.module';
import { CartPageModule } from './main/componants/cart-page/cart-page.module';
import { AuthModule } from './Auth/auth.module';
import { SearchModule } from './main/componants/search/search.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// ////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SearchModule,
    SharedModule,
    ProductModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    CateguriesModule,
    CartPageModule,
    AuthModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
