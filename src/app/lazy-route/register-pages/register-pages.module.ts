import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPagesRoutingModule } from './register-pages-routing.module';
import { RegisterPagesComponent } from './register-pages.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterPagesComponent, SignInComponent, SignUpComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RegisterPagesRoutingModule
  ]
})
export class RegisterPagesModule { }
