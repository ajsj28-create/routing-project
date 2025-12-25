import { Component, Inject, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  data!: Iuser;

  constructor(
    private _confirmDialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) getData: Iuser
  ) {
    this.data = getData
  }

  ngOnInit(): void {
  }

  onClose(select: boolean) {
    this._confirmDialogRef.close(select)
  }

}
