import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: { user: User }) {
  }

  confirm(): void {
    this.dialogRef.close(true); // Confirmar la eliminación
  }

  cancel(): void {
    this.dialogRef.close(false); // Cancelar la eliminación
  }

  ngOnInit(): void {
    
  }

}
