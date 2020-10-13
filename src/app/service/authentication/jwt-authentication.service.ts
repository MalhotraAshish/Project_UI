import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // add authorization header with jwt token if available
  //   let currentUser = this.authenticationService.currentUser;
  //   if (currentUser && currentUser.token) {
  //       request = request.clone({
  //           setHeaders: {
  //               Authorization: `Bearer ${currentUser.token}`
  //           }
  //       });
  //   }

  //   return next.handle(request);
//}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //let userName = 'rak';
  //let password = 'pass';
  //let authString = "Basic " + window.btoa(userName + ":" + password);
  let autherizationString = this.authenticationService.getAunthicatedToken();
  let userName = this.authenticationService.getAunthicatedUser();
  console.log("in intercepter: " + autherizationString + " - " + userName)
  if(autherizationString && userName) {
    request = request.clone({
      setHeaders : {
        Authorization : autherizationString
      }
    })
  }
  
  return next.handle(request);
}
}
