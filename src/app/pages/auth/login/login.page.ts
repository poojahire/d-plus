import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordIcon = 'eye-off';
  loginMethod: string = 'email'; // Initialize it with a default value
  email: string = ''; // Initialize the email property
  loading: boolean = false; // Initialize the loading property

  toggleLoginMethod() {
    this.loginMethod = this.loginMethod === 'email' ? 'otp' : 'email';
  }

  submitForm() {this.loginMethod = this.loginMethod === 'email' ? 'otp' : 'email';
  }
  constructor() { }

  ngOnInit() {
  }

}
