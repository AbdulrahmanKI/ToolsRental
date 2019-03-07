import { Component, OnInit } from '@angular/core';

import {AuthService} from "../Services/auth.service";

import {TokenService} from "../Services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
      private auth : AuthService,
      private token: TokenService,
      private router: Router
  ) { }



  public error = [];

  public form = {
    name: null,
    email:null,
    password:null,
    rePassword:null

  };

  ngOnInit() {
  }

  handleError(error){
    this.error = error.error.errors;
  }

  addUser(){
    this.auth.signup(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
    );
  }

    handleResponse(data){
        this.token.handle(data.access_token);
        this.router.navigateByUrl('/profile');
    }

}
