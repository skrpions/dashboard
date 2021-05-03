import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './Componentes/login/login.component';
import { ForgotComponent } from './Componentes/forgot/forgot.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule
  ]
})
export class AuthModule { }
