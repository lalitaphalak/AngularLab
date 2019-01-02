import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  rememberMe:boolean;
  validated:boolean;

  constructor() { }

  ngOnInit() {
  }

  validateCreds() {
  	if(this.username === 'testuser' && this.password === 'testpassword') {
  		this.validated = true;
  	} else {
  		this.validated = false;
  	}
  }

}
