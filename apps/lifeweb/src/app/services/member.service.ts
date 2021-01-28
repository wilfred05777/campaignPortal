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

@Injectable()
export class MemberService {
  // public angularfirebaseCollection: AngularFirestoreCollection;
  // member: Observable<Member>;

  constructor(
    private afs: AngularFirestore
  ) // private afsCollection: AngularFirestoreCollection
  {}

  onSubmitTest() {
    // this.afs.collection('members').doc('content');
    this.afs
      .collection('members')
      .add({
        onSubmitTesteulogyNow: 'First Example Content',
        onSubmitTesteulogyThen: 'Second Example Content',
      })
      .then((docRef) => {
        console.log('Document Written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  onSubmitV2() {
    // this.afs.collection('members').doc('content');
    this.afs
      .collection('content')
      .add({
        onSubmitV2eulogyNow: 'First Example Content',
        onSubmitV2eulogyThen: 'Second Example Content',
      })
      .then(function (docRef) {
        console.log('Document Written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }
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
