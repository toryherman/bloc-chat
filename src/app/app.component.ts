import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./styles/app.component.css', './styles/sidebar.component.css', './styles/messages.component.css', './styles/textbox.component.css', './styles/modal.component.css']
})
export class AppComponent {
  title = 'Bloc Chat';

  rooms: FirebaseListObservable<any>;
  messages: FirebaseListObservable<any>;
  roomName: string;
  modal: boolean;
  currentRoomId: string;
  currentMessage: string;
  username: string;
  addRoom: any;
  setCurrentRoom: any;
  toggleMenu: any;
  onKeySubmit: any;
  onKeySend: any;
  sendMessage: any;
  
  constructor(public af: AngularFire, chatService: ChatService) {
    this.rooms = chatService.rooms;
    this.messages = chatService.messages;
    this.roomName = chatService.roomName;
    this.modal = chatService.modal;
    this.currentRoomId = chatService.currentRoomId;
    this.currentMessage = chatService.currentMessage;
    this.username = chatService.username;
    this.addRoom = chatService.addRoom;
    this.setCurrentRoom = chatService.setCurrentRoom;
    this.toggleMenu = chatService.toggleMenu;
    this.onKeySubmit = chatService.onKeySubmit;
    this.onKeySend = chatService.onKeySend;
    this.sendMessage = chatService.sendMessage;
  }
  
  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}   