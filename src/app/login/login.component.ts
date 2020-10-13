import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HardcodedService } from '../service/hardcoded.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  invalidCred = "Invalid credentials";
  invalidLogin = false;
  constructor(private router: Router,
    private hardcodedService: HardcodedService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    //console.log(this.userName)
    if(this.hardcodedService.authenticate(this.userName, this.password)) {
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  login1(){
    //console.log(this.userName)

    this.authService.loginJWT(this.userName, this.password).subscribe(
      data => {
        //console.log("1111" +this.userName)
        this.router.navigate(['welcome']);
        this.invalidLogin = false;
      },
      error => {
        //console.log("2222" + error)
        this.invalidLogin = true;
      }
    )
     // console.log("333 " + this.authService.getAunthicatedUser());
      //console.log("444 " + this.authService.getAunthicatedToken());
  }
}
