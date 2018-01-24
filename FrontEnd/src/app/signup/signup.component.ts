import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignUpService } from '../services/signUpService/sign-up.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sign_up_service:SignUpService
  ) {}
  public  user =this.sign_up_service.user;
  ngOnInit() {}
  userSubmit=function(userObject) {
    console.log(this);
    this.sign_up_service.userSubmit(userObject);
  this.router.navigate(['/Login']);
  };
}
