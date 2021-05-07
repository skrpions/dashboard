import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { SidebarComponent } from './Componentes/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './Widgets/area/area.component';



@NgModule({
  declarations:
  [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  // Aqui exportaré los componentes
  exports:
  [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
