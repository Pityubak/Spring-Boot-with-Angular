import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../shared/user.service';
import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  submitted = false;




  constructor(private service: UserService, private comp: UserListComponent) { }

  ngOnInit() {
    }


  save() {
    this.service.addUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.comp.reloadData();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
