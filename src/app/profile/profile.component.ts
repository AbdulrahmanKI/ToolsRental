import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {TokenService} from "../Services/token.service";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth : AuthService) { }

  public photoUrl;
  fileToUpload: File = null;
  public name;



  ngOnInit() {

    this.getPhoto();

    this.auth.fetch_data().subscribe(
        data => console.log(data),
        error => console.log(error)
    );

  }
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    uploadFileToActivity() {
        this.auth.postFile(this.fileToUpload).subscribe(
            data => console.log(data),
            error => console.log(error));

    }

    onClick(event){
      this.fileToUpload = <File>event.target.files[0];
      //console.log(this.fileToUpload);
    }

    getPhoto(){
      this.auth.getFile().subscribe(
          data => this.photoUrl = data ,
          error =>console.log(error),
      )
    }






}
