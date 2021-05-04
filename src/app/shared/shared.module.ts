import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { SidebarComponent } from './Componentes/sidebar/sidebar.component';


@NgModule({
  declarations:
  [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
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
