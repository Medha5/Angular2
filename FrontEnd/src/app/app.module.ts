import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { appRoutes } from './/app-routing.module';
import {SignUpService} from './services/signUpService/sign-up.service';
import {RouterModule, Routes} from '@angular/router';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent
    ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule {}