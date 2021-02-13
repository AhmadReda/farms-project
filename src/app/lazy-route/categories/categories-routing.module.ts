import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoreOneComponent } from './categore-one/categore-one.component';
import { CategoreThreeComponent } from './categore-three/categore-three.component';
import { CategoreTwoComponent } from './categore-two/categore-two.component';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  { path: 'categore', component: CategoreOneComponent },
  { path: 'categore-one', component: CategoreOneComponent },
  { path: 'categore-two', component: CategoreTwoComponent},
  { path: 'categore-three', component: CategoreThreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
