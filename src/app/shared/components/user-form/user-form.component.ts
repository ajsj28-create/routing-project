import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../models/users';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @ViewChild('userForm') userForm!: NgForm;
  currentDate: Date = new Date();
  isEditMode: boolean = false;
  patchUserObj!: Iuser;
  buttonFlag: boolean = false;
  msg!: string;

  constructor(
    private _uuidService: UuidService,
    private _userService: UserService,
    private _snackbarService: SnackbarService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.patchEditedUser()
  }

  patchEditedUser() {
    let id = this._activatedRoute.snapshot.params['id']
    if(id){
      this._userService.fetchSingle(id).subscribe({
        next: res => {
          this.patchUserObj = res.data
          this.isEditMode = true
          setTimeout(() => {
            this.userForm.form.patchValue(res.data)
            let role = this._activatedRoute.snapshot.queryParams['role']
            if(role === 'Viewer'){
              this.userForm.form.disable()
              this.buttonFlag = true
              this.msg = `Only Admins and Editors have access to modify details`
            }
          })
        },
        error: err => {}
      })
    }
  }

  onUserAdd() {
    if(this.userForm.valid){
      let obj = {...this.userForm.value, id: this._uuidService.uuid(), role: 'Viewer', status: 'active'}
      console.log(obj)
      this.userForm.resetForm()
      this._userService.postUser(obj).subscribe({
        next: res => {
          this._snackbarService.showAlert(res.msg, 'snack-success')
          this._router.navigate(['users'])
        },
        error: err => {}
      })      
    }else{
      this._snackbarService.showAlert(`Fill all the required fields!`, 'snack-warning')
    }
  }

  onUserUpdate() {
    if(this.userForm.valid){
      let obj = {...this.userForm.value, id: this.patchUserObj.id, role: 'Viewer', status: 'active'}
      this.userForm.resetForm()
      this._userService.patchUser(obj).subscribe({
        next: res => {
          this._snackbarService.showAlert(res.msg, 'snack-success')
          this._router.navigate(['users'])
        },
        error: err => {}
      })      
    }else{
      this._snackbarService.showAlert(`Fill all the required fields!`, 'snack-warning')
    }
  }

}
