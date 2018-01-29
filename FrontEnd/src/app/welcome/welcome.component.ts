import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/signUpService/sign-up.service';
import { HttpClient } from '@angular/common/http';
import { CountryData } from '../interfaces/country-data';
import { forEach } from '@angular/router/src/utils/collection';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CountryComponent } from '../country/country.component';
import {CountryDeleteComponent} from '../country-delete/country-delete.component'

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
  deleted_country:any;
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

  editCountry(country) {
    let copyCountry:CountryData = Object.assign({}, country);
    let dialogRef = this.dialog.open(CountryComponent, {
      width: '500px',data: copyCountry,
    });
    dialogRef.afterClosed().subscribe(countryDataDialog=> {
      // === use for type checking also
      if(countryDataDialog!==false)  {
        this.edited_data=this.result.findIndex(y=>y.name === countryDataDialog.name);
        this.result[this.edited_data]=countryDataDialog;
      }
    });
  }
  deleteCountry(country) {
    let deletedCountry:CountryData = Object.assign({}, country);
    let dialogRef = this.dialog.open(CountryDeleteComponent, {
      width: '500px',data:deletedCountry
    });
    // When delete is confirmed
    dialogRef.componentInstance.confirm_delete.subscribe((countryDataDialog)=> {
      this.deleted_country=this.result.findIndex(y=>y.name === countryDataDialog.name);    
      this.result.splice(this.deleted_country,1);
      dialogRef.close();
    });
    // When delete is cancelled
    dialogRef.componentInstance.no_delete.subscribe(()=> {
      dialogRef.close();
    });
  }
}