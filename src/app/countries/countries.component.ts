import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries:Array<string>;
  selectedCountry:string;
  selectedCity:string;
  selectedFilter:string = 'startBy';
  str:string = 'i';

  constructor(private myService:MyService) { }

  ngOnInit() {
  	this.getCountries();
  }

  getCountries() {
  	this.countries = this.myService.getCountries();
  }

  getCity(city):void {
  	this.selectedCity = city;
  }

}
