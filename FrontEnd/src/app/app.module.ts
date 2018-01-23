import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; //this is for banana in the box model, i.e. [(ngModel)]


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import {SignUpService} from './services/signUpService/sign-up.service';





export const appRoutes: Routes=[
  {path: '',redirectTo:'Home',pathMatch:'full'},
  {path: 'Signup',component: SignupComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'Home',component: HomeComponent},
  {path:'Welcome',component:WelcomeComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}