import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss']
})
export class UserDashComponent implements OnInit {

  usersArray: Array<Iuser> = [];

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers()
    this.showFirstUser()
    this.afterDelete()
  }

  afterDelete(){
    this._userService.refreshDash$.subscribe(res => {
      if(res){
        this.showFirstUser()
      }
    })
  }

  showFirstUser(){
    if(this.usersArray.length > 0){
      this._router.navigate(['users', this.usersArray[0].id], {
        queryParams: {role: this.usersArray[0].role}
      })
    }else{
      this._router.navigate(['users'])
    }
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
