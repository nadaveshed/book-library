import { Component , OnInit, Inject } from '@angular/core';
import { ApiService } from "./api.service"
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit{
  title = 'book library';
  animal: string;
  name: string;
  mydata: any;

  constructor(private apiSerivce: ApiService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.apiSerivce.getJSON().subscribe(data => 
      this.mydata = data
    )
    console.log(this.mydata)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '280px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if ((result != null) && (result.animal != null)) {
        this.animal = result.animal;
      }
    });
  }

  // titleCaseWord(word: string) {
  //   if (!word) return word;
  //     console.log(word)
  //     return word[0].toUpperCase() + word.substr(1).toLowerCase();
  // }

  removeReg(word: string) {
    if (!word) return word;
      return word.replace(/[|&/;$%@"!.,0-9<>()+,]/g, '');
  }
}
