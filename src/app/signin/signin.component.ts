import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from "../Services/auth.service";
import {TokenService} from "../Services/token.service";
import {LogoutService} from "../Services/logout.service";



@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    public form = {
        email: null,
        password: null
    };
    public error = null;

    constructor(
        private auth: AuthService,
        private token: TokenService,
        private router : Router,
        private logout: LogoutService
    ){}

    ngOnInit() {


    }

     handleError(error){
            this.error = error.error.error;
     }

    getUser(){
        this.auth.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data){
        this.token.handle(data.access_token);
        this.logout.changeAuthState(true);
        this.router.navigateByUrl('/home');
        console.log(this.token.loggedIn());
        console.log(data.user);
       // this.newMessage();
    }

}
