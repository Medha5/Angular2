import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';


export const appRoutes: Routes=[
  {path: '',redirectTo:'Home',pathMatch:'full'},
  {path: 'Signup',component: SignupComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'Home',component: HomeComponent},
  {path:'Welcome',component:WelcomeComponent}
];
