import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {NavmenuComponent} from "./components/navmenu/navmenu.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: 'home', pathMatch: 'full', redirectTo: '' },
  { path: '', component: HomeComponent },
  { path: 'member',
    loadChildren: () => import('./member/member.module').then(m => m.MemberModule),
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NavmenuComponent, PageNotFoundComponent, HomeComponent, LoginComponent];
