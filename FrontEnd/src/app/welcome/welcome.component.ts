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

  editCountry(x) {
    let copy = Object.assign({}, x);
    let dialogRef = this.dialog.open(CountryComponent, {
      width: '500px',data: copy,
    });
    
    dialogRef.afterClosed().subscribe(newData=>{
    console.log('data edited');
    console.log(newData);
    console.log(copy);

    this.edited_data=this.result.findIndex(y=>y.name==newData.name);
    console.log(this.edited_data);
    this.result[this.edited_data]=newData;
    });   
  }

  deleteCountry(x) {
    let copy_deletedCountry = Object.assign({}, x);
    let dialogRef = this.dialog.open(CountryDeleteComponent, {
      width: '500px',data:copy_deletedCountry
    });
    // When delete is confirmed
    dialogRef.componentInstance.confirm_delete.subscribe((delete_data)=>{
      this.deleted_country=this.result.findIndex(y=>y.name==delete_data.name);
      console.log(this.deleted_country);
      this.result.splice(this.deleted_country,1);
      console.log(delete_data);
      dialogRef.close();
    });
    
    // When delete is cancelled
    dialogRef.componentInstance.no_delete.subscribe(()=>{
      dialogRef.close();
    });

    
}

}