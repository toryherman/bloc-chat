import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./styles/app.component.css']
})
export class AppComponent {
  title = 'Bloc Chat';
  
  constructor(public af: AngularFire) { }
  
  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}   