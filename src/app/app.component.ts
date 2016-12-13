import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bloc Chat';
  rooms: FirebaseListObservable<any>;
  messages: FirebaseListObservable<any>;
  modal: boolean;
  roomName: string;
  currentRoomId: string;
  currentMessage: string;
  userName: string;
  
  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.messages = af.database.list('/messages');
    this.modal = false;
    this.roomName = "";
    this.currentRoomId = "";
    this.currentMessage = "";
    this.userName = "";
  }
  
  login() {
    this.af.auth.login();
    //this.userName = af.auth.subscribe( );
  }

  logout() {
    this.af.auth.logout();
    this.userName = "";
  }

  addRoom() {
    this.rooms.push(this.roomName);
    this.modal = false;
  }

  setCurrentRoom(key) {
    this.currentRoomId = key;
    console.log(key);
  }

  sendMessage() {
    if (this.currentRoomId !== "") {
      let message = {
        username: "#",
        content: this.currentMessage,
        sentAt: "0:00",
        roomId: this.currentRoomId
      };
      
      this.messages.push(message);

      this.currentMessage = "";
    }
  }
}
