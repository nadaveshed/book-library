import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) { }
  
  onCloseNo(): void {
    console.log("clicked delete")
    this.dialogRef.close();
  }

  onCloseOk(): void {
    // console.log(this.CloneData)
    console.log("clicked save")
    this.dialogRef.close();
  }

  update(e) {
    console.log(e)
  }

  ngOnInit() {
  }

}
