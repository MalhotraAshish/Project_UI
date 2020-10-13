import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let userName = 'user';
    let password = 'pass';
    let authString = "Basic " + window.btoa(userName + ":" + password);
    req = req.clone({
      setHeaders : {
        Authorization : authString
      }
    })
    return next.handle(req);
  }
}
