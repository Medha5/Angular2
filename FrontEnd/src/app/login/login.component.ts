import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignUpService } from '../services/signUpService/sign-up.service';

@Component({
  selector:'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // inputs:['signUpData']
})
export class LoginComponent implements OnInit {

  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private sign_up_service:SignUpService
  ) {}
  userCredentials={email:'',password:''};
  ngOnInit() {
  }
  userLogin=function(userCredentials){
    this.router.navigate(['/Welcome']);
  }

}
