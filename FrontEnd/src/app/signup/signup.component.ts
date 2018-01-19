import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }
 
   user={firstName:'',lastName:'',password:'',confPassword:'',email:''};
  userSubmit=function(anotherUser){
    console.log(this);
    this.user.firstName="Santhosh";
    anotherUser.firstName="Naini";
  this.router.navigate(['/Login']);
  }

}
