import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';

const routes: Routes = [
  {path:'view-product-details/:name',component:ViewProductDetailsComponent},
  {path:'product-list',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
