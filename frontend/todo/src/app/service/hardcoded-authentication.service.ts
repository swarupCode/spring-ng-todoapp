import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticateUser(username, password) {
    if(username === 'swarup' && password === 'das') {
      console.log('Before --' + this.isUserLoggedIn)
      sessionStorage.setItem("username", username)
      console.log('After --' + this.isUserLoggedIn)
      return true
    }
    return false
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('username')
  }
  
}
