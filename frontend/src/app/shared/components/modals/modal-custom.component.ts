import {Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-modal-custom',
  templateUrl: './modal-custom.html',
  styleUrls: ['./modal-custom.scss']
})

export class ModalCustomComponent {

  user: User = new User();

  constructor(
    public dialogRef: MatDialogRef<ModalCustomComponent>,
    @Inject( MAT_DIALOG_DATA ) public data: any ) { this.user = data.user; }


  onNoClick(): void {
    this.dialogRef.close();
  }

  editUser(): void {
   // en espera
  }

}
