import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
   CloneData: any;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {
      this.CloneData = data, console.log("the data ", this.data)
    }
    
  onCloseNo(): void {
    console.log("clicked cancel")
    this.dialogRef.close(null);
  }

  onCloseOk(): void {
    console.log("clicked save")
    console.log(this.data)
    this.dialogRef.close(this.data);
  }

  ngOnInit() {
  }

}
