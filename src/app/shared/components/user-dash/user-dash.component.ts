import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss']
})
export class UserDashComponent implements OnInit {

  usersArray: Array<Iuser> = [];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this._userService.fetchAll().subscribe({
      next: res => {
        this.usersArray = res.data
      },
      error: err => {}
    })
  }
}
