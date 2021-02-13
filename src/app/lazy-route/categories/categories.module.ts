import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from'../../components/components.module'
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoreOneComponent } from './categore-one/categore-one.component';
import { from } from 'rxjs';
import { CategoreTwoComponent } from './categore-two/categore-two.component';
import { CategoreThreeComponent } from './categore-three/categore-three.component';


@NgModule({
  declarations: [CategoriesComponent, CategoreOneComponent, CategoreTwoComponent, CategoreThreeComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
