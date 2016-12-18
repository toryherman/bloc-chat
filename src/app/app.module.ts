import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';

import { ChatService } from './services/chat.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDmruA_FhZEpwmFivUFxHbC5uNwp_6Lr_8",
  authDomain: "bloc-chat-3da5a.firebaseapp.com",
  databaseURL: "https://bloc-chat-3da5a.firebaseio.com",
  storageBucket: "bloc-chat-3da5a.appspot.com",
  messagingSenderId: "680666668997"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [ ChatService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
