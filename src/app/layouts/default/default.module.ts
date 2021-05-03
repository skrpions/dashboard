import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './Componentes/default/default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/Componentes/dashboard/dashboard.component';


@NgModule({
  declarations: [DefaultComponent,DashboardComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }