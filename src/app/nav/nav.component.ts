import {Component, Input, OnInit} from '@angular/core';
import {LogoutService} from "../Services/logout.service";

import {Router} from "@angular/router";
import {TokenService} from "../Services/token.service";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  private username;
  public appTitle = 'ToolsRental';

  public loggedIn: boolean;

  constructor(private logout : LogoutService,
              private router : Router,
              private token : TokenService,
              private auth : AuthService) { }

  ngOnInit() {
    this.logout.authStatus.subscribe(value => this.loggedIn = value);
    this.auth.fetch_data().subscribe(
        data => this.username = data);
    console.log(this.loggedIn);
  }


  logout1(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.logout.changeAuthState(false);
    this.router.navigateByUrl('signin');
  }
}
