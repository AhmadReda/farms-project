import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

import { SearchItemComponent } from './pages/search-item/search-item.component';
// import { SigninComponent } from './pages/signin/signin.component';
// import { SignupComponent } from './pages/signup/signup.component';
import { ViewProductDetailsComponent } from './pages/view-product-details/view-product-details.component';

const routes: Routes = [
  // { path: 'sign-in', component: SigninComponent },
  // { path: 'sign-up', component: SignupComponent },
  { path: 'view-product-details/:id', component: ViewProductDetailsComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'search-item', component: SearchItemComponent },

  {
    path: 'categories',
    loadChildren: () =>
      import('./lazy-route/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./lazy-route/pages/pages.module').then((m) => m.PagesModule),
  },
  { path: 'register-pages', loadChildren: () => import('./lazy-route/register-pages/register-pages.module').then(m => m.RegisterPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
