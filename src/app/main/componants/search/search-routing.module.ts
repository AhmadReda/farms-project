import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchItemComponent } from './search-item/search-item.component';
// import { SearchComponent } from './search.component';

const routes: Routes = [
  // { path: 'search-item', component: SearchItemComponent }
  {path:'search-item',component:SearchItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
