import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from'@angular/common/http';
import { identity } from 'rxjs';
import { Users } from 'src/app/users/user';
import { AuthenticationService } from '../authentication.service';
import { Group } from 'src/app/users/user-group/group';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient,
    private authService: AuthenticationService) { }

  executeUser(){
    let basicAuthString = this.createBasicHeader();
    let jwtAuthString = this.authService.getAunthicatedToken();
    let headers = new HttpHeaders({
      Authorization : jwtAuthString
    });
    console.log(basicAuthString);
    return this.httpClient.get<Users[]>('http://localhost:8765/api/user-module/user/getAllUsers',
    {headers : headers});
  }

  getUser(id){
    return this.httpClient.get<Users>(`http://localhost:8765/api/user-module/user/${id}`);
  }

  updateUser(id, users){
    let jwtAuthString = this.authService.getAunthicatedToken();
    let headers = new HttpHeaders({
      Authorization : jwtAuthString
    });
    return this.httpClient.put(`http://localhost:8765/api/user-module/updateUser/${id}`, users);
  }

  deleteUser(id){
    console.log("service - " + id);
    return this.httpClient.delete(`http://localhost:8765/api/user-module/user/${id}`);
  }

  getUserGroup(){
    return this.httpClient.get<Group[]>('http://localhost:8765/api/user-module/group/getAllUserGroup');
  }

  createBasicHeader(){
    let userName = "user";
    let password = "pass";
    let basicString = 'Basic ' + window.btoa(userName + ':' + password);
    return basicString;
  }
}
