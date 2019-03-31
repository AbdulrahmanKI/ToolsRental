import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {TokenService} from "../Services/token.service";
import {count, first} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth : AuthService) { }

  public photoUrl;
  public form = {
    fileToUpload: File = null,
    fileTitle : null,
    price : null
  };
  public name;


   public photoName = 'asd';


  ngOnInit() {
    this.getPhoto();
    this.auth.fetch_data().subscribe(
        data => console.log(data),
        error => console.log(error)
    );


  }
    handleFileInput(files: FileList) {
        this.form.fileToUpload = files.item(0);
    }

    uploadFileToActivity() {
        this.auth.postFile(this.form).subscribe(
            data => console.log(data),
            error => console.log(error));
        this.getPhoto();
    }

    onClick(event){
      this.form.fileToUpload = <File>event.target.files[0];
      //console.log(this.fileToUpload);
    }


    getPhoto(){
      this.auth.getFile().subscribe(
          data => this.photoUrl = data ,
          error =>console.log(error),
      )
    }

    removePhoto(data){
      this.photoName = data;
      console.log(this.photoName);
       this.auth.deletePhoto(this.photoName).subscribe(
        data => console.log(data),
        error => console.log(error)
        );
      this.getPhoto();
    }







}
