import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './signup/signup.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {ProfileComponent} from "./profile/profile.component";
import {BeforeLoginService} from "./Services/before-login.service";
import {AfterLoginService} from "./Services/after-login.service";
import {ToolDataComponent} from "./tool-data/tool-data.component";


// @ts-ignore
const routes: Routes = [
    {path: '' , redirectTo: '/home', pathMatch: 'full'},
    {path: 'home' , component: HomeComponent},
    {path: 'signin' , component: SigninComponent,canActivate: [BeforeLoginService] },
    {path: 'signup', component: SignupComponent , canActivate: [BeforeLoginService]},
    {path: 'profile' , component: ProfileComponent , canActivate: [AfterLoginService] },
    {path: 'tooldata' , component: ToolDataComponent  },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SignupComponent , ProfileComponent, PageNotFoundComponent];
