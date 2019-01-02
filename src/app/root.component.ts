import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  ComponentTitle:string = "Hi Welcome to Angular Lab Assignment 1";
  FontColor:string = "Blue";
  showComponent:boolean = true;

  constructor() {
  }

  checkActiveLink(linkPath) {
    if(location.pathname === '/') {
      this.showComponent = true; 
    } else {
      this.showComponent = false;
    }
    if(linkPath === location.pathname) {
      return "nav-item active";
    }
    return "nav-item"
  }
}
