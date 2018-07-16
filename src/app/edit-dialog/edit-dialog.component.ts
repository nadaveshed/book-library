import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
   CloneData: any;
   registerForm: FormGroup;
   submitted = false;
   maxDate = new Date(2020, 0, 1);
   minDate = new Date(1810, 0, 1);

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>, private formBuilder: FormBuilder,
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
    console.log("clicked save")
    this.dialogRef.close(this.CloneData);
  }

  update(e: Event) {
    return (e.target as HTMLInputElement).value;
  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required, ],
      author: ['', Validators.required, ],
      title: ['', [ Validators.required, Validators.pattern('^[a-z0-9A-Z ]+') ]],
      date: ['', [ Validators.required, Validators.pattern('[0-9][0-9][./-][0-9][0-9][./-][1-9][0-9][0-9][0-9]') ] ]
    });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log("clicked save")
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.data)
    this.dialogRef.close(this.data);
  }

}
