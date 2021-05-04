import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/Componentes/default/default.component';
import { DashboardComponent } from './modules/dashboard/Componentes/dashboard/dashboard.component';
import { PostComponent } from './modules/dashboard/Componentes/post/post.component';

const routes: Routes = [
  // Defino las rutas de mis modulos creados
  {
    // Rutas del módulo auth
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    // Rutas del módulo default - http://localhost:4200/panel-administrativo/
    path:'panel-administrativo',
    component: DefaultComponent,

    // Hijos de la ruta panel-administrativo: (Dashboard, Post) - http://localhost:4200/panel-administrativo/posts
    children:
    [
      {
      path: '',
      component: DashboardComponent
      },
      {
        path:'post',
        component: PostComponent
      }
    ]
  },
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
