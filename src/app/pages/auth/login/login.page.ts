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
  otpEmail: string = ''; // Initialize the email for OTP

  otp: string = ''; // Initialize the OTP property
  otpEmailEntered: boolean = false; // Initialize the flag

  toggleLoginMethod() {
    this.loginMethod = this.loginMethod === 'email' ? 'otp' : 'email';
  }

  toggleOTPEmail() {
    this.otpEmailEntered = !this.otpEmailEntered;
  }
  submitForm() {this.loginMethod = this.loginMethod === 'email' ? 'otp' : 'email';
  }
  constructor() { }

  ngOnInit() {
  }

}
