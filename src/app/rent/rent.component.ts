import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {FormControl, Validators} from "@angular/forms";



@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  constructor(private auth:AuthService) { }
    public photoUrl;
    private id = this.auth.message;

    signupFormModalName = new FormControl('', Validators.required);
    signupFormModalEmail = new FormControl('', Validators.email);
    signupFormModalPassword = new FormControl('', Validators.required);
  ngOnInit() {
      this.showImage()
  }
    showImage(){
        this.auth.showAll().subscribe(
            data => this.photoUrl = data,
            error => console.log(error)
        );
    }

    ch

}
