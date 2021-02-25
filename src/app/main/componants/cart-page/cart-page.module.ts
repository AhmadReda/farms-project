import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartPageComponent],
  imports: [FormsModule, CommonModule, CartPageRoutingModule,ReactiveFormsModule],
  exports:[CartPageComponent]
})
export class CartPageModule {}
