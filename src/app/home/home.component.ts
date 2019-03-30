import {Component, OnInit} from '@angular/core';
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
              private token:TokenService,
              private route:Router) { }

  public photoUrl;




  public form = {searchName : null};

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
    if (!this.token.loggedIn()){
      this.route.navigateByUrl('/signin');
      return;
    }
    console.log('asd');
    //this method is not completed

  }

  //retrieve all tools user searched
  getSearch(){
    this.auth.search(this.form.searchName).subscribe(
        data=> this.photoUrl = data,
        error=>console.log(error)
    );
  }

  getToolData(data){
    this.auth.message = data;
    this.route.navigateByUrl('/tooldata')
  }

}
