import { Component , OnInit, Inject } from '@angular/core';
import { ApiService } from "./api.service"
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { Pipe, PipeTransform } from '@angular/core';

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
    console.log(this.mydata)
  }

  openDialog(folder): void {
    // this.index=i;
     console.log(folder)
    const dialogRef = 
    this.dialog.open(EditDialogComponent, {
      width: '280px',
      data:folder
     
    });
    // console.log(this.index);
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if ((result != null) && (result.author != null) && (result.date != null) && (result.book != null)) 
      {
        folder.author = result.author;
        folder.date = result.date;
        folder.book = result.book;
      }
      console.log('The dialog was closed');
    });
  }



  removeReg(word: string) {
    if (!word) return word;
      return word.replace(/[|&/;$%@"!.,0-9<>()+,]/g, '');
  }

  editRowId: any;

  toggle(id){
    this.editRowId = id;
  }

}
