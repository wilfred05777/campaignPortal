import { NgModule } from '@angular/core';
import {
  MemberRoutingModule,
  routingComponents,
} from './member-routing.module';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [routingComponents],
  imports: [
    MemberRoutingModule,
    MenuModule,
    SidebarModule,
    ButtonModule,
    EditorModule,
    FormsModule,
  ],
  exports: [MemberRoutingModule],
})
export class MemberModule {}
