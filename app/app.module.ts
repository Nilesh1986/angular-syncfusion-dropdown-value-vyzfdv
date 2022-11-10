import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DropDownListModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
