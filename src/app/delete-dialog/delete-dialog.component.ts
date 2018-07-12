import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Action, Store } from "@ngrx/store";


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  onCloseNo(): void {
    console.log("clicked cancel")
    this.dialogRef.close(false);
  }

  onCloseOk(): void {
    // console.log(this.CloneData)
    console.log("clicked OK")
    // alert("alert")
    this.dialogRef.close(true);
  }

  ngOnInit() {
  }

}
