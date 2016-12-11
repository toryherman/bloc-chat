import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RoomService {
  list: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.list = af.database.list('/list');
  }
}
