import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './Componentes/forgot/forgot.component';
import { LoginComponent } from './Componentes/login/login.component';

const routes: Routes = [
  // Defino todas las rutas de este módulo: Primero las específicas y de úttimo las generales
  {
    path:'',
    children:
    [
      { path:'login', component:LoginComponent },
      { path:'forgot', component:ForgotComponent },
      { path:'**', redirectTo:'login', pathMatch:'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
