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
  
  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }
  
  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

  addRoom() {
    let newRoom = prompt("Enter new room name");
    this.rooms.push(newRoom);
  }
}
