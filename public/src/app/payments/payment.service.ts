import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class PaymentService {

  userId: string;

  // Add as constructor parameters: private db: AngularFireDatabase, private afAuth: AngularFireAuth
  constructor() {
    // this.afAuth.authState.subscribe((auth) => {
    //   if (auth) this.userId = auth.uid
    // })
  }

  processPayment(token: any, amount){
    // const payment = { token, amount }
    // return this.db.list('/payments/${this.userId}').push(payment)
    console.log(token, amount)
  }

}
