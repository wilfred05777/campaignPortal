import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MemberRoutingModule, routingComponents} from "./member-routing.module";

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    MemberRoutingModule,
  ],
  exports: [
    MemberRoutingModule,
  ]
})
export class MemberModule {}
