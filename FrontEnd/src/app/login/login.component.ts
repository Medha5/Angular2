import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector:'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  inputs:['signUpData']
})
export class LoginComponent implements OnInit {

  
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) {}
  userCredentials={email:'',password:''};
  ngOnInit() {
  }
  userLogin=function(userCredentials){
    this.router.navigate(['/Welcome']);
  }

}
