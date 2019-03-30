import {Component,  OnInit, } from '@angular/core';

import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-tool-data',
  templateUrl: './tool-data.component.html',
  styleUrls: ['./tool-data.component.css']
})
export class ToolDataComponent implements OnInit {


  constructor(private auth:AuthService) { }
  public photoUrl;

  private id = this.auth.message;

  // public comment;

  ngOnInit() {
    this.getPhoto();
  }

  getPhoto(){
    this.auth.showAll().subscribe(
        data => this.photoUrl = data ,
        error =>console.log(error),
    );
  }

  addComment(data){
    console.log(data);
  }


}

