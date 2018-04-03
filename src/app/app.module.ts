import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MessageComponent } from './message/message.component';
import { FeedComponent } from './feed/feed.component';
import { UserlistComponent } from './userlist/userlist.component';

const config = {
  apiKey: 'AIzaSyA7M7i0oHfziXqIjuR9tmbf2-vT9W6d6WQ',
  authDomain: 'basechat-4cebb.firebaseapp.com',
  databaseURL: 'https://basechat-4cebb.firebaseio.com',
  projectId: 'basechat-4cebb',
  storageBucket: 'basechat-4cebb.appspot.com',
  messagingSenderId: '434125805191'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    MessageComponent,
    FeedComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
