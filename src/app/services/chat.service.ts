import {Injectable, Query} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage} from '../models/chat-message.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ChatService {

  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
  ) {
    // this.afAuth.authState.subscribe( auth => {
      // if (auth !== undefined && auth !== null) {
      //  this.user = auth;
      // }
    // });
  }

  sendMessage(msg: string) {
    const timeStamp = this.getTimeStamp();
   // const email = this.user.email;
    const email = 'Test@test.de';
    this.chatMessages = this.getMessages();
    this.chatMessages.push( {
      message: msg,
      timeSent: timeStamp,
      userName: 'Testuser',
      //userName: this.userName,
      email: email
    } );

    console.log('ChatService - sendMessage() was called');
  }

 getMessages(): FirebaseListObservable<ChatMessage[]> {
    // Query to create our Message feed binding
   return this.db.list('messages', {
     query: {
         limitToLast: 25,
         orderByKey: true
     }
   });
 }

  getTimeStamp() {
    const now = new Date();
    const date = now.getDate() + '.' +
                 (now.getMonth() + 1) + '.' +
                 now.getFullYear();
    const time = now.getHours() + ':' +
                 now.getMinutes() + ':' +
                 now.getSeconds();
    return (date + ' ' + time);
  }
}
