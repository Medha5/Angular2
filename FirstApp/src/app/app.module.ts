import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { Link3Component } from './link3/link3.component';
import { Component } from '@angular/core/src/metadata/directives';

export const appRoutes: Routes=[
  {path: 'Signup',
  children:[
  {path: '',redirectTo:'Link1',pathMatch:'full'},
    {path: 'Link1',component:Link1Component},
    {path: 'Link2',component:Link2Component},
    {path: 'Link3',component:Link3Component}    
  ], 
   component: SignupComponent},
  {path: 'Login',
  children:[
    {path: '',redirectTo:'Link2',pathMatch:'full'},
        {path: 'Link1',component:Link1Component},
        {path: 'Link2',component:Link2Component},
        {path: 'Link3',component:Link3Component}    
      ], 
   component: LoginComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    Link1Component,
    Link2Component,
    Link3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
