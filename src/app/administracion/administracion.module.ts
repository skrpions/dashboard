import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../shared/Componentes/header/header.component';
import { FooterComponent } from '../shared/Componentes/footer/footer.component';
import { PostComponent } from './Componentes/post/post.component';


@NgModule({
  declarations: [HeaderComponent,DashboardComponent, FooterComponent, PostComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MatButtonModule
  ]
})
export class AdministracionModule { }
