import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'messages',
  templateUrl: './templates/messages.component.html',
  styleUrls: ['./styles/messages.component.css', './styles/app.component.css']
})
export class MessagesComponent {
  currentRoomId: string;
  messages: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, chatService: ChatService) {
    this.currentRoomId = chatService.currentRoomId;
    this.messages = chatService.messages;
  }
}