import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CateguriesRoutingModule } from './categuries-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CategoriesListComponent, CategoriesDetailsComponent],
  imports: [SharedModule, CommonModule, CateguriesRoutingModule],
})
export class CateguriesModule {}
