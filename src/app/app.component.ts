import { Component , OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MatDialog } from '@angular/material';

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
  author: string;
  date: string;
  book: string;
  index: number;

  mydata: any;

  constructor(private apiSerivce: ApiService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.index=0;
    this.apiSerivce.getJSON().subscribe(data => 
      this.mydata = data
    )
    this.index++;
    this.mydata = JSON.parse(localStorage.getItem('key')) || [];
    console.log(this.index)
  }

  editDialog(folder, date?): void {
    console.log(folder)
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '280px',
      data: JSON.parse(JSON.stringify(folder))
    });

    // console.log(this.index);
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if ((result != null) && (result['Author Name'] != null) && (result['Published Date'] != null) && (result['Book Title'] != null)) 
      {
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
      width: '280px',
    });
    
    // console.log(this.index);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(this.mydata.books.splice(i, 1))
        this.mydata.books.splice(i, 0);
        // localStorage.setItem('key', JSON.stringify( this.mydata.books ));
      }
      console.log('The dialog was closed');
    });
  }

  addDialog(): void {
    console.log("index: ", this.index);
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '280px',
      data: {
        id: this.index,
        ['Author Name']: "a",
        ['Published Date']: "b",
        ['Book Title']: "c",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed: ' ,{result});
      // if ((result != null) && (result['Author Name'] != null) && (result['Published Date'] != null) && (result['Book Title'] != null)) 
      // {
      //   folder['Author Name'] = result['Author Name'];
      //   folder['Published Date'] = result['Published Date'];
      //   folder['Book Title'] = result['Book Title'];
      // }
      console.log(result['Book Title']);
      
      this.mydata.books.push({
        ['Author Name']: result['Author Name'],
        ['Published Date']: result['Published Date'],
        ['Book Title']: result['Book Title'],
      });
        // this.rows.push( {id: this.id, name: this.name, year: this.year
    });
  }

  removeReg(word: string) {
    if (!word) return word;
      return word.replace(/[|&/;$%@"!.,0-9<>()+,]/g, '');
  }
}
