import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {FormsModule} from "@angular/forms";
import {AlertModule} from "ngx-bootstrap";
import { ProfileComponent } from './profile/profile.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToolDataComponent } from './tool-data/tool-data.component';
import {photoID} from "./User";
import { RentComponent } from './rent/rent.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routingComponents,
    PageNotFoundComponent,
    HomeComponent,
    SigninComponent,
    ProfileComponent,
    ToolDataComponent,
    RentComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
