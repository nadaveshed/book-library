import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  CloneData: any;
  registerForm: FormGroup;
  submitted = false;
  maxDate = new Date(2020, 0, 1);
  minDate = new Date(1810, 0, 1);

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>, private formBuilder: FormBuilder, public datepipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {
      this.CloneData = data, console.log("the data ", this.data)
    }
    
  onCloseNo(): void {
    console.log("clicked cancel")
    this.dialogRef.close(null);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      author: ['', Validators.required],
      title: ['', [ Validators.required, Validators.pattern('^[a-z0-9A-Z ]+') ]],
      date: ['', [Validators.required, Validators.minLength(4), Validators.min(1800)]]
    //   password: ['', [Validators.required, Validators.minLength(6)]]
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

    this.dialogRef.close(this.data);
    alert('SUCCESS!!')
  }

}
