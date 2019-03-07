import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";
import {USERDATA} from "../User";
import {RequestOptions} from "@angular/http";



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

}
