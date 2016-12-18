import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'textbox',
  templateUrl: './templates/textbox.component.html',
  styleUrls: ['./styles/textbox.component.css', './styles/app.component.css']
})

export class TextboxComponent {
  currentRoomId: string;
  messages: FirebaseListObservable<any>;
  currentMessage: string;
  username: string;
  modal: boolean;
  onKeySend: any;
  sendMessage: any;
  
  constructor(public af: AngularFire, chatService: ChatService) {
    this.currentRoomId = chatService.currentRoomId;
    this.messages = chatService.messages;
    this.currentMessage = chatService.currentMessage;
    this.username = chatService.username;
    this.modal = chatService.modal;
    this.onKeySend = chatService.onKeySend;
    this.sendMessage = chatService.sendMessage;
  }
}