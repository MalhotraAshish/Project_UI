import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/data/user-data.service';
import { Group } from './group';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {

  groups: Group[];

  constructor(private userdataService: UserDataService) { }

  ngOnInit(): void {
  }

  getGroups(){
    this.userdataService.getUserGroup().subscribe(
      response => {
        console.log(response)
        this.groups = response;
      }
    );
  }

}
