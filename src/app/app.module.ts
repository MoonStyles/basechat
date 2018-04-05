import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MessageComponent } from './message/message.component';
import { FeedComponent } from './feed/feed.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';

import { appRoutes } from '../routes';
import { environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    MessageComponent,
    FeedComponent,
    UserlistComponent,
    ChatFormComponent,
    ChatroomComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
