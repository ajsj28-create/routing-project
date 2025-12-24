import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/users';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userObj!: IUser;

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _confirmDialog: MatDialog,
    private _snackbarService: SnackbarService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.paramMap.get('id') as string
    this._userService.fetchSingle(id).subscribe({
      next: res => {
        this.userObj = res.data
      },
      error: err => {}
    })
  }

  onUserDelete() {
    let config = new MatDialogConfig()
    config.width = '400px'
    config.disableClose = true
    config.data = `Are you sure to delete user <strong>${this.userObj.name}</strong>?`
    this._confirmDialog.open(ConfirmComponent, config).afterClosed().subscribe({
      next: res => {
        if(res){
          this._userService.deleteUser(this.userObj).subscribe({
            next: res => {
              this._snackbarService.showAlert(res.msg)
              this._router.navigate(['/home'])
            },
            error: err => {}
          })
        }
      },
      error: err => {}
    })
  }



}
