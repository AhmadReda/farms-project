import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'Auth',
    loadChildren: () =>
    import('./Auth/auth.module').then(
      (m) => m.AuthModule
    )
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./main/componants/categories/categuries.module').then(
        (m) => m.CateguriesModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./main/componants/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./main/componants/Product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'cart-page',
    loadChildren: () =>
      import('./main/componants/cart-page/cart-page.module').then(
        (m) => m.CartPageModule
      ),
  },
  {
    path: 'header',
    loadChildren: () =>
      import('./main/componants/header/header.module').then(
        (m) => m.HeaderModule
      ),
  },
  {
    path: 'footer',
    loadChildren: () =>
      import('./main/componants/footer/footer.module').then(
        (m) => m.FooterModule
      ),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./main/componants/shared/shared.module').then(
        (m) => m.SharedModule
      ),
  },
  { path: 'search', loadChildren: () => import('./main/componants/search/search.module').then(m => m.SearchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
