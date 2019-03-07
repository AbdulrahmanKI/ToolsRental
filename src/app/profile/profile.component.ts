import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {TokenService} from "../Services/token.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth : AuthService,
              private token : TokenService) { }



  public name;
  public data = `Bearer ${this.token.get()}`;



  ngOnInit() {
    console.log(this.data);
    this.auth.fetch_data().subscribe(
        data =>this.name = data);
  }

  handleResponse() {
     this.auth.fetch_data().subscribe(
        data =>console.log(data));

  }



}
