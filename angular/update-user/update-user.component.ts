import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../model/user';
import { UserListComponent } from '../user-list/user-list.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

   user: User;
   submitted = false;


   allUser: Array<any>;


  constructor(private service: UserService, private comp: UserListComponent, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
    this.service.getupdateUser(params['id']).subscribe( data => {this.user = data; }) );

   }

  ngOnInit() {

  }



   save() {
    this.service.updateUser(this.user)
      .subscribe(() => {
    this.user = new User();
    this.comp.reloadData();
      });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
