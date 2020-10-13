import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../service/data/user-data.service';
import { Users } from './user';
import { Group } from './user-group/group';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[];
  groups: Group[];
  // [
  //   {id: 1, firstName: 'Rakesh'},
  //   {id: 2, firstName: 'Sanket'}
  // ];
  
  constructor(private userService: UserDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshUser();
   // this.getGroup();
  }

  refreshUser(){
    this.userService.executeUser().subscribe(
      response => {
        console.log(response)
        this.users = response;
      }
    );
  }

  getGroup(){
    this.userService.getUserGroup().subscribe(
      response => {
        console.log(response)
        this.groups = response;
      }
    );
  }

  deleteUser(id) {
    console.log(id);
    this.userService.deleteUser(id).subscribe(
      response => {
        console.log("User deleted " + response)
        this.refreshUser();
      }
    );
  }

  updateUser(id){
    this.router.navigate(['user', id]);
  }

}
