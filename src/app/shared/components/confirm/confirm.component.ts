import { Component, Inject, OnInit } from '@angular/core';
import { IUser } from '../../models/users';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  data!: IUser;

  constructor(
    private _confirmDialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) getData: IUser
  ) {
    this.data = getData
  }

  ngOnInit(): void {
  }

  onClose(select: boolean) {
    this._confirmDialogRef.close(select)
  }

}
