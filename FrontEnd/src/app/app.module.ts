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
import {HttpClientModule} from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule,MatInputModule,MatFormFieldModule,MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    CountryComponent
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,MatCheckboxModule,MatInputModule,MatFormFieldModule,MatDialogModule
    ],
  providers: [SignUpService],
  bootstrap: [AppComponent],
  exports:[CdkTableModule,MatCheckboxModule,MatInputModule,MatFormFieldModule,MatDialogModule],
  entryComponents:[CountryComponent]})
export class AppModule {}