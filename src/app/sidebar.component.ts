import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'sidebar',
  templateUrl: './templates/sidebar.component.html',
  styleUrls: ['./styles/sidebar.component.css', './styles/app.component.css']
})
export class SidebarComponent {
  rooms: FirebaseListObservable<any>;
  roomName: string;
  modal: boolean;
  currentRoomId: string;
  addRoom: any;
  setCurrentRoom: any;
  toggleMenu: any;
  onKeySubmit: any;
  
  constructor(public af: AngularFire, chatService: ChatService) {
    this.rooms = chatService.rooms;
    this.roomName = chatService.roomName;
    this.modal = chatService.modal;
    this.currentRoomId = chatService.currentRoomId;
    this.addRoom = chatService.addRoom;
    this.setCurrentRoom = chatService.setCurrentRoom;
    this.toggleMenu = chatService.toggleMenu;
    this.onKeySubmit = chatService.onKeySubmit;
  }
}