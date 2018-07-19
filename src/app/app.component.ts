import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';

import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit{
  title = 'book library';
  mydata: any;
  index: number;
  date: any;

  constructor(private apiSerivce: ApiService, public dialog: MatDialog, public datepipe: DatePipe){}

  ngOnInit(): void{
    this.apiSerivce.getJSON().subscribe(data => 
      this.mydata = data
    )
    // this.mydata = JSON.parse(localStorage.getItem('key')) || [];
  }

  editDialog(folder): void {
    console.log(folder)
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      height: '620px',
      data: JSON.parse(JSON.stringify(folder))
    });

    dialogRef.afterClosed().subscribe(result => {
      if ((result != null) && (result.id != null) && (result['Author Name'] != null) && (result['Published Date'] != null) && (result['Book Title'] != null)) 
      {
        folder.id = result.id;
        folder['Author Name'] = result['Author Name'];
        folder['Published Date'] = result['Published Date'];
        folder['Book Title'] = result['Book Title'];
      }

      console.log('The dialog was closed');
    });
  }

  deleteDialog(i): void {
    this.index=i;
    console.log(i)
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '320px',
      height: '400px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.mydata.books.splice(i, 1);
      }
      console.log('The dialog was closed');
    });
  }

  addDialog(): void {
    console.log("index: ", this.mydata.books.length+1);
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '350px',
      height: '650px',
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.mydata.books.push({
        id: result.id,
        ['Author Name']: result['Author Name'],
        ['Published Date']: this.mydate(result['Published Date']),
        ['Book Title']: result['Book Title'],
      });


    });
  }

  removeReg(word: string) {
    if (!word) return word;
      return word.replace(/[|&/:;$%@#^-_="*!.`~<>()+,]/g, '');
  }

  mydate(word: string) {
    this.date=new Date(word);
    let newdate =this.datepipe.transform(word, 'dd/MM/yyyy');
    return newdate;
  }

}
