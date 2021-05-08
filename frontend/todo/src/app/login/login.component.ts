import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  pass = ''
  invalidLogin = false
  errorMessage = 'Invalid Creds . . .'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username)
    console.log(this.pass)
    if(this.username === 'swarup' && this.pass === 'das') {
      //redirect to the welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
