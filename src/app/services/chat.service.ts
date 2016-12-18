import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ChatService {
  rooms: FirebaseListObservable<any>;
  roomName: string;
  modal: boolean;
  currentRoomId: string;
  messages: FirebaseListObservable<any>;
  currentMessage: string;
  username: string;
  
  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.modal = false;
    this.roomName = "";
    this.currentRoomId = "";
    
    this.messages = af.database.list('/messages');
    this.currentMessage = "";
    
    this.af.auth.subscribe(authData => {
      if (authData) {
        this.username = authData.google.displayName;
      } else {
        this.username = "";
      }
    });
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
  
  toggleMenu() {
    if (document.querySelector('.sidebar').id !== "expanded") {
      document.querySelector('.sidebar').id = "expanded";
    } else {
      document.querySelector('.sidebar').id = "";
    }
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
      console.log(this.currentMessage);
      
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