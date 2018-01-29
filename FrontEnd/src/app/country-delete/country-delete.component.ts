import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

import { CountryData } from '../interfaces/country-data';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-delete',
  templateUrl: './country-delete.component.html',
  styleUrls: ['./country-delete.component.css']
})
export class CountryDeleteComponent implements OnInit {
  confirm_delete:EventEmitter<any>=new EventEmitter();
  no_delete:EventEmitter<any>=new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: CountryData,
  public dialog:MatDialog) { }

  ngOnInit() {
  }

  onDelete=function(x){
    // console.log(x);
    this.confirm_delete.emit(x);
  }
  cancelDelete=function(){
    this.no_delete.emit();
  }

}
