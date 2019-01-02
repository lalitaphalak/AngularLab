import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities:Array<string> = [];
  selectedCity:string;
  selectedCountry:string;
  @Output()
  cityNotification:EventEmitter<string> = new EventEmitter<string>();

  constructor(private myService:MyService) { }

  ngOnInit() {
  }

  @Input()
  set country(value) {
    this.cities = [];
  	this.selectedCountry = value;
    this.selectedCity = null;
  	this.getCities();
    this.notifyParent();
  }

  getCities():void {
  	this.cities = this.myService.getCities(this.selectedCountry);  	
  }

  notifyParent() {
  	this.cityNotification.emit(this.selectedCity);
  }
}
