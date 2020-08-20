import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AuthService} from "./services/auth.service";
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import {ButtonModule, MegaMenuModule, MenubarModule} from "primeng";
import {MemberModule} from "./member/member.module";
import {MemberRoutingModule} from "./member/member-routing.module";

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    MegaMenuModule,
    MenubarModule,
    ButtonModule,

    MemberModule,
    MemberRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
