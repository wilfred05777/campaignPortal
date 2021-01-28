import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
// import {environment} from "../environments/environment";
import { environment } from '../../../firebase-functions/src/environments/environment';
import { AuthService } from './services/auth.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SharedModule } from 'primeng/api';
import { MemberModule } from './member/member.module';
import { MemberRoutingModule } from './member/member-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    RippleModule,
    MenubarModule,
    ButtonModule,
    SharedModule,

    MemberModule,
    MemberRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
