import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AuthService} from "./services/auth.service";
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './components/login/login.component';
import {ButtonModule, MegaMenuModule, MenubarModule} from "primeng";

@NgModule({
  declarations: [AppComponent, NavmenuComponent, PageNotFoundComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    MegaMenuModule,
    MenubarModule,
    ButtonModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
