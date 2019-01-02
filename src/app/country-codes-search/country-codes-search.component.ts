import { Component, OnInit } from '@angular/core';
import { CountryCodesService } from '../country-codes.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-country-codes-search',
  templateUrl: './country-codes-search.component.html',
  styleUrls: ['./country-codes-search.component.css']
})
export class CountryCodesSearchComponent implements OnInit {
  data:any;
  isoCode:string;
  error:any;
  
  constructor(private countryService:CountryCodesService) { }

  ngOnInit() {
  }

  searchData() {
  	this.countryService.searchCountryDetailsByCode(this.isoCode).subscribe(
  		(res) => this.fetchData(res),
  		(error) => this.error = error
  	);
  }

  fetchData(data) {
  	let newData = {...data};
  	this.data = newData.RestResponse.result;
  }

}
