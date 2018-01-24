import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/signUpService/sign-up.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private sign_up_service:SignUpService,
    private http:HttpClient) { }

  username=this.sign_up_service.user.firstName + " "+ this.sign_up_service.user.lastName;
  result:any;
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
      // Read the result field from the JSON response.
      // console.log(data);
      this.result=data;
      console.log(this.result);
      // console.log(this.result.length);
    });
  }
  

  

}
