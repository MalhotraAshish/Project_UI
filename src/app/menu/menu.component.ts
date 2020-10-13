import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { HardcodedService } from '../service/hardcoded.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn = false;
  constructor(public hardcodedService : HardcodedService,
    public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodedService.isUserLoggedIn();
  }

}
