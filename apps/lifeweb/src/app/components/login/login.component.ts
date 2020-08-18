import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'evodlife-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  items: Observable<any[]>;
  showUserDetail = false;
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
