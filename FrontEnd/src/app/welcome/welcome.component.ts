import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/signUpService/sign-up.service';
import { HttpClient } from '@angular/common/http';
import { CountryData } from '../interfaces/country-data';
import { forEach } from '@angular/router/src/utils/collection';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CountryComponent } from '../country/country.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  results: object;
  constructor(

    private sign_up_service: SignUpService,
    private http: HttpClient,public dialog: MatDialog
  ) { }


  username = this.sign_up_service.user.firstName + ' ' + this.sign_up_service.user.lastName;
  dataResult: any;
  result: Array<CountryData> = new Array();
  edited_data:any;
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
      this.dataResult = data;
      this.dataResult.forEach(element => {
        this.result.push({
          name: element['name'],
          code: element['alpha3Code'],
          capital: element['capital'],
        });
      });
    });
  }

  editCountry(x) {
    let dialogRef = this.dialog.open(CountryComponent, {
      width: '500px',data: x,
    });
    
    dialogRef.afterClosed().subscribe(newData=>{
console.log('data edited');
console.log(newData);
console.log(x);
if(newData){
  this.edited_data=this.dataResult.find(y=>y.name==x.name);
  console.log(this.edited_data);
  
  console.log(this.result);
}
else{
console.log('Close without Saving button');
}

    });
    
    
  }
  deleteCountry(x) {
    console.log(x);
      }
}

