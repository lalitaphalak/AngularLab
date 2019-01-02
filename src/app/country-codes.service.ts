import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CountryCodesService {

  constructor(private http:HttpClient) { }


  getCountryCodesData() {
  	let headers:HttpHeaders = new HttpHeaders().append('Access-Control-Allow-Origin', '*');

  	return this.http.get("http://services.groupkt.com/country/get/all");
  }

  searchCountryDetailsByCode(isoCode) {
  	let headers:HttpHeaders = new HttpHeaders().append('Access-Control-Allow-Origin', '*');

  	return this.http.get(`http://services.groupkt.com/country/get/iso2code/${isoCode}`);
  }
}
