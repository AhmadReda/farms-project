import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './regester/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
