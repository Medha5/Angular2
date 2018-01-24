import { Injectable } from '@angular/core';
@Injectable()
export class SignUpService {
  public user;
  constructor() {
     this.user= {firstName:'',lastName:'',password:'',confPassword:'',email:''};
   }
    userSubmit=function(userObject) { this.user=userObject;};
}
