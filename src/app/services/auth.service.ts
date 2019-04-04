import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
      private http:HttpClient,
      private token:TokenService) { }

  public message;
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

    const formData: FormData = new FormData();
    formData.append('image', file.fileToUpload, file.fileToUpload.name);
    formData.append('fileTitle', file.fileTitle);
    formData.append('price',file.price);
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


  deletePhoto(data){
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.get()}`
      })
    };

    return this.http.post(`${this.url}/delete`,data,httpOption);
  }

  showAll(){
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.get()}`
      })
    };
    return this.http.get(`${this.url}/showAll` , httpOption );
  }

  search(data){
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.get()}`
      })
    };
    return this.http.post(`${this.url}/search` ,data, httpOption );
  }

  addComment(data){
      const httpOption = {
          headers: new HttpHeaders({
              'Authorization': `Bearer ${this.token.get()}`
          })
      };
      const formData: FormData = new FormData();
      formData.append('comment', data[0]);
      formData.append('id',data[1]);
      return this.http.post(`${this.url}/comment` ,formData, httpOption );
  }

  showSpecificPhoto(data){
      const httpOption = {
          headers: new HttpHeaders({
              'Authorization': `Bearer ${this.token.get()}`
          })
      };

      return this.http.post(`${this.url}/showSpecificPhoto/${data}` ,data, httpOption );
  }

  showComment(data){
      const httpOption = {
          headers: new HttpHeaders({
              'Authorization': `Bearer ${this.token.get()}`
          })
      };

      return this.http.post(`${this.url}/showComment/${data}` ,data, httpOption );
  }
}

