import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @ViewChild('userForm') userForm!: NgForm;

  constructor(
    private _uuidService: UuidService,
    private _userService: UserService,
    private _snackbarService: SnackbarService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onUserAdd() {
    if(this.userForm.valid){
      let obj = {...this.userForm.value, id: this._uuidService.uuid(), role: 'Viewer', status: 'active'}
      this.userForm.resetForm()
      this._userService.postUser(obj).subscribe({
        next: res => {
          this._snackbarService.showAlert(res.msg)
          this._router.navigate(['/home'])
        },
        error: err => {}
      })      
    }else{
      this._snackbarService.showAlert(`Fill all the required fields!`)
    }
  }

}
