import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //environment = "http://localhost:8082";
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;

  constructor(private httpClient: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  loginJWT(userName, password){
   
    return this.httpClient.post<any>('http://localhost:8765/api/user-module/authenticate', {
      userName,
      password
    }).pipe(
      map(
        data => {
          console.log("-----" +userName)
          console.log(`${data.jwt}`)
          sessionStorage.setItem("aunthenticatedUser", userName)
          sessionStorage.setItem("token", `Bearer ${data.jwt}`)
          return data
        }
      )
      
    );
  }
  
  login1(userName, password){
    let basicAuth = "Basic " + window.btoa(userName + ":" + password);
    let headers = new HttpHeaders({
      Authorization : basicAuth
    });

    return this.httpClient.get<Users>('http://localhost:8765/api/user-module/authenticate', 
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem("aunthenticatedUser", userName)
          sessionStorage.setItem("token", basicAuth)
          return data
        }
      )
      
    );
  }
  
  getAunthicatedUser(){
    return sessionStorage.getItem("aunthenticatedUser");
  }

  getAunthicatedToken(){
    if(this.getAunthicatedUser())
      return sessionStorage.getItem("token");
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("aunthenticatedUser");
    return !(user === null)
  }
  
  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('aunthenticatedUser');
    sessionStorage.removeItem('token');
   // this.currentUserSubject.next(null);
  }

}
