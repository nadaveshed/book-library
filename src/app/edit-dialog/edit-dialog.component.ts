import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
   CloneData: any;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {
      this.CloneData = data, console.log("the data ", this.data)
    }
    
  onCloseNo(): void {
    console.log("clicked cancel")
    console.log(this.data)
    this.dialogRef.close(null);
  }

  onCloseOk(): void {
    // console.log(this.CloneData)
    console.log("clicked save")
    this.dialogRef.close(this.CloneData);
  }

  update(e: Event) {
    return (e.target as HTMLInputElement).value;
  }
  
  ngOnInit() {
  }

}
