import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/Componentes/default/default.component';
import { DashboardComponent } from './modules/dashboard/Componentes/dashboard/dashboard.component';

const routes: Routes = [
  // Defino las rutas de mis modulos creados
  {
    // Rutas del módulo auth
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
  // Rutas del módulo administracion
  path:'panel-administrativo',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }]
  },
  /* {
    // Rutas del módulo administracion
    path:'administracion',
    loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule)
  }, */
  {
    // Rutas del módulo auth : En caso de que escriba cualquier cosa en la url después de auth
    path:'**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
