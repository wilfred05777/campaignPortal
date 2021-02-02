import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Member {
  id?: string;
  eulogyNow: string;
  eulogyThen: string;
}

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class MemberService {
  private memberCollection: AngularFirestoreCollection<Member>;
  member$: Observable<Member>;

  constructor(
    private afs: AngularFirestore,
    private afsCollection: AngularFirestoreCollection
  ) {}

  fetchAllMember() {}

  onSubmit() {
    this.afs
      .collection('members')
      .add({
        // connect ui input here
      })
      .then((docRef) => {
        console.log('Document With ID: ', docRef.id);
      })
      .catch();
    // this.afs.collection('members').doc('content');
    // this.afs
    //   .collection('members')
    //   .add({
    //     onSubmitTesteulogyNow: 'First Example Content',
    //     onSubmitTesteulogyThen: 'Second Example Content',
    //   })
    //   .then((docRef) => {
    //     console.log('Document Written with ID: ', docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error('Error adding document: ', error);
    //   });
  }

  OnSaveTwo() {
    this.afs.collection('members').add({
      eulogyNow: 'content 1',
      eulogyThen: 'Eulogythen Content',
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
  async onSubmitNode() {
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
