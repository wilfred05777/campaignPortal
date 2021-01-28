import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Member {
  id: string;
  eulogyNow: string;
  eulogyThen: string;
}

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  // public angularfirebaseCollection: AngularFirestoreCollection;
  member: Observable<Member>;

  constructor(
    public afs: AngularFirestore,
    public afsCollection: AngularFirestoreCollection
  ) {}

  // CREATE
  async onSubmit() {
    await this.afs.collection('members').doc('content');
    const res = await this.afs.collection('member').add({
      eulogyNow: 'type something',
      eulogyThen: 'something',
    });
    console.log('Added document with ID: ', res.id);
  }

  // // Testing to save data in firestore
  // data = {
  //   name: 'Los Angeles',
  //   state: 'CA',
  //   country: 'USA',
  // };

  // async onSubmit() {
  //   await this.afs.collection('cities').doc('new-city-id').set(this.data);
  //   // Add a new document with a generated id.
  //   const res = await this.afs.collection('cities').add({
  //     name: 'Tokyo',
  //     country: 'Japan',
  //   });

  //   console.log('Added document with ID: ', res.id);
  // }
}
