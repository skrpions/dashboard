import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './Componentes/default/default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/Componentes/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/Componentes/header/header.component';
import { SidebarComponent } from 'src/app/shared/Componentes/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/shared/Componentes/footer/footer.component';
import { PostComponent } from 'src/app/modules/dashboard/Componentes/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    MatButtonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,

  ]
})
export class DefaultModule { }
