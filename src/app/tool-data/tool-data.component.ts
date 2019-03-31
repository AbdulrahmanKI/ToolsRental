import {Component,  OnInit, } from '@angular/core';

import {AuthService} from "../Services/auth.service";
import {TokenService} from "../Services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tool-data',
  templateUrl: './tool-data.component.html',
  styleUrls: ['./tool-data.component.css']
})
export class ToolDataComponent implements OnInit {


  constructor(private auth:AuthService,
              private token :TokenService,
              private route : Router) { }
  public photoUrl;

  private id = this.auth.message +1;
   public comment;
   private commentData = [];


  ngOnInit() {
    this.showImage()
    this.displayComment()

  }
  addComment(data){
    this.commentData = [data,this.id];
    this.auth.addComment(this.commentData).subscribe(
        data => console.log(data),
        error => console.log(error)
    );
    this.displayComment();
  }

  showCommentBox(){
    return this.token.loggedIn();
  }

  showImage(){
    this.auth.showAll().subscribe(
        data => this.photoUrl = data,
        error => console.log(error)
    );
  }

  displayComment(){
    this.auth.showComment(this.id).subscribe(
        data => this.comment = data,
        error => console.log(error)
    );
  }

  getRent(){
    if (!this.token.loggedIn()){
      this.route.navigateByUrl('/signin');
      return;
    }
    this.route.navigateByUrl('/rent');

  }


}

