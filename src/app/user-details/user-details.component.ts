import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../service/data/user-data.service';
import { Users } from '../users/user';
import { Group } from '../users/user-group/group';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: Users;
  groups: Group[];
  constructor(private userdataService: UserDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
    this.getGroup();
  }

  getUser(){
    this.id = this.route.snapshot.params['id'];
    this.user = new Users(1,'','','','','',false,'');
    this.userdataService.getUser(this.id).subscribe(
      data => this.user = data
    );
  }

  saveUser(){
    this.userdataService.updateUser(this.id, this.user)
        .subscribe(
          data => {
            console.log();
          }
        )
  }

  getGroup(){
    this.userdataService.getUserGroup().subscribe(
      data => this.groups = data
    );
  }

}
