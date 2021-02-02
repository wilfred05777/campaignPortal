import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class AuthService {
  constructor(public af: AngularFireAuth) {}

  login() {
    this.af.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.af.signOut();
  }
}
