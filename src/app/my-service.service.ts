import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

  countriesMap:object = {
    "Iceland": ["Akureyri", "Keflavik"],
    "India": ["Mumbai", "Thane"],
    "Indonesia": ["Denpasar", "Bogor"],
    "Iran": ["Abadan", "Abhar"],
    "Iraq": ["Al Zab", "Erbil"],
    "Ireland": ["Dublin", "Cork"],
    "Israel": ["Afula", "Arad"],
    "Italy": ["Rome", "Milan"],
    "Ivory Coast": ["Turin", "Genoa"],
    "Gabon": ["Bari", "Venice"],
    "The Gambia": ["Verona", "Naples"],
    "Georgia": ["Catania", "Palermo"],
    "Germany": ["Taranto", "Trieste"],
    "Ghana": ["Florence", "Bologna"],
    "Greece": ["Parma", "Modena"],
    "Grenada": ["Brescia", "Livorno"],
    "Guatemala": ["Cagliari", "Foggia"],
    "Guinea": ["Rimini", "Perugia"],
    "Guinea-Bissau": ["Ravenna", "Prato"],
    "Guyana": ["Parmika", "Sassari"],
    "East Timor": ["Monza", "Latina"],
    "Ecuador": ["Pescara", "Ferrara"],
    "Egypt": ["Forli", "Trento"],
    "El Salvador": ["Monazaka", "Bergamo"],
    "Equatorial Guinea": ["Terni", "Syracuse"],
    "Eritrea": ["Formono", "Bolzano"],
    "Estonia": ["Novara", "Andria"],
    "Ethiopia": ["Udine", "Lecce"]
  }
  

  constructor() { }

  getCountries():Array<string> {
  	return Object.keys(this.countriesMap);
  }

  getCities(value):Array<string> {
  	if(this.countriesMap[value]) {
      return this.countriesMap[value]
    }
  	return [];
  }

}
