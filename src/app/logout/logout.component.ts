import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { HardcodedService } from '../service/hardcoded.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedService : HardcodedService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.logout();
  }

}
