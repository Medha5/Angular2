import { Component, OnInit,Inject } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

import { CountryData } from '../interfaces/country-data';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CountryData,
public dialog:MatDialog) { }
  ngOnInit() {
  }
  
  
}