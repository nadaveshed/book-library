import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MyDialogComponent } from './my-dialog/my-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    // Dialog-content-example-dialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule 
  ],
  providers: [ ApiService ],
  entryComponents: [
    MyDialogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
