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
  modal: boolean;
  roomName: string;
  
  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.modal = false;
    this.roomName = "";
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
}
