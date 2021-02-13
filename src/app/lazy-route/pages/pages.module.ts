import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [PagesComponent, HomeComponent, PageOneComponent, PageTwoComponent, PageThreeComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
