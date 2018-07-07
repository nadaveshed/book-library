import { Component , OnInit, Inject } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from "./my-new-interface";
import { error } from 'util';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

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

  _postsArray: MyNewInterface[];

  constructor(private apiSerivce: ApiService, public dialog: MatDialog){}

  getPosts(): void {
    this.apiSerivce.getPosts().
    subscribe(
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }

  ngOnInit(): void{
    this.getPosts();
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


}
