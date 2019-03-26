import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Observable, throwError} from "rxjs";

import {catchError} from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
      private http:HttpClient,
      private token:TokenService) { }

  private url = 'http://localhost:8000/api/auth';

  login(data){
    return this.http.post( `${this.url}/login` ,data );
  }

  signup(data){
    return this.http.post( `${this.url}/signup` ,data)
  }

  fetch_data(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.get()}`
      })
    };

    return this.http.get(`${this.url}/me`, httpOptions );
  }


  postFile(file) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.get()}`
      })
    };

    console.log(file.fileToUpload.name);

    // const endpoint = `${this.url}/addimage`;
    const formData: FormData = new FormData();
    formData.append('image', file.fileToUpload, file.fileToUpload.name);
    formData.append('fileTitle', file.fileTitle);
    return this.http.post(`${this.url}/addimage`,formData , httpOption );
  }

  getFile(){
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.get()}`
      })
    };
    return this.http.get(`${this.url}/show` , httpOption );

  }

}
