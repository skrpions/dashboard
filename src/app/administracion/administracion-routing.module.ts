import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';

const routes: Routes = [
   // Defino todas las rutas de este módulo: Primero las específicas y de úttimo las generales
   {
    path:'',
    children:
    [
      { path:'dashboard', component:DashboardComponent },
      { path:'**', redirectTo:'dashboard', pathMatch:'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
