import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { PostComponent } from './Componentes/post/post.component';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaComponent } from 'src/app/shared/Widgets/area/area.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,
    BrowserModule,
    MatDividerModule,
    BrowserAnimationsModule
  ]
})
export class DashboardModule { }
