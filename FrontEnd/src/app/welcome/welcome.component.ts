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
  }
  deleteCountry(x) {
    console.log(x);
      }
}

