import { Injectable } from '@angular/core';

@Injectable()
export class SignUpService {

  constructor() {
   
   }
    public user={firstName:'',lastName:'',password:'',confPassword:'',email:''};

    userSubmit1=function(userObject){
      
      // userObject.firstName="MedhaNaini";
      this.user=userObject;  
    
    }
    

}
