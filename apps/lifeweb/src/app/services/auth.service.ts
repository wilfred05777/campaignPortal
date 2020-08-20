import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { auth } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  login() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }
}
