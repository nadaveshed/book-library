import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule    
  ],
  providers: [ ApiService ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
