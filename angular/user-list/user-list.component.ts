import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User>;

  constructor(private userservice: UserService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userservice.getAll().subscribe(data => {
      this.users = data;
    } );
    this.router.navigate(['/userlist']);
  }


  delete(user: User) {
    this.userservice.deleteUser(user).subscribe
    (() => { this.reloadData(); });

  }
}

