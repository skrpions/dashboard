import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { PostComponent } from './Componentes/post/post.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
