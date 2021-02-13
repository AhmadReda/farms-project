import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';
// import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home',component:HomeComponent},
  {path:'page-one',component:PageOneComponent},
  {path:'page-two',component:PageTwoComponent},
  {path:'page-three',component:PageThreeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
