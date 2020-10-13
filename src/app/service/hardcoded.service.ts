import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedService {

  constructor() { }

  authenticate(userName, password) {
    if(userName === 'rak' && password === 'pass') {
      sessionStorage.setItem("userName", userName);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("userName");
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('userName');
  }
}
