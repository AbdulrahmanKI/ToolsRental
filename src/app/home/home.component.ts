import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../Services/auth.service";
import {TokenService} from "../Services/token.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService,
              private token:TokenService) { }

  public photoUrl;

  ngOnInit() {
    this.getPhoto();
  }

  getPhoto(){
    this.auth.showAll().subscribe(
        data => this.photoUrl = data ,
        error =>console.log(error),
    );
  }

  getRent(){


  }
}
