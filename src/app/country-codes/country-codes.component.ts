import { Component, OnInit } from '@angular/core';
import { CountryCodesService } from '../country-codes.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-country-codes',
  templateUrl: './country-codes.component.html',
  styleUrls: ['./country-codes.component.css']
})
export class CountryCodesComponent implements OnInit {
 	data:any;
 	error:any = null; 


  constructor(private countryService:CountryCodesService) { }

  ngOnInit() {
  }

  getAllData():void {
		this.countryService.getCountryCodesData().subscribe(
			(res) => {
				if(typeof res === 'object') {
					this.fetchData(res);
				}
			},
			(error) => this.error = error
		);
  }

  fetchData(data) {
  	let newData = {...data};
  	this.data = newData.RestResponse.result;
  }

}
