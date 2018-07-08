import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCloseNo(): void {
    console.log("clicked cancel")
    this.dialogRef.close();
  }

  onCloseOk(): void {
    console.log("clicked save")
    this.dialogRef.close(this.data);
  }

  
  ngOnInit() {
  }

}
