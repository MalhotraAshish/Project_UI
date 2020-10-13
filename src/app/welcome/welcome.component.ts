import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  errorMessage = "An error occure. Please contact ***.***"
  constructor(private userdataService: UserDataService) { }

  ngOnInit(): void {
  }

  executeHelloWorld(){
    console.log(this.userdataService.executeUser());
    this.userdataService.executeUser().subscribe();
  }

  
}
