import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/signUpService/sign-up.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private sign_up_service:SignUpService) { }

  username=this.sign_up_service.user.firstName + " "+ this.sign_up_service.user.lastName;
  
  
  

  ngOnInit() {
  }

}
