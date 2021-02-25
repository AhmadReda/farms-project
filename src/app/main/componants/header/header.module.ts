import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { from } from 'rxjs';
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    SharedModule,
    CommonModule,
    HeaderRoutingModule,
    MatBadgeModule,
    MatIconModule,
  ],
  exports:[NavbarComponent]
})
export class HeaderModule {}
