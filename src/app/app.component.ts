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
  chat: FirebaseListObservable<any>;
  modal: boolean;
  roomName: string;
  currentRoomId: string;
  currentMessage: string;
  username: string;
  
  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.messages = af.database.list('/messages');
    this.modal = false;
    this.roomName = "";
    this.currentRoomId = "";
    this.currentMessage = "";
    this.af.auth.subscribe(authData => this.setUser(authData));
  }
  
  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

  addRoom() {
    this.rooms.push(this.roomName);
    this.modal = false;
  }

  setUser(authData) {
    if (authData) {
      this.username = authData.google.displayName;
    } else {
      this.username = "";
    }
  }

  setCurrentRoom(event, key) {
    this.currentRoomId = key;
    
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').className = "";
    }
    
    event.target.className = "selected";
  }

  sendMessage() {
    if (this.currentRoomId !== "" && this.currentMessage !== "") {
      let message = {
        username: this.username,
        content: this.currentMessage,
        sentAt: Date().toLocaleString(),
        roomId: this.currentRoomId
      };
      
      this.messages.push(message);

      this.currentMessage = "";
    }
  }
}
