import { Component , OnInit, Inject } from '@angular/core';
import { ApiService } from "./api.service"
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { Pipe, PipeTransform } from '@angular/core';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

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
    this.apiSerivce.getJSON().subscribe(data => 
      this.mydata = data
    )
    this.mydata = JSON.parse(localStorage.getItem('key')) || [];
    console.log(this.mydata)
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

  add() {
    console.log("add clicked")
  }

  removeReg(word: string) {
    if (!word) return word;
      return word.replace(/[|&/;$%@"!.,0-9<>()+,]/g, '');
  }
}
