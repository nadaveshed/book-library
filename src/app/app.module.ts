import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, 
  MatDatepickerModule, 
  MatInputModule, 
  MatIconModule, 
  MatFormFieldModule,
  MatNativeDateModule } from '@angular/material';
  import { DatePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule 
  ],
  providers: [ ApiService, MatDatepickerModule, DatePipe ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
