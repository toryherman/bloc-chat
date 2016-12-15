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
    
    this.af.auth.subscribe(authData => {
      if (authData) {
        this.username = authData.google.displayName;
      } else {
        this.username = "";
      }
    });
    
  }
  
  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

  addRoom() {
    if (this.roomName !== "") {
      this.rooms.push(this.roomName);
      this.roomName = "";
      this.modal = false; 
    } else {
      alert("Please enter a room name.");
    }
  }

  setCurrentRoom(event, key) {
    this.currentRoomId = key;
    
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').className = "";
    }
    
    event.target.className = "selected";
  }

  onKeySubmit(event) {
    //submit form when press enter
    if (event.keyCode == 13) {
      this.addRoom();
    }
  }

  onKeySend(event) {
    //send message when press enter without shift
    if (event.keyCode == 13 && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage(); 
    }
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
