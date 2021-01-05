import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MemberDashboardComponent} from "./pages/member-dashboard/member-dashboard.component";
import {MemberComponent} from "./member.component";
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";

const routes: Routes = [
  {
    path: '', component: MemberComponent,
    canActivate: [AngularFireAuthGuard],
    children: [
      {path: 'dashboard',  pathMatch: 'full', redirectTo: ''},
      {path: '', component: MemberDashboardComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }

export const routingComponents = [MemberComponent, MemberDashboardComponent];
