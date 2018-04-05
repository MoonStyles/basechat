import { Component, OnInit , OnChanges} from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor( private chatService: ChatService) { }

  ngOnInit() {
    this.getChatMessages();
  }

  ngOnChanges() {
    this.getChatMessages();
  }

  getChatMessages() {
    this.feed = this.chatService.getMessages();
  }
}
