import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'evodlife-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Observable<any[]>;
  get currentUser() {
    return this.authService.auth.user;
  };

  constructor(firestore: AngularFirestore, private authService: AuthService) {
    this.items = firestore.collection('items').valueChanges();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
