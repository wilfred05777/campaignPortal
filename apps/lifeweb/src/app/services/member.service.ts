import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Member {
  id: string;
  eulogyNow: string;
  eulogyThen: string;
}

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(public afs: AngularFirestore) {}

  // onSubmit() {
  //   this.afs.collection('MemberMessage').add('Test');
  //   // console.log('Succes');
  // }
  data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA',
  };

  async onSubmit() {
    await this.afs.collection('cities').doc('new-city-id').set(this.data);
    // Add a new document with a generated id.
    const res = await this.afs.collection('cities').add({
      name: 'Tokyo',
      country: 'Japan',
    });

    console.log('Added document with ID: ', res.id);
    // this.afs
    //   .collection('cities')
    //   .doc('LA')
    //   .set({
    //     name: 'Los Angeles',
    //     state: 'CA',
    //     country: 'USA',
    //   })
    //   .then(function () {
    //     console.log('Document successfully written!');
    //   })
    //   .catch(function (error) {
    //     console.error('Error writing document: ', error);
    //   });
  }
}
