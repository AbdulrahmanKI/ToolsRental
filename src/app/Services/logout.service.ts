import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {


  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());

  authStatus = this.loggedIn.asObservable();

  changeAuthState ( value : boolean){
    this.loggedIn.next(value);
  }
  constructor(private token:TokenService) { }
}
