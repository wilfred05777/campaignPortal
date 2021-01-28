import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AppComponent } from './app.component';
// import {environment} from "../environments/environment";
import { environment } from '../../../firebase-functions/src/environments/environment';
import { AuthService } from './services/auth.service';
import { MemberService } from './services/member.service';
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
    AngularFireAnalyticsModule,

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
  providers: [AuthService, MemberService],
  bootstrap: [AppComponent],
})
export class AppModule {}
